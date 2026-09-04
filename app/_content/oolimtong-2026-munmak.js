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
  var PACKED = "W3siaWQiOiJyMSIsIm5hbWUiOiLsnbTsp4TtnawiLCJwaG9uZSI6IjAxMC05MzE4LTA5OTEiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMzowMCIsInRvdGFsIjozLCJhZHVsdHMiOjIsImtpZHMiOjEsIm5vdGUiOiIifSx7ImlkIjoicjIiLCJuYW1lIjoi7ZeI7Z2s6rK9IiwicGhvbmUiOiIwMTAtOTkwNy02MDcyIiwiZGF0ZSI6IjIwMjYtMDktMTkiLCJ0aW1lIjoiMTQ6MDAiLCJ0b3RhbCI6bnVsbCwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InIzIiwibmFtZSI6IuydtOuPme2drCIsInBob25lIjoiMDEwLTg4NTctODM0OSIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjEwOjAwIiwidG90YWwiOjYsImFkdWx0cyI6NCwia2lkcyI6Miwibm90ZSI6IiJ9LHsiaWQiOiJyNCIsIm5hbWUiOiLsl4Ttg5zrprwiLCJwaG9uZSI6IjAxMC05MDU3LTc5MTgiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMzowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjUiLCJuYW1lIjoi67CV7JWE66aEIiwicGhvbmUiOiIwMTAtNDg1MS00NTUwIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTA6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjoyLCJraWRzIjoyLCJub3RlIjoiIn0seyJpZCI6InI2IiwibmFtZSI6Iuq5gOyEoOyYgSIsInBob25lIjoiMDEwLTQyMTAtNjU4OCIsImRhdGUiOiIyMDI2LTA5LTA1IiwidGltZSI6IjEzOjAwIiwidG90YWwiOjMsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyNyIsIm5hbWUiOiLrgpjsmIHsi6QiLCJwaG9uZSI6IjAxMC0zMDAyLTY1NDMiLCJkYXRlIjoiMjAyNi0wOS0xMiIsInRpbWUiOiIxMDozMCIsInRvdGFsIjozLCJhZHVsdHMiOjIsImtpZHMiOjEsIm5vdGUiOiIifSx7ImlkIjoicjgiLCJuYW1lIjoi6rCV66+87KeAIiwicGhvbmUiOiIwMTAtNzE4OC00OTYzIiwiZGF0ZSI6IjIwMjYtMDktMTkiLCJ0aW1lIjoiUE0iLCJ0b3RhbCI6NCwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InI5IiwibmFtZSI6IuydtOydgOyjvCIsInBob25lIjoiMDEwLTMzMzYtMzQ2NSIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IkFNIiwidG90YWwiOjMsImFkdWx0cyI6Miwia2lkcyI6MSwibm90ZSI6Iuy0iDIg64Ko7JWEICsg67aA66qoIn0seyJpZCI6InIxMCIsIm5hbWUiOiLsnbTrr7zsiJkiLCJwaG9uZSI6IjAxMC00MTQ1LTA5OTAiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMzowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIxMzowMCDsnbTtm4Qg7Z2s66edIn0seyJpZCI6InIxMSIsIm5hbWUiOiLsnbTsg4HslYQiLCJwaG9uZSI6IjAxMC0zMzk1LTU2NjgiLCJkYXRlIjoiMjAyNi0wOS0xMiIsInRpbWUiOiIxMDowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjEyIiwibmFtZSI6IuycoOyngO2YnCIsInBob25lIjoiMDEwLTQ2MjctODUxNiIsImRhdGUiOiIyMDI2LTA5LTA1IiwidGltZSI6IjExOjAwIiwidG90YWwiOjQsImFkdWx0cyI6Miwia2lkcyI6Miwibm90ZSI6IuyVhOuPmSA47IS4LCA27IS4In0seyJpZCI6InIxMyIsIm5hbWUiOiLtmY3sp4DsnYAiLCJwaG9uZSI6IjAxMC02NDg5LTMyMjIiLCJkYXRlIjoiMjAyNi0wOS0xMiIsInRpbWUiOiIxMzowMCIsInRvdGFsIjozLCJhZHVsdHMiOjEsImtpZHMiOjIsIm5vdGUiOiIxMzowMH4xNTozMCJ9LHsiaWQiOiJyMTQiLCJuYW1lIjoi7ZmN7KeA7J2AIiwicGhvbmUiOiIwMTAtNjQ4OS0zMjIyIiwiZGF0ZSI6IjIwMjYtMDktMTkiLCJ0aW1lIjoiMTM6MDAiLCJ0b3RhbCI6MywiYWR1bHRzIjoxLCJraWRzIjoyLCJub3RlIjoiMTM6MDB+MTU6MzAifSx7ImlkIjoicjE1IiwibmFtZSI6Iuy1nOyXsO2drCIsInBob25lIjoiMDEwLTYzODgtMDAwNyIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjEyOjAwIiwidG90YWwiOjUsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyMTYiLCJuYW1lIjoi6rmA7KCV66+4IiwicGhvbmUiOiIwMTAtNzEwNS0xNTcwIiwiZGF0ZSI6IjIwMjYtMDktMTIiLCJ0aW1lIjoiMTE6MDAiLCJ0b3RhbCI6MiwiYWR1bHRzIjowLCJraWRzIjoyLCJub3RlIjoi7LSIMiDsl6zslYQifSx7ImlkIjoicjE3IiwibmFtZSI6IuycoOuvuOuCmCIsInBob25lIjoiMDEwLTY2MTEtNDg4MyIsImRhdGUiOiIyMDI2LTA5LTA1IiwidGltZSI6IjEzOjAwIiwidG90YWwiOjUsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IjEzOjAwIOyghO2bhCJ9LHsiaWQiOiJyMTgiLCJuYW1lIjoi67CV7Jyg66a8IiwicGhvbmUiOiIwMTAtMjQ3Mi02NzYzIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTQ6MDAiLCJ0b3RhbCI6NywiYWR1bHRzIjoyLCJraWRzIjo1LCJub3RlIjoiIn0seyJpZCI6InIxOSIsIm5hbWUiOiLquYDsnKTsoJUiLCJwaG9uZSI6IjAxMC0zMzIzLTExNzUiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxNDowMCIsInRvdGFsIjo0LCJhZHVsdHMiOm51bGwsImtpZHMiOm51bGwsIm5vdGUiOiIifSx7ImlkIjoicjIwIiwibmFtZSI6IuuwsOuvuOynhCIsInBob25lIjoiMDEwLTQ4MDktMTQ4OSIsImRhdGUiOiIyMDI2LTA5LTA1IiwidGltZSI6IjEyOjAwIiwidG90YWwiOjQsImFkdWx0cyI6Miwia2lkcyI6Miwibm90ZSI6IiJ9LHsiaWQiOiJyMjEiLCJuYW1lIjoi67CV7Zic7KeEIiwicGhvbmUiOiIwMTAtNDEyNi00MzIxIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTE6MDAiLCJ0b3RhbCI6MywiYWR1bHRzIjoxLCJraWRzIjoyLCJub3RlIjoiIn0seyJpZCI6InIyMyIsIm5hbWUiOiLsnbTqsqjroIgiLCJwaG9uZSI6IjAxMC05NDg2LTUxMjAiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMjozMCIsInRvdGFsIjo0LCJhZHVsdHMiOm51bGwsImtpZHMiOm51bGwsIm5vdGUiOiIifSx7ImlkIjoicjI0IiwibmFtZSI6Iuq5gOyEuOyglSIsInBob25lIjoiMDEwLTkwMTUtNDkxMSIsImRhdGUiOiIyMDI2LTA5LTA1IiwidGltZSI6IjEwOjAwIiwidG90YWwiOjMsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyMjUiLCJuYW1lIjoi6rmA7J2A7JiBIiwicGhvbmUiOiIwMTAtNDU0My03OTkyIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTA6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjoyLCJraWRzIjoyLCJub3RlIjoiIn0seyJpZCI6InIyNiIsIm5hbWUiOiLquYDri6TsmIgiLCJwaG9uZSI6IjAxMC01NjY1LTY1MDciLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxNTowMCIsInRvdGFsIjo2LCJhZHVsdHMiOjMsImtpZHMiOjMsIm5vdGUiOiI07IS4IDHrqoUgwrcgNuyEuCAy66qFIn0seyJpZCI6InIyNyIsIm5hbWUiOiLsnKDsl7Dsp4AiLCJwaG9uZSI6IjAxMC00OTI4LTU0MjYiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMDowMCIsInRvdGFsIjozLCJhZHVsdHMiOjEsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjI4IiwibmFtZSI6Iuq5gOyImOyglSIsInBob25lIjoiMDEwLTkxNTktMDc4OSIsImRhdGUiOiIyMDI2LTA5LTA1IiwidGltZSI6IjEzOjAwIiwidG90YWwiOjYsImFkdWx0cyI6Miwia2lkcyI6NCwibm90ZSI6IiJ9LHsiaWQiOiJyMjkiLCJuYW1lIjoi7J207JWE66aEIiwicGhvbmUiOiIwMTAtMjQ2Ny0wNDMyIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTQ6MDAiLCJ0b3RhbCI6MiwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InIzMCIsIm5hbWUiOiLquYDrr7jsoJUiLCJwaG9uZSI6IjAxMC00NDA1LTQ1NDIiLCJkYXRlIjoiMjAyNi0wOS0xMiIsInRpbWUiOiIxMTowMCIsInRvdGFsIjo0LCJhZHVsdHMiOm51bGwsImtpZHMiOm51bGwsIm5vdGUiOiIifSx7ImlkIjoicjMxIiwibmFtZSI6IuuFuOyngOyEoCIsInBob25lIjoiMDEwLTU1MTItODYyOCIsImRhdGUiOiIyMDI2LTA5LTA1IiwidGltZSI6IjEwOjAwIiwidG90YWwiOjMsImFkdWx0cyI6Miwia2lkcyI6MSwibm90ZSI6IiJ9LHsiaWQiOiJyMzIiLCJuYW1lIjoi6rmA7ZiE66+4IiwicGhvbmUiOiIwMTAtOTE5NS0xNjcxIiwiZGF0ZSI6IjIwMjYtMDktMTkiLCJ0aW1lIjoiMTA6MDAiLCJ0b3RhbCI6MywiYWR1bHRzIjoyLCJraWRzIjoxLCJub3RlIjoi7JWE7J20IDjshLgifSx7ImlkIjoicjMzIiwibmFtZSI6IuyXhOygleydgCIsInBob25lIjoiMDEwLTU0ODctMDgwOSIsImRhdGUiOiIyMDI2LTA5LTA1IiwidGltZSI6IjExOjAwIiwidG90YWwiOjIsImFkdWx0cyI6MSwia2lkcyI6MSwibm90ZSI6IiJ9LHsiaWQiOiJyMzQiLCJuYW1lIjoi7LWc64+Z6recIiwicGhvbmUiOiIwMTAtOTQwMS04NzgzIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTE6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiIn0seyJpZCI6InIzNSIsIm5hbWUiOiLqsJXsnYDsmKUiLCJwaG9uZSI6IjAxMC02NDcyLTA5OTYiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxMTowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiLstIgzLCA17IS4In0seyJpZCI6InIzNiIsIm5hbWUiOiLsnKTtg5zsmIEiLCJwaG9uZSI6IjAxMC01MDU1LTI3NzgiLCJkYXRlIjoiMjAyNi0wOS0xMiIsInRpbWUiOiIxNDowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjM3IiwibmFtZSI6IuydtOuvuOyInCIsInBob25lIjoiMDEwLTkyNDMtMDUxNyIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjE0OjAwIiwidG90YWwiOjIsImFkdWx0cyI6MSwia2lkcyI6MSwibm90ZSI6IiJ9LHsiaWQiOiJyMzgiLCJuYW1lIjoi7J2066qF7ZmUIiwicGhvbmUiOiIwMTAtNzEyOC0xNTI5IiwiZGF0ZSI6IjIwMjYtMDktMTIiLCJ0aW1lIjoiMTE6MDAiLCJ0b3RhbCI6NCwiYWR1bHRzIjoyLCJraWRzIjoyLCJub3RlIjoiIn0seyJpZCI6InIzOSIsIm5hbWUiOiLsm5DsmIjsp4QiLCJwaG9uZSI6IjAxMC03MTk2LTk2NjkiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxNDowMCIsInRvdGFsIjoyLCJhZHVsdHMiOjEsImtpZHMiOjEsIm5vdGUiOiLsi6DshozsnKgg64+Z67CYIn0seyJpZCI6InI0MCIsIm5hbWUiOiLquYDqsJXsnbwiLCJwaG9uZSI6IjAxMC0yOTI1LTk3NzEiLCJkYXRlIjoiMjAyNi0wOS0wNSIsInRpbWUiOiIxNDowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjQxIiwibmFtZSI6IuyepeuvvOqyvSIsInBob25lIjoiMDEwLTI5NjktMzQ5OSIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjEzOjAwIiwidG90YWwiOjIsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyNDIiLCJuYW1lIjoi7J206rK97Ja4IiwicGhvbmUiOiIwMTAtNDQ5Mi05NTY5IiwiZGF0ZSI6IjIwMjYtMDktMTkiLCJ0aW1lIjoiMTI6MDAiLCJ0b3RhbCI6MywiYWR1bHRzIjpudWxsLCJraWRzIjpudWxsLCJub3RlIjoiMTLsi5zsr6QifSx7ImlkIjoicjQzIiwibmFtZSI6IuuwleycqCIsInBob25lIjoiMDEwLTIwMTQtOTk5NyIsImRhdGUiOiIyMDI2LTA5LTEyIiwidGltZSI6IjE0OjAwIiwidG90YWwiOjQsImFkdWx0cyI6bnVsbCwia2lkcyI6bnVsbCwibm90ZSI6IiJ9LHsiaWQiOiJyNDQiLCJuYW1lIjoi7KeE64uk7ZicIiwicGhvbmUiOiIwMTAtOTgzNi0wNTExIiwiZGF0ZSI6IjIwMjYtMDktMTIiLCJ0aW1lIjoiMTQ6MDAiLCJ0b3RhbCI6MiwiYWR1bHRzIjoxLCJraWRzIjoxLCJub3RlIjoiIn0seyJpZCI6InI0NSIsIm5hbWUiOiLquYDsnYDso7wiLCJwaG9uZSI6IjAxMC0yMTgxLTQ4MjQiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMTowMCIsInRvdGFsIjo0LCJhZHVsdHMiOjIsImtpZHMiOjIsIm5vdGUiOiIifSx7ImlkIjoicjQ2IiwibmFtZSI6Iuq5gO2YhOyglSIsInBob25lIjoiMDEwLTI4NTItMDY1NCIsImRhdGUiOiIyMDI2LTA5LTA1IiwidGltZSI6IjEyOjAwIiwidG90YWwiOjIsImFkdWx0cyI6MSwia2lkcyI6MSwibm90ZSI6IuuFuOyVhCJ9LHsiaWQiOiJyNDciLCJuYW1lIjoi7Iug7KCV7JilIiwicGhvbmUiOiIwMTAtNDA5OC0wMDUzIiwiZGF0ZSI6IjIwMjYtMDktMDUiLCJ0aW1lIjoiMTI6MDAiLCJ0b3RhbCI6MywiYWR1bHRzIjoyLCJraWRzIjoxLCJub3RlIjoiIn0seyJpZCI6InI0OCIsIm5hbWUiOiLsi6DsoJXsmKUiLCJwaG9uZSI6IjAxMC00MDk4LTAwNTMiLCJkYXRlIjoiMjAyNi0wOS0xMiIsInRpbWUiOiIxMTowMCIsInRvdGFsIjozLCJhZHVsdHMiOjIsImtpZHMiOjEsIm5vdGUiOiIifSx7ImlkIjoicjQ5IiwibmFtZSI6IuyLoOygleyYpSIsInBob25lIjoiMDEwLTQwOTgtMDA1MyIsImRhdGUiOiIyMDI2LTA5LTE5IiwidGltZSI6IjExOjAwIiwidG90YWwiOjMsImFkdWx0cyI6Miwia2lkcyI6MSwibm90ZSI6IiJ9XQ==";

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
const opsCipher = "{\"salt\":\"1nQNba/azz1A16FbQgBpCQ==\",\"iv\":\"Mvzj5xnvHvkcnpKs\",\"iter\":100000,\"data\":\"8CQIRQKT9TeLYS2AS170ng9B9yrEJnUalE5gJFNitINoH4pE3SWwcckT0ctENX8303y2VTLlPFc9yp2RnzzrmgAB9lbylVIEqMtCxiOtF44XvS1tMgfm9mgQTyPso/06unTTG9+mOuBgApWGV9W2ZQige+A9bw0jMxRyMWE5Rlym0TVS/OnEI86KL3oqjCs/tKu6eLbedQ2oEru6gFJb/vSCwHN5eshEMcURO33Jw/+d3TEiQEx+MJqUJEVjTTWBT3vHj/HllcPRT2y2nwxwyCiGMHATHv4+ysQiqZ+KFNxZCxiXI/PLy0bRCOAf1+x2JMeC4r9LzZpYK1NkogN3DSut8GQZJTB/QaE1cz1SLAmYjDxQ2K+1ScGYOsBUlwHFlwMwveT/oNESU55oEquDwTO0TlMSm9sQvM8T+OgM0ZIyJxSlHqG5iftfj5AIJKEJAjWfmIXO8BFG4VITHERIfocPFbNcgHkKIw/pNexODpGaccJH/yOLcjIRk/REEjRgnbbiiBjY1TLnnJ45kANr3ABWwcOUfRx6HGZoBha6QEqNUKh378LM7sRv8OBKSuQVLO72qOszEr8wzzW4+gC9DRVOu5uuyXp6sOAFvdpfkW8uZ1uSNa+ZJM+BuqKPIQQxQxzd3BSHClp9NLqTJIXsIxVafo8Yl6tVxemEiw/vWVziapVrDLAsOZzl6RalXn21Kuz4rgST5P+Qq49PCqsTZ2gOYJxGEtTj76W8xuc0UP9aJ++y42zyG7BgUUMdqGFe+3C7euZeO0N4sV0wR9GJTXGBbRDxChhfU0cRYOGLb96/ZPzqsRheO1WMn2Dm8W22XVD5YMbnf/6/z6pYrvCDrE7b3mLtkjDMmI1Ql6qLruMCUz6yhgWqukCeQ7PeGxU0IdtCK52GFA7wUZSc08PqXBv35vCsYP2cNXnuqHulpygrbk4PqHQoKF/bXQO5XcixB7rez7MifSLYkzkq1+RBTfZHOFwfp+GtjDX0GI02HB9z7mSIvbenUvE8XNHVvCUIk92oENgrHmaIer2ggK0EZoVjsGiS7KyHhFA/qJ7N5bPa5n+F3sw66slHkSnCsj3wuLXccMyzylQnvf2fRwthVXspfNQpDgI1jWhF7h5G4N7NFgoFr0MVD0rjLjQZzC5dAvWavr6c8hcQYWyPkmTaFDI5trPKLLG16XCpT2mcyZvvJgue0LIFKhvkmpbl+EqMGgJQq+7OYtSUJ0AAYOD6R6PNAT3puZkw7433kq9RQP8Q28tg/+JGqMG3jB9nlTGgG9W+cSb5j1feJur2E5wXAnFPVzs2w3pPR9DsaPYr+21bX1rYvuTV1POyuMMSdXjjoNpFV4nH/LzdmLEZyj/cui6BmmBZqO9wz2Unhdy3Knmrc36ysea2E1X34ZggNYn5e+Qcs8F7dkBAHdifZW0EOlt8XboM9OW6hrkXIyu2p3FAKG/xmB21h5ani7JOMu52vk/vOD6vwowhYx3cg7KconZ1ddzmRwssC6V3IbQVMsd8FwESnuSMf+QbUpO1CtPOcrX8MUM4/Kdu8rH45UGgyB2wIE+lM1Ng/2kleVwBPfZhTw/JUx2XPR41LiUEVobe44ydGauRpGa1r2YVfq7tM6l4OVSwBDxPFkHfqy8+PxUGaD4vFy3MGK7qM/ej9KqiXtG5Y96rzBCdE2rkbZD7JawJtdCQjIMSRer9aJ314YbmGbvk8tgA2dioTXICvygetI5y6RfdYyvFjw9HKX7/LS/gTB4vZeIWzsDtruZ9egAre1p4SLDTqPu/YPOg1wC6/976UHR+7ddKeSMDi0sFcozMiAOxUnOV9Au3phMT+lvScRm+TdbTYx9AotANVr6bkX7BgFxdwQ9qCUQCjjz2tZwyGNvXtDPT87JgqtaBMfhZwte19WonYcwwMIep8FO2w+H6xo/CMPWbmERa7SExv7uu8NICo9PGKT1+VSmE+/9G0Obuk69Vkz6d6m1IY6OZVG97Ex3ZDybZSKASUB/tyjQjJy7OimyRrTvAGhRQVJHIFl5mU1BU+lGGL5FelqToJn3BsucTnYBWui7oPpxHVgndEJ0GE+DWjU3oDeiEu45SySyyxsnjAaPlHmNmDX1kJMh13+sBuJ8pr6huOOYVtK1GXa/HwbN85ciFwDY4QhKGUkgix90kNMNl20Ojq6PKdNOP94t9ovbNzMKCwjbPor1LLbJABOGgvkx6ZIzA8xwuT09B/OPw7Ixr6yTIHFSd2EYhUkCbAFe5QegRArRBQlrXpi0icC1BaOWF/wGvB8xzZ63JScO5kAlcUl2nneFQ5CBSRFVKQms5Jq38C5+IVQpn8/Ohk0nuWkycPdg0WhkrUTd0f03CUrqfq9kVtmXRdn2x7c/0Uz6whe1HvlzwBJF6Xq091FrZtjRfEDyznm6itA+LNIV1pR0982trH25YQUwCRKm8wkwubS0ANBGVgJdl1uc5l/p/6ld87dBDb0gBaRCAGe1ZbOOcL2HozKuYszayriAIsWrpKbCy96rxG1Ec6NpB144EcZOs2pEzuUVjjP3vmq9Dv696mOKSJQIE2NlvS0knJ+bbMMAfqqtPfCShq9wOIRpY1mHH8ofaYfy6xmSYD4zSIz6tSBopC7vw32/csj/GW894Atvb5y3vhkulp+mXcw6BuMN0QESOEAeTpDuCyAbJUfAfjRK3Hl1J8IBvJ0SFwH0uzoC0WxVDhm/1NoikmO5jIeJW6ZBTTlWAFe4YuUzArg0AV+2Rpgye1GUIAZlpLiimeap6KRGejLnPkShLjD5f6bfwWOeFdfmsJDQhI08lFLnny6nXUfqJMuNrV9VSaCtCjtrmol7ctJ0rCenfsr09TVWUgR8IFd8TZMsmUNpZVWNPSK2ImGiVa7FK/Jb200WRYZDTk9V2y2FgkxwnOhvUDC3WeyNcUC1cF7T9v/6AoOe6mp3r7Fxx4i6A2XR9faJx4nQlnVgzwQXcdprRUjleC2sjJGJVFlWftxuXQdEomYKJi45UHtlH64LPH/enPQlQ349Mo3dc2xCyeGCm6UOpoYHtoVjUpg1JAfRI8n0FcKEIjkhhnbwidDwQkTET3SbGPTkkUHcqkLp30Iq+4OBuhuCcpTFL4LpNQHxwwO1GI3dUqaPZX23EoZF3PESRQhHQgMpEjJQ7Nk2ZPcOLta9aWGcSUOfOayQ92R/wUxyTV7wKGtBmYo0lci7I3xupy7166h6btzf2yrthpQ3hGB9rq+xzRCLYRVK0xA30TNZYNQVJUP8SbrrU6DsYlGIMwz1xuENMBjQ7aaVHxR188W2A7aMkvgGEw5Ztxj8s4UCofpV24fNnRcG/tIq/skjRjuel7XdtzxSccf6ZZC0H0Is75GXFfm1ljyAXGjt1EEMufyF04dz4ChmXz3q0mnjjY8d6lErfnmGWhbiTIPalWqeXN+jjfydEJd3Yf/uleKK2xwXKe0Jk3byx3vVTlmkfueoLnmohA/SPjzbgL1uFdqc/12s0vurDoEPaAARGax3ThOBw4G5o7axHStyB9s+UCPV1ZmlliNEk8pplzfUSAstyls3dh74rQTu3ULyaP/XITEbwVXW3+ne3fUKuwDAMgaaWDudkDv7qx+cuYbNblhn+EYLyZl5S+brIi6Ysq5qbrM4J16pCIhVXysnLcO1Da1Rn5xJGJ1BTWBbSKCbA779zuHFIvUxg5xkqse+abvwsBfAO7Vo36sgRLv46PE3ThV1Aft/WaeiTSjktY3GukAjiRcZvccwiGy2RB+soyrbMUinpRc5Uo87AZfkm5qT780qGlfZoZTBddbd/FzwuatE7Evr3ZkSqD9iquhvNbskuTzA8LB4Dx+QAgejPBB13bV0tGrR5fgWG13pVnQXV35yOLdOuXeZQpsuf+I/MNShCjaZ9N4N1AMzB4fCnsLbmygug99ADZ/8oL8Ma9NDEpVgBJvs+zdJ6maX2OBqYLvheLu8Upu1Coo6dxHqKSE/G4rnx68q7eYDMMVTQyxV5vv/4DVNH8/yv1ON0uUP0cp6vidNXmI+GTVGcBVujwDjSYPSLrtzmTxG1ya591KUdq85GJAbfadGXoVYp7YGrYMH0EgGRKyjt/d3BOz8/YUSmd1S61s6R/tgduCVbGxBCzV8BSgIFBsVc90RT/etl3hTnnSc0KhSkIOmPtwXJc/lpVCnavsTyZ3YoLS9xtsJKRb2wVLEUn3YTqbbdjfccuUtUT8dA1+7jnaAjUG5UZOYPYGizaYZCb8jLw9y6wHRiOkN1d4u+QvHFPgGsZKkZk03c6EU6LggnhUjzjWZkw6KTL7ZY6wdLqdtNkhWYWrDaUNkQJMUQnqKbZHK//MwhmNO3nN8n8hakzwP7xYwh/mcEO105GPSm40s+UjE2v5C/HfufP4q5Uze2aWlQydkHOebDauAOdhwMtdSBwmAAqEAYEfDAYLJSa+CL7zgaXilncxgMiB873m6LH5vpUHNpEo9xierrc6QQVrVZrukbTLRS8AGNnjnUW8jI5hVbNWrZ6R409eQ+KoCRyeN2TtxQW6GBh+XZKIloqvWumf8fx5NqXyfFSW5CTcjimiRhmFXPiduc1vvJM/pTto/Omq8RuCMPnceD0OpxcaJOsSCxthiuZ6RbDOj8moRVkyz2PNXw1Bm7zZSneCECBBv+K4AHBL1gdw8dZD+EmqpXzCUgeMGyRVYYzUfC49b0oB7gO368V2nfyP2yj5igFIPGYsuSpMgKEdr41AQw62kYKuBNbr8q808tmuChW75OZ92OHaxYcmiTFDkjEEaNJGe48E3OvTt/ejy3c9QFVdpfcS3BlyVk6J8zwD3WR330r1OcVALcvMtiBaZOdtP5zlmLSi/WEmfSWJOf1t+PR3qMMMOFQnVJ+rLd9Fj+cJIg4HFuMOyT+loYlRCOTCr3fS/TiLt0ubMiuDbexOZGSTIfhj3Wb1TP9+qpCZltxo47wX0WXw3iE4O4mNMuzaqArmyntGudND4FFojGQxy060MrWROSOt9hRpwVmbuKReWAbjlzWLlaaU3CENamtnTyOJ6R4rYZG6FXq2Zw2GcJGxunrn6Hki8Rw0E5itQUDJbkiR1zVGWEbU+FAt9D/0scLTjPTDtSVuCgpV1zkwRWD2lkmSVN5biZeeVtbLQIT+yWRf8e2/7qMIAG8xhkiQ82QSZuUfYt5vp8tyHIlhIgtYTJzWR11o5y1EDOaTjP+CQ3yJLHdTwECuEdJD3YAgAOJVsQUcyxKpXH8UglojDxRKz18fCCF9hlFPSa3ivtUdbqvYoDjzc87nitfVSKfn+q10U1gxCQoIU29R8W+DRHAbqOZyb5EkfCZMWhR+QrRrGLQ/9WgwQacVzGpA5GleyFV7CMr6g7V/WvSs5XgaWDuwcyw7FiAA2iYv/bMV7LghBfrs4XP+Ta65VPN61rt1G1gXZ0CA4+VK6rNUfD7N7AOK9/pCAiHMAytCo87Av8WIr51Vs8AC5y2T5m7Y9YzQJV5aWbTd2gTb4jtGK9tgphoqTPaB4TTvCv35yWa1MH3yEA9chNYUrVN6fvp3A4fxnZN3OarYD4wtl4b/RDEo2qxoTZZwT6qB9EQfYyI+3F1bJsNuJD2JAHggLa96NNTDK0tOvm+wVDL04uBoLr+KzKhJIxwC1sp/5y0q2J8EzYyBCUXjC780Fk1n7G/yRJSvM8gA5JaWJGHtiM/ROohp7iL1JglUC3fyLVpox1iPO8U6f7BDLBijnGZ+2gLt4pUzAU0bJMRgSof3Mva9L1vAcuBzdcJokE7aDw6+3SjKV/FQLiVvldox1yIDNJcFX/lFtboph8nw/Fvs2qzgRG7W/xhBEB9KZGiWWEeAOBjmbpO/E5EVoBR2JblK2KV67RrYpVXv+neBH8MAbEFnfXq9KwCaALv0hC2cpiNcGhpk9F3j62vlzN1cNOw/ZbMnhDJQmciwVREBG1Ar6SHOBdl5Ver48MTwJdve4I3wsLUcQIg9n2OjzGivFCN7iMY7mxZxIOdrD7SaU499GBFYK7TBv3i9omkVAJ9NAB4w4RUWWOGUS3NZWLPIBejmU0JBK53rmkKVOD8HS8HNJuZikHvSwEo0ZuN/ytHKz/M3io6FjXiTva6IbFVE0DEGBMopTc9t62c16ld/rPvj4P1IiAAU27TSrD2A9jlRbIiHHhgD1hUgV1ATeg8sVwE5I+NXeQ84h25QDHgXXQ52tx1SmsGNYw1uHMQDnSYdOv7AHk/6NykxSrMEytqn6gt/EhPzOsH+WuUHP6Db+BuBj5eO1mSaBFV/AJnsOPWX8srd0evYYRRqoJcCC2CYtlTvCM3My7xyrQaH3LGhsMIUHKoi43IgzuMmeIbtarrQUScDfLZLtb1WF9wzAHgj17Uchsp3/RMFOMwDdOqLyt4FOLrmhvpInQ58/kvDfUpWo6lNdVlrXJ0HgKoRNKyBCoIWy2nfvVbZUaBvaSyMPMEHG3Y+KmgC1PM+/Bp6XT/MUcVq8By8xMZ7a/MGzBLTHTVcGdpPDFmYN//+4hjYp/r4DoJoRui3dINuncvoSvPa7s9115alMW+1zdShYJn+pBFnoh1dJ1Z6VRu1tESApwu1P70T++nGuAPRSTKy3aYhhxZd6XCUbYX3TboG6TbtThu7kzeynYsrFZvZaBUD/hnmlW0V0OLpLAiPcKzJCyeQcueJcdNyyyVv3S7AI59VmSnDLW+J2HqPVHPTZ3FNgVYFAcPRtDoh9y2oyy6K9kcQHmKebmzXIp1Q+hdgvG2wS6Ziv//Z9TppglQ0m8aByAZWmSDSEWPpFFBJ0BPlpVjwWcx6VksioNUzGdlft54rV/jakID+PA7zECgrBHAvdN/PRm1aDInrOPk/fLKsdaJFBMZ9nk1s53PHJGNjyX+xow3W7CUXEfUSL/7/qNS1lDCsCfKbuzF5l+fZMTL+BqmX8iNjmpCuKYLqxxsZoN9RBJnOlozbSCD1gI4VZR+p/y/IOsomSIlfBU4/m/a33/PRIFkFMgrQPx6hrYbJ7Ze2uZTyaqvXejBr+WoM6JUaP7WHoSCJRk5I04+0d8JSdapsuWVNXHnYef3jlJ3y5Bx77Maq1WxWo1YGaikbWSfYxC/WwH/Nr0nm006dpG/698r9x0UxsT3SmLxFgzXtFkHZ7mfctYexdpZy/lU8UCMqdFGSZBUqZAMbIKyPWGGO8+7ZEnJhTi8kSBexuL345NcafBANRePCEOU2TaW8QaE8ASZEs3xq6i5B/zH/UrXybwFNkH9KeQBuZoHQRMQRLjmSQ/GQ82Tf6cWk3v3d3ekbdqhxh8E0l4ZMgIcFjNWFTBjuw4T7/eu7c7ngo2eB+Bo4HdJx30mK68VAo0X5Y5S4Uxt7eKpP8C39lcD4O1pCyMquDn9/ndDYhY9uMu6NQI/yrwQGkQYahjRXaKj5JaD1BvJc9i84nTy9IJANednrPR6GPualv8f26iXq7S/EkxugURQpACHW9+5a3c4r0yF9qQ0mzCwWxeeJ3Ot4Bp+XZiSQRkP2+oSLwoWUkTtcWExIkfwLZ47XQaPXULWnwRCFwS3BEILz9lNq/B2GRMoDEOsA6D79FSZvs84NsidELZMm9uvH05u8+OO/8j2bFn0LKXb2jxBMv1nRSuTMmhwEjVWyK69OKDJwS2IhgE9Q7MAVeKkOCwt5t7qGmVtwgrasPf5l/4tBjtXy/YX1KLglBIV3xFALarXoD7N8wtAuVGvX9AOSwNHjtSkxkkD26Cmw6ldsVJT4lbJsbPR8qXSZ9piSaat0hyTZKWY7WERzC2rQ1U8Cw1plwyKesiozIAP+Nj+0jyRcx46tqAZZjxQzGLSrC5DogHdhfxHBdlJrspOENt/CuQfOoeWTbSgwhc7wRHbBXNKW15Cgz6MZkimSRfK3e6Wi8m9IpwXCspInJiMLM+EwDWXWPJ77ObKWYsLYE9AQQg50vnVJOk9vhVNvn6nLgZCXNu+pzgjmtUL4Vnv4N0QO2HXcmZ9EfT05g8sXQwS6nOeHlTu1i2NU7DQgDdP/BIzUb7aQu3O73v+Cr59GfVDstDlqqO/rGDJ2KtxFVTNyiIvOJGZTQQNzluSGpWZgyoc9QfcXXG7dE1hiE5l1o/Khcz4J7I7LO7URgHsiq7tcWp3+St5EMzTc/PR2NKq96rv3hB8f4xRnrWmynOsXwC4VCAdUQvNfjFPsaFx+860xz5I/ImYNfJDCi23z90uRQ6Mopn1b81YyOl9R8Q3koU34gAywmiu/s7BK2DNMs0p13cRJDw+4G5C1YhkWM+r0kdnOB784xzToCJKv4rBrlPnIwd9j7WKefSFHrrU5DJsIQbqk3Pzf2xeQDdt0L2UqnkqxMrL8IsYtZB+n3gYKrP5thBxEu7H84UVk1OHM8TS1hu3eu9ir+CDM4awGX5gvHBcwP5dWUFcHG9yiZVYVtRQ3lgSYJvFnQkX97LrMo7vstE1t0gWmCxrULA3BIxCFYWfJo1+y/vB6Yz5awDMXtTgk0OD+ltoW/4Zv8hsCqMq1fb3rPuMluxHVsvXO8FGReht6/E8qqay6xzJgSClc1UYxafAz8mx1P0YJCs2NGl8FjM6nxqXkQ6vFbYypjXnDbR6FNOcsyJUGbNUJpTdrZkoERk7lu5pwBzgIxPsHrBYk/CbIlJJ/fXbP93US1xvssMlVJCUeFeuIqnY5DHupycSk1w+EBCyLmJlmKSuCK0IpC95fTAjNIJCsiqmtXdeyD/xQdcAgvVYu/dF79OW1yxz4JLsr1y9pJUZcuAMJbnCdCCK3PzF+16maxy49jcBqo11XzUWqma80voIVDOq4OcJsJp+7EwhwWYSnWQy7xTO8/RpPejyo8ZRFpCZLJzPOF3eEsP9lMNNDdfohUehyk8Np6/I6JEM8RD0U35oZaRHPvai/4B0L3BTlpOcnavp4yBgOl1BZItj2+pE16xMVSa9YAT3qC0QQc2JoUBGMdeVda3MJnSZ9249MjPiT38foEfTqzZz7ISd0pBr3UfhKELoN03kqTLG5jpjDmE/5e1fvcqdvo6k2SQA/zomZKcRwTGMlkiZ58zv/EQMxGjknVv3U6q5ivfISsdiM3M6IuAEmi5LgoD14EV8uVv3FzsPOWcT+Z5+pLoAjLi+SSUY+37BXxpN7Rnf2wmQT4qN7LxQlDGlk0gc/liB/TyRQEjKHQPx50Pch/AaKsyZxPfwR5b18ueSbJgjPTTFGtbX24sLd0YjpA0NSwRk/SEgnnEPZ3j1d8YLZPJuNN9hlnu4aQv9pI+Z5gla4fkM5W3RchxceVCpOjpQYPLMLzS5FSc0jJC1v4sLGa84FtI7+yc/sOSw3wWrigzLtVgatMK1stdCzw106gjgE4FZdklQoj04/COucaXPokguCnuNGVWUwB/p5PmF09dm81OqG5eNplZ9PMEZY+mrc4RJwB1ny1NnN1UOrE3/gYUi7BFQR8H77DbCjU59ALR9B1Oubutd5uVoREFX6aE4Jb6oajYzfGFEWV9AufDzdnrPVMb/DzfzsukbUofV8mtqlMD+d4XgB9PxHvH8+1qcFCkecKvEZoN4LYv2uaLw7UHxzwly8Tu3cEaGhhcFrLjuOGhLY8OTFSNnuuso+yAwwW9U5RKcYorMO29xXaQjYKuc3mqgozQ9u72biQdt1+Ms3oDZS7xL2BZMvADjUch6EQ/g7FZW/f1AWjnx6Z3f1QMgP0BbasE9ewz+EhESMfXM2PIpbzPYpjg09ddkXjNSGDSy1pzZg1hyaFMTahDzIl4w5eftyGU5o8yCSsNwvOP2TXQ8Cq/nGvnK2Q1lpe4vJ361XCk3rGxwvAhfhEjwlkXABJi0cgXKkCvV6cGZsH+bivvKL9v9fzOLSyYnaNUbPfYgr5PO9zfzB5Ohxk/gDK1p4sYNHIDX9U7XRxFX+YJsT5Qx5JFi9q7PVtkL8qaShCBNIudWykL6WzpYNhv3pti7xGuQUvPy/8aJGtIfo+zCOtawVWmx542Ew8a+xRPMLRkViFaC0sOYq2llvFmAl2XpcrAPpte+TWUSu9MyDacrUEQqXj+p4HImT4vH1qfxCXFok+A17osyH0i64bB08eODaoqQquQddUHAwcPF+CqdEesk6+OSLzDrA/PbJC0f8FnMtrJeOYZLf5a1Nu4nNk/Nk/yz1jWlGTSQ4n+3bHJp6/8X0q0KFj8MmaewpplHU3FsdEZvK4Kuj8gy1Zh8e/RmKwt57I/b9oE7GM6Fte66a4qmxITAejkAPMHTbnMK9mEUbXK4IpOsbbB0grwz3V68V6pxM9mMiafDn+30SOf9BWDW/3fsZlyzBh8jO/uXaO+XR31TiqM8FSILYr6E7peSKxipxKQK9iJMleK4/b7W6Vjoufm3k6n+hSCdUdiFWpPE6gvkXpW6z5cp+7nbivTgGPXNmebv2kHmwljgoarWEr5PbWSpxPdll7xS0rvxhrW2hRC5m5Lg3nj6IXjEvQbcKAWNHq5ZhpHGqLzsQ0+hZwCdYCmnl21p/mzgFiK7QyNj1RoQc+4tTkWmtapljyEiVDip6ZV+jC1ERN+rTcQNMgUAlVi8DOeTUBZ+q+3kYfvVt+vW7tjXkHrvM3yDG2/LxlM9MNhd4JCuNlWiHXCsdBVqRpTP4S74ULNj7A166LexCxONu9077BXYukfm8irCMHX0CYNzCDs3lGTj9kLl/0G+M6mJ9lrVIjxBUCMVW0u6hT6QOcPtsbJKMiKaXq3IU6iolY81fj8TXuLgxS8wQi9vJoKJsfQLlYFKMEswqdPIXb3p/swT5WaE5+oK/vq4DVTMuyubBOSSy7A/fVgPb+T+fM9R5vIvQVXFZ9Ku4b+2mijuHLLJw1C0htYS/1HdbWyiB7KVTvUJGh+YTy3LmN6YtbpD7BjsJzRIQjbM6k7u1ANAVyzo9uRnltyHvhoGjHfNbDV+ZVl2lG4HkswOspiP2S/xo/9cE+isOYEFCZdS9C+/Yu2Apq20u3GSE9PhV2R2GNqSO0gOJxRR/uYBlgQEMCNbvvmt7Uq2cnz6WqHKhqlh7o55cCQOHXb5101tcRE3cnccNf6gOoUcVznJbEgnAR2LZyWylsJwV7Y0DGDNL1dj6uSUB0NQhXauPgFgaMw9MsXLs2Ebbsq7bbS2GGPL2sdagFDeGA+5cmSUAQykZD82p+xK8bChxzvO1jGm3vhYzo8EHOJyvKbF984P5BKN5Q4x6ZB9cCA3Taai5ML9G9OglOG29OGBAinZ2hp9B9PwKIqEyJV8ifot42b7y6m7C2hzOQx4EGyZ8T/NSUnXVOaLECstaBCBOcWadpak2GhbFJahx0yhTQAma9YEfdoM8w6aaZWqMMaUAj0MAqLN0cPp4je1BK6Am26u0GxeP0L0WvuXdfqJi65HyiMdqzwzUPX8RR+eXeHCAYJDvOKKVu50eDsrfC88yWbJBmW/ONUTQsX0gM9J30pGT1wYT17YhUaV1H0YtuvDbWTweMoUQd1BzTHYVVBIDpbHyWZAAUMad0wIEmhyWp2x4z7NGh4sLc1jwLUjElPFp88OaxrmNO6AGgi5pIypZCJtcBqYSCTz64r9eVUwc9ssxnXo3G7Cwq56+yqilHbqoZxDyiD6tqK7FCQn+Zb1sy9yfVTpITjicW1DZvuwU7b9JubgpVBiCSWtZmD80t611wSLxe7CTTDy6llvwZwuxLhBrwjP8WPVSDTSBnTBWKgbsuYXDhioryV1s65EGILYgDnwR6dBvjRQANjLZFYB0HQ+jbfLrLPOoNiU4K/98AdDDWQbI7gWvLp2RC/uRNA3PP0ad4Yb3N67m5BeGSe1pyjuXb/Le5sDipr3+oPZcdLVq54Rekgc6hlw2yISSpSY31iWI7DUNJ/uwI04xfR3NY4jQXBPgcri2hi8cptrRzH6N+GhL48JacVwxsdRmMntLST2yrxfbMx5jOQBbniJ26ukhcdkRxMc+IM0kVU2FlDWGnqGiRYd69R8AySMCI0V/T4guT3WEfG4GtUH0hFyQ+sClKNmL2ov2IvFLOE0ce2w+GpVprruFEAcFypvhA/5sTkoNKH9iMoOyqWEGCxV5Ys+oYhOw0KzwVUTR4qrMob/YkNGRVoktB2QvJJyEaZPmJslVTKVB/hipd+K917I6U6snilX44AOcU7wtfZVvN+aqbuJI/Ho8EFyDQNDbjVbrp0MbKM340FlWnr7tmMF1S6qPC2dMFNHBvkqmsR2FuvuqftgqPN0d45/l6lYGV58JJp4a30jMHnHqejVPdAkMExurP0g+uBeP2LWtfJfpaKOyaJuhyAJ7aOFtLUrWObZnU9lzT3o8t0PfpsoIFLo7QsZp6w039MQxb/7zCp0JevX7toaBeQM/z0pmWvuLneqERFWbWN5aahFRjXdgXBamTtLv95OKrPUYsXQ1jQVgf90y2CfsSA6hjOFL6cvNiY7YBTjrZG8KUuO706/fVBxi1yGxapuoboaJnqYrx7O7XtTOcymn/lSJnuC7AuW/Cm2zh4lUIN4S+wjwNXOF4pdqdcXditZbXIvqyhvJ6waaCBTDSbtyB+RXuGl6Rz5j01HbjrkNyZdLGo2yGVcrnmk10v3mZzyJkUWpOinCu1pw1G660aj8dDI6HsO58/5b3htBynTPDB955QYVaNbHPGqkKd/AVUDbuR6R5zmzWlZY/78vuhOfHO73x7UwzmyqwihDoxJO5SAfqVKJ92EKQe/Wn3eU0Piu/UXmLmr5tyNv6RLULJ0O+aUOnb/uCd5LVC5+tgZTH18NqfxIwR8IWOcuW/waoMwR9Czfd8l8Y6zW0+CTx4Fr4Ci00ZXpUS11QY55q9ruUXhXraxbQqC8yCTCDIQ7phLmeHrM0lMdkAewO9XVupLw/+BMH7+Jtvon0COuWCIMcsrgCQDhu42aBmAmLphpyk38zBxvm6SLAseFUKoLDHp1n84jUF+PoK/wlSXBYg8jI0PLN54SmvjJtZNJtFB3z6Jty0yqku0ZyR6dT/szmjzZJz4zq07beKfS/9g4zZxVna65y5a7DmIl9A+SjW9+DTga0XmIKu1Mm/gFsMVDD5069SiYhe7uFHZtokupBjaveJO4LPmtXXoOX/KKvUsmHqx6N0AAZEtT39naTiYsY9jpwu9UMVtpEcOaMH66V1bF/L8EgWk79ifBkP2d9QPvIvWtn3/eZk9DFwOy4RANZHYUmUjKC9zuOrxVwLxEPNdkUmrHK/U+sTb5wfi3IFM/1yG9pdmSl3E6P8uNmB3A8cyyEiQjbclw2MfTiKNzklxopo4kbFVY0TZr7+WT4oUIJQAPpT8Kd3OUDUYelkxzqQ5owJFYx2kqwgu2Zay5MELn2mLnvStJ3GjOQNEn963pPfDM0ffXDST293cSeBpSJIIABcCuo9c4F86GBWfrFm88BKiIVMzSpVdjgrqzY3pvvfa6K6HV/7AyLK4yvblMQiMbJ3D8zuUU4OV5tQD/i7Q1n2RstuS00z3MSrLBe5l6t1JxkQOWJ00aEfHhixwgxl9muy2KvSK8+vXsQU8zWieD1zSBeumBSbZsj9jCj76gLWPw/Nph+5hBT/DjzqP8NJqBjnOULomPcPRGAoRerfhq0H5K6gkIrGEWJRgczNWp+XiM/McHGyvrv8ui+TlaPwK2chgHcJ18zzkltyOaqaFWiGTYFS1iuWNXKjoOfaHJHBN+fwlDpeQrLtlwNZURPDqKUKQceGzGaPPj5eEoMfS0kgISXsAFao3hw+hNA3QTKJY4TyAp0upAWEPrQnAaV5ssoNE/EKJBa73viMqkA144cw4bggfmj1CtpPdX0SNsGh2kblm7QXGfr13Gs+nO8ZaNUzkKQuZE2Kwkbfi/LgTuLHGpzAoBLVmK0wn1pL4vH4yDycIxm0PsyQ3Wg8l5R3gsfxyGok0vtwc4uo1CuXJaZUF6a+6bPULX2B2xJP52PbA6J7WyXy8GZB98PNHBXIPurNxxLxy+FfhHDUvOnLnLT94UD8dKrwreZb4TXFPwOUJKWCKSRsql6iyO6xAwCwkgkrLTUiOgHEr1rqvUO21cNkYIQRze64GZT8krs/tWfrPt90ldHvuLQlJTvHRpvvHvORAyEuH6Apqbm8VD+DdLLOfPIyrsrDFlFdIJZYlwzJ2m69ReWd2+GZbiL+RngOQta1HUiXHG9PewlX1EuKiiIluQCtLhQDv//RBSXx4XMh/ZW6o6W1J8DqHttB1ywig4NIhqgfxm7Wgu+ieFrYsqW8rXk7tio9kHbgO8LtjKY2ATQqAiDckKm1vhDF3uwJzO1YRj3E2YRrmG7N7VToasWbYDpfTMrNGiycf3bFr/nysdZ1aSrSEoZSKJhjhj16S0oLUhdvkCwY0nU3Kr48OyqFN5Y2axvdSne8HQpy7xAcEz3ZFcLRoSrLG5fFutFJoRB/EcQdLYh7LeCvdyQzik9ouFcpE6iPfVUeXumVMSJsGLabPYBxCr5rivYUrI7Sa4F3IrsxKIjE0JSqQBx/dJhnFjsXSRbQCMTjV3T89aTemvxMJe/gWgDW5DSt1z+IgAHyn/lApclxHmj6NIy5ZT7dCeGt19ZnbLoGn7e8UtDdFCwMGXQsytOGqmQ7l1n413mnyEfiZZql6mNtrbirr4PX7sS+GrKIzRg5cVuKIuctvDGXHhc0BJngBMmMOIBSew4/SZoTV/X9K5KXVM/8UQytBaYQiN37MGWP3dhNiCPnna+2h7Lrgmk9kTQL5nrZ7edlOloABegeTkBNZKLYkhYQz1EzMWgIAGgdmCV8YgSbAgsit5tRzWU0Af3MiQmH14Ct1GLJgfmL2iRu2OWTa4OpJgh+uNcK/rWMNnQzii/4HcrmV3LKQroCY7llVD6M6V4P793iCnyDS801wYMUNHHH3ATy74lhhRc4HNXBTz5lr/tJICn0PjsTslwiXsQWcQaLWNEJqGdaX0E/aprDWJHbYG/kDQqi2fuIMnTeksdHfvlMf+EMCh4jUp0r13sYZ2jDXeIHCuoML4GiKsDdeJxkYhktdrrBwkvBIw0NMMY06kF3BMScf5CIqP/KyaTNz+HWwL22cdCRHToBJTDHcCWhd3l9xGqq8ooaZH36H278JlH2h4pRZw+YH59Oq7uyy99i4uY6RovyoZf8DX624G/1bi97FYFygKuJseslDcThVJEBGnwT9Fcj2H8sRXjlGNVGys6wbQe2dRRZ4cbti0xC7Hd+Pm7wAQoaZ4PXiuQm+rBJrpyDWoYjwj9Vr26w8WHHrHF/xgGEovudLxR4jIXxdKH42bGG1Tzi/+WLQmnoAIu9QZ0VAqetu2bwe1FXdjbaml1BLyAgf30CHpCVSKDeLaH0XTloV6ftfZk0nlkrZUfddW/mV0pdSpvD45+J7JrQm9zTJUGaio4iLBAqD4zw9fifNjX8Fd3kYZcvHvfKYg574/+b/YFopiCiAboZJ96RsVOCk/QnxQqnRydGxqFYe3mi59TB8rN/vJtS+Xc9WFD4+S8Jv1MLj/ZkHmQmHGlf5nSaBFNGOtRIkHy+qzHFmPc0s9OVMAJhUVxMuRHQOukkebKxp9+Wyq7qxC3Cc1kVVBpOD1wj3wVnXzDFEfByLWk97oTYbDy2YEFrbH/z5a2RJkRg1fijoO5Qmmb28EaIdp5Q2TKWMktgsFcnRp5lKtcLaKavoWclJhva5JRhPIUsF56Tte16JKq0c472zmpfhRXadi509o5IQYco3GrfoAeSz3O34ACF1DRk2TkOHDsgh+JHuqlt9G216KzqX+RtKGs/ERN0ikwIZNfNa230caqJ5Fb+IA2QVFqGXEHfasUei2qYyIKul3g1N3NfGj8D5PzmECMW1poioRtVvdPAzPaSM9JW4ArUVJFliA+AJb2jn8khX6fskwQoNmxOdZdfo7CoVNhN/TbEZuGFQXOVbpvft55oHjubSssr2oMRPomthsnvgKRTHKHpkYY9c+uidfXYajsPg6r8uSYqxhIIpW9louQlo7z+lVjswFMdLRWS142ELwUI7wnVdH42TW5juxxO9AG1QSPBQDB/JPMvV1m3CPDRpfCWEOzsKbjOuXHvsQn92JeGEB45WhxvuzmPb0TweNpkuBRXzqAdQxgNWVZEVOF/WIowIJvv0jWtAn/e6vywUWELvAXKZd2xwbuR42ZZGfWBND+U32KPUR5yDo+JIEeRqjfDg9/lFZJ1rHwtFQ0fr1tLYw/Lez+l6oHbla5a2n8z2I1+rxnTcGpbxMPfu7xI5Dyg1dXd6oPoQca4AS33F/WNdVO2X6k5KOzzt9oiV3c5QF+BBgGzAwuf4CWo8YW+lVtgOVImLCBVM9DuSMv/Ez7QlY0Ui0mYpSHJ5HuARvFOgBTCvbtMrpEahIJMnQsGGDQY082UsfJB9Lro3F17UESvJ9DYs33WpgeyB+Vb5I/nVH5vab2jnhqUdyodPyWDwfT6UzxUx/UmJLliZl4eHdJR4YEkfM7z4lbA1GlUgzE4HmA7jPvTLayCJJOzYUUYRoJdBIrNBLI8R+lBAZL8YcH6j071+yuazI2Pc//FiXamfApC18UTpZAEjoV8RXVdU+ZA/ZQygfNubaRErs2PNZpq8DdB8/F5caor7n80gon9qzhr16tjtCA1eZBHeFEgxuV+wz3BuORvCeBdKaR18aRzrtTdhJZZ8NteJyzCJJfz1XdNO4DmKfMcR2URWceSBLllIRRTerol0K6aQeq5liFeu/8OMUKNRNsDxVR6JMv+2yJcJErqNthiYIhfXhby0gn1vK4jz+QellCbGLvLP/0On5IW4k943DFt/XtmA7QOKxqDMq1/GnAbTVRuTl/HHrNV0f8ZN3qCTvqpJ2cbAgPLwckEXOAcss/aLagne4mZ2EI5a1fnJ+ENxDk2uozAOoCx1T49LPeZ2+vd914HR5RyPOSLAlWonUrYvJJtNvIkXaHsBxw6UQRCarjAvGcRwrwExxoDIIyYtP/S0Z5Y6OCg3Yt+vQAfasQR8rZPHxMqPLJOAaZenXGt3Ojm3D1nI7xI925WmVqijbQiWpPWRa9ZxX4A9YvVC0gRF+WXWSAz6ZWmp3MAy4eoNajH2dL5m5PDsg7bR9BO9v2gZEazWIMoI6KtWNZXbvrjFrY+Fk2Qqg+j2T3XuXZYn6vKftOoNrbuNMBsisiSYXrRlSrO0k2w4YIW8nLjwcRanDeNpApq56F6FICtE5zqA51xsK5pBI/mtvAjs61+bq2uUaLY3qchp4tIb7rjBlkxDoxbd0IwkubCjHeC64ADIwPavGAoGvwn0ayfJHFm0NptxSB2OMV7Fth+CarzSb6So+/bbMBRikgYfhyehQZrf2UHX7wy+nfKDEibFpGX1/V4kwemdzvo436C6GiDydbJQRe51XweWWU6i2GY0YK+1fL+nRp7bnVW06zebumhhWU4hQeggoZUMmrm4vJaZiWmr7xJ9HGqqYRUig+6PF74K+0WsbBNXB/GZyHjLr3j6+WKONYew3207gogbJbdYKeNTWlg+SGWhzaB5Z/mtowSJV+Cl6a6ggs6mYllVU3KERpkStu0wu+5g4xTPl33Gz39RWafcElLx14CPccAuMxBhq5ijbWHXWKj3aXcNDzvyvqcogwGEOUZMx913mR7ilijJgj6ZSarbTrOEgcJHnPZmQgddROU6c+IwAPDw+GTwoJ5qfUo9E4IvWOYw0o/a/GsiqInI74hudj7VGwiNeBFcWlF1YWSgMi0u9wzG/Bxr/wQPMeLYaR6gWYSXtozFMlOIX4NlFwz6QeHOV/lJTbchnSwjKBtfyc8n3gMrCDWd6if1dVFA/qIMptBxtqbQ/MnTqeQ5v/B1Ej+Kagj4acUCx1FlHHwiJeKdFZjHAj5LHBd3lOTafsbMVWYwJ53bu/le9rJn5V8MXsesSbgPn8DF7F5foHpLsJ2Yi4ZLw4JFQqdrUGPSByypMsxyhw7HzOEAnpJBWrSmNrAmobKDfhQ5KLsO1qeWZaSHHILZVizYvUkGJwu3etNP8A=\"}";

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
