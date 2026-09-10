import { notFound } from "next/navigation";

import ArtistNoteEditorPage from "../../../_components/artist-note-editor-page";
import { artistByEditSlug } from "../../../_content/artist-notes";

export const metadata = {
  title: "울림통-변주 2026 — 작가 노트 편집",
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};

export default async function Page({ params }) {
  const { artistId } = await params;
  const artist = artistByEditSlug(artistId);
  if (!artist) notFound();
  return <ArtistNoteEditorPage expectedArtistId={artist.id} />;
}
