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
const opsCipher = "{\"salt\":\"aFPEZ+QUREveHihK6rc1hg==\",\"iv\":\"/TeiSd8RHJNliaf7\",\"iter\":100000,\"data\":\"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\"}";

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
