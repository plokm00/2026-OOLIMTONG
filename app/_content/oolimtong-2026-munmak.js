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
const opsCipher = "{\"salt\":\"tkPgld3cJ/+9emOpXbPJ/Q==\",\"iv\":\"lub3I04VkZqn1wUN\",\"iter\":100000,\"data\":\"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\"}";

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
