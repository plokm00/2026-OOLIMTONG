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
const opsCipher = "{\"salt\":\"bQBwLU/r+2yTlzcEhM608Q==\",\"iv\":\"bdY04qCJFu8H6umc\",\"iter\":100000,\"data\":\"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\"}";

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
