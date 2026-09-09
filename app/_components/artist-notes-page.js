"use client";

import { useEffect, useState } from "react";

import ArtistNoteWorkbench from "./artist-note-workbench";

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

// 팀별 대형 울림통의 작품명과 뜻. 9회차 이름짓기에서 정해졌다.
const teamWorks = {
  "고리": {
    title: "코아 COA",
    note: "코가 제일 마지막에 만들어진 이 작품은 포근한 느낌을 줍니다. 영어로 core를 연상시켜, 사람에게 가장 중요한 사랑의 마음을 상징하는 듯합니다. 두 아이들이 떠오르는 대로 말하여 함께 지은 이름입니다.",
  },
  "네모": {
    title: "Co-Ark (합주, 合舟)",
    note: "피라미드와 같은 이국의 유적을 떠올리게 하는 이 작품은 모두의 소리를 조화롭게 모으는 공간입니다. 팀원 모두가 신앙이 깊으셨고, 네모난 배, 방주로부터 발상을 시작하여 이러한 뜻에 도달했습니다.",
  },
  "미로": {
    title: "나리움 NARIUM",
    note: "한 아이는 우리가 한 일을 “나르고, 붙이고의 반복”이라고 말합니다. AI의 도움으로 ‘나름’과 ‘이음’을 합쳐서 말을 만드니, 아직 발견되지 않은 세계의 광물이나 고대의 영험한 자연물의 이름처럼 들립니다.",
  },
};

// 조영범 작가처럼 두 팀에 참여한 경우 두 작품을 모두 싣는다.
function worksOf(team) {
  return team
    .split("·")
    .map((name) => name.trim())
    .filter((name) => teamWorks[name])
    .map((name) => ({ team: name, ...teamWorks[name] }));
}

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
        /* 이름이 두 글자여도(허양·이안) 세 글자 폭을 잡아, 오른쪽 작품명 줄이 흔들리지 않게 한다. */
        .artist-note-name { flex:0 0 auto; min-width:2.9em; margin:0; font-family:'IBM Plex Sans KR', sans-serif; font-size:clamp(38px,5vw,62px); line-height:1.15; letter-spacing:-.05em; }
        .artist-note-main { display:flex; flex-wrap:wrap; align-items:flex-end; gap:24px 44px; }
        .artist-note-works { flex:1 1 330px; min-width:0; }
        .artist-note-work + .artist-note-work { margin-top:18px; }
        .artist-note-team { margin:0 0 6px; font-family:'IBM Plex Sans KR', sans-serif; font-size:15px; font-weight:600; letter-spacing:-.01em; }
        .artist-note-team-name { margin-right:8px; color:var(--an-dim); font-size:12px; font-weight:400; letter-spacing:0; }
        .artist-note-work-note { margin:0; color:var(--an-dim); font-size:13px; line-height:1.75; }


        .artist-note-foot { margin-top:34px; display:flex; justify-content:space-between; gap:20px; color:var(--an-dim); font-size:12px; }
        .artist-note-foot a { color:var(--an-accent); text-decoration:none; }
        @media (max-width:700px) { .artist-notes-nav { padding:0 20px; } .artist-notes-brand { font-size:11px; } .artist-notes-nav-title { display:none; } .artist-notes-links { gap:10px; } .artist-notes-links a { font-size:11px; } .artist-picker, .artist-note { padding-right:20px; padding-left:20px; } .artist-picker { padding-top:28px; } .artist-note { padding-top:32px; padding-bottom:64px; } .artist-note-header { grid-template-columns:1fr; } .profile-photo { max-width:150px; } .artist-note-foot { flex-direction:column; } }
        @media print { .artist-notes-nav, .artist-picker, .artist-note-foot { display:none; } .artist-notes-page { padding-top:0; } }
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
          <div className="artist-note-main">
            <h1 className="artist-note-name">{selected.name}</h1>
            <div className="artist-note-works">
              {worksOf(selected.team).map((work) => (
                <div className="artist-note-work" key={work.team}>
                  <p className="artist-note-team">
                    <span className="artist-note-team-name">팀 {work.team}</span>
                    〈{work.title}〉
                  </p>
                  <p className="artist-note-work-note">{work.note}</p>
                </div>
              ))}
            </div>
          </div>
        </header>

        <ArtistNoteWorkbench artist={selected} works={worksOf(selected.team)} />

        <footer className="artist-note-foot">
          <span>다른 작가를 선택하면 해당 작가의 노트로 전환됩니다.</span>
          <a href="/oolimtong_2026_wcf_record">← 팀별 작업 기록 보기</a>
        </footer>
      </article>
    </main>
  );
}
