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

  h2.section-title {
    font-size: clamp(26px, 4vw, 44px);
    font-weight: 700;
    color: var(--text);
    margin-bottom: 36px;
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
  .cover-divider { height: 26px; }
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

  .ops-doc { max-width: 980px; }
  .ops-intro { font-size: 14px; color: var(--text-dim); line-height: 1.9; margin-bottom: 36px; }
  .ops-block { margin-bottom: 46px; }
  .ops-h3 {
    font-family: 'IBM Plex Sans KR', sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: var(--accent2);
    margin-bottom: 14px;
  }
  .ops-h3 .n { font-size: 12px; color: var(--text-dim); font-weight: 500; margin-left: 6px; }
  .ops-note { font-size: 13px; color: var(--text-dim); line-height: 1.85; margin-top: 12px; }
  .ops-note strong { color: var(--accent2); }
  .ops-ref {
    font-size: 13.5px; color: var(--text-dim); line-height: 1.9;
    background: var(--bg2); border-radius: 3px; padding: 14px 18px;
  }
  .ops-ref strong { color: var(--accent2); }

  /* 근무시간 타임라인 */
  .day-strip { margin-bottom: 16px; }
  .day-strip-head {
    display: flex; justify-content: space-between;
    font-size: 12.5px; color: var(--text-dim); margin-bottom: 5px;
  }
  .day-strip-head b { color: var(--text); font-weight: 600; }
  .day-bar {
    display: flex; height: 32px; border-radius: 3px; overflow: hidden;
    border: 1px solid var(--line); font-size: 11px;
  }
  .day-seg {
    display: flex; align-items: center; justify-content: center;
    text-align: center; line-height: 1.2; padding: 0 4px;
    border-right: 1px solid var(--line); min-width: 0;
  }
  .day-seg:last-child { border-right: none; }
  .day-seg.prep { background: var(--bg3); color: var(--text-dim); }
  .day-seg.event { background: rgba(226, 87, 30, 0.15); color: var(--accent2); font-weight: 600; }
  .day-axis {
    display: flex; justify-content: space-between;
    font-size: 10.5px; color: var(--text-dim); margin-top: 3px;
    font-variant-numeric: tabular-nums;
  }

  /* 스윔레인 */
  .lane-wrap { overflow-x: auto; }
  table.lane { width: 100%; border-collapse: collapse; font-size: 12.5px; min-width: 660px; }
  table.lane th, table.lane td {
    border: 1px solid var(--line); padding: 8px 10px;
    vertical-align: top; line-height: 1.55; text-align: left;
  }
  table.lane thead th {
    background: var(--bg3); font-family: 'IBM Plex Sans KR', sans-serif;
    font-size: 11.5px; color: var(--accent2); font-weight: 600; white-space: nowrap;
  }
  table.lane thead th small { display: block; font-weight: 400; font-size: 10px; color: var(--text-dim); }
  table.lane tbody th {
    background: var(--bg2); font-family: 'IBM Plex Sans KR', sans-serif;
    font-weight: 700; color: var(--text); white-space: nowrap; width: 96px;
  }
  table.lane tbody th small { display: block; font-weight: 400; font-size: 10px; color: var(--text-dim); }
  table.lane td.peak { background: rgba(226, 87, 30, 0.10); }

  /* 배치도 */
  .ops-map { display: block; width: 100%; max-width: 460px; height: auto; margin: 4px 0 14px; }
  .map-legend { font-size: 12.5px; color: var(--text-dim); line-height: 1.95; }
  .map-legend b { color: var(--accent2); }

  /* 역할 카드 */
  .role-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
  .role-card {
    background: var(--bg2); border: 1px solid var(--line);
    border-radius: 4px; padding: 15px 15px 13px;
  }
  .role-card h4 {
    font-family: 'IBM Plex Sans KR', sans-serif;
    font-size: 13px; font-weight: 700; color: var(--accent2); margin-bottom: 2px;
  }
  .role-card .where { font-size: 11px; color: var(--text-dim); margin-bottom: 9px; }
  .role-card ul { list-style: none; margin: 0; }
  .role-card li {
    position: relative; padding: 3px 0 3px 12px;
    font-size: 12px; line-height: 1.6;
  }
  .role-card li::before { content: '·'; position: absolute; left: 2px; color: var(--accent); }

  /* 응대 플로우 */
  .flow { display: flex; flex-wrap: wrap; align-items: stretch; gap: 8px; font-size: 12.5px; }
  .flow-node {
    background: var(--bg2); border: 1px solid var(--line); border-radius: 4px;
    padding: 10px 12px; line-height: 1.5; max-width: 210px;
  }
  .flow-node.q { background: var(--bg3); font-weight: 600; }
  .flow-node b { color: var(--accent2); }
  .flow-arrow { align-self: center; color: var(--text-dim); font-size: 14px; }
  .flow-branch { display: flex; flex-direction: column; gap: 8px; }
  .flow-branch .tag { font-size: 10.5px; color: var(--text-dim); display: block; margin-bottom: 2px; }

  /* 운영 OT로 편입된 배치 & 혼잡도 */
  #ops-venue { max-width: 980px; margin: 46px 0; }
  #ops-venue .venue-heading {
    font-family: 'IBM Plex Sans KR', sans-serif;
    font-size: 15px; font-weight: 700; color: var(--accent2); margin-bottom: 12px;
  }

  /* 체크리스트 */
  .ops-check { list-style: none; margin: 8px 0; columns: 2; column-gap: 28px; }
  .ops-check li {
    break-inside: avoid; padding: 4px 0 4px 22px; position: relative;
    font-size: 13px; line-height: 1.7;
  }
  .ops-check li::before {
    content: ''; position: absolute; left: 2px; top: 8px;
    width: 12px; height: 12px; border: 1.5px solid var(--line); border-radius: 2px;
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
    .role-cards { grid-template-columns: 1fr; }
    .ops-check { columns: 1; }
    .flow { flex-direction: column; align-items: stretch; }
    .flow-node { max-width: none; }
    .flow-arrow { transform: rotate(90deg); align-self: center; }
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
</section>

<!-- ── 운영 OT (운영진 전용) ── -->
<section id="ops" style="border-bottom:none;">
  <h2 class="section-title">현장 운영 OT</h2>
  <div class="ops-lock" id="ops-gate">
    <p class="ops-lock-text">운영진(작가·보조)만 보는 현장 운영 안내입니다. 비밀번호를 넣어 주세요.</p>
    <input type="password" id="ops-pw" inputmode="numeric" autocomplete="off" placeholder="비밀번호" aria-label="비밀번호">
    <button type="button" id="ops-unlock">열기</button>
    <span class="ops-lock-msg" id="ops-msg"></span>
  </div>
  <div id="ops-content"></div>

  <!-- 현장 배치 &amp; 혼잡도 — 잠금 해제 시 위 '현장 배치 · 동선' 블록 뒤로 이동한다 -->
  <div class="venue-section" id="ops-venue" style="display:none;">
    <p class="venue-heading">동시 정원 &amp; 혼잡도</p>

    <div class="venue-grid">
    <svg class="venue-diagram" viewBox="0 0 440 434" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="울림통 둘레 최대 6명, 돗자리 두 장에 각 8명, 보조 테이블 배치도">
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
  var PACKED = "W3siaWQiOiJyMSIsIm5hbWUiOiLsnbTsp4TtnawiLCJwaG9uZSI6IjAxMC05MzE4LTA5OTEiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMzowMCIsInRvdGFsIjozLCJhZHVsdHMiOjIsImtpZHMiOjEsIm5vdGUiOiIifSx7ImlkIjoicjIiLCJuYW1lIjoi7ZeI7Z2s6rK9IiwicGhvbmUiOiIwMTAtOTkwNy02MDcyIiwiZGF0ZSI6IjIwMjYtMDktMTkiLCJ0aW1lIjoiMTQ6MDAiLCJ0b3RhbCI6bnVsbCwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InIzIiwibmFtZSI6IuydtOuPme2drCIsInBob25lIjoiMDEwLTg4NTctODM0OSIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjEwOjAwIiwidG90YWwiOjYsImFkdWx0cyI6NCwia2lkcyI6Miwibm90ZSI6IiJ9LHsiaWQiOiJyNCIsIm5hbWUiOiLsl4Ttg5zrprwiLCJwaG9uZSI6IjAxMC05MDU3LTc5MTgiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMzowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjUiLCJuYW1lIjoi67CV7JWE66aEIiwicGhvbmUiOiIwMTAtNDg1MS00NTUwIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTA6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjoyLCJraWRzIjoyLCJub3RlIjoiIn0seyJpZCI6InI2IiwibmFtZSI6Iuq5gOyEoOyYgSIsInBob25lIjoiMDEwLTQyMTAtNjU4OCIsImRhdGUiOiIyMDI2LTA5LTA1IiwidGltZSI6IjEzOjAwIiwidG90YWwiOjMsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyNyIsIm5hbWUiOiLrgpjsmIHsi6QiLCJwaG9uZSI6IjAxMC0zMDAyLTY1NDMiLCJkYXRlIjoiMjAyNi0wOS0xMiIsInRpbWUiOiIxMDozMCIsInRvdGFsIjozLCJhZHVsdHMiOjIsImtpZHMiOjEsIm5vdGUiOiIifSx7ImlkIjoicjgiLCJuYW1lIjoi6rCV66+87KeAIiwicGhvbmUiOiIwMTAtNzE4OC00OTYzIiwiZGF0ZSI6IjIwMjYtMDktMTkiLCJ0aW1lIjoiUE0iLCJ0b3RhbCI6NCwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InI5IiwibmFtZSI6IuydtOydgOyjvCIsInBob25lIjoiMDEwLTMzMzYtMzQ2NSIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IkFNIiwidG90YWwiOjMsImFkdWx0cyI6Miwia2lkcyI6MSwibm90ZSI6Iuy0iDIg64Ko7JWEICsg67aA66qoIn0seyJpZCI6InIxMCIsIm5hbWUiOiLsnbTrr7zsiJkiLCJwaG9uZSI6IjAxMC00MTQ1LTA5OTAiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxNTowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjExIiwibmFtZSI6IuydtOyDgeyVhCIsInBob25lIjoiMDEwLTMzOTUtNTY2OCIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjEwOjAwIiwidG90YWwiOjQsImFkdWx0cyI6Miwia2lkcyI6Miwibm90ZSI6IiJ9LHsiaWQiOiJyMTIiLCJuYW1lIjoi7Jyg7KeA7ZicIiwicGhvbmUiOiIwMTAtNDYyNy04NTE2IiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTE6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjoyLCJraWRzIjoyLCJub3RlIjoi7JWE64+ZIDjshLgsIDbshLgifSx7ImlkIjoicjEzIiwibmFtZSI6Iu2ZjeyngOydgCIsInBob25lIjoiMDEwLTY0ODktMzIyMiIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjEzOjAwIiwidG90YWwiOjMsImFkdWx0cyI6MSwia2lkcyI6Miwibm90ZSI6IjEzOjAwfjE1OjMwIn0seyJpZCI6InIxNCIsIm5hbWUiOiLtmY3sp4DsnYAiLCJwaG9uZSI6IjAxMC02NDg5LTMyMjIiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMzowMCIsInRvdGFsIjozLCJhZHVsdHMiOjEsImtpZHMiOjIsIm5vdGUiOiIxMzowMH4xNTozMCJ9LHsiaWQiOiJyMTUiLCJuYW1lIjoi7LWc7Jew7Z2sIiwicGhvbmUiOiIwMTAtNjM4OC0wMDA3IiwiZGF0ZSI6IjIwMjYtMDktMTIiLCJ0aW1lIjoiMTI6MDAiLCJ0b3RhbCI6NSwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InIxNiIsIm5hbWUiOiLquYDsoJXrr7giLCJwaG9uZSI6IjAxMC03MTA1LTE1NzAiLCJkYXRlIjoiMjAyNi0wOS0xMiIsInRpbWUiOiIxMTowMCIsInRvdGFsIjoyLCJhZHVsdHMiOjAsImtpZHMiOjIsIm5vdGUiOiLstIgyIOyXrOyVhCJ9LHsiaWQiOiJyMTciLCJuYW1lIjoi7Jyg66+464KYIiwicGhvbmUiOiIwMTAtNjYxMS00ODgzIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTM6MDAiLCJ0b3RhbCI6NSwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiMTM6MDAg7KCE7ZuEIn0seyJpZCI6InIxOCIsIm5hbWUiOiLrsJXsnKDrprwiLCJwaG9uZSI6IjAxMC0yNDcyLTY3NjMiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxNDowMCIsInRvdGFsIjo3LCJhZHVsdHMiOjIsImtpZHMiOjUsIm5vdGUiOiIifSx7ImlkIjoicjE5IiwibmFtZSI6Iuq5gOycpOyglSIsInBob25lIjoiMDEwLTMzMjMtMTE3NSIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjE0OjAwIiwidG90YWwiOjQsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyMjAiLCJuYW1lIjoi67Cw66+47KeEIiwicGhvbmUiOiIwMTAtNDgwOS0xNDg5IiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTI6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjoyLCJraWRzIjoyLCJub3RlIjoiIn0seyJpZCI6InIyMSIsIm5hbWUiOiLrsJXtmJzsp4QiLCJwaG9uZSI6IjAxMC00MTI2LTQzMjEiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxMTowMCIsInRvdGFsIjozLCJhZHVsdHMiOjEsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjIzIiwibmFtZSI6IuydtOqyqOugiCIsInBob25lIjoiMDEwLTk0ODYtNTEyMCIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjEyOjMwIiwidG90YWwiOjQsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyMjQiLCJuYW1lIjoi6rmA7IS47KCVIiwicGhvbmUiOiIwMTAtOTAxNS00OTExIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTA6MDAiLCJ0b3RhbCI6MywiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InIyNSIsIm5hbWUiOiLquYDsnYDsmIEiLCJwaG9uZSI6IjAxMC00NTQzLTc5OTIiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxMDowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjI2IiwibmFtZSI6Iuq5gOuLpOyYiCIsInBob25lIjoiMDEwLTU2NjUtNjUwNyIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjE1OjAwIiwidG90YWwiOjYsImFkdWx0cyI6Mywia2lkcyI6Mywibm90ZSI6IjTshLggMeuqhSDCtyA27IS4IDLrqoUifSx7ImlkIjoicjI3IiwibmFtZSI6IuycoOyXsOyngCIsInBob25lIjoiMDEwLTQ5MjgtNTQyNiIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjEwOjAwIiwidG90YWwiOjMsImFkdWx0cyI6MSwia2lkcyI6Miwibm90ZSI6IiJ9LHsiaWQiOiJyMjgiLCJuYW1lIjoi6rmA7IiY7KCVIiwicGhvbmUiOiIwMTAtOTE1OS0wNzg5IiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTM6MDAiLCJ0b3RhbCI6NiwiYWR1bHRzIjoyLCJraWRzIjo0LCJub3RlIjoiIn0seyJpZCI6InIyOSIsIm5hbWUiOiLsnbTslYTrpoQiLCJwaG9uZSI6IjAxMC0yNDY3LTA0MzIiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxNDowMCIsInRvdGFsIjoyLCJhZHVsdHMiOm51bGwsImtpZHMiOm51bGwsIm5vdGUiOiIifSx7ImlkIjoicjMwIiwibmFtZSI6Iuq5gOuvuOyglSIsInBob25lIjoiMDEwLTQ0MDUtNDU0MiIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjExOjAwIiwidG90YWwiOjQsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyMzEiLCJuYW1lIjoi64W47KeA7ISgIiwicGhvbmUiOiIwMTAtNTUxMi04NjI4IiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTA6MDAiLCJ0b3RhbCI6MywiYWR1bHRzIjoyLCJraWRzIjoxLCJub3RlIjoiIn0seyJpZCI6InIzMiIsIm5hbWUiOiLquYDtmITrr7giLCJwaG9uZSI6IjAxMC05MTk1LTE2NzEiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMDowMCIsInRvdGFsIjozLCJhZHVsdHMiOjIsImtpZHMiOjEsIm5vdGUiOiLslYTsnbQgOOyEuCJ9LHsiaWQiOiJyMzQiLCJuYW1lIjoi7LWc64+Z6recIiwicGhvbmUiOiIwMTAtOTQwMS04NzgzIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTE6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InIzNSIsIm5hbWUiOiLqsJXsnYDsmKUiLCJwaG9uZSI6IjAxMC02NDcyLTA5OTYiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxMTowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiLstIgzLCA17IS4In0seyJpZCI6InIzNiIsIm5hbWUiOiLsnKTtg5zsmIEiLCJwaG9uZSI6IjAxMC01MDU1LTI3NzgiLCJkYXRlIjoiMjAyNi0wOS0xMiIsInRpbWUiOiIxNDowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjM3IiwibmFtZSI6IuydtOuvuOyInCIsInBob25lIjoiMDEwLTkyNDMtMDUxNyIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjE0OjAwIiwidG90YWwiOjIsImFkdWx0cyI6MSwia2lkcyI6MSwibm90ZSI6IiJ9LHsiaWQiOiJyMzgiLCJuYW1lIjoi7J2066qF7ZmUIiwicGhvbmUiOiIwMTAtNzEyOC0xNTI5IiwiZGF0ZSI6IjIwMjYtMDktMTIiLCJ0aW1lIjoiMTE6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjoyLCJraWRzIjoyLCJub3RlIjoiIn0seyJpZCI6InIzOSIsIm5hbWUiOiLsm5DsmIjsp4QiLCJwaG9uZSI6IjAxMC03MTk2LTk2NjkiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxNDowMCIsInRvdGFsIjoyLCJhZHVsdHMiOjEsImtpZHMiOjEsIm5vdGUiOiLsi6DshozsnKgg64+Z67CYIn0seyJpZCI6InI0MCIsIm5hbWUiOiLquYDqsJXsnbwiLCJwaG9uZSI6IjAxMC0yOTI1LTk3NzEiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxNDowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjQxIiwibmFtZSI6IuyepeuvvOqyvSIsInBob25lIjoiMDEwLTI5NjktMzQ5OSIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjEzOjAwIiwidG90YWwiOjIsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyNDIiLCJuYW1lIjoi7J206rK97Ja4IiwicGhvbmUiOiIwMTAtNDQ5Mi05NTY5IiwiZGF0ZSI6IjIwMjYtMDktMTkiLCJ0aW1lIjoiMTI6MDAiLCJ0b3RhbCI6MywiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiMTLsi5zsr6QifSx7ImlkIjoicjQzIiwibmFtZSI6IuuwleycqCIsInBob25lIjoiMDEwLTIwMTQtOTk5NyIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjE0OjAwIiwidG90YWwiOjQsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyNDQiLCJuYW1lIjoi7KeE64uk7ZicIiwicGhvbmUiOiIwMTAtOTgzNi0wNTExIiwiZGF0ZSI6IjIwMjYtMDktMTIiLCJ0aW1lIjoiMTQ6MDAiLCJ0b3RhbCI6MiwiYWR1bHRzIjoxLCJraWRzIjoxLCJub3RlIjoiIn0seyJpZCI6InI0NSIsIm5hbWUiOiLquYDsnYDso7wiLCJwaG9uZSI6IjAxMC0yMTgxLTQ4MjQiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMTowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjQ2IiwibmFtZSI6Iuq5gO2YhOyglSIsInBob25lIjoiMDEwLTI4NTItMDY1NCIsImRhdGUiOiIyMDI2LTA5LTA1IiwidGltZSI6IjEyOjAwIiwidG90YWwiOjIsImFkdWx0cyI6MSwia2lkcyI6MSwibm90ZSI6IuuFuOyVhCJ9LHsiaWQiOiJyNDciLCJuYW1lIjoi7Iug7KCV7JilIiwicGhvbmUiOiIwMTAtNDA5OC0wMDUzIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTI6MDAiLCJ0b3RhbCI6MywiYWR1bHRzIjoyLCJraWRzIjoxLCJub3RlIjoiIn0seyJpZCI6InI0OCIsIm5hbWUiOiLsi6DsoJXsmKUiLCJwaG9uZSI6IjAxMC00MDk4LTAwNTMiLCJkYXRlIjoiMjAyNi0wOS0xMiIsInRpbWUiOiIxMTowMCIsInRvdGFsIjozLCJhZHVsdHMiOjIsImtpZHMiOjEsIm5vdGUiOiIifSx7ImlkIjoicjQ5IiwibmFtZSI6IuyLoOygleyYpSIsInBob25lIjoiMDEwLTQwOTgtMDA1MyIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjExOjAwIiwidG90YWwiOjMsImFkdWx0cyI6Miwia2lkcyI6MSwibm90ZSI6IiJ9LHsiaWQiOiJyNTAiLCJuYW1lIjoi7ZWc7KGw7JWEIiwicGhvbmUiOiIwMTAtNTA1Mi0zODgyIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTI6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjoyLCJraWRzIjoyLCJub3RlIjoiIn1d";

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
const opsCipher = "{\"salt\":\"LIn7rF+uogWxQ7e7D+6uxQ==\",\"iv\":\"vGAug1xjUbcixGDn\",\"iter\":100000,\"data\":\"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\"}";

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
      // 현장 배치 & 혼잡도 블록을 '현장 배치 · 동선' 바로 뒤로 옮겨 붙이고 보이게 한다.
      var venue = document.getElementById("ops-venue");
      if (venue) {
        var anchor = document.getElementById("ops-map-block");
        if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(venue, anchor.nextSibling);
        venue.style.display = "";
      }
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
