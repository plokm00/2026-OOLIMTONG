const variationTitle = "소녀들의 언덕 테마 변주곡";
const clay = "점토, 비소성, 콩기름으로 마감";

export const mainExhibition = {
  dates: "2026. 11. 21. – 12. 13.",
  hours: "매일 11:00–17:00",
  venues: [
    { name: "니닉크라프트", address: "원주시 문막읍 원문로 1734-15" },
    { name: "하나어린이집 야외 공터", address: "원주시 문막읍 작은애니길 38-8" },
  ],
};

export const artistExhibitions = {
  "lee-chaemyeong": {
    title: "라트나",
    artworkAlt: "옆면에 틈이 있는 물방울 모양의 흙 조형물",
    dimensions: "18.5 × 16.5 × 32 cm",
    material: clay,
    year: 2026,
    summary: "작가는 물방울을 닮은 형상에 인도어로 ‘보석’을 뜻하는 이름을 붙였습니다.",
    bio: "작가 활동을 하는 미술 교사",
    venue: { name: "작가 개인 공간", dates: "상설전시 · 초대 관람만 가능" },
    tracks: [{ file: "v_gentlepiano.mp3", title: variationTitle }],
    photos: [
      "이채명이 옆 사람과 함께 누워 있는 흙 조형물을 다듬는 모습",
      "이채명이 도구로 라트나의 뾰족한 몸체를 다듬는 모습",
      "이채명이 고리 팀과 함께 대형 울림통 코아의 낮은 벽을 만드는 모습",
    ],
  },
  "park-jinhee": {
    title: "잭오랜턴",
    artworkAlt: "고리 손잡이와 손자국이 남아 있는 할로윈 호박 모양의 흙 조형물",
    dimensions: "8 × 7 × 12 cm",
    material: clay,
    year: 2026,
    summary: "작가는 할로윈 호박을 닮은 형상에 흙을 만진 손자국을 그대로 남겼습니다.",
    bio: "흙이 손에 묻는 것을 싫어했던 여섯 살 아이",
    venue: { name: "브런치카페 뜰", address: "원주시 봉대길 41-1", dates: "2026. 11. 24. (화) – 11. 29. (일)" },
    tracks: [{ file: "v_malimbashaker01.mp3", title: variationTitle }],
    photos: [
      "박진희가 작업대 앞에서 양손으로 흙을 반죽하는 모습",
      "박진희가 작업대에서 손가락으로 흙을 빚는 모습",
      "박진희가 작은 도구로 대형 울림통 코아의 흙벽을 긁는 모습",
    ],
  },
};
