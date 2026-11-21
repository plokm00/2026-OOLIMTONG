import { artistById } from "../../../_content/artist-notes";
import { addGuestbook, GuestbookError, listGuestbook } from "../../../_lib/guestbook-store";

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
    const entry = await addGuestbook(artistId, { name: input?.name, text: input?.text }, ip);
    return Response.json({ entry }, { headers: noStore });
  } catch (error) {
    if (error instanceof GuestbookError) {
      const status = error.code === "too_fast" ? 429 : 400;
      return Response.json({ error: error.code }, { status, headers: noStore });
    }
    return Response.json({ error: "storage_unavailable" }, { status: 503, headers: noStore });
  }
}
