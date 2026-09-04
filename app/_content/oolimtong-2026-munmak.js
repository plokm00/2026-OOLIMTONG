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

  /* 흙 작업 참고 사진 */
  .ops-gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 4px; }
  .ops-gallery figure { margin: 0; }
  .ops-gallery a {
    display: block; border-radius: 3px; overflow: hidden;
    border: 1px solid var(--line); background: var(--bg2);
  }
  .ops-gallery img { display: block; width: 100%; height: 148px; object-fit: cover; transition: opacity 0.15s; }
  .ops-gallery a:hover img { opacity: 0.88; }
  .ops-gallery figcaption { font-size: 11.5px; color: var(--text-dim); line-height: 1.5; margin-top: 5px; }
  .ops-gallery figcaption b { color: var(--accent2); font-weight: 600; }

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
    .ops-gallery { grid-template-columns: repeat(2, 1fr); }
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
  var PACKED = "W3siaWQiOiJyMSIsIm5hbWUiOiLsnbTsp4TtnawiLCJwaG9uZSI6IjAxMC05MzE4LTA5OTEiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMzowMCIsInRvdGFsIjozLCJhZHVsdHMiOjIsImtpZHMiOjEsIm5vdGUiOiIifSx7ImlkIjoicjIiLCJuYW1lIjoi7ZeI7Z2s6rK9IiwicGhvbmUiOiIwMTAtOTkwNy02MDcyIiwiZGF0ZSI6IjIwMjYtMDktMTkiLCJ0aW1lIjoiMTQ6MDAiLCJ0b3RhbCI6bnVsbCwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InIzIiwibmFtZSI6IuydtOuPme2drCIsInBob25lIjoiMDEwLTg4NTctODM0OSIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjEwOjAwIiwidG90YWwiOjYsImFkdWx0cyI6NCwia2lkcyI6Miwibm90ZSI6IiJ9LHsiaWQiOiJyNCIsIm5hbWUiOiLsl4Ttg5zrprwiLCJwaG9uZSI6IjAxMC05MDU3LTc5MTgiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMzowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjUiLCJuYW1lIjoi67CV7JWE66aEIiwicGhvbmUiOiIwMTAtNDg1MS00NTUwIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTA6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjoyLCJraWRzIjoyLCJub3RlIjoiIn0seyJpZCI6InI2IiwibmFtZSI6Iuq5gOyEoOyYgSIsInBob25lIjoiMDEwLTQyMTAtNjU4OCIsImRhdGUiOiIyMDI2LTA5LTA1IiwidGltZSI6IjEzOjAwIiwidG90YWwiOjMsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyNyIsIm5hbWUiOiLrgpjsmIHsi6QiLCJwaG9uZSI6IjAxMC0zMDAyLTY1NDMiLCJkYXRlIjoiMjAyNi0wOS0xMiIsInRpbWUiOiIxMDozMCIsInRvdGFsIjozLCJhZHVsdHMiOjIsImtpZHMiOjEsIm5vdGUiOiIifSx7ImlkIjoicjgiLCJuYW1lIjoi6rCV66+87KeAIiwicGhvbmUiOiIwMTAtNzE4OC00OTYzIiwiZGF0ZSI6IjIwMjYtMDktMTkiLCJ0aW1lIjoiUE0iLCJ0b3RhbCI6NCwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InI5IiwibmFtZSI6IuydtOydgOyjvCIsInBob25lIjoiMDEwLTMzMzYtMzQ2NSIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IkFNIiwidG90YWwiOjMsImFkdWx0cyI6Miwia2lkcyI6MSwibm90ZSI6Iuy0iDIg64Ko7JWEICsg67aA66qoIn0seyJpZCI6InIxMCIsIm5hbWUiOiLsnbTrr7zsiJkiLCJwaG9uZSI6IjAxMC00MTQ1LTA5OTAiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxNTowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjExIiwibmFtZSI6IuydtOyDgeyVhCIsInBob25lIjoiMDEwLTMzOTUtNTY2OCIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjEwOjAwIiwidG90YWwiOjQsImFkdWx0cyI6Miwia2lkcyI6Miwibm90ZSI6IiJ9LHsiaWQiOiJyMTIiLCJuYW1lIjoi7Jyg7KeA7ZicIiwicGhvbmUiOiIwMTAtNDYyNy04NTE2IiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTE6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjoyLCJraWRzIjoyLCJub3RlIjoi7JWE64+ZIDjshLgsIDbshLgifSx7ImlkIjoicjEzIiwibmFtZSI6Iu2ZjeyngOydgCIsInBob25lIjoiMDEwLTY0ODktMzIyMiIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjEzOjAwIiwidG90YWwiOjMsImFkdWx0cyI6MSwia2lkcyI6Miwibm90ZSI6IjEzOjAwfjE1OjMwIn0seyJpZCI6InIxNCIsIm5hbWUiOiLtmY3sp4DsnYAiLCJwaG9uZSI6IjAxMC02NDg5LTMyMjIiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMzowMCIsInRvdGFsIjozLCJhZHVsdHMiOjEsImtpZHMiOjIsIm5vdGUiOiIxMzowMH4xNTozMCJ9LHsiaWQiOiJyMTUiLCJuYW1lIjoi7LWc7Jew7Z2sIiwicGhvbmUiOiIwMTAtNjM4OC0wMDA3IiwiZGF0ZSI6IjIwMjYtMDktMTIiLCJ0aW1lIjoiMTI6MDAiLCJ0b3RhbCI6NSwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InIxNiIsIm5hbWUiOiLquYDsoJXrr7giLCJwaG9uZSI6IjAxMC03MTA1LTE1NzAiLCJkYXRlIjoiMjAyNi0wOS0xMiIsInRpbWUiOiIxMTowMCIsInRvdGFsIjoyLCJhZHVsdHMiOjAsImtpZHMiOjIsIm5vdGUiOiLstIgyIOyXrOyVhCJ9LHsiaWQiOiJyMTciLCJuYW1lIjoi7Jyg66+464KYIiwicGhvbmUiOiIwMTAtNjYxMS00ODgzIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTM6MDAiLCJ0b3RhbCI6NSwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiMTM6MDAg7KCE7ZuEIn0seyJpZCI6InIxOCIsIm5hbWUiOiLrsJXsnKDrprwiLCJwaG9uZSI6IjAxMC0yNDcyLTY3NjMiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxNDowMCIsInRvdGFsIjo3LCJhZHVsdHMiOjIsImtpZHMiOjUsIm5vdGUiOiIifSx7ImlkIjoicjE5IiwibmFtZSI6Iuq5gOycpOyglSIsInBob25lIjoiMDEwLTMzMjMtMTE3NSIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjE0OjAwIiwidG90YWwiOjQsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyMjAiLCJuYW1lIjoi67Cw66+47KeEIiwicGhvbmUiOiIwMTAtNDgwOS0xNDg5IiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTI6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjoyLCJraWRzIjoyLCJub3RlIjoiIn0seyJpZCI6InIyMSIsIm5hbWUiOiLrsJXtmJzsp4QiLCJwaG9uZSI6IjAxMC00MTI2LTQzMjEiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxMTowMCIsInRvdGFsIjozLCJhZHVsdHMiOjEsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjIzIiwibmFtZSI6IuydtOqyqOugiCIsInBob25lIjoiMDEwLTk0ODYtNTEyMCIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjEyOjMwIiwidG90YWwiOjQsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyMjQiLCJuYW1lIjoi6rmA7IS47KCVIiwicGhvbmUiOiIwMTAtOTAxNS00OTExIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTA6MDAiLCJ0b3RhbCI6MywiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InIyNSIsIm5hbWUiOiLquYDsnYDsmIEiLCJwaG9uZSI6IjAxMC00NTQzLTc5OTIiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxMDowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjI2IiwibmFtZSI6Iuq5gOuLpOyYiCIsInBob25lIjoiMDEwLTU2NjUtNjUwNyIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjE1OjAwIiwidG90YWwiOjYsImFkdWx0cyI6Mywia2lkcyI6Mywibm90ZSI6IjTshLggMeuqhSDCtyA27IS4IDLrqoUifSx7ImlkIjoicjI3IiwibmFtZSI6IuycoOyXsOyngCIsInBob25lIjoiMDEwLTQ5MjgtNTQyNiIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjEwOjAwIiwidG90YWwiOjMsImFkdWx0cyI6MSwia2lkcyI6Miwibm90ZSI6IiJ9LHsiaWQiOiJyMjgiLCJuYW1lIjoi6rmA7IiY7KCVIiwicGhvbmUiOiIwMTAtOTE1OS0wNzg5IiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTM6MDAiLCJ0b3RhbCI6NiwiYWR1bHRzIjoyLCJraWRzIjo0LCJub3RlIjoiIn0seyJpZCI6InIyOSIsIm5hbWUiOiLsnbTslYTrpoQiLCJwaG9uZSI6IjAxMC0yNDY3LTA0MzIiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxNDowMCIsInRvdGFsIjoyLCJhZHVsdHMiOm51bGwsImtpZHMiOm51bGwsIm5vdGUiOiIifSx7ImlkIjoicjMwIiwibmFtZSI6Iuq5gOuvuOyglSIsInBob25lIjoiMDEwLTQ0MDUtNDU0MiIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjExOjAwIiwidG90YWwiOjQsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyMzEiLCJuYW1lIjoi64W47KeA7ISgIiwicGhvbmUiOiIwMTAtNTUxMi04NjI4IiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTA6MDAiLCJ0b3RhbCI6MywiYWR1bHRzIjoyLCJraWRzIjoxLCJub3RlIjoiIn0seyJpZCI6InIzMiIsIm5hbWUiOiLquYDtmITrr7giLCJwaG9uZSI6IjAxMC05MTk1LTE2NzEiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMDowMCIsInRvdGFsIjozLCJhZHVsdHMiOjIsImtpZHMiOjEsIm5vdGUiOiLslYTsnbQgOOyEuCJ9LHsiaWQiOiJyMzQiLCJuYW1lIjoi7LWc64+Z6recIiwicGhvbmUiOiIwMTAtOTQwMS04NzgzIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTE6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InIzNSIsIm5hbWUiOiLqsJXsnYDsmKUiLCJwaG9uZSI6IjAxMC02NDcyLTA5OTYiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxMTowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiLstIgzLCA17IS4In0seyJpZCI6InIzNiIsIm5hbWUiOiLsnKTtg5zsmIEiLCJwaG9uZSI6IjAxMC01MDU1LTI3NzgiLCJkYXRlIjoiMjAyNi0wOS0xMiIsInRpbWUiOiIxNDowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjM3IiwibmFtZSI6IuydtOuvuOyInCIsInBob25lIjoiMDEwLTkyNDMtMDUxNyIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjE0OjAwIiwidG90YWwiOjIsImFkdWx0cyI6MSwia2lkcyI6MSwibm90ZSI6IiJ9LHsiaWQiOiJyMzgiLCJuYW1lIjoi7J2066qF7ZmUIiwicGhvbmUiOiIwMTAtNzEyOC0xNTI5IiwiZGF0ZSI6IjIwMjYtMDktMTIiLCJ0aW1lIjoiMTE6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjoyLCJraWRzIjoyLCJub3RlIjoiIn0seyJpZCI6InIzOSIsIm5hbWUiOiLsm5DsmIjsp4QiLCJwaG9uZSI6IjAxMC03MTk2LTk2NjkiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxNDowMCIsInRvdGFsIjoyLCJhZHVsdHMiOjEsImtpZHMiOjEsIm5vdGUiOiLsi6DshozsnKgg64+Z67CYIn0seyJpZCI6InI0MCIsIm5hbWUiOiLquYDqsJXsnbwiLCJwaG9uZSI6IjAxMC0yOTI1LTk3NzEiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxNDowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjQxIiwibmFtZSI6IuyepeuvvOqyvSIsInBob25lIjoiMDEwLTI5NjktMzQ5OSIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjEzOjAwIiwidG90YWwiOjIsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyNDIiLCJuYW1lIjoi7J206rK97Ja4IiwicGhvbmUiOiIwMTAtNDQ5Mi05NTY5IiwiZGF0ZSI6IjIwMjYtMDktMTkiLCJ0aW1lIjoiMTI6MDAiLCJ0b3RhbCI6MywiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiMTLsi5zsr6QifSx7ImlkIjoicjQzIiwibmFtZSI6IuuwleycqCIsInBob25lIjoiMDEwLTIwMTQtOTk5NyIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjE0OjAwIiwidG90YWwiOjQsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyNDQiLCJuYW1lIjoi7KeE64uk7ZicIiwicGhvbmUiOiIwMTAtOTgzNi0wNTExIiwiZGF0ZSI6IjIwMjYtMDktMTIiLCJ0aW1lIjoiMTQ6MDAiLCJ0b3RhbCI6MiwiYWR1bHRzIjoxLCJraWRzIjoxLCJub3RlIjoiIn0seyJpZCI6InI0NSIsIm5hbWUiOiLquYDsnYDso7wiLCJwaG9uZSI6IjAxMC0yMTgxLTQ4MjQiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMTowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjQ2IiwibmFtZSI6Iuq5gO2YhOyglSIsInBob25lIjoiMDEwLTI4NTItMDY1NCIsImRhdGUiOiIyMDI2LTA5LTA1IiwidGltZSI6IjEyOjAwIiwidG90YWwiOjIsImFkdWx0cyI6MSwia2lkcyI6MSwibm90ZSI6IuuFuOyVhCJ9LHsiaWQiOiJyNDciLCJuYW1lIjoi7Iug7KCV7JilIiwicGhvbmUiOiIwMTAtNDA5OC0wMDUzIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTI6MDAiLCJ0b3RhbCI6MywiYWR1bHRzIjoyLCJraWRzIjoxLCJub3RlIjoiIn0seyJpZCI6InI0OCIsIm5hbWUiOiLsi6DsoJXsmKUiLCJwaG9uZSI6IjAxMC00MDk4LTAwNTMiLCJkYXRlIjoiMjAyNi0wOS0xMiIsInRpbWUiOiIxMTowMCIsInRvdGFsIjozLCJhZHVsdHMiOjIsImtpZHMiOjEsIm5vdGUiOiIifSx7ImlkIjoicjQ5IiwibmFtZSI6IuyLoOygleyYpSIsInBob25lIjoiMDEwLTQwOTgtMDA1MyIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjExOjAwIiwidG90YWwiOjMsImFkdWx0cyI6Miwia2lkcyI6MSwibm90ZSI6IiJ9LHsiaWQiOiJyNTAiLCJuYW1lIjoi7ZWc7KGw7JWEIiwicGhvbmUiOiIwMTAtNTA1Mi0zODgyIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTI6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjoyLCJraWRzIjoyLCJub3RlIjoiIn0seyJpZCI6InI1MyIsIm5hbWUiOiLsnbTshKDrr7wiLCJwaG9uZSI6IjAxMC05MDQ4LTA0OTUiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxNDowMCIsInRvdGFsIjoyLCJhZHVsdHMiOjEsImtpZHMiOjEsIm5vdGUiOiIifSx7ImlkIjoicjUxIiwibmFtZSI6IuydtOyngOydgCIsInBob25lIjoiMDEwLTM0ODktNDY4NSIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjEzOjMwIiwidG90YWwiOjksImFkdWx0cyI6Mywia2lkcyI6Niwibm90ZSI6IuyWtOumsOydtCA266qFIOuCtOyZuCDCtyAxM+yLnCDrsJjsr6QifSx7ImlkIjoicjUyIiwibmFtZSI6IuydtOyGjOyglSIsInBob25lIjoiMDEwLTU1NzYtNDk2NyIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjEwOjAwIiwidG90YWwiOjMsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IjEwfjEx7Iuc7K+kIn1d";

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
const opsCipher = "{\"salt\":\"qCm8pBZs2YHC6kg+avwTSg==\",\"iv\":\"x3EJingu0XrIiAws\",\"iter\":100000,\"data\":\"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\"}";

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
