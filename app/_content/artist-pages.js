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
//   (2026-11: 17인 모두 이 디자인을 쓴다.)
//   profile.tagline   미니배너의 한 줄 소개
//   profile.nameEn    이름 아래 작은 영문 이름(선택)
//   profile.workTitle / materials / size / year   미니배너의 작품 정보
//   profile.summary   미니배너의 작품 요약 문장
//   profile.workImage 맨 위에 크게 보이는 작품 사진(배경이 투명한 webp)
//   profile.photos    작업하는 작가 사진 3장(4:5) [{ src, alt }]
//   profile.venue     개인 모뉴먼트 전시장소 { name, address, period, hours, label? }
//                     label은 "○○ 모뉴먼트 전시"에 이름 대신 쓸 말(선택)
//   profile.installPhotos 전시 전경 사진 [{ src, alt }] — 비어 있으면 빈 칸만 둔다(이미지 태그 없음)
//   profile.playlist  배경음악. [{ src, title, note }] — 변주곡은 작가마다 1곡
//                     v_ 변주곡은 title을 "소녀들의 언덕 테마 변주곡"으로, note에 편곡 성격을 적는다.
//
// 이 밖에 팀 작품(대형 울림통)과 게시된 작가 노트는 기존 데이터에서 자동으로 함께 보여 준다.
// 프로필에서 자주 쓰는 전시장소·음원·사진 묶음
const MUNMAK_CHURCH = { name: "문막성당 로비", address: "원주시 건등로 10-18", period: "2026.11.21. ~ 12.13.", hours: "" };
const TTEUL = { name: "브런치카페 뜰", address: "원주시 봉대길 41-1", period: "2026.11.24.(화) ~ 11.29.(일)", hours: "" };
const MIPPEUDA = { name: "미쁘다 갤러리카페", address: "원주시 미래로 3, 107호", period: "2026.11.21.(토) ~ 11.28.(토)", hours: "11:00 – 17:00 · 일요일 휴무" };
const PRIVATE_SPACE = { name: "작가 개인 공간", address: "", period: "상설전시", hours: "초대 관람만 가능" };

function variation(name, note) {
  return { src: `/artist-music/variation-${name}.mp3`, title: "소녀들의 언덕 테마 변주곡", note };
}

function photos(id, alts) {
  return alts.map((alt, i) => ({ src: `/artist-media/${id}-photo-${i + 1}.webp`, alt }));
}

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
      // 17인 목록 카드에 마우스를 올리면 프로필 대신 보이는 모뉴먼트 컷아웃(홍보물 망점 이미지에서 잘라냄)
      monument: "/artist-media/kim-juwon-monument.webp",
      photos: [
        { src: "/artist-media/kim-juwon-photo-1.webp", alt: "나리움 안에 들어가 앉은 김주원" },
        { src: "/artist-media/kim-juwon-photo-2.webp", alt: "나리움의 첫 타래를 놓는 김주원" },
        { src: "/artist-media/kim-juwon-photo-3.webp", alt: "흙 타래를 들고 있는 김주원" },
      ],
      venue: {
        name: "미쁘다 갤러리카페",
        address: "원주시 미래로 3, 107호",
        period: "2026.11.21.(토) ~ 11.28.(토)",
        hours: "11:00 – 17:00 · 일요일 휴무",
      },
      // 피아노 치는 작가 → 피아노 변주. 변주곡은 작가마다 한 곡만 고른다.
      playlist: [
        { src: "/artist-music/variation-gentlepiano.mp3", title: "소녀들의 언덕 테마 변주곡", note: "피아노" },
      ],
    },
  },
  "kim-hyeonguk": {
    profile: {
      tagline: "흙 작업이 처음이었던 회사원",
      workTitle: "북",
      materials: "점토, 비소성, 콩기름으로 마감",
      size: "28 × 27 × 11 cm",
      year: "2026",
      summary: "작가는 태초의 인공 울림통으로 가슴을\n울리는 악기, 북을 가장 먼저 떠올렸습니다.",
      workImage: "/artist-media/kim-hyeonguk-work.webp",
      photos: photos("kim-hyeonguk", ["나리움 터에 흙 타래를 놓는 김현국", "나리움의 벽을 쌓는 김현국", "야외에서 작품에 마감재를 바르는 김현국"]),
      venue: MIPPEUDA,
      // 북 → 팀파니와 북이 이끄는 변주
      playlist: [variation("timpanidrums", "팀파니·드럼")],
    },
  },
  "min-jihyeon": {
    profile: {
      tagline: "바쁜 일상을 보내는 아기 돌봄 종사자",
      workTitle: "명상",
      materials: "점토, 비소성, 콩기름으로 마감",
      size: "50 × 50 × 32 cm",
      year: "2026",
      summary: "작가는 치악산이 보이는 거실의 창가에\n머리를 넣고 쉴 수 있는 자리를 구상합니다.",
      workImage: "/artist-media/min-jihyeon-work.webp",
      photos: photos("min-jihyeon", ["둥근 벽에 타래를 붙이는 민지현", "작업대에서 형태를 만드는 민지현", "아이와 함께 흙을 빚는 민지현"]),
      venue: PRIVATE_SPACE,
      // 머리를 넣고 쉬는 자리 → 느긋한 앰비언트 로파이
      playlist: [variation("ambientlofi", "앰비언트 로파이")],
    },
  },
  "park-soyeon": {
    profile: {
      tagline: "나의 시간과 이야기를 간직하고 싶은 두 딸의 엄마",
      workTitle: "한 여름의 추억",
      materials: "점토, 비소성, 콩기름으로 마감",
      size: "14 × 12 × 35 cm",
      year: "2026",
      summary: "작가는 즐거웠던 여름 시절을\n소라와 닮은 향꽂이에 담고자 합니다.",
      workImage: "/artist-media/park-soyeon-work.webp",
      photos: photos("park-soyeon", ["고리 팀과 함께한 박소연", "작품을 빚는 박소연", "이안과 함께 도안을 그리는 박소연"]),
      venue: TTEUL,
      // 소라처럼 바람이 울리는 오카리나
      playlist: [variation("okarina01", "오카리나")],
    },
  },
  "park-suyeon": {
    profile: {
      tagline: "학교와 학원을 바삐 다니는 학생",
      workTitle: "마루",
      materials: "점토, 비소성, 파스텔과 픽사티브로 마감",
      size: "16 × 16 × 24 cm",
      year: "2026",
      summary: "작가는 마루의 편안함을 둥근 공간에 담아\n잠시 쉬어 가고 싶은 마음을 전합니다.",
      workImage: "/artist-media/park-suyeon-work.webp",
      photos: photos("park-suyeon", ["코아 앞에서 웃는 박수연", "〈마루〉를 빚는 박수연", "야외에서 〈마루〉를 마감하는 박수연"]),
      venue: PRIVATE_SPACE,
      // 잠시 쉬어 가는 마음 → 느린 슬로코어
      playlist: [variation("slowcore", "슬로코어")],
    },
  },
  "park-jinhee": {
    profile: {
      tagline: "흙이 손에 묻는 것을 싫어했던 여섯 살 아이",
      workTitle: "잭오랜턴",
      materials: "점토, 비소성, 콩기름으로 마감",
      size: "8 × 7 × 12 cm",
      year: "2026",
      summary: "작가는 할로윈 호박을 닮은 형상에\n흙을 만진 손자국을 그대로 남겼습니다.",
      workImage: "/artist-media/park-jinhee-work.webp",
      photos: photos("park-jinhee", ["흙을 주무르는 박진희", "작은 울림통을 빚는 박진희의 손", "울림통 좌대에 올라 만세하는 박진희"]),
      venue: TTEUL,
      // 여섯 살 작가의 신나는 할로윈 → 치어리딩
      playlist: [variation("cheerleading", "치어리딩")],
    },
  },
  "shin-jeongsuk": {
    profile: {
      tagline: "조카가 하는 일이 궁금했던 큰엄마",
      workTitle: "별을 보다",
      materials: "점토, 비소성, 콩기름으로 마감",
      size: "13 × 13 × 19 cm",
      year: "2026",
      summary: "작가는 어릴 적 자주 보고 만들던\n익숙한 형태를 다시 발견합니다.",
      workImage: "/artist-media/shin-jeongsuk-work.webp",
      photos: photos("shin-jeongsuk", ["네모 팀과 함께한 신정숙", "완성한 Co-Ark 곁의 신정숙", "Co-Ark의 지붕을 다듬는 신정숙"]),
      venue: MUNMAK_CHURCH,
      // 별을 보는 마음 → 현악 변주(성당 로비 전시)
      playlist: [variation("strings", "현악")],
    },
  },
  "lee-saerom": {
    profile: {
      tagline: "흙 작업을 배우고 싶었던 두 딸의 엄마",
      workTitle: "울림의 틈",
      materials: "점토, 비소성, 콩기름으로 마감",
      size: "16 × 16 × 22 cm",
      year: "2026",
      summary: "작가는 울림통 안에서 태어난 소리가\n세상을 향하도록, 곳곳에 틈을 열었습니다.",
      workImage: "/artist-media/lee-saerom-work.webp",
      photos: photos("lee-saerom", ["작업대에서 흙을 빚는 이새롬", "나리움 터에 타래를 놓는 이새롬", "나리움 터의 이새롬"]),
      venue: { name: "카페 아이하다", address: "원주시 입춘로 45, 222호", period: "2026.11.21. ~ 12.13.", hours: "" },
      // 틈으로 소리가 새어 나오듯 덜어 낸 미니멀 변주
      playlist: [variation("minimal", "미니멀")],
    },
  },
  "lee-seongsun": {
    profile: {
      tagline: "흙 작업을 하는 현역 작가",
      workTitle: "코아",
      materials: "점토, 비소성, 아교액으로 마감",
      size: "33 × 18 × 24 cm",
      year: "2026",
      summary: "작가는 흙이 작품의 형태를 정했다고 합니다.\n그 작품의 이름은 ‘예쁜 코’를 뜻합니다.",
      workImage: "/artist-media/lee-seongsun-work.webp",
      photos: photos("lee-seongsun", ["〈코아〉 곁에서 작업하는 이성순", "〈코아〉를 빚는 이성순", "흙 조각을 고르는 이성순"]),
      venue: { name: "클라운지 2호점", address: "원주시 마재3로 24-54, 101호", period: "2026.11.21. ~ 12.13.", hours: "" },
      // ‘예쁜 코’ → 아코디언 샹송
      playlist: [variation("accordionchanson", "아코디언 샹송")],
    },
  },
  "lee-an": {
    profile: {
      tagline: "여유를 즐기며 지내는 두 딸의 아빠",
      nameEn: "IAN PATRICK JOHNSTON",
      workTitle: "자유",
      materials: "점토, 비소성, 콩기름으로 마감",
      size: "16 × 14 × 23 cm",
      year: "2026",
      summary: "작가는 처음 구상과 달리 빚어진 형태에서\n흙이 지닌 특유의 자유로움을 발견합니다.",
      workImage: "/artist-media/lee-an-work.webp",
      photos: photos("lee-an", ["코아의 벽을 쌓는 이안", "딸과 함께 타래를 놓는 이안", "고리 안에 앉아 보는 이안"]),
      venue: { ...TTEUL, label: "IAN" },
      // 자유 → 컨트리
      playlist: [variation("country", "컨트리")],
    },
  },
  "lee-jaehong": {
    profile: {
      tagline: "엘리사벳의 영원한 소울메이트",
      workTitle: "SOUL Ⅱ",
      materials: "점토, 비소성, 콩기름과 방수제로 마감",
      size: "11 × 18 × 28 cm",
      year: "2026",
      summary: "작가는 아내와 서로 닮은 형상을 빚었고,\n부부의 다정함은 주변을 온화하게 했습니다.",
      workImage: "/artist-media/lee-jaehong-work.webp",
      photos: photos("lee-jaehong", ["Co-Ark의 표면을 다듬는 이재홍", "완성한 Co-Ark 곁의 이재홍", "Co-Ark에 마감재를 뿌리는 이재홍"]),
      venue: MUNMAK_CHURCH,
      // 작가의 아베마리아 두 곡, 그리고 〈SOUL Ⅰ〉의 허양과 짝을 이루는 바흐 칸타타 변주
      playlist: [
        { src: "/artist-music/lee-jaehong-gounod-ave-maria.mp3", title: "구노의 아베마리아", note: "" },
        variation("bachcantata", "바흐 칸타타"),
        { src: "/artist-music/lee-jaehong-schubert-ave-maria.mp3", title: "슈베르트의 아베마리아", note: "" },
      ],
    },
  },
  "lee-chaemyeong": {
    profile: {
      tagline: "작가 활동을 하는 미술 교사",
      workTitle: "라트나",
      materials: "점토, 비소성, 콩기름으로 마감",
      size: "18.5 × 16.5 × 32 cm",
      year: "2026",
      summary: "작가는 물방울을 닮은 형상에\n인도어로 ‘보석’을 뜻하는 이름을 붙였습니다.",
      workImage: "/artist-media/lee-chaemyeong-work.webp",
      photos: photos("lee-chaemyeong", ["〈라트나〉를 다듬는 이채명", "물레 위의 작품을 다듬는 이채명", "코아의 안쪽을 다듬는 이채명"]),
      venue: PRIVATE_SPACE,
      // 인도어 이름 ‘라트나’ → 볼리우드
      playlist: [variation("bollywood", "볼리우드")],
    },
  },
  "in-donguk": {
    profile: {
      tagline: "현역 미술가",
      workTitle: "갈무리",
      materials: "점토, 비소성",
      size: "17 × 16 × 24 cm",
      year: "2026",
      summary: "작가는 생각이나 마음을 잘 점검하고\n다져간다는 뜻을 담은 형상을 지었습니다.",
      workImage: "/artist-media/in-donguk-work.webp",
      photos: photos("in-donguk", ["나리움의 타래를 쌓는 인동욱", "나리움 터에서 작업하는 인동욱", "나리움의 벽을 다지는 인동욱"]),
      venue: { name: "취병2리 마을회관", address: "원주시 취병로 644", period: "2026.11.21. ~ 12.13.", hours: "" },
      // 작가의 곡 Catch the Rainbow와 어울리는 록 변주
      playlist: [
        { src: "/artist-music/in-donguk-catch-the-rainbow.mp3", title: "Catch the Rainbow", note: "" },
        variation("rock", "록"),
      ],
    },
  },
  "im-gyehwa": {
    profile: {
      tagline: "새로운 것을 만난 가정주부",
      workTitle: "토토리",
      materials: "점토, 비소성, 콩기름으로 마감",
      size: "11 × 12 × 17 cm",
      year: "2026",
      summary: "작가는 도토리 캐릭터처럼 귀여운 형상을 빚고\n동료들과 함께 즉석에서 이름을 지었습니다.",
      workImage: "/artist-media/im-gyehwa-work.webp",
      photos: photos("im-gyehwa", ["흙 그릇을 빚는 임계화", "완성한 Co-Ark 곁의 임계화", "Co-Ark의 표면을 그을리는 임계화"]),
      venue: MUNMAK_CHURCH,
      // 귀여운 도토리 → 통통 튀는 마림바·셰이커
      playlist: [variation("malimbashaker02", "마림바·셰이커")],
    },
  },
  "cho-youngbeom": {
    profile: {
      tagline: "아이들에게 미술을 가르치는 현역 조각가",
      workTitle: "자유를 짓다",
      materials: "점토, 비소성, 콩기름과 오일스테인으로 마감",
      size: "가변설치",
      year: "2026",
      summary: "작가는 고래를 조각하는 작은 피규어에\n자유를 만들어 가는 자신을 투영합니다.",
      workImage: "/artist-media/cho-youngbeom-work.webp",
      photos: photos("cho-youngbeom", ["완성한 Co-Ark 곁의 조영범", "작업 테이블의 조영범", "나리움을 다듬는 조영범"]),
      venue: { name: "해피스토리", address: "원주시 현충로 322번길 8", period: "2026.11.21. ~ 12.12.", hours: "일요일 휴무" },
      // 작가의 곡 TRIP과, 고래가 헤엄치는 듯한 시네마틱 변주
      playlist: [
        { src: "/artist-music/cho-youngbeom-trip.mp3", title: "TRIP", note: "" },
        variation("cinematic", "시네마틱"),
      ],
    },
  },
  "joo-jangseok": {
    profile: {
      tagline: "연극과 무용을 기획하는 문화예술 교육자",
      workTitle: "발성",
      materials: "점토, 비소성, 콩기름으로 마감",
      size: "14 × 13 × 20 cm",
      year: "2026",
      summary: "작가는 배우가 목소리로 감정을 표현하는\n순간을 형태로 옮겼습니다.",
      workImage: "/artist-media/joo-jangseok-work.webp",
      photos: photos("joo-jangseok", ["〈발성〉을 빚는 주장석", "〈발성〉의 입을 다듬는 주장석", "야외 현장에서 대형 울림통을 쌓는 주장석"]),
      venue: { name: "예무아트컴퍼니 연습실", address: "원주시 현석길 11-3, 지하", period: "2026.11.21. ~ 12.13.", hours: "" },
      // 무대의 목소리 → 타악기가 이끄는 관현악 변주
      playlist: [variation("percussion-ledorchestral", "타악 관현악")],
    },
  },
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
        { src: "/artist-media/heoyang-photo-3.webp", alt: "이재홍과 함께 Co-Ark를 다듬는 허양" },
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
