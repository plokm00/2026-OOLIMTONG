import { worksOf } from "../_content/artist-notes";
import ArtistBgmPlayer from "./artist-bgm-player";

// 울림통-변주 2026 작가 전시 프로필 — 흰 바탕, 홍보물(포스터·리플렛·미니배너)의 남색·파랑·연두를 글자색으로 쓴다.
// 순서: 작품 사진 → 작가(프로필 사진과 이름) → 작품 정보 → 전시 정보 → 작업하는 작가 사진 3장 → 작가 노트 → 함께 만든 대형 울림통.
// 상자 테두리나 구분선 없이 여백과 글자색만으로 단락을 나눈다.

const MAIN_SHOW = {
  title: "김아영 외 17인의 시민작가 본 전시",
  period: "2026.11.21. ~ 12.13.",
  hours: "매일 11:00 – 17:00",
  places: [
    { name: "니닉크라프트", address: "원주시 문막읍 원문로 1734-15" },
    { name: "하나어린이집 야외 공터", address: "원주시 문막읍 작은애니길 38-8" },
  ],
};

// 게시된 작가 노트 중 앞부분(작가 노트)만 쓴다. "---" 뒤의 전시 계획은 준비 단계의 글이라 전시 프로필에서는 뺀다.
function noteBody(note) {
  if (!note) return "";
  return note.split(/\n\s*-{3,}\s*\n/)[0].trim();
}

export default function ArtistProfilePage({ artist, note }) {
  const p = artist.profile;
  const teamWorks = worksOf(artist.team);
  const body = noteBody(note);

  return (
    <main className="xp">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Noto+Sans+KR:wght@400;500;700&display=swap');
        :root {
          --xp-navy:#17145a; --xp-blue:#1596d8; --xp-green:#169a52;
          --xp-text:#1d1b45; --xp-dim:#5d5b80; --xp-soft:#f2f5fb;
        }
        * { box-sizing:border-box; }
        html, body { margin:0; background:#fff; }
        body { color:var(--xp-text); font-family:'Noto Sans KR', sans-serif; -webkit-text-size-adjust:100%; }
        .xp { max-width:720px; margin:0 auto; padding:18px 22px 128px; }
        .xp-top { display:flex; justify-content:space-between; align-items:baseline; gap:12px; }
        .xp-brand { font-family:'Gowun Dodum', sans-serif; font-size:15px; letter-spacing:-.01em; text-decoration:none; color:var(--xp-green); }
        .xp-brand b { font-weight:400; color:var(--xp-blue); }
        .xp-top-link { color:var(--xp-dim); font-size:12px; text-decoration:none; }
        .xp-top-link:hover { color:var(--xp-navy); }

        .xp-work { margin:22px 0 0; display:flex; justify-content:center; }
        .xp-work img { display:block; width:auto; max-width:100%; height:auto; max-height:min(78vh, 640px); object-fit:contain; }

        .xp-grid { display:grid; grid-template-columns:repeat(3, minmax(0,1fr)); gap:10px; }
        .xp-head { margin-top:40px; align-items:end; }
        .xp-photo { aspect-ratio:4/5; overflow:hidden; background:var(--xp-soft); }
        .xp-photo img { display:block; width:100%; height:100%; object-fit:cover; }
        .xp-who { grid-column:span 2; padding-left:10px; }
        .xp-eyebrow-long { display:none; }
        .xp-eyebrow { margin:0 0 10px; color:var(--xp-blue); font-size:11px; font-weight:700; letter-spacing:.14em; }
        .xp-name { margin:0; font-family:'Gowun Dodum', sans-serif; font-weight:400; font-size:clamp(44px, 13vw, 76px); line-height:1; letter-spacing:-.04em; color:var(--xp-blue); }
        .xp-tagline { margin:12px 0 0; color:var(--xp-navy); font-size:15px; }
        .xp-team { display:inline-block; margin:12px 0 0; padding:3px 10px 4px; background:var(--xp-green); color:#fff; font-size:12px; font-weight:700; letter-spacing:.06em; }

        .xp-block { margin-top:56px; }
        .xp-label { margin:0 0 14px; color:var(--xp-blue); font-size:11px; font-weight:700; letter-spacing:.14em; }
        .xp-title { margin:0; font-family:'Gowun Dodum', sans-serif; font-weight:400; font-size:clamp(40px, 11vw, 64px); line-height:1.05; letter-spacing:-.02em; color:var(--xp-green); }
        .xp-specs { margin:16px 0 0; padding:0; list-style:none; color:var(--xp-navy); font-size:15px; line-height:1.8; }
        .xp-summary { margin:22px 0 0; color:var(--xp-navy); font-family:'Gowun Dodum', sans-serif; font-size:17.5px; line-height:1.75; word-break:keep-all; }

        .xp-show { margin:0; font-family:'Gowun Dodum', sans-serif; font-weight:400; font-size:clamp(30px, 8vw, 42px); line-height:1.1; letter-spacing:-.02em; color:var(--xp-green); }
        .xp-show span { color:var(--xp-blue); }
        .xp-venue + .xp-venue { margin-top:26px; }
        .xp-venue-head { margin:22px 0 6px; font-family:'Gowun Dodum', sans-serif; font-size:20px; color:var(--xp-blue); }
        .xp-venue-head.is-main { color:var(--xp-green); }
        .xp-place { margin:0; color:var(--xp-navy); font-size:16px; font-weight:500; line-height:1.6; }
        .xp-place small { margin-left:6px; color:var(--xp-dim); font-size:13px; font-weight:400; }
        .xp-when { margin:2px 0 0; color:var(--xp-dim); font-size:14px; line-height:1.6; }

        .xp-shots { margin-top:56px; }

        .xp-text { margin:0; color:var(--xp-text); font-size:16px; line-height:1.95; white-space:pre-wrap; word-break:keep-all; overflow-wrap:anywhere; }
        .xp-note-title { margin:0 0 18px; font-family:'Gowun Dodum', sans-serif; font-weight:400; font-size:26px; color:var(--xp-navy); }

        .xp-team-work + .xp-team-work { margin-top:28px; }
        .xp-team-name { margin:0; font-family:'Gowun Dodum', sans-serif; font-weight:400; font-size:24px; color:var(--xp-green); }
        .xp-team-work .xp-text { margin-top:8px; color:var(--xp-dim); font-size:14.5px; line-height:1.85; }

        .xp-foot { margin-top:72px; color:var(--xp-dim); font-size:12px; line-height:1.9; }
        .xp-foot-links { display:flex; flex-wrap:wrap; gap:6px 18px; margin-bottom:14px; }
        .xp-foot a { color:var(--xp-blue); text-decoration:none; font-weight:500; }
        .xp-foot a:hover { text-decoration:underline; text-underline-offset:3px; }
        .xp-credit b { color:var(--xp-navy); font-weight:700; }

        @media (min-width:640px) {
          .xp { padding-top:28px; }
          .xp-grid { gap:14px; }
          .xp-who { padding-left:18px; }
          .xp-block, .xp-shots { margin-top:72px; }
          .xp-summary { font-size:19px; white-space:pre-line; }
          .xp-eyebrow-long { display:inline; }
        }
        @media print { .xp-top, .xp-foot { display:none; } }
      `}</style>

      <nav className="xp-top" aria-label="울림통-변주 2026">
        <a className="xp-brand" href="/oolimtong_2026_wcf">울림통 – <b>변주</b></a>
        <a className="xp-top-link" href="/artist">참여 작가 17인 →</a>
      </nav>

      {p.workImage ? (
        <figure className="xp-work">
          <img src={p.workImage} alt={`${artist.name} 〈${p.workTitle}〉`} width="1000" height="1000" fetchPriority="high" />
        </figure>
      ) : null}

      <header className="xp-grid xp-head">
        {artist.photo ? (
          <div className="xp-photo">
            <img src={artist.photo} alt={`${artist.name} 프로필 사진`} width="300" height="375" />
          </div>
        ) : <div />}
        <div className="xp-who">
          <p className="xp-eyebrow"><span className="xp-eyebrow-long">2026 · OOLIMTONG VARIATION · </span>17 CITIZEN ARTISTS</p>
          <h1 className="xp-name">{artist.name}</h1>
          {p.tagline ? <p className="xp-tagline">{p.tagline}</p> : null}
          <p className="xp-team">TEAM {artist.team}</p>
        </div>
      </header>

      <section className="xp-block" aria-labelledby="xp-work-title">
        <p className="xp-label">WORK</p>
        <h2 className="xp-title" id="xp-work-title">{p.workTitle}</h2>
        <ul className="xp-specs">
          {p.materials ? <li>{p.materials}</li> : null}
          {p.size ? <li>{p.size}</li> : null}
          {p.year ? <li>{p.year}</li> : null}
        </ul>
        {p.summary ? <p className="xp-summary">{p.summary}</p> : null}
      </section>

      <section className="xp-block" aria-labelledby="xp-show-title">
        <p className="xp-label">EXHIBITION</p>
        <h2 className="xp-show" id="xp-show-title">울림통 – <span>변주</span></h2>

        {p.venue ? (
          <div className="xp-venue">
            <p className="xp-venue-head">{artist.name} 모뉴먼트 전시</p>
            <p className="xp-place">{p.venue.name}{p.venue.address ? <small>{p.venue.address}</small> : null}</p>
            <p className="xp-when">{[p.venue.period, p.venue.hours].filter(Boolean).join(" · ")}</p>
          </div>
        ) : null}

        <div className="xp-venue">
          <p className="xp-venue-head is-main">{MAIN_SHOW.title}</p>
          {MAIN_SHOW.places.map((place) => (
            <p className="xp-place" key={place.name}>{place.name}<small>{place.address}</small></p>
          ))}
          <p className="xp-when">{MAIN_SHOW.period} · {MAIN_SHOW.hours}</p>
        </div>
      </section>

      {p.photos?.length ? (
        <section className="xp-grid xp-shots" aria-label={`작업하는 ${artist.name}`}>
          {p.photos.map((photo) => (
            <div className="xp-photo" key={photo.src}>
              <img src={photo.src} alt={photo.alt} width="880" height="1100" loading="lazy" />
            </div>
          ))}
        </section>
      ) : null}

      {body ? (
        <section className="xp-block" id="note" aria-labelledby="xp-note-title">
          <p className="xp-label">ARTIST NOTE</p>
          <h2 className="xp-note-title" id="xp-note-title">작가 노트</h2>
          <p className="xp-text">{body}</p>
        </section>
      ) : null}

      {teamWorks.length ? (
        <section className="xp-block" id="team" aria-label="함께 만든 대형 울림통">
          <p className="xp-label">TOGETHER · 함께 만든 대형 울림통</p>
          {teamWorks.map((work) => (
            <div className="xp-team-work" key={work.team}>
              <h2 className="xp-team-name">{work.title}</h2>
              <p className="xp-text">{work.note}</p>
            </div>
          ))}
        </section>
      ) : null}

      <footer className="xp-foot">
        <div className="xp-foot-links">
          <a href="/artist">참여 작가 17인</a>
          <a href={`/oolimtong_2026_wcf_artists#${artist.id}`}>작가 노트 모아보기</a>
          <a href="/oolimtong_2026_wcf_record">팀별 작업 기록</a>
        </div>
        <p className="xp-credit"><b>니닉크라프트</b> · 원주문화재단 보조금 지원사업</p>
      </footer>

      {p.playlist?.length ? <ArtistBgmPlayer tracks={p.playlist} /> : null}
    </main>
  );
}
