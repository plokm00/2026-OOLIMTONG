// 리플렛 온라인 보기 — 인쇄 리플렛을 한 면씩 세로로 넘겨 본다. 면을 누르면 원본 크기로 열려 확대해 읽을 수 있다.
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');
  @font-face { font-family:'Museum Classic'; font-weight:700; font-display:swap; src:url('/fonts/museum-classic-B.woff2') format('woff2'); }
  :root { --xp-navy:#17145a; --xp-blue:#1596d8; --xp-text:#1d1b45; --xp-dim:#5d5b80; --xp-soft:#f3f5f8; }
  * { box-sizing:border-box; }
  html, body { margin:0; background:#fff; }
  body { color:var(--xp-text); font-family:'Noto Sans KR', sans-serif; -webkit-text-size-adjust:100%; }
  .xl { max-width:680px; margin:0 auto; padding:16px 16px 72px; }
  .xl-top { display:flex; justify-content:space-between; gap:12px; padding:2px 0 11px; border-bottom:1px solid var(--xp-blue); }
  .xl-top a { color:var(--xp-blue); font-size:11px; font-weight:500; letter-spacing:.05em; text-decoration:none; white-space:nowrap; }
  .xl-head { padding:36px 0 26px; }
  .xl-title { margin:0; font-family:'Museum Classic','Noto Sans KR',sans-serif; font-weight:700; color:var(--xp-navy); font-size:clamp(34px, 9vw, 52px); line-height:1.1; letter-spacing:-.02em; }
  .xl-lead { margin:12px 0 0; color:var(--xp-dim); font-size:13.5px; line-height:1.7; word-break:keep-all; }
  .xl-list { display:grid; gap:28px; margin:0; padding:0; list-style:none; counter-reset:panel; }
  .xl-panel figure { margin:0; }
  .xl-panel a { display:block; background:var(--xp-soft); box-shadow:0 1px 6px rgba(23,20,90,.12); }
  .xl-panel img { display:block; width:100%; height:auto; }
  .xl-panel figcaption { display:flex; gap:8px; margin-top:9px; color:var(--xp-dim); font-size:12.5px; }
  .xl-panel figcaption b { color:var(--xp-blue); font-weight:500; }
  .xl-foot { margin-top:56px; display:flex; flex-wrap:wrap; gap:6px 18px; font-size:12.5px; }
  .xl-foot a { color:var(--xp-blue); text-decoration:none; font-weight:700; }
  @media (min-width:760px) { .xl { padding-top:26px; } .xl-top a { font-size:13px; letter-spacing:.07em; } .xl-head { padding:56px 0 36px; } }
`;

export default function LeafletPage({ panels }) {
  return (
    <main className="xl">
      <style>{CSS}</style>
      <nav className="xl-top" aria-label="울림통-변주 2026">
        <a href="/artist">2026 / OOLIMTONG VARIATION</a>
        <a href="/artist">시민작가 17인 →</a>
      </nav>
      <header className="xl-head">
        <h1 className="xl-title">리플렛 온라인 보기</h1>
        <p className="xl-lead">전시장에서 나눠 드리는 리플렛을 한 면씩 담았습니다. 면을 누르면 크게 열려 확대해 읽을 수 있습니다.</p>
      </header>
      <ol className="xl-list">
        {panels.map((panel, index) => (
          <li key={panel.src} className="xl-panel">
            <figure>
              <a href={panel.src} target="_blank" rel="noopener" aria-label={`${panel.label} 크게 보기`}>
                <img src={panel.src} alt={panel.alt} width="1200" height="1700" loading={index < 2 ? "eager" : "lazy"} />
              </a>
              <figcaption><b>{index + 1} / {panels.length}</b>{panel.label}</figcaption>
            </figure>
          </li>
        ))}
      </ol>
      <footer className="xl-foot">
        <a href="/artist">시민작가 17인 보기 →</a>
        <a href="/oolimtong_2026_wcf">프로젝트 메인 페이지 →</a>
      </footer>
    </main>
  );
}
