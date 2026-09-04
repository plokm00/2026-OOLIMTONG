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
  var PACKED = "W3siaWQiOiJyMSIsIm5hbWUiOiLsnbTsp4TtnawiLCJwaG9uZSI6IjAxMC05MzE4LTA5OTEiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMzowMCIsInRvdGFsIjozLCJhZHVsdHMiOjIsImtpZHMiOjEsIm5vdGUiOiIifSx7ImlkIjoicjIiLCJuYW1lIjoi7ZeI7Z2s6rK9IiwicGhvbmUiOiIwMTAtOTkwNy02MDcyIiwiZGF0ZSI6IjIwMjYtMDktMTkiLCJ0aW1lIjoiMTQ6MDAiLCJ0b3RhbCI6bnVsbCwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InIzIiwibmFtZSI6IuydtOuPme2drCIsInBob25lIjoiMDEwLTg4NTctODM0OSIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjEwOjAwIiwidG90YWwiOjYsImFkdWx0cyI6NCwia2lkcyI6Miwibm90ZSI6IiJ9LHsiaWQiOiJyNCIsIm5hbWUiOiLsl4Ttg5zrprwiLCJwaG9uZSI6IjAxMC05MDU3LTc5MTgiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMzowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjUiLCJuYW1lIjoi67CV7JWE66aEIiwicGhvbmUiOiIwMTAtNDg1MS00NTUwIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTA6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjoyLCJraWRzIjoyLCJub3RlIjoiIn0seyJpZCI6InI2IiwibmFtZSI6Iuq5gOyEoOyYgSIsInBob25lIjoiMDEwLTQyMTAtNjU4OCIsImRhdGUiOiIyMDI2LTA5LTA1IiwidGltZSI6IjEzOjAwIiwidG90YWwiOjMsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyNyIsIm5hbWUiOiLrgpjsmIHsi6QiLCJwaG9uZSI6IjAxMC0zMDAyLTY1NDMiLCJkYXRlIjoiMjAyNi0wOS0xMiIsInRpbWUiOiIxMDozMCIsInRvdGFsIjozLCJhZHVsdHMiOjIsImtpZHMiOjEsIm5vdGUiOiIifSx7ImlkIjoicjgiLCJuYW1lIjoi6rCV66+87KeAIiwicGhvbmUiOiIwMTAtNzE4OC00OTYzIiwiZGF0ZSI6IjIwMjYtMDktMTkiLCJ0aW1lIjoiUE0iLCJ0b3RhbCI6NCwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InI5IiwibmFtZSI6IuydtOydgOyjvCIsInBob25lIjoiMDEwLTMzMzYtMzQ2NSIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IkFNIiwidG90YWwiOjMsImFkdWx0cyI6Miwia2lkcyI6MSwibm90ZSI6Iuy0iDIg64Ko7JWEICsg67aA66qoIn0seyJpZCI6InIxMCIsIm5hbWUiOiLsnbTrr7zsiJkiLCJwaG9uZSI6IjAxMC00MTQ1LTA5OTAiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxNTowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjExIiwibmFtZSI6IuydtOyDgeyVhCIsInBob25lIjoiMDEwLTMzOTUtNTY2OCIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjEwOjAwIiwidG90YWwiOjQsImFkdWx0cyI6Miwia2lkcyI6Miwibm90ZSI6IiJ9LHsiaWQiOiJyMTIiLCJuYW1lIjoi7Jyg7KeA7ZicIiwicGhvbmUiOiIwMTAtNDYyNy04NTE2IiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTE6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjoyLCJraWRzIjoyLCJub3RlIjoi7JWE64+ZIDjshLgsIDbshLgifSx7ImlkIjoicjEzIiwibmFtZSI6Iu2ZjeyngOydgCIsInBob25lIjoiMDEwLTY0ODktMzIyMiIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjEzOjAwIiwidG90YWwiOjMsImFkdWx0cyI6MSwia2lkcyI6Miwibm90ZSI6IjEzOjAwfjE1OjMwIn0seyJpZCI6InIxNCIsIm5hbWUiOiLtmY3sp4DsnYAiLCJwaG9uZSI6IjAxMC02NDg5LTMyMjIiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMzowMCIsInRvdGFsIjozLCJhZHVsdHMiOjEsImtpZHMiOjIsIm5vdGUiOiIxMzowMH4xNTozMCJ9LHsiaWQiOiJyMTUiLCJuYW1lIjoi7LWc7Jew7Z2sIiwicGhvbmUiOiIwMTAtNjM4OC0wMDA3IiwiZGF0ZSI6IjIwMjYtMDktMTIiLCJ0aW1lIjoiMTI6MDAiLCJ0b3RhbCI6NSwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InIxNiIsIm5hbWUiOiLquYDsoJXrr7giLCJwaG9uZSI6IjAxMC03MTA1LTE1NzAiLCJkYXRlIjoiMjAyNi0wOS0xMiIsInRpbWUiOiIxMTowMCIsInRvdGFsIjoyLCJhZHVsdHMiOjAsImtpZHMiOjIsIm5vdGUiOiLstIgyIOyXrOyVhCJ9LHsiaWQiOiJyMTciLCJuYW1lIjoi7Jyg66+464KYIiwicGhvbmUiOiIwMTAtNjYxMS00ODgzIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTM6MDAiLCJ0b3RhbCI6NSwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiMTM6MDAg7KCE7ZuEIn0seyJpZCI6InIxOCIsIm5hbWUiOiLrsJXsnKDrprwiLCJwaG9uZSI6IjAxMC0yNDcyLTY3NjMiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxNDowMCIsInRvdGFsIjo3LCJhZHVsdHMiOjIsImtpZHMiOjUsIm5vdGUiOiIifSx7ImlkIjoicjE5IiwibmFtZSI6Iuq5gOycpOyglSIsInBob25lIjoiMDEwLTMzMjMtMTE3NSIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjE0OjAwIiwidG90YWwiOjQsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyMjAiLCJuYW1lIjoi67Cw66+47KeEIiwicGhvbmUiOiIwMTAtNDgwOS0xNDg5IiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTI6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjoyLCJraWRzIjoyLCJub3RlIjoiIn0seyJpZCI6InIyMSIsIm5hbWUiOiLrsJXtmJzsp4QiLCJwaG9uZSI6IjAxMC00MTI2LTQzMjEiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxMTowMCIsInRvdGFsIjozLCJhZHVsdHMiOjEsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjIzIiwibmFtZSI6IuydtOqyqOugiCIsInBob25lIjoiMDEwLTk0ODYtNTEyMCIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjEyOjMwIiwidG90YWwiOjQsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyMjQiLCJuYW1lIjoi6rmA7IS47KCVIiwicGhvbmUiOiIwMTAtOTAxNS00OTExIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTA6MDAiLCJ0b3RhbCI6MywiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InIyNSIsIm5hbWUiOiLquYDsnYDsmIEiLCJwaG9uZSI6IjAxMC00NTQzLTc5OTIiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxMDowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjI2IiwibmFtZSI6Iuq5gOuLpOyYiCIsInBob25lIjoiMDEwLTU2NjUtNjUwNyIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjE1OjAwIiwidG90YWwiOjYsImFkdWx0cyI6Mywia2lkcyI6Mywibm90ZSI6IjTshLggMeuqhSDCtyA27IS4IDLrqoUifSx7ImlkIjoicjI3IiwibmFtZSI6IuycoOyXsOyngCIsInBob25lIjoiMDEwLTQ5MjgtNTQyNiIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjEwOjAwIiwidG90YWwiOjMsImFkdWx0cyI6MSwia2lkcyI6Miwibm90ZSI6IiJ9LHsiaWQiOiJyMjgiLCJuYW1lIjoi6rmA7IiY7KCVIiwicGhvbmUiOiIwMTAtOTE1OS0wNzg5IiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTM6MDAiLCJ0b3RhbCI6NiwiYWR1bHRzIjoyLCJraWRzIjo0LCJub3RlIjoiIn0seyJpZCI6InIyOSIsIm5hbWUiOiLsnbTslYTrpoQiLCJwaG9uZSI6IjAxMC0yNDY3LTA0MzIiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxNDowMCIsInRvdGFsIjoyLCJhZHVsdHMiOm51bGwsImtpZHMiOm51bGwsIm5vdGUiOiIifSx7ImlkIjoicjMwIiwibmFtZSI6Iuq5gOuvuOyglSIsInBob25lIjoiMDEwLTQ0MDUtNDU0MiIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjExOjAwIiwidG90YWwiOjQsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyMzEiLCJuYW1lIjoi64W47KeA7ISgIiwicGhvbmUiOiIwMTAtNTUxMi04NjI4IiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTA6MDAiLCJ0b3RhbCI6MywiYWR1bHRzIjoyLCJraWRzIjoxLCJub3RlIjoiIn0seyJpZCI6InIzMiIsIm5hbWUiOiLquYDtmITrr7giLCJwaG9uZSI6IjAxMC05MTk1LTE2NzEiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMDowMCIsInRvdGFsIjozLCJhZHVsdHMiOjIsImtpZHMiOjEsIm5vdGUiOiLslYTsnbQgOOyEuCJ9LHsiaWQiOiJyMzQiLCJuYW1lIjoi7LWc64+Z6recIiwicGhvbmUiOiIwMTAtOTQwMS04NzgzIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTE6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InIzNSIsIm5hbWUiOiLqsJXsnYDsmKUiLCJwaG9uZSI6IjAxMC02NDcyLTA5OTYiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxMTowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiLstIgzLCA17IS4In0seyJpZCI6InIzNiIsIm5hbWUiOiLsnKTtg5zsmIEiLCJwaG9uZSI6IjAxMC01MDU1LTI3NzgiLCJkYXRlIjoiMjAyNi0wOS0xMiIsInRpbWUiOiIxNDowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjM3IiwibmFtZSI6IuydtOuvuOyInCIsInBob25lIjoiMDEwLTkyNDMtMDUxNyIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjE0OjAwIiwidG90YWwiOjIsImFkdWx0cyI6MSwia2lkcyI6MSwibm90ZSI6IiJ9LHsiaWQiOiJyMzgiLCJuYW1lIjoi7J2066qF7ZmUIiwicGhvbmUiOiIwMTAtNzEyOC0xNTI5IiwiZGF0ZSI6IjIwMjYtMDktMTIiLCJ0aW1lIjoiMTE6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjoyLCJraWRzIjoyLCJub3RlIjoiIn0seyJpZCI6InIzOSIsIm5hbWUiOiLsm5DsmIjsp4QiLCJwaG9uZSI6IjAxMC03MTk2LTk2NjkiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxNDowMCIsInRvdGFsIjoyLCJhZHVsdHMiOjEsImtpZHMiOjEsIm5vdGUiOiLsi6DshozsnKgg64+Z67CYIn0seyJpZCI6InI0MCIsIm5hbWUiOiLquYDqsJXsnbwiLCJwaG9uZSI6IjAxMC0yOTI1LTk3NzEiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxNDowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjQxIiwibmFtZSI6IuyepeuvvOqyvSIsInBob25lIjoiMDEwLTI5NjktMzQ5OSIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjEzOjAwIiwidG90YWwiOjIsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyNDIiLCJuYW1lIjoi7J206rK97Ja4IiwicGhvbmUiOiIwMTAtNDQ5Mi05NTY5IiwiZGF0ZSI6IjIwMjYtMDktMTkiLCJ0aW1lIjoiMTI6MDAiLCJ0b3RhbCI6MywiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiMTLsi5zsr6QifSx7ImlkIjoicjQzIiwibmFtZSI6IuuwleycqCIsInBob25lIjoiMDEwLTIwMTQtOTk5NyIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjE0OjAwIiwidG90YWwiOjQsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyNDQiLCJuYW1lIjoi7KeE64uk7ZicIiwicGhvbmUiOiIwMTAtOTgzNi0wNTExIiwiZGF0ZSI6IjIwMjYtMDktMTIiLCJ0aW1lIjoiMTQ6MDAiLCJ0b3RhbCI6MiwiYWR1bHRzIjoxLCJraWRzIjoxLCJub3RlIjoiIn0seyJpZCI6InI0NSIsIm5hbWUiOiLquYDsnYDso7wiLCJwaG9uZSI6IjAxMC0yMTgxLTQ4MjQiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMTowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjQ2IiwibmFtZSI6Iuq5gO2YhOyglSIsInBob25lIjoiMDEwLTI4NTItMDY1NCIsImRhdGUiOiIyMDI2LTA5LTA1IiwidGltZSI6IjEyOjAwIiwidG90YWwiOjIsImFkdWx0cyI6MSwia2lkcyI6MSwibm90ZSI6IuuFuOyVhCJ9LHsiaWQiOiJyNDciLCJuYW1lIjoi7Iug7KCV7JilIiwicGhvbmUiOiIwMTAtNDA5OC0wMDUzIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTI6MDAiLCJ0b3RhbCI6MywiYWR1bHRzIjoyLCJraWRzIjoxLCJub3RlIjoiIn0seyJpZCI6InI0OCIsIm5hbWUiOiLsi6DsoJXsmKUiLCJwaG9uZSI6IjAxMC00MDk4LTAwNTMiLCJkYXRlIjoiMjAyNi0wOS0xMiIsInRpbWUiOiIxMTowMCIsInRvdGFsIjozLCJhZHVsdHMiOjIsImtpZHMiOjEsIm5vdGUiOiIifSx7ImlkIjoicjQ5IiwibmFtZSI6IuyLoOygleyYpSIsInBob25lIjoiMDEwLTQwOTgtMDA1MyIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjExOjAwIiwidG90YWwiOjMsImFkdWx0cyI6Miwia2lkcyI6MSwibm90ZSI6IiJ9XQ==";

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
const opsCipher = "{\"salt\":\"zXTqB8CxpRtG9mwthg2B3g==\",\"iv\":\"ysgmKr0P6b2C0Q24\",\"iter\":100000,\"data\":\"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\"}";

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
