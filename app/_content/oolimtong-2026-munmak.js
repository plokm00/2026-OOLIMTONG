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
  }

  h1, h2, h3 { font-family: 'IBM Plex Sans KR', sans-serif; }

  section {
    padding: 88px 60px;
    border-bottom: 1px solid var(--line);
  }

  .section-label {
    font-size: 11px;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 14px;
    font-weight: 500;
  }

  h2.section-title {
    font-size: clamp(26px, 4vw, 44px);
    font-weight: 700;
    color: var(--text);
    margin-bottom: 36px;
    border-left: 3px solid var(--accent);
    padding-left: 20px;
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
    padding: 92px 60px 76px;
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
  .cover-divider {
    width: 72px;
    height: 3px;
    background: var(--accent);
    margin: 34px 0 26px;
  }
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
  /* 포스터 윗변을 커버 기본 여백선(왼쪽 eyebrow 줄 윗변)보다 4px 더 내린다.
     구분선 기준으로는 96px 아래. */
  .poster-col {
    margin-top: 4px;
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
  .about-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
  }
  .about-card {
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

  /* 울림통 카드는 글이 길어, 두 칸을 쓰게 두어 줄 수를 줄인다. */
  @media (min-width: 721px) {
    .about-grid { grid-template-columns: repeat(3, 1fr); }
    .about-card.wide { grid-column: span 2; }
  }

  .session-strip {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 28px;
  }
  .session-chip {
    border: 1px solid var(--accent);
    background: var(--accent);
    color: var(--white);
    border-radius: 999px;
    padding: 8px 20px;
    font-family: 'IBM Plex Sans KR', sans-serif;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.02em;
  }
  .session-chip small { font-weight: 400; opacity: 0.85; margin-left: 4px; }

  /* ── 예약 현황 ── */
  .booking-layout {
    display: grid;
    grid-template-columns: minmax(0, 340px) minmax(0, 1fr);
    gap: 44px;
    align-items: start;
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
    padding: 12px 14px;
    border-bottom: 1px solid var(--line);
    white-space: nowrap;
  }
  table.booking th {
    font-family: 'IBM Plex Sans KR', sans-serif;
    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--accent2);
    border-bottom: 1px solid var(--accent);
    font-weight: 600;
  }
  table.booking td.num { font-variant-numeric: tabular-nums; }
  table.booking tr.dim td { opacity: 0.35; }
  .booking-empty {
    padding: 24px 0;
    font-size: 14px;
    color: var(--text-dim);
  }
  .booking-summary {
    margin-bottom: 14px;
    font-size: 13px;
    color: var(--text-dim);
  }
  .booking-summary strong { color: var(--accent2); }

  .detail-box {
    margin-top: 26px;
    border: 1px solid var(--line);
    border-radius: 3px;
    background: var(--bg2);
    padding: 20px 22px;
  }
  .detail-box h3 {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.06em;
    margin-bottom: 6px;
  }
  .detail-box p.hint { font-size: 12.5px; color: var(--text-dim); margin-bottom: 14px; }
  .detail-form { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
  .detail-form input {
    font-family: inherit;
    font-size: 14px;
    letter-spacing: 0.3em;
    padding: 9px 14px;
    width: 140px;
    border: 1px solid var(--line);
    border-radius: 2px;
    background: var(--white);
    color: var(--text);
  }
  .detail-form input:focus { outline: none; border-color: var(--accent); }
  .detail-form button {
    font-family: 'IBM Plex Sans KR', sans-serif;
    font-size: 13px;
    font-weight: 500;
    padding: 10px 20px;
    border: 1px solid var(--accent);
    background: var(--accent);
    color: var(--white);
    border-radius: 2px;
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s;
  }
  .detail-form button:hover { background: var(--accent2); border-color: var(--accent2); }
  .detail-form button.ghost { background: none; color: var(--accent2); }
  .detail-form button.ghost:hover { background: var(--bg3); color: var(--accent2); }
  .detail-msg { font-size: 13px; color: var(--accent2); margin-top: 10px; min-height: 20px; }

  /* ── 신청 안내 ── */
  .apply-lead {
    max-width: 720px;
    font-size: clamp(16px, 1.5vw, 19px);
    line-height: 1.9;
    margin-bottom: 34px;
  }
  .apply-lead strong { color: var(--accent2); font-weight: 600; }

  .apply-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 36px;
    align-items: start;
  }
  .apply-block h3 {
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: var(--accent2);
    margin-bottom: 14px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--line);
  }
  .perk-list { list-style: none; }
  .perk-list li {
    position: relative;
    padding-left: 26px;
    margin-bottom: 14px;
    font-size: 15px;
    line-height: 1.85;
  }
  .perk-list li:last-child { margin-bottom: 0; }
  .perk-list li::before {
    content: "";
    position: absolute;
    left: 4px;
    top: 11px;
    width: 8px;
    height: 8px;
    background: var(--accent);
    border-radius: 50%;
  }
  .perk-list li small { display: block; color: var(--text-dim); font-size: 13px; }

  .form-card {
    border: 1px solid var(--line);
    background: var(--bg2);
    border-radius: 3px;
    padding: 22px;
  }
  .form-card pre {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    line-height: 2.1;
    white-space: pre-wrap;
    color: var(--text);
    background: var(--white);
    border: 1px solid var(--line);
    border-radius: 2px;
    padding: 16px 18px;
  }
  .form-card pre span { color: var(--text-dim); }
  .form-actions {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 14px;
    flex-wrap: wrap;
  }
  .copy-btn {
    font-family: 'IBM Plex Sans KR', sans-serif;
    font-size: 13px;
    font-weight: 500;
    padding: 9px 18px;
    border: 1px solid var(--accent);
    background: var(--accent);
    color: var(--white);
    border-radius: 2px;
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s;
  }
  .copy-btn:hover { background: var(--accent2); border-color: var(--accent2); }
  .copy-msg { font-size: 13px; color: var(--accent2); }

  /* ── 문의 ── */
  .contact-row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 8px;
  }
  .contact-btn {
    font-size: 13px;
    letter-spacing: 0.04em;
    text-decoration: none;
    color: var(--text-dim);
    border: 1px solid var(--line);
    border-radius: 2px;
    padding: 9px 18px;
    transition: background 0.15s, color 0.15s, border-color 0.15s;
  }
  .contact-btn:hover { background: var(--accent); border-color: var(--accent); color: var(--white); }
  .contact-btn.primary { background: var(--accent); border-color: var(--accent); color: var(--white); font-weight: 500; }
  .contact-btn.primary:hover { background: var(--accent2); border-color: var(--accent2); }

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

  @media (max-width: 900px) {
    .cover-grid { grid-template-columns: 1fr; gap: 36px; }
    .booking-layout { grid-template-columns: 1fr; gap: 30px; }
    .apply-layout { grid-template-columns: 1fr; gap: 30px; }
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
    #cover { padding: 56px 22px 48px; }
    .cover-meta { grid-template-columns: 60px 1fr; font-size: 14px; }
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
    <a href="#apply" onclick="closeNav()">신청 안내</a>
    <a href="#about" onclick="closeNav()">프로그램</a>
    <a href="#poster" onclick="closeNav()">포스터</a>
    <a href="#booking" onclick="closeNav()">예약 현황</a>
    <a href="/oolimtong_archive" class="nav-cta" onclick="closeNav()">울림통 아카이브 ↗</a>
  </div>
</nav>

<!-- ── 커버 ── -->
<section id="cover">
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
        <dd>인스타그램 DM<small>@NINNIK_KRAFT</small></dd>
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

<!-- ── 신청 안내 ── -->
<section id="apply">
  <p class="section-label">Apply</p>
  <h2 class="section-title">신청 안내</h2>

  <p class="apply-lead">
    <strong>참가비 없이 누구나 자유롭게 현장에서 참여할 수 있는 열린 워크숍</strong>입니다.<br>
    다만 사전 신청을 해주시면 아래 두 가지를 챙겨드립니다.
  </p>

  <div class="apply-layout">
    <div class="apply-block">
      <h3>사전 신청 혜택</h3>
      <ul class="perk-list">
        <li>혼잡할 때 우선 참여<small>현장에 사람이 몰리면 신청하신 분들부터 안내해 드립니다.</small></li>
        <li>작업 사진 전송<small>흙을 만지시는 모습을 사진으로 담아, 행사가 끝난 뒤 보내드립니다.</small></li>
      </ul>

      <h3 style="margin-top:32px;">준비하시면 좋아요</h3>
      <ul class="perk-list">
        <li>흙이 묻어도 괜찮은 편안한 복장</li>
        <li>가을 낮볕을 피할 개인 물품<small>모자, 음료 등</small></li>
        <li>어린이는 보호자와 함께<small>보호자분도 같이 흙을 만지시면 더 즐겁습니다.</small></li>
      </ul>
    </div>

    <div class="apply-block">
      <h3>사전 신청 방법</h3>
      <p style="font-size:14px;color:var(--text-dim);line-height:1.85;margin-bottom:16px;">
        인스타그램 <a href="https://instagram.com/ninnik_kraft" target="_blank" rel="noopener noreferrer" style="color:var(--accent2);">@NINNIK_KRAFT</a>
        DM으로 아래 양식을 작성해 보내주시면 사전 신청이 완료됩니다.
      </p>
      <div class="form-card">
        <pre id="apply-form-text">예약자 성함:
연락처:
참여 인원: 총 0명 <span>(성인 0명 / 아동·청소년 0명)</span>
방문 예정 시간: <span>(운영시간 10:00 ~ 16:00 중 기재)</span></pre>
        <div class="form-actions">
          <button class="copy-btn" type="button" onclick="copyApplyForm()">양식 복사하기</button>
          <span class="copy-msg" id="copy-msg"></span>
        </div>
      </div>
      <p style="font-size:13px;color:var(--text-dim);margin-top:14px;line-height:1.85;">
        워크숍은 9월 5일·12일·19일 토요일 세 번, 각 날짜 오전 10시부터 오후 4시까지 열립니다.<br>
        원하시는 날짜와 방문 시간을 함께 적어 주세요.
      </p>
    </div>
  </div>

  <div class="contact-row" style="margin-top:40px;">
    <a class="contact-btn primary" href="https://instagram.com/ninnik_kraft" target="_blank" rel="noopener noreferrer">@NINNIK_KRAFT DM ↗</a>
    <a class="contact-btn" href="https://map.naver.com/p/search/동화마을수목원" target="_blank" rel="noopener noreferrer">동화마을수목원 길찾기 ↗</a>
    <a class="contact-btn" href="/oolimtong_archive">울림통 아카이브 ↗</a>
    <a class="contact-btn" href="/oolimtong_manual">울림통 매뉴얼 ↗</a>
  </div>
</section>

<!-- ── 프로그램 소개 ── -->
<section id="about">
  <p class="section-label">Program</p>
  <h2 class="section-title">프로그램 소개</h2>
  <div class="about-grid">
    <div class="about-card">
      <h3>흙으로 잇다</h3>
      <p>점토를 손으로 반죽하고 길게 밀어 타래를 만듭니다. 그 타래를 켜켜이 쌓아 올리고 다지며, 여럿의 손이 하나의 형태를 함께 지어 나갑니다.</p>
    </div>
    <div class="about-card wide">
      <h3>울림통</h3>
      <p>울림통은 흙으로 짓는 공명의 기(器)입니다. 완성된 형태보다 함께 쌓아 올리는 과정과 그 안에 담기는 이야기를 중요하게 봅니다. 생태적으로는 굽지 않은 흙에 기름과 발수제를 이용한 최소한의 마감을 함으로써 최종적으로는 자연으로 돌아가는 생애주기마저 작품의 한 맥락으로 봅니다. 동화마을수목원에서 짓는 작품은 공간을 품은 종 모양의 일반 울림통이 아닌, 거대한 울림통의 한 벽면을 떼어놓은 것 같은 형태로 제작하게 됩니다.</p>
    </div>
    <div class="about-card">
      <h3>즉흥적으로</h3>
      <p>정해진 도면 없이 그날 모인 사람들의 손과 호흡에 따라 형태가 달라집니다. 세 번의 토요일마다 다른 울림통이 태어납니다.</p>
    </div>
    <div class="about-card">
      <h3>참여 안내</h3>
      <p>참가비 없이 지역주민 누구나 참여할 수 있습니다. 사전 신청 없이 현장에서 바로 함께하셔도 되고, 미리 신청하시면 혼잡할 때 우선 참여하실 수 있습니다.</p>
    </div>
  </div>

  <div class="session-strip">
    <span class="session-chip">9. 5. <small>토</small></span>
    <span class="session-chip">9. 12. <small>토</small></span>
    <span class="session-chip">9. 19. <small>토</small></span>
    <span class="session-chip" style="background:none;color:var(--accent2);border-color:var(--line);">오전 10시 ~ 오후 4시</span>
    <span class="session-chip" style="background:none;color:var(--accent2);border-color:var(--line);">참가비 무료</span>
  </div>
</section>

<!-- ── 예약 현황 ── -->
<section id="booking" style="border-bottom:none;">
  <p class="section-label">Reservations</p>
  <h2 class="section-title">예약 현황</h2>

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
      <p class="booking-summary" id="booking-summary"></p>
      <div class="booking-table-wrap">
        <table class="booking">
          <thead id="booking-head"></thead>
          <tbody id="booking-body"></tbody>
        </table>
      </div>
      <p class="booking-empty" id="booking-empty" style="display:none;">해당 날짜에는 아직 예약이 없습니다.</p>

      <div class="detail-box">
        <h3>상세보기</h3>
        <p class="hint">신청자 성함·연락처·인원 구성이 포함된 전체 목록입니다. 진행자 확인용 비밀번호가 필요합니다.</p>
        <form class="detail-form" id="detail-form" autocomplete="off">
          <input type="password" id="detail-pw" inputmode="numeric" maxlength="8" placeholder="••••" aria-label="비밀번호">
          <button type="submit">상세보기</button>
          <button type="button" class="ghost" id="detail-hide" style="display:none;" onclick="hideDetails()">가리기</button>
        </form>
        <p class="detail-msg" id="detail-msg"></p>
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
  var PACKED = "W3siaWQiOiJyMSIsIm5hbWUiOiLsnbTsp4TtnawiLCJwaG9uZSI6IjAxMC05MzE4LTA5OTEiLCJkYXRlIjoiMjAyNi0wOS0xOSIsInRpbWUiOiIxMzowMCIsInRvdGFsIjozLCJkZXRhaWwiOiLshLHsnbggMuuqhSDCtyDslYTrj5kv7LKt7IaM64WEIDHrqoUifSx7ImlkIjoicjIiLCJuYW1lIjoi7ZeI7Z2s6rK9IiwicGhvbmUiOiIwMTAtOTkwNy02MDcyIiwiZGF0ZSI6IjIwMjYtMDktMTkiLCJ0aW1lIjoiMTQ6MDAiLCJ0b3RhbCI6bnVsbCwiZGV0YWlsIjoi7J247JuQIOuvuOyglSJ9LHsiaWQiOiJyMyIsIm5hbWUiOiLsnbTrj5ntnawiLCJwaG9uZSI6IjAxMC04ODU3LTgzNDkiLCJkYXRlIjoiMjAyNi0wOS0xMiIsInRpbWUiOiIxMDowMCIsInRvdGFsIjo2LCJkZXRhaWwiOiLshLHsnbggNOuqhSDCtyDslYTsnbQgMuuqhSJ9XQ==";

  var rows = [];
  var showDetails = false;
  var selectedDay = null;

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

  function dayOf(iso) { return parseInt(iso.slice(8, 10), 10); }

  function fmtDate(iso) {
    var m = parseInt(iso.slice(5, 7), 10);
    var d = parseInt(iso.slice(8, 10), 10);
    var dow = "일월화수목금토".charAt(new Date(iso + "T00:00:00").getDay());
    return m + "." + d + ".(" + dow + ")";
  }

  function fmtTime(t) {
    var h = parseInt(t.slice(0, 2), 10);
    return h + "시";
  }

  function fmtTotal(n) { return n == null ? "미정" : n + "명"; }

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function sorted() {
    return rows.slice().sort(function (a, b) {
      if (a.date !== b.date) return a.date < b.date ? -1 : 1;
      return a.time < b.time ? -1 : 1;
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
        '<span class="cal-dot">' + (count ? count + "건" : "예약 0") + "</span></div>";
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

    head.innerHTML = showDetails
      ? "<tr><th>이름</th><th>연락처</th><th>날짜</th><th>시간</th><th>총인원</th><th>인원 구성</th></tr>"
      : "<tr><th>이름</th><th>날짜</th><th>시간</th><th>총인원</th></tr>";

    var html = "";
    list.forEach(function (r) {
      if (showDetails) {
        html += "<tr><td>" + esc(r.name) + "</td><td class=\\"num\\">" + esc(r.phone) +
          "</td><td class=\\"num\\">" + fmtDate(r.date) + "</td><td class=\\"num\\">" + fmtTime(r.time) +
          "</td><td class=\\"num\\">" + fmtTotal(r.total) + "</td><td>" + esc(r.detail) + "</td></tr>";
      } else {
        html += "<tr><td>" + esc(mask(r.name)) + "</td><td class=\\"num\\">" + fmtDate(r.date) +
          "</td><td class=\\"num\\">" + fmtTime(r.time) + "</td><td class=\\"num\\">" + fmtTotal(r.total) + "</td></tr>";
      }
    });
    bodyEl.innerHTML = html;
    if (empty) empty.style.display = list.length ? "none" : "block";

    if (summary) {
      var known = list.filter(function (r) { return r.total != null; });
      var people = known.reduce(function (a, r) { return a + r.total; }, 0);
      var undecided = list.length - known.length;
      var scope = selectedDay == null ? "전체" : "9월 " + selectedDay + "일";
      summary.innerHTML = scope + " · 예약 <strong>" + list.length + "건</strong> · 인원 <strong>" + people + "명</strong>" +
        (undecided ? " <span>(인원 미정 " + undecided + "건 별도)</span>" : "");
    }
  }

  function render() {
    renderCalendar();
    renderTable();
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
  window.copyApplyForm = function () {
    var text = [
      "예약자 성함:",
      "연락처:",
      "참여 인원: 총 0명 (성인 0명 / 아동·청소년 0명)",
      "방문 예정 시간: (운영시간 10:00 ~ 16:00 중 기재)"
    ].join("\\n");
    var msg = document.getElementById("copy-msg");

    function done(ok) {
      if (!msg) return;
      msg.textContent = ok ? "복사했습니다. DM에 붙여넣어 주세요." : "복사에 실패했습니다. 직접 선택해 복사해 주세요.";
      setTimeout(function () { msg.textContent = ""; }, 4000);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
      return;
    }

    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
    document.body.removeChild(ta);
    done(ok);
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
        if (msg) msg.textContent = "전체 예약 정보를 표시합니다.";
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

  var posterImg = document.getElementById("poster-img");
  if (posterImg) {
    if (posterImg.complete && posterImg.naturalWidth === 0) window.markPosterMissing();
    posterImg.addEventListener("error", window.markPosterMissing);
  }

  rows = unpack();
  render();
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
  scripts: [{ attributes: {}, content: script }],
};

export default pageData;
