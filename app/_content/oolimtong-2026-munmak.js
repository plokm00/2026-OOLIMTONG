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
  var PACKED = "W3siaWQiOiJyMSIsIm5hbWUiOiLsnbTsp4TtnawiLCJwaG9uZSI6IjAxMC05MzE4LTA5OTEiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMzowMCIsInRvdGFsIjozLCJhZHVsdHMiOjIsImtpZHMiOjEsIm5vdGUiOiIifSx7ImlkIjoicjIiLCJuYW1lIjoi7ZeI7Z2s6rK9IiwicGhvbmUiOiIwMTAtOTkwNy02MDcyIiwiZGF0ZSI6IjIwMjYtMDktMTkiLCJ0aW1lIjoiMTQ6MDAiLCJ0b3RhbCI6bnVsbCwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InIzIiwibmFtZSI6IuydtOuPme2drCIsInBob25lIjoiMDEwLTg4NTctODM0OSIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjEwOjAwIiwidG90YWwiOjYsImFkdWx0cyI6NCwia2lkcyI6Miwibm90ZSI6IiJ9LHsiaWQiOiJyNCIsIm5hbWUiOiLsl4Ttg5zrprwiLCJwaG9uZSI6IjAxMC05MDU3LTc5MTgiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMzowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjUiLCJuYW1lIjoi67CV7JWE66aEIiwicGhvbmUiOiIwMTAtNDg1MS00NTUwIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTA6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjoyLCJraWRzIjoyLCJub3RlIjoiIn0seyJpZCI6InI2IiwibmFtZSI6Iuq5gOyEoOyYgSIsInBob25lIjoiMDEwLTQyMTAtNjU4OCIsImRhdGUiOiIyMDI2LTA5LTA1IiwidGltZSI6IjEzOjAwIiwidG90YWwiOjMsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyNyIsIm5hbWUiOiLrgpjsmIHsi6QiLCJwaG9uZSI6IjAxMC0zMDAyLTY1NDMiLCJkYXRlIjoiMjAyNi0wOS0xMiIsInRpbWUiOiIxMDozMCIsInRvdGFsIjozLCJhZHVsdHMiOjIsImtpZHMiOjEsIm5vdGUiOiIifSx7ImlkIjoicjgiLCJuYW1lIjoi6rCV66+87KeAIiwicGhvbmUiOiIwMTAtNzE4OC00OTYzIiwiZGF0ZSI6IjIwMjYtMDktMTkiLCJ0aW1lIjoiUE0iLCJ0b3RhbCI6NCwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InI5IiwibmFtZSI6IuydtOydgOyjvCIsInBob25lIjoiMDEwLTMzMzYtMzQ2NSIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IkFNIiwidG90YWwiOjMsImFkdWx0cyI6Miwia2lkcyI6MSwibm90ZSI6Iuy0iDIg64Ko7JWEICsg67aA66qoIn0seyJpZCI6InIxMCIsIm5hbWUiOiLsnbTrr7zsiJkiLCJwaG9uZSI6IjAxMC00MTQ1LTA5OTAiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxNTowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjExIiwibmFtZSI6IuydtOyDgeyVhCIsInBob25lIjoiMDEwLTMzOTUtNTY2OCIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjEwOjAwIiwidG90YWwiOjQsImFkdWx0cyI6Miwia2lkcyI6Miwibm90ZSI6IiJ9LHsiaWQiOiJyMTIiLCJuYW1lIjoi7Jyg7KeA7ZicIiwicGhvbmUiOiIwMTAtNDYyNy04NTE2IiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTE6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjoyLCJraWRzIjoyLCJub3RlIjoi7JWE64+ZIDjshLgsIDbshLgifSx7ImlkIjoicjEzIiwibmFtZSI6Iu2ZjeyngOydgCIsInBob25lIjoiMDEwLTY0ODktMzIyMiIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjEzOjAwIiwidG90YWwiOjMsImFkdWx0cyI6MSwia2lkcyI6Miwibm90ZSI6IjEzOjAwfjE1OjMwIn0seyJpZCI6InIxNCIsIm5hbWUiOiLtmY3sp4DsnYAiLCJwaG9uZSI6IjAxMC02NDg5LTMyMjIiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMzowMCIsInRvdGFsIjozLCJhZHVsdHMiOjEsImtpZHMiOjIsIm5vdGUiOiIxMzowMH4xNTozMCJ9LHsiaWQiOiJyMTUiLCJuYW1lIjoi7LWc7Jew7Z2sIiwicGhvbmUiOiIwMTAtNjM4OC0wMDA3IiwiZGF0ZSI6IjIwMjYtMDktMTIiLCJ0aW1lIjoiMTI6MDAiLCJ0b3RhbCI6NSwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InIxNiIsIm5hbWUiOiLquYDsoJXrr7giLCJwaG9uZSI6IjAxMC03MTA1LTE1NzAiLCJkYXRlIjoiMjAyNi0wOS0xMiIsInRpbWUiOiIxMTowMCIsInRvdGFsIjoyLCJhZHVsdHMiOjAsImtpZHMiOjIsIm5vdGUiOiLstIgyIOyXrOyVhCJ9LHsiaWQiOiJyMTciLCJuYW1lIjoi7Jyg66+464KYIiwicGhvbmUiOiIwMTAtNjYxMS00ODgzIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTM6MDAiLCJ0b3RhbCI6NSwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiMTM6MDAg7KCE7ZuEIn0seyJpZCI6InIxOCIsIm5hbWUiOiLrsJXsnKDrprwiLCJwaG9uZSI6IjAxMC0yNDcyLTY3NjMiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxNDowMCIsInRvdGFsIjo3LCJhZHVsdHMiOjIsImtpZHMiOjUsIm5vdGUiOiIifSx7ImlkIjoicjE5IiwibmFtZSI6Iuq5gOycpOyglSIsInBob25lIjoiMDEwLTMzMjMtMTE3NSIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjE0OjAwIiwidG90YWwiOjQsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyMjAiLCJuYW1lIjoi67Cw66+47KeEIiwicGhvbmUiOiIwMTAtNDgwOS0xNDg5IiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTI6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjoyLCJraWRzIjoyLCJub3RlIjoiIn0seyJpZCI6InIyMSIsIm5hbWUiOiLrsJXtmJzsp4QiLCJwaG9uZSI6IjAxMC00MTI2LTQzMjEiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxMTowMCIsInRvdGFsIjozLCJhZHVsdHMiOjEsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjIzIiwibmFtZSI6IuydtOqyqOugiCIsInBob25lIjoiMDEwLTk0ODYtNTEyMCIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjEyOjMwIiwidG90YWwiOjQsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyMjQiLCJuYW1lIjoi6rmA7IS47KCVIiwicGhvbmUiOiIwMTAtOTAxNS00OTExIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTA6MDAiLCJ0b3RhbCI6MywiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InIyNSIsIm5hbWUiOiLquYDsnYDsmIEiLCJwaG9uZSI6IjAxMC00NTQzLTc5OTIiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxMDowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjI2IiwibmFtZSI6Iuq5gOuLpOyYiCIsInBob25lIjoiMDEwLTU2NjUtNjUwNyIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjE1OjAwIiwidG90YWwiOjYsImFkdWx0cyI6Mywia2lkcyI6Mywibm90ZSI6IjTshLggMeuqhSDCtyA27IS4IDLrqoUifSx7ImlkIjoicjI3IiwibmFtZSI6IuycoOyXsOyngCIsInBob25lIjoiMDEwLTQ5MjgtNTQyNiIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjEwOjAwIiwidG90YWwiOjMsImFkdWx0cyI6MSwia2lkcyI6Miwibm90ZSI6IiJ9LHsiaWQiOiJyMjgiLCJuYW1lIjoi6rmA7IiY7KCVIiwicGhvbmUiOiIwMTAtOTE1OS0wNzg5IiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTM6MDAiLCJ0b3RhbCI6NiwiYWR1bHRzIjoyLCJraWRzIjo0LCJub3RlIjoiIn0seyJpZCI6InIyOSIsIm5hbWUiOiLsnbTslYTrpoQiLCJwaG9uZSI6IjAxMC0yNDY3LTA0MzIiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxNDowMCIsInRvdGFsIjoyLCJhZHVsdHMiOm51bGwsImtpZHMiOm51bGwsIm5vdGUiOiIifSx7ImlkIjoicjMwIiwibmFtZSI6Iuq5gOuvuOyglSIsInBob25lIjoiMDEwLTQ0MDUtNDU0MiIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjExOjAwIiwidG90YWwiOjQsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyMzEiLCJuYW1lIjoi64W47KeA7ISgIiwicGhvbmUiOiIwMTAtNTUxMi04NjI4IiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTA6MDAiLCJ0b3RhbCI6MywiYWR1bHRzIjoyLCJraWRzIjoxLCJub3RlIjoiIn0seyJpZCI6InIzMiIsIm5hbWUiOiLquYDtmITrr7giLCJwaG9uZSI6IjAxMC05MTk1LTE2NzEiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMDowMCIsInRvdGFsIjozLCJhZHVsdHMiOjIsImtpZHMiOjEsIm5vdGUiOiLslYTsnbQgOOyEuCJ9LHsiaWQiOiJyMzQiLCJuYW1lIjoi7LWc64+Z6recIiwicGhvbmUiOiIwMTAtOTQwMS04NzgzIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTE6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InIzNSIsIm5hbWUiOiLqsJXsnYDsmKUiLCJwaG9uZSI6IjAxMC02NDcyLTA5OTYiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxMTowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiLstIgzLCA17IS4In0seyJpZCI6InIzNiIsIm5hbWUiOiLsnKTtg5zsmIEiLCJwaG9uZSI6IjAxMC01MDU1LTI3NzgiLCJkYXRlIjoiMjAyNi0wOS0xMiIsInRpbWUiOiIxNDowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjM3IiwibmFtZSI6IuydtOuvuOyInCIsInBob25lIjoiMDEwLTkyNDMtMDUxNyIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjE0OjAwIiwidG90YWwiOjIsImFkdWx0cyI6MSwia2lkcyI6MSwibm90ZSI6IiJ9LHsiaWQiOiJyMzgiLCJuYW1lIjoi7J2066qF7ZmUIiwicGhvbmUiOiIwMTAtNzEyOC0xNTI5IiwiZGF0ZSI6IjIwMjYtMDktMTIiLCJ0aW1lIjoiMTE6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjoyLCJraWRzIjoyLCJub3RlIjoiIn0seyJpZCI6InIzOSIsIm5hbWUiOiLsm5DsmIjsp4QiLCJwaG9uZSI6IjAxMC03MTk2LTk2NjkiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxNDowMCIsInRvdGFsIjoyLCJhZHVsdHMiOjEsImtpZHMiOjEsIm5vdGUiOiLsi6DshozsnKgg64+Z67CYIn0seyJpZCI6InI0MCIsIm5hbWUiOiLquYDqsJXsnbwiLCJwaG9uZSI6IjAxMC0yOTI1LTk3NzEiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxNDowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjQxIiwibmFtZSI6IuyepeuvvOqyvSIsInBob25lIjoiMDEwLTI5NjktMzQ5OSIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjEzOjAwIiwidG90YWwiOjIsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyNDIiLCJuYW1lIjoi7J206rK97Ja4IiwicGhvbmUiOiIwMTAtNDQ5Mi05NTY5IiwiZGF0ZSI6IjIwMjYtMDktMTkiLCJ0aW1lIjoiMTI6MDAiLCJ0b3RhbCI6MywiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiMTLsi5zsr6QifSx7ImlkIjoicjQzIiwibmFtZSI6IuuwleycqCIsInBob25lIjoiMDEwLTIwMTQtOTk5NyIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjE0OjAwIiwidG90YWwiOjQsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyNDQiLCJuYW1lIjoi7KeE64uk7ZicIiwicGhvbmUiOiIwMTAtOTgzNi0wNTExIiwiZGF0ZSI6IjIwMjYtMDktMTIiLCJ0aW1lIjoiMTQ6MDAiLCJ0b3RhbCI6MiwiYWR1bHRzIjoxLCJraWRzIjoxLCJub3RlIjoiIn0seyJpZCI6InI0NSIsIm5hbWUiOiLquYDsnYDso7wiLCJwaG9uZSI6IjAxMC0yMTgxLTQ4MjQiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMTowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjQ2IiwibmFtZSI6Iuq5gO2YhOyglSIsInBob25lIjoiMDEwLTI4NTItMDY1NCIsImRhdGUiOiIyMDI2LTA5LTA1IiwidGltZSI6IjEyOjAwIiwidG90YWwiOjIsImFkdWx0cyI6MSwia2lkcyI6MSwibm90ZSI6IuuFuOyVhCJ9LHsiaWQiOiJyNDciLCJuYW1lIjoi7Iug7KCV7JilIiwicGhvbmUiOiIwMTAtNDA5OC0wMDUzIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTI6MDAiLCJ0b3RhbCI6MywiYWR1bHRzIjoyLCJraWRzIjoxLCJub3RlIjoiIn0seyJpZCI6InI0OCIsIm5hbWUiOiLsi6DsoJXsmKUiLCJwaG9uZSI6IjAxMC00MDk4LTAwNTMiLCJkYXRlIjoiMjAyNi0wOS0xMiIsInRpbWUiOiIxMTowMCIsInRvdGFsIjozLCJhZHVsdHMiOjIsImtpZHMiOjEsIm5vdGUiOiIifSx7ImlkIjoicjQ5IiwibmFtZSI6IuyLoOygleyYpSIsInBob25lIjoiMDEwLTQwOTgtMDA1MyIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjExOjAwIiwidG90YWwiOjMsImFkdWx0cyI6Miwia2lkcyI6MSwibm90ZSI6IiJ9LHsiaWQiOiJyNTAiLCJuYW1lIjoi7ZWc7KGw7JWEIiwicGhvbmUiOiIwMTAtNTA1Mi0zODgyIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTI6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjoyLCJraWRzIjoyLCJub3RlIjoiIn0seyJpZCI6InI1MyIsIm5hbWUiOiLsnbTshKDrr7wiLCJwaG9uZSI6IjAxMC05MDQ4LTA0OTUiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxNDowMCIsInRvdGFsIjoyLCJhZHVsdHMiOjEsImtpZHMiOjEsIm5vdGUiOiIifSx7ImlkIjoicjUxIiwibmFtZSI6IuydtOyngOydgCIsInBob25lIjoiMDEwLTM0ODktNDY4NSIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjEzOjMwIiwidG90YWwiOjksImFkdWx0cyI6Mywia2lkcyI6Niwibm90ZSI6IuyWtOumsOydtCA266qFIOuCtOyZuCDCtyAxM+yLnCDrsJjsr6QifSx7ImlkIjoicjUyIiwibmFtZSI6IuydtOyGjOyglSIsInBob25lIjoiMDEwLTU1NzYtNDk2NyIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjEwOjAwIiwidG90YWwiOjMsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IjEwfjEx7Iuc7K+kIn0seyJpZCI6InI1NCIsIm5hbWUiOiLrhbjrr7jrnpgiLCJwaG9uZSI6IjAxMC03MjIwLTc4MzQiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxMTowMCIsInRvdGFsIjozLCJhZHVsdHMiOjEsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjU1IiwibmFtZSI6IuycpOyGjOudvCIsInBob25lIjoiMDEwLTIxNjgtNjQ3MCIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjEyOjAwIiwidG90YWwiOjIsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyNTYiLCJuYW1lIjoi7J207Iac6rekIiwicGhvbmUiOiIwMTAtNzkzNS01MDkwIiwiZGF0ZSI6IjIwMjYtMDktMTIiLCJ0aW1lIjoiMTE6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjoyLCJraWRzIjoyLCJub3RlIjoi7Iuc6rCEIOyhsOycqCDqsIDriqUifSx7ImlkIjoicjU3IiwibmFtZSI6Iuy1nOuvuOufiSIsInBob25lIjoiMDEwLTQ0NDQtMzcwOSIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjExOjAwIiwidG90YWwiOjMsImFkdWx0cyI6MSwia2lkcyI6Miwibm90ZSI6IiJ9XQ==";

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
const opsCipher = "{\"salt\":\"kPxk+q4yyuJugoJTdIF1+w==\",\"iv\":\"lwhvSR4zqi9BqVmX\",\"iter\":100000,\"data\":\"517AlDDHLzAoEPTAAo84zm0p5NC6M/lCLvkfLkiiflTEH1bvI/X4T27VN71e9DojEtTo6+Q0tQaMwisG/ZXTUHnjM5h6PPgsEsPc8BK+ZDDD6htn7tHADJiuOgUP7G/ONKQelEqYwLHU07U2LPmlR5D0vtbU2QlNAeWzzDpVUKMr9gORR6lNxRzvA9pQACZtVSQnxq1pzpPhuSVt5vd1885sX5E2FLZc/2ZUyzCzjtMDMQlm7HffPF5Du9sjGn7gCldWqREHPe+/P9gNuw7Cy0yTz+NWdRi6EatM/KNJH2V2lH5vOvJ4MjJrJG2owTKWCC00/Yq7LClSMDLuuaavXbMhl7EUdgpIDA/W0hPMB/tOuqmJOlyt37WOhHUHHS9kMjLRAsGrXTpJyNXSgJ/mKvEANXheWJdq5uFDJ9loWkxgF8f1Y2HzuEsYP8HUeS9xsEIPVRkmR5IHvAh6PJ5ryeSQxWHBo6WFet7zCqV77O5hKumFU1du0mmqyL7TFYwLoy9hZb+kpBBgHX/kWXFGnKp4vP3lMIkkPDoMMhQ/tcjgMochrOQ5MESqzNfvBUSX81B4eScM2qCR2949JIOjhon26A5VLo+CBOcrDH6rNh5kL00b6d7F3ae1Jd23LT6wVBdilvKLqTq0eWNF2vh4x9aXSc9YeVRt2dD9wv71BHmoIz1dwW9Oeqzdp+oXVv7maJ34B4KWQ0XudWC4k7Unak/TMjH3XuNVJf/nc90TP3VUw4/+sVCNxXiE9byewlKrH8gNRlzHVIfh1vNnnhUpubUuxxbhK/Xfmp3I8yQQEnNFYExwpgRloyEjlsimqv5M8OWjOUR3z1iUGhMVdhwOB8Pz7kVpUQ3xpjT3q6qt02e82KOpBzTbi2TuQiv156TrQy/8UQwHlBQXIv3YJe17JiVYX5fWJ4DLkRSJRKgKyFKEunrtm29BJNk9GsktByibtjwcvcmeZd/8idNYVAdfkxjJcSB+OBQl53jo4GeRjKk71LOV6TVDX1TV5ELv51W9B/lyuSPLgMttvBk/qQyh7CyXg2YyF38uKSqtXSNTmbF/ONUEwtvGVt+KF+BeDLcxcBlksqI3yocgMpWkltCsPNNfeeooDAheto1Wd9JKNWqpU2R+7bgduYs1wl5o0PKznO8Dib5JvHe0xLhYIt20tDGR90sS4yOcAg24YcUcIcUHNdeyW1m/QHmxGGa9biC7oh0k5dRKSDTA59aBmzSD2BYPYJ52/Jyr0SfoanoB0CpbZwpsF1w5Qts1w+N7FM27S/7oSHqocraYhlGhJZveGmCkEiw9LnBtdOU6+pz9LhQd57nxJT9Z3TTI2PE1sRg7WucR8OgoBKqi0pUwALGiH07NCxVcfemRSWXhb2HE+XaUOp/vwwEs8r7aKrkHRoJLg6l1XOaVfEI6J5ugRiMSsmY7tdHwKy77nByR95/1DWk+SmW5RsM5dLLbWpFXIBqPkq7XhVg03vzVstHc+VbYRTe+zIwaqf/x06aTq60OIj6hGdwk4vUObdrwxSLqZbVHPRLTf5JAgzFOpq+aAOKvHMhK6htbrLl+b6l/Yq0cBwT3DLXXPbvdK9H/2vz7y/AuDHboBKe8I+PJTpu2YwajWl7y5MhmqsXUh4TtIW/LdgFzveRu0GufHlJanoTFBEiTf0wfUSyWYfGIXU3MWjDBCqJDCS0SlbUhKZ7UXuVlo+rkoCSIAayGHtGWdr+G7nEvqe/0mWewBRDUlwn59fhvg0zgelK29KT0+HstfIiLDwNZLR506BBrFFL7ccJlDDccvdbgFWVcJzpm7YhU6PNbK4HXrOIH1shK3rIbHhQVZNT2/TQwoqlLDjYY3XqeNa/1ipTEWliKO7ESFRnzYIp1r3jMITAVz9/CRI/JPxFeJZ9gof1jAhEkY8JYfLxDQzevimT3EuvT+oivlf6Ayeg8lSXCj+x/xrivFECgs9wxJPJS0gDEapbfU7o7P1VNjB/VYFffFTwf3UKcUjVpBPdMqXcd1k49pioovMN4zlDrBzsa5lj5CtKferscqXNEPAPwkgCfvcep5Va8ybKwjLgnDGjDFiLtWEaaTTqfkdze5/v1kZhgrQM2gJo42BNuA+FUYGrhBkaoP2QL6v44jeyJzsKWbcNcbiYYyFVfk8SRZw9Fwl7w7M3o531SHnI8kZ+yNsqyFgewvlVtysxLUsUJ/vGNbCM0PMVXp/eAjw9fXk1m+o2D6b23DrvKknbeqEJstIEigP2zHfQceVpVfCmpBesRaXjbEko6yuXSh7cwtHomiIPJWbKnwjyMJ/7mFYqSa7YESKXssQmqqRqJ29BTIVvuuV6fXtKmUZGLA9fozKvxotSVhWnJkRDLk9smdNxKio6YU1bCZB7f/vslPAq8slcpb5BnPgGBLjLWS+pOanODkMRMINCBZh5ggxqZf5tp9bTpEz92nhXlw8AkEyyqa23509xh6AA3JBGjY3Dir2SVtXBPWzgxJR/n++E56lVBp5kXTdoaj9fQrh/ddo3THvtG5+zo4P2zl8fZYzZbEInn9PEAx58DXrElQQCkqWSiG6qrHuxMhoDS6vpR3CGVPnT0NxbwNLYJHRWs5qlcz36JEyuJow+VyVbkxq/N2l7zw88g0pRiuEXgr97/z5BXfzWQr790VsnJhp2EmGrxqpIbHLv0rElKOJhBN/g2zrk1RZsc7cx2lpVE+ArDq15IW6WQs+QyTsym0DXsc/V4A10TVx9OIsMGMDTN1NLHfSg5A7yFny1TNPCjIqwBHEvr/qnfEprmJSgATge+U+bfXmkk/g3kZZYpOJWYj6P5cHs2N0pRmA+AVaAFib2D0LOrw4kV+romZJhj9tGt7ds8aMF7M68VrUVJfA5Hld6ECMRrfVT8VC3f6TzHrQqnuf36dQMU07Spyljyj7T305U3tP1de/Ic+kvoXI9Y9h7NbW0cbKLqxuy4uZ55DmZbkOykzyhycf2L8qmQ9XdgtO/ZpIhBkoajBDOI6aHYxc02nTzPsNojEMj40Kv3Vg0zq/QwkTo/tDqC7vRHNyA+kNtxDkCwNwVMsciqOQIdb5rY3Gr47lLyRobQaBJruo3HilNSb4edBIevt68gC/k+04Lsyho0suj2/Yv27sS93vvU12t+B2hXpphZ8MnxdJY+ZzV4eLYbJJ+jZ8X7tXpLC0ceIOVwTlUQyeASM5b/rB03oJemqzcXoMNPxt6TLV/ofPOXQp+dziji01iHmuoXhWmzRBDtWRVDYeRRzCUoqQATR7tmWRvrJM/GYxTX6JFl3KmTcpTqwlTNgDFTPHBC6a7xwiYPNbhs/8LMGD3uZghm9B8USQ5QOpV52nuR9I0xk3zAsZe22DiPshANZEw+cG+aAcLXKliqO1jQ28S6mlwYjboWgPmmafk/8qEu1iq7P7+Q+bEE5ag8QWlD68885dYxwEBiLoKB8lZRh2oLQgsQhO9iGDbaA1M0v8DYabLxFwdXp2dv/i/FytzwUwzr3fHrnvrY8zD7uvgoyAFxzEm4NlizqoAZRQ+vP5zA1AVRYpHPLE9R9gKo+72w6idQaP/B420Kb6UO9vg1cwlrKD9xzWY0Ib44e0QV+Loa/RMhpFsLouIRP1eemCOqT/tK9R2tnlynsDatKm0CA6d8NqYaUpCWWVuEynYO7uHHOioG+QwH+b9RTgwhfaMmJc8dpTTvu7vEooosGIYxZ5xoVYoRtSns5v3eY9ZHxIpOaH7LTVFMBUXh8U9qBNY1YX6wPIiTfQKW7vixWj3F8ZLIjgso2k/coOXRZDvocv+MJj5aPsRUZR/GI0h0OwIJuV6lLAYqIBUftHfcjvLrCnvOkQiQmpzEC+B0FcHrPIKpck3viKjizRPDtIRXJ9fAnnRN3Vyeajm8LcnoIwVICMyF9XHv4GNO4qcxu7Q7juWJc+2JqRiCHXjzJbJzli6UIKUjtuzMxlHaXHClggYIznBlPILPNtwB2CJz0u92PU0VOsRvSmk9jtiu0c6yGIyiWrU+QP/Wgh7nCLO3WquoUuZYEvCe4twGLsNU3lc5RskNfNiCiBzJH3D5slgY6clnqEbqID2y6/Py5EjMHnUQohwWQx1O9Ox7RykQ4RUVisIMla3peHZGxyzys02U67v7YzX53bVPnJu3mes65BXCgzF8osO2ZnpZsTT/RFe9+39Q8AdkWYWiHMwJztf5RXYsHbgyqR/Q4KYa052nLHVtIHZzFUP7EmjlZ42jwemzu6jCHg8P/Jsuub+2GwmKrZKORrV4YXr5NH/UygPGiwUpuR3HbRgmD6jie4eK7UTVrx/LswI3K4TsI7RLI3W4G4r4P037/KZhLzOR9d5r+6+IShVDrTnk9W8VbcUS3H/BOV8t4kq0vzUSglyA1YqzNFo7LyXg7ZUAYLJd9zj2V6RXqoVB/JjSn/qbRCySvLwOsjToYZ+RpN1Jfx0w4bvSVxR0AstwNwe2ok762wHcAs6LKJME5TGQgGnKlSQI5cMBItb1+LQJOX7mgfrDKO5mkT3g+8a91myqMqfC947isLgJzy9fsj7nH7DlIsTfJNI3RzaoTo54TapNQzwiVB/kuX5x3t4TkHqwY+d3bA8HzY7Br38gIWaB+aLCqRsj4GpfwsxoRPbOutU5ouJAwWg5F2ga+4ugG7UW/picLC4m74AvsrupaX2H+KZJTfURIHOZrWgzw4fO1dHQDSLB45LUinvJLlL0VG6A6l1+PfHsQcsdS8K6L9BZINeReQtqlRSiIrf1xa1u0bPxPJiDsL3pquQrIugCNh7RCGw1bRJVQW7Jm8bjhOI3lBtdSwxoWsf1l4IBsT98Ub/C0ISyhu3mbK3OlpAjPGHSFzhIAMDvGJyDa/0dQf+gmFmoYzEoa/7frUJaXT104kNvW8A8V6OdEWVN5mrSsejpuOo/B8LSFa7sQCjbOCo86zhBurBetaYpP18+xrlJix9zHvMPlBBIm04q9HCGMbZRGkgWzP6aRxL8wX1C91AZmWBKV/vwWpNOBbmO4jpnCCSPtUmR3cI+kCFlrJaS073FRfpwyXHJUXnTSYAZJyOWkFz9vxqIinhRhoIfXkApdeP5CaUm+jElJRTb21gd2MTDA+RRqeXLZBnUUKC53QNYYHCUknxRA8vDsM8DfQHww865pE2FmKqHfqAGmgtsairZqPdMceSwDU1TUZ44Wm6KIRVyjk9IzuNEfzy5dkw5R6Tczcj7CMWoNwPKLukighcuX6FimDAVmOc0QQ6dsKxRmWqKU5LYTHeIs5uQ2hNPuNqEaLzNmLbMoDTj2lsUwxjEgOeJc7ZW2uyZ5sWmVhiH8RESBsvFChhpPhsFwrnOJxAxqu6DInD3YGhKreuFMjd1pcxxevNRUuXMMxTBuh5nzeFxGXeT2DJZr4tFNhtm/RmuyCd3R1cn4xuBx0RdBMIfyRd/LdC9QFD75vGkW+Bp3yQoFpUuFVkOM3uXlSxOGxL01G0rrT0we4OeOwoVkpMGVqRz+LDtrlkbR8v9aUTeAxYhzfT0taSM8Agtm9X9vE0wXDkiVtcQ4Gb/BI534dDfOd2RIgWV2Aq3MFkjjnSBRVRzp6lbODjVFdZLH/yGs04MHjzzNtjt2scu8h2LPL+K44kV1dM+fQ4w++7pzw4VQqMZpjQIPWEa2oQYQ/N4cH9t9sTw8yMLGXR6Dv7eHnLMFOTQXhB2viPjLnYpFL+V4SacZcSO2Wo2G/gD0ciBjt3Cy2bb8z55rNGenhE4RiE1VRe2I3SsYbLrW1rdJesIvEjsKNNlhg2CINIpbkh65YSjo/b5J4C5V4P4Acl3UAsF3aclBzV/A+fniT/+XWgwMwsxJN++ODYpNY5nyWK4W/bsr/bvKkcE6rIYwBc7NqrJTbo7TqQO9ertneWEcMmNx5sPYp6ypmItCzg2PwwK+Qxa0K1dquxZfJ0J/QIcLoWl6MoKgqUNIVq7sl1FsYfzpcS3KvZaynJHyO7GiM04rT6/aCsbqg4bm9/sjvhsrAvAVX9Z1XrBo2QAgPuM5o1753fYTyfHASDD82wv15LOKnc8wKxwumPWPlb7+ZIKoFcDWf7VnnTI/bNCEQSc0Boe+NGmH9NcAn14fLNhdz16xuw1O0kdW6oA8OpnTYlnHJ4To3vwBx/8qpVgkZ0OsJ1wlZKAs7Kg00GawzOVngoYLeXiGIz+laopG2yC/szj8yYlOhYWb2S1Fg/6fBLN6R3d0OfSVltnapb0559gZ61v+0EzmoGV/+WsEsCNzR09d2GNgkL/REIDVp9B8hXuTy2GgqZDXEw5NQU3XRbviGissX5utYWS9Xfv63caxZd4Mt+ltilMFMnDe+cpo3mU+A9j/WdADThuxdWUy595KvLKiST0HL5mYsIrA1PD1moe4N6JTJNm4rU0uCoNOi4LqNCJzEinViTbAri35PAHz7XS4VijrdrUTLRV2hqgPLXTPROCKkkX+c4aLx13NPpMc/MQzpqVR6Ojf/telGE4LOF6ORjHq1GfTysYrrJpRmNPqMdGTgHoCsdH9YRD9xa4cHG3X01up+Rk1h9b4cNv7gy9Bu4rZVTy0qjljXdS5YlLjKdrfKKcWHAyOqkoDf/Kl4d/CjSkRfPQiVsvvyyyKcwf5hGycFpCqtBuWUPqwEJCggpc4cZVsnog2D3GG4KE4NxLC9oSWRi+vmBitox34mWimTgGVFwRQWQgyXhOxj4H9TZRVMaY3MDC6IXOPTVjj9x1h9cIL57IB+YhUYPI71JTR5s+IuhxTe8YzlwuiUw1xDy89pGOCaacUWqHZ1APl8w4/qoB53WliPDVzDIn7KcfGJJcQ69HKgsnfT7n21RSNrgTGC+tQpr/Oi5Shu4caNz3yY3Mfv9oiR97ToVevTkDFDWEdDxrBhkT3OtrxRQ/7PuM3txbwnM4bP1BEnZmrGNRuxXm/9cy//S2OSfBD9rbjSg2kO74VA1PNkMsD1BVhEAzOGLLPf2Tuk9xA+taVxhX7J8Xy3C96kKVw0AJp+5GbxtswpVYr0T1oIb3tO5kYBHl8J1jic2UTA2fKQ5hE0Bybr3UQOkhoZiQtgb8VNs/tw41/Vv3z+bgZyqsYjKNPZq/MNZNbC3aPd7bsMzCJC+Gr6MnBumJxCwgFVe/5WkBIaMdQ8qpWWicuaYkQx3DsH+jyOoCBMy0KRCNrVmlK+e9fFF83AsY8M2JqhCXf9hFcbTSH4nKgTfqK+tAApG/YHJPg4CHDesAD5vvj8mJCnQyplsPoNt6coiU8bljqtb2OVI62gqJyFuedbQujyern/Oics087bkwiA3Yi2+Jby0pjO4feeT6Jv/KqznuwnAOlOvUmdPdQrDGVjtnjoqraHhmM4LwDzui2ZTigKdPfj06BxfdVAp9K2VPpwOeCwyzM5X1JYZbRFz5i35h1L5/g0ZqvNhJiYqgFBBgGdPZbcf4/1WyZUaawWaHwfszZ2ogQvwZHdh3c+wSiKSgAtTq1Pj+j/AZ/T/Ro1uau5QipB1BtJmct2/X1U54b3LJ29iXFtrccWGMdVC96cx3jXJbcgbj9CPG0opL5cFexppk9SXm5cPT1L1JJ2SzrtnXUbZNR+1DkMxPzM+wPOcMx4JuxDe88AbGAx5iMUjhJA0lad+hEh2I0ebwmzIrturQ/eWrD6g2Ffo4wshvMaThOGFJBGnnPqsNqOKFLOoCTYu0osdwBFJBFwE8E5v+rw50yoGXR6zrqPqFY7R93ThQy9qsHc7TJwNGJ/Qikthxi4aA0X8YcyNVrjsel4A3xMzCVbmVrAAJCCyCRhjcbym/0D+tHCVB7LNqFy0ve7UBP0jZXLrcyYuuX4yQ+MXzOWEEbKk62tX8IZshMe5BQsU0Zk9htP1EuvZGGB2m14YR+/EduHc7EIdTrwTacZgKEMutsrZIYpIBPrPfoelG3cFj4fdWMDBvxSERbACb1gYA4Sp2Pdm0gwNxqIijdrFIb8uPc2FpIelju1/ZDZXgdORggNdhxxJZjloxWFD2mZwlG/uJggVISGsquYerj/hUHZZWOvM8vpdUoZOZgHJ/+D4QKlEBAy6RH15fUO+8fgMkKkH3BFfIqJNupOj6K3EkgjxhnQSmTKDXqnEGCJKyFX3h3rQ9KVyvxjnY+7DdvgH7fX7QrJuSEFtEF5OAL5sNonbRE9Ma0qRVSPGqXbOPqXeWRfzkjmosw3WHI0Uy4LvCk1/IouWJTaJvus3yRv2NKhDEp0GJBzRmGkD/TDcEnz7wAsGTF4BMCPIBXbiTs5jhziZ+IRsql+kAS/7OCdZMh2r13EvlIa9pwM/O9+m5WbSH/GkczY3K4N+yFMQdnEMPhre8p/25pAFV1/xjLG414HVyHnL3onuVawZccm+dX9wVfCVp/a5PrCQYrKWtlllpK5nHGsCEWWoRnFpint6RVAfvA9T77KfqQQZ76H3boTPAO84Gpd4GrKX3t/9uD3Mjdk9ft9mysKVJfxHuoPi0DdvHV0OeTtiBk/2Wi+CptEmFrY9dSXlmcRg9pI+RfFbzGgHALmcRyvTfpnEEiftMZ2YaR0UbMlbUxLaPKPNT9avuuyGQ+aUcdU+dDjQ2BxEPzMdZaZ8ftXh7A3PQc3dWidcmivQc68O2L0ObFr0kzxvKmVgQTy3Kd1UYYfDO/c0upZ0exYi9XP4S+PAI/felhy+Tdnu3O7Thk5W49hEAW1I/ikqM/j03EMz771WEKhhUh6qhb0Gvt9Mzt2dTNHe6hII825aEVq790ovxdZ4ulp03Kdin4k21XF6tX2cUzt2izCKgC2J7xlbCtBbrjEn+eonIT4AnfL4lFcbjALSU3XCB0WeC21VbqjSlFonMetrN/uQpQ+wh9UXm2v+AwKkoHpk3hFe37/tobn2uSNtKItWOpUzppfRLecB+KzJKob+5W2zfz6XhOnnjpWCPpTmG2qbKeXR/LRJAqKpK0UxDC25prlOUqoek/PeYinH7YvsD0RLWQreTnhJcyO7dBV8DBd/afp3WMrZalfUHSs7aCvfECUTJ7mKr1PKLgDSOS74h0exs4J1qYKE5zuZtiqqUypZWL8mZGCGBzq4qbCfb0egdbQTwUpCCTO5RI+tbg+ZyB7UDkoYqHi/ujZOUouu96gwgptR7OnKuMn0uykKx8ywK3hsAK5IZFA6saZ2a/c7YdnWBEfLw+JVVyzMkH+uPKNT1EVRrlb6XhDiT3FzWwbCtBsqIDZWTtzTZv0ltztI6JB3kOF+pNANoc1p7XN/wKxMHnFYM2fLkHeg6X04/a1pWH87mL5HvUyXSK20+VQuQnWWKzEa3KOYmn6EcxRcx8SGqAYp5p9xClTutcp8GqGUk3J/hvk5PN8XZaO5YeJbdWJe/gQuYQ77vdHQiHgGvQn+HbRLhXrsj303sYRf3I8yrIDL1b3qyHISTUhzj465Eq7cRBvsTvH6igiZ5Lw76swphLwDTulUYZKc57M3yxv8RefsDutL2s51QjCT91NlFI9ffKU95AYEoXDJpNPjAbPPMFiY08cgBxLyb7Q8XxCWxNd7LZOcFLc02PCeowvSIdWJu/sFSz28WcETzNpQJVlGxzoxIwhehCKZbGfxhpfVyikBzvmFxM9jUwvPUaaJuy2xDSnnYFaM8rl+ejeftA9ygDZXLol6sDvZ53TcuEHbY0TML/VoDGxBywIXEgYIW1bBagbsKMcJJuHY58SZD5hQtdEqgQT9+OREGTiG01QE3PgrBvRBS8NNFXL+go7AHhkQemSeAl9YOeWp10xR2VSi+w03wj3i4GqTb9+MuiZLTZeXZ330tDpK4LhAQqu0TRM689oT6g4gD7GDAelyx0xN4fIIDFaCKqJDMev6/Q/wIqBmFWXNCoqd2VmNooDQn6rQFoso092/DQj+jqaakVoJmRCRYH8jvy+6Aox4oCo8IhEgGQQyXVpWMBold+PoduUQv+FDlLVmOU/NbL3F4jMDn7Q0u0sjvRHeOdPlMyl+2cnyPzfpoJCcLeXEGn6HUcRqUrVQWxXKbBPjSvK++Z75qbypSiUrl+/wVsRh1WmslWJHaqb6OtLzvqqEPzRpoCpAk6xTcmFn1HXxOUy38lccUJg6vwETix/XyHGeD/D06EnBc3t/ZenZ3JhIY4v6HDbxh0haleY0IlYFoHrGBpWUsByMGx36VkD08+Lwt302Q7UYBWq/whcH2MOCZkFZ3gBKnoXfkzfdJFT75qOdg2YwPXBhmxbk5bUwNF90R4j2goWFqYAuS4XMmcrmi8LVxeShCazYqeaggDNmZrSeuhon6DlO3PW1BbESqesp/e06282VuLLnXDP6J1FM1m99j1sOB3y6umaR7BX1tsfxf38imK+iKofNdhSUqqEEzC43m6gOzS8y5PCX8iU3kk+MfoVaPVqTT2knZR0KE581LtOcF+EsywFIeWC/oKMgXAal89V/efhx/IWuMvAdRsMipVHNj5/wcbxF/YT+FRno3Ejl1j2dlXR6IByEBiPpdrbLcm8es31BtT1y7bgm6FKtFS2VoY85zFNsZQKeYISg4amkb/9FQXtV04pqdDHk52PyyCuXFXCe2Qa9gUrpXPLf7nR9s7j9UK595bqhe2g4O3MWc7rcql/fJNgaSqB/NwC6d3oIcwapWadYVD3MqE1WPV2AeIP3zloEaohWWj/fAJUAwNv90zLCDdxKakfhgrSioVyFUlkNZIPwhHu/p01L6sH/m9R7Mrmg3mkxpjgfwJk2I8uLsjptsVn3a5koLavdk6wXuslrZ0kcbMVh1F7IRQYJPA3mL1biVRVcXuWk2aTtjIVJh8wHRkVhjX5YQBQZEIQ4qTbbUa4gW99EYbCbNONiK0cA3ZaPrKvc/oQuTR45pU7JxV1xDFuMXdks48xUQHtL1ipGKhQ/cFAj69i0YCGx9WXsEYEcVsG6pP3GCu4I09AGdC5azQBN9TBeqXiC6zmgLJ4XbVwLFdcZWIbotyT2TZSLNBRspER9z8ki9cRLe0WN+0zqBOPXUP/UXDtLt38wpaouCp8LlzI7WJT++MpHl+tJ/0Iz/aTGmjaE3CibyxrFyfqv7XAnLHvsWwU8Wp/cAxzTuDv7v6zVTRgKaWqrDFhBQ82pdZe/M2ky2jmH0cNcmt6y5/Kvs/EHdgco4kouLiklcn3zRTi9/D+xbVsarVa0pzNFxYF1z2+aTsjxdYgY4XTN+pJZNEDswQL8ohUiYjZkM9rM9GPaq5V80gt0DybtDRh4KEhhbEQU4ERm9CIPSrFmE2++BExAYI7M1PXVk5DT0ldL+7u6t8H+PyrhL8iwGC11eqPkMr5hPXrxHt9VTR97s+2dI/9PD0BUmVyEwpAI0ktxgGabL/hzsrU1GGgEDn2fXpBtOsIsYBD2fdL7XJ4kHbEnoQdPJW3R/DyQ1GA/2tVGndghcZTS4WKHjR4tMuVJtZBprNehqCN+w35Iqz2FWOokAOD2rM8DyyvGw2htYy0qbxKNy7TFhh0yZUVSo2t3cowHEoT0NrQh+5CJM7Cv9ATdY0lAIf3Er7cLBBxq4iT+RWVo1lfSQ9L0oCadRJ9X9k6LI53m4Mn6W4Fa/9MW5glvvZ6Hjg7B+ixvl7bcvTUS+EFYTArHrsxBSHBrwpAs1mTBe8PryWV7a1Dv6T+N9sS01tk9YerpzImkVsR7JvA2Lb9C9oj5L5bwu2utXDBGdIA1TvQQ7pP0tZTZ7+/h2i83J3C/YaqWyDTS9c9LCN7tUXk8BvSMxc5QfaeZovydhXciDfq+RuEbhe910JFGB0XYmbE/IwJhfW4bm2MYPpmTrEcxhEBWYltubUcrapHmfyuzSLQzmypEVLvCU5GO2aO7ytp2Vv3Bu3BoF+A+Q+L7d/q8hNSd7OblHeLKkeDKx7K5LDjc93IrWAF/06VLZCG38f0d3hDOu1G/gBi5tGfnEwoOn/8vR2ZMJUgubr+97LxtbVOeqbjkJAbC0h+UmNLPa+m1BGVUUeSggF1WW7uXrn1oNv3af9gBUAweWWlt3aacxybBg0cSBCcFqlg0LQXQU5301XksnZL1JfffsYkbeSBHIYYlQp2/MT76GP8XbieMkQNRhJ6C7mJmOlyi3Ra+oDUfVWSs8JFS32kzLEkLAwFYnxYRGAEwc73LsCZZH118FdrX018Y2p8uhuMoiPpmqgY3h7Imh0+0vRCKFVfAf7m/NNtfehA+FJmMnSOuptCaNV3U6od3eMjBRC8B7phglyXdSnd3yCNn7kXpO4hHOzqDRf/cdsppbQf4jn/DX02SVhKpivVdYlhWOSObCLvD2BwBkdtgaX6L8OF6A2XvKmArR3amEhtOHc7xg2j7x+HoaxL7TSYdirVzijcqf8RLfHhUv/hRS71PioRCsZ/lrt1VR1z3vZR1Pqgr2ghSCNuJP9jPqWYdarl5E/+B976i5Vj/caCh723Y1wSR3QDOmq0MNeObbJDRLVidXRAFts7lD9QD+IwfpKx7rP0al+ZzTi7tC7PHnXV6TbMoBukOfzLkwGjn/YYYeGWdmZqvupkumnFUiqc218X82xKTfN7G6WEVhbhLiF45K04YPW/RVyYGzEZisfagWAIfNwR8yKQS6WV59f2e1ExWFhy/r0nLaRPAob9qVeqg8Evxwgy0//saGAVuu/oju6T1K4Oe8WrmZwESDxSkDlmnVuoakZqkhQepNs38s8p3y7ZSp9Hgp+ZLCRnYe+06LJXWuEcRGfTGt/8ZlyTFYnlQ9RWnZq3s/JXASSh4RGKfyTTp/MWT2zXnbib7QbO3brK6+xDRpMFar9iYt0h3Q+dZ8eoBSoLkXSpNWZpBSNrQfIeM1PdbExenvOL1skfs4yfVqlCn12FBvHqiWYx2FvUm1z4U57h/r0khXY3qCE72vfwB9XzK6+1LXqTj5AJY+y4eulLX1kDbjs+uRJqdMPjpEa3Mf5kJqBk009chJYLJ66Xgz6btm/elsZIqjk658U88XUugSTuhsoF0GqWEjBYwL1A1mXqmXywpJtskOKChUEmWgGoVGYgbPKERhl3F55igOQrPNwWZlGUluRetG4c/cPFiVqc81bvVWuDgn1oA7PSAsoHKUaslJWy4leAB91ai6/5qQwSh2BzEANlVHhCUu66Ezw+VtH5lm9q/Pl3E1pH4iB5Wb48klqboEUDsmBWpYEaZdGc/gToPnoPxLv2rHoAtbnfDo4zewT8Tc4CPEW5k1qc854q4c52AgYIlMSOjEuC/Pv/eATLlYPhUly7Lfcvw3bcHCLI+Wsl1PZ7rVNgBDIDyb8Ujz0vr7HdlAlr9VwIHZlqo6lS0WdIl7mzRy6kfLaxjYBPiT3x9PmpxP1Rsn6WGc7t7BZv6Zy0edc42OAqvoNBPANnRcC8jHvGX/XeCCwXdCLoliiSxAGHndMMpPIlseqN9V5acuORey0jmnl1LiXwggUzDn9k/mPtG+Qm9ExErxix93ckQZ4GIFQ5UCXXDJLQjVXwc+CvXEPN1QXQFxSN1eNzOlcNZnGjXI4YWRCuOo4GBnTxyzX2gvMB46XrvC+l2CRvm7d9Q2wX14u8qmjR4c3gSDZSA6OSNlyeKKQkE4l5GUi6+spwhTEEL3Ntb1IV37WV9pQ2C4Rxtw9I35Mnx2V95tAbjmq6f9gkvok5gConjcM4WjRooIR9/AFTvqs6Q4CqKlxEmDlmN29sTAIYqpUE7+HAzjjDx7h0aRJz+LLdCKz/VCiO2hGzkMqEUCdeNZ1+n8xgMs4BuJeRdsU+KTEQDK48xAndAVgGoWIwqEkrOfvez48W6UJFv/+59ZRMXc69K3kR8EtT+7kYa8N/r35tkAaRcgwJr+lQEshGo1T1mlRT1gejrL9DmnMjtWGRIkwX/bgxI6PO7dyLI5udS4GUYDCBAok6Yxg8MHRqAv+JSi97aO6oJXo1M9wYIcnnNWmr/O9DsomZ2k/WcyviShA3BTa3JT2ygxZpq9Ux3uQSX0DxVfNbo8mYi2auH6OBZ53C6SQJbbrkB4hxjXH8qNkdZJn1E1L8ocd/Ma2w4whWLBt8rzry3ranprCt28d4jtGUpDmwdtGkJP+X943qf8zj9OtaHpv4gZqqWPKoIOIu0n7Y8I45eUf5dzpGFAdqCJGnyBS6MWuEwYDPBAqC6oKQs1bGwrvth7kXb0zW4DV2VJ4JDO+MfhHGIG2nWmdx22UW0GrG5Dvo1tniapIZ4EVoivWU6etw3waETnLhDUDeNQNuPXx3UZzct4ilYbVT/zJ2eJSUKtEa6E2A2pBuyr26d/BKkCaSoTYJlpt71Lam/my9rHqGP2AMT8UbyApo2++vsXRolSKIxrMoVr6VV7tJxqRBJTkW/IlJw3FLTxT4rDHycC00HZ7VTZRT1la1P0xQWEWi0zN9FdgcUF1S8o2AkP0zyaTdAQt/nriywN+W5I7T+MXk6f0n0jRcPB4xO1gV8DgocHL7Dop7mnpH74wK3b3aZ834TSs35UFzuNefpLC8POx+cLeecubGa06xjm48EBkyhYWRKtb3EQMYbC6H1Hy1p56H/fPLiZfE5YDX3avwDU6mF/r5/GZZFvjyWOTBsO7nRN4W65a4O95oRrSj0YvimSAG83XOAqg1/xAt0kbbFhfHBs9FhTy/UaGtvDzb7jc5Ttgqzdzn+89ENln6qsj+odO49Z2ThzfmKcoHW2wykWLXqbLYlypm2VwL4mo3wqFjjez7Vn8N0yvi3WrfU839dBH6TcCjktds4TvFIp/D2/Y7naGRit56C8YIvmWnYXUjkCnsf4UGxAaIa8Go8HT2uKlfLekKD6fKPPsdrDKH1F+qWO3Z/XGTc9gms01rf2+sOP5HYT2bmpvRykhiTdxmUzs0z4Q/dsJdn8qCrB2EBpcMqYvsJEjrdUpggorkyXoVhnIQL2A1khEpQyl42rOOW9WUWVYHj3oqt7lESZNW0Fo8GGlU1gp4Yc8fL87zB/KB6Fo4vxVvk/mw3Gxk/oWYMhsPquSRREzQnuLbwfT0NxfyBvqlACDH4DdeuBdkR3mhVNLAxHUZs+uNgYxDg1C+I1se6VP9MFI9BrB8RBEvK7ibwM7cV0SiYj3V5FXNQebRBfp3zcpl9fB6WIaJjUTnehHzb9v2S0Yi5lXrqy33t5L9x8+3kX9POUdrUMS+1piMX3n+Z/RWM0b8fs9tBGeEiEk5IdLo2zc4uiug8/+1rG7fhOQ9F/cbdze1f5RvGxeiJT3d8zMSfzYDhQ6h60tw9tFZV7K8rTs3JL4mXdU6zYyWtZilmPOcrVc0YAelok95gqOGd9x971kuOUYD0YjZAMH3kv4YZWbUV+bQMt8YotCENZYzuHKOzI3yQtd2iHIOhVTR+OHl/S+pP2uM3RjzAkBSB8te6om5auDPoZXCNYnVadvY0Gw0eiDFCe9+Cii4BQEnHDnmRb9dAv3mKOscc47np9bbnj+pZbs2V20V6sYZP//kYwo+ri6MHfwmahPaajIAtvJWtIEiyuB+22FeXkiH2d9uDIOK2RvZnEv5UQPM0hVrR6GDETUSpl5rW2d8x2yXsRIz2bcsZ1IYwIqIoECapxrCYoCFw+1JM+tWBDUDo24vY4WbNNBNX4iOYOOYXTiC6tOk8fmaiUJdDoubB+w11ha9UjxaSppm0/3i84dLyqbkAIOv+yQ5rKMzzA7EEKgeoH67PJ0514yX/Vhx+L/D6A82UDNrC379AUfjmFIJjjkWB3ZbQuppM2/06kET8XykWPk9VYpt6oIvWO8jGDXliTOPeh0uIs6lnp1T4QY+8O/jCB6A2phVfUHDYrcYoCQL40NoDZYjM8GyKnVCJII4hT7MNayx5JK++MLbmJ0pNl8hxRAtjK1xpx6yE7nMWGKE0etBAry51O6A/IKQ6g7o3tDi+8zfWEOkr0rHMyI4y2+0+upEafM0p52wjhsbGH7jN9dH/7B83Wh4V0zZqW1Nl68cm40R04spG9VA9xOQo/f0xlI2IhdRNSzBKKXfIXW3z8cWewRVC15aDOw/51cYKXil22uEceNdvRrKk0kWRvbDoxKoK/GmSvehLcB5UX3Ur9tGPKyjBu56b9C0QNVTSUf0P5a6QjQQNHNI/TYgOOfNb7YcgsoS1ixyqldLmrW3APUm0uWFZmyB9/Bts61cbIB3NyzHlPL2uZGd+PFLM3TIs5twNfQdAwqi4dRUXfIe8ai6DMPGb47ihTiUKdKhWVjb+fFmUhCwiGkxIkCCgD+HxWsPtI/ErWal79uQZvmmiSy1ubzHo6Qoea38aSXOqhXOzdESJL0tfWFYdag6YuzobZGVShZvYiehH+GnJSXCmReH9ByoyQWX5a6R547l8QnmPtLvE4lO0TZKpdwpbkOxaKrx4tL1LSHhyTbdnDPUa4gUon6g3wbJh3MUKHOtjBa/UieWklmjAVvi/5MAye+cMiQuybE9xwU3tyUOzhvGGgchRCWGQi9KODYhindqXOlDPniIfhl1We46+n+7gZtFkJ+3ZkL9fL/uHgA7vlXQqi/nfJfYSIo06SOkUP27nl1mlE6uX7Yyw6FazPd5HdgEs9RrMDix+ffyzlVtZNMOJXL1OMig9IA8cg6OKmisOuSghB1GxZ/nHDZahTE3xl60XT/Of8bwC2CPMx4WeLIT9UmKU2HhaHfxCmZDW5k7jFqrPL4dadfl3NrRvm1M+AAqnbQCxPRy1QJ17UkeUmHldUg3BL8D9boXZGdSij5aWlWs6i/JydD34n/4mZE73t6EowDgU/KaE7Aen+QK2Xjgps8PKApFZ3O2rwkF4k+hjs37KwsyBgT2DEDg8aMs1RXdcBJDpmFtC8udl4KtsZkzn7sQHnebR/aoHzRCGVAdgwJNbLX1wo62QPaIZMabBR09Ho01ATdrENEVSSkz39dq1zBaRawYW5rl6suTvNhfs9/RjdQa8DE3sq2pdv8s7P+stduEmgb+TMJWbEY9qj9vU3DoBGQAaqdAi8i8QXMvHmvXntva9ujSbXi75O8s14ktb2Oy2OHGVW2/X1V5W0waUzZnn5yNlutbWFwpLO8mAZMG++VhUbYnMtV+uptF+dsNRk7eg8FsGsf8YT2SMtNz1SksJo8Xav2zXPOHbsV3RpdM3UYWZETRlcTowWEpHjg07b/HjnjljdNPgfrqf1Hvfx7DlA23k5LhTFkoRAn6gb+eQg1HCJTqFr0/kJ7X4Rxucg5g6LNvaFN6AsXl1fNDS3yTr9BmjxK0QVdvyVQOM/yJb6M5kPF5cMs7lmxkS4V1/fPHJ6lG3Fk3CRmhMS0ql9JILp0rGQ9+E1448wPWlpU6nuUkyxVYIRiwz7MUVNg3W9HZCZ654gZkMwns571ZZqDXwr0IqzBn+KkgrcZ/mOEISt7vVlcnRS1plwgeJu9wrZv87gKOWOlf0q2/TJlQ/X8O/kI0KHREJSP3+IrdUpzuRYmuopEOoee5WKWRZ2xMW105gy5bBOLoQnJeSKcCMBTnQk7XwRl2zZlGvS5i0LrZuMgHgMVLi/enGT7jjYryoGR/tEwyaYU0TolKsYyCL/gZfGv/l/3AFmhysY8YrHlpwhtScVdSdXXkAzttcvJdzn/k5ZyrYAc4DS8yPyMyZbhvfbG5ey2Bw9utud7AiT/O3cE6/O+l0lGVPyPsyT4KUMooCq/zaCrZKPmy9C4Oc2POC+QZnpz0s6/XnUROO1grfnSsFC1ARC7nroCL/r/abJppf+2JIaXs0ta3YFYpgFQ/rhuCyZSm6lqXTZWT8dGLFe58POfB3bkfBS1WcehxHXLTaMiNBMZrWmrveqWN/xp9lXxtuhQBNCTcgC+We2hF84iJoUpejzrJ5XN7j0H9Jpg4pG25jSPhe/6JOVLjX/180jqi5DmbXUaDKVWbdwgEy7rMyTZLUahHCzcTxFXBqT4vx08bcdDs1ObpPzsiaugF5wq0MN39oqGaXnEg0rSRHfVrksR6n4BZBbfhw6IS4VeiNvLjWndj9UVbrDy4Lkzzm6frvL9hTXhEp9+lRRuLRtfoxJxzpCp1psXgsHpsBL7y822Vqs0AnnQiA2IPnAdeUiyM9+dzn14mKJoRe5BtUll5WCrSbX4IWupBGk1jgPkkahYcrvQP2vt5YberxGbEVBtjK/IRgM4dWEwEnGh6N2FrJOafnwxsQVqmodre+oU4LANC4OIJyxmhwWLBoecIn9bXu3ygZ/xB0L1SLqcgeM77ou0PLT2PFbaTjbxIJAF6lU64U+uuZozOf968B8ZLlUpWNcitqeVk7rJ3PsZPxdBVjyMqcL9/IH7PjiFdvUbAWMr5DEEOo05PFoGpWHI3sfTDw1GyeZce3uQeoOydkRVRonTJyX8vEeCupux6l7RfWucht/8BpttwjdjyovSfEh/Bm+MSmD2MRr4AJJ1VRlGoTE5m8VycBhLxBTr4sznp4Iv+vZRpjHj1cvzZN5IwDCG7/OYoErx6aQK9/VPEAwEjvMSSPjFhe59NKIb+24JI6VRD++oW2ZzvKN99gL83C7Kzzu3S+kdiuM2Qggd6MsFLBxIILaw9NAmoGOP3t4krLOEv6BzPAH9xcGuoKTw38QpZcnjfiMsHPfH3WIGMLCPNW2e2OZYz9wYWVbmXUjOFIAbCMULEQJIwdrEHXxtZJ/6dkvEXPV+dgCiGx+eUGMhvqBb+MGjJZ6FT8gpBueUk5Onom/WH+s82JxGE9364OWnqGxCWxAJ49Te+zyeMbw6j5z6SkO4H2e2AyVFlM/8BBT2tdLr4DSo+9kGbRET8N4ZkKdyCbc3yZiCuJioqaUUtsIpDYzbl/fIV3T7s8HmUvdlY8pbZ5q+9gOLndSSQ10ExRm6cdG5yX2gmKCdLn8EhrTDlcbSKwQ9koIEEchTOSvlof6XLdl0e2meAJSxZCuWqaDuvixnV7EYSRIzdpRITqY+AoKuWXDeAspC/zBhzAcHSYYUimUpgGcdu2urTF/4WWQvJhC9jy0olyTl+6BkpDxeQpI9DlPYMYhTgRgGIU5G5u+4cCQePL82AQ5yY/jtA7VpUZ+U6l6DlINaOysIGcJKUL1p5HzzG+OA4mNds6H/c3SFhVejGvaUAPJ8GVhhTdee5eoSLPOFJFENKi2rdq7enlJ3kfRbwkgdmR4Q5x6h4zVwA3wQ3pigApKgLD0oasxPew6wHyMEAV+vAKFrDkXsqfMeZJ01jhslMD3w25PG7sdCRFjo81duNI1Ymwz+l9UfM1A/lvFTmCbVgMIft/oMWw46AaMGdvonap+cq4VVlMLF+F3jozhCxDH5W2Dw/58rNPhJsu0472DFDKN1EYDmDBbtRkHFsc7iRdVcwDRrI0ls/IbmYWomr5fWEIg1rueAbKsVuiFCnn+LBG5Nu6qk4xuol8eOGz4l4xBUD8N1eel/96KmjlNwUhLFRJkyyjbol8B/hgSATSgYgORz310Ly2YNl5GeMHsJa3ZerSqKs1g8Ob2cP3Skc31TzC995M6D0r74s2lEQ2F76od70P0MGE3ZT2ok9kaIqQ8Gdi6BaKAdbOwg4DviY81Ssa7rTOOSk6EuJRJTBbe4ljJlLEaTun7vInzPUJ7ylqXffWc3Epmp8irNYJzigAfPn442Q0P1QUZPG5nzTSSZMprR0tYd6MxWcG0ISkqceieF+Lzbr9wCpg5Vd436p+JbKLRitisYl2dGfP95pzYiS0TQN7xRAygfnSu4lrXYqQ+Hvhr2r64Zug5N1uoO59n3HnWZ5oYaqx9Ct5qkVyDBy3XbMPBg9xrRWstFkw7kfGZr5veTrbsoBuk3OKPztDhQ6W+2FGgjCSdwOO/V5OWTk8EjskuftNYJ9FBl9IHLdHrFSDPtaZZ1OIi1fUnsyHjVarA2rQUIaqRc6Uiqz/cbW2x3rV9VDGOU9zCG7sYMyuybZ4N1+FiUVhxYFTTn7HnnGSMYCf1w088diDRTUgm730wCXr33Ah+l7XbKt5tkZ1wAzN2nZuyES9Iubz1q5+Pp0kPq8ela0Wues1KEmMjT+ruFfAqFnxbAgIHVjTYzfVulDV2hD64giRUB6zRUGnyRj2agdrc7ej0wVbeEJtTp0V5AoGacUHivl6Av2seawAd/rMH0HAqWl6TlHhlMf/GzRjWpDj+PH7yEG1JAxUpmhcludclYyhlAitpl5pNX6OU8GlncHb7DLW03WvRARUoVjKN9g2sn6B+oHyLaQ+hgAH4KG4d29S/cG6QZ1oAlLJrXDILQs2bLTu1kHCKE0JK7ThDoKhjlr4FAnhyUMtV9WSY4l2qL3aFNZJkt+q7xbTAygLKcNsSI8KoX9cNpc8YhO/xHm7s9sCx4R00G3uAnFnGehB075b38+GVziHn7uvIjX5t0owmlyuOdsGjITw5TTNG/fOOJF3UCMn+binZDNuiaijKWVwjRsCR6JNGtbpOXKMwDXV7eC9vCB8DB5ze5zSALkab1YtyUJemDGR4xFDl+f5douEv34O0aV55+MqJpJuZjKKo3mUctqfQET476zc3gKlWF4kg5dICOXGCkAhGb25PQKUDAfBzCwdUYRLAetL0LuIzHDGC87medvDiB+3EFZxnVp8qadu08tE3BngxsTQG7ajmsjkbU6MFd4Ru3VfQLKCNw5PrLlKKVTERgJVrdEr7wuCP3vMsRjnaRg6CZtFdb1mULfTIrhr9yehmKu4uAlXgrIc5xicjEKCf/PldiVMIYoDeS8mqI3tphKnDtvmxJ+yakgjQpI/om0IRBrEEg99zH/qlZWQsRuskf7gsKIzacGS9L382MyDJgbGfLYc7Q1wma/cOhVLAuD+/SwnU3h/YM5eEj/EVCsa/3Xlp+6mTEHN6fT4epE1NQ8uHux6Wi4o5wtPoVEtLUJqZ9eljIFglzVM4XcUQlcT53c210BA32o6Ksn5VvNil8A01dp1QlCnauesqE0SrJupUgMBnkfVGQ72Ys3um5G/jJbfQ34Xb8cxWsgMZdHpBFXl6g6ZutvdPeGxPg91cVHJ8re0Jaxv5D+gZevw0igNYQ5SvlIZ6bhAhcKc0A/wqGHo7pMIhv6gEZYp//uN+QPb/Sl+R2iIXe2ot+Qn4ZpH23B5ofbJtQx3A8x13nJoUJg5aCNFULMqSFy61t47+qQABJkugaPslZLaLcbqYcnsNmmAv1W2gYemtAsQghktImSWUaZzIvlLQB50CFs5R9v88k0MQCfj1mxWUXDaKY8o+WSa5KHjrWnLGBnuFYAdbn16KEgjLnTQk6k7YwlSDriS9PvhsPmOj8VptDkGXZmi5yZFCI+Rk24o1bPEEH0mef8DsAr6Svo89asvjux0nHW5DGIlduYYV0uUwXiowAb9t52rmkPhOlkM0tuiaLSSQ4aWdFPB0gp25hukQPtUrMMe2Wos5DhdHTnreux4ZeIJecfD3JtREQhQfgnQeQZs8SCb19uj2E7nAsdCxn66/2Tnl9y+rS2/NQnfMs2lhbyi7gIVIkLmfdc7A8pNa3pA60xkZlKAWMt8x8hJJpQv2wC/xOepSEXOVnIXbWmv/+tJ9b3MQBxWrUXY/kI5nK4DEKDEc5QPK1rkiKbriH6UKOl/j+6RQ6mOlMv7cKmeSKJamjZj33yWpv436Hek7yz2lcAYK7nPXSpPtYaHI5eFQUO+TcljyswJqCpyRO1FsgbAYmGisEUJ0OueDM8E//+4fwRlmRm5VG3CNOcf5h5CrqoSyVzBISH4jFCq9DWTB8NVnpcy2hUUW/6Kx9I02q/x733d24ZP2GbYGqx28Eon6EV2nvAQfvXd6ndpuOtKMhPtwWy5ixzRELstqlnqtRog6lNTAtAuH7bXeveDU+dkofQN3K+ilxj7ekAnSzC4IHbGFdGdwqX+gQPLZ5GsYvKNyLJI/sekfkBHTQEFvn9gWatT0pSYbS6JLDP05kk4Sf6eXcDlpb7tim12o3xW5pZ4x1GvIBxFRRrjp8MpUija6E6squm3RDEoCsq3uzbwahApt84tYysFwWBN5VqOk1PgBFaYdoixwfZGwMpgjx358u1pILHGbvERI4YdSVNxiUZ59BkgSXAi5N8MFLka5bGkQjFO1MwqWjggNcNZQsr9kjIL2dKRCSdVLR1VDj26/UnafUbziMdlmCtar9JwCmF2wurClQXB/LIVkwqf/O4TW99mf1xECc26uGwup0ftHlWpyna3YX4vFCDK3IQnE/Vwdef39bVdJjowR4gJw5Y8aKLQn0kENn0+7Xm9n5EEjGJhZ5RTXkTY1JJ0w4NLP5KADwDfIQkjtjnnzwnx3sePj0EZb86DsihXnG+F2q6Cs6TfUk+HsYL+3t6OWYtu41GBknKYn5eVjkHYYnkLaFP/3dKSwB11+QEtDrfo7d2dDs3wAXQrMXuCyHpu87yc6lF1t1rcZLRQUC1aW9iw4D8AEbbQ0W0bZa3K9AJ1WqU76Y0YQiR6Zs7PobvKCgChoG7RrVmJ/7Z1tASGkXBTNS8Jn9K7nfJlXwCyWO8qm/yEIp8jdYU7SzCu/17PoByCE7YOdfxsJSfw9h9KIDaA4ZFGPXBlAK8c18mPV8f6+izZ49Ay8bXEY+pbAe91i6shlk3BcPWMdeVz6aTT0ilGA8jtpV3V0ZASXan2e4wI2rP2009L/RNbKc4LROdPrQpkfiYoxrqcaQb/RJfr2J9JcF69scb5QLmowJY1PfcyZEzfHc/Fwsa2pXEXdz2z4TimXSOdN/5eB0M9nqb3VW5AD7WFZT+vKhwO57YQ0jb2V\"}";

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
