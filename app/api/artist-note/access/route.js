import { revalidatePath } from "next/cache";

import {
  ArtistNoteStoreError,
  openArtistDraft,
  releaseArtistDraft,
  publishSavedNote,
  sanitizeAnswers,
  saveGeneratedNoteEdit,
  saveArtistDraft,
  validEditorId,
  validEditToken,
} from "../../../_lib/artist-note-store";
import { artistById, worksOf } from "../../../_content/artist-notes";

export const runtime = "nodejs";

function json(body, init = {}) {
  return Response.json(body, {
    ...init,
    headers: { ...init.headers, "Cache-Control": "no-store" },
  });
}

function sameOrigin(request) {
  const requestUrl = new URL(request.url);
  const origin = request.headers.get("origin");
  const fetchSite = request.headers.get("sec-fetch-site");
  return !((origin && origin !== requestUrl.origin) || (fetchSite && fetchSite !== "same-origin"));
}

async function readRequest(request) {
  if (!sameOrigin(request)) throw new ArtistNoteStoreError("forbidden");
  const length = Number(request.headers.get("content-length") || 0);
  if (length > 50_000) throw new ArtistNoteStoreError("payload_too_large");
  let body;
  try {
    body = await request.json();
  } catch {
    throw new ArtistNoteStoreError("invalid_request");
  }
  if (!validEditToken(body.token) || !validEditorId(body.editorId)) {
    throw new ArtistNoteStoreError("invalid_link");
  }
  return body;
}

function errorResponse(error) {
  const code = error instanceof ArtistNoteStoreError ? error.code : "storage_unavailable";
  const status = {
    forbidden: 403,
    invalid_link: 404,
    locked: 423,
    conflict: 409,
    invalid_request: 400,
    payload_too_large: 413,
  }[code] || 503;
  return json({ error: code, ...(error.latest ? { latest: error.latest } : {}) }, { status });
}

export async function POST(request) {
  try {
    const { token, editorId, action } = await readRequest(request);
    if (action === "release") {
      await releaseArtistDraft(token, editorId);
      return json({ ok: true });
    }
    const draft = await openArtistDraft(token, editorId);
    const artist = artistById(draft.artistId);
    if (!artist) throw new ArtistNoteStoreError("invalid_link");
    return json({ ...draft, artist, works: worksOf(artist.team) });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function PATCH(request) {
  try {
    const { token, editorId, answers, revision, action, versionId, text } = await readRequest(request);
    if (action === "save_version") {
      return json(await saveGeneratedNoteEdit(token, editorId, versionId, text));
    }
    const cleanAnswers = sanitizeAnswers(answers);
    if (!cleanAnswers || !Number.isInteger(revision)) throw new ArtistNoteStoreError("invalid_request");
    return json(await saveArtistDraft(token, editorId, cleanAnswers, revision));
  } catch (error) {
    return errorResponse(error);
  }
}

export async function PUT(request) {
  try {
    const { token, editorId, versionId } = await readRequest(request);
    const result = await publishSavedNote(token, editorId, versionId);
    // 작가 노트 페이지는 게시된 노트를 서버에서 미리 담아 내려보낸다. 방금 게시한 글이
    // 다음 재생성 주기까지 묻히지 않도록 여기서 바로 캐시를 비운다.
    revalidatePath("/oolimtong_2026_wcf_artists");
    return json(result);
  } catch (error) {
    return errorResponse(error);
  }
}

export async function DELETE(request) {
  try {
    const { token, editorId } = await readRequest(request);
    await releaseArtistDraft(token, editorId);
    return json({ ok: true });
  } catch (error) {
    return errorResponse(error);
  }
}
