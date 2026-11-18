import { notFound } from "next/navigation";

import ArtistPage from "../../../_components/artist-page";
import ArtistProfilePage from "../../../_components/artist-profile-page";
import ArtistExhibitionPage from "../../../_components/artist-exhibition-page";
import { artistExhibitions } from "../../../_content/artist-exhibitions";
import { artistPageBySlug, artistPages } from "../../../_content/artist-pages";
import { getPublishedArtistNote } from "../../../_lib/artist-note-store";

// 17인의 이름만 주소로 연다. 그 밖의 한 단어 주소는 지금처럼 404가 난다.
export const dynamicParams = false;

// 게시된 작가 노트만 파이어스토어에서 읽는다. 방문자마다 읽지 않도록 10분 간격으로만 다시 만들고,
// 노트를 새로 게시하면 access 라우트에서 곧바로 갱신한다.
export const revalidate = 600;

export function generateStaticParams() {
  return artistPages.map((artist) => ({ name: artist.slug }));
}

export async function generateMetadata({ params }) {
  const { name: slug } = await params;
  const artist = artistPageBySlug(slug);
  if (!artist) return {};
  const exhibition = artistExhibitions[artist.id];
  const title = `${artist.name} — 울림통-변주 2026`;
  const workTitle = artist.profile?.workTitle ?? exhibition?.title ?? artist.workTitle;
  const description = workTitle
    ? `${artist.name} 〈${workTitle}〉 · 울림통-변주 2026 참여 작가`
    : `울림통-변주 2026 참여 작가 ${artist.name}`;
  const url = `https://ninnikkraft.vercel.app/artist/${encodeURIComponent(artist.slug)}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "profile",
      url,
      title,
      description,
      images: [artist.profile?.workImage
        ? { url: `https://ninnikkraft.vercel.app${artist.profile.workImage}`, alt: `${artist.name} 〈${artist.profile.workTitle}〉` }
        : exhibition
        ? { url: `https://ninnikkraft.vercel.app/artist-exhibition/${artist.id}/artwork.webp`, alt: exhibition.artworkAlt }
        : { url: `https://ninnikkraft.vercel.app${artist.photo}`, alt: `${artist.name} 프로필 사진` }],
    },
  };
}

export default async function Page({ params }) {
  const { name: slug } = await params;
  const artist = artistPageBySlug(slug);
  if (!artist) notFound();

  let note = null;
  try {
    note = await getPublishedArtistNote(artist.id);
  } catch {
    // 저장소를 읽지 못해도 나머지 내용은 그대로 보여 준다.
    note = null;
  }

  // 허양·김주원은 흰 바탕 전시 프로필 시안(profile), 이채명·박진희는 exhibition 시안, 나머지는 기존 페이지.
  if (artist.profile) return <ArtistProfilePage artist={artist} note={note} />;
  const exhibition = artistExhibitions[artist.id];
  return exhibition
    ? <ArtistExhibitionPage artist={artist} exhibition={exhibition} note={note} />
    : <ArtistPage artist={artist} note={note} />;
}
