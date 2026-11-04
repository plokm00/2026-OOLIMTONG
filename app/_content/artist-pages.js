import { artists } from "./artist-notes";

// 울림통-변주 2026 작가 개인 페이지 — QR·NFC로 연결하는 가장 짧은 주소(/김주원 같은 한국어 이름).
//
// 채우는 방법: 아래 작가별 항목에 글을 넣으면 그 칸이 페이지에 나타난다.
// 비워 둔 칸("" 또는 [])은 페이지에 아예 그리지 않는다 — 빈 제목이나 "준비 중" 상자를 남기지 않는다.
//
//   venue       전시장소. 예: "원주시청 1층 로비"
//   venueNote   전시장소 아래 작은 안내. 예: "11월 20일 – 12월 5일 · 오전 9시 – 오후 6시"
//   workTitle   개인 작품명
//   workMeta    작품 정보 한 줄. 예: "흙, 유약 · 42 × 38 × 60 cm · 2026"
//   work        작품소개 본문 (줄바꿈 그대로 표시)
//   bio         작가소개 본문 (줄바꿈 그대로 표시)
//   nfc         NFC 태그용 콘텐츠. { title, text, links: [{ label, href }] }
//               NFC 태그에는 "/이름#nfc" 주소를 넣으면 이 칸으로 바로 열린다.
//
// 이 밖에 팀 작품(대형 울림통)과 게시된 작가 노트는 기존 데이터에서 자동으로 함께 보여 준다.
const details = {
  "kim-juwon": {},
  "kim-hyeonguk": {},
  "min-jihyeon": {},
  "park-soyeon": {},
  "park-suyeon": {},
  "park-jinhee": {},
  "shin-jeongsuk": {},
  "lee-saerom": {},
  "lee-seongsun": {},
  "lee-an": {},
  "lee-jaehong": {},
  "lee-chaemyeong": {},
  "in-donguk": {},
  "im-gyehwa": {},
  "cho-youngbeom": {},
  "joo-jangseok": {},
  heoyang: {},
};

const emptyDetail = { venue: "", venueNote: "", workTitle: "", workMeta: "", work: "", bio: "", nfc: null };

export const artistPages = artists.map((artist) => ({
  ...artist,
  ...emptyDetail,
  ...details[artist.id],
  // 주소는 한국어 이름 그대로 쓴다. 이름이 겹치면 빌드 단계에서 알아챌 수 있게 slug를 따로 둔다.
  slug: artist.name,
}));

export function artistPageBySlug(slug) {
  let name = slug;
  try {
    name = decodeURIComponent(slug);
  } catch {
    // 이미 풀린 문자열이면 그대로 쓴다.
  }
  name = name.normalize("NFC");
  return artistPages.find((artist) => artist.slug === name) ?? null;
}
