import { createHash } from "node:crypto";

import { FieldValue, Timestamp } from "firebase-admin/firestore";

import { getAdminDb } from "./firebase-admin";

const DRAFTS = "artistNoteDrafts";
const PUBLIC_NOTES = "artistNotePublic";
const LOCK_MS = 2 * 60 * 1000;
const MAX_GENERATIONS = 5;

export class ArtistNoteStoreError extends Error {
  constructor(code, details = {}) {
    super(code);
    this.code = code;
    Object.assign(this, details);
  }
}

export function validEditToken(token) {
  return typeof token === "string" && /^[A-Za-z0-9_-]{16}$/.test(token);
}

export function validEditorId(editorId) {
  return typeof editorId === "string" && /^[a-f0-9-]{36}$/i.test(editorId);
}

export function hashEditToken(token) {
  return createHash("sha256").update(token).digest("hex");
}

function draftRef(token) {
  return getAdminDb().collection(DRAFTS).doc(hashEditToken(token));
}

function lockExpired(data, nowMs) {
  const expiresAt = data.lockExpiresAt;
  return !expiresAt || typeof expiresAt.toMillis !== "function" || expiresAt.toMillis() <= nowMs;
}

function publicDraft(data, readOnly) {
  return {
    artistId: data.artistId,
    answers: data.answers && typeof data.answers === "object" ? data.answers : {},
    aiDraft: typeof data.aiDraft === "string" ? data.aiDraft : "",
    revision: Number.isInteger(data.revision) ? data.revision : 0,
    generationCount: Number.isInteger(data.generationCount) ? data.generationCount : 0,
    publishedVersionId: typeof data.publishedVersionId === "string" ? data.publishedVersionId : "",
    readOnly,
  };
}

function publicVersion(snapshot) {
  const data = snapshot.data();
  return {
    id: snapshot.id,
    text: typeof data.text === "string" ? data.text : "",
    generationCount: Number.isInteger(data.generationCount) ? data.generationCount : 0,
    createdAt: typeof data.createdAt?.toMillis === "function" ? data.createdAt.toMillis() : null,
    updatedAt: typeof data.updatedAt?.toMillis === "function" ? data.updatedAt.toMillis() : null,
  };
}

function validVersionId(versionId) {
  return typeof versionId === "string" && /^[A-Za-z0-9_-]{1,64}$/.test(versionId);
}

function sanitizeDraftText(text) {
  return typeof text === "string" ? text.trim().slice(0, 20_000) : "";
}

export function sanitizeAnswers(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const entries = Object.entries(value).slice(0, 100);
  const answers = {};

  for (const [key, answer] of entries) {
    if (!/^[A-Za-z][A-Za-z0-9_]{0,63}$/.test(key)) continue;
    if (typeof answer === "string") {
      answers[key] = answer.slice(0, 300);
    } else if (Array.isArray(answer)) {
      answers[key] = answer
        .filter((item) => typeof item === "string")
        .slice(0, 20)
        .map((item) => item.slice(0, 120));
    }
  }

  return answers;
}

export async function openArtistDraft(token, editorId) {
  const tokenHash = hashEditToken(token);
  const ref = getAdminDb().collection(DRAFTS).doc(tokenHash);
  const db = getAdminDb();
  const inviteRef = db.collection("artistNoteInvites").doc(tokenHash);

  const draft = await db.runTransaction(async (transaction) => {
    const snapshot = await transaction.get(ref);
    if (!snapshot.exists) {
      const inviteSnapshot = await transaction.get(inviteRef);
      const artistId = inviteSnapshot.exists ? inviteSnapshot.data().artistId : "";
      if (!artistId) throw new ArtistNoteStoreError("invalid_link");
      const nowMs = Date.now();
      const created = {
        artistId,
        answers: {},
        aiDraft: "",
        revision: 0,
        generationCount: 0,
        lockOwner: editorId,
        lockExpiresAt: Timestamp.fromMillis(nowMs + LOCK_MS),
        createdAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      };
      transaction.create(ref, created);
      return publicDraft(created, false);
    }

    const data = snapshot.data();
    const nowMs = Date.now();
    const canClaim = !data.lockOwner || data.lockOwner === editorId || lockExpired(data, nowMs);

    if (canClaim) {
      transaction.update(ref, {
        lockOwner: editorId,
        lockExpiresAt: Timestamp.fromMillis(nowMs + LOCK_MS),
        lastOpenedAt: FieldValue.serverTimestamp(),
      });
    }

    return publicDraft(data, !canClaim);
  });

  const [versionsSnapshot, publicSnapshot] = await Promise.all([
    ref.collection("versions").orderBy("generationCount", "desc").limit(MAX_GENERATIONS).get(),
    db.collection(PUBLIC_NOTES).doc(draft.artistId).get(),
  ]);
  const drafts = versionsSnapshot.docs.map(publicVersion);
  const publishedText = publicSnapshot.exists && typeof publicSnapshot.data().text === "string"
    ? publicSnapshot.data().text
    : "";

  // Older records did not store which generated version was public. Recover that
  // relationship by comparing the existing public text to the saved versions.
  if (!draft.publishedVersionId && drafts.length) {
    draft.publishedVersionId = drafts.find((version) => version.text === publishedText)?.id || "";
  }

  return { ...draft, drafts, publishedText };
}

export async function saveArtistDraft(token, editorId, answers, revision) {
  const ref = draftRef(token);
  const db = getAdminDb();

  return db.runTransaction(async (transaction) => {
    const snapshot = await transaction.get(ref);
    if (!snapshot.exists) throw new ArtistNoteStoreError("invalid_link");

    const data = snapshot.data();
    const nowMs = Date.now();
    if (data.lockOwner !== editorId || lockExpired(data, nowMs)) {
      throw new ArtistNoteStoreError("locked");
    }

    const currentRevision = Number.isInteger(data.revision) ? data.revision : 0;
    if (revision !== currentRevision) {
      throw new ArtistNoteStoreError("conflict", { latest: publicDraft(data, false) });
    }

    const nextRevision = currentRevision + 1;
    transaction.update(ref, {
      answers,
      revision: nextRevision,
      lockExpiresAt: Timestamp.fromMillis(nowMs + LOCK_MS),
      updatedAt: FieldValue.serverTimestamp(),
    });
    return { revision: nextRevision };
  });
}

export async function verifyArtistEditor(token, editorId) {
  const snapshot = await draftRef(token).get();
  if (!snapshot.exists) throw new ArtistNoteStoreError("invalid_link");
  const data = snapshot.data();
  if (data.lockOwner !== editorId || lockExpired(data, Date.now())) {
    throw new ArtistNoteStoreError("locked");
  }
  if ((data.generationCount || 0) >= MAX_GENERATIONS) {
    throw new ArtistNoteStoreError("generation_limit");
  }
  return data;
}

export async function saveGeneratedNote(token, editorId, text) {
  const ref = draftRef(token);
  const db = getAdminDb();

  return db.runTransaction(async (transaction) => {
    const snapshot = await transaction.get(ref);
    if (!snapshot.exists) throw new ArtistNoteStoreError("invalid_link");

    const data = snapshot.data();
    const nowMs = Date.now();
    if (data.lockOwner !== editorId || lockExpired(data, nowMs)) {
      throw new ArtistNoteStoreError("locked");
    }

    const generationCount = Number.isInteger(data.generationCount) ? data.generationCount : 0;
    if (generationCount >= MAX_GENERATIONS) throw new ArtistNoteStoreError("generation_limit");

    const nextGenerationCount = generationCount + 1;
    const currentRevision = Number.isInteger(data.revision) ? data.revision : 0;
    const versionRef = ref.collection("versions").doc();

    transaction.update(ref, {
      aiDraft: text,
      generationCount: nextGenerationCount,
      lockExpiresAt: Timestamp.fromMillis(nowMs + LOCK_MS),
      updatedAt: FieldValue.serverTimestamp(),
    });
    transaction.set(versionRef, {
      text,
      generationCount: nextGenerationCount,
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    });

    return {
      generationCount: nextGenerationCount,
      revision: currentRevision,
      draft: { id: versionRef.id, text, generationCount: nextGenerationCount, createdAt: Date.now(), updatedAt: Date.now() },
    };
  });
}

export async function saveGeneratedNoteEdit(token, editorId, versionId, text) {
  if (!validVersionId(versionId)) throw new ArtistNoteStoreError("invalid_request");
  const cleanText = sanitizeDraftText(text);
  if (!cleanText) throw new ArtistNoteStoreError("invalid_request");

  const ref = draftRef(token);
  const versionRef = ref.collection("versions").doc(versionId);
  const db = getAdminDb();

  return db.runTransaction(async (transaction) => {
    const [snapshot, versionSnapshot] = await Promise.all([
      transaction.get(ref),
      transaction.get(versionRef),
    ]);
    if (!snapshot.exists || !versionSnapshot.exists) throw new ArtistNoteStoreError("invalid_link");

    const data = snapshot.data();
    const nowMs = Date.now();
    if (data.lockOwner !== editorId || lockExpired(data, nowMs)) {
      throw new ArtistNoteStoreError("locked");
    }

    const versionData = versionSnapshot.data();
    const generationCount = Number.isInteger(versionData.generationCount) ? versionData.generationCount : 0;
    const parentGenerationCount = Number.isInteger(data.generationCount) ? data.generationCount : 0;
    transaction.update(versionRef, { text: cleanText, updatedAt: FieldValue.serverTimestamp() });
    transaction.update(ref, {
      ...(generationCount === parentGenerationCount ? { aiDraft: cleanText } : {}),
      lockExpiresAt: Timestamp.fromMillis(nowMs + LOCK_MS),
      updatedAt: FieldValue.serverTimestamp(),
    });

    return { id: versionId, text: cleanText, updatedAt: nowMs };
  });
}

export async function publishSavedNote(token, editorId, versionId) {
  if (!validVersionId(versionId)) throw new ArtistNoteStoreError("invalid_request");

  const ref = draftRef(token);
  const versionRef = ref.collection("versions").doc(versionId);
  const db = getAdminDb();

  return db.runTransaction(async (transaction) => {
    const [snapshot, versionSnapshot] = await Promise.all([
      transaction.get(ref),
      transaction.get(versionRef),
    ]);
    if (!snapshot.exists || !versionSnapshot.exists) throw new ArtistNoteStoreError("invalid_link");

    const data = snapshot.data();
    const nowMs = Date.now();
    if (data.lockOwner !== editorId || lockExpired(data, nowMs)) {
      throw new ArtistNoteStoreError("locked");
    }

    const text = sanitizeDraftText(versionSnapshot.data().text);
    if (!text) throw new ArtistNoteStoreError("invalid_request");
    const publicRef = db.collection(PUBLIC_NOTES).doc(data.artistId);

    transaction.set(publicRef, {
      artistId: data.artistId,
      text,
      versionId,
      updatedAt: FieldValue.serverTimestamp(),
    });
    transaction.update(ref, {
      publishedVersionId: versionId,
      lockExpiresAt: Timestamp.fromMillis(nowMs + LOCK_MS),
      updatedAt: FieldValue.serverTimestamp(),
    });

    return { publishedVersionId: versionId };
  });
}

export async function releaseArtistDraft(token, editorId) {
  const ref = draftRef(token);
  const db = getAdminDb();
  await db.runTransaction(async (transaction) => {
    const snapshot = await transaction.get(ref);
    if (!snapshot.exists) return;
    if (snapshot.data().lockOwner === editorId) {
      transaction.update(ref, { lockOwner: FieldValue.delete(), lockExpiresAt: FieldValue.delete() });
    }
  });
}

export async function getPublishedArtistNote(artistId) {
  const snapshot = await getAdminDb().collection(PUBLIC_NOTES).doc(artistId).get();
  if (!snapshot.exists) return null;
  const text = snapshot.data().text;
  return typeof text === "string" && text.trim() ? text.trim() : null;
}

// 작가 노트 페이지는 17명 분을 한 번에 서버에서 읽어 함께 내려보낸다.
// 작가를 고를 때마다 문서를 하나씩 받아오면 매번 로딩이 보이고 읽기 횟수도 그만큼 늘어난다.
export async function getAllPublishedArtistNotes() {
  const snapshot = await getAdminDb().collection(PUBLIC_NOTES).get();
  const notes = {};
  for (const doc of snapshot.docs) {
    const text = doc.data().text;
    if (typeof text === "string" && text.trim()) notes[doc.id] = text.trim();
  }
  return notes;
}
