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
const opsCipher = "{\"salt\":\"/FtoQ0QrEbQZpSGv+bziKg==\",\"iv\":\"h3pmyHeb/c9j/AJs\",\"iter\":100000,\"data\":\"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\"}";

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
