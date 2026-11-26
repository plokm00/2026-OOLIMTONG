// 시민작가 17인 목록(/artist) 위쪽에 들어가는 프로젝트 소개와 대형 울림통 세 기.
// 글은 모두 리플렛 내지(리플렛_내지_print)의 최종 문구를 그대로 옮겼다.
// members 의 name 은 /artist/이름 개인 페이지로 이어진다(work 는 각자의 모뉴먼트 제목).

export const projectIntro = {
  title: "울림은 여러 가닥의 선율을 타고 -",
  paragraphs: [
    "김아영 작가의 울림통은 상상을 울려주는 토굴 같은 조형물로, 니닉 세계관 안에서는 다른 차원으로 이어지는 통로로 등장합니다.",
    "2026년 〈울림통-변주〉는 울림통을 짓는 전 과정을 시민과 함께한 실험적인 프로젝트입니다. 참여한 시민작가 17명은 세 팀을 이루어 대형 울림통 세 기를 공동 제작했고, 저마다의 뜻을 담은 작은 모뉴먼트를 완성했습니다.",
    "흙 작업이 좋아서, 가족과 함께 만들고 싶어서, 평소 접하기 어려운 대형 작품을 경험해 보고 싶어서, 혹은 재미있을 것 같아서. 각자의 삶에서 품은 호기심이 모여 만들어낸 하나의 울림. 상상은 여러 모습으로 변주되어 새로운 공간으로 이어집니다.",
  ],
};

// layout: 리플렛처럼 작품 사진이 카드 가장자리에서 잘려 나가는 방향
//   "bleed-left"  사진이 왼쪽·아래로 잘림(코아)
//   "bleed-right" 사진이 오른쪽으로 잘림(합주, 나리움)
export const largeWorks = [
  {
    id: "coa",
    title: "COA(코아)",
    team: "고리",
    image: "/artist-media/work-coa.webp",
    alt: "얼굴이 달린 둥근 토굴 모양의 대형 울림통 코아",
    photos: [
      { src: "/artist-media/big/coa-1.webp", alt: "작업실에 놓인 코아와 그 둘레" },
      { src: "/artist-media/big/coa-2.webp", alt: "비스듬히 본 코아의 몸통과 입구" },
      { src: "/artist-media/big/coa-3.webp", alt: "코아의 얼굴을 가까이에서" },
      { src: "/artist-media/big/coa-4.webp", alt: "코아의 입과 코 부분 근접" },
      { src: "/artist-media/big/coa-5.webp", alt: "코아 곁에 놓인 Co-Ark" },
    ],
    layout: "bleed-left",
    text: "우스꽝스런 얼굴과 포근한 인상이 공존합니다. 아이의 몸집에 맞춰 빚고 팀의 두 아이가 함께 이름을 지은 코아는 작업실을 찾는 어린이들에게 사랑받고 있습니다.",
    members: [
      { no: 1, name: "이채명", work: "라트나" },
      { no: 2, name: "이안", work: "자유" },
      { no: 3, name: "박진희", work: "잭오랜턴" },
      { no: 4, name: "박수연", work: "마루" },
      { no: 5, name: "이성순", work: "코아" },
      { no: 6, name: "박소연", work: "한여름의 추억" },
    ],
  },
  {
    id: "coark",
    title: "Co-Ark(합주)",
    team: "네모",
    image: "/artist-media/work-coark.webp",
    alt: "뾰족한 지붕을 인 네모난 방주 모양의 대형 울림통 Co-Ark",
    photos: [
      { src: "/artist-media/big/coark-1.webp", alt: "작업실에 세운 Co-Ark" },
      { src: "/artist-media/big/coark-3.webp", alt: "코아와 나란히 선 Co-Ark" },
      { src: "/artist-media/big/coark-4.webp", alt: "Co-Ark 안에서 올려다본 지붕의 빛 구멍" },
      { src: "/artist-media/big/coark-5.webp", alt: "Co-Ark 안쪽 벽과 작은 창" },
    ],
    layout: "bleed-right",
    text: "네모난 방주 같은 공간에 여러 사람의 소리가 합주하듯 모입니다. 성인이 들어갈 만큼 넉넉한 내부는 함께 나아가는 여정의 이미지로 이어집니다.",
    members: [
      { no: 7, name: "허양", work: "SOUL1" },
      { no: 8, name: "임계화", work: "토토리" },
      { no: 9, name: "신정숙", work: "별을 보다" },
      { no: 10, name: "이재홍", work: "SOUL2" },
      { no: 11, name: "조영범", work: "자유를 짓다", note: "네모&미로" },
    ],
  },
  {
    id: "narium",
    title: "NARIUM(나리움)",
    team: "미로",
    image: "/artist-media/work-narium.webp",
    alt: "물결 같은 흙 타래로 쌓아 올린 동굴 모양의 대형 울림통 나리움",
    photos: [
      { src: "/artist-media/big/narium-1.webp", alt: "낙엽 덮인 마당에서 입구를 연 나리움" },
      { src: "/artist-media/big/narium-2.webp", alt: "하나어린이집 앞마당의 핸하(2025)와 나리움(2026)" },
      { src: "/artist-media/big/narium-4.webp", alt: "하나어린이집 앞마당의 핸하(2025)와 나리움(2026)" },
      { src: "/artist-media/big/narium-3.webp", alt: "낙엽 마당의 나리움" },
      { src: "/artist-media/big/narium-5.webp", alt: "나리움 옆모습" },
      { src: "/artist-media/big/narium-6.webp", alt: "나리움 옆모습" },
      { src: "/artist-media/big/narium-7.webp", alt: "나리움에서 본 핸하" },
      { src: "/artist-media/big/narium-8.webp", alt: "나리움에서 본 핸하" },
      { src: "/artist-media/big/narium-9.webp", alt: "햇빛 드는 낙엽 마당의 나리움" },
    ],
    profileLast: true,
    layout: "bleed-right",
    text: "흙을 나르고 이어 붙이는 작업에서 ‘나름’과 ‘이음’을 조합해 지은 이름입니다. 미지의 광물이나 고대의 신비로운 자연물을 닮은 작품의 모습과 어울립니다.",
    members: [
      { no: 12, name: "주장석", work: "발성" },
      { no: 13, name: "김현국", work: "북" },
      { no: 14, name: "민지현", work: "명상" },
      { no: 15, name: "인동욱", work: "갈무리" },
      { no: 16, name: "이새롬", work: "울림의 틈" },
      { no: 17, name: "김주원", work: "카메라" },
    ],
  },
];
