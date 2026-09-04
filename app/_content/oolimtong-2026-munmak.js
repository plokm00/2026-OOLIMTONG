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
const opsCipher = "{\"salt\":\"RhXBYAx6itC0WqqL9NGByw==\",\"iv\":\"FQz14N5bEXKL2a/9\",\"iter\":100000,\"data\":\"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\"}";

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
