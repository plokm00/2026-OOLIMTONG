"use client";

import { useEffect, useState } from "react";

import ArtistNoteWorkbench from "./artist-note-workbench";

// 김주원 작가부터 키워드 선택 + AI 취합 방식으로 먼저 적용한다.
const WORKBENCH_ARTIST_IDS = new Set(["kim-juwon"]);

const artists = [
  { id: "kim-juwon", name: "김주원", team: "미로", photo: "/artist-profiles/kim-juwon.webp" },
  { id: "kim-hyeonguk", name: "김현국", team: "미로", photo: "/artist-profiles/kim-hyeonguk.webp" },
  { id: "min-jihyeon", name: "민지현", team: "미로", photo: "/artist-profiles/min-jihyeon.webp" },
  { id: "park-soyeon", name: "박소연", team: "고리", photo: "/artist-profiles/park-soyeon.webp" },
  { id: "park-suyeon", name: "박수연", team: "고리", photo: "/artist-profiles/park-suyeon.webp" },
  { id: "park-jinhee", name: "박진희", team: "고리", photo: "/artist-profiles/park-jinhee.webp" },
  { id: "shin-jeongsuk", name: "신정숙", team: "네모", photo: "/artist-profiles/shin-jeongsuk.webp" },
  { id: "lee-saerom", name: "이새롬", team: "미로", photo: "/artist-profiles/lee-saerom.webp" },
  { id: "lee-seongsun", name: "이성순", team: "고리", photo: "/artist-profiles/lee-seongsun.webp" },
  { id: "lee-an", name: "이안", team: "고리", photo: "/artist-profiles/lee-an.webp" },
  { id: "lee-jaehong", name: "이재홍", team: "네모", photo: "/artist-profiles/lee-jaehong.webp" },
  { id: "lee-chaemyeong", name: "이채명", team: "고리", photo: "/artist-profiles/lee-chaemyeong.webp" },
  { id: "in-donguk", name: "인동욱", team: "미로", photo: "/artist-profiles/in-donguk.webp" },
  { id: "im-gyehwa", name: "임계화", team: "네모", photo: "/artist-profiles/im-gyehwa.webp" },
  { id: "cho-youngbeom", name: "조영범", team: "네모 · 미로", photo: "/artist-profiles/cho-youngbeom.webp" },
  { id: "joo-jangseok", name: "주장석", team: "미로", photo: "/artist-profiles/joo-jangseok.webp" },
  { id: "heoyang", name: "허양", team: "네모", photo: "/artist-profiles/heoyang.webp" },
];

// 팀별 대형 울림통의 원제목. 9회차 이름짓기 결과가 나오면 이 값을 바꾼다.
const teamWorkTitles = {
  "네모": "원제목",
  "고리": "원제목",
  "미로": "원제목",
};

function teamLine(team) {
  const first = team.split("·")[0].trim();
  return `팀 ${team} “${teamWorkTitles[first] ?? "원제목"}”`;
}

const introPrompts = [
  "나를 한 줄로 소개해주세요. 사는 곳, 하는 일 — 직업이 아니어도 좋습니다.",
  "울림통-변주에 참여하게 된 계기는 무엇이었나요? 누구의 권유, 우연히 본 공고, 오래 품어온 마음 무엇이든 좋습니다.",
  "요즘 나의 하루는 어떤가요? 지금 내 삶이 놓여 있는 자리를 한두 문장으로 적어주세요.",
  "흙, 혹은 손으로 무언가 만드는 일과 나의 거리는 어느 정도였나요? 처음이었는지, 오랜만이었는지.",
  "이 작업이 끝난 뒤 나에게 무엇이 남기를 바라나요?",
];

const interviewGroups = [
  {
    title: "처음 · 흙과 만난 시간",
    source: "1–2회차",
    questions: [
      "나에게 흙은 어떤 재료였나요? 처음 흙을 만졌을 때 손에 남은 감각을 떠올려 적어주세요.",
      "‘울림통’이라는 말을 처음 들었을 때 무엇이 떠올랐나요? 지금은 그 이미지가 달라졌나요?",
      "처음 그린 드로잉과 완성된 모뉴먼트는 얼마나 달라졌나요? 무엇이 그 변화를 만들었나요?",
    ],
  },
  {
    title: "나의 모뉴먼트",
    source: "2–3 · 10회차",
    questions: [
      "내 모뉴먼트의 이름은 무엇인가요? 그 이름에 담은 뜻을 알려주세요.",
      "작업 중 가장 낯설었던 감각, 혹은 예상과 가장 달랐던 순간은 언제였나요?",
      "NFC 칩을 어느 자리에 심었나요? 왜 그 자리를 골랐나요?",
      "손의 흔적이 남는 것과 매끄럽게 다듬어진 마감 중, 나는 어느 쪽으로 기울었나요?",
      "기름을 먹인 뒤 작품의 얼굴이 달라졌습니다. 그때 어떤 마음이 들었나요?",
    ],
  },
  {
    title: "함께 만든 대형 울림통",
    source: "4–9회차",
    questions: [
      "내 타래가 옆 사람의 타래와 한 줄로 이어질 때 어떤 기분이 들었나요?",
      "반죽하기와 타래 쌓기 중 나에게 더 편안했던 작업은 무엇이었고, 왜 그랬을까요?",
      "내가 만든 부분이 구분되는 것과 누가 만들었는지 모르게 섞이는 것, 어느 쪽이 좋았나요?",
      "돌로 벽을 다지던 시간을 이야기해주세요. 소리, 힘, 벽에 남은 무늬 중 무엇이 기억에 남나요?",
      "소리를 녹음하고 몸을 움직여 본 시간에서 가장 기억에 남는 장면은 무엇인가요?",
      "우리 팀 울림통의 이름은 어떻게 정해졌나요? 그 이름을 나는 어떻게 생각하나요?",
      "작업 중 서로 영향을 주고받는다고 느낀 순간이 있었나요?",
    ],
  },
  {
    title: "전체를 돌아보며",
    source: "6 · 11회차",
    questions: [
      "혼자 만드는 것과 함께 만드는 것은 나에게 어떻게 다르게 느껴졌나요?",
      "가장 어려웠던 일과 가장 즐거웠던 순간을 하나씩 꼽는다면?",
      "‘참여자’가 아니라 ‘작가’가 되었다고 느낀 순간이 있었나요? 언제였나요?",
      "이 작품은 굽지 않아 언젠가 흙으로 돌아갑니다. 그 사실을 어떻게 받아들이고 계신가요?",
      "완성된 울림통이 전시장에 놓인 모습을 상상하면 어떤 감정이 드나요?",
      "다시 한 번 참여한다면 꼭 해보고 싶은 것, 그리고 프로그램에 바라는 점을 적어주세요.",
    ],
  },
];

const nfcCandidates = [
  "내 모뉴먼트 소개 모바일 페이지 — 사진 · 작가 노트 · 제작 과정 (가장 기본, 제작 지원 가능)",
  "작업장에서 녹음한 소리 — 돌로 벽 다지는 소리, 함께 부른 노래, 니닉어 따라 하기",
  "제작 과정 영상 또는 8회차에 촬영한 퍼포먼스 영상",
  "내가 쓴 짧은 글이나 시, 목소리로 남긴 낭독",
  "이 작가 노트 페이지의 내 자리 (주소 뒤에 #내이름 을 붙이면 바로 열립니다)",
  "〈울림통-변주〉 전시 안내 페이지 — 전시장으로 오시라는 초대",
  "설치 장소의 이야기 — 우리 가게, 우리 동네, 우리 집을 소개하는 페이지",
];

const planRows = [
  {
    key: "언제",
    en: "When",
    fixed: "2026. 11. 21.(토) ~ 12. 13.(일) · 〈울림통-변주〉 전시 기간과 동일",
    body: "기본값은 전시 기간과 같습니다. 더 일찍 시작하거나 더 오래 두고 싶다면 그렇게 적어주세요.",
  },
  {
    key: "어디서",
    en: "Where",
    body: "사람들과 소통할 수 있는 공간이어야 합니다. 허락을 받을 수 있는 자리인지, 비·바람·서리를 피할 수 있는지도 함께 살펴주세요.",
    examples: [
      "집 마당 · 거실 창가",
      "일터 — 가게 입구, 사무실 로비, 공방",
      "동네 공원 · 산책로",
      "단골 카페",
      "어린이집 · 학교",
      "텃밭 어귀",
      "아파트 화단 · 공동 현관",
    ],
  },
  {
    key: "무엇을",
    en: "What",
    body: "설치할 작품을 알려주세요. 작품 이름과 대략의 크기, 좌대나 받침이 필요한지, 설명 카드를 함께 둘지.",
  },
  {
    key: "누가",
    en: "Who",
    body: "누가 설치하고 누가 돌보나요? 함께해 줄 사람이 있나요? 그리고 이 작품을 누가 만나기를 바라나요?",
  },
  {
    key: "어떻게",
    en: "How",
    body: "배치 방식과 운영 방식을 정합니다. 매일 지킬 수 있는 정도로만 정하는 것이 좋습니다.",
    examples: [
      "기간 내내 상시 배치",
      "매일 11시~17시 내놓았다가 저녁에 수거",
      "주말에만 내놓기",
      "작품 설명 카드와 NFC 안내문을 함께 부착",
      "NFC 칩을 찾아 열어본 분께 작은 혜택 — 음료 할인, 엽서, 스티커 (이벤트성)",
      "SNS에 설치 위치를 공개해 여러 모뉴먼트를 스탬프처럼 돌아보게 하기",
    ],
  },
  {
    key: "왜",
    en: "Why",
    body: "가장 중요한 칸입니다. 왜 하필 그 자리인가요? 그곳의 사람들에게 무엇을 건네고 싶은가요? 이 설치로 내가 얻고 싶은 것은 무엇인가요?",
  },
];

const planChecklist = [
  "장소 사용 허락을 받았는가 (집 밖이라면 반드시)",
  "받침 · 좌대 · 고정 방법이 있는가",
  "굽지 않은 흙입니다. 비 · 눈 · 서리 · 강한 바람을 피할 수 있는가",
  "파손이나 분실이 생겼을 때 어떻게 할지 정해두었는가",
  "전시가 끝난 뒤 — 회수해 보관할지, 그 자리에 두어 자연으로 돌아가게 할지",
  "설치한 모습을 사진으로 남겨 아카이브에 보내주기",
];

function initialArtist() {
  if (typeof window === "undefined") return artists[0];
  const id = window.location.hash.slice(1);
  return artists.find((artist) => artist.id === id) ?? artists[0];
}

export default function ArtistNotesPage() {
  const [selected, setSelected] = useState(initialArtist);

  useEffect(() => {
    const updateSelected = () => {
      const id = window.location.hash.slice(1);
      const artist = artists.find((item) => item.id === id);
      if (artist) setSelected(artist);
    };

    window.addEventListener("hashchange", updateSelected);
    return () => window.removeEventListener("hashchange", updateSelected);
  }, []);

  const chooseArtist = (artist) => {
    setSelected(artist);
    window.history.replaceState(null, "", `#${artist.id}`);
  };

  return (
    <main className="artist-notes-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@300;400;500;600;700&family=Noto+Sans+KR:wght@400;500;600;700&display=swap');

        :root { --an-bg:#f6ede6; --an-bg2:#eee0d6; --an-bg3:#e4d0c4; --an-line:#ceb0a0; --an-accent:#c03828; --an-accent2:#8c2418; --an-text:#261410; --an-dim:#7a4c3c; }
        * { box-sizing:border-box; }
        body { margin:0; background:var(--an-bg); color:var(--an-text); font-family:'Noto Sans KR', sans-serif; }
        .artist-notes-page { min-height:100vh; padding-top:56px; background:var(--an-bg); }
        .artist-notes-nav { position:fixed; top:0; right:0; left:0; z-index:100; height:56px; padding:0 max(40px, calc((100% - 860px) / 2)); display:flex; align-items:center; justify-content:space-between; gap:20px; border-bottom:1px solid var(--an-line); background:rgba(246,237,230,.95); backdrop-filter:blur(8px); }
        .artist-notes-nav-left { display:flex; align-items:baseline; gap:14px; min-width:0; }
        .artist-notes-brand { color:var(--an-accent); font-size:13px; font-weight:600; letter-spacing:.1em; text-decoration:none; }
        .artist-notes-nav-title { font-family:'IBM Plex Sans KR', sans-serif; font-size:16px; font-weight:700; letter-spacing:.02em; white-space:nowrap; }
        .artist-notes-links { display:flex; align-items:center; gap:12px; }
        .artist-notes-links a { color:var(--an-dim); font-size:12px; text-decoration:none; }
        .artist-notes-links a:hover { color:var(--an-accent); }
        .artist-notes-record-link { padding:5px 12px; border:1px solid var(--an-line); border-radius:2px; letter-spacing:.06em; }
        .artist-notes-record-link:hover { background:var(--an-bg3); }
        .artist-notes-summary { max-width:680px; margin:24px 0 0; color:var(--an-dim); font-size:15px; line-height:1.7; }
        .artist-picker { max-width:940px; margin:0 auto; padding:40px 40px; }
        .artist-picker-label { display:block; margin-bottom:14px; color:var(--an-accent2); font-size:12px; font-weight:700; letter-spacing:.08em; }
        .artist-picker-list { display:flex; flex-wrap:wrap; gap:8px; }
        .artist-picker-button { min-width:88px; padding:10px 13px; border:0; border-radius:4px; background:var(--an-bg2); color:var(--an-text); cursor:pointer; font:600 13px 'Noto Sans KR', sans-serif; text-align:left; transition:background .18s,color .18s; }
        .artist-picker-button small { display:block; margin-top:3px; color:var(--an-dim); font-size:10px; font-weight:400; }
        .artist-picker-button:hover, .artist-picker-button[aria-selected='true'] { background:var(--an-accent); border-color:var(--an-accent); color:var(--an-bg); }
        .artist-picker-button[aria-selected='true'] small { color:rgba(246,237,230,.8); }
        .artist-note { max-width:940px; margin:0 auto; padding:36px 40px 100px; }
        .artist-note-header { display:grid; grid-template-columns:150px minmax(0,1fr); gap:clamp(32px,6vw,64px); align-items:end; padding-bottom:40px; }
        .profile-photo { aspect-ratio:4/5; display:flex; align-items:center; justify-content:center; overflow:hidden; background:var(--an-bg3); border:1px dashed var(--an-line); color:var(--an-dim); font-size:12px; text-align:center; }
        .profile-photo span { display:block; padding:12px; }
        .profile-photo.has-photo { border:1px solid var(--an-line); }
        .profile-photo img { display:block; width:100%; height:100%; object-fit:cover; }
        .artist-note-label { margin:0 0 12px; color:var(--an-accent); font-size:11px; font-weight:700; letter-spacing:.14em; }
        .artist-note-name { margin:0; font-family:'IBM Plex Sans KR', sans-serif; font-size:clamp(38px,5vw,62px); line-height:1.15; letter-spacing:-.05em; }
        .artist-note-team { margin:12px 0 0; color:var(--an-dim); font-size:14px; }

        .note-howto { margin-top:30px; padding:24px 26px; background:var(--an-bg2); }
        .note-howto h2 { margin:0 0 12px; font-family:'IBM Plex Sans KR', sans-serif; font-size:19px; }
        .note-howto > p { margin:0 0 14px; color:var(--an-dim); font-size:14px; line-height:1.7; }
        .note-howto dl { margin:0; display:grid; grid-template-columns:74px minmax(0,1fr); gap:8px 16px; }
        .note-howto dt { color:var(--an-accent2); font-size:12px; font-weight:700; letter-spacing:.04em; line-height:1.7; }
        .note-howto dd { margin:0; color:var(--an-text); font-size:14px; line-height:1.7; }

        .note-section { padding:42px 0 38px; }
        .note-section h2 { margin:0 0 14px; font-family:'IBM Plex Sans KR', sans-serif; font-size:29px; line-height:1.25; letter-spacing:-.02em; }
        .note-lead { max-width:720px; margin:0 0 24px; color:var(--an-dim); font-size:15px; line-height:1.7; }
        .note-lead strong { color:var(--an-text); font-weight:600; }
        .note-sub { margin:30px 0 10px; font-family:'IBM Plex Sans KR', sans-serif; font-size:15px; font-weight:600; letter-spacing:.02em; }
        .note-sub .note-src { margin-left:9px; padding:2px 8px; border-radius:2px; background:#f0e4da; color:#9a7460; font-size:11px; font-weight:400; letter-spacing:.02em; vertical-align:middle; }

        .prompt-list { margin:0; padding:0; list-style:none; counter-reset:prompt; }
        .prompt-list li { position:relative; padding:7px 0 7px 34px; font-size:14px; line-height:1.65; counter-increment:prompt; }
        .prompt-list li::before { content:counter(prompt,decimal-leading-zero); position:absolute; top:9px; left:0; color:var(--an-accent); font-size:11px; font-weight:700; letter-spacing:.04em; }

        .note-example { margin:22px 0 0; padding:20px 22px; background:var(--an-bg2); }
        .note-example strong { display:block; margin-bottom:10px; color:var(--an-accent2); font-size:11px; font-weight:700; letter-spacing:.1em; }
        .note-example p { margin:0; color:var(--an-text); font-size:14px; line-height:1.75; }
        .note-example p + p { margin-top:9px; }
        .note-example em { color:var(--an-accent2); font-style:normal; font-weight:600; }

        .note-fill { margin-top:24px; padding:16px 18px; border:1px dashed var(--an-line); color:var(--an-dim); font-size:12px; letter-spacing:.02em; }

        .tag-list { display:flex; flex-wrap:wrap; gap:7px; margin:14px 0 0; padding:0; list-style:none; }
        .tag-list li { padding:6px 12px; border:1px solid #e3d3c7; border-radius:14px; color:#96786a; font-size:12.5px; }

        .check-list { margin:12px 0 0; padding:0; list-style:none; }
        .check-list li { position:relative; padding:6px 0 6px 24px; font-size:14px; line-height:1.65; }
        .check-list li::before { content:'☐'; position:absolute; left:0; color:var(--an-accent); font-size:14px; }

        .plan-row { padding:18px 0; }
        .plan-key { display:flex; align-items:baseline; gap:9px; margin:0 0 8px; font-family:'IBM Plex Sans KR', sans-serif; font-size:18px; font-weight:600; }
        .plan-key span { color:var(--an-accent); font-size:11px; font-weight:700; letter-spacing:.12em; }
        .plan-fixed { display:inline-block; margin:0 0 10px; padding:5px 11px; background:var(--an-accent); color:var(--an-bg); font-size:12.5px; font-weight:600; }
        .plan-row p { margin:0; color:var(--an-dim); font-size:14px; line-height:1.7; }

        .note-support { margin-top:24px; padding:20px 22px; background:var(--an-bg2); font-size:14px; line-height:1.7; }
        .note-support strong { color:var(--an-accent2); }

        .artist-note-foot { margin-top:34px; display:flex; justify-content:space-between; gap:20px; color:var(--an-dim); font-size:12px; }
        .artist-note-foot a { color:var(--an-accent); text-decoration:none; }
        @media (max-width:700px) { .artist-notes-nav { padding:0 20px; } .artist-notes-brand { font-size:11px; } .artist-notes-nav-title { display:none; } .artist-notes-links { gap:10px; } .artist-notes-links a { font-size:11px; } .artist-picker, .artist-note { padding-right:20px; padding-left:20px; } .artist-picker { padding-top:28px; } .artist-note { padding-top:32px; padding-bottom:64px; } .artist-note-header { grid-template-columns:1fr; } .profile-photo { max-width:150px; } .note-howto { padding:22px 20px; } .note-howto dl { grid-template-columns:1fr; gap:2px; } .note-howto dd { margin-bottom:10px; } .note-section h2 { font-size:24px; } .artist-note-foot { flex-direction:column; } }
        @media print { .artist-notes-nav, .artist-picker, .artist-note-foot { display:none; } .artist-notes-page { padding-top:0; } .note-section { break-inside:avoid; } }
      `}</style>

      <nav className="artist-notes-nav" aria-label="울림통-변주 2026 탐색">
        <div className="artist-notes-nav-left">
          <a className="artist-notes-brand" href="/oolimtong_2026_wcf">NINNIK × 울림통-변주 2026</a>
          <span className="artist-notes-nav-title">작가 노트</span>
        </div>
        <div className="artist-notes-links">
          <a href="/oolimtong_2026_wcf">메인으로</a>
          <a className="artist-notes-record-link" href="/oolimtong_2026_wcf_record">팀별 작업 기록</a>
        </div>
      </nav>

      <section className="artist-picker" aria-label="작가 선택">
        <span className="artist-picker-label">참여 작가 선택</span>
        <div className="artist-picker-list">
          {artists.map((artist) => (
            <button
              key={artist.id}
              type="button"
              className="artist-picker-button"
              aria-selected={selected.id === artist.id}
              onClick={() => chooseArtist(artist)}
            >
              {artist.name}<small>{artist.team}</small>
            </button>
          ))}
        </div>
        <p className="artist-notes-summary">
          참여 작가 17인의 소개와 리뷰 인터뷰, 그리고 각자의 모뉴먼트를 어디에 어떻게 놓을지 담은 전시 계획을 모으는 페이지입니다.
          아래는 작가 노트를 직접 쓰실 수 있도록 만든 작성 가이드입니다.
        </p>
      </section>

      <article className="artist-note" id={selected.id}>
        <header className="artist-note-header">
          <div
            className={selected.photo ? "profile-photo has-photo" : "profile-photo"}
            aria-label={selected.photo ? undefined : `${selected.name} 프로필 사진 자리`}
          >
            {selected.photo ? (
              <img src={selected.photo} alt={`${selected.name} 프로필 사진`} width="300" height="375" loading="lazy" />
            ) : (
              <span>프로필 사진<br />준비 중</span>
            )}
          </div>
          <div>
            <p className="artist-note-label">ARTIST NOTE</p>
            <h1 className="artist-note-name">{selected.name}</h1>
            <p className="artist-note-team">{teamLine(selected.team)}</p>
          </div>
        </header>

        {WORKBENCH_ARTIST_IDS.has(selected.id) ? (
          <ArtistNoteWorkbench artist={selected} />
        ) : (
          <>
        <section className="note-howto" aria-label="작성 안내">
          <h2>작가 노트 작성 안내</h2>
          <p>
            잘 쓴 글이 아니라 나다운 문장을 찾는 일입니다. 말하듯 편하게 적어주세요.
            맞춤법과 문장 정리는 저희가 다듬어 전시 자료와 NFC 콘텐츠에 싣습니다.
          </p>
          <dl>
            <dt>분량</dt>
            <dd>작가 소개 3~5문장 · 리뷰 인터뷰는 마음이 가는 질문 3~5개 · 전시 계획은 여섯 칸을 각 1~2문장씩</dd>
            <dt>함께</dt>
            <dd>모뉴먼트 사진, 설치하려는 장소 사진을 1~2장 같이 보내주시면 좋습니다</dd>
            <dt>제출</dt>
            <dd>구글폼 작성이 기본입니다. 어려우시면 카톡 음성메시지나 손글씨 사진도 좋고, 11회차 당일 현장에서 대신 받아 적어드립니다</dd>
            <dt>마감</dt>
            <dd>11회차(가을 예정) 전까지 · 세부 일정은 별도 공지</dd>
          </dl>
        </section>

        <section className="note-section" aria-labelledby="sec-intro">
          <h2 id="sec-intro">작가 소개</h2>
          <p className="note-lead">
            이 프로젝트에 참여하게 된 동기와 지금 내 삶의 현주소를 나누는 자리입니다.
            경력을 나열하는 칸이 아닙니다. 아래 다섯 가지 중 마음이 가는 것들을 골라 이어 쓰면 그대로 소개글이 됩니다.
          </p>
          <ol className="prompt-list">
            {introPrompts.map((prompt) => (
              <li key={prompt}>{prompt}</li>
            ))}
          </ol>
          <div className="note-example">
            <strong>보기</strong>
            <p>
              저는 문막에서 니닉크라프트 공방을 운영하며 개념공상예술을 펼치는 작가입니다.
              흙에서 시작해 회화와 영상, 이야기까지 니닉이라는 세계를 20년 넘게 지어 왔습니다.
              이번 울림통-변주는 그 세계를 혼자가 아니라 열일곱 분과 함께 지어 보는 일이었습니다.
              작업이 끝난 뒤에도 각자의 자리에서 울림통이 계속 울렸으면 합니다.
            </p>
          </div>
          <p className="note-fill">{selected.name} 작가 소개 작성 예정</p>
        </section>

        <section className="note-section" aria-labelledby="sec-interview">
          <h2 id="sec-interview">리뷰 인터뷰</h2>
          <p className="note-lead">
            개인 모뉴먼트와 대형 울림통 <strong>두 작업 모두</strong>에 대한 리뷰입니다.
            지난 회차에서 함께 나눴던 질문들을 모아두었습니다. 전부 답하실 필요는 없습니다.
            마음에 걸리는 질문 3~5개를 골라, 그날의 장면을 떠올리며 적어주세요.
          </p>
          {interviewGroups.map((group) => (
            <div key={group.title}>
              <h3 className="note-sub">
                {group.title}
                <span className="note-src">{group.source}</span>
              </h3>
              <ol className="prompt-list">
                {group.questions.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ol>
            </div>
          ))}
          <div className="note-example">
            <strong>보기 · 답변은 이 정도면 충분합니다</strong>
            <p><em>내 타래가 옆 사람의 타래와 이어질 때 어떤 기분이 들었나요?</em></p>
            <p>
              처음엔 내 것만 잘 만들면 된다고 생각했는데, 어느 순간 내 타래 끝이 어디였는지 모르겠더라고요.
              그게 좀 서운하기도 하고 시원하기도 했습니다. 지금 울림통을 보면 어디가 내 자리인지 못 찾겠는데, 그래서 더 우리 것 같습니다.
            </p>
          </div>
          <p className="note-fill">{selected.name} 인터뷰 작성 예정</p>
        </section>

        <section className="note-section" aria-labelledby="sec-nfc">
          <h2 id="sec-nfc">NFC 콘텐츠</h2>
          <p className="note-lead">
            3회차에 모뉴먼트 안에 심은 NFC 칩에는 주소(URL) 하나를 담을 수 있습니다.
            관람자가 휴대폰을 가까이 대면 그 주소가 열립니다. <strong>어떤 콘텐츠를 연결할 것인가</strong>를 정하는 칸입니다.
            칩은 작품 안에 봉인되어 있지만 연결되는 주소는 나중에 얼마든지 바꿀 수 있으니, 지금은 방향만 정하면 됩니다.
          </p>
          <h3 className="note-sub">연결할 수 있는 것들<span className="note-src">3 · 7 · 8 · 11회차</span></h3>
          <ol className="prompt-list">
            {nfcCandidates.map((candidate) => (
              <li key={candidate}>{candidate}</li>
            ))}
          </ol>
          <h3 className="note-sub">이 세 가지만 적어주세요</h3>
          <ul className="check-list">
            <li>연결하고 싶은 콘텐츠 — 한 줄로</li>
            <li>이미 가지고 있는 자료 — 사진, 녹음, 영상, 글 무엇이든</li>
            <li>제작 지원이 필요한 부분</li>
          </ul>
          <p className="note-support">
            <strong>페이지 제작은 지원해 드립니다.</strong> 사진·글·소리 자료만 주시면 AI 기술 지원으로 모바일 페이지를 만들어
            그 주소를 칩에 연결해 드립니다. 직접 운영하시는 블로그나 인스타그램 주소를 쓰셔도 됩니다.
          </p>
          <p className="note-fill">{selected.name} NFC 콘텐츠 작성 예정</p>
        </section>

        <section className="note-section" aria-labelledby="sec-plan">
          <h2 id="sec-plan">전시 계획</h2>
          <p className="note-lead">
            설치 장소, 전시 방식, 다음 작업으로 이어갈 생각처럼 이후 실천할 계획을 자유롭게 정리합니다.
            각자의 모뉴먼트가 놓인 자리 하나하나가 전시장 밖으로 퍼지는 분산형 네트워크 전시의 한 점이 됩니다.
            아래 육하원칙 여섯 칸을 채우면 그대로 계획이 됩니다.
          </p>
          {planRows.map((row) => (
            <div className="plan-row" key={row.key}>
              <p className="plan-key">
                {row.key}<span>{row.en}</span>
              </p>
              {row.fixed ? <span className="plan-fixed">{row.fixed}</span> : null}
              <p>{row.body}</p>
              {row.examples ? (
                <ul className="tag-list">
                  {row.examples.map((example) => (
                    <li key={example}>{example}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
          <h3 className="note-sub">설치 전 확인</h3>
          <ul className="check-list">
            {planChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="note-example">
            <strong>보기 · 작성 예시</strong>
            <p><em>언제</em> — 11월 21일부터 12월 13일까지, 전시 기간과 같게 합니다.</p>
            <p><em>어디서</em> — 문막 니닉크라프트 공방 입구, 길에서 바로 보이는 자리입니다.</p>
            <p><em>무엇을</em> — 모뉴먼트 〈숨자리〉, 높이 40cm. 작은 나무 좌대에 올리고 설명 카드를 함께 둡니다.</p>
            <p><em>누가</em> — 공방을 지키며 제가 직접 내놓고 들입니다.</p>
            <p><em>어떻게</em> — 공방 문을 여는 동안 밖에 두고, 문 닫을 때 안으로 들입니다. “휴대폰을 대보세요”라고 안내문을 붙이고, 칩을 찾아 열어본 분께는 니닉 스티커를 드립니다.</p>
            <p><em>왜</em> — 공방 앞을 지나가면서도 안으로는 들어오지 못하던 분들에게, 문 앞에서 먼저 말을 걸어보고 싶었습니다.</p>
          </div>
          <p className="note-fill">{selected.name} 전시 계획 작성 예정</p>
        </section>
          </>
        )}

        <footer className="artist-note-foot">
          <span>다른 작가를 선택하면 해당 작가의 노트로 전환됩니다.</span>
          <a href="/oolimtong_2026_wcf_record">← 팀별 작업 기록 보기</a>
        </footer>
      </article>
    </main>
  );
}
