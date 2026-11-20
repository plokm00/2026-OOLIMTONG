import NfcLetters from "./nfc-letters";
import { artistPages } from "../_content/artist-pages";
import { largeWorks } from "../_content/oolimtong-works";
import { MAIN_WORKS, chipsOfWork } from "../_content/nfc-chips";
import { teamSessions } from "../_content/team-sessions";

// 대형 울림통 세 기에 숨은 NFC 칩 페이지 — 관람객이 휴대전화를 울림통에 대면 열린다.
// 맨 위에 이 칩의 글자를 크게 보여 주고(모은 글자는 NfcLetters가 기기에 저장해 함께 보여 준다),
// 그 아래에 칩마다 정한 이야기(작품 이야기 · 만든 사람들 · 만드는 과정)를 싣는다.
// 작가 페이지와 같은 흰 바탕 · 남색/파랑/연두 · 박물관체 제목을 쓴다. 배경음악은 넣지 않는다(전시장에서 여러 사람이 동시에 연다).

const TEAM_NAMES = { gori: "고리", nemo: "네모", miro: "미로" };

// 작품명 끝 글자(괄호 안 한글)에 받침이 있는지 보고 조사를 고른다 — 코아를 / 나리움을, 합주가 / 나리움이.
function josa(word, withFinal, withoutFinal) {
  const last = [...word].reverse().find((c) => c >= "가" && c <= "힣");
  const hasFinal = last ? (last.charCodeAt(0) - 0xac00) % 28 !== 0 : false;
  return word + (hasFinal ? withFinal : withoutFinal);
}

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');
  @font-face { font-family:'Museum Classic'; font-weight:500; font-display:swap; src:url('/fonts/museum-classic-M.woff2') format('woff2'); }
  @font-face { font-family:'Museum Classic'; font-weight:700; font-display:swap; src:url('/fonts/museum-classic-B.woff2') format('woff2'); }
  :root { --nc-navy:#17145a; --nc-blue:#1596d8; --nc-green:#169a52; --nc-text:#1d1b45; --nc-dim:#5d5b80; --nc-soft:#f3f5f8; }
  * { box-sizing:border-box; }
  html, body { margin:0; background:#fff; }
  body { color:var(--nc-text); font-family:'Noto Sans KR', sans-serif; -webkit-text-size-adjust:100%; }
  .nc { max-width:720px; margin:0 auto; padding:16px 22px 72px; }
  .nc a { color:inherit; }
  .nc-top { padding:2px 0 11px; border-bottom:1px solid var(--nc-blue); }
  .nc-brand { color:var(--nc-blue); font-size:11px; font-weight:500; letter-spacing:.05em; text-decoration:none; white-space:nowrap; }
  .nc-brand i { font-style:normal; margin:0 .6em; }
  .nc-serif, .nc-h, .nc-title, .nc-letter, .nc-work-name { font-family:'Museum Classic', 'Noto Sans KR', sans-serif; font-weight:700; }

  /* 찾은 글자 */
  .nc-hero { text-align:center; padding:34px 0 30px; }
  .nc-found { margin:0; color:var(--nc-green); font-family:'Museum Classic', 'Noto Sans KR', sans-serif; font-weight:700; font-size:18px; }
  .nc-letter { display:flex; align-items:center; justify-content:center; width:168px; height:168px; margin:18px auto 0; border-radius:50%;
    background:radial-gradient(closest-side, #e6f3fb 0%, #f1f8fd 60%, rgba(255,255,255,0) 100%); color:var(--nc-blue); font-size:104px; line-height:1; }
  .nc-where { margin:16px 0 0; font-size:15px; line-height:1.6; }
  .nc-where b { color:var(--nc-navy); }
  .nc-where span { color:var(--nc-dim); }

  /* 모은 글자 */
  .nc-bag { padding:24px 20px 22px; background:var(--nc-soft); border-radius:14px; }
  .nc-h { margin:0 0 14px; color:var(--nc-navy); font-size:20px; }
  .nc-bag-label { display:flex; justify-content:space-between; margin:0 0 8px; font-size:13px; font-weight:500; color:var(--nc-dim); }
  .nc-bag-label span { color:var(--nc-navy); font-weight:700; }
  .nc-slots { display:flex; gap:8px; margin:0 0 16px; padding:0; list-style:none; }
  .nc-slots li { display:flex; align-items:center; justify-content:center; width:48px; height:48px; border:1.5px solid #c9d3e0; border-radius:10px; background:#fff;
    font-family:'Museum Classic', 'Noto Sans KR', sans-serif; font-weight:700; font-size:26px; color:var(--nc-navy); }
  .nc-slots li.is-found { border-color:var(--nc-navy); }
  .nc-slots li.is-here { border-color:var(--nc-blue); color:var(--nc-blue); background:#eaf6fd; }
  .nc-slots.is-extra li { border-style:dashed; }
  .nc-slots.is-extra li.is-found, .nc-slots.is-extra li.is-here { border-style:solid; }
  .nc-bag-note { margin:4px 0 0; font-size:14px; line-height:1.7; word-break:keep-all; }
  .nc-bag-sub { margin:6px 0 0; font-size:13px; line-height:1.6; color:var(--nc-dim); word-break:keep-all; }

  /* 이야기 */
  .nc-sec { margin-top:48px; }
  .nc-kicker { margin:0 0 6px; color:var(--nc-blue); font-size:12px; font-weight:500; letter-spacing:.1em; }
  .nc-title { margin:0; color:var(--nc-navy); font-size:26px; line-height:1.3; }
  .nc-team { margin:6px 0 0; color:var(--nc-dim); font-size:14px; }
  .nc-pic { margin:22px -22px 0; padding:26px 22px 30px; display:flex; justify-content:center;
    background:radial-gradient(closest-side, #f1ebe4 0%, #f7f3ef 55%, rgba(255,255,255,0) 100%); }
  .nc-pic img { display:block; width:auto; max-width:80%; height:auto; max-height:340px; object-fit:contain; mix-blend-mode:multiply; }
  .nc-text { margin:18px 0 0; font-size:16px; line-height:1.85; word-break:keep-all; }

  .nc-people { display:grid; grid-template-columns:repeat(2, minmax(0,1fr)); gap:22px 14px; margin:22px 0 0; padding:0; list-style:none; }
  .nc-people a { display:block; text-decoration:none; }
  .nc-people .nc-mon { display:flex; align-items:flex-end; justify-content:center; height:120px; border-radius:12px; background:var(--nc-soft); padding:12px; }
  .nc-people img { display:block; max-height:100%; max-width:100%; width:auto; height:auto; object-fit:contain; mix-blend-mode:multiply; }
  .nc-people p { margin:9px 0 0; font-size:15px; line-height:1.45; word-break:keep-all; }
  .nc-people b { color:var(--nc-blue); font-weight:500; margin-right:5px; }
  .nc-people strong { color:var(--nc-navy); }
  .nc-people span { display:block; color:var(--nc-dim); font-size:13px; }
  .nc-people a:focus-visible { outline:2px solid var(--nc-blue); outline-offset:3px; border-radius:12px; }

  .nc-steps { margin:22px 0 0; padding:0; list-style:none; border-top:1px solid #dfe5ee; }
  .nc-steps li { border-bottom:1px solid #dfe5ee; }
  .nc-steps summary { display:flex; align-items:center; gap:12px; padding:12px 0; cursor:pointer; list-style:none; }
  .nc-steps summary::-webkit-details-marker { display:none; }
  .nc-steps summary img { flex:0 0 auto; width:64px; height:64px; border-radius:8px; object-fit:cover; background:var(--nc-soft); }
  .nc-steps summary .nc-step-noimg { flex:0 0 auto; width:64px; height:64px; border-radius:8px; background:var(--nc-soft); }
  .nc-step-head { min-width:0; flex:1; }
  .nc-step-head small { display:block; color:var(--nc-blue); font-size:12px; font-weight:500; }
  .nc-step-head span { display:block; margin-top:2px; font-size:15px; font-weight:500; line-height:1.45; word-break:keep-all; }
  .nc-steps summary::after { content:"+"; color:var(--nc-dim); font-size:20px; }
  .nc-steps details[open] summary::after { content:"–"; }
  .nc-step-body { padding:0 0 18px; }
  .nc-step-body p { margin:0; font-size:15px; line-height:1.8; word-break:keep-all; }
  .nc-step-photos { display:grid; grid-template-columns:repeat(3, minmax(0,1fr)); gap:6px; margin-top:12px; }
  .nc-step-photos a { display:block; }
  .nc-step-photos img { display:block; width:100%; aspect-ratio:1; object-fit:cover; border-radius:6px; background:var(--nc-soft); }

  .nc-foot { display:flex; flex-wrap:wrap; gap:10px 22px; margin-top:56px; padding-top:18px; border-top:1px solid var(--nc-blue); }
  .nc-foot a { color:var(--nc-navy); font-size:14px; font-weight:700; text-decoration:none; }
  @media (hover:hover) { .nc-foot a:hover, .nc-people a:hover strong { color:var(--nc-blue); } }
  @media (min-width:760px) {
    .nc { padding-top:20px; }
    .nc-brand { font-size:13px; letter-spacing:.07em; }
    .nc-brand i { margin:0 1.1em; }
    .nc-people { grid-template-columns:repeat(3, minmax(0,1fr)); }
    .nc-pic { margin:22px 0 0; }
  }
`;

function Story({ work }) {
  return (
    <section className="nc-sec" aria-labelledby="nc-story">
      <p className="nc-kicker">작품 이야기</p>
      <h2 className="nc-title" id="nc-story">{work.title}</h2>
      <p className="nc-team">{work.team} 팀 · 시민작가 {work.members.length}인 공동 제작</p>
      <div className="nc-pic"><img src={work.image} alt={work.alt} /></div>
      <p className="nc-text">{work.text}</p>
    </section>
  );
}

function People({ work }) {
  return (
    <section className="nc-sec" aria-labelledby="nc-people">
      <p className="nc-kicker">만든 사람들</p>
      <h2 className="nc-title" id="nc-people">{josa(work.title, "을", "를")} 함께 지은 {work.team} 팀</h2>
      <p className="nc-team">시민작가마다 자신의 뜻을 담은 작은 모뉴먼트를 함께 만들었습니다. 이름을 누르면 작가 페이지가 열립니다.</p>
      <ul className="nc-people">
        {work.members.map((member) => {
          const artist = artistPages.find((a) => a.name === member.name);
          const monument = artist?.profile?.workImage ?? artist?.monument;
          return (
            <li key={member.name}>
              <a href={`/artist/${encodeURIComponent(member.name)}`}>
                <div className="nc-mon">{monument ? <img src={monument} alt="" loading="lazy" /> : null}</div>
                <p><b>{member.no}</b><strong>{member.name}</strong><span>〈{artist?.profile?.workTitle ?? member.work}〉</span></p>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Process({ work, team }) {
  const sessions = (teamSessions[team] ?? []).filter((s) => s.text || s.photos.length);
  return (
    <section className="nc-sec" aria-labelledby="nc-process">
      <p className="nc-kicker">만드는 과정</p>
      <h2 className="nc-title" id="nc-process">{josa(work.title, "이", "가")} 지어지기까지</h2>
      <p className="nc-team">{TEAM_NAMES[team]} 팀의 {sessions.length}번의 작업 기록입니다. 회차를 누르면 그날의 이야기와 사진이 열립니다.</p>
      <ol className="nc-steps">
        {sessions.map((s) => (
          <li key={s.round}>
            <details>
              <summary>
                {s.photos[0] ? <img src={s.photos[0].replace(/\.webp$/, "_t.webp")} alt="" loading="lazy" /> : <i className="nc-step-noimg" />}
                <div className="nc-step-head"><small>{s.round} · {s.date}</small><span>{s.title}</span></div>
              </summary>
              <div className="nc-step-body">
                {s.text ? <p>{s.text}</p> : null}
                {s.photos.length ? (
                  <div className="nc-step-photos">
                    {s.photos.map((src, i) => (
                      <a key={src} href={src} target="_blank" rel="noopener">
                        <img src={src.replace(/\.webp$/, "_t.webp")} alt={`${TEAM_NAMES[team]} 팀 ${s.round} ${s.title} 사진 ${i + 1}`} loading="lazy" />
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </details>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function NfcChipPage({ chip }) {
  const work = largeWorks.find((w) => w.id === chip.work);
  const siblings = chipsOfWork(chip.work);
  const mainTotal = MAIN_WORKS.reduce((sum, id) => sum + chipsOfWork(id).length, 0);
  const extraWork = largeWorks.find((w) => !MAIN_WORKS.includes(w.id));
  const extraTotal = extraWork ? chipsOfWork(extraWork.id).length : 0;

  return (
    <>
      <style>{CSS}</style>
      <main className="nc">
        <header className="nc-top">
          <a className="nc-brand" href="/artist">2026<i>/</i>OOLIMTONG VARIATION<i>/</i>NFC HIDE AND SEEK</a>
        </header>

        <section className="nc-hero" aria-label="찾은 글자">
          <p className="nc-found">칩을 찾았어요!</p>
          <div className="nc-letter" aria-label={`찾은 글자: ${chip.letter}`}>{chip.letter}</div>
          <p className="nc-where"><b>〈{work.title}〉</b><span>에 숨은 칩 {siblings.length}개 중 하나</span></p>
        </section>

        <NfcLetters
          chip={chip}
          main={MAIN_WORKS.includes(chip.work)}
          mainTotal={mainTotal}
          extraTotal={extraTotal}
          extraName={extraWork ? `〈${extraWork.title}〉` : ""}
        />

        {chip.sections.map((section) =>
          section === "story" ? <Story key={section} work={work} />
            : section === "people" ? <People key={section} work={work} />
            : section === "process" ? <Process key={section} work={work} team={chip.team} />
            : null,
        )}

        <nav className="nc-foot" aria-label="더 보기">
          <a href="/artist">시민작가 17인 →</a>
          <a href="/oolimtong_2026_wcf_record">팀별 작업 기록 →</a>
          <a href="/oolimtong_2026_wcf">프로젝트 메인 페이지 →</a>
        </nav>
      </main>
    </>
  );
}
