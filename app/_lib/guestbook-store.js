import { createHash } from "node:crypto";

import { FieldValue } from "firebase-admin/firestore";

import { getAdminDb } from "./firebase-admin";

// 작가 페이지 방명록(한 줄 댓글). artistGuestbook/{artistId}/entries 에 쌓는다.
// 작가마다 하위 컬렉션을 두면 날짜순 정렬에 복합 색인이 필요 없다.
// 지울 글은 Firebase 콘솔의 artistGuestbook/{작가 id}/entries 에서 직접 지운다.

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

  await db.runTransaction(async (tx) => {
    const rate = await tx.get(rateRef);
    const last = rate.exists ? rate.data().lastAt?.toMillis?.() ?? 0 : 0;
    if (Date.now() - last < RATE_MS) throw new GuestbookError("too_fast");
    tx.set(rateRef, { lastAt: FieldValue.serverTimestamp() });
    tx.set(entryRef, { name: who, text: body, createdAt: FieldValue.serverTimestamp() });
  });

  return { id: entryRef.id, name: who, text: body, at: Date.now() };
}
