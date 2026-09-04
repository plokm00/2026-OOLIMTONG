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
const opsCipher = "{\"salt\":\"dpeOoZR+9GQKsooutFf7WA==\",\"iv\":\"XchNlb3Rrt4ywn9t\",\"iter\":100000,\"data\":\"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\"}";

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
