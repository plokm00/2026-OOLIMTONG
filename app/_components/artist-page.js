import { worksOf } from "../_content/artist-notes";

// QR·NFC로 들어오는 작가 개인 페이지. 대부분 휴대폰으로 열리므로 한 단으로 읽히게 짠다.
// 채워진 칸만 그린다 — 비어 있는 칸은 제목도 남기지 않는다.

function Section({ id, label, children }) {
  return (
    <section className="ap-section" id={id} aria-labelledby={`${id}-label`}>
      <h2 className="ap-label" id={`${id}-label`}>{label}</h2>
      {children}
    </section>
  );
}

function Text({ children }) {
  return <p className="ap-text">{children}</p>;
}

export default function ArtistPage({ artist, note }) {
  const teamWorks = worksOf(artist.team);
  const nfc = artist.nfc && (artist.nfc.text || artist.nfc.links?.length) ? artist.nfc : null;

  return (
    <main className="ap">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@400;600;700&family=Noto+Sans+KR:wght@400;500;700&display=swap');
        :root { --ap-bg:#f6ede6; --ap-bg2:#eee0d6; --ap-bg3:#e4d0c4; --ap-line:#ceb0a0; --ap-accent:#c03828; --ap-accent2:#8c2418; --ap-text:#261410; --ap-dim:#7a4c3c; }
        * { box-sizing:border-box; }
        body { margin:0; background:var(--ap-bg); color:var(--ap-text); font-family:'Noto Sans KR', sans-serif; -webkit-text-size-adjust:100%; }
        .ap { max-width:680px; min-height:100vh; margin:0 auto; padding:22px 22px 64px; }
        .ap-top { display:flex; justify-content:space-between; align-items:center; gap:12px; padding-bottom:16px; border-bottom:1px solid var(--ap-line); }
        .ap-brand { color:var(--ap-accent); font-size:11px; font-weight:700; letter-spacing:.1em; text-decoration:none; }
        .ap-top-link { color:var(--ap-dim); font-size:11px; text-decoration:none; }
        .ap-head { display:grid; grid-template-columns:112px minmax(0,1fr); gap:20px; align-items:end; padding:28px 0 26px; }
        .ap-photo { aspect-ratio:4/5; overflow:hidden; border:1px solid var(--ap-line); background:var(--ap-bg3); }
        .ap-photo img { display:block; width:100%; height:100%; object-fit:cover; }
        .ap-kicker { margin:0 0 6px; color:var(--ap-accent2); font-size:11px; font-weight:700; letter-spacing:.08em; }
        .ap-name { margin:0; font-family:'IBM Plex Sans KR', sans-serif; font-size:clamp(40px,11vw,60px); line-height:1.1; letter-spacing:-.05em; }
        .ap-team { margin:8px 0 0; color:var(--ap-dim); font-size:13px; }
        .ap-section { padding:26px 0; border-top:1px solid var(--ap-line); scroll-margin-top:12px; }
        .ap-label { margin:0 0 12px; color:var(--ap-accent2); font-size:12px; font-weight:700; letter-spacing:.1em; }
        .ap-title { margin:0 0 6px; font-family:'IBM Plex Sans KR', sans-serif; font-size:22px; font-weight:700; line-height:1.35; letter-spacing:-.02em; }
        .ap-meta { margin:0 0 14px; color:var(--ap-dim); font-size:13px; line-height:1.6; }
        .ap-text { margin:0; font-size:16px; line-height:1.9; white-space:pre-wrap; word-break:keep-all; overflow-wrap:anywhere; }
        .ap-team-work + .ap-team-work { margin-top:20px; }
        .ap-team-work .ap-title { font-size:18px; }
        .ap-team-work .ap-text { color:var(--ap-dim); font-size:14.5px; line-height:1.8; }
        .ap-links { display:flex; flex-direction:column; gap:8px; margin:16px 0 0; padding:0; list-style:none; }
        .ap-links a { display:block; padding:13px 16px; border:1px solid var(--ap-line); border-radius:4px; background:var(--ap-bg2); color:var(--ap-text); font-size:15px; font-weight:500; text-decoration:none; }
        .ap-links a:active { background:var(--ap-bg3); }
        .ap-foot { display:flex; flex-wrap:wrap; justify-content:space-between; gap:10px; padding-top:22px; border-top:1px solid var(--ap-line); color:var(--ap-dim); font-size:12px; }
        .ap-foot a { color:var(--ap-accent); text-decoration:none; }
        @media (min-width:640px) { .ap { padding-top:36px; } .ap-head { grid-template-columns:150px minmax(0,1fr); gap:32px; } }
        @media print { .ap-top, .ap-foot { display:none; } }
      `}</style>

      <nav className="ap-top" aria-label="울림통-변주 2026">
        <a className="ap-brand" href="/oolimtong_2026_wcf">NINNIK × 울림통-변주 2026</a>
        <a className="ap-top-link" href="/artist">참여 작가 17인</a>
      </nav>

      <header className="ap-head">
        {artist.photo ? (
          <div className="ap-photo">
            <img src={artist.photo} alt={`${artist.name} 프로필 사진`} width="300" height="375" />
          </div>
        ) : <div />}
        <div>
          <p className="ap-kicker">참여 작가</p>
          <h1 className="ap-name">{artist.name}</h1>
          <p className="ap-team">팀 {artist.team}</p>
        </div>
      </header>

      {artist.venue ? (
        <Section id="venue" label="전시장소">
          <p className="ap-title">{artist.venue}</p>
          {artist.venueNote ? <p className="ap-meta">{artist.venueNote}</p> : null}
        </Section>
      ) : null}

      {artist.workTitle || artist.work ? (
        <Section id="work" label="작품소개">
          {artist.workTitle ? <p className="ap-title">{artist.workTitle}</p> : null}
          {artist.workMeta ? <p className="ap-meta">{artist.workMeta}</p> : null}
          {artist.work ? <Text>{artist.work}</Text> : null}
        </Section>
      ) : null}

      {artist.bio ? (
        <Section id="artist" label="작가소개">
          <Text>{artist.bio}</Text>
        </Section>
      ) : null}

      {note ? (
        <Section id="note" label="작가 노트">
          <Text>{note}</Text>
        </Section>
      ) : null}

      {nfc ? (
        <Section id="nfc" label={nfc.title || "더 보기"}>
          {nfc.text ? <Text>{nfc.text}</Text> : null}
          {nfc.links?.length ? (
            <ul className="ap-links">
              {nfc.links.map((link) => (
                <li key={link.href}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          ) : null}
        </Section>
      ) : null}

      {teamWorks.length ? (
        <Section id="team" label="함께 만든 대형 울림통">
          {teamWorks.map((work) => (
            <div className="ap-team-work" key={work.team}>
              <p className="ap-meta" style={{ margin: "0 0 2px" }}>팀 {work.team}</p>
              <p className="ap-title">{work.title}</p>
              <p className="ap-text">{work.note}</p>
            </div>
          ))}
        </Section>
      ) : null}

      <footer className="ap-foot">
        <a href={`/oolimtong_2026_wcf_artists#${artist.id}`}>작가 노트 모아보기 →</a>
        <a href="/oolimtong_2026_wcf_record">팀별 작업 기록 →</a>
      </footer>
    </main>
  );
}
