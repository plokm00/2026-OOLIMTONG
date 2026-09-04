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
const opsCipher = "{\"salt\":\"frNnntKon32S9NzoqzxgLA==\",\"iv\":\"0zHiPax/2regyH0w\",\"iter\":100000,\"data\":\"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\"}";

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
