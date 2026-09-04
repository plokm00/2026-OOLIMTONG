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
const opsCipher = "{\"salt\":\"8vyF7/0o53c3VU9hpQ+hNw==\",\"iv\":\"CORfNEcmwr2zc8k3\",\"iter\":100000,\"data\":\"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\"}";

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
