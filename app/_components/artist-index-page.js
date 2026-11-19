// 리플렛 QR 하나로 들어오는 참여 작가 17인 목록. 이름을 누르면 /artist/이름 개인 페이지로 간다.
// 전시용 페이지라 아카이브(작가 노트 모아보기)가 아닌 개인 전시 프로필과 같은 디자인을 쓴다:
// 흰 바탕, 홍보물의 남색·파랑·연두, 제목·이름은 박물관체(국립박물관문화재단클래식).

import { largeWorks, projectIntro } from "../_content/oolimtong-works";

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');
  @font-face { font-family:'Museum Classic'; font-weight:500; font-display:swap; src:url('/fonts/museum-classic-M.woff2') format('woff2'); }
  @font-face { font-family:'Museum Classic'; font-weight:700; font-display:swap; src:url('/fonts/museum-classic-B.woff2') format('woff2'); }
  :root {
    --xp-navy:#17145a; --xp-blue:#1596d8; --xp-green:#169a52;
    --xp-text:#1d1b45; --xp-dim:#5d5b80; --xp-soft:#f3f5f8;
  }
  * { box-sizing:border-box; }
  html, body { margin:0; background:#fff; }
  body { color:var(--xp-text); font-family:'Noto Sans KR', sans-serif; -webkit-text-size-adjust:100%; }
  .xi { max-width:920px; min-height:100vh; margin:0 auto; padding:16px 22px 72px; }
  .xi-title, .xi-name { font-family:'Museum Classic', 'Noto Sans KR', sans-serif; font-weight:700; }
  .xi-lead { font-family:'Museum Classic', 'Noto Sans KR', sans-serif; font-weight:500; }

  /* 맨 위 머리글 — 개인 페이지와 같은 미니배너 머리글 줄 */
  .xi-top { padding:2px 0 11px; border-bottom:1px solid var(--xp-blue); }
  .xi-brand { color:var(--xp-blue); font-size:11px; font-weight:500; letter-spacing:.05em; text-decoration:none; white-space:nowrap; }
  .xi-brand i { font-style:normal; margin:0 .6em; }
  @media (min-width:760px) { .xi-brand { font-size:13px; letter-spacing:.07em; } .xi-brand i { margin:0 1.1em; } }

  .xi-head { padding:42px 0 34px; }
  .xi-title { margin:0; font-size:clamp(44px, 12.5vw, 76px); line-height:1.05; letter-spacing:-.02em; color:var(--xp-navy); }
  .xi-lead { margin:18px 0 0; color:var(--xp-navy); font-size:18px; line-height:1.75; word-break:keep-all; }

  /* 단체 사진 — 머리글과 17인 목록 사이 */
  .xi-group { margin:0 0 48px; }
  .xi-group img { display:block; width:100%; height:auto; background:var(--xp-soft); }
  .xi-group figcaption { margin-top:8px; color:var(--xp-dim); font-size:11.5px; line-height:1.6; word-break:keep-all; }
  .xi-grid { display:grid; grid-template-columns:repeat(2, minmax(0,1fr)); gap:26px 14px; margin:0; padding:0; list-style:none; }
  .xi-card { display:block; color:inherit; text-decoration:none; }
  .xi-photo { aspect-ratio:4/5; overflow:hidden; background:var(--xp-soft); }
  .xi-photo img { display:block; width:100%; height:100%; object-fit:cover; transition:transform .3s ease; }
  .xi-team { display:inline-block; margin:12px 0 6px; padding:2px 8px 3px; background:#dff3e6; color:var(--xp-green); font-size:11.5px; font-weight:700; }
  .xi-name { margin:0; font-size:26px; line-height:1.1; letter-spacing:-.02em; color:var(--xp-navy); }
  .xi-work { margin:5px 0 0; color:var(--xp-blue); font-size:13.5px; font-weight:700; }
  /* 모뉴먼트 전시장소 — 장소 이름만, 기간은 본전시(11.21~12.13)와 다를 때만 */
  .xi-venue { position:relative; margin:6px 0 0; padding-left:13px; color:var(--xp-dim); font-size:12.5px; line-height:1.5; word-break:keep-all; }
  .xi-venue::before { content:""; position:absolute; left:1px; top:.45em; width:7px; height:7px; border-radius:50% 50% 50% 0; background:var(--xp-green); transform:rotate(-45deg); }
  .xi-venue span { display:block; }
  .xi-card:focus-visible { outline:2px solid var(--xp-blue); outline-offset:4px; }
  @media (hover:hover) and (pointer:fine) {
    .xi-card:hover .xi-photo img { transform:scale(1.03); }
  }

  /* 프로젝트 소개 + 대형 울림통 세 기 — 리플렛 내지처럼, 작품 사진이 카드 가장자리에서 잘려 나간다 */
  .xi-intro { margin:0 0 56px; }
  .xi-intro h2 { margin:0 0 18px; font-family:'Museum Classic','Noto Sans KR',sans-serif; font-weight:700; color:var(--xp-blue); font-size:clamp(25px, 6.4vw, 36px); line-height:1.3; letter-spacing:-.01em; word-break:keep-all; }
  .xi-intro p { margin:0 0 14px; font-size:15px; line-height:1.85; word-break:keep-all; }
  .xi-works { display:grid; gap:22px; margin:0 0 64px; }
  .xi-leaflet { justify-self:start; padding:10px 16px 11px; border:1px solid var(--xp-blue); color:var(--xp-blue); font-size:14px; font-weight:700; text-decoration:none; }
  .xi-leaflet:focus-visible { outline:2px solid var(--xp-blue); outline-offset:3px; }
  .xi-big { position:relative; display:grid; overflow:hidden; background:var(--xp-soft); }
  .xi-big-text { position:relative; z-index:1; padding:26px 22px 8px; }
  .xi-tags { display:flex; flex-wrap:wrap; gap:8px; margin:0 0 16px; }
  .xi-tag { display:inline-block; margin:0; padding:5.5px 10px 3.5px; color:#fff; font-family:'Museum Classic','Noto Sans KR',sans-serif; font-weight:700; font-size:20px; line-height:1.15; }
  .xi-tag.is-work { background:var(--xp-green); }
  .xi-tag.is-team { background:var(--xp-blue); }
  .xi-big-text > p { margin:0 0 18px; font-size:15px; line-height:1.8; word-break:keep-all; }
  .xi-members { display:grid; grid-template-columns:1fr; gap:5px 14px; margin:0; padding:0; list-style:none; }
  .xi-members a { display:flex; gap:6px; color:var(--xp-text); text-decoration:none; font-size:14px; line-height:1.5; word-break:keep-all; }
  .xi-members b { color:var(--xp-blue); font-weight:500; min-width:1.3em; }
  .xi-members span { color:var(--xp-dim); }
  .xi-members a:focus-visible { outline:2px solid var(--xp-blue); outline-offset:2px; }
  .xi-mons { display:flex; flex-wrap:wrap; align-items:flex-end; gap:14px 18px; margin:22px 0 0; padding:0; list-style:none; }
  .xi-mons a { position:relative; display:block; }
  .xi-mons img { display:block; height:54px; width:auto; transition:opacity .3s ease; }
  /* 롤오버 — 작품 섬네일이 홍보물의 푸른 망점 모뉴먼트로 바뀐다(17인 카드와 같은 이미지) */
  .xi-mons .xi-mons-blue { position:absolute; left:50%; bottom:0; height:54px; width:auto; max-width:none; transform:translateX(-50%); opacity:0; transition:opacity .3s ease; }
  .xi-mons i { position:absolute; top:-6px; right:-10px; color:var(--xp-blue); font-style:normal; font-size:13px; font-weight:500; }
  .xi-big-pic { position:relative; height:330px; }
  /* 흰 배경 사진을 곱하기로 얹어 카드 바탕색에 녹인다 */
  .xi-big-pic img { position:absolute; height:100%; width:auto; max-width:none; mix-blend-mode:multiply; }
  .xi-big.bleed-left .xi-big-pic img { left:-7%; bottom:-7%; }
  .xi-big.bleed-right .xi-big-pic img { right:-6%; bottom:-6%; }
  @media (hover:hover) and (pointer:fine) {
    .xi-members a:hover { color:var(--xp-blue); }
    .xi-leaflet:hover { background:var(--xp-blue); color:#fff; }
    .xi-mons a:hover img:not(.xi-mons-blue) { opacity:0; }
    .xi-mons a:hover .xi-mons-blue { opacity:1; }
  }
  @media (min-width:760px) {
    .xi-intro { margin-bottom:72px; }
    .xi-intro p { font-size:16px; }
    .xi-works { gap:28px; margin-bottom:80px; }
    .xi-big { grid-template-columns:1fr 1fr; min-height:440px; }
    .xi-big-text { padding:40px 36px 36px; }
    .xi-members { grid-template-columns:repeat(2, minmax(0,1fr)); }
    .xi-big-pic { height:auto; }
    .xi-big-pic img { height:96%; }
    .xi-big.bleed-left .xi-big-pic { order:-1; }
    .xi-big.bleed-left .xi-big-pic img { left:-11%; bottom:-7%; }
    .xi-big.bleed-right .xi-big-pic img { right:-7%; bottom:-5%; }
    /* 설명 글을 카드 가운데 쪽으로 — 사진 반대편 바깥 여백을 넓힌다 */
    .xi-big.bleed-left .xi-big-text { padding-left:12px; padding-right:60px; }
    .xi-big.bleed-right .xi-big-text { padding-left:60px; padding-right:12px; }
  }

  .xi-foot { margin-top:72px; color:var(--xp-dim); font-size:12px; line-height:1.9; }
  .xi-foot-links { display:flex; flex-wrap:wrap; gap:6px 18px; margin-bottom:14px; }
  .xi-foot a { color:var(--xp-blue); text-decoration:none; font-weight:700; }
  .xi-foot a.xi-home { color:var(--xp-navy); }

  @media (min-width:560px) { .xi-grid { grid-template-columns:repeat(3, minmax(0,1fr)); } }
  @media (min-width:760px) {
    .xi-group { margin-bottom:64px; }
    .xi { padding-top:26px; }
    .xi-head { padding:64px 0 48px; }
    .xi-lead { font-size:19px; }
    .xi-grid { grid-template-columns:repeat(4, minmax(0,1fr)); gap:36px 20px; }
  }
`;

// 본전시 기간과 같으면 아무것도 쓰지 않고, 다르면 "11.24~11.29", "~11.28"처럼 짧게 쓴다.
const MAIN_START = "11.21";
const MAIN_END = "12.13";
function venueNote(venue) {
  if (venue.name === "작가 개인 공간") return "초대 관람";
  const days = (venue.period || "").match(/(?<!\d)\d{1,2}\.\d{1,2}(?=\.)/g);
  if (!days || days.length < 2) return "";
  const [start, end] = [days[days.length - 2], days[days.length - 1]];
  if (start === MAIN_START && end === MAIN_END) return "";
  return start === MAIN_START ? `~${end}` : `${start}~${end}`;
}

export default function ArtistIndexPage({ artists }) {
  const byName = new Map(artists.map((artist) => [artist.name, artist]));
  return (
    <main className="xi">
      <style>{CSS}</style>

      <nav className="xi-top" aria-label="울림통-변주 2026">
        <a className="xi-brand" href="/oolimtong_2026_wcf" aria-label="울림통-변주 2026 메인으로">
          2026<i>/</i>OOLIMTONG VARIATION<i>/</i>17 CITIZEN ARTISTS
        </a>
      </nav>

      <header className="xi-head">
        <h1 className="xi-title">시민작가 {artists.length}인</h1>
        <p className="xi-lead">이름을 누르면 작가와 작품 이야기를 볼 수 있습니다.</p>
      </header>

      <figure className="xi-group">
        <img src="/artist-media/group-photo.webp" alt="대형 울림통 앞에 모인 시민작가와 가족들" width="1840" height="874" />
        <figcaption>당일 함께하지 못한 4인은 AI를 활용해 합성하였습니다.</figcaption>
      </figure>

      <section className="xi-intro" aria-labelledby="xi-intro-title">
        <h2 id="xi-intro-title">{projectIntro.title}</h2>
        {projectIntro.paragraphs.map((text) => (
          <p key={text.slice(0, 12)}>{text}</p>
        ))}
        <a className="xi-leaflet" href="/oolimtong_2026_wcf_leaflet">리플렛 온라인 보기 →</a>
      </section>

      <section className="xi-works" aria-label="대형 울림통 세 기">
        {largeWorks.map((work) => (
          <article key={work.id} id={work.id} className={`xi-big ${work.layout}`}>
            <div className="xi-big-text">
              <div className="xi-tags">
                <h2 className="xi-tag is-work">{work.title}</h2>
                <span className="xi-tag is-team">Team {work.team}</span>
              </div>
              <p>{work.text}</p>
              <ol className="xi-members">
                {work.members.map((member) => (
                  <li key={member.no}>
                    <a href={`/artist/${encodeURIComponent(member.name)}`}>
                      <b>{member.no}</b>
                      <em style={{ fontStyle: "normal" }}>
                        {member.name}
                        {member.note ? <span>*{member.note}</span> : null} <span>〈{member.work}〉</span>
                      </em>
                    </a>
                  </li>
                ))}
              </ol>
              <ul className="xi-mons" aria-hidden="true">
                {work.members.map((member) => {
                  const profile = byName.get(member.name)?.profile;
                  const image = profile?.workImage;
                  return image ? (
                    <li key={member.no}>
                      <a href={`/artist/${encodeURIComponent(member.name)}`} tabIndex={-1}>
                        <img src={image} alt="" loading="lazy" />
                        {profile.monument ? <img className="xi-mons-blue" src={profile.monument} alt="" loading="lazy" /> : null}
                        <i>{member.no}</i>
                      </a>
                    </li>
                  ) : null;
                })}
              </ul>
            </div>
            <div className="xi-big-pic">
              <img src={work.image} alt={work.alt} loading="lazy" />
            </div>
          </article>
        ))}
      </section>

      <ul className="xi-grid">
        {artists.map((artist) => (
          <li key={artist.id}>
            <a className="xi-card" href={`/artist/${encodeURIComponent(artist.slug)}`}>
              <div className="xi-photo">
                {artist.photo ? (
                  <img src={artist.photo} alt="" width="300" height="375" loading="lazy" />
                ) : null}
              </div>
              <p className="xi-team">팀 {artist.team}</p>
              <p className="xi-name">{artist.name}</p>
              {artist.profile?.workTitle ? <p className="xi-work">〈{artist.profile.workTitle}〉</p> : null}
              {artist.profile?.venue?.name ? (
                <p className="xi-venue">
                  {artist.profile.venue.name}
                  {venueNote(artist.profile.venue) ? <span>{venueNote(artist.profile.venue)}</span> : null}
                </p>
              ) : null}
            </a>
          </li>
        ))}
      </ul>

      <footer className="xi-foot">
        <div className="xi-foot-links">
          <a href="/oolimtong_2026_wcf_leaflet">리플렛 온라인 보기 →</a>
          <a href="/oolimtong_2026_wcf_record">팀별 작업 기록 →</a>
          <a href="/oolimtong_2026_wcf">메인으로 →</a>
        </div>
        <p className="xi-credit"><a className="xi-home" href="https://ninnikkraft.vercel.app/">니닉크라프트</a> · 원주문화재단 보조금 지원사업</p>
      </footer>
    </main>
  );
}
