import { createHash, randomBytes, timingSafeEqual } from "node:crypto";

import { FieldValue } from "firebase-admin/firestore";

import { getAdminDb } from "./firebase-admin";

// 작가 페이지 방명록(한 줄 댓글). artistGuestbook/{artistId}/entries 에 쌓는다.
// 작가마다 하위 컬렉션을 두면 날짜순 정렬에 복합 색인이 필요 없다.
// 글쓴이는 남길 때 받은 지우기 열쇠(그 브라우저에만 보관)로 자기 글을 지울 수 있다. 서버에는 열쇠의 해시만 둔다.
// 그 밖에 지울 글은 Firebase 콘솔의 artistGuestbook/{작가 id}/entries 에서 직접 지운다.

const ROOT = "artistGuestbook";
const RATE = "artistGuestbookRate";
const LIST_LIMIT = 60;
const RATE_MS = 20 * 1000;

export const NAME_MAX = 12;
export const TEXT_MAX = 100;

export class GuestbookError extends Error {
  constructor(code) {
    super(code);
    this.code = code;
  }
}

const clean = (value, max) =>
  String(value ?? "")
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);

const entries = (artistId) => getAdminDb().collection(ROOT).doc(artistId).collection("entries");

export async function listGuestbook(artistId) {
  const snap = await entries(artistId).orderBy("createdAt", "desc").limit(LIST_LIMIT).get();
  return snap.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      name: data.name || "",
      text: data.text || "",
      at: data.createdAt?.toMillis?.() ?? Date.now(),
      edited: Boolean(data.editedAt),
    };
  });
}

// 같은 사람(같은 IP)은 20초에 한 번만 남길 수 있다. IP는 그대로 저장하지 않고 해시만 남긴다.
export async function addGuestbook(artistId, { name, text }, ip) {
  const body = clean(text, TEXT_MAX);
  if (!body) throw new GuestbookError("empty");
  const who = clean(name, NAME_MAX);

  const db = getAdminDb();
  const rateRef = db.collection(RATE).doc(createHash("sha256").update(`guestbook:${ip || "unknown"}`).digest("hex"));
  const entryRef = entries(artistId).doc();
  const token = randomBytes(18).toString("base64url");

  await db.runTransaction(async (tx) => {
    const rate = await tx.get(rateRef);
    const last = rate.exists ? rate.data().lastAt?.toMillis?.() ?? 0 : 0;
    if (Date.now() - last < RATE_MS) throw new GuestbookError("too_fast");
    tx.set(rateRef, { lastAt: FieldValue.serverTimestamp() });
    tx.set(entryRef, { name: who, text: body, deleteHash: sha(token), createdAt: FieldValue.serverTimestamp() });
  });

  return { entry: { id: entryRef.id, name: who, text: body, at: Date.now() }, token };
}

const sha = (value) => createHash("sha256").update(String(value)).digest("hex");

// 남길 때 받은 열쇠가 맞는지 확인하고 그 글을 돌려준다. 없는 글이면 null.
async function ownedEntry(artistId, id, token) {
  if (typeof id !== "string" || !/^[A-Za-z0-9]{10,40}$/.test(id) || typeof token !== "string" || !token) {
    throw new GuestbookError("bad_request");
  }
  const ref = entries(artistId).doc(id);
  const snap = await ref.get();
  if (!snap.exists) return null;
  const stored = Buffer.from(String(snap.data().deleteHash || ""), "utf8");
  const given = Buffer.from(sha(token), "utf8");
  if (stored.length !== given.length || !timingSafeEqual(stored, given)) throw new GuestbookError("forbidden");
  return { ref, data: snap.data() };
}

export async function deleteGuestbook(artistId, id, token) {
  const owned = await ownedEntry(artistId, id, token);
  if (owned) await owned.ref.delete();
}

// 자기 글 고치기 — 이름과 글을 바꾼다(날짜는 그대로). 글이 바뀌면 '수정됨' 표시가 붙는다.
// 이름만 바로잡은 경우에는 '수정됨'을 붙이지 않는다. name을 보내지 않으면 이름은 그대로 둔다.
export async function editGuestbook(artistId, id, token, text, name) {
  const body = clean(text, TEXT_MAX);
  if (!body) throw new GuestbookError("empty");
  const owned = await ownedEntry(artistId, id, token);
  if (!owned) throw new GuestbookError("gone");
  const who = name === undefined ? owned.data.name || "" : clean(name, NAME_MAX);
  const textChanged = owned.data.text !== body;
  const nameChanged = (owned.data.name || "") !== who;
  const patch = {};
  if (textChanged) Object.assign(patch, { text: body, editedAt: FieldValue.serverTimestamp() });
  if (nameChanged) patch.name = who;
  if (textChanged || nameChanged) await owned.ref.update(patch);
  return { id, name: who, text: body, edited: textChanged || Boolean(owned.data.editedAt) };
}
