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
  /* 롤오버 — 마우스를 올리면 프로필 사진 대신 모뉴먼트 컷아웃이 떠오른다 */
  .xi-photo { position:relative; }
  .xi-photo .xi-mon { position:absolute; inset:0; width:100%; height:100%; padding:14%; object-fit:contain; background:var(--xp-soft); opacity:0; transition:opacity .35s ease; }
  .xi-card:focus-visible .xi-photo .xi-mon { opacity:1; }
  .xi-photo img { display:block; width:100%; height:100%; object-fit:cover; transition:transform .3s ease; }
  .xi-team { display:inline-block; margin:12px 0 6px; padding:2px 8px 3px; background:#dff3e6; color:var(--xp-green); font-size:11.5px; font-weight:700; }
  .xi-name { margin:0; font-size:26px; line-height:1.1; letter-spacing:-.02em; color:var(--xp-navy); }
  .xi-work { margin:5px 0 0; color:var(--xp-blue); font-size:13.5px; font-weight:700; }
  .xi-card:active .xi-name, .xi-card:focus-visible .xi-name { color:var(--xp-blue); }
  .xi-card:focus-visible { outline:2px solid var(--xp-blue); outline-offset:4px; }
  @media (hover:hover) and (pointer:fine) {
    .xi-card:hover .xi-name { color:var(--xp-blue); }
    .xi-card:hover .xi-photo img { transform:scale(1.03); }
    .xi-card:hover .xi-photo .xi-mon { opacity:1; transform:none; }
  }

  /* 프로젝트 소개 + 대형 울림통 세 기 — 리플렛 내지처럼, 작품 사진이 카드 가장자리에서 잘려 나간다 */
  .xi-intro { margin:0 0 56px; }
  .xi-intro h2 { margin:0 0 18px; font-family:'Museum Classic','Noto Sans KR',sans-serif; font-weight:700; color:var(--xp-blue); font-size:clamp(25px, 6.4vw, 36px); line-height:1.3; letter-spacing:-.01em; word-break:keep-all; }
  .xi-intro p { margin:0 0 14px; font-size:15px; line-height:1.85; word-break:keep-all; }
  .xi-works { display:grid; gap:22px; margin:0 0 64px; }
  .xi-big { position:relative; display:grid; overflow:hidden; background:var(--xp-soft); }
  .xi-big-text { position:relative; z-index:1; padding:26px 22px 8px; }
  .xi-tags { display:flex; flex-wrap:wrap; gap:8px; margin:0 0 16px; }
  .xi-tag { display:inline-block; margin:0; padding:4px 10px 5px; color:#fff; font-family:'Museum Classic','Noto Sans KR',sans-serif; font-weight:700; font-size:20px; line-height:1.15; }
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
  .xi-mons img { display:block; height:54px; width:auto; transition:transform .25s ease; }
  .xi-mons i { position:absolute; top:-6px; right:-10px; color:var(--xp-blue); font-style:normal; font-size:13px; font-weight:500; }
  .xi-big-pic { position:relative; height:330px; }
  .xi-big-pic img { position:absolute; height:118%; width:auto; max-width:none; }
  .xi-big.bleed-left .xi-big-pic img { left:-14%; bottom:-8%; }
  .xi-big.bleed-right .xi-big-pic img { right:-12%; bottom:-6%; }
  @media (hover:hover) and (pointer:fine) {
    .xi-members a:hover { color:var(--xp-blue); }
    .xi-mons a:hover img { transform:translateY(-4px); }
  }
  @media (min-width:760px) {
    .xi-intro { margin-bottom:72px; }
    .xi-intro p { font-size:16px; }
    .xi-works { gap:28px; margin-bottom:80px; }
    .xi-big { grid-template-columns:1fr 1fr; min-height:440px; }
    .xi-big-text { padding:40px 36px 36px; }
    .xi-members { grid-template-columns:repeat(2, minmax(0,1fr)); }
    .xi-big-pic { height:auto; }
    .xi-big-pic img { height:112%; }
    .xi-big.bleed-left .xi-big-pic { order:-1; }
    .xi-big.bleed-left .xi-big-pic img { left:-22%; bottom:-10%; }
    .xi-big.bleed-right .xi-big-pic img { right:-14%; bottom:-6%; }
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
                  const image = byName.get(member.name)?.profile?.workImage;
                  return image ? (
                    <li key={member.no}>
                      <a href={`/artist/${encodeURIComponent(member.name)}`} tabIndex={-1}>
                        <img src={image} alt="" loading="lazy" />
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
                {artist.profile?.monument ? (
                  <img className="xi-mon" src={artist.profile.monument} alt="" loading="lazy" />
                ) : null}
              </div>
              <p className="xi-team">팀 {artist.team}</p>
              <p className="xi-name">{artist.name}</p>
              {artist.profile?.workTitle ? <p className="xi-work">〈{artist.profile.workTitle}〉</p> : null}
            </a>
          </li>
        ))}
      </ul>

      <footer className="xi-foot">
        <div className="xi-foot-links">
          <a href="/oolimtong_2026_wcf_record">팀별 작업 기록 →</a>
          <a href="/oolimtong_2026_wcf">메인으로 →</a>
        </div>
        <p className="xi-credit"><a className="xi-home" href="https://ninnikkraft.vercel.app/">니닉크라프트</a> · 원주문화재단 보조금 지원사업</p>
      </footer>
    </main>
  );
}
