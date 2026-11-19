import { worksOf } from "../_content/artist-notes";
import ArtistBgmPlayer from "./artist-bgm-player";
import VenueMap from "./venue-map";
import { artistPages } from "../_content/artist-pages";
import { VENUE_POINTS } from "../_content/venue-points";

// 울림통-변주 2026 작가 전시 프로필 — 흰 바탕, 홍보물(포스터·리플렛·미니배너)의 남색·파랑·연두를 글자색으로 쓴다.
// 순서: 작품(그림자를 깐 작품 사진 + 작품 정보 + 작가) → 전시 정보 → 전시 전경 → 작업하는 작가 사진 3장 → 작가 노트 → 함께 만든 대형 울림통.
// 상자 테두리나 구분선 없이 여백과 글자색만으로 단락을 나눈다. 작품 사진은 원본 해상도가 낮아 크게 키우지 않는다.

const MAIN_SHOW = {
  title: "김아영 외 17인의 시민작가 본 전시",
  period: "2026.11.21. ~ 12.13.",
  hours: "매일 11:00 – 17:00",
  places: [
    { name: "니닉크라프트", address: "원주시 문막읍 원문로 1734-15" },
    { name: "하나어린이집 야외 공터", address: "원주시 문막읍 작은애니길 38-8" },
  ],
};

// 지도에 찍을 장소 — 본 전시 두 곳과, 17인의 모뉴먼트 전시장소(같은 장소의 작가는 한 점에 모은다).
// 좌표가 없는 장소(작가 개인 공간)는 지도에 넣지 않는다.
const MAP_PLACES = (() => {
  const main = MAIN_SHOW.places
    .filter((place) => VENUE_POINTS[place.name])
    .map((place) => ({ ...place, main: true, point: VENUE_POINTS[place.name], period: MAIN_SHOW.period, hours: MAIN_SHOW.hours }));
  const byName = new Map();
  for (const artist of artistPages) {
    const venue = artist.profile?.venue;
    if (!venue?.name || !VENUE_POINTS[venue.name]) continue;
    if (!byName.has(venue.name)) {
      byName.set(venue.name, { name: venue.name, address: venue.address, period: venue.period, hours: venue.hours, point: VENUE_POINTS[venue.name], artists: [] });
    }
    byName.get(venue.name).artists.push({ name: artist.name, work: artist.profile.workTitle });
  }
  return [...main, ...byName.values()];
})();

// 게시된 작가 노트 중 앞부분(작가 노트)만 쓴다. "---" 뒤의 전시 계획은 준비 단계의 글이라 전시 프로필에서는 뺀다.
function noteBody(note) {
  if (!note) return "";
  // 노트 첫 줄의 "작가 노트" 제목은 페이지 제목과 겹치므로 뺀다.
  return note.split(/\n\s*-{3,}\s*\n/)[0].trim().replace(/^작가\s*노트\s*\n+/, "").trim();
}

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');
  /* 홍보물(포스터·리플렛·미니배너)과 같은 국립박물관문화재단클래식 — 완성형 2350자로 줄여 직접 올린다 */
  @font-face { font-family:'Museum Classic'; font-weight:500; font-display:swap; src:url('/fonts/museum-classic-M.woff2') format('woff2'); }
  @font-face { font-family:'Museum Classic'; font-weight:700; font-display:swap; src:url('/fonts/museum-classic-B.woff2') format('woff2'); }
  :root {
    --xp-navy:#17145a; --xp-blue:#1596d8; --xp-green:#169a52;
    --xp-text:#1d1b45; --xp-dim:#5d5b80; --xp-soft:#f3f5f8;
  }
  * { box-sizing:border-box; }
  html, body { margin:0; background:#fff; }
  body { color:var(--xp-text); font-family:'Noto Sans KR', sans-serif; -webkit-text-size-adjust:100%; }
  .xp { max-width:920px; margin:0 auto; padding:16px 22px 128px; }
  /* 맨 위 머리글 — 미니배너의 머리글 줄(2026 / OOLIMTONG VARIATION / 17 CITIZEN ARTISTS)을 파란 글자와 밑줄로 */
  .xp-top { display:flex; justify-content:space-between; align-items:center; gap:12px; padding:2px 0 11px; border-bottom:1px solid var(--xp-blue); }
  .xp-brand { min-width:0; color:var(--xp-blue); font-size:11px; font-weight:500; letter-spacing:.05em; text-decoration:none; white-space:nowrap; }
  .xp-brand i { font-style:normal; margin:0 .6em; }
  .xp-top .xp-all { flex:0 0 auto; font-size:13px; }
  /* 휴대폰에서는 옆의 "시민작가 17인" 링크와 겹치는 "17 CITIZEN ARTISTS"를 뺀다 */
  @media (max-width:559px) { .xp-brand .xp-cnt { display:none; } }
  @media (min-width:760px) { .xp-brand { font-size:13px; letter-spacing:.07em; } .xp-brand i { margin:0 1.1em; } .xp-top .xp-all { font-size:14px; } }
  .xp-all { color:var(--xp-navy); font-size:14px; font-weight:700; text-decoration:none; }
  .xp-all:hover { color:var(--xp-blue); }

  /* 제목·이름은 홍보물의 박물관체(국립박물관문화재단클래식) Bold */
  .xp-title, .xp-name, .xp-show, .xp-venue-head, .xp-h2, .xp-team-name {
    font-family:'Museum Classic', 'Noto Sans KR', sans-serif; font-weight:700; }
  .xp-summary { font-family:'Museum Classic', 'Noto Sans KR', sans-serif; font-weight:500; }

  /* 작품 — 은은한 원형 배경과 바닥 그림자로 작품을 앉힌다 */
  .xp-hero { display:grid; gap:8px; margin-top:10px; }
  .xp-work { position:relative; margin:0 -22px; padding:34px 22px 44px; display:flex; justify-content:center;
    background:radial-gradient(closest-side, #e8f0ec 0%, #f2f6f4 55%, rgba(255,255,255,0) 100%); }
  .xp-work img { position:relative; z-index:1; display:block; width:auto; max-width:min(78%, 400px); height:auto; max-height:340px; object-fit:contain;
    filter:drop-shadow(0 14px 18px rgba(60,42,25,.16)) drop-shadow(0 3px 4px rgba(60,42,25,.12)); }
  .xp-work::after { content:""; position:absolute; left:50%; bottom:36px; width:min(52%, 280px); height:22px; transform:translateX(-50%);
    border-radius:50%; background:radial-gradient(closest-side, rgba(40,30,20,.24), rgba(40,30,20,0)); }

  .xp-label { margin:0 0 14px; color:var(--xp-blue); font-size:13px; font-weight:700; letter-spacing:.02em; }
  .xp-title { margin:0; font-size:clamp(44px, 12.5vw, 76px); line-height:1.05; letter-spacing:-.02em; color:var(--xp-navy); }
  .xp-specs { margin:14px 0 0; padding:0; list-style:none; color:var(--xp-dim); font-size:14px; line-height:1.7; }
  .xp-summary { margin:20px 0 0; color:var(--xp-navy); font-size:18px; line-height:1.75; word-break:keep-all; }

  .xp-artist { display:grid; grid-template-columns:104px minmax(0,1fr); gap:18px; align-items:end; margin-top:34px; }
  .xp-photo { aspect-ratio:4/5; overflow:hidden; background:var(--xp-soft); }
  .xp-photo img { display:block; width:100%; height:100%; object-fit:cover; }
  .xp-team { display:inline-block; margin:0 0 8px; padding:2px 8px 3px; background:#dff3e6; color:var(--xp-green); font-size:12px; font-weight:700; }
  .xp-name { margin:0; font-size:clamp(36px, 9.5vw, 48px); line-height:1.05; letter-spacing:-.02em; color:var(--xp-navy); }
  .xp-name-en { margin:6px 0 0; color:var(--xp-navy); font-size:12px; font-weight:700; letter-spacing:.12em; }
  .xp-tagline { margin:8px 0 0; color:var(--xp-dim); font-size:14px; }

  .xp-block { margin-top:64px; }
  .xp-show { margin:0; font-size:clamp(32px, 8.5vw, 46px); line-height:1.1; letter-spacing:-.02em; color:var(--xp-green); }
  .xp-show span { color:var(--xp-blue); }
  .xp-venues { display:grid; gap:26px; margin-top:22px; }
  .xp-venue-head { margin:0 0 6px; font-size:20px; color:var(--xp-blue); }
  .xp-venue-head.is-main { color:var(--xp-green); }
  .xp-place { margin:0; color:var(--xp-navy); font-size:16px; font-weight:700; line-height:1.6; }
  .xp-place small { margin-left:6px; color:var(--xp-dim); font-size:13px; font-weight:400; }
  .xp-when { margin:2px 0 0; color:var(--xp-dim); font-size:14px; line-height:1.6; }

  /* 전시장소 지도 — 본 전시(문막)에서 원주 곳곳의 모뉴먼트 전시장소로 뻗어 나간다 */
  .xp-show-body { display:grid; gap:30px; }
  .xp-map { margin:0; }
  .xp-map-box { position:relative; z-index:0; height:300px; background:var(--xp-soft); }
  .xp-map .leaflet-container { font-family:'Noto Sans KR', sans-serif; }
  .xp-map .leaflet-control-attribution { font-size:9.5px; }
  .xp-map .leaflet-tile-pane { filter:grayscale(1) brightness(1.06) contrast(.88); opacity:.85; }
  .vm-tip { padding:2px 7px; border:0; border-radius:2px; box-shadow:0 1px 3px rgba(23,20,90,.18); color:var(--xp-navy); font-size:12px; font-weight:700; }
  .vm-tip.is-here { background:var(--xp-blue); color:#fff; }
  .vm-tip.is-here::before { border-top-color:var(--xp-blue); }
  .vm-tip.is-main { color:var(--xp-green); }
  .vm-pop { min-width:190px; color:var(--xp-text); font-family:'Noto Sans KR', sans-serif; }
  .vm-pop p { margin:0; }
  .vm-kind { color:var(--xp-blue); font-size:11.5px; font-weight:700; }
  .vm-kind.is-main { color:var(--xp-green); }
  .vm-name { margin-top:2px !important; color:var(--xp-navy); font-family:'Museum Classic','Noto Sans KR',sans-serif; font-size:18px; font-weight:700; line-height:1.3; }
  .vm-artists { margin:8px 0 0; padding:0; list-style:none; font-size:13.5px; line-height:1.7; }
  .vm-artists a { color:var(--xp-navy); font-weight:700; text-decoration:none; border-bottom:1px solid #c9d6ee; }
  .vm-artists span { color:var(--xp-dim); }
  .vm-when, .vm-addr { margin-top:6px !important; color:var(--xp-dim); font-size:12.5px; line-height:1.55; }
  .vm-addr { margin-top:2px !important; }
  .vm-links { display:flex; gap:12px; margin-top:10px !important; }
  .vm-links a { color:var(--xp-blue); font-size:12.5px; font-weight:700; text-decoration:none; }
  .xp-map figcaption { display:flex; flex-wrap:wrap; gap:4px 14px; margin-top:10px; color:var(--xp-dim); font-size:12px; }
  .xp-map-key { display:inline-block; width:8px; height:8px; margin-right:5px; border-radius:50%; background:var(--xp-navy); opacity:.55; vertical-align:1px; }
  .xp-map-key.is-main { background:var(--xp-green); opacity:1; }
  .xp-map-key.is-here { background:var(--xp-blue); opacity:1; }

  .xp-grid { display:grid; grid-template-columns:repeat(3, minmax(0,1fr)); gap:10px; }
  /* 사진이 세 장보다 많으면 한 줄로 두고 가로로 넘겨 본다 — 한 화면에 세 장 너비, 넷째 장이 살짝 보이게 */
  .xp-grid.is-scroll { display:flex; overflow-x:auto; scroll-snap-type:x mandatory; overscroll-behavior-x:contain; -webkit-overflow-scrolling:touch; padding-bottom:8px; scrollbar-width:thin; }
  .xp-grid.is-scroll .xp-photo { flex:0 0 calc((100% - 20px) / 2.8); scroll-snap-align:start; }
  .xp-install { aspect-ratio:2/1; background:var(--xp-soft); }

  .xp-h2 { margin:0 0 18px; font-size:28px; color:var(--xp-navy); }
  .xp-text { margin:0; color:var(--xp-text); font-size:16px; line-height:1.95; white-space:pre-wrap; word-break:keep-all; overflow-wrap:anywhere; }

  .xp-team-work { display:grid; grid-template-columns:104px minmax(0,1fr); gap:18px; align-items:start; }
  .xp-team-work + .xp-team-work { margin-top:28px; }
  .xp-team-thumb { display:block; width:100%; height:auto; aspect-ratio:1; object-fit:cover; background:#fff; }
  .xp-team-name { margin:0; font-size:24px; color:var(--xp-green); }
  .xp-team-work .xp-text { margin-top:6px; color:var(--xp-dim); font-size:14.5px; line-height:1.85; }

  .xp-foot { margin-top:72px; color:var(--xp-dim); font-size:12px; line-height:1.9; }
  .xp-foot-links { display:flex; flex-wrap:wrap; gap:6px 18px; margin-bottom:14px; }
  .xp-foot a { color:var(--xp-blue); text-decoration:none; font-weight:700; }
  .xp-foot a.xp-all { color:var(--xp-navy); }
  .xp-credit b { color:var(--xp-navy); font-weight:700; }

  @media (min-width:760px) {
    .xp { padding-top:26px; }
    .xp-hero { grid-template-columns:minmax(0,1.05fr) minmax(0,1fr); gap:48px; align-items:center; margin-top:28px; }
    .xp-work { margin:0; padding:56px 24px 64px; }
    .xp-work img { max-height:460px; max-width:88%; }
    .xp-work::after { bottom:54px; }
    .xp-summary { font-size:19px; white-space:pre-line; }
    .xp-artist { grid-template-columns:120px minmax(0,1fr); gap:22px; }
    .xp-grid { gap:14px; }
    .xp-block { margin-top:88px; }
    .xp-show-body { grid-template-columns:minmax(0,1fr) minmax(0,1.15fr); gap:40px; align-items:center; }
    .xp-map-box { height:340px; }
    .xp-team-work { grid-template-columns:150px minmax(0,1fr); gap:26px; }
  }
  @media print { .xp-top, .xp-foot { display:none; } }
`;

function PhotoGrid({ photos }) {
  return (
    <div className={photos.length > 3 ? "xp-grid is-scroll" : "xp-grid"}>
      {photos.map((photo) => (
        <div className="xp-photo" key={photo.src}>
          <img src={photo.src} alt={photo.alt} width="880" height="1100" loading="lazy" />
        </div>
      ))}
    </div>
  );
}

export default function ArtistProfilePage({ artist, note }) {
  const p = artist.profile;
  const teamWorks = worksOf(artist.team);
  const body = noteBody(note);
  const sizeYear = [p.size, p.year].filter(Boolean).join(" · ");

  return (
    <main className="xp">
      <style>{CSS}</style>

      <nav className="xp-top" aria-label="울림통-변주 2026">
        <a className="xp-brand" href="/artist" aria-label="시민작가 17인 목록으로">
          2026<i>/</i>OOLIMTONG VARIATION<span className="xp-cnt"><i>/</i>17 CITIZEN ARTISTS</span>
        </a>
        <a className="xp-all" href="/artist">시민작가 17인 ↗</a>
      </nav>

      <section className="xp-hero" aria-labelledby="xp-work-title">
        {p.workImage ? (
          <figure className="xp-work">
            <img src={p.workImage} alt={`${artist.name} 〈${p.workTitle}〉`} width="1000" height="1000" fetchPriority="high" />
          </figure>
        ) : <div />}
        <div>
          <h1 className="xp-title" id="xp-work-title">{p.workTitle}</h1>
          <ul className="xp-specs">
            {p.materials ? <li>{p.materials}</li> : null}
            {sizeYear ? <li>{sizeYear}</li> : null}
          </ul>
          {p.summary ? <p className="xp-summary">{p.summary}</p> : null}

          <div className="xp-artist">
            {artist.photo ? (
              <div className="xp-photo">
                <img src={artist.photo} alt={`${artist.name} 프로필 사진`} width="300" height="375" />
              </div>
            ) : <div />}
            <div>
              <p className="xp-team">팀 {artist.team}</p>
              <h2 className="xp-name">{artist.name}</h2>
              {p.nameEn ? <p className="xp-name-en">{p.nameEn}</p> : null}
              {p.tagline ? <p className="xp-tagline">{p.tagline}</p> : null}
            </div>
          </div>
        </div>
      </section>

      <section className="xp-block" aria-labelledby="xp-show-title">
        <h2 className="xp-show" id="xp-show-title">울림통 – <span>변주</span></h2>
        <div className="xp-show-body">
        <div className="xp-venues">
          {p.venue ? (
            <div>
              <p className="xp-venue-head">{p.venue.label ?? artist.name} 모뉴먼트 전시</p>
              <p className="xp-place">{p.venue.name}{p.venue.address ? <small>{p.venue.address}</small> : null}</p>
              <p className="xp-when">{[p.venue.period, p.venue.hours].filter(Boolean).join(" · ")}</p>
            </div>
          ) : null}
          <div>
            <p className="xp-venue-head is-main">{MAIN_SHOW.title}</p>
            {MAIN_SHOW.places.map((place) => (
              <p className="xp-place" key={place.name}>{place.name}<small>{place.address}</small></p>
            ))}
            <p className="xp-when">{MAIN_SHOW.period} · {MAIN_SHOW.hours}</p>
          </div>
        </div>
        <VenueMap places={MAP_PLACES} current={p.venue?.name} who={p.venue?.label ?? artist.name} />
        </div>
      </section>

      {/* 전시 전경 — 사진이 들어오기 전까지는 빈 칸만 둔다(이미지 태그를 만들지 않는다). */}
      <section className="xp-block" id="installation" aria-label="전시 전경">
        {p.installPhotos?.length ? <PhotoGrid photos={p.installPhotos} /> : <div className="xp-install is-empty" />}
      </section>

      {p.photos?.length ? (
        <section className="xp-block" aria-label={`작업하는 ${artist.name}`}>
          <PhotoGrid photos={p.photos} />
        </section>
      ) : null}

      {body ? (
        <section className="xp-block" id="note" aria-labelledby="xp-note-title">
          <h2 className="xp-h2" id="xp-note-title">작가 노트</h2>
          <p className="xp-text">{body}</p>
        </section>
      ) : null}

      {teamWorks.length ? (
        <section className="xp-block" id="team" aria-label="함께 만든 대형 울림통">
          <p className="xp-label">함께 만든 대형 울림통</p>
          {teamWorks.map((work) => (
            <div className="xp-team-work" key={work.team}>
              {work.thumb ? (
                <img className="xp-team-thumb" src={work.thumb} alt={`대형 울림통 ${work.title}`} width="640" height="640" loading="lazy" />
              ) : <div />}
              <div>
                <h2 className="xp-team-name">{work.title}</h2>
                <p className="xp-text">{work.note}</p>
              </div>
            </div>
          ))}
        </section>
      ) : null}

      <footer className="xp-foot">
        <div className="xp-foot-links">
          <a className="xp-all" href="/artist">시민작가 17인 ↗</a>
          <a href="/oolimtong_2026_wcf_record">팀별 작업 기록</a>
          <a href="/oolimtong_2026_wcf">프로젝트 메인 페이지 →</a>
        </div>
        <p className="xp-credit"><b>니닉크라프트</b> · 원주문화재단 보조금 지원사업</p>
      </footer>

      {p.playlist?.length ? <ArtistBgmPlayer tracks={p.playlist} /> : null}
    </main>
  );
}
