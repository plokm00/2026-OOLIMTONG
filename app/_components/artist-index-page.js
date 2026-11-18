// 리플렛 QR 하나로 들어오는 참여 작가 17인 목록. 이름을 누르면 /artist/이름 개인 페이지로 간다.
// 전시용 페이지라 아카이브(작가 노트 모아보기)가 아닌 개인 전시 프로필과 같은 디자인을 쓴다:
// 흰 바탕, 홍보물의 남색·파랑·연두, 제목·이름은 박물관체(국립박물관문화재단클래식).

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
  .xi-card:active .xi-name, .xi-card:focus-visible .xi-name { color:var(--xp-blue); }
  .xi-card:focus-visible { outline:2px solid var(--xp-blue); outline-offset:4px; }
  @media (hover:hover) and (pointer:fine) {
    .xi-card:hover .xi-name { color:var(--xp-blue); }
    .xi-card:hover .xi-photo img { transform:scale(1.03); }
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
        <img src="/artist-media/group-photo.webp" alt="대형 울림통 앞에 모인 시민작가와 가족들" width="1840" height="859" />
        <figcaption>당일 함께하지 못한 4인은 AI를 활용해 합성하였습니다.</figcaption>
      </figure>

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
