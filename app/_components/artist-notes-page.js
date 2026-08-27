"use client";

import { useEffect, useState } from "react";

const artists = [
  { id: "kim-juwon", name: "김주원", team: "미로" },
  { id: "kim-hyeonguk", name: "김현국", team: "미로" },
  { id: "min-jihyeon", name: "민지현", team: "미로" },
  { id: "park-soyeon", name: "박소연", team: "고리" },
  { id: "park-suyeon", name: "박수연", team: "고리" },
  { id: "park-jinhee", name: "박진희", team: "고리", photo: "/artist-profiles/park-jinhee.webp" },
  { id: "shin-jeongsuk", name: "신정숙", team: "네모" },
  { id: "lee-saerom", name: "이새롬", team: "미로" },
  { id: "lee-seongsun", name: "이성순", team: "고리" },
  { id: "lee-an", name: "이안", team: "고리" },
  { id: "lee-jaehong", name: "이재홍", team: "네모" },
  { id: "lee-chaemyeong", name: "이채명", team: "고리" },
  { id: "in-donguk", name: "인동욱", team: "미로" },
  { id: "im-gyehwa", name: "임계화", team: "네모" },
  { id: "cho-youngbeom", name: "조영범", team: "네모 · 미로" },
  { id: "joo-jangseok", name: "주장석", team: "미로" },
  { id: "heoyang", name: "허양", team: "네모" },
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
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@400;500;600;700&family=Noto+Sans+KR:wght@400;500;600;700&display=swap');

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
        .artist-notes-hero { max-width:940px; margin:0 auto; padding:44px 40px 30px; }
        .artist-notes-kicker { margin:0 0 14px; color:var(--an-accent); font-size:11px; font-weight:600; letter-spacing:.16em; }
        .artist-notes-title { margin:0; padding-left:16px; border-left:3px solid var(--an-accent); font-family:'IBM Plex Sans KR', sans-serif; font-size:clamp(30px,4vw,42px); line-height:1.2; letter-spacing:-.04em; }
        .artist-notes-summary { max-width:680px; margin:18px 0 0; color:var(--an-dim); font-size:15px; line-height:1.9; }
        .artist-picker { max-width:940px; margin:0 auto; padding:0 40px 40px; }
        .artist-picker-label { display:block; margin-bottom:14px; color:var(--an-accent2); font-size:12px; font-weight:700; letter-spacing:.08em; }
        .artist-picker-list { display:flex; flex-wrap:wrap; gap:8px; }
        .artist-picker-button { min-width:88px; padding:10px 13px; border:0; border-radius:4px; background:var(--an-bg2); color:var(--an-text); cursor:pointer; font:600 13px 'Noto Sans KR', sans-serif; text-align:left; transition:background .18s,color .18s; }
        .artist-picker-button small { display:block; margin-top:3px; color:var(--an-dim); font-size:10px; font-weight:400; }
        .artist-picker-button:hover, .artist-picker-button[aria-selected='true'] { background:var(--an-accent); border-color:var(--an-accent); color:var(--an-bg); }
        .artist-picker-button[aria-selected='true'] small { color:rgba(246,237,230,.8); }
        .artist-note { max-width:940px; margin:0 auto; padding:36px 40px 100px; }
        .artist-note-header { display:grid; grid-template-columns:150px minmax(0,1fr); gap:clamp(32px,6vw,64px); align-items:end; padding-bottom:46px; border-bottom:2px solid var(--an-text); }
        .profile-photo { aspect-ratio:4/5; display:flex; align-items:center; justify-content:center; overflow:hidden; background:var(--an-bg3); border:1px dashed var(--an-line); color:var(--an-dim); font-size:12px; text-align:center; }
        .profile-photo span { display:block; padding:12px; }
        .profile-photo.has-photo { border:1px solid var(--an-line); }
        .profile-photo img { display:block; width:100%; height:100%; object-fit:cover; }
        .artist-note-label { margin:0 0 12px; color:var(--an-accent); font-size:11px; font-weight:700; letter-spacing:.14em; }
        .artist-note-name { margin:0; font-family:'IBM Plex Sans KR', sans-serif; font-size:clamp(38px,5vw,62px); line-height:1.15; letter-spacing:-.05em; }
        .artist-note-team { margin:12px 0 28px; color:var(--an-dim); font-size:14px; }
        .artist-note-intro { margin:0; max-width:590px; color:var(--an-dim); font-size:15px; line-height:1.9; }
        .artist-note-grid { display:grid; grid-template-columns:1fr 1fr; gap:0; border-left:1px solid var(--an-line); }
        .artist-note-block { min-height:255px; padding:30px; border-right:1px solid var(--an-line); border-bottom:1px solid var(--an-line); }
        .artist-note-block:nth-child(1), .artist-note-block:nth-child(4) { background:var(--an-bg2); }
        .artist-note-block h2 { margin:0 0 14px; font-family:'IBM Plex Sans KR', sans-serif; font-size:23px; line-height:1.25; }
        .artist-note-block p { margin:0; color:var(--an-dim); font-size:14px; line-height:1.9; }
        .artist-note-block .note-hint { margin-top:20px; color:var(--an-accent2); font-size:12px; font-weight:600; }
        .work-photo-slot { min-height:145px; display:flex; align-items:center; justify-content:center; margin-top:20px; border:1px dashed var(--an-line); background:var(--an-bg); color:var(--an-dim); font-size:12px; }
        .artist-note-foot { margin-top:34px; display:flex; justify-content:space-between; gap:20px; color:var(--an-dim); font-size:12px; }
        .artist-note-foot a { color:var(--an-accent); text-decoration:none; }
        @media (max-width:700px) { .artist-notes-nav { padding:0 20px; } .artist-notes-brand { font-size:11px; } .artist-notes-nav-title { display:none; } .artist-notes-links { gap:10px; } .artist-notes-links a { font-size:11px; } .artist-notes-hero, .artist-picker, .artist-note { padding-right:20px; padding-left:20px; } .artist-note { padding-top:32px; padding-bottom:64px; } .artist-note-header, .artist-note-grid { grid-template-columns:1fr; } .profile-photo { max-width:150px; } .artist-note-block { min-height:auto; } .artist-note-foot { flex-direction:column; } }
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

      <header className="artist-notes-hero">
        <p className="artist-notes-kicker">ARTIST NOTES</p>
        <h1 className="artist-notes-title">작가 노트</h1>
        <p className="artist-notes-summary">
          참여 작가들의 리뷰 인터뷰와 각자의 작업계획을 담습니다. 지난 회차를 정리하는 기록이 아니라,
          울림통-변주 이후 각자의 자리에서 이어질 작업을 향한 노트입니다.
        </p>
      </header>

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
            <h2 className="artist-note-name">{selected.name}</h2>
            <p className="artist-note-team">참여 팀 · {selected.team}</p>
            <p className="artist-note-intro">이 페이지는 짧은 작가 소개와 리뷰 인터뷰, 이후의 작업계획을 함께 담는 개인 노트입니다.</p>
          </div>
        </header>

        <div className="artist-note-grid">
          <section className="artist-note-block">
            <h2>작가 소개</h2>
            <p>{selected.name} 작가의 짧은 소개를 이곳에 싣습니다. 작업의 출발점이나 현재 관심사를 두세 문장으로 적어주세요.</p>
            <p className="note-hint">소개글 입력 예정</p>
          </section>
          <section className="artist-note-block">
            <h2>리뷰 인터뷰</h2>
            <p>프로젝트를 통과하며 남은 장면, 공동 작업에서 새롭게 발견한 감각, 자신의 모뉴먼트를 다시 바라보는 질문과 답을 담습니다.</p>
            <p className="note-hint">인터뷰 입력 예정</p>
          </section>
          <section className="artist-note-block">
            <h2>작업사진</h2>
            <p>작가의 모뉴먼트 혹은 이후 작업을 보여주는 사진을 한두 장 넣습니다.</p>
            <div className="work-photo-slot">작업사진 준비 중</div>
          </section>
          <section className="artist-note-block">
            <h2>이후의 작업계획</h2>
            <p>설치 장소, 전시 방식, 다음 작업으로 이어갈 생각처럼 이후 실천할 계획을 자유롭게 정리합니다.</p>
            <p className="note-hint">작업계획 입력 예정</p>
          </section>
        </div>

        <footer className="artist-note-foot">
          <span>다른 작가를 선택하면 해당 작가의 노트로 전환됩니다.</span>
          <a href="/oolimtong_2026_wcf_record">← 팀별 작업 기록 보기</a>
        </footer>
      </article>
    </main>
  );
}
