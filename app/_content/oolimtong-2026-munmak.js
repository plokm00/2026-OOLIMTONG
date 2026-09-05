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
const opsCipher = "{\"salt\":\"Son9v6/fxSQIyZdE+VmtoQ==\",\"iv\":\"F8QEqr5f8BlLh1nL\",\"iter\":100000,\"data\":\"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\"}";

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
