// 리플렛 QR 하나로 들어오는 참여 작가 17인 목록. 이름을 누르면 /artist/이름 개인 페이지로 간다.
// 휴대폰에서 두 줄, 넓은 화면에서 서너 줄로 사진과 이름을 보여 준다.

export default function ArtistIndexPage({ artists }) {
  return (
    <main className="ai">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@400;600;700&family=Noto+Sans+KR:wght@400;500;700&display=swap');
        :root { --ap-bg:#f6ede6; --ap-bg2:#eee0d6; --ap-bg3:#e4d0c4; --ap-line:#ceb0a0; --ap-accent:#c03828; --ap-accent2:#8c2418; --ap-text:#261410; --ap-dim:#7a4c3c; }
        * { box-sizing:border-box; }
        body { margin:0; background:var(--ap-bg); color:var(--ap-text); font-family:'Noto Sans KR', sans-serif; -webkit-text-size-adjust:100%; }
        .ai { max-width:860px; min-height:100vh; margin:0 auto; padding:22px 22px 64px; }
        .ai-top { display:flex; justify-content:space-between; align-items:center; gap:12px; padding-bottom:16px; border-bottom:1px solid var(--ap-line); }
        .ai-brand { color:var(--ap-accent); font-size:11px; font-weight:700; letter-spacing:.1em; text-decoration:none; }
        .ai-top-link { color:var(--ap-dim); font-size:11px; text-decoration:none; }
        .ai-head { padding:28px 0 24px; }
        .ai-kicker { margin:0 0 6px; color:var(--ap-accent2); font-size:11px; font-weight:700; letter-spacing:.08em; }
        .ai-title { margin:0; font-family:'IBM Plex Sans KR', sans-serif; font-size:clamp(32px,9vw,48px); line-height:1.15; letter-spacing:-.04em; }
        .ai-lead { margin:10px 0 0; color:var(--ap-dim); font-size:14px; line-height:1.7; }
        .ai-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:18px 14px; margin:0; padding:0; list-style:none; }
        .ai-card { display:block; color:inherit; text-decoration:none; }
        .ai-photo { aspect-ratio:4/5; overflow:hidden; border:1px solid var(--ap-line); background:var(--ap-bg3); }
        .ai-photo img { display:block; width:100%; height:100%; object-fit:cover; }
        .ai-name { margin:9px 0 0; font-family:'IBM Plex Sans KR', sans-serif; font-size:19px; font-weight:700; letter-spacing:-.03em; }
        .ai-team { margin:2px 0 0; color:var(--ap-dim); font-size:12px; }
        .ai-card:active .ai-name { color:var(--ap-accent); }
        @media (hover:hover) and (pointer:fine) { .ai-card:hover .ai-name { color:var(--ap-accent); } }
        @media (min-width:560px) { .ai-grid { grid-template-columns:repeat(3,minmax(0,1fr)); } }
        @media (min-width:760px) { .ai { padding-top:36px; } .ai-grid { grid-template-columns:repeat(4,minmax(0,1fr)); gap:26px 18px; } }
        .ai-foot { display:flex; flex-wrap:wrap; justify-content:space-between; gap:10px; margin-top:36px; padding-top:22px; border-top:1px solid var(--ap-line); color:var(--ap-dim); font-size:12px; }
        .ai-foot a { color:var(--ap-accent); text-decoration:none; }
      `}</style>

      <nav className="ai-top" aria-label="울림통-변주 2026">
        <a className="ai-brand" href="/oolimtong_2026_wcf">NINNIK × 울림통-변주 2026</a>
        <a className="ai-top-link" href="/oolimtong_2026_wcf_record">팀별 작업 기록</a>
      </nav>

      <header className="ai-head">
        <p className="ai-kicker">울림통-변주 2026</p>
        <h1 className="ai-title">참여 작가 {artists.length}인</h1>
        <p className="ai-lead">이름을 누르면 작가와 작품 이야기를 볼 수 있습니다.</p>
      </header>

      <ul className="ai-grid">
        {artists.map((artist) => (
          <li key={artist.id}>
            <a className="ai-card" href={`/artist/${encodeURIComponent(artist.slug)}`}>
              <div className="ai-photo">
                {artist.photo ? (
                  <img src={artist.photo} alt="" width="300" height="375" loading="lazy" />
                ) : null}
              </div>
              <p className="ai-name">{artist.name}</p>
              <p className="ai-team">팀 {artist.team}</p>
            </a>
          </li>
        ))}
      </ul>

      <footer className="ai-foot">
        <a href="/oolimtong_2026_wcf_artists">작가 노트 모아보기 →</a>
        <a href="/oolimtong_2026_wcf">울림통-변주 2026 →</a>
      </footer>
    </main>
  );
}
