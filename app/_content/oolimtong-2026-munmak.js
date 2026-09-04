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
const opsCipher = "{\"salt\":\"KJfPG2M2yrl9zC3GpBw/rA==\",\"iv\":\"ftIWXMmaxmrhk4FQ\",\"iter\":100000,\"data\":\"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\"}";

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
