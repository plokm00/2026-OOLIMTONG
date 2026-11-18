import { artists } from "./artist-notes";

// 울림통-변주 2026 작가 개인 페이지 — QR·NFC로 연결하는 한국어 이름 주소(/artist/김주원).
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
//   music       음원 파일: { src: "/artist-music/음원.mp3", title: "곡 제목" }
//               유튜브: { youtubeUrl: "https://youtu.be/영상ID", title: "곡 제목" }
//               둘 중 하나를 선택한다. 전체 공통 음원은 emptyDetail.music에,
//               작가별 음원/영상은 아래 항목에 넣는다.
//   nfc         NFC 태그용 콘텐츠. { title, text, links: [{ label, href }] }
//               NFC 태그에는 "/artist/이름#nfc" 주소를 넣으면 이 칸으로 바로 열린다.
//
// ── 전시 프로필(새 디자인) ── profile 칸을 채운 작가는 흰 바탕의 전시 프로필 페이지로 그린다.
//   (2026-11 시안: 허양·김주원 먼저. 디자인이 정해지면 나머지 15인에게 같은 칸을 채운다.)
//   profile.tagline   미니배너의 한 줄 소개
//   profile.workTitle / materials / size / year   미니배너의 작품 정보
//   profile.summary   미니배너의 작품 요약 문장
//   profile.workImage 맨 위에 크게 보이는 작품 사진(배경이 투명한 webp)
//   profile.photos    작업하는 작가 사진 3장(4:5) [{ src, alt }]
//   profile.venue     개인 모뉴먼트 전시장소 { name, address, period, hours }
//   profile.playlist  배경음악. [{ src, title, note }]
//                     v_ 변주곡은 title을 "소녀들의 언덕 테마 변주곡"으로, note에 편곡 성격을 적는다.
//
// 이 밖에 팀 작품(대형 울림통)과 게시된 작가 노트는 기존 데이터에서 자동으로 함께 보여 준다.
const details = {
  "kim-juwon": {
    profile: {
      tagline: "피아노를 잘 치는 초등학생",
      workTitle: "카메라",
      materials: "점토, 비소성, 파스텔과 플렉스로 마감",
      size: "14 × 10 × 8 cm",
      year: "2026",
      summary: "작가는 울림통이 소리를 담듯,\n카메라가 추억을 담는다고 생각했습니다.",
      workImage: "/artist-media/kim-juwon-work.webp",
      photos: [
        { src: "/artist-media/kim-juwon-photo-1.webp", alt: "나리움 터에서 흙을 나르는 김주원" },
        { src: "/artist-media/kim-juwon-photo-2.webp", alt: "나리움의 첫 타래를 놓는 김주원" },
        { src: "/artist-media/kim-juwon-photo-3.webp", alt: "흙 타래를 들고 있는 김주원" },
      ],
      venue: {
        name: "미쁘다 갤러리카페",
        address: "원주시 미래로 3, 107호",
        period: "2026.11.21.(토) ~ 11.28.(토)",
        hours: "11:00 – 17:00 · 일요일 휴무",
      },
      // 피아노 치는 작가 → 피아노 변주, 추억을 담는 카메라 → 아련한 로파이 변주
      playlist: [
        { src: "/artist-music/variation-gentlepiano.mp3", title: "소녀들의 언덕 테마 변주곡", note: "피아노" },
        { src: "/artist-music/variation-ambientlofi.mp3", title: "소녀들의 언덕 테마 변주곡", note: "앰비언트 로파이" },
      ],
    },
  },
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
  heoyang: {
    profile: {
      tagline: "루카의 영원한 소울메이트",
      workTitle: "SOUL Ⅰ",
      materials: "점토, 비소성, 콩기름과 방수제로 마감",
      size: "9 × 14 × 22 cm",
      year: "2026",
      summary: "작가는 남편과 함께, 소리를 전하는 울림통,\n‘소울’이라는 멋진 제목을 떠올렸습니다.",
      workImage: "/artist-media/heoyang-work.webp",
      photos: [
        { src: "/artist-media/heoyang-photo-1.webp", alt: "〈SOUL Ⅰ〉의 타래를 쌓는 허양" },
        { src: "/artist-media/heoyang-photo-2.webp", alt: "〈SOUL Ⅰ〉에 무늬를 다듬는 허양" },
        { src: "/artist-media/heoyang-photo-3.webp", alt: "완성한 Co-Ark 앞의 허양" },
      ],
      venue: {
        name: "문막성당 로비",
        address: "원주시 건등로 10-18",
        period: "2026.11.21. ~ 12.13.",
        hours: "",
      },
      // 작가가 NFC에 연결하려던 카치니의 아베마리아를 첫 곡으로, 성당 로비 전시에 맞춰 바흐 칸타타 변주를 함께
      playlist: [
        { src: "/artist-music/heoyang-caccini-ave-maria.mp3", title: "카치니의 아베마리아", note: "" },
        { src: "/artist-music/variation-bachcantata.mp3", title: "소녀들의 언덕 테마 변주곡", note: "바흐 칸타타" },
        { src: "/artist-music/heoyang-arcadelt-ave-maria.mp3", title: "아르카델트의 아베마리아", note: "" },
      ],
    },
  },
};

const emptyDetail = { venue: "", venueNote: "", workTitle: "", workMeta: "", work: "", bio: "", music: null, nfc: null, profile: null };

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
