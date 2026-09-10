import { artistById } from "../../../../_content/artist-notes";
import { getPublishedArtistNote } from "../../../../_lib/artist-note-store";

export const runtime = "nodejs";

export async function GET(_request, context) {
  const { artistId } = await context.params;
  if (!artistById(artistId)) {
    return Response.json({ error: "not_found" }, { status: 404 });
  }

  try {
    const text = await getPublishedArtistNote(artistId);
    return Response.json(
      { text },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return Response.json(
      { error: "storage_unavailable" },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }
}
