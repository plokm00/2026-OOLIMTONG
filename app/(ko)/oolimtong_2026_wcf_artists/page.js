import ArtistNotesPage from "../../_components/artist-notes-page";
import { getAllPublishedArtistNotes } from "../../_lib/artist-note-store";

export const metadata = {
  title: "울림통-변주 2026 — 작가 노트",
  description: "울림통-변주 2026 참여 작가의 리뷰 인터뷰와 작업계획",
};

// 게시된 노트는 자주 바뀌지 않는다. 방문자마다 파이어스토어를 읽지 않도록
// 10분 간격으로만 다시 읽고, 새로 게시하면 즉시 갱신한다(access 라우트의 revalidatePath).
export const revalidate = 600;

export default async function Page() {
  let notes = null;
  try {
    notes = await getAllPublishedArtistNotes();
  } catch {
    // 저장소를 읽지 못하면 예전처럼 브라우저에서 한 명씩 받아오게 둔다.
    notes = null;
  }
  return <ArtistNotesPage notes={notes} />;
}
