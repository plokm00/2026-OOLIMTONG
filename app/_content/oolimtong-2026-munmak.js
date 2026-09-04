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
const opsCipher = "{\"salt\":\"7kb2cB/VwGgNFKpLsbzfVA==\",\"iv\":\"M7rh3UinPH81vObk\",\"iter\":100000,\"data\":\"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\"}";

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
