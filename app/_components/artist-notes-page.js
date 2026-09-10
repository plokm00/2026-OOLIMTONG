"use client";

import { useEffect, useMemo, useState } from "react";

import { artists, worksOf } from "../_content/artist-notes";
import PublishedArtistNote from "./published-artist-note";

// 작업 기록 페이지(네모 → 고리 → 미로)와 같은 팀 순서를 쓴다.
const teamOrder = ["네모", "고리", "미로"];

const sortOptions = [
  { id: "name", label: "가나다순" },
  { id: "team", label: "팀별" },
];

function teamRank(artist) {
  // 조영범처럼 두 팀에 걸친 작가는 앞선 팀 기준으로 묶는다.
  const index = teamOrder.indexOf(artist.team.split("·")[0].trim());
  return index === -1 ? teamOrder.length : index;
}

function initialArtist() {
  if (typeof window === "undefined") return artists[0];
  const id = window.location.hash.slice(1);
  return artists.find((artist) => artist.id === id) ?? artists[0];
}

export default function ArtistNotesPage() {
  const [selected, setSelected] = useState(initialArtist);
  const [sort, setSort] = useState("name");

  // artists는 이미 가나다순이고, sort는 안정 정렬이라 팀 안에서도 가나다순이 유지된다.
  const orderedArtists = useMemo(
    () => (sort === "team" ? [...artists].sort((a, b) => teamRank(a) - teamRank(b)) : artists),
    [sort],
  );

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
        .artist-picker-head { display:flex; flex-wrap:wrap; align-items:center; gap:8px 14px; margin-bottom:14px; }
        .artist-picker-label { color:var(--an-accent2); font-size:12px; font-weight:700; letter-spacing:.08em; }
        .artist-picker-sort { display:flex; gap:6px; }
        .artist-picker-sort button { padding:2px 5px; border:1px solid var(--an-line); border-radius:3px; background:transparent; color:var(--an-dim); cursor:pointer; font:600 9px 'Noto Sans KR', sans-serif; letter-spacing:.04em; transition:background .18s,border-color .18s,color .18s; }
        .artist-picker-sort button:hover { background:var(--an-bg2); color:var(--an-text); }
        .artist-picker-sort button[aria-pressed='true'] { border-color:var(--an-accent); background:var(--an-accent); color:var(--an-bg); }
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
        .artist-note-work-note { margin:0; color:var(--an-dim); font-size:12.5px; line-height:1.6; letter-spacing:-.015em; }


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
        <div className="artist-picker-head">
          <span className="artist-picker-label">참여 작가 선택</span>
          <div className="artist-picker-sort" role="group" aria-label="작가 목록 정렬">
            {sortOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                aria-pressed={sort === option.id}
                onClick={() => setSort(option.id)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
        <div className="artist-picker-list">
          {orderedArtists.map((artist) => (
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
          참여 작가 17인의 답변을 바탕으로 완성된 작가 노트 AI 초안과 모뉴먼트 전시 계획을 모았습니다.
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

        <PublishedArtistNote artist={selected} />

        <footer className="artist-note-foot">
          <span>다른 작가를 선택하면 해당 작가의 노트로 전환됩니다.</span>
          <a href="/oolimtong_2026_wcf_record">← 팀별 작업 기록 보기</a>
        </footer>
      </article>
    </main>
  );
}
