import { artistById } from "../../../_content/artist-notes";
import { addGuestbook, deleteGuestbook, editGuestbook, GuestbookError, listGuestbook } from "../../../_lib/guestbook-store";

export const runtime = "nodejs";

const noStore = { "Cache-Control": "no-store" };

export async function GET(_request, context) {
  const { artistId } = await context.params;
  if (!artistById(artistId)) return Response.json({ error: "not_found" }, { status: 404 });
  try {
    return Response.json({ entries: await listGuestbook(artistId) }, { headers: noStore });
  } catch {
    return Response.json({ error: "storage_unavailable" }, { status: 503, headers: noStore });
  }
}

export async function POST(request, context) {
  const { artistId } = await context.params;
  if (!artistById(artistId)) return Response.json({ error: "not_found" }, { status: 404 });

  let input;
  try {
    input = await request.json();
  } catch {
    return Response.json({ error: "bad_request" }, { status: 400, headers: noStore });
  }
  // 사람 눈에는 보이지 않는 칸 — 채워져 오면 자동 등록 프로그램으로 보고 조용히 무시한다.
  if (input?.website) return Response.json({ entry: null }, { headers: noStore });

  const ip = (request.headers.get("x-forwarded-for") || "").split(",")[0].trim();
  try {
    const { entry, token } = await addGuestbook(artistId, { name: input?.name, text: input?.text }, ip);
    return Response.json({ entry, token }, { headers: noStore });
  } catch (error) {
    if (error instanceof GuestbookError) {
      const status = error.code === "too_fast" ? 429 : 400;
      return Response.json({ error: error.code }, { status, headers: noStore });
    }
    return Response.json({ error: "storage_unavailable" }, { status: 503, headers: noStore });
  }
}

// 자기 글 지우기 — 남길 때 받은 열쇠가 맞을 때만 지운다.
export async function DELETE(request, context) {
  const { artistId } = await context.params;
  if (!artistById(artistId)) return Response.json({ error: "not_found" }, { status: 404 });
  let input;
  try {
    input = await request.json();
  } catch {
    return Response.json({ error: "bad_request" }, { status: 400, headers: noStore });
  }
  try {
    await deleteGuestbook(artistId, input?.id, input?.token);
    return Response.json({ ok: true }, { headers: noStore });
  } catch (error) {
    if (error instanceof GuestbookError) {
      const status = error.code === "forbidden" ? 403 : 400;
      return Response.json({ error: error.code }, { status, headers: noStore });
    }
    return Response.json({ error: "storage_unavailable" }, { status: 503, headers: noStore });
  }
}

// 자기 글 고치기 — 지우기와 같은 열쇠로 확인한다.
export async function PATCH(request, context) {
  const { artistId } = await context.params;
  if (!artistById(artistId)) return Response.json({ error: "not_found" }, { status: 404 });
  let input;
  try {
    input = await request.json();
  } catch {
    return Response.json({ error: "bad_request" }, { status: 400, headers: noStore });
  }
  try {
    const entry = await editGuestbook(artistId, input?.id, input?.token, input?.text, input?.name);
    return Response.json({ entry }, { headers: noStore });
  } catch (error) {
    if (error instanceof GuestbookError) {
      const status = error.code === "forbidden" ? 403 : error.code === "gone" ? 404 : 400;
      return Response.json({ error: error.code }, { status, headers: noStore });
    }
    return Response.json({ error: "storage_unavailable" }, { status: 503, headers: noStore });
  }
}
