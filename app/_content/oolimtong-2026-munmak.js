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
const opsCipher = "{\"salt\":\"9orCygiWtV6RXzzAK96EWQ==\",\"iv\":\"POrRJgn2+lXSy1Fj\",\"iter\":100000,\"data\":\"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\"}";

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
