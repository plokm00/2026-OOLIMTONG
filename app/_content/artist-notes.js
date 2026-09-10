export const artists = [
  { id: "kim-juwon", editSlug: "KJW", name: "김주원", team: "미로", photo: "/artist-profiles/kim-juwon.webp" },
  { id: "kim-hyeonguk", editSlug: "KHG", name: "김현국", team: "미로", photo: "/artist-profiles/kim-hyeonguk.webp" },
  { id: "min-jihyeon", editSlug: "MJH", name: "민지현", team: "미로", photo: "/artist-profiles/min-jihyeon.webp" },
  { id: "park-soyeon", editSlug: "PSOY", name: "박소연", team: "고리", photo: "/artist-profiles/park-soyeon.webp" },
  { id: "park-suyeon", editSlug: "PSUY", name: "박수연", team: "고리", photo: "/artist-profiles/park-suyeon.webp" },
  { id: "park-jinhee", editSlug: "PJH", name: "박진희", team: "고리", photo: "/artist-profiles/park-jinhee.webp" },
  { id: "shin-jeongsuk", editSlug: "SJS", name: "신정숙", team: "네모", photo: "/artist-profiles/shin-jeongsuk.webp" },
  { id: "lee-saerom", editSlug: "LSR", name: "이새롬", team: "미로", photo: "/artist-profiles/lee-saerom.webp" },
  { id: "lee-seongsun", editSlug: "LSS", name: "이성순", team: "고리", photo: "/artist-profiles/lee-seongsun.webp" },
  { id: "lee-an", editSlug: "IAN", name: "이안", team: "고리", photo: "/artist-profiles/lee-an.webp" },
  { id: "lee-jaehong", editSlug: "LJH", name: "이재홍", team: "네모", photo: "/artist-profiles/lee-jaehong.webp" },
  { id: "lee-chaemyeong", editSlug: "LCM", name: "이채명", team: "고리", photo: "/artist-profiles/lee-chaemyeong.webp" },
  { id: "in-donguk", editSlug: "IDU", name: "인동욱", team: "미로", photo: "/artist-profiles/in-donguk.webp" },
  { id: "im-gyehwa", editSlug: "IGH", name: "임계화", team: "네모", photo: "/artist-profiles/im-gyehwa.webp" },
  { id: "cho-youngbeom", editSlug: "JYQ", name: "조영범", team: "네모 · 미로", photo: "/artist-profiles/cho-youngbeom.webp" },
  { id: "joo-jangseok", editSlug: "JJS", name: "주장석", team: "미로", photo: "/artist-profiles/joo-jangseok.webp" },
  { id: "heoyang", editSlug: "HY", name: "허양", team: "네모", photo: "/artist-profiles/heoyang.webp" },
];

// 운영 흐름을 점검하는 전용 가상 작가. 공개 작가 목록에는 포함하지 않는다.
const testArtists = [
  { id: "test-a", editSlug: "TESTA", name: "가상 작가 A", team: "미로", photo: "" },
];

// 팀별 대형 울림통의 작품명과 뜻. 9회차 이름짓기에서 정해졌다.
export const teamWorks = {
  고리: {
    title: "코아 COA",
    note: "우스꽝스러운 얼굴을 가진 이 작품을 보면 왠지 그 품에 폭 안기고 싶어집니다. 영어 core를 연상시키며 사람에게 가장 중요한 사랑의 마음을 상징하는 듯합니다. 코아는 팀의 두 아이들이 떠오르는 대로 말하여 함께 지은 이름입니다.",
  },
  네모: {
    title: "Co-Ark (합주, 合舟)",
    note: "마치 피라미드 같은 이국의 유적을 떠올리게 하는 작품입니다. 성인이 들어갈 만큼 넉넉한 내부에 모두의 소리가 조화롭게 모입니다. 팀원들의 깊은 신앙을 바탕으로, 방주(네모난 배)의 이미지에서 출발해 함께 나아가는 여정의 의미를 찾았습니다.",
  },
  미로: {
    title: "나리움 NARIUM",
    note: "팀의 한 아이는 우리가 한 일을 “나르고, 붙이고의 반복”이라고 말합니다. 흙을 나르고 이어 붙이던 작업 과정에서 따온 ‘나름’과 ‘이음’을 AI의 도움으로 합치니, 아직 발견되지 않은 세계의 광물이나 고대의 영험한 자연물의 이름처럼 들립니다.",
  },
};

export function worksOf(team) {
  return team
    .split("·")
    .map((name) => name.trim())
    .filter((name) => teamWorks[name])
    .map((name) => ({ team: name, ...teamWorks[name] }));
}

export function artistById(id) {
  return [...artists, ...testArtists].find((artist) => artist.id === id) ?? null;
}

export function artistByEditSlug(slug) {
  return [...artists, ...testArtists].find(
    (artist) => artist.editSlug === slug || artist.id === slug,
  ) ?? null;
}
