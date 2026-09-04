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
const opsCipher = "{\"salt\":\"fpGL4bROgKvGEVKefOQ4dQ==\",\"iv\":\"pJ5Zxl7TGpddwAfB\",\"iter\":100000,\"data\":\"MPOtod8ZcP5dSGpNEZo6P54S2r3oQu3A0dxrxwQtl5zHBgHOn97XM9e+Tzu40etnws7HCJGTnEGMGEtpOZFP5s95YpK8M9290pQWUATwsXscCJKtXIEUNVpJswwjsuNgyMuUXqcNE9leBla21J+vDf+XQg8Alfv7Yi6Gbgxqqes4Gsp5YaND+vSOkgyj7asmZuPcFfQDQtr/uQKyYN2tyH0Q44FFMaUPwVL4KfhZYJ7t17OXx9Ge16IC63gIuf8gCviECH71RRSCPfODuhG+GqZz/Bd2f56CclOLbROqtW4Pay0YW3IZDw+SRcmEhWkMfTrRHxIMdZEbyWVMT9OCbgI2DHyosoyOmEHGWZdqi/V1v/4VTBFI5sieyjbko5sbgo4Ut1vS+dDxGHDufVFUfvomFo6T9ZyZdtnfervC/I5tA8T3H1UQymhhiW9f8/omA7HyQZBRipT2d9lqkQt2shOcYawtyk/S59N0QK9/NdOdDhY/VmvBU3Svefa4meJbmIaGpUqnrK/fSKI/0S6OpBBH15yJE0wwwL9rTw187E7VfcZRtRkwCwh/bom/gVtndiUohKn9WbNJbQju8xh1G0wpK85np+DWNE0CkcNngHlIBIidEeE8//Y2Vmp9uBvNr4vmFRlx92uVfiXxcA7f8YHzc3Fm2Zx6nC2bf6bzwvNlKTP1fzIhYb5UW1+RfApZ6GrIHaRU/tC5cl4ze5FAzFYAiaxiAqJ4RBwJAu7MBQRRCFnlD6oxFaKCIhFg5N6EAfuB+g2ekqnvh5SFxUpP2h6tFsYT/9HHMdpfhXe6+YI6j+3nWQL3d5/Ghbzxz+2mfYt4WeNZT8H4LXLHF2frW7LWKYMWvND4aDU/laRjUbhXT1NUCsEpF7QrXJl4gRZfdb2CC760kszrXGXdOEVrW70N2YJlCpiB1Vnj+e1kc73DUKHUIRYT7foiGwqkwdTUQ+MBfZLxyjNBDFF3BTW/xgRonUfxAVdr6y7mLiFDsPP8iscX2EfXoZNuIYrQEdnh+xRb2gI5/lBvZ6lCr6nYIMCSCvZPojYVpxPfjXtCmY3gYSqYEZtVmNA8xIeGddTb1KsNjD98vrxPmYIyNErl6SlmIf0u3o6WgwiYYAY7KrEB5OIBU5IPhpeakhd7kewjZIr89avaZKKIrycIuqkGYRyT1W2uYVwocoArYk40uOXmwatMGOsong+HvR3uk4ZhA9RoHWdbfu1vATeEXf47/I2mQhZSLKVCPNlZu+VuehZiru+NSCNYOGrrYciHC2PXq5A1YbBcXYcDH12Ja005uc6/BNW+yE20MtvU6bcDgupeIKGLTjDIUr+SS1o3zxPv2UuqcJUbOKp078P7Rv/y8fRqDcvfAC1lJ7v/Dik9gwhLD0I7fSAStQhrE8EJ4QwRUIYAnclCe/cqOUNkccxtKh9a1PAllvTd97bT5ceooQQQnPByTGTyw19u/0BTbaQUTJl7XGh+mkp3iTUvwIWsaPJ3KiYM77jBPJ+ChfqKY6YM08zjj5XNGRqq9IrZQRUzeWmuTfDYRi1pycSYF2fEY4uiPO8IYVFotKQTsepPt6lwAtUbyccP+mILpHUdPsoQ2D9MH7mtf/NdWxbAuvE28FMVamnuLLTnHRSEvSWp8k01NAlreygNd2l4nq30q79FojCXbzCtCkNOOELCTtzXMZ86yt4Klu4mubp00yzq7Brmfc6Xi54JPkPIlE9BBmorYktYeBQzAL4+uSDY0J3PQ7SZ1FuqQcfu8XXSttNOHUUPAVK94SArvjgjBzgz63NfLnUU9nbbUAHZWncHNdqtKRdjDobXWXO1YIYMsb/zFUC4g9aoHBcRqHr5HIBmhGm0y7g75AKgBuA6Itiz0t2APZR1H+fRmviileczMjdTMvUqiOdoHmk5aQGdSOl+GhN3QriiumD1Ub6iQrb/Y8f31eLcrU88Pq9rGo4KW94uywGji632t3WA3z8ti8XnTXa9vGkoHRrIRm4DjNjmx6vmVuIEWOFhzgRbTpAl4YfGIPt9JLoS79IEalpIgwP+4WBNn9mqLhlYkEmrWT7Ob/UuAYAkli6fmek8CKzeS0U7uewHNxcjyHGHSEkmlqX14CIDfjlXrdCjIahaxc1RJRI54YC7/bZ8GIXmRpemBF+ZWHMPohkByoXG0Y4kwLRQhyB1oMIIdK++SUhw0JrpOdYsdBCCS+uqPKQ5NtIMXOEvLYZoKBXxhgSZ1xh/tFhy0hJF6cUmxbm4bDCWGszJrTanqDEaVpmPtoLI7k7zW5rTjdA5cHYyY3BC0oAjGaYK84TFy4rKtc5r4suhPyKH4b1VSV9nHrKyTaQDsHTgE8yzOE9uriKhlidRfjgyYrXs99bhPd5WUO0GGYXM7KJcnRht7/teFH5Xu0BUdjpXP1HP83Wcsh41/jShUBgkMbTAafz37j7CNAE2NMppJyyaSYTzBQRKiHPaQI9JiJxeRDILejY2fJLfJ3iwvtSdCRVz9X3XjAA2sbtcG9KJO76lsIgw6y4s8h6JlidoIDZ1lhBIL92t+RQ2vJbB1x6zsdFvgEY8Uncv1Nbn/bC1PkjHMl/zF/VhJbdLpJQqVEIvPFOOqYpWy9CoRsCQQH5yjLa9E3z8x6w562vFtetYf7keRzZ3jQpd3QuestkhI1TDrp2OUjawksqEe8SnPXB6XZSl/tlMwoQC5PgH+Sb2WIUy9txTyHpdVWlXtS+YaguChds9vfDOpeYa/wYIGkkZUJl1uRMiQ1Yuqoceznk+Zu6/76jQF6I4Gwtw8fT17WYGpI3v+eEV8Pmb+CbUThIzPemhMYL+LTKKmmlVFE+TNCrizAJuXcBpTqxKiKCsNJl5urnwrH6k3SBBsyJlT9m2cRaG3MKNj9LOxQhknqmgELY0GoM0jywxtgX9pS7sEgKWo2ZHeU58LQE+IamOOCxZjdMFpsdMQ2IlfoJ4WhWQjYgX0XIMbYtEKYFDsN4P76tHBS7mfBhj9NB41FflqnfS/aNvMwe0oVa3qnzyjL8WTRuS80177j296ZsMI0ucWliiqhLq2jt4gMS06udDuc4Z4eap//YLopNuhIQ/vEQEtlVeCZ9keGVcIV5CpDMOkgpd00B7KsxtvRfX4AHk6gr5s9u/tQESKhx2cre1gnQNAW4yXkAW0uPeOcnsfz7Dx5BFIOhtMHxww1A3S3UWgNaxkMfF5KgDh90dR6l2YBWps6EmwvtelEux68dnISMWkER+3emvM7X3HcgcdZ/kSJNevng2b5A05W3V+/K1TP1gPtXEzKwZi6hHL3iv7cyyUFz91EE7pSQBVr42/WDuwZKX2kslERCooxVw/aJr/NuBWbRBWAAAnLKvnA3ZWMQogVBTj4kT1qliBOvwZ8rhIFCzeVbeOGVb/kSca83L3zoWTiiXzkJTzNgUhySUgG9nJHYYmrU9rl2/N36mkLrSMxS0XAAY3sHL7c+Y8Pga+fzQ6b5TjX5dHNQjUCuEc2qB6vchtbhCOFlEaeGpdMaien/0my5+9L/AZ5aBRxCXmph6TKCeldPU+KYcqaybtOfEWL5NDm//cFHBQ+jAx5txaKVVDliQahCObC1cGexu23ylhouxuldkYxmsz+RKunlfmmh4ZisvRFJ0y8C5oWSslwjnCxwuLXoZd5erSmKCxY+PPJjCGWY5mQgAwFIwKYfBRm1CDFH8ZN8oxi5IOPNEWFng0JnTA64qAvX8HPvH8qLlnzxRR1sfNWtIo1EEYorGGHNnueKrzjigoZqwhlSfE8WgwaUziJf7AyKcpCfiBmhPcchs/tMuCfAcBUjUc+oLFEsD0Jahuju+CkpVrqzilMSZ5VV3mEXfzQheKEsTmYLSf98khZFvltB+zsaTvzLb0bjZ5+97fhyjreqeG2Lu0nKndzMoFtckbCWG8BQYdEA5aLKYuP5T6mohWZLUJBCHARJ2PTquvj1pPuLix2p8wZLHoVbaWd/BT28MBQCv1yhSnf2Tuyikb+Jx7bKutJOdqk029qImjfm4jdvf4Iby1WaDTWgVLHOGQT3HbrNRe0j1v7NJymxAKC+qxg8XVIO5BlSAU2MwEGSgigtKkIQOmO/WFq9y51+wFHy8/RGggy6qx+rnBmxPrbEIP4d0n9z8vMLufNXTdHWpUqwkCWeU/0LCjVSCwoD1zmUhKcqr85IAsentOEPPyoFxOm5QucRbAXqJrUd6xwjVrtre0eVyX3dBkx6iTHnu5ry8siCQesCrKWsomy1H1bidH3baSb5KHYAvr5rxrkfI3v2/WnJwJH+9NH2kMnqcHnnSpBZ16/d3uqtdLuRLKobxy5seKyHH3EpTePeISePm9c64sWV644RZoK3UwRtSKkYvhDo1sUh+5owDpfGNPxNH2K56oPn1Db11RAUhzJu5w/6Ty83p5tnY+ifx0zz3wwZ7qzmq88CFJ1teiPq7For5mzSpMUFNOiUwE90nl4jgF3e9eUMjIRlPT+BA8q2Ryea4nDY4Woq7wIG12H+bDE/3HnZmcM+tFWjJ1pStqpeYutRsDVqE3QIm4Y4+UDzPCNtWd08Z1FeOqS/fkU8b0UrbPHkGscWluLsG3XqwAuo1v9X/vgHxJ4ZCPsVVAJA2saIz0ReKH2qEyyAp3+X8NTBb6a88Elqgkd8ygg4pz43K5LrQ+cRWyEYG7KS9kMg0/YAFzGBNYzVJco5W80DHrvpRR+8UxRPAQF5apIwMtefF91m/SgVttDT7aoqGEbJAQu5z7UZTFq6Lfl4UQ+nhemB4onFmoZ/efqn6LVDntvKybZB2FrWsnPzXtI/SJZdg7COEfdIQ6GZTps3ucDuN1sAVzt2RDhIBINJYXG7lTcDazVdBzDqP3Sd5B8vj5rFYX9EI0HL3c2ClClURScX8t2vyLVchzmX4ThygjD5U0c9bVp0PMUE9Yzy+04ExhZ+MT6kGplUBM67pyeQvmbnDHUUHq6rnN6BTjzhvG2WF5P616VGzPZ33FMs899iYbIA5gnisGmjr6JIcU0wrQYxVT12K64HXm3XB8KgHCUbuql/Whn3tZ5nrxqFwE0YiKtFTdQldAgcR1c1N4gkQeS+yJkh7qZzg7Q2RqknpSV0ynwaiRF+SBFa+EbMwqgltDIkFIzcD5kumoXK9oFw56gq/KuPYuap+bnKr6iwKpGLYgfxCE5ThXLmKv+62Szp4wdi1q+EKxZrlVdFyRdkEJhbgyRAv45PKKYEnxBSC03G7OamuWwQF2USJUEZom4Mr1u5qyvjQtpnez9WfLyzhVLJGgv03+pxb29G1sgQnA2tj+wFHsH2Tb4v76VO/bI2AW+jOYnlq3CPfrFxpD5fM2R5zsJkeWWewdd03JLLXTmrVETS0Fk/KoH4Cjpy6G9Zq+skPJqZNJ8ChcyqhUD+uY3bDJLvlGCEilsXdcqIZiT/xaDAphMrN6bB/jPctNzI32VBGh0/7bwDIPqUxyTFfp3RdRgM3qrztv/5W7RC9LX+qWeZlzCmz0gMfOM7ClFpchgSpXU5jEQycvXqzc2UZ3SPBfVAch7HL7NE3gpvq0oUevyYrfRqlsUmy4cvFVEZF1+1G1oYV4aG7JGSh3x1EfUr6ngzWtIW19a7/9k3oHkwtLbSzsQm6StSMPMn0L7a7BYfDAUJGOo0zPi/sTXVqHWPgiMp/YttHgRQJfVJ6BQ1LKrwJux9q/hgQaFhwLL7LwK0aMgvppOz8yPt+TEHTfRRtIzFQiBlna37WmqUY3TElC/PFmIxg+x13t7HMUqZKSgdxyXJEls0/qn/XplrHH2dC/NXe/bkM7X0cNym55478fblJDUk+zBepHzg4Bb7rROo/oNUyev8sTgzle2qKeADoSvCmSAuIoqwcC2DufiAnqDcP08Kb0YZ8dK1U5kH9j5IjgUafx6NIvsfgPlsV+A39yePvriRILLFRMTqXBh5FGq242DaW8K9l37P4rTYZD0w0efLGj0HXJmKHySpZFhyNMNd7i6e6qC+FBLn9AMY4NoKcgqVw6S2+mtzxjcOXYzNTN1PLia9Qnu8T3Xjo/dYWZgLLjm2ycRAZyLpxqhLtGBqa31+qIMist/VdWdymFwoj5igd9tGk6MS0u591z/Lmb+EhbpVueteLJtIwCzjcIESUPWaGxkI/u9kxp0xcOOuUD6g1A94MPMeHn00EpTegZ21UzwPajNU3bpECSTI6opUQ8Ef0C2ASbZ6nxWC96KgCI6ByQfBe7ymsmIZv/X5OcfZiDKdak+sUrC+sIVTkuy22P/XOkj/kZ45YK2SabIdG09d9faVGg0MQjrBto6c2ikjCsnJFtDNzGpO8aMxmD8SoiFvyohVIMsR49OY1SlaNxBTpv48sd1GQTkW+hHM9UCFCLMuP3zllmEX3/rYKjxYlEDd6uBq8v4R2ipxvPVOpEAzWrq03CX4BwEolKrOSsKMLFmF2X62MZjUC0OFH6Dk/EJZZK3ci/BzpDh8DB2zp3MAD3mv+9wAsnqdby/8xoq+ZPPwkOW9KWloOSB+EKiMZBKh4TichxS7rSDJ/Rm9Rwpbnw0ymsGsTyJ/KoPHfHyVzI0Dh+AISTu23z45m1ZDMcG99GBJ4T8Yd6x0IJ6lsYJFyIPxAUY5Ok7JFuMFjPkqZRqrIJz5vt2uPe85pwkWLBQr9D8N/CRe7t4htOYvVGQbvPHcpQrvNRJzoVTXzlpu45iA1YNHbWQ6GC0f/QjtzC3FI7Y6dkoXCat+dHZjs24lbUJWacW8I/KbfBO+QUxz9QZHlN9G3iXoL7HISHZANSq6KSmWEBXT7pELtbVXsm16vNv2c7ufTJZylzNBlUE38K+/CnXPTyNI6YC/z5OKBvVHo2PxgUmmWSGizRiArnvUjsDO1uTFhQkIQv5eK0zvSYxRAJGa3OjCf6fj8dOUVcs3nr+skN/FqOIQYOf0o8P/3mjsB4QxTS1Py68HTiZF18wZXCmxB8WHEGW3S72PfoAMmFFvKHbCb/xKhi9Y8WV4DLDI/AVhEStfTB1d6/G8eySpJaLv/LJAbxTwye9fv0m9vWAgCkuw1eEYqh3vz2Na25rE7MvIBZJ6SAXStHs770bBqLWXv5GCBsw0CEPeBzURPwKSlEttHdlE89wkC0ZC9IyeAKfLZS61BZgpCNrkycWToDOdv5RO7KoMODI9+1XFzayTahGBzzH0z5qzP9u6Rh838bgU5JXoOzM/ga88jPQ8Y0MXV6qY8CTc6SoTKe6AFQmN+Of1O2Yyat5TGBQyT7Ds+BZ3CTBii75uRBNOPW139lfSiZNbtvjEFPlwVjDpj9EWhJkcsSHZEpcIJXMO1k6BIkjLgPaAJGSOdJRYocPrdKW+ElJDpS3h2KGdJWuhtb2gpXBlIkmlUAm9+oGBSszcK5XWkuqmI6C0QaGN/cXvXS8hSaN+j/jxPG8UVIIzHxTVrWNZtK5TNl4KgUcwN8ktZPgbNvG3WEET27bYme2d96l8SO+4jHPjeCLGCKPS3qRqC1lcw0CcoMpUbPIHVCbed32CRgMr99dzVZ8J7+2G4VITm7mwpAqowr3AdV2Y9SG3TjGMr8Iay9i6ju3Y8drVlEgkFwNoNUopJ5ffB9sMiN+blQlrUz4VhDZqskowykFp4OmGtEanU9h0219Wr4w4TFvSW8ITuyqkEGKJcLAXHj5YfwfCsW7qYJ4GM61BXX3mPw1L4WdR2kDCc7OifVxxWDpqT5tKX0t+2DvtJ+nQfe2M3PnoNGs0yn8gAmfb0xsUkRg+dUvjsvA72WGI6jJ8Hi24uuIoBI2gNvEP/wIrU7/CtxHamz3Xxhz0zdLXuZJvqapXRAOGSBnFiy14uScI19eyEJMQj1safnrZcheTxc3zdOyJ6VyrLut+BcHqgJAev5uacAxhZzgmOeJmMVWxHcOGr1XseUMUqYkehMN6w6UAsy3ptsfHnnwqRNqsOcgTCnMxxMEPJR0rqfpKsyBGw8QV5643zsOuY3TAiUqwmAcpfTnuUef6IP9RxCPqmg/iVyX5ui6Omg45UElKYx8hv3yBbORdIeAscYe9gshp0m34LwElui+YqRCWFzEw4TTO2ustBhCj6FZbr/p6Om3u4QsNj1frHJnC7KBIleH/bG7I6NzuBFootpWr9XUOyfedlg7rTSLa4dUuSlTMZYqwsdsoFEffaYlFK9SX1UV9soceu+N1j+A4asR2U0T3HJB7167pRq5X7y0HHxEbMI9F+NNyIwp5jvDHihdo/1MDB3mUPmIvKOTvCj6TmGVNKDiC/r7SdIS7+kjkWS4LJtVQ6cXejmp1IYdmjZksoJ3E8Od+pLP4Ypt2VRw+DN38dkqPXtj5fWmKukS95boxIpKWOBub3ZJDqV7R7G8cGb2SoUKeWGZHg8tOL2DCullNL9Wi+IdfyOUHDnRGg6qyU0X6g5bAV9T7X5XkCwgj4Tkoo5RPDaukiwPodR3zSQuoeGSt/4N9DK8k9BS2/ayq8OAuKBYcQRJI++qQZpxRpImwi3aIRWKwMCjnDDfwxrOuEJphsv3J0O1L7I+9Tw/quokhOFNgk3n9kX/ALlkGmowoXH4Ty33ofIOKGfV5WxWk30WaG8OYtkPDg61KPsqXkocQV8M4oGQeyfPYj4tiVI2rDgw6b7rdrXlC3uL+Z+bHYgtFOFeWr1YyghNYZteVybFHxrZkIW+kzzmgOM3FSxoMdET/2HgdBWzmPtsFvKhpfx6yvB8zrxPYSb08qZAUFOxXzbYABYeMgEA319s1j9/B90v7SZ4jKFQpeQM1nN8u6DFlWa6zSU3mXIzsNv69LvBnWAFX82GH1SQz8ftMmRUXntQMcPzOxSGmGVbVBl9RetJBpdb8t/FKHHata0e2vjhjx7vW4TX9zSw+uVTn4u/+3Hsgy2YbX//twH+o99eD+4eKx72i8z+pC7Gxb/A27yYT6BPI5U7GE5PeMAW0vWR5UVjpfSWx7AIwaMdj+GuHiGR1lTEsJG6/rHTmuzLUqYDvUhkPVwpH3A+1F/xs1/Cp/5zt/aUDLfvvAmWkvLf0ZyJm9lXKnMlje3w0gYPKMuAj5O3AuzQrwgFiezKRn+A9zx07nnEuAWVwNLznV44tAMVPljlrchIK/keyONw88ZCs1BCf7ujbGxlG7kecHJC1zR/L14w4Sn8NgwRJK+m2AyAJt6Q5+aoJWRD1sGyQsAproes5dfnRjnLpA6KGdyhFNS2IeMhkz7xGfkvi+O2CuTx6bx++/90CSQ3SPRGrxUSa9hbE+bm2yTJWTNnWG9Xd4DysNJwHMKAETraNDE/vOMQcY+gTw7Q5xznZj3xcTpjeFpAB2od8Qm3U/V5JkMlxDLwP5MRAmIcC1/UEeFlHyk4kYPuxLUba+aYWleZlKCO+r6VTMmeYYFTzmBA4P0htobZNG9U4V0lyU9MgIZGmldMoGgfD9Z760uYi9AeLG2HQ3s1hN9XPT/73Wztk3kFFt6ISS6KsBfNqOjRexzZcq5ELT8oPfYvLBGXof6QUU4WbDdIgjTrH6bYHiSa9oA/y8XyP2DFfekZKgnbVayVR/eBx/TxpI4lBhKrTrHHifJYaNTtI1fRjnCNEhACwVXHnKR9vPUT52hY+cndioZR03KeDqOCpjk1wUkZ5shj6mGmQe0Qkz3AoRaqXb9DKeUrWLhQV+Z97ONL+ZV9sI2iYf4qN8aBPZxsfYEFkVxrDfDImYdbeETlVCpx7a5K2sP3YqWVp6fTx9wdw60gF3CO/6AFmCxtUgT8buF0b7ys4wVwlr3JOIY0OrHXcyoV4Jf8WbEDi6N3eh1LKjudgcP6V8EV6cmNEhidOUM+EJGe8AWKxYVXfXN5101RZXGxcXUm2p8VcYgU2yBj9WRPmvpvuu6Jp5D3CQoNzBDD9CUeyh5K8uHT/W41CshOoke2pSnqYGsB2qK0e8PxCv+RoqBDxOcqUP08GgVxD7aevJGWU6YBgHToLM0SBHG1Ix71so0RlJkisRD5B2hZEecoZKHKzW5XkGTeHnmB71teH29mTo2k3X+hbW+FwVzNgx1yZz+KMAA8jF1jDEG0OF/9JqUaWEzSmFhMerNzrQP0GboQ22XV1j5dRPRHhnI7r4S8uqnbbc5R2/fvf8dHipWabCZrEGLZQxkHy3pT8/wbYz8brjCaYVj/EcXZfHK7mWPqHGXoVEU9ocxtJRPdmQuR6AQ0ivzFwMi7Hi5531mkRCo6SUYXW5zWUolK+MaEP3DONUEe9YktktvtGd2rXN1gMEHTuSDkJmDwLUDnD/hK/r0jPpliKbcw/Jn/YIgkwCNtZZR65BXAKv9ZXb3gmOGODOuGKkTAKc7u3rq9Ravtt+D+SMIfXptZo+P+J7awrpf+tCxOZVG3qcFphT5LHqcXbbHgvsjrtU5LZ+/ovoykuiNM99EEbciAsTaA4mo0AOEzEb2ymZQu4RLQ6UKM7R5izSxy6hR1uDxf2UMtYVqC0SghRLiCyJZA+7z6qQnJ3GQt/oFq21OEz1DbJgFsT0C3Boa9bBtHtivRWzzxcFKm0F6d7FPaLMSX547axlFdyOg6+WH5RT79FQHKWux+Wbii4QyMDqLBPL8kuB9Xza0x3zqK0v9/Uk7sKBk7T68mAPLis7iHDa16l1q9YZIddfHt6oEmc7xwJA1VoRcOXpW0ZnSZq08RThweTOSXNLujzwcPaqK89hKqzSz5STNgq7f9gyGEeMyG2deECgN/yeCvNHS2WhafKBirxRp7PgiZBkzXBLVTB5S7qGJuw4Z4rQz34uG7754DZbt6Rm9TydphevVlgKUo12ZMI1VijIJFFupmOPw+MMIURZ0Zy7YAc9M9yHYIRVJ0T4ZaFsGG+nMXDifKdO3HLmR3jPh6qg5HJVSaYS7hggo9YwxqtQyu76RknidUYpMjITcPGBUhVp01yI188+enJjDQjTlLJH3t9/wBiDc+RR3bxlLoZCO0zdQLvvqFxmCCD9sjnZwdv1ot+Yu6Z6BJtczOn3N06XQxUlGfk3NM+w8Q29+q2nHv6ZSG3Iqje1YOfL4gkb1mddn5w9rZoxHOs1C5c4TF36hR/5GavpU8c8xxMBatHxUEN2d6hG5FzvRDXcv6uAv5SoZFz2BeVj3/fXzL2NeUBGsctHx1coHBLcmzol3chnJqor+RLZhB0wYDDQcmmMHlH3XSvJbScdhkuTR3hsXk6jZa7X69Gx52oqCak6SNgrz7R8eX4/qNqUub1ovgnWeZyaqM5qFHTcRmW3GIetBEkqjvVHAF6EqXat93Rho5kdQCwazevhTLP2s8wzQG4ivNMxGbzmBIO2e12h1EHf9nXwah4KM3GWy4nyVo8phyvZSivZaGa6MH4Qw3YqPcqdjx2wlmhR1QMPn1+/dnJ1JCUc3/SVqLM+gyxeKMoaE141nemKbpA/Ou/aQ7gs5ki2tlTKqpPiXIhED3oRwc1uBY4Evr7fomDVeim0TXV5Gg8Q0OuYRRmRnLtiOSQEZyY1qSshcfuVOJAWaMksWA7k7iN/5JZa3C+PEZ0RU6CmSo77gRDuxN8me+VSkW/i2VouWyXD4T9AiQUx86BXDewXqH9+y2o6mBkUb0uXSSdHbjJnj8ee56wFM+15uh8WUsKInWDXMrd+bFrKcBc2I+ydsK3YWd3FJAx5vOr1kOvjGRLCiDC9z1LmEIE6k94UoVQygyKOnvf394WF4XZrk1BFQYUEygpI8P689ASPPXZ6Z3SX911GyjJ/N8t/Z8KoeUWFD7tE6xICOKU7YhhNVXRHkNyGN4EKop8sSJvkawjz6Rv8SaZDZchEM9S9QdAu7eoi1nP/Zs6iZCGCAjuwoc6DQpztaJ1941PGu99IIKWBzvvV45IjxMShQjkgNaq3Dsu8kwGDVn2rjjoF6rGxj8B6A8+ETYZRaUN0F/7PA8IKENrrfjIZIpKw0SY9O2CP7XDO2TRQyNAB7R2JiUfA8LMMs2XAOMPjyoaVQucZEFabj2pmkLjYbbCgJLFO0k/nTbUi87JnsfWntVk64aAcKzFjxI30gbhb6KiaNGDxn6P2+Pt32yQ/poQEDYR7d6l7lEFU30/5wAVIiv0b9Co7vNpuG+ExZnDcrycbC5TR8cflFOComwFdIhdiyx37qTx4SfsbTZG8as/fkenAbjVcg6YyoD+QvXnxqhXfvYTzlIhZ4IoYeSnhPuKxNNIZI1devbRnmw5Uo4Bx7mpi5Y7zpyMEhvSIgG2JkMNLS9rBBBZYF8IGrINLd+jXXV3azFJ2S/Wc9ggk4u+BIPLluv0jAXX0AcvY90KQuFRua5bHxjvCawu7dneNX/fPmNXotrM7nUJRqLwuwN+wymuoXHSfznghr+B59BOifAolXFdiYR90wCqPtF2zq8LDsSQ5bUHw0DSIpxRsGy4OhLNvkxfJSHMjCFQiWo2binazsORNkAOcHUTCcZjjhehnSeBxSV5SenpjESpZ5MJXycoeC9KGFMdYFXIHX3CITuH6JCbOKGSuvRzNUvAbDdvuSEhurfSMkp4HXMgDmBgdXpLCdy8pb/nDuyCpsQEDnY+gaAbUrLw+hZXME6Hpr7Ur6kReap1orFlLukALyyefTiQVA5sdLnizPHlr28E4Ob+PY7Htv+gLEiPmeY0hGLYNPzYPMVjHGqb7NTNMIqb4hF5ZK8Kck/r96pFOw0oaP7I7/Qow3VP2bSl54a7SUgpLUWFDFgkA04zD7ZtXkNi2PZvBRM+upITj885i4CudhMEzO/5YO87uXcjxui8BK7gqdmvR2qCkcb7nN6O8Ou+0myq8yK+F2eB93paMemWHZ2C1uwRghStpJXb6hIngLEOjI8J9htF6e8x1dWoEabsZQIJ4sTEet+wy9FaAMOxO2xY7gOa3HH6Kov5SSCuYE6fIuGZwyELbC9jCua9uCMztWd2szPETmNo/xFSU6GFYpy50oSrNKktZr72LxSu3oY8zAZh7ml5n5O26qxyLcrbCIDGABrIcWnKL+OzHSF5bKBQ8Rqn/tbXAHDvr+twkSVWATPTn+mKpGGr8kCkYJBiqs5DD4QDgyKDu88LJT0VvUELFdZLjsOaFzFap9s7Ws69HmVvGx94AXDiShCr+QABwUfh1GQ6eLLJk6cx805Z5prLv1sAzj1qU+DdzWf7qFJLLWw4Hh5YssiwJAg22VN0M8HnDaquzChkR13wbi5deMb5pYqaceP98IgK3D78u/S2JMcGuVt4jchRBbmV6kkW1HikCLD/a0Iuld9cMjuTanUCYrnwxMBJkPGOGQdZ/XksahasPqGBI+O05mNj6ZUi/QTuW9WMf2eMJUkP6khZ9KddiSNP8Vq3R2mIjZouh+4kSzFzI2F/lSwjgn1jim6UBAS9EcdMnq0emkLkKLgDb+AbpbQdALbS8qeAted0AelhtZp3M9u401fyBbvfdY/K1e3qq+zhNAQBvhA9jWqWwbiTA8w7KBxPyhBIH6q4UfkPN8owGtrN6SWg1t4UrBPKPWd7PuxgNl0psbNJaOFrdeCKVhPof1wJuf2lV7LpsrHmwRuUYGxQwKBFk5/9IvcPmXxZXGKSg1ZNMu+/82J2ElpCu+Tf/wevwV85IGFvGpxyB4ZcrJE1PKn1SfhdFrm0QzEVRcJP+5J++c0mM3BYeo/x6rx1NVYbolgQvFrQ+NswYi1h5PirBsf3F75XmeB3mqW7H7MwqCQmgTfV5ps6C+PnZXxtJLU/2dhvQoaPYNu5hEEOfHBHsR9X+xZoLOgVzpoqRGOEkxVwXv9T4sooMPh2ju6lFO6Ue4hWuVFRxRRqhDcCWOvwGYHVV5bF8ppTFNBo5rS0plbbxtFEKZ7anB+jaeFBu6QmOJGo1dLpR9+T/aQJ9rymLhadDTxrtWYWEDA02EHls6WtVdMXnoijZci//3jUNU9RaAvTyobxhiKO+NCdX7E2Ck0P5vXSMCZF3xyYTiewEIHiwdmJ+Dp/mNCRC0760KsXpEd4Y6+v1hbF40iUJgVX6R4epbyDdKcTmsOlF9PGossrI/mcR72DiQtNwXNsID7Us3s/ZRCeKpO/rFTrCHOBygsKIQ1V5nJNgGnW2h+aqJC6w51FumCmL/2PXCIFzcy7D3m3lHM9oTgXCnEsE4ZEduzd/18zF/UnaUdhb5cqiIVqRcN2z9m0978AvcDku52DkG24RkITgNmBghMdUZunhAbJEQWBh7HnOnoZPj8QPJXptDYuws/kXsQ6caKiF6pi4JQnpXzQH+JQKH+t+TMmZioNI86AfZJT3LgCed8yc+GbC3ji+1/VW7dbuFg6JcCSjkgHYtQXsDCCjznq8m4ksCjy14SkOHFCJUfNT3NSMP7z0QEB0bIz9NRS66jggLe/tHgnoAWzWtfJO9LbUF9ARxBZAhiozKudbROlqnIBKxlj5AC04HoPTTpa66vtnUexwvf6puQZs9vgyShSNyeWuVvSS8xZCgi60T/GrVNGKGJkP9SoCNoHNSkDw8M0Pz1jh+vbbqn9h6F1NUMoO+oz5hFiSIoLSaUjirLoH9+iV+YC6raUyPEiRbbkMR7Z65iX8bTy6+x+LUfqsEkCV090vt8c9T+CV2N0ZoAJpmLkn9esU2DmJCvT9bsEKedKJduixOnUhnrTMBvRf3couiZW3dv8XIgai9KyYl+eqO8f3WwrCNmddjAy08VBMJkp9FppGSWAw6iC16tf4vTsCRP0XKq+zD5OM0bNW+6ESbjwwappda38P54kbPn5YZgIiRJG3l2i0KzmhazIUWsBhYBXEK5bscXR7L/tIQ5fSVpKM4rDFpbRYXlVQgVX/MzvxrHDTYyiXi/KDVbio/aZcRGdbn77wmhjMDfZaf7Zmx7QAaPS4L6z/0uY3EquWx9RdtTGRaH1EOxEBoK6swB616ahGay0KKAyLSGYGCN10P34gxD05tvoMhcgvBxU+w+68NSuYxN1lCHBjl2yUXOXiGhR3pCPky9X9rjuD7tr5s2nmkLIfa6ZFfhx75JNDHolBUC6xZO8n+yeZT+fSfI9QdMcWheK/qEK0SKXeGonmXaMLzlaPzW/BDoqWz0/iA5XYA7URROQxwBbGhy/JKxMGwKzDTsM8SySSaUO2l/kRBjvSKnVDNc40QllIgUBLoKjmPKE88t6i/Doo5Wp955pUfDbn/YCRczrNvkw4XaJJ5KI9EoRJbrKNCyqRDXpVKo7h6ItbqfpZcdk/Bhtd0qgtyzCqLuT9ZCoSwoL09GAZcBcd6NFjt0lsAmFFIJiACF2juKu3cp0axkik26KWXnBUz//JLjeCdfXicAgqJI9JhworW0vUClc8BYIXr6PNrGTXdjaw0QzPMb8pLugLbytB66b8AhYqKNudR8cLWcj5knWR3SeNuk3mwGwoZ7CIFFUkQ0oSHl8mKFPvXrjY3SwHpz1zefXSALd1CjtyonVGAZfXGNHHrU4HHOyQLPI6hwq/caqAri9M/dWZPrFcLiEMSYWe86acFg5kDskHR4SyWyxYmz0mNz673dAycgV336BWN6JzpphqNoiNcFqzpOyBNvi2HxuQJi/1T1SZuRQaZ6Dw6QqGHiWJ+ONuYrrelONf5AEZlSI/B5ODjPH6KIM8YQcUxo7v8awiJzD34tve+rgUJuker6HozPVKnGF7E4bFSM1rxmH4nomv2dDptiLqe8xt8Ept1WaNXxu/L33eQ8eehMYSGUFlDTPIuc9Vnj1yAaO8EdH5yS2HRlzmMx6pe+8YnSoJTTDncKiIPymYw9Y3UEBAzfiL0sP+uhN5pkdlj2bJhhAs6oPledMMbgC1S4TeA4u7IMa1YnmQ8xxGZ8KsJ73PpCSXX2mxcmP8U8aZ84KcrCiLT+JnAGbmLPuJlMMklroY2oe56riFSU6fFVyhu0DRwme72DkXFBpxIx44aRWwXoZocp4W0cp/va0IwgL3Xeah/eDRhDs/s7FNtVxKMoj03Shubsm8cHIVAVtY5Gw1UCQydaW1WkctDsU2xnYK4xKIzFa93AuN8UIwODMYS2E/jgy+BIm8ODvyZpkv2if8bFpRaxmZduyCYJbvJIRNReylEuWV+EzqBPAjvhArYG+x/t/OS/JOWMnHRMJ/qt2oVWEeaLm/yABiI+EsltqM8+Xcqdz1LHgNi/wo6R6hRTHJfxEJWQlVOpFLS9XqeJ2Ia90W6yiWmw/eZczhxAVChb29tQz+YcD/O49wPnkStSFKmgQz9PY89VC8w61809Y0yHTiM8wC2Tk6YghpkjylKJctH7oQ1pSRQD6q/DI5N3bm3cdm4BydGCyLovUBi7YwRqWVRyfN2cS0KZBq7iwIxFmyU1eehkL84Z1U3bZ1Pq+kMt8M3rZZ1prRtq+s/ewEQVilO8RlKhrqoeY3B2lvyauq+6DdvU52DJEwLT6mLoc8aslkwBxghlDwwqwZ3ABFS0UcDZz5a/DYSTlzCAURYLvj9N5hiQhUw+kLrXxMLXmCn4nxkdtH9t33YzJb9JMDQjMADlrUac1FrWM2BhNSFAnDFOSuzlUQmpCQXdy27R51brHu+nkfjQsSwSFL5S4LS4XiWrecAJOfqoYc08lN6aeVO72DUYWnto/c3c4hCKcfMbaPAhVoeIRFhUWAnhWI85MYjTMhzNkZ/czz4yZyjbX+mD7W9JD9rlrPs3fR+AU5jQPsHo1x3NBlqaoujA44fthvWvfhiq+iTqJeXWeRQDJlYgqBhHmX2BKC0H1L++uWRT+mADuMGwi9WHMA2qSUPYCcXIIyNdZ8nEvqUmTmiPjhNIkOubEV4CT47JUlkT9xsr96HS8ZtKawkYs2H5gxprSN+F3rSEjwBAQhKHKaMM2eKF7ZnLBymTozkDUJnI7DIoys01KnFGYBlTrybFPib/jBS16dsYijpQi7xxqOJcXff6JhV92bYFUe3H7RuOH105Vu7jSPeyFvzdg6JrWnlDbHegzJcReiRG19pd3DkVGxCTBMI0bQZYQQf+1jX8vvgOHCurqLg3QCsnIYP3JftOAR8n4m8Gvp3ltDkrHNBCWlA2tAO4SOaKgogVptsFQXFVTXBipjzqrMGMtKygn4HjoqHGpdqeIKlQfSpy8F+HT3aOolWs6Hy6Fl5bqRE9t6mmYWrtDMHnizRGfMhbppq7HWkocmVsIro9MmehD1nsl1UX55QDujIJ3gE9bxO3j82Xizh3RuTzYGyQ0G30MfuU23XD7HeoYoHjhwbcrqKznISU73NrFtKKPT3kqFf/9/p8ZHOIvgNk+4fi3acakuEmSJZb9Pu2ImzFTYjd1EU2/QfIe4RNFfjnewT8Xw1vsL9cJd2CNFC9FJyBVig6ZF7uWVuy8GXjSpZ025T4oVRoM9vyohCtLIeHIkY9QMexWZI1fcjtS2VtYrOK3gSHpVkedCGtOPi+80XhGxy0/g5TlqL9JbdUD39bBqPtL7Ts61qIIJNRWhHx1vPH7NSMnLprQE5qvMrWmWmvzki4Epmjk6aVAk6Awghu7yfA1MVRVvdIl3Hkv3NyOtn3ltBJ7Ua7H+NSGSPsEGB4CZ96MWr+479WNXhtmKtZmVpSmcuw/NKQLfpRPxuM8zQt9EeO4hiZYAo8O4LWgXwnW4mde6jQbN7mKC4qpsb56k4FdeNu/5II1mIQt0XFo0Dv08Q31wxmuhN91HoSTVyH05qeEKjE45x6z3fb8nswzUWHNU5UuM7gssTX9K5R0hAngFKTSa4JRbxaYjk1FqlHknH3/PKW/t3vAuD9MGOdmD8Z7xOc6sY3PoDePO3nOOgHAEu29GpybPkAZMuboTiZMYAdJhiJGqmlfhuEi2gYP648W98QQCflwZyr4OjPogXXsNWs4pk9YEkyU5XgXN5c3TSZD0RNeK7x0VNNJpTiPbIo1igpNGm+a1EdVASerwAlgzZ8Wx1e1w9GnNcAYdG0L1+WROwKwKVFB1mv8YcbbTrG40P606rrcTIpYu5D1Ly9ADrfbuAEfLs7d92UJ0zNO1lLuU2fOnL/uCvkxwlSS4gTSeYe85eHT2JVrs9GwRoHTpA48S2QyB+KAOMJTdBV7Vzay2F7aVHqQltlGxZfJzJA3x8qIz4UNUw4tpG5SfsXfuv0+zSF+ZN1nnLahUMUPSU5dMxSUz0wOK14seSI7K4/GEf7osmNiwCENO4tyR6dVrw+TjFFtsE5poajC+oOKWuELbRBkopMKCzQnVO3S6wpEiXjBxBlb5dJoWvoQFZxa0hNp9nlykQ/wIZbq0qelqNdxEdYdY2x0IP1GvuZzcccUJ7Dr+OF61FjKoe2zR+68pJvpmyd4k88i6SEGrGGCqB5CMfQwo95XkgD+F9ttgcfZ/qycqZm5egaD6dWW4xDd7nQjIQBJqUYHSBgYwiAhIyHOYosUPdieXbUqVsjpAJt3wASDdrPXcb6mmZ/DwsQQIfrhZEft2IKCdq8PpW+bcaYNIjV4LyixMt7qap43NZ/Gy1jrjQBTpUgKGNkIs6GPubBTYi6cCzviP7xywkMTZSQBLbYgwjIik+bjmxn1QQXvXvYqKOTdcF0nwhaboY7zibK3NISoLYFCrSRTV6G7I7O11T3/OPcEqbYeD7+hjS1pCRJrkLiBhQ5Y8J4E/DJ09C/vu4JhitUJwcV52HA50i5KD99McjsD5t1i3SFbZfFi6ZzTVLuVkNC0zvJ+UJR9+Y2krsl70BfJKGX2ZHdRjCYUoD8uesx4reCADl6mX8XKQ7QoDItvgILkYYHRS68NjhorWruQOQzMxraFxExAEpFa3KKc00IHrT/Oum0SI8CDCdZ22h/JoLOEclZqp8MSK2DCMhoIKeIaNvwkKCPO8XgiBIJv8dOkABakq++aYrIbKdvX61SgVVU3TKsY4wCM36Fe7waihnTQo3h5mKwZ0mdSoTJOyZU/itmRw\"}";

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
