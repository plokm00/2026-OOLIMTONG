import ArtistIndexPage from "../../_components/artist-index-page";
import { artistPages } from "../../_content/artist-pages";

const url = "https://ninnikkraft.vercel.app/artist";
const title = "참여 작가 17인 — 울림통-변주 2026";
const description = "울림통-변주 2026 참여 작가 17인의 작가와 작품 이야기";

export const metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { type: "website", url, title, description },
};

export default function Page() {
  return <ArtistIndexPage artists={artistPages} />;
}
