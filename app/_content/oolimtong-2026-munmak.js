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
const opsCipher = "{\"salt\":\"CYteYRC59MGH/GvykFo2xQ==\",\"iv\":\"F63ldIEmAnG29tXT\",\"iter\":100000,\"data\":\"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\"}";

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
