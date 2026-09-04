// 문막-흙으로 잇다 (2026) 자료 페이지
const styles = `
  :root {
    --bg:        #f7f2e8;
    --bg2:       #efe7d6;
    --bg3:       #e6dbc4;
    --line:      #d6c5a5;
    --accent:    #e2571e;
    --accent2:   #b53f10;
    --text:      #241f19;
    --text-dim:  #7a6852;
    --white:     #fdfaf3;
    --cover-title-size: clamp(38px, 8vw, 84px);
    /* 시간 미정 신청을 주황 히트맵과 갈라 보이게 하는 청회색 */
    --undecided:  #6f7b8a;
    --undecided2: #47535f;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; overflow-x: hidden; overflow-y: scroll; scrollbar-gutter: stable; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
    line-height: 1.75;
    word-break: keep-all;
    overflow-x: hidden;
  }

  h1, h2, h3 { font-family: 'IBM Plex Sans KR', sans-serif; }

  section {
    padding: 88px 60px;
    border-bottom: 1px solid var(--line);
  }

  .section-label {
    font-size: 11px;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 14px;
    font-weight: 500;
  }

  h2.section-title {
    font-size: clamp(26px, 4vw, 44px);
    font-weight: 700;
    color: var(--text);
    margin-bottom: 36px;
    border-left: 3px solid var(--accent);
    padding-left: 20px;
  }

  /* ── 고정 네비게이션 ── */
  #nav {
    position: sticky;
    top: 0;
    z-index: 60;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 60px;
    background: rgba(247, 242, 232, 0.92);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--line);
  }
  .nav-logo {
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--accent);
    text-decoration: none;
  }
  .nav-links {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 13px;
  }
  .nav-links a {
    color: var(--text-dim);
    text-decoration: none;
    transition: color 0.15s;
  }
  .nav-links a:hover { color: var(--accent); }
  .nav-links a.nav-cta {
    border: 1px solid var(--accent);
    background: var(--accent);
    color: var(--white);
    padding: 5px 14px;
    border-radius: 2px;
  }
  .nav-links a.nav-cta:hover { background: var(--accent2); border-color: var(--accent2); color: var(--white); }
  .nav-hamburger { display: none; background: none; border: 0; cursor: pointer; padding: 6px; }
  .nav-hamburger span { display: block; width: 20px; height: 2px; background: var(--text); margin: 4px 0; }

  /* ── 커버 ── */
  #cover {
    padding: 92px 60px 32px;
    background:
      radial-gradient(circle at 88% 12%, rgba(226, 87, 30, 0.10), transparent 42%),
      var(--bg);
  }
  .cover-eyebrow {
    font-size: 13px;
    letter-spacing: 0.08em;
    color: var(--accent);
    font-weight: 500;
    margin-bottom: 14px;
  }
  .cover-title {
    font-size: var(--cover-title-size);
    font-weight: 600;
    letter-spacing: -0.03em;
    line-height: 1.05;
  }
  .cover-title em {
    font-style: normal;
    color: var(--accent);
  }
  .cover-lead {
    margin-top: 22px;
    max-width: 640px;
    font-size: clamp(15px, 1.4vw, 18px);
    color: var(--text-dim);
    line-height: 1.9;
  }
  .cover-divider {
    width: 72px;
    height: 3px;
    background: var(--accent);
    margin: 34px 0 26px;
  }
  .cover-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 300px;
    gap: 56px;
    align-items: start;
  }
  .cover-meta {
    display: grid;
    grid-template-columns: 72px 1fr;
    gap: 10px 18px;
    font-size: 15px;
    max-width: 620px;
  }
  .cover-meta dt {
    font-family: 'IBM Plex Sans KR', sans-serif;
    font-weight: 600;
    color: var(--accent2);
    font-size: 14px;
  }
  .cover-meta dd { color: var(--text); }
  .cover-meta dd small { display: block; color: var(--text-dim); font-size: 13px; }

  /* ── 포스터 썸네일 ── */
  /* 포스터 윗변을 커버 기본 여백선(왼쪽 eyebrow 줄 윗변)보다 6px 더 내린다.
     구분선 기준으로는 98px 아래. */
  .poster-col {
    margin-top: 6px;
  }

  .poster-thumb {
    display: block;
    width: 100%;
    padding: 0;
    border: 1px solid var(--line);
    background: var(--bg2);
    border-radius: 3px;
    overflow: hidden;
    cursor: zoom-in;
    line-height: 0;
    transition: box-shadow 0.2s, transform 0.2s, border-color 0.2s;
  }
  .poster-thumb:hover {
    border-color: var(--accent);
    box-shadow: 0 16px 40px rgba(36, 31, 25, 0.16);
    transform: translateY(-2px);
  }
  .poster-thumb img { width: 100%; height: auto; display: block; }
  .poster-caption {
    margin-top: 10px;
    font-size: 12px;
    letter-spacing: 0.06em;
    color: var(--text-dim);
    text-align: center;
  }
  .poster-fallback {
    display: none;
    padding: 60px 20px;
    text-align: center;
    font-size: 13px;
    color: var(--text-dim);
    border: 2px dashed var(--line);
    border-radius: 3px;
    line-height: 1.9;
  }
  .poster-missing .poster-thumb,
  .poster-missing .poster-caption { display: none; }
  .poster-missing .poster-fallback { display: block; }

  /* ── 라이트박스 ── */
  #poster-lightbox {
    position: fixed;
    inset: 0;
    z-index: 200;
    display: none;
    align-items: center;
    justify-content: center;
    padding: 32px;
    background: rgba(30, 24, 18, 0.92);
    cursor: zoom-out;
  }
  #poster-lightbox.open { display: flex; }
  #poster-lightbox img {
    max-width: min(100%, 900px);
    max-height: 100%;
    width: auto;
    height: auto;
    aspect-ratio: 1500 / 2118;
    object-fit: contain;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
  }
  #poster-lightbox .lb-close {
    position: absolute;
    top: 20px;
    right: 24px;
    background: none;
    border: 1px solid rgba(253, 250, 243, 0.5);
    color: #fdfaf3;
    font-size: 20px;
    line-height: 1;
    padding: 8px 14px;
    border-radius: 2px;
    cursor: pointer;
  }
  #poster-lightbox .lb-close:hover { background: rgba(253, 250, 243, 0.14); }

  /* ── 소개 ── */
  #about { padding-top: 40px; }
  .about-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .about-card {
    max-width: 960px;
    background: var(--bg2);
    border: 1px solid var(--line);
    border-radius: 3px;
    padding: 26px 24px;
  }
  .about-card h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
    color: var(--accent2);
  }
  .about-card p { font-size: 14px; color: var(--text-dim); line-height: 1.85; }

  /* ── 사전신청 현황 ── */
  .booking-layout {
    display: grid;
    grid-template-columns: minmax(0, 340px) minmax(0, 1fr);
    gap: 44px;
    align-items: start;
    max-width: 960px;
  }
  .calendar {
    background: var(--bg2);
    border: 1px solid var(--line);
    border-radius: 3px;
    padding: 22px;
  }
  .cal-head {
    font-family: 'IBM Plex Sans KR', sans-serif;
    font-size: 17px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 16px;
    letter-spacing: 0.04em;
  }
  .cal-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
  }
  .cal-dow {
    text-align: center;
    font-size: 11px;
    letter-spacing: 0.1em;
    color: var(--text-dim);
    padding-bottom: 6px;
  }
  .cal-dow.sun { color: var(--accent2); }
  .cal-cell {
    aspect-ratio: 1 / 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    font-size: 13px;
    color: var(--text-dim);
    border: 1px solid transparent;
    border-radius: 2px;
  }
  .cal-cell.empty { visibility: hidden; }
  .cal-cell.event {
    background: var(--accent);
    color: var(--white);
    font-weight: 600;
    border-color: var(--accent);
    cursor: pointer;
  }
  .cal-cell.event:hover { background: var(--accent2); border-color: var(--accent2); }
  .cal-cell.event.selected {
    background: var(--white);
    color: var(--accent2);
    border-color: var(--accent2);
    box-shadow: inset 0 0 0 1px var(--accent2);
  }
  .cal-cell .cal-dot {
    font-size: 9px;
    letter-spacing: 0.02em;
    font-weight: 500;
    opacity: 0.9;
  }
  .cal-legend {
    margin-top: 16px;
    font-size: 12px;
    color: var(--text-dim);
    line-height: 1.8;
  }
  .cal-legend .swatch {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: var(--accent);
    border-radius: 2px;
    margin-right: 6px;
    vertical-align: -1px;
  }

  .booking-table-wrap { overflow-x: auto; }
  table.booking {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    min-width: 420px;
  }
  table.booking th,
  table.booking td {
    text-align: left;
    /* 신청 건수가 늘어 한 화면에 최대한 많이 들어오도록 행을 조인다.
       본문 line-height 1.75를 그대로 쓰면 행이 너무 벌어진다. */
    padding: 7px 14px;
    line-height: 1.5;
    border-bottom: 1px solid var(--line);
    white-space: nowrap;
  }
  table.booking th {
    font-family: 'IBM Plex Sans KR', sans-serif;
    /* 단위·범례를 머리글로 옮겼으므로 두 줄로 접히게 둔다. */
    white-space: normal;
    line-height: 1.35;
    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--accent2);
    border-bottom: 1px solid var(--accent);
    font-weight: 600;
  }
  table.booking td.num { font-variant-numeric: tabular-nums; }
  /* 비고만 자유 문구라 줄바꿈을 허용하고, 나머지 칸은 nowrap을 유지한다. */
  table.booking td.note { white-space: normal; color: var(--text-dim); font-size: 13px; min-width: 150px; }
  table.booking th.sortable { cursor: pointer; user-select: none; transition: color 0.15s; }
  table.booking th.sortable:hover { color: var(--accent); }
  table.booking th.sortable:focus-visible { outline: 2px solid var(--accent); outline-offset: -2px; }
  table.booking th.on { color: var(--accent); }
  .arw { font-size: 9px; margin-left: 3px; opacity: 0.45; }
  th.on .arw { opacity: 1; }
  .visit { color: var(--accent); font-size: 11.5px; vertical-align: 1px; }
  .visit-note { margin-top: 10px; font-size: 12px; color: var(--text-dim); }
  table.booking tr.dim td { opacity: 0.35; }
  .booking-empty {
    padding: 24px 0;
    font-size: 14px;
    color: var(--text-dim);
  }
  .booking-summary-row {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 10px 16px;
    margin-bottom: 14px;
  }
  /* 요약 문구가 길어져도 관리자 상세보기가 아랫줄로 밀리지 않게,
     줄이는 쪽은 요약 문구로 고정한다. */
  .booking-summary { font-size: 13px; color: var(--text-dim); min-width: 0; }
  .booking-summary strong { color: var(--accent2); }

  .admin-toggle { display: flex; align-items: center; gap: 6px; flex-shrink: 0; }
  .admin-toggle-label {
    font-size: 11px;
    color: var(--text-dim);
    white-space: nowrap;
  }
  .admin-toggle input {
    font-family: inherit;
    font-size: 12px;
    letter-spacing: 0.2em;
    padding: 4px 8px;
    width: 64px;
    border: 1px solid var(--line);
    border-radius: 2px;
    background: var(--white);
    color: var(--text);
  }
  .admin-toggle input:focus { outline: none; border-color: var(--accent); }
  .admin-toggle button {
    font-family: 'IBM Plex Sans KR', sans-serif;
    font-size: 11px;
    font-weight: 500;
    padding: 5px 10px;
    border: 1px solid var(--accent);
    background: var(--accent);
    color: var(--white);
    border-radius: 2px;
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s;
  }
  .admin-toggle button:hover { background: var(--accent2); border-color: var(--accent2); }
  .admin-toggle button.ghost { background: none; color: var(--accent2); border-color: var(--line); }
  .admin-toggle button.ghost:hover { background: var(--bg3); color: var(--accent2); }
  .detail-msg { font-size: 11px; color: var(--accent2); text-align: right; margin-top: 4px; min-height: 16px; }
  .detail-msg:empty { margin-top: 0; min-height: 0; }

  /* ── 현장 배치 & 혼잡도 ── */
  .venue-section { margin-top: 52px; max-width: 960px; }
  /* 배치도를 달력 자리(왼쪽), 혼잡도 표를 신청 리스트 자리(오른쪽)에 놓아
     위 예약 블록과 열을 맞춘다. 표가 좁아지는 만큼 눈에 더 들어온다. */
  .venue-grid {
    display: grid;
    grid-template-columns: minmax(0, 340px) minmax(0, 1fr);
    gap: 44px;
    align-items: start;
  }
  .venue-heading {
    font-family: 'IBM Plex Sans KR', sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 4px;
  }
  .venue-sub { font-size: 12.5px; color: var(--text-dim); margin-bottom: 18px; line-height: 1.7; }
  .venue-diagram { display: block; width: 100%; max-width: 340px; height: auto; }
  .venue-note {
    font-size: 13px;
    color: var(--text-dim);
    line-height: 1.8;
    margin-bottom: 22px;
  }
  .venue-note strong { color: var(--accent2); }

  .dwell-row {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
    margin-bottom: 12px;
    font-size: 12px;
  }
  .dwell-label { color: var(--text-dim); margin-right: 2px; }
  .dwell-btn {
    font-family: 'IBM Plex Sans KR', sans-serif;
    font-size: 11.5px;
    padding: 4px 11px;
    border: 1px solid var(--line);
    background: none;
    color: var(--text-dim);
    border-radius: 2px;
    cursor: pointer;
    transition: background 0.15s, color 0.15s, border-color 0.15s;
  }
  .dwell-btn:hover { border-color: var(--accent); color: var(--accent); }
  .dwell-btn.on { background: var(--accent); border-color: var(--accent); color: var(--white); }
  .dwell-hint { color: var(--text-dim); font-size: 11.5px; }

  .cong-wrap { overflow-x: auto; }
  table.cong { width: 100%; border-collapse: collapse; font-size: 11.5px; min-width: 470px; }
  table.cong th,
  table.cong td {
    text-align: center;
    padding: 6px 4px;
    line-height: 1.5;
    border-bottom: 1px solid var(--line);
    border-right: 1px solid var(--line);
    white-space: nowrap;
  }
  table.cong th:last-child,
  table.cong td:last-child { border-right: none; }
  table.cong th {
    font-family: 'IBM Plex Sans KR', sans-serif;
    /* 머리글은 두 줄로 접어 열 폭을 줄인다. */
    white-space: normal;
    line-height: 1.35;
    font-size: 10.5px;
    letter-spacing: 0.06em;
    color: var(--accent2);
    border-bottom: 1px solid var(--accent);
    font-weight: 600;
  }
  table.cong th:first-child,
  table.cong td:first-child { text-align: left; font-weight: 600; color: var(--text); }
  .cg-cell { font-variant-numeric: tabular-nums; }
  .cg-empty { color: var(--line); }
  .cg-low { background: rgba(226, 87, 30, 0.12); }
  .cg-mid { background: rgba(226, 87, 30, 0.30); color: var(--accent2); font-weight: 600; }
  .cg-high { background: rgba(226, 87, 30, 0.55); color: var(--accent2); font-weight: 700; }
  .cg-over { background: var(--accent2); color: var(--white); font-weight: 700; }

  /* 시간을 정하지 않은 신청은 주황 히트맵과 아예 다른 청회색 계열로 빼서,
     시각이 잡힌 신청과 한눈에 갈라 보이게 한다. */
  .cg-na { background: rgba(107, 122, 138, 0.18); color: var(--undecided2); }
  table.cong th.th-na { color: var(--undecided2); }
  /* 미정은 확정된 값보다 한 단계 물러나 보이게 한다. 시간 미정과 인원
     미정에 같은 스타일을 쓴다. */
  table.booking td.t-na { color: var(--undecided); opacity: 0.8; }

  .cong-legend {
    margin-top: 12px;
    font-size: 12px;
    color: var(--text-dim);
    display: flex;
    align-items: center;
    gap: 6px 16px;
    flex-wrap: wrap;
  }
  .cg-swatch {
    display: inline-block;
    width: 11px;
    height: 11px;
    border-radius: 2px;
    margin-right: 5px;
    vertical-align: -1px;
  }

  /* ── 푸터 ── */
  .site-footer {
    padding: 40px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    font-size: 12px;
    color: rgba(253, 250, 243, 0.7);
    background: var(--accent2);
  }
  .footer-credit { line-height: 1.9; }
  .footer-credit b { font-weight: 600; color: var(--white); margin-right: 6px; }
  .site-footer a { color: rgba(253, 250, 243, 0.8); text-decoration: none; white-space: nowrap; }
  .site-footer a:hover { color: var(--white); }

  /* ── 운영 OT (운영진 전용) ── */
  #ops { padding-top: 56px; scroll-margin-top: 72px; }
  .ops-lock {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    max-width: 960px;
    background: var(--bg2);
    border: 1px solid var(--line);
    border-radius: 3px;
    padding: 22px 24px;
  }
  .ops-lock-text { font-size: 13px; color: var(--text-dim); width: 100%; margin-bottom: 4px; line-height: 1.7; }
  .ops-lock input {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    color: var(--text);
    background: var(--white);
    border: 1px solid var(--line);
    border-radius: 3px;
    padding: 9px 14px;
    width: 200px;
    outline: none;
  }
  .ops-lock input:focus { border-color: var(--accent); }
  .ops-lock button {
    font-family: 'IBM Plex Sans KR', sans-serif;
    font-size: 13px;
    font-weight: 500;
    padding: 9px 18px;
    border: 1px solid var(--accent);
    background: var(--accent);
    color: var(--white);
    border-radius: 3px;
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s;
  }
  .ops-lock button:hover { background: var(--accent2); border-color: var(--accent2); }
  .ops-lock-msg { font-size: 13px; color: var(--accent2); }

  .ops-doc { max-width: 960px; }
  .ops-lead {
    font-size: 14px;
    color: var(--text-dim);
    line-height: 1.9;
    padding: 16px 20px;
    background: var(--bg2);
    border-left: 3px solid var(--accent);
    border-radius: 0 2px 2px 0;
    margin-bottom: 32px;
  }
  .ops-block { margin-bottom: 40px; }
  .ops-h3 {
    font-family: 'IBM Plex Sans KR', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: var(--text);
    border-left: 3px solid var(--accent);
    padding-left: 14px;
    margin-bottom: 16px;
  }
  .ops-p { font-size: 14px; color: var(--text); line-height: 1.9; margin-bottom: 14px; }
  .ops-p em { font-style: normal; color: var(--accent2); font-weight: 500; }

  .ops-table-wrap { overflow-x: auto; margin: 12px 0 16px; }
  table.ops-table { width: 100%; border-collapse: collapse; font-size: 13.5px; min-width: 460px; }
  table.ops-table th,
  table.ops-table td {
    text-align: left;
    padding: 9px 14px;
    line-height: 1.6;
    border-bottom: 1px solid var(--line);
    vertical-align: top;
  }
  table.ops-table th {
    font-family: 'IBM Plex Sans KR', sans-serif;
    font-size: 12px;
    letter-spacing: 0.08em;
    color: var(--accent2);
    border-bottom: 1px solid var(--accent);
    font-weight: 600;
    white-space: nowrap;
  }
  table.ops-table td:first-child { white-space: nowrap; font-weight: 600; color: var(--accent2); }

  .ops-list { list-style: none; margin: 10px 0; }
  .ops-list li {
    position: relative;
    padding: 5px 0 5px 16px;
    font-size: 14px;
    line-height: 1.8;
    color: var(--text);
  }
  .ops-list li::before {
    content: '·';
    position: absolute;
    left: 3px;
    color: var(--accent);
    font-weight: 700;
  }
  .ops-list li strong { color: var(--accent2); }
  .ops-list-cols { columns: 2; column-gap: 32px; }
  .ops-list-cols li { break-inside: avoid; }

  .ops-steps { margin: 10px 0 10px 20px; padding: 0; font-size: 14px; line-height: 1.8; }
  .ops-steps > li { margin-bottom: 10px; }
  .ops-steps > li strong { color: var(--accent2); }
  .ops-steps .ops-list { margin: 4px 0; }

  .ops-role {
    border-top: 1px solid var(--line);
    padding-top: 16px;
    margin-top: 16px;
  }
  .ops-role-name {
    font-family: 'IBM Plex Sans KR', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: var(--accent);
    margin-bottom: 6px;
  }
  .ops-callout {
    background: var(--bg2);
    border: 1px solid var(--line);
    border-radius: 3px;
    padding: 16px 20px;
    margin-top: 20px;
  }
  .ops-callout > strong {
    display: block;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--accent2);
    margin-bottom: 4px;
  }

  @media (max-width: 900px) {
    .cover-grid { grid-template-columns: 1fr; gap: 36px; }
    .booking-layout { grid-template-columns: minmax(0, 1fr); gap: 30px; }
    .venue-grid { grid-template-columns: minmax(0, 1fr); gap: 26px; }
    .venue-diagram { max-width: 480px; }
    .calendar { max-width: 400px; }
  }

  @media (max-width: 720px) {
    #nav { padding: 12px 22px; flex-wrap: wrap; }
    .nav-hamburger { display: block; }
    .nav-links {
      display: none;
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
      padding: 12px 0 4px;
    }
    .nav-links.open { display: flex; }
    section { padding: 56px 22px; }
    #cover { padding: 56px 22px 24px; }
    #about { padding-top: 24px; }
    #ops { padding-top: 32px; }
    .ops-list-cols { columns: 1; }
    .cover-meta { grid-template-columns: 60px 1fr; font-size: 14px; }
    /* 폰에서는 한 줄에 둘 다 넣으면 요약 문구가 좁게 접히므로 아랫줄로 내린다. */
    .booking-summary-row { flex-wrap: wrap; }
    /* 폰에서는 브라우저 자체 확대로 충분하므로 라이트박스를 끈다.
       눌러도 아무 일이 없으면 안 되니 버튼 성격 자체를 없앤다. */
    .poster-caption { display: none; }
    .poster-thumb { pointer-events: none; cursor: default; }
    .poster-thumb:hover { border-color: var(--line); box-shadow: none; transform: none; }
    .site-footer { padding: 30px 22px; flex-direction: column; text-align: center; }
  }
`;

const body = `
<!-- ── 고정 네비게이션 ── -->
<nav id="nav">
  <a href="/oolimtong_2026_munmak" class="nav-logo">ninnik × 문막-흙으로 잇다 2026</a>
  <button class="nav-hamburger" type="button" onclick="toggleNav()" aria-label="메뉴 열기">
    <span></span><span></span><span></span>
  </button>
  <div class="nav-links" id="nav-links">
    <a href="#booking" onclick="closeNav()">사전신청 현황</a>
    <a href="#ops" onclick="closeNav()">운영 OT</a>
    <a href="/oolimtong_archive" class="nav-cta" onclick="closeNav()">울림통 아카이브 ↗</a>
  </div>
</nav>

<!-- ── 커버 ── -->
<section id="cover" style="border-bottom:none;">
  <div class="cover-grid">
    <div>
      <p class="cover-eyebrow">문막읍 농촌중심지활성화사업 · 온누리 기획단 양성 프로그램 · 2026</p>
      <h1 class="cover-title">문막-<em>흙</em>으로 잇다</h1>
      <p class="cover-lead">
        수목원에서 흙과 함께 하는 세 번의 토요일.<br>
        점토를 켜켜이 쌓고 다지며 즉흥적으로 &lsquo;울림통&rsquo;을 지어보는 워크숍입니다.
      </p>
      <div class="cover-divider"></div>
      <dl class="cover-meta">
        <dt>일시</dt>
        <dd>2026. 9. 5.(토) · 9. 12.(토) · 9. 19.(토)<small>오전 10시 ~ 오후 4시</small></dd>
        <dt>장소</dt>
        <dd>동화마을수목원 잔디광장<small>원주시 문막읍 동화골길 170</small></dd>
        <dt>대상</dt>
        <dd>지역주민 누구나<small>어린이는 보호자와 함께</small></dd>
        <dt>참가비</dt>
        <dd>무료<small>사전 신청 없이 현장 참여도 가능합니다</small></dd>
        <dt>신청·문의</dt>
        <dd>
          인스타그램 <a href="https://instagram.com/ninnik_kraft" target="_blank" rel="noopener noreferrer" style="color:var(--accent2);">@NINNIK_KRAFT</a> DM
          <small>
            이름·연락처·참여 인원·방문 예정 날짜와 시간을 보내주시면 사전등록이 완료됩니다.<br>
            신청하시면 혼잡할 때 우선 안내해 드리고 작업 사진도 보내드려요.<br>
            흙 묻어도 되는 편한 옷차림과 모자·물 등을 챙기시면 좋습니다
          </small>
        </dd>
      </dl>
    </div>

    <div id="poster" class="poster-col" style="scroll-margin-top:80px;">
      <button class="poster-thumb" type="button" onclick="openPoster()" aria-label="포스터 크게 보기">
        <img id="poster-img" src="/munmak-heuk-poster-thumb.webp" width="680" height="960" alt="문막-흙으로 잇다 2026 워크숍 포스터">
      </button>
      <p class="poster-caption">포스터를 누르면 크게 볼 수 있습니다</p>
      <div class="poster-fallback">포스터 준비 중</div>
    </div>
  </div>
</section>

<!-- ── 프로그램 소개 ── -->
<section id="about" style="border-bottom:none;">
  <div class="about-grid">
    <div class="about-card">
      <h3>흙으로 잇다</h3>
      <p>점토를 손으로 반죽하고 길게 주물러 타래를 만듭니다. 그 타래를 켜켜이 쌓아 올리고 다지며, 여럿의 손이 하나의 형태를 함께 지어 나갑니다. 정해진 도면 없이 그날 모인 사람들의 손과 호흡에 따라 형태가 달라집니다. 울림통에는 거쳐간 사람들만큼의 이야기가 쌓이게 됩니다.</p>
    </div>
    <div class="about-card">
      <h3>울림통</h3>
      <p>울림통은 흙으로 짓는 공명의 기(器)입니다. 완성된 형태보다 함께 쌓아 올리는 과정과 그 안에 담기는 이야기를 중요하게 봅니다. 생태적으로는 굽지 않은 흙에 기름과 발수제를 이용한 최소한의 마감을 함으로써 최종적으로는 자연으로 돌아가는 생애주기마저 작품의 한 맥락으로 봅니다. 동화마을수목원에서 짓는 작품은 공간을 품은 종 모양의 일반 울림통이 아닌, 거대한 울림통의 한 벽면을 떼어놓은 것 같은 형태로 제작하게 됩니다.</p>
    </div>
  </div>
</section>

<!-- ── 사전신청 현황 ── -->
<section id="booking" style="border-bottom:none;">
  <h2 class="section-title">사전신청 현황</h2>

  <div class="booking-layout">
    <div>
      <div class="calendar">
        <p class="cal-head">2026년 9월</p>
        <div class="cal-grid" id="cal-grid"></div>
        <p class="cal-legend">
          <span class="swatch"></span>워크숍 진행일 · 날짜를 누르면 해당 회차만 볼 수 있습니다.
        </p>
      </div>
    </div>

    <div>
      <div class="booking-summary-row">
        <p class="booking-summary" id="booking-summary"></p>
        <form class="admin-toggle" id="detail-form" autocomplete="off">
          <span class="admin-toggle-label">관리자 상세보기</span>
          <input type="password" id="detail-pw" inputmode="numeric" maxlength="8" placeholder="••••" aria-label="비밀번호">
          <button type="submit">확인</button>
          <button type="button" class="ghost" id="detail-hide" style="display:none;" onclick="hideDetails()">가리기</button>
        </form>
      </div>
      <p class="detail-msg" id="detail-msg"></p>
      <div class="booking-table-wrap">
        <table class="booking">
          <thead id="booking-head"></thead>
          <tbody id="booking-body"></tbody>
        </table>
      </div>
      <p class="booking-empty" id="booking-empty" style="display:none;">해당 날짜에는 아직 사전신청이 없습니다.</p>
      <p class="visit-note" id="visit-note" style="display:none;"></p>
    </div>
  </div>

  <div class="venue-section">
    <p class="venue-heading">현장 배치 &amp; 혼잡도</p>

    <div class="venue-grid">
    <svg class="venue-diagram" viewBox="0 0 440 450" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="울림통 둘레 최대 6명, 돗자리 두 장에 각 8명, 보조 테이블 배치도">
      <ellipse cx="220" cy="75" rx="60" ry="28" fill="var(--bg3)" stroke="var(--accent)" stroke-width="2"></ellipse>
      <text x="220" y="82" text-anchor="middle" font-size="20" font-weight="700" fill="var(--accent2)">울림통</text>
      <circle cx="190" cy="27" r="9" fill="var(--bg)" stroke="var(--accent2)" stroke-width="2"></circle>
      <circle cx="250" cy="27" r="9" fill="var(--bg)" stroke="var(--accent2)" stroke-width="2"></circle>
      <circle cx="190" cy="123" r="9" fill="var(--bg)" stroke="var(--accent2)" stroke-width="2"></circle>
      <circle cx="250" cy="123" r="9" fill="var(--bg)" stroke="var(--accent2)" stroke-width="2"></circle>
      <circle cx="140" cy="75" r="9" fill="var(--bg)" stroke="var(--accent2)" stroke-width="2"></circle>
      <circle cx="300" cy="75" r="9" fill="var(--bg)" stroke="var(--accent2)" stroke-width="2"></circle>
      <text x="220" y="157" text-anchor="middle" font-size="17" fill="var(--text-dim)">둘러서서 최대 6명</text>

      <rect x="25" y="205" width="160" height="110" rx="4" fill="var(--bg3)" stroke="var(--line)" stroke-width="2"></rect>
      <circle cx="60" cy="229" r="9" fill="var(--bg)" stroke="var(--accent2)" stroke-width="2"></circle>
      <circle cx="105" cy="229" r="9" fill="var(--bg)" stroke="var(--accent2)" stroke-width="2"></circle>
      <circle cx="150" cy="229" r="9" fill="var(--bg)" stroke="var(--accent2)" stroke-width="2"></circle>
      <circle cx="60" cy="291" r="9" fill="var(--bg)" stroke="var(--accent2)" stroke-width="2"></circle>
      <circle cx="105" cy="291" r="9" fill="var(--bg)" stroke="var(--accent2)" stroke-width="2"></circle>
      <circle cx="150" cy="291" r="9" fill="var(--bg)" stroke="var(--accent2)" stroke-width="2"></circle>
      <circle cx="49" cy="260" r="9" fill="var(--bg)" stroke="var(--accent2)" stroke-width="2"></circle>
      <circle cx="161" cy="260" r="9" fill="var(--bg)" stroke="var(--accent2)" stroke-width="2"></circle>
      <text x="105" y="266" text-anchor="middle" font-size="15" font-weight="700" fill="var(--accent2)">돗자리 1</text>
      <text x="105" y="347" text-anchor="middle" font-size="17" fill="var(--text-dim)">앉아서 8명</text>

      <rect x="255" y="205" width="160" height="110" rx="4" fill="var(--bg3)" stroke="var(--line)" stroke-width="2"></rect>
      <circle cx="290" cy="229" r="9" fill="var(--bg)" stroke="var(--accent2)" stroke-width="2"></circle>
      <circle cx="335" cy="229" r="9" fill="var(--bg)" stroke="var(--accent2)" stroke-width="2"></circle>
      <circle cx="380" cy="229" r="9" fill="var(--bg)" stroke="var(--accent2)" stroke-width="2"></circle>
      <circle cx="290" cy="291" r="9" fill="var(--bg)" stroke="var(--accent2)" stroke-width="2"></circle>
      <circle cx="335" cy="291" r="9" fill="var(--bg)" stroke="var(--accent2)" stroke-width="2"></circle>
      <circle cx="380" cy="291" r="9" fill="var(--bg)" stroke="var(--accent2)" stroke-width="2"></circle>
      <circle cx="279" cy="260" r="9" fill="var(--bg)" stroke="var(--accent2)" stroke-width="2"></circle>
      <circle cx="391" cy="260" r="9" fill="var(--bg)" stroke="var(--accent2)" stroke-width="2"></circle>
      <text x="335" y="266" text-anchor="middle" font-size="15" font-weight="700" fill="var(--accent2)">돗자리 2</text>
      <text x="335" y="347" text-anchor="middle" font-size="17" fill="var(--text-dim)">앉아서 8명</text>

      <rect x="155" y="382" width="130" height="44" rx="4" fill="var(--bg2)" stroke="var(--line)" stroke-width="2" stroke-dasharray="6 4"></rect>
      <text x="220" y="410" text-anchor="middle" font-size="16" fill="var(--text-dim)">보조 테이블</text>
    </svg>

    <div>
    <p class="venue-note">울림통 둘레 6명에 돗자리 두 장 16명을 더해, 같은 시간대에 <strong>최대 22명</strong>까지 작업할 수 있습니다. 아래 표는 신청서에 적힌 시각과 아래에서 고른 체류 시간을 기준으로, 그 시각에 현장에 있을 인원이 이 기준을 넘는지 보여줍니다.</p>

    <div class="dwell-row">
      <span class="dwell-label">한 팀 체류 시간</span>
      <button type="button" class="dwell-btn on" data-d="1">1시간</button>
      <button type="button" class="dwell-btn" data-d="2">2시간</button>
      <span class="dwell-hint" id="dwell-hint"></span>
    </div>

    <div class="cong-wrap">
      <table class="cong" id="cong-table"></table>
    </div>
    <p class="cong-legend">
      <span><span class="cg-swatch cg-low"></span>여유 (1~8명 · 한 구역)</span>
      <span><span class="cg-swatch cg-mid"></span>보통 (9~16명 · 두 구역)</span>
      <span><span class="cg-swatch cg-high"></span>빠듯 (17~22명 · 세 구역 전부)</span>
      <span><span class="cg-swatch cg-over"></span>초과 (22명 초과 · 시간 분산 필요)</span>
      <span><span class="cg-swatch cg-na"></span>시간 미정 (시간대별 혼잡도에 안 잡힘)</span>
      <span><strong>+?</strong> 인원을 안 적으신 신청</span>
    </p>
    </div>
    </div>
  </div>
</section>

<!-- ── 운영 OT (운영진 전용) ── -->
<section id="ops" style="border-bottom:none;">
  <p class="section-label">Staff only</p>
  <h2 class="section-title">현장 운영 OT</h2>
  <div class="ops-lock" id="ops-gate">
    <p class="ops-lock-text">운영진(작가·보조)만 보는 현장 운영 안내입니다. 비밀번호를 넣어 주세요.</p>
    <input type="password" id="ops-pw" inputmode="numeric" autocomplete="off" placeholder="비밀번호" aria-label="비밀번호">
    <button type="button" id="ops-unlock">열기</button>
    <span class="ops-lock-msg" id="ops-msg"></span>
  </div>
  <div id="ops-content"></div>
</section>

<!-- ── 푸터 ── -->
<footer class="site-footer">
  <div class="footer-credit">
    <p><b>주최·주관</b> 온누리 기획단 양성 × 니닉크라프트 × 동화마을수목원</p>
    <p>원주시 · 한국농어촌공사 · 문막읍 농촌중심지활성화사업 주민위원회</p>
    <p>문막-흙으로 잇다 · 울림통 · ninnik_kraft · 김아영</p>
  </div>
  <a href="/oolimtong_archive">울림통 아카이브로 돌아가기 ↑</a>
</footer>

<!-- ── 포스터 라이트박스 ── -->
<div id="poster-lightbox" onclick="closePoster()">
  <button class="lb-close" type="button" aria-label="닫기">✕</button>
  <img id="poster-full" data-src="/munmak-heuk-poster.webp" width="1500" height="2118" alt="문막-흙으로 잇다 2026 워크숍 포스터 크게 보기">
</div>
`;

const script = `
(function () {
  var EVENT_DAYS = [5, 12, 19];
  var PW = "1661";
  var PACKED = "W3siaWQiOiJyMSIsIm5hbWUiOiLsnbTsp4TtnawiLCJwaG9uZSI6IjAxMC05MzE4LTA5OTEiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMzowMCIsInRvdGFsIjozLCJhZHVsdHMiOjIsImtpZHMiOjEsIm5vdGUiOiIifSx7ImlkIjoicjIiLCJuYW1lIjoi7ZeI7Z2s6rK9IiwicGhvbmUiOiIwMTAtOTkwNy02MDcyIiwiZGF0ZSI6IjIwMjYtMDktMTkiLCJ0aW1lIjoiMTQ6MDAiLCJ0b3RhbCI6bnVsbCwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InIzIiwibmFtZSI6IuydtOuPme2drCIsInBob25lIjoiMDEwLTg4NTctODM0OSIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjEwOjAwIiwidG90YWwiOjYsImFkdWx0cyI6NCwia2lkcyI6Miwibm90ZSI6IiJ9LHsiaWQiOiJyNCIsIm5hbWUiOiLsl4Ttg5zrprwiLCJwaG9uZSI6IjAxMC05MDU3LTc5MTgiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMzowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjUiLCJuYW1lIjoi67CV7JWE66aEIiwicGhvbmUiOiIwMTAtNDg1MS00NTUwIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTA6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjoyLCJraWRzIjoyLCJub3RlIjoiIn0seyJpZCI6InI2IiwibmFtZSI6Iuq5gOyEoOyYgSIsInBob25lIjoiMDEwLTQyMTAtNjU4OCIsImRhdGUiOiIyMDI2LTA5LTA1IiwidGltZSI6IjEzOjAwIiwidG90YWwiOjMsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyNyIsIm5hbWUiOiLrgpjsmIHsi6QiLCJwaG9uZSI6IjAxMC0zMDAyLTY1NDMiLCJkYXRlIjoiMjAyNi0wOS0xMiIsInRpbWUiOiIxMDozMCIsInRvdGFsIjozLCJhZHVsdHMiOjIsImtpZHMiOjEsIm5vdGUiOiIifSx7ImlkIjoicjgiLCJuYW1lIjoi6rCV66+87KeAIiwicGhvbmUiOiIwMTAtNzE4OC00OTYzIiwiZGF0ZSI6IjIwMjYtMDktMTkiLCJ0aW1lIjoiUE0iLCJ0b3RhbCI6NCwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InI5IiwibmFtZSI6IuydtOydgOyjvCIsInBob25lIjoiMDEwLTMzMzYtMzQ2NSIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IkFNIiwidG90YWwiOjMsImFkdWx0cyI6Miwia2lkcyI6MSwibm90ZSI6Iuy0iDIg64Ko7JWEICsg67aA66qoIn0seyJpZCI6InIxMCIsIm5hbWUiOiLsnbTrr7zsiJkiLCJwaG9uZSI6IjAxMC00MTQ1LTA5OTAiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMzowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIxMzowMCDsnbTtm4Qg7Z2s66edIn0seyJpZCI6InIxMSIsIm5hbWUiOiLsnbTsg4HslYQiLCJwaG9uZSI6IjAxMC0zMzk1LTU2NjgiLCJkYXRlIjoiMjAyNi0wOS0xMiIsInRpbWUiOiIxMDowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjEyIiwibmFtZSI6IuycoOyngO2YnCIsInBob25lIjoiMDEwLTQ2MjctODUxNiIsImRhdGUiOiIyMDI2LTA5LTA1IiwidGltZSI6IjExOjAwIiwidG90YWwiOjQsImFkdWx0cyI6Miwia2lkcyI6Miwibm90ZSI6IuyVhOuPmSA47IS4LCA27IS4In0seyJpZCI6InIxMyIsIm5hbWUiOiLtmY3sp4DsnYAiLCJwaG9uZSI6IjAxMC02NDg5LTMyMjIiLCJkYXRlIjoiMjAyNi0wOS0xMiIsInRpbWUiOiIxMzowMCIsInRvdGFsIjozLCJhZHVsdHMiOjEsImtpZHMiOjIsIm5vdGUiOiIxMzowMH4xNTozMCJ9LHsiaWQiOiJyMTQiLCJuYW1lIjoi7ZmN7KeA7J2AIiwicGhvbmUiOiIwMTAtNjQ4OS0zMjIyIiwiZGF0ZSI6IjIwMjYtMDktMTkiLCJ0aW1lIjoiMTM6MDAiLCJ0b3RhbCI6MywiYWR1bHRzIjoxLCJraWRzIjoyLCJub3RlIjoiMTM6MDB+MTU6MzAifSx7ImlkIjoicjE1IiwibmFtZSI6Iuy1nOyXsO2drCIsInBob25lIjoiMDEwLTYzODgtMDAwNyIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjEyOjAwIiwidG90YWwiOjUsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyMTYiLCJuYW1lIjoi6rmA7KCV66+4IiwicGhvbmUiOiIwMTAtNzEwNS0xNTcwIiwiZGF0ZSI6IjIwMjYtMDktMTIiLCJ0aW1lIjoiMTE6MDAiLCJ0b3RhbCI6MiwiYWR1bHRzIjowLCJraWRzIjoyLCJub3RlIjoi7LSIMiDsl6zslYQifSx7ImlkIjoicjE3IiwibmFtZSI6IuycoOuvuOuCmCIsInBob25lIjoiMDEwLTY2MTEtNDg4MyIsImRhdGUiOiIyMDI2LTA5LTA1IiwidGltZSI6IjEzOjAwIiwidG90YWwiOjUsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IjEzOjAwIOyghO2bhCJ9LHsiaWQiOiJyMTgiLCJuYW1lIjoi67CV7Jyg66a8IiwicGhvbmUiOiIwMTAtMjQ3Mi02NzYzIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTQ6MDAiLCJ0b3RhbCI6NywiYWR1bHRzIjoyLCJraWRzIjo1LCJub3RlIjoiIn0seyJpZCI6InIxOSIsIm5hbWUiOiLquYDsnKTsoJUiLCJwaG9uZSI6IjAxMC0zMzIzLTExNzUiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxNDowMCIsInRvdGFsIjo0LCJhZHVsdHMiOm51bGwsImtpZHMiOm51bGwsIm5vdGUiOiIifSx7ImlkIjoicjIwIiwibmFtZSI6IuuwsOuvuOynhCIsInBob25lIjoiMDEwLTQ4MDktMTQ4OSIsImRhdGUiOiIyMDI2LTA5LTA1IiwidGltZSI6IjEyOjAwIiwidG90YWwiOjQsImFkdWx0cyI6Miwia2lkcyI6Miwibm90ZSI6IiJ9LHsiaWQiOiJyMjEiLCJuYW1lIjoi67CV7Zic7KeEIiwicGhvbmUiOiIwMTAtNDEyNi00MzIxIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTE6MDAiLCJ0b3RhbCI6MywiYWR1bHRzIjoxLCJraWRzIjoyLCJub3RlIjoiIn0seyJpZCI6InIyMyIsIm5hbWUiOiLsnbTqsqjroIgiLCJwaG9uZSI6IjAxMC05NDg2LTUxMjAiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMjozMCIsInRvdGFsIjo0LCJhZHVsdHMiOm51bGwsImtpZHMiOm51bGwsIm5vdGUiOiIifSx7ImlkIjoicjI0IiwibmFtZSI6Iuq5gOyEuOyglSIsInBob25lIjoiMDEwLTkwMTUtNDkxMSIsImRhdGUiOiIyMDI2LTA5LTA1IiwidGltZSI6IjEwOjAwIiwidG90YWwiOjMsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyMjUiLCJuYW1lIjoi6rmA7J2A7JiBIiwicGhvbmUiOiIwMTAtNDU0My03OTkyIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTA6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjoyLCJraWRzIjoyLCJub3RlIjoiIn0seyJpZCI6InIyNiIsIm5hbWUiOiLquYDri6TsmIgiLCJwaG9uZSI6IjAxMC01NjY1LTY1MDciLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxNTowMCIsInRvdGFsIjo2LCJhZHVsdHMiOjMsImtpZHMiOjMsIm5vdGUiOiI07IS4IDHrqoUgwrcgNuyEuCAy66qFIn0seyJpZCI6InIyNyIsIm5hbWUiOiLsnKDsl7Dsp4AiLCJwaG9uZSI6IjAxMC00OTI4LTU0MjYiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMDowMCIsInRvdGFsIjozLCJhZHVsdHMiOjEsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjI4IiwibmFtZSI6Iuq5gOyImOyglSIsInBob25lIjoiMDEwLTkxNTktMDc4OSIsImRhdGUiOiIyMDI2LTA5LTA1IiwidGltZSI6IjEzOjAwIiwidG90YWwiOjYsImFkdWx0cyI6Miwia2lkcyI6NCwibm90ZSI6IiJ9LHsiaWQiOiJyMjkiLCJuYW1lIjoi7J207JWE66aEIiwicGhvbmUiOiIwMTAtMjQ2Ny0wNDMyIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTQ6MDAiLCJ0b3RhbCI6MiwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InIzMCIsIm5hbWUiOiLquYDrr7jsoJUiLCJwaG9uZSI6IjAxMC00NDA1LTQ1NDIiLCJkYXRlIjoiMjAyNi0wOS0xMiIsInRpbWUiOiIxMTowMCIsInRvdGFsIjo0LCJhZHVsdHMiOm51bGwsImtpZHMiOm51bGwsIm5vdGUiOiIifSx7ImlkIjoicjMxIiwibmFtZSI6IuuFuOyngOyEoCIsInBob25lIjoiMDEwLTU1MTItODYyOCIsImRhdGUiOiIyMDI2LTA5LTA1IiwidGltZSI6IjEwOjAwIiwidG90YWwiOjMsImFkdWx0cyI6Miwia2lkcyI6MSwibm90ZSI6IiJ9LHsiaWQiOiJyMzIiLCJuYW1lIjoi6rmA7ZiE66+4IiwicGhvbmUiOiIwMTAtOTE5NS0xNjcxIiwiZGF0ZSI6IjIwMjYtMDktMTkiLCJ0aW1lIjoiMTA6MDAiLCJ0b3RhbCI6MywiYWR1bHRzIjoyLCJraWRzIjoxLCJub3RlIjoi7JWE7J20IDjshLgifSx7ImlkIjoicjMzIiwibmFtZSI6IuyXhOygleydgCIsInBob25lIjoiMDEwLTU0ODctMDgwOSIsImRhdGUiOiIyMDI2LTA5LTA1IiwidGltZSI6IjExOjAwIiwidG90YWwiOjIsImFkdWx0cyI6MSwia2lkcyI6MSwibm90ZSI6IiJ9LHsiaWQiOiJyMzQiLCJuYW1lIjoi7LWc64+Z6recIiwicGhvbmUiOiIwMTAtOTQwMS04NzgzIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTE6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InIzNSIsIm5hbWUiOiLqsJXsnYDsmKUiLCJwaG9uZSI6IjAxMC02NDcyLTA5OTYiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxMTowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiLstIgzLCA17IS4In0seyJpZCI6InIzNiIsIm5hbWUiOiLsnKTtg5zsmIEiLCJwaG9uZSI6IjAxMC01MDU1LTI3NzgiLCJkYXRlIjoiMjAyNi0wOS0xMiIsInRpbWUiOiIxNDowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjM3IiwibmFtZSI6IuydtOuvuOyInCIsInBob25lIjoiMDEwLTkyNDMtMDUxNyIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjE0OjAwIiwidG90YWwiOjIsImFkdWx0cyI6MSwia2lkcyI6MSwibm90ZSI6IiJ9LHsiaWQiOiJyMzgiLCJuYW1lIjoi7J2066qF7ZmUIiwicGhvbmUiOiIwMTAtNzEyOC0xNTI5IiwiZGF0ZSI6IjIwMjYtMDktMTIiLCJ0aW1lIjoiMTE6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjoyLCJraWRzIjoyLCJub3RlIjoiIn0seyJpZCI6InIzOSIsIm5hbWUiOiLsm5DsmIjsp4QiLCJwaG9uZSI6IjAxMC03MTk2LTk2NjkiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxNDowMCIsInRvdGFsIjoyLCJhZHVsdHMiOjEsImtpZHMiOjEsIm5vdGUiOiLsi6DshozsnKgg64+Z67CYIn0seyJpZCI6InI0MCIsIm5hbWUiOiLquYDqsJXsnbwiLCJwaG9uZSI6IjAxMC0yOTI1LTk3NzEiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxNDowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjQxIiwibmFtZSI6IuyepeuvvOqyvSIsInBob25lIjoiMDEwLTI5NjktMzQ5OSIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjEzOjAwIiwidG90YWwiOjIsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyNDIiLCJuYW1lIjoi7J206rK97Ja4IiwicGhvbmUiOiIwMTAtNDQ5Mi05NTY5IiwiZGF0ZSI6IjIwMjYtMDktMTkiLCJ0aW1lIjoiMTI6MDAiLCJ0b3RhbCI6MywiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiMTLsi5zsr6QifSx7ImlkIjoicjQzIiwibmFtZSI6IuuwleycqCIsInBob25lIjoiMDEwLTIwMTQtOTk5NyIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjE0OjAwIiwidG90YWwiOjQsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyNDQiLCJuYW1lIjoi7KeE64uk7ZicIiwicGhvbmUiOiIwMTAtOTgzNi0wNTExIiwiZGF0ZSI6IjIwMjYtMDktMTIiLCJ0aW1lIjoiMTQ6MDAiLCJ0b3RhbCI6MiwiYWR1bHRzIjoxLCJraWRzIjoxLCJub3RlIjoiIn0seyJpZCI6InI0NSIsIm5hbWUiOiLquYDsnYDso7wiLCJwaG9uZSI6IjAxMC0yMTgxLTQ4MjQiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMTowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjQ2IiwibmFtZSI6Iuq5gO2YhOyglSIsInBob25lIjoiMDEwLTI4NTItMDY1NCIsImRhdGUiOiIyMDI2LTA5LTA1IiwidGltZSI6IjEyOjAwIiwidG90YWwiOjIsImFkdWx0cyI6MSwia2lkcyI6MSwibm90ZSI6IuuFuOyVhCJ9LHsiaWQiOiJyNDciLCJuYW1lIjoi7Iug7KCV7JilIiwicGhvbmUiOiIwMTAtNDA5OC0wMDUzIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTI6MDAiLCJ0b3RhbCI6MywiYWR1bHRzIjoyLCJraWRzIjoxLCJub3RlIjoiIn0seyJpZCI6InI0OCIsIm5hbWUiOiLsi6DsoJXsmKUiLCJwaG9uZSI6IjAxMC00MDk4LTAwNTMiLCJkYXRlIjoiMjAyNi0wOS0xMiIsInRpbWUiOiIxMTowMCIsInRvdGFsIjozLCJhZHVsdHMiOjIsImtpZHMiOjEsIm5vdGUiOiIifSx7ImlkIjoicjQ5IiwibmFtZSI6IuyLoOygleyYpSIsInBob25lIjoiMDEwLTQwOTgtMDA1MyIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjExOjAwIiwidG90YWwiOjMsImFkdWx0cyI6Miwia2lkcyI6MSwibm90ZSI6IiJ9XQ==";

  var rows = [];
  var showDetails = false;
  var selectedDay = null;
  // 이름과 시간만 정렬 대상이다. 기본은 날짜 → 시간 순서.
  var sortKey = "date";
  var sortDir = 1;
  // 한 팀이 얼마나 머무느냐에 따라 같은 신청도 겹치는 정도가 달라진다.
  // 1시간이면 도착 시각 칸에만, 2시간이면 다음 칸까지 함께 차지한다.
  var dwell = 1;

  function unpack() {
    try {
      var bin = atob(PACKED);
      var bytes = new Uint8Array(bin.length);
      for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      return JSON.parse(new TextDecoder("utf-8").decode(bytes));
    } catch (e) {
      return [];
    }
  }

  function mask(name) {
    if (!name) return "";
    return name.charAt(0) + new Array(name.length).join("*");
  }

  // 이름이 아직 안 정해진 신청도 있다. 빈 칸으로 두면 행이 무너져 보이므로
  // 다른 미정 표기와 같은 흐린 스타일로 "미정"이라고 적는다.
  function nameCell(r, masked) {
    if (!r.name) return "<td class=\\"t-na\\">미정</td>";
    return "<td>" + esc(masked ? mask(r.name) : r.name) + visitBadge(r) + "</td>";
  }

  function dayOf(iso) { return parseInt(iso.slice(8, 10), 10); }

  // 세 회차 모두 9월 토요일이라 월·요일은 달력이 이미 말해준다. 일자만 쓴다.
  function fmtDate(iso) {
    return parseInt(iso.slice(8, 10), 10) + "일";
  }

  // 010은 전원 공통이라 머리글로 빼고 뒤 8자리만 보여준다.
  function fmtPhone(t) {
    if (!t) return "미정";
    return t.replace(/^010[-\s]?/, "");
  }

  function fmtTime(t) {
    if (!t) return "시간 미정";
    if (t === "AM") return "오전 (미정)";
    if (t === "PM") return "오후 (미정)";
    return t;
  }

  // 혼잡도 표에서 같은 칸으로 묶을 때 쓰는 키. 정확한 시각은 그 시(hour)로, "오전/오후"만
  // 적힌 신청은 AM/PM 칸으로, 시간을 아예 안 적은 신청은 NA 칸으로 모은다.
  function timeBucket(t) {
    if (t === "AM" || t === "PM") return t;
    if (!t) return "NA";
    return parseInt(t.slice(0, 2), 10);
  }

  function isUndecided(t) { return !t || t === "AM" || t === "PM"; }

  function timeCls(t) { return isUndecided(t) ? " t-na" : ""; }

  function timeSortKey(t) {
    if (!t) return "9-NA";
    if (t === "AM") return "0-AM";
    if (t === "PM") return "8-PM";
    return "1-" + t;
  }

  function fmtTotal(n) { return n == null ? "미정" : n + "명"; }

  function fmtTotalDetail(r) {
    if (r.total == null) return "미정";
    return fmtTotal(r.total) + (r.adults == null ? "" : " (" + r.adults + "/" + r.kids + ")");
  }

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // 같은 연락처가 여러 날에 걸쳐 있으면 날짜 순으로 ①②…를 매긴다.
  // 총인원의 (성인/아동) 표기와 겹치지 않도록 괄호 숫자는 피했다.
  var CIRCLED = "①②③④⑤⑥⑦⑧⑨";
  var visitMarks = {};

  function computeVisitMarks() {
    var byKey = {};
    visitMarks = {};
    rows.forEach(function (r) {
      var k = r.phone || r.name;
      (byKey[k] = byKey[k] || []).push(r);
    });
    Object.keys(byKey).forEach(function (k) {
      var g = byKey[k];
      if (g.length < 2) return;
      g.slice().sort(function (a, b) { return a.date < b.date ? -1 : 1; })
        .forEach(function (r, i) { visitMarks[r.id] = CIRCLED.charAt(i) || "＊"; });
    });
  }

  function visitBadge(r) {
    var mk = visitMarks[r.id];
    return mk ? " <span class=\\"visit\\" title=\\"여러 날 신청하신 분\\">" + mk + "</span>" : "";
  }

  // 이름이나 시간이 미정인 행은 정렬 방향과 상관없이 늘 뒤로 보낸다.
  // 오름차순에서만 뒤로 가면 내림차순일 때 목록 맨 위가 미정으로 차 버린다.
  function isBlankFor(k, r) {
    if (k === "name") return !r.name;
    if (k === "time") return !r.time;
    return false;
  }

  function cmpBy(k, a, b) {
    if (k === "name") return a.name.localeCompare(b.name, "ko");
    if (k === "date") return a.date < b.date ? -1 : (a.date > b.date ? 1 : 0);
    if (k === "time") {
      var ta = timeSortKey(a.time), tb = timeSortKey(b.time);
      return ta < tb ? -1 : (ta > tb ? 1 : 0);
    }
    return 0;
  }

  function sorted() {
    return rows.slice().sort(function (a, b) {
      // 시간 정렬은 하루 안에서만 한다. 날짜는 늘 5 → 12 → 19 순으로 묶여 있어야
      // 어느 회차 이야기인지 놓치지 않는다.
      if (sortKey === "time") {
        var dd = cmpBy("date", a, b);
        if (dd) return dd;
      }

      var na = isBlankFor(sortKey, a), nb = isBlankFor(sortKey, b);
      if (na !== nb) return na ? 1 : -1;
      if (!na) {
        var c = cmpBy(sortKey, a, b) * sortDir;
        if (c) return c;
      }
      // 같은 값이면 날짜 → 시간으로 갈라 늘 같은 차례가 나오게 한다
      var d = cmpBy("date", a, b);
      if (d) return d;
      return cmpBy("time", a, b);
    });
  }

  function visible() {
    var list = sorted();
    if (selectedDay == null) return list;
    return list.filter(function (r) { return dayOf(r.date) === selectedDay; });
  }

  function renderCalendar() {
    var grid = document.getElementById("cal-grid");
    if (!grid) return;
    var dows = ["일", "월", "화", "수", "목", "금", "토"];
    var html = "";
    for (var i = 0; i < 7; i++) {
      html += '<div class="cal-dow' + (i === 0 ? " sun" : "") + '">' + dows[i] + "</div>";
    }
    var first = new Date(2026, 8, 1).getDay();
    for (var b = 0; b < first; b++) html += '<div class="cal-cell empty"></div>';
    for (var d = 1; d <= 30; d++) {
      var isEvent = EVENT_DAYS.indexOf(d) !== -1;
      if (!isEvent) {
        html += '<div class="cal-cell">' + d + "</div>";
        continue;
      }
      var count = rows.filter(function (r) { return dayOf(r.date) === d; }).length;
      var cls = "cal-cell event" + (selectedDay === d ? " selected" : "");
      html += '<div class="' + cls + '" data-day="' + d + '" role="button" tabindex="0">' + d +
        '<span class="cal-dot">' + count + "건</span></div>";
    }
    grid.innerHTML = html;

    Array.prototype.forEach.call(grid.querySelectorAll(".cal-cell.event"), function (cell) {
      function pick() {
        var d = parseInt(cell.getAttribute("data-day"), 10);
        selectedDay = selectedDay === d ? null : d;
        render();
      }
      cell.addEventListener("click", pick);
      cell.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(); }
      });
    });
  }

  function renderTable() {
    var head = document.getElementById("booking-head");
    var bodyEl = document.getElementById("booking-body");
    var empty = document.getElementById("booking-empty");
    var summary = document.getElementById("booking-summary");
    if (!head || !bodyEl) return;

    var list = visible();

    var cols = showDetails
      ? [["name", "이름"], [null, "연락처<br>(010-)"], [null, "날짜"], ["time", "시간"], [null, "총인원<br>(성인/아동)"], [null, "비고"]]
      : [["name", "이름"], [null, "날짜"], ["time", "시간"], [null, "총인원"]];

    head.innerHTML = "<tr>" + cols.map(function (c) {
      if (!c[0]) return "<th>" + c[1] + "</th>";
      var on = sortKey === c[0];
      var arrow = on ? (sortDir > 0 ? "▲" : "▼") : "↕";
      return "<th class=\\"sortable" + (on ? " on" : "") + "\\" data-k=\\"" + c[0] +
        "\\" role=\\"button\\" tabindex=\\"0\\" title=\\"눌러서 정렬\\">" + c[1] +
        "<span class=\\"arw\\">" + arrow + "</span></th>";
    }).join("") + "</tr>";

    // innerHTML로 다시 그렸으므로 매번 새로 연결한다
    Array.prototype.forEach.call(head.querySelectorAll("th.sortable"), function (th) {
      function pick() {
        var k = th.getAttribute("data-k");
        // 오름 → 내림 → 기본(날짜순). 날짜 칸은 누를 수 없으므로
        // 세 번째 누름이 원래 순서로 돌아오는 유일한 길이다.
        if (sortKey !== k) { sortKey = k; sortDir = 1; }
        else if (sortDir === 1) { sortDir = -1; }
        else { sortKey = "date"; sortDir = 1; }
        renderTable();
      }
      th.addEventListener("click", pick);
      th.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(); }
      });
    });

    var html = "";
    list.forEach(function (r) {
      if (showDetails) {
        html += "<tr>" + nameCell(r, false) + "<td class=\\"num" + (r.phone ? "" : " t-na") + "\\">" + esc(fmtPhone(r.phone)) +
          "</td><td class=\\"num\\">" + fmtDate(r.date) + "</td><td class=\\"num" + timeCls(r.time) + "\\">" + fmtTime(r.time) +
          "</td><td class=\\"" + (r.total == null ? "t-na" : "") + "\\">" + esc(fmtTotalDetail(r)) + "</td><td class=\\"note\\">" + esc(r.note || "—") + "</td></tr>";
      } else {
        html += "<tr>" + nameCell(r, true) + "<td class=\\"num\\">" + fmtDate(r.date) +
          "</td><td class=\\"num" + timeCls(r.time) + "\\">" + fmtTime(r.time) + "</td><td class=\\"num" + (r.total == null ? " t-na" : "") + "\\">" + fmtTotal(r.total) + "</td></tr>";
      }
    });
    bodyEl.innerHTML = html;
    if (empty) empty.style.display = list.length ? "none" : "block";

    var vnote = document.getElementById("visit-note");
    if (vnote) {
      var marked = list.filter(function (r) { return visitMarks[r.id]; }).length;
      vnote.style.display = marked ? "block" : "none";
      vnote.innerHTML = "<span class=\\"visit\\">①②</span> 같은 분이 여러 날 신청하신 경우입니다. 날짜별로 따로 세었습니다.";
    }

    if (summary) {
      var known = list.filter(function (r) { return r.total != null; });
      var people = known.reduce(function (a, r) { return a + r.total; }, 0);
      var undecided = list.length - known.length;
      var scope = selectedDay == null ? "전체" : "9월 " + selectedDay + "일";
      summary.innerHTML = scope + " · 사전신청 <strong>" + list.length + "건</strong> · 인원 <strong>" + people + "명</strong>" +
        (undecided ? " <span>(미정 " + undecided + "건 별도)</span>" : "");
    }
  }

  var CONG_COLUMNS = ["AM", 10, 11, 12, 13, 14, 15, "PM", "NA"];

  // 한 칸은 그 시각부터 한 시간을 묶는다(10:00~ 칸에 10:30 신청도 들어간다).
  function isUndecidedCol(c) { return c === "AM" || c === "PM" || c === "NA"; }

  function congLabel(c) {
    if (c === "AM") return "오전<br>미정";
    if (c === "PM") return "오후<br>미정";
    if (c === "NA") return "시간<br>미정";
    return (c < 10 ? "0" + c : c) + ":00~";
  }

  function renderCongestion() {
    var table = document.getElementById("cong-table");
    if (!table) return;

    var html = "<thead><tr><th>날짜</th>";
    CONG_COLUMNS.forEach(function (c) {
      html += "<th class=\\"" + (isUndecidedCol(c) ? "th-na" : "") + "\\">" + congLabel(c) + "</th>";
    });
    html += "<th>하루<br>합계</th></tr></thead><tbody>";

    EVENT_DAYS.forEach(function (d) {
      var iso = "2026-09-" + (d < 10 ? "0" + d : d);
      var dayRows = rows.filter(function (r) { return r.date === iso; });

      // 하루 합계는 칸을 더해 구하면 체류 2시간일 때 같은 사람을 두 번 센다.
      // 신청서에서 바로 세어 실제 인원을 유지한다.
      var dayPeople = 0, dayUnknown = 0;
      dayRows.forEach(function (r) {
        if (r.total == null) dayUnknown++;
        else dayPeople += r.total;
      });

      html += "<tr><td>9." + d + ".</td>";
      CONG_COLUMNS.forEach(function (c) {
        var cellRows = dayRows.filter(function (r) {
          var b = timeBucket(r.time);
          if (isUndecidedCol(c)) return b === c;
          // 시각이 잡힌 신청만 앞 칸에서 넘어올 수 있다
          if (typeof b !== "number") return false;
          return b <= c && c < b + dwell;
        });
        var people = 0, unknown = 0;
        cellRows.forEach(function (r) {
          if (r.total == null) unknown++;
          else people += r.total;
        });

        var cls = "cg-empty", label = "–";
        if (people > 0 || unknown > 0) {
          // 시각이 안 잡힌 칸은 시간대 혼잡도로 읽히면 안 되므로 히트맵에서 빼둔다.
          cls = isUndecidedCol(c)
            ? "cg-na"
            : (people > 22 ? "cg-over"
              : (people > 16 ? "cg-high"
                : (people > 8 ? "cg-mid" : "cg-low")));
          // 인원을 안 적은 신청은 합계에 못 넣으므로 "+?"로 따로 붙인다.
          // 두 건 이상이면 개수를 붙여 조용히 묻히지 않게 한다.
          var q = unknown ? (unknown > 1 ? "+?" + unknown : "+?") : "";
          label = people > 0 ? people + "명" + q : (q || "–");
        }
        html += "<td class=\\"cg-cell " + cls + "\\">" + label + "</td>";
      });
      html += "<td class=\\"cg-cell\\">" + dayPeople + "명" + (dayUnknown ? (dayUnknown > 1 ? "+?" + dayUnknown : "+?") : "") + "</td></tr>";
    });

    html += "</tbody>";
    table.innerHTML = html;
  }

  function renderDwell() {
    var hint = document.getElementById("dwell-hint");
    if (hint) {
      hint.textContent = dwell === 1
        ? "· 도착한 시각에만 머문다고 봅니다"
        : "· 다음 시간대까지 남아 있다고 봅니다 (겹침 반영)";
    }
    Array.prototype.forEach.call(document.querySelectorAll(".dwell-btn"), function (b) {
      b.classList.toggle("on", +b.getAttribute("data-d") === dwell);
    });
  }

  function render() {
    computeVisitMarks();
    renderDwell();
    renderCalendar();
    renderTable();
    renderCongestion();
  }

  window.toggleNav = function () {
    var el = document.getElementById("nav-links");
    if (el) el.classList.toggle("open");
  };
  window.closeNav = function () {
    var el = document.getElementById("nav-links");
    if (el) el.classList.remove("open");
  };

  window.openPoster = function () {
    // 폰에서는 브라우저 확대로 충분해 라이트박스를 쓰지 않는다.
    // CSS(pointer-events)로도 막지만, 동작 자체를 여기서 확실히 끊는다.
    if (window.matchMedia("(max-width: 720px)").matches) return;
    var lb = document.getElementById("poster-lightbox");
    if (!lb) return;
    var full = document.getElementById("poster-full");
    if (full && !full.getAttribute("src")) full.src = full.getAttribute("data-src");
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
  };
  window.closePoster = function () {
    var lb = document.getElementById("poster-lightbox");
    if (lb) { lb.classList.remove("open"); document.body.style.overflow = ""; }
  };
  window.markPosterMissing = function () {
    var wrap = document.getElementById("poster");
    if (wrap) wrap.classList.add("poster-missing");
  };
  window.hideDetails = function () {
    showDetails = false;
    var hide = document.getElementById("detail-hide");
    var msg = document.getElementById("detail-msg");
    var pw = document.getElementById("detail-pw");
    if (hide) hide.style.display = "none";
    if (msg) msg.textContent = "";
    if (pw) pw.value = "";
    renderTable();
  };

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") window.closePoster();
  });

  var form = document.getElementById("detail-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var pw = document.getElementById("detail-pw");
      var msg = document.getElementById("detail-msg");
      var hide = document.getElementById("detail-hide");
      if (pw && pw.value.trim() === PW) {
        showDetails = true;
        if (msg) msg.textContent = "전체 사전신청 정보를 표시합니다.";
        if (hide) hide.style.display = "inline-block";
        renderTable();
      } else {
        showDetails = false;
        if (msg) msg.textContent = "비밀번호가 올바르지 않습니다.";
        if (hide) hide.style.display = "none";
        renderTable();
      }
    });
  }

  Array.prototype.forEach.call(document.querySelectorAll(".dwell-btn"), function (b) {
    b.addEventListener("click", function () {
      dwell = +b.getAttribute("data-d");
      renderDwell();
      renderCongestion();
    });
  });

  var posterImg = document.getElementById("poster-img");
  if (posterImg) {
    if (posterImg.complete && posterImg.naturalWidth === 0) window.markPosterMissing();
    posterImg.addEventListener("error", window.markPosterMissing);
  }

  rows = unpack();
  render();
})();
`;

// 운영 OT 본문은 AES-GCM(PBKDF2, 10만 회)으로 암호화해 두고 비밀번호로만 푼다.
// 운영진 전용. 비밀번호를 바꾸거나 내용을 고치려면 평문을 다시 암호화해 이 값을 교체한다.
const opsCipher = "{\"salt\":\"PCSLNUGEowtqYo/xTLfOEg==\",\"iv\":\"SCZnGUD1c5xqDvyC\",\"iter\":100000,\"data\":\"jaY/LQ0FXK1nLPJ0mwNUpMT34fZmmXRNkuedc97GKG4mgJsv/P083jxB5tgYccTHz3M9y1Wlgq0Fb9iWwgZikB2I+WTzF27aFF9ouV0xiV3t6W6d4W32FK9d2ArZYt+camK7C62Em6W4qfcWCKTT3hKwZ+6wuIesLLf2EiGGwCejHWsgOy9aW7OCewclNfIAvJgrId/X6+KPnEGi67hViaS9gUzKP3/j72omKQMAfNJ3vhOTELDiwMGUdR+tu94zCWYHUh3FSLnDIMvH3uayGSp1Nb200748Rrn9aS5H73T8XZuCQvKLAHkrNmo+zJCTvQbSoQFJjbhj6NfY3EJbMPrGKpcp8r9KlJozMYzD34t+wmC7GsP+MHUf7nMszlAS1bk/EJQt39dRJJGzhMCNY6TKqE8OfN7/zLAr7+kOLqll66OfJqSltIOf2sDnBLLx1FzGwAnI4fppd+KC58raqCU+wSgR8a4LHgVNqA0w2a8TB8lvQZThfsWQWECej97cjOaieeQJdWoRws6VlCGtJQUWDsmXe+ctlgmJBl+nyTsknogSRJrPdBMc4CP/M7DrJ162QKoQsWbNz8h26wJ9RnIUiMvcozZ0Je2h/N3RhwD8dUwG7XuLpizupaePtgPPvYh5JfnngEnJSHsTUnwLWC8+o9AtYPDSC5lTU/EB8NDw2mwpy2sPcXENVqO7ZnXqmG68n7/j2miTDR4EEqiL5jmRA/+FNlC851wIRsQflV9FoJsKKsu/nv+c5DZQUAH41hcYdpJylEeF5YWXRzUhuMbgdub9E/AXY+54C2jemLBLVLzZytVyT8ibFQVyvseQa8BXbf7EZpqyBUgqK8QcNbnwqCDiDzGQYVWI2WCey3eaX6pa0wPIhP0NB7tcJfuFJzhWv45H92Od0u09VQX/Clq23CAApRoFZA1/SH8yhLA4e02cUVS5WOX7gDY/TLUJIRtZSni0f42YKKN3Pf+wGIIHiJbcDPp9ofSZsSibkrsD7+/jc4JNOo107R+MQye+deGAz/V34C8c7C5F8shBNdawzLwyyxCluTxmmgPoMF39ml/8bSwumLc1wU44oMnby6mN2Rp02vUZvzPvba7flwlkIcBCWI029Zx20HDJxpJ52U4kFV598WEKPfnohX6swGPH9SgrBaWg6Pi8T+bkrlh6FQgHdiaOMyQptYSTNCigrfRfKnCVypvsf13SdEkZF14KlgtBGejX1iKJ88AliGfOhLJMDDq62Tm+6/m5Q74TCLPnm7uVMDjRiQHBQAb3iFX9xxBfanoeC/hiz46BM+OnOwBd27DhYxEokj3diQSAUFnY7jHe4v3MO7S2y6NS7gKRFvIl/cIfgPSvk/clMU9/X/ZvOEf/Dmtc4oSanwLZhsjDc4QPoJ3vtUI9hioyLV47gQJiq6CwvTeyFXFHJEqbBAhcG7R+8bUfvJlkkpITxWgW4BsVIIZo9g03ikB84n391E7RLvK0+DKnRipztSqDHavRhbVY8gCfbEX/zChOLaojkuRH2611kYYKLCH5ppJaBnkoOm37JLFxLoXcgEAxWGaBB84pyEkPrgrfijirLUDxV/vkeiu54bEtTn4m39hwUzIpQTDz0Exv04WDxbfv4ty8fe6D1ygVal/ITaNpijhJji4py27anHlQD4rVSpc8xw19rP5IZcAlIeBXc8u5B0lUO722QbTES2UGtd5c5kecqq7L2CokSaMtK7TKPKpdpos/CmgpM6iwuSgPsSvNz35EKU9yRRzno5cizPtjP5iMpkfnc21x0ke/fKtAKblLO7c22vySqnLTV3d1GxzV63HOFzM1zRwb2lCEPXCcqmoYxdIl+xVI4i+aOvb81uDFolvCceMxZQTSWameNRGA696NvzfCa2yYZXNk3Ap9iU45bO8+2XOEWx4RnqESyTWtDu8kVD+MLhikrUrey5/me19SgzLmCoHZXi6sJ3ruriuaTYmZvCj4SXKZ6E+G5IZI3lCSXi6EkX9VGU90Yrck4AHOBnXo9D4w8bcNV4MoT0BCXv+xGIY2d6ja6YnAoCYX2clOAiqYWkcCJs92vbltS8eUOUaaEQSBw8j4M0XVQg1yheQcvDUR24FzY2r8zYYaHD3a1nUkbxXn1XXckq74xU4ceptIodt65ZkJufa/ZXoH+36Ihfw03SUlXgbkz3vwUpz6SGs8AaYvLLil7vE+rDQR1kMEFG+J7hu40yxM4zfvO2YbTXQJ/S1HImRpKpSoeabScZy1AM3oW+ZdUqY607CUmd2bRX4lrvcv8WdbFIj8CaR2cKoPnjYtvrU7JxiQ193dfUq+BCULEWhgCqFzjrL9tD8bk0djXZvKBYdP/C9/0B7KPReCq1INfUX63hikbiFk5CCqT05UH0uF5phdPQsGwDKxSmdxDlnfh36kbRU5Ow6ICP/U2ug62iHN0JE15sfwDrg0gjTms7JkyVopZTapgOb0Vr+eKg23GG4gOz6nEUnrF+uaslebvhjMoJkkz8O//DroPENw4bnk6n7x8ZSPWRpoO03h2lTeSLX/kfyefbcjUNDXmn56NQ+ou9EiKUeZrv6HwU1XjANE629ARMo1w7UMLZQa3YSNbuFLIg95bOmiRN8fabS4sKRDVNp+aLetqPfxMLBG7dbhVLh4QsGtpybQ/qf/TCxf91YIh7oOYtF6zdIMLgNer7JgqUavewbhWcTT/iqDvudETPa854+TDyZD0li0HLlvwV/q7W/FR+tCu5Kae0o2woCImntXlNc/bn1KhD7MfeRBKYiRtcMa+XlvuPVbvz3M4tbmElcDxQ6ZJDUZyDdTAWbocyygq+Y8WAT8+W5niGz/zGk2ZUq5nUmb6mxiHTDW9jQNnZfJuxh6jWLRKCA8RwuWQOkwpYJRyiTGU0PWjUHO28fgP0ntNGpKimZjZfNR6I2GmMjvBoQ/wHxtLS4eKxibdcKJb/gfwUWG2qmYSFfT0C88VnvFgLm3+Ohkbi4jDjM1/KETvNmjKZPGWKK8rcyuyA+sXCc5NotbtmxpBVXpqVqLoP8c2z+0U7GjhClPiCEvW/ts++sZSxIvWxe8A+p/PFzvEMJetYAVd3HV6zmUbttk7PgBOVJhfMe+UkkG+4nyNDnyw/iVuWQykGyxKniFPeqEd/1SKuBKAwRrBPzxbsbER5SezQygRVbCOD8TW4Jm6YDOcNTR6I4vNlI+iL4s9RPD6drYE+a6qUzkd1IhboJv/SUuL698I1nFq9fY4m44SO6vudjA8gPZ6ofrPxuo+wTXYu+9LenmPsSmitSyTaGM+Ty5+6VpKFJX/RnAUdQHpYufBND/Lj5iUH1SvlM6/v6BoiYfxZW7hJJ5lAdh2b0sSWjGon9fMmQPrTCkFj/u7rfNRJaDbHLh3zZy6jLSwAl0Qdy4IlUFIzt2iy9ItScmretjqiG1tZxGFz973NvqOla03Aq6zYcsEmJyNRX0Csp93JvnTDPhY+Yv17gZH2hU0Md82dnk2VFP14+UL/hi3wlrcobvPqzRYvGJH9UINctQQ2T44RNhyt2Pgdx2pjvulWKcKaiK2NNEZpD62RNxCTHJMB9XIJxh9L8N/8kAQrcj1fhUI27Cky4nmhPfh4wmM4L68xEYmQhUhOVKHyRlT5dN3FE5u9wzZWixRayNz/8ohUNs9ThnEpcQy1GaWWnIwPDE8D3ltXyT1g+7njaUGaJE7BI/3xeMyRK5qaOG0ykPPed1LyA5lMRfBAUggRCY3DuGqTHske9XLd7Hv3jzb4h6jRjdPLFkXNwLxkF7+Ay3kCQg2q2c/6BGRjfmOfiaX+UhF0ZGs3Zl2HoUpaxP5I9eXdhV/xCXNVGTyEEix9T2dt4YeH49vnWdsueUa8Uax3BZ/YRnrmrb70LQCGaYelK69jCagOlpOo7T4alZRFNC56RIUWaEFxnODphYfTFNqJfKRjbstIuCc+8RIsEMRoyY/FYY356AghKNGG8aAgeFE4XUmvCzQY2b0jZ3Ou6Esx39b/MAfeb/daLyEayQ2d2YFGje5CGy7zh+ruRKQuIdXO22AEF1uGm5o88SULJ7wMZ7tJgMKQvPYr/v+qvLDP3MfP7EtmuRipepkju42vcc+KFOolw5RUzJRq3joND8oD0Jh6je/xDH4zF+TlUmLUC8nlwrcsAHyexzakOZbgJNg4/Jt54sSBKeJrgOIJiYL3XYxW/Y9Tuq4vpANThR0znVSDC8ykoLCHENzRMrVUefNeivR9W4WLDAOlLwwbF5i7kclQ5HJ2t4GGfNlRYR3vnFjVyWEk6EwA1oHeU2mIwgrOXkvSkbA0w1HqxtzYxfrOrkcKtAzjb2DL4MJNHSDlJhX0jsNnJYVm7Sp4wZtPY+CSQuhaCzqtFXVvrkI2GL6x+cV4QhbIQoSYGFa7t2tpFiGd/T6pMZxB2SG3gpjA/Y35mICpzzt/va4soZq4ispcRcQuuen7M4Zd20jdrEN3tMZmo90XLc35k6U2wUikjsUEzgbSEPsernrU2IHS0I/WbikNnMjrPrugrOvKy0PJqYyf9Jg+5ols3YqGgN/UusdaPgyGGMWYbAUe7hrtxnlpau5jviLYBusKMqitUh5y3zDES1M8wxZ1wiXnjhgXs4Fg7VUMZSpbpuv5vU+iqUvRj3HXTWrynKt/UjEvDMvU+bhJ7XfgTGcQozlb3iC2R8VHzkxNcDDrVfSCmCS4l2+alOjU6SKN2gMQkoVw6MzWyyyRqq9nnnVVa2cWff7x3fe5d1DLSQgjocz7Q/2chna48EJftRESDP4xV+ll/9VrzCX7/LIkBTN2S8kDn/0O0zKCkGGgvJxUROeCbO2tTK+Ajz3rUpaO8DYzh74NFnlLfQm9LA7geKistSSw137H5ipEVP+1wSw6TZfTNR1yU5WkaLrMxvCjTTqatEqzsmTfcOdhUO/UB0q7x7oKL7wRp8b48Pr5aMujqQBcFiIEirwZN5Nn3yhlJbgfCx+L7NA19R0PVcvsQOz1IwQKXKWExkSws0XkMHlc7rhRj0cHiSS9boQMP+ws5UzoO2I7kLJZbKu0CEE9S6URjtCHtSXIUUFpw7ZUAIiKXOM3+VyqT6vKsl3X3JW5pjB7j7neJFAy3Or9gRSgsOUx3Ju0Sf7hKMJwvfN7ZDRQCSkeKQWZx4yXi567A/ri9KrAyPf9nKC90r/5obhsadxqyjHd3OGQtGZSqluFlKSUdT4ile9iG1Yz3dR0jMxi4xvlrqDEqTzgXEwx51e4haea1ARTaoaDghZrj8tX0EjPnHcWSH33ZekpYl5SMOzvgZQ2D6b3DPlH/TCre0MfMJ/wYvxrz3ZtCZ94sel+bKkg0OayGn3qbhD04mV0+GiFRJsmu9MPtZsoEgM8kOxzQSTs4akAKcRIJPOEdjEVAB6jDy/NUVKoJaAJKVu/4wZyY075h3av/aqUeAGSujVDy8UXfaPpPdEeYa1z66kAnHLun1d9MoaS3FBSQsEvDejRk9i0WHh8KmqVIL9JiSP78ztn9734J2OLFiFd81rfjHU4+bFkf9BjYMBrFDxDLPEjB5dPof4coqsiwt0o7RrqbImW+H+iTvc/UpByGONomROikrRCQlr6QHJCm4vhLz1Y47g8pejhbPIznC5JOeemiNUgZ9/zD5iaJk2W6X7WzK0HaBURZtCAaNJFbT+Bxx9BLpQl1gtH02roZGFhhbutVuSY1TEg/UbgXfRvOFEZN04+gx0vOqz325Qjf2PiDoBe3n9VlWe4rMkIVGx1IVSCM9WoorJZi9Zsn2Wg2nL+8Uf2llNsyAAWoWd6yC/PzL4n6kyoax+4frBhdtpJAWu1dzkFserwoUohPv4HR9fRlfXTcO8zXchlZFmcEtyW2ewDRAO+pKY3ePJneZXlMx7Qhyz0JJYxYqOOGSTJxav6kUGgG2ldljXOjMYLTZDPRxdtHO2TPgGyLEe+8RrRKmwaL8DBm2BURaKdpYGbXufVpZgi0g9R5q4/1Rgs/N3ZDtfnQ/BDPKREZyfj54Ni4QzFC2yZp/aTGhffN3dJN9669XgTU51c2C46PkEp6uS5o3392gFb0KODZlndho/wggTcuNBRjP30n+ZRCtXFdHMpUghhaj761HML+KxyqblqMsSioHyDCeR6aKvwH71jvL/mOaobIDBwts+RMt19LV3AJbAt2TOOodSu90fCrT4Yc8JHzRQgtUTbgjs+YY5EsFe5pw6MFopZbwxKhZCY5dwxjGMI3EJ0ShQ+ff/CpAKlQv6B362AR/V+2nMRP/p+PMWik9s9Z85USb+ZtbiW8lFgnL+O1pjOrtJ6tm1Qj+mVUY/O2J8MbqjpIDl/h+70o57/KSHy4tW8fPWjCzhLrPdxQgl7tavGPc+nTXHvWducE7wDnnRxtBJnoFNwsHH1rUHHcOYZO/yJjPJuj8d+4RzkbsveMmb1hd/d6Sxw53TxVZRbrafU8qBaf8CANzuNev3xkTtEIxHkr+q8foQ8knrqBYCAy/6Y54nfb6JrUJoNvAkJHYw4R8dI6J8fcnQ2gtgAcnZDjuc10Ii1dZRf+yIxjdHGafObFAfSHla3y91ukuBzgE/xObB5pEy2zekyuMIKlx/E3vC9aRJq02tZlSLx+SzvxR85mhMJf3pWRoNwSIwYtcjY83wV25QXi1r7TypBpA/Ot87N8kaWlaM6gmvFqXpPc9XLNdqIPhdG9Q0mjcyFpem2H557z+ihWkyK98/Fu6BjCkMgY7n0cxkS4ckJErf3V46vPxJDxBccevHzGbEunrRqLVhrR80E08DNCxAzXBuEtB6pRNzM0nFPBzeWrL3qNSV5XaFw8BQUMsJZQEVzzfPr9gg0ZVhu9W/UAbQ5NF5ffeEGx+LiseP+xJB7ZznR2zO5LJ0u4TXia+zD+XaYxD4wjIDqQ9GrUGrXoF/V3ASmhn+2g/x1r57nz/oZ7j/AAXRXrDjoOozEtocsRYqfPdt0PDHq7ndYWSGKfaDQsc1BRug3/AyxVeB0GGEpGdhqBF/cI4g0jGK676r/535uoxbxp1j7Jqz0BVie7gQZ8zH8PXvDrJ+1IgFN0OK2BEhE4XjtgwRkFliVRHug1N9779nCZJDWd2VRMYu1vrUdAUGT6KL0bNA/R6p/dfo63Rx2jyxIWVhE9PFy5lHJwD4NzsVBFJcUJIFEKWEtAfIf+cOHLMkEBez24YbH5KDTlluTofpGwVt3TxJmPvHL8mru79OF596CuJ9rbOcAkpR6vfymeA0ZiwLdyLRT2CBo7gVaLGgczssnBX14OvLO39Fg4am6lTClcrJaJSQSo421QDs1MKUE1f6G+7988qufCkLr9nfpVEbH7OgYcic67esJ46FYOUe/lrLd2izqrmeI9XMCcPCmYGaGWvr+SwiqP4LB2/40dEAeH4rtygVxpKW2yHtcnAxaHR7Pgg7dSSjdW4TW/qd5bKafOLbuJsio1v2LLZMe14ara8xLWpQuf+e/rdD1PN8eVPCezgvk5ECBkREpIEA1+JDcn2YHY6X23LEylYbZAXftweRN7FEwiZ4mPsehsLxGdcm0BB/GdNbG/321P4fUZZF7C75bTWLqGz0fwD9C+ZwrNUZKeHyJBeiaG6KuxOPWTKISfIbi7aGoeNbhmpaMQLTdQJ9XU2NrlkGIdNeH59f7PRykjhhRGZLVJS/6MwQDMMzzIjHiZyXZ5J72qcJpz6zCDSPt01hJbc7yeBLtK63Zdx+5vFdyYH/ljkD1NQzqF3w8s9/5WXWtnPVCc79bHwP1ZKTAgBkk3PvQA5f/kyMXfx+48Kk29SlOD7zzU3JiM+ygwS/1+PanTWbqE9mb248itqAm/nbDMN2D2G87oYBoyc6ngbBmbE2TZOtU+zHbk+9Cdkk7ovThH7tK/kVWzoex2UCZxGF2LRLUdpi6MrUCwy74GWg4JxeBohFvfenCQTJbnQ89Pven1Nbf2TzLzkCd9QEuXNgY8QNkYfUdbVFLHn6pIiHaOOdqS5a38LBkiVbMNbVlqOeFdxL/azxpreGVJlOfNnAVwHqQ0PKlNVaHWNoPMa4cLStMsbEafIpwhsx5aZ8M3Su4Ay+vww9h5rqgmHG1crc+6h49xL5jQBtkCNqEz20oMEBSB/lLNFt5CSUwtVKfdyn2Wf7sz9ICql3IZcLTwfCMCHhAd9zu0Z7IxXcpOvrGDHPcHcbGe+f16B9oNdCDPWm7+uW42o9CcK0IRAos6ZtAgmBtDzRDP4ruY61wW6n6qrsVFwcfL/JfQIXmS33goszc2N4vLRstXee1lSYluyr9aIEZ/glJVu+lWsEwN3icPD+gl2OcifFmEufMniCcp5WO28V7ZwvzN34+n6Shq4ZnUaruodLu2hmJZ/DuTjbKNLDBUj9Nfj0qJY6mf6hByOOoxEWth4aVOAeiTnYPj8Vs3dsEkQoaeaFUTDWbZ1vHP3uUbVGfmFvVzS65SrvyZhCLCNhPa9v5EXSgBjFbnYQg837Srf220SkozWUHGMwDGgPOPBy/6+qKH54akxVcS8IAsgE+Grqu040iBS9937+r9k2n4KurKvd8YgSExvj5BDj7+PjwIU+IDCpHG8h8BjUfWdLuJx8qCuA2MS3NP+qhW6BUc5tAX3Om70g7ElBsRtPDO1KS2TInnBqoSaJ/xIwih3N8BVc1RwiM/WsWZ6J2qdpoqSMxg4FE8h3BfAQ4E7PEhtE7d+ubfaNVTZoLcg8ihqDfrAOzpCMGj7w77P70gN/xLK3wqcmgotsyfzOefYTNvcPooTS/O4gitKRftmXdN2wnaL8VD6E1MGKGmi30zx3UwFo1dyZArXv6upma4PkYOuu0EfxkA4+mgzVBfSlvyGYCUU6/FDK71nRymZZphxenYZ2lUSU1bi0zUlIbThV1ygIzbRjjry682qsKyo22/ppAONcq1CRRXSCq50vkKFNxruu//0FbF4lFtkKGz3+kozAZfkg6OMEBrHDXsRhfSvrjIIXTA8k4iclj6HZu/3xAqaN7RiZx4rQxkRc9AdMBoIwFPzEXm8hd1nHzXvhXNMYzsn1Y2o09k5HtwTakK+Zkfndyd6SaDIXEpJDqp3CUVuKoPDlbWLWQPJq386B1iKBP0CYQ/+MYaJhZunj0wySQaoZ1gNX10kccLHKcr+SQebKRV2X9kzrAvUIL3B6IGxDcabFxV3LnMKp4pkOsotq79oWjqcwd9/XmWABciqdIT2RJP39EkPrHA8tPoNhkPw5m0KtvLfzqoz8Bgt5Wt2vRj0xSUrEjpif9GPmoC8k+YpaRlEor/4I8l8kGWkYa78QnESRX20eDOn6x2NmylAFQ4KODBkumdnR3DBlV9yFuSq1ceWn0HlQcTGRHcR4DzVyBRDtSJOj28wEIrAK5BK7AG+4auYzByeybs+vTYwzwwRT/pLfo6QU2pJAU0Lj2xB/ufrTYUW9YN4lu+saK8n21LIvaCuPQSzwLo0pPflV4WMO5+0oAyKWm80CGSr2SVxLsiYJ6mNTJAuA28EOCItbTCOoCiiCa/r/AtW9C0e/OkK4pndbuHkqTojSAwyE2S04K2n7SZWTW0Jrh1bVpmOyyfwJ3A4XkK55g8jk67mJ70pHmMrrp36QciVZwQ9UCrzZnPLYVwI0/gGZ6YN+RJ6LsjyVH52VZ9ZOd7vc0la9+K3uSSXpOf2aSCssGustoNV3HYAywe3iWWAUh2MSgybZ7XEaElm/2xaL8sqtjIXtO/JodW7M6AtgwQFLtU3+7x3Y1yv48Q3R+A7RYWEPyAxuMzgZJ2ZBtIibILOsRrDXoW+8Ka9+dEio6Q=\"}";

const opsScript = `
(function () {
  var gate = document.getElementById("ops-gate");
  var pw = document.getElementById("ops-pw");
  var btn = document.getElementById("ops-unlock");
  var msg = document.getElementById("ops-msg");
  var target = document.getElementById("ops-content");
  var node = document.getElementById("ops-cipher");
  if (!gate || !pw || !btn || !node || !target) return;
  var cfg = JSON.parse(node.textContent);
  function b64(s) { return Uint8Array.from(atob(s), function (c) { return c.charCodeAt(0); }); }
  async function unlock() {
    msg.textContent = "확인 중…";
    try {
      var enc = new TextEncoder();
      var keyMat = await crypto.subtle.importKey("raw", enc.encode(pw.value), "PBKDF2", false, ["deriveKey"]);
      var key = await crypto.subtle.deriveKey(
        { name: "PBKDF2", salt: b64(cfg.salt), iterations: cfg.iter, hash: "SHA-256" },
        keyMat, { name: "AES-GCM", length: 256 }, false, ["decrypt"]);
      var plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv: b64(cfg.iv) }, key, b64(cfg.data));
      target.innerHTML = new TextDecoder().decode(plain);
      gate.style.display = "none";
      msg.textContent = "";
      if (location.hash === "#ops") target.scrollIntoView();
    } catch (e) {
      msg.textContent = "비밀번호가 올바르지 않습니다.";
    }
  }
  btn.addEventListener("click", unlock);
  pw.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); unlock(); } });
})();
`;

const pageData = {
  metadata: {
    title: "문막-흙으로 잇다 — 울림통 · 니닉크라프트",
    description:
      "2026년 9월, 동화마을수목원에서 흙으로 울림통을 함께 짓는 지역주민 협력창작 체험 워크숍",
  },
  styles: [styles],
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@300;400;500;600&family=Noto+Sans+KR:wght@300;400;500;700&display=swap",
  ],
  body,
  scripts: [
    { attributes: {}, content: script },
    { attributes: { type: "application/json", id: "ops-cipher" }, content: opsCipher },
    { attributes: {}, content: opsScript },
  ],
};

export default pageData;
