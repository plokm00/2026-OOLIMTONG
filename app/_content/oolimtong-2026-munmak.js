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

  /* 하단 참고 링크 버튼 */
  .ops-btn-row { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 14px; }
  .ops-btn {
    display: inline-block;
    font-family: 'IBM Plex Sans KR', sans-serif;
    font-size: 13px; font-weight: 500;
    padding: 10px 18px; border-radius: 3px; text-decoration: none;
    background: var(--accent); color: var(--white); border: 1px solid var(--accent);
    transition: background 0.15s, border-color 0.15s;
  }
  .ops-btn:hover { background: var(--accent2); border-color: var(--accent2); }
  .ops-btn.ghost { background: none; color: var(--accent2); border-color: var(--line); }
  .ops-btn.ghost:hover { background: var(--bg3); }

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
const opsCipher = "{\"salt\":\"Ttb0IUzMFmJwLT3K+k8Whg==\",\"iv\":\"aDwDJnbuaGW1MDlr\",\"iter\":100000,\"data\":\"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\"}";

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
