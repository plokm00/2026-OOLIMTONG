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
  #ops-venue { max-width: 980px; margin-top: 44px; }
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
  var PACKED = "W3siaWQiOiJyMSIsIm5hbWUiOiLsnbTsp4TtnawiLCJwaG9uZSI6IjAxMC05MzE4LTA5OTEiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMzowMCIsInRvdGFsIjozLCJhZHVsdHMiOjIsImtpZHMiOjEsIm5vdGUiOiIifSx7ImlkIjoicjIiLCJuYW1lIjoi7ZeI7Z2s6rK9IiwicGhvbmUiOiIwMTAtOTkwNy02MDcyIiwiZGF0ZSI6IjIwMjYtMDktMTkiLCJ0aW1lIjoiMTQ6MDAiLCJ0b3RhbCI6bnVsbCwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InIzIiwibmFtZSI6IuydtOuPme2drCIsInBob25lIjoiMDEwLTg4NTctODM0OSIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjEwOjAwIiwidG90YWwiOjYsImFkdWx0cyI6NCwia2lkcyI6Miwibm90ZSI6IiJ9LHsiaWQiOiJyNCIsIm5hbWUiOiLsl4Ttg5zrprwiLCJwaG9uZSI6IjAxMC05MDU3LTc5MTgiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMzowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjUiLCJuYW1lIjoi67CV7JWE66aEIiwicGhvbmUiOiIwMTAtNDg1MS00NTUwIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTA6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjoyLCJraWRzIjoyLCJub3RlIjoiIn0seyJpZCI6InI2IiwibmFtZSI6Iuq5gOyEoOyYgSIsInBob25lIjoiMDEwLTQyMTAtNjU4OCIsImRhdGUiOiIyMDI2LTA5LTA1IiwidGltZSI6IjEzOjAwIiwidG90YWwiOjMsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyNyIsIm5hbWUiOiLrgpjsmIHsi6QiLCJwaG9uZSI6IjAxMC0zMDAyLTY1NDMiLCJkYXRlIjoiMjAyNi0wOS0xMiIsInRpbWUiOiIxMDozMCIsInRvdGFsIjozLCJhZHVsdHMiOjIsImtpZHMiOjEsIm5vdGUiOiIifSx7ImlkIjoicjgiLCJuYW1lIjoi6rCV66+87KeAIiwicGhvbmUiOiIwMTAtNzE4OC00OTYzIiwiZGF0ZSI6IjIwMjYtMDktMTkiLCJ0aW1lIjoiUE0iLCJ0b3RhbCI6NCwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InI5IiwibmFtZSI6IuydtOydgOyjvCIsInBob25lIjoiMDEwLTMzMzYtMzQ2NSIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IkFNIiwidG90YWwiOjMsImFkdWx0cyI6Miwia2lkcyI6MSwibm90ZSI6Iuy0iDIg64Ko7JWEICsg67aA66qoIn0seyJpZCI6InIxMCIsIm5hbWUiOiLsnbTrr7zsiJkiLCJwaG9uZSI6IjAxMC00MTQ1LTA5OTAiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxNTowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjExIiwibmFtZSI6IuydtOyDgeyVhCIsInBob25lIjoiMDEwLTMzOTUtNTY2OCIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjEwOjAwIiwidG90YWwiOjQsImFkdWx0cyI6Miwia2lkcyI6Miwibm90ZSI6IiJ9LHsiaWQiOiJyMTIiLCJuYW1lIjoi7Jyg7KeA7ZicIiwicGhvbmUiOiIwMTAtNDYyNy04NTE2IiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTE6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjoyLCJraWRzIjoyLCJub3RlIjoi7JWE64+ZIDjshLgsIDbshLgifSx7ImlkIjoicjEzIiwibmFtZSI6Iu2ZjeyngOydgCIsInBob25lIjoiMDEwLTY0ODktMzIyMiIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjEzOjAwIiwidG90YWwiOjMsImFkdWx0cyI6MSwia2lkcyI6Miwibm90ZSI6IjEzOjAwfjE1OjMwIn0seyJpZCI6InIxNCIsIm5hbWUiOiLtmY3sp4DsnYAiLCJwaG9uZSI6IjAxMC02NDg5LTMyMjIiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMzowMCIsInRvdGFsIjozLCJhZHVsdHMiOjEsImtpZHMiOjIsIm5vdGUiOiIxMzowMH4xNTozMCJ9LHsiaWQiOiJyMTUiLCJuYW1lIjoi7LWc7Jew7Z2sIiwicGhvbmUiOiIwMTAtNjM4OC0wMDA3IiwiZGF0ZSI6IjIwMjYtMDktMTIiLCJ0aW1lIjoiMTI6MDAiLCJ0b3RhbCI6NSwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InIxNiIsIm5hbWUiOiLquYDsoJXrr7giLCJwaG9uZSI6IjAxMC03MTA1LTE1NzAiLCJkYXRlIjoiMjAyNi0wOS0xMiIsInRpbWUiOiIxMTowMCIsInRvdGFsIjoyLCJhZHVsdHMiOjAsImtpZHMiOjIsIm5vdGUiOiLstIgyIOyXrOyVhCJ9LHsiaWQiOiJyMTciLCJuYW1lIjoi7Jyg66+464KYIiwicGhvbmUiOiIwMTAtNjYxMS00ODgzIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTM6MDAiLCJ0b3RhbCI6NSwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiMTM6MDAg7KCE7ZuEIn0seyJpZCI6InIxOCIsIm5hbWUiOiLrsJXsnKDrprwiLCJwaG9uZSI6IjAxMC0yNDcyLTY3NjMiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxNDowMCIsInRvdGFsIjo3LCJhZHVsdHMiOjIsImtpZHMiOjUsIm5vdGUiOiIifSx7ImlkIjoicjE5IiwibmFtZSI6Iuq5gOycpOyglSIsInBob25lIjoiMDEwLTMzMjMtMTE3NSIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjE0OjAwIiwidG90YWwiOjQsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyMjAiLCJuYW1lIjoi67Cw66+47KeEIiwicGhvbmUiOiIwMTAtNDgwOS0xNDg5IiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTI6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjoyLCJraWRzIjoyLCJub3RlIjoiIn0seyJpZCI6InIyMSIsIm5hbWUiOiLrsJXtmJzsp4QiLCJwaG9uZSI6IjAxMC00MTI2LTQzMjEiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxMTowMCIsInRvdGFsIjozLCJhZHVsdHMiOjEsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjIzIiwibmFtZSI6IuydtOqyqOugiCIsInBob25lIjoiMDEwLTk0ODYtNTEyMCIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjEyOjMwIiwidG90YWwiOjQsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyMjQiLCJuYW1lIjoi6rmA7IS47KCVIiwicGhvbmUiOiIwMTAtOTAxNS00OTExIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTA6MDAiLCJ0b3RhbCI6MywiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InIyNSIsIm5hbWUiOiLquYDsnYDsmIEiLCJwaG9uZSI6IjAxMC00NTQzLTc5OTIiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxMDowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjI2IiwibmFtZSI6Iuq5gOuLpOyYiCIsInBob25lIjoiMDEwLTU2NjUtNjUwNyIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjE1OjAwIiwidG90YWwiOjYsImFkdWx0cyI6Mywia2lkcyI6Mywibm90ZSI6IjTshLggMeuqhSDCtyA27IS4IDLrqoUifSx7ImlkIjoicjI3IiwibmFtZSI6IuycoOyXsOyngCIsInBob25lIjoiMDEwLTQ5MjgtNTQyNiIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjEwOjAwIiwidG90YWwiOjMsImFkdWx0cyI6MSwia2lkcyI6Miwibm90ZSI6IiJ9LHsiaWQiOiJyMjgiLCJuYW1lIjoi6rmA7IiY7KCVIiwicGhvbmUiOiIwMTAtOTE1OS0wNzg5IiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTM6MDAiLCJ0b3RhbCI6NiwiYWR1bHRzIjoyLCJraWRzIjo0LCJub3RlIjoiIn0seyJpZCI6InIyOSIsIm5hbWUiOiLsnbTslYTrpoQiLCJwaG9uZSI6IjAxMC0yNDY3LTA0MzIiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxNDowMCIsInRvdGFsIjoyLCJhZHVsdHMiOm51bGwsImtpZHMiOm51bGwsIm5vdGUiOiIifSx7ImlkIjoicjMwIiwibmFtZSI6Iuq5gOuvuOyglSIsInBob25lIjoiMDEwLTQ0MDUtNDU0MiIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjExOjAwIiwidG90YWwiOjQsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyMzEiLCJuYW1lIjoi64W47KeA7ISgIiwicGhvbmUiOiIwMTAtNTUxMi04NjI4IiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTA6MDAiLCJ0b3RhbCI6MywiYWR1bHRzIjoyLCJraWRzIjoxLCJub3RlIjoiIn0seyJpZCI6InIzMiIsIm5hbWUiOiLquYDtmITrr7giLCJwaG9uZSI6IjAxMC05MTk1LTE2NzEiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMDowMCIsInRvdGFsIjozLCJhZHVsdHMiOjIsImtpZHMiOjEsIm5vdGUiOiLslYTsnbQgOOyEuCJ9LHsiaWQiOiJyMzMiLCJuYW1lIjoi7JeE7KCV7J2AIiwicGhvbmUiOiIwMTAtNTQ4Ny0wODA5IiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTE6MDAiLCJ0b3RhbCI6MiwiYWR1bHRzIjoxLCJraWRzIjoxLCJub3RlIjoiIn0seyJpZCI6InIzNCIsIm5hbWUiOiLstZzrj5nqt5wiLCJwaG9uZSI6IjAxMC05NDAxLTg3ODMiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxMTowMCIsInRvdGFsIjo0LCJhZHVsdHMiOm51bGwsImtpZHMiOm51bGwsIm5vdGUiOiIifSx7ImlkIjoicjM1IiwibmFtZSI6IuqwleydgOyYpSIsInBob25lIjoiMDEwLTY0NzItMDk5NiIsImRhdGUiOiIyMDI2LTA5LTA1IiwidGltZSI6IjExOjAwIiwidG90YWwiOjQsImFkdWx0cyI6Miwia2lkcyI6Miwibm90ZSI6Iuy0iDMsIDXshLgifSx7ImlkIjoicjM2IiwibmFtZSI6IuycpO2DnOyYgSIsInBob25lIjoiMDEwLTUwNTUtMjc3OCIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjE0OjAwIiwidG90YWwiOjQsImFkdWx0cyI6Miwia2lkcyI6Miwibm90ZSI6IiJ9LHsiaWQiOiJyMzciLCJuYW1lIjoi7J2066+47IicIiwicGhvbmUiOiIwMTAtOTI0My0wNTE3IiwiZGF0ZSI6IjIwMjYtMDktMTIiLCJ0aW1lIjoiMTQ6MDAiLCJ0b3RhbCI6MiwiYWR1bHRzIjoxLCJraWRzIjoxLCJub3RlIjoiIn0seyJpZCI6InIzOCIsIm5hbWUiOiLsnbTrqoXtmZQiLCJwaG9uZSI6IjAxMC03MTI4LTE1MjkiLCJkYXRlIjoiMjAyNi0wOS0xMiIsInRpbWUiOiIxMTowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjM5IiwibmFtZSI6IuybkOyYiOynhCIsInBob25lIjoiMDEwLTcxOTYtOTY2OSIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjE0OjAwIiwidG90YWwiOjIsImFkdWx0cyI6MSwia2lkcyI6MSwibm90ZSI6IuyLoOyGjOycqCDrj5nrsJgifSx7ImlkIjoicjQwIiwibmFtZSI6Iuq5gOqwleydvCIsInBob25lIjoiMDEwLTI5MjUtOTc3MSIsImRhdGUiOiIyMDI2LTA5LTA1IiwidGltZSI6IjE0OjAwIiwidG90YWwiOjQsImFkdWx0cyI6Miwia2lkcyI6Miwibm90ZSI6IiJ9LHsiaWQiOiJyNDEiLCJuYW1lIjoi7J6l66+86rK9IiwicGhvbmUiOiIwMTAtMjk2OS0zNDk5IiwiZGF0ZSI6IjIwMjYtMDktMTIiLCJ0aW1lIjoiMTM6MDAiLCJ0b3RhbCI6MiwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InI0MiIsIm5hbWUiOiLsnbTqsr3slrgiLCJwaG9uZSI6IjAxMC00NDkyLTk1NjkiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMjowMCIsInRvdGFsIjozLCJhZHVsdHMiOm51bGwsImtpZHMiOm51bGwsIm5vdGUiOiIxMuyLnOyvpCJ9LHsiaWQiOiJyNDMiLCJuYW1lIjoi67CV7JyoIiwicGhvbmUiOiIwMTAtMjAxNC05OTk3IiwiZGF0ZSI6IjIwMjYtMDktMTIiLCJ0aW1lIjoiMTQ6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InI0NCIsIm5hbWUiOiLsp4Tri6TtmJwiLCJwaG9uZSI6IjAxMC05ODM2LTA1MTEiLCJkYXRlIjoiMjAyNi0wOS0xMiIsInRpbWUiOiIxNDowMCIsInRvdGFsIjoyLCJhZHVsdHMiOjEsImtpZHMiOjEsIm5vdGUiOiIifSx7ImlkIjoicjQ1IiwibmFtZSI6Iuq5gOydgOyjvCIsInBob25lIjoiMDEwLTIxODEtNDgyNCIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjExOjAwIiwidG90YWwiOjQsImFkdWx0cyI6Miwia2lkcyI6Miwibm90ZSI6IiJ9LHsiaWQiOiJyNDYiLCJuYW1lIjoi6rmA7ZiE7KCVIiwicGhvbmUiOiIwMTAtMjg1Mi0wNjU0IiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTI6MDAiLCJ0b3RhbCI6MiwiYWR1bHRzIjoxLCJraWRzIjoxLCJub3RlIjoi64W47JWEIn0seyJpZCI6InI0NyIsIm5hbWUiOiLsi6DsoJXsmKUiLCJwaG9uZSI6IjAxMC00MDk4LTAwNTMiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxMjowMCIsInRvdGFsIjozLCJhZHVsdHMiOjIsImtpZHMiOjEsIm5vdGUiOiIifSx7ImlkIjoicjQ4IiwibmFtZSI6IuyLoOygleyYpSIsInBob25lIjoiMDEwLTQwOTgtMDA1MyIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjExOjAwIiwidG90YWwiOjMsImFkdWx0cyI6Miwia2lkcyI6MSwibm90ZSI6IiJ9LHsiaWQiOiJyNDkiLCJuYW1lIjoi7Iug7KCV7JilIiwicGhvbmUiOiIwMTAtNDA5OC0wMDUzIiwiZGF0ZSI6IjIwMjYtMDktMTkiLCJ0aW1lIjoiMTE6MDAiLCJ0b3RhbCI6MywiYWR1bHRzIjoyLCJraWRzIjoxLCJub3RlIjoiIn1d";

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
const opsCipher = "{\"salt\":\"iKBs3k2ri5t0qylHLzcjIw==\",\"iv\":\"W5t5hZ3Hw859koC3\",\"iter\":100000,\"data\":\"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\"}";

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
