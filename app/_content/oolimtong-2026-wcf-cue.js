// 11회차(2026. 9. 20.) 모임 진행 큐시트 — 행사 보조 인력 배포용.
const pageData = {
  metadata: {
    title: "11회차 모임 진행 큐시트 | 울림통-변주 2026",
    openGraph: {
      type: "website",
      title: "11회차 모임 진행 큐시트 · 2026. 9. 20.",
      description: "행사 보조 인력용 진행 큐시트",
    },
    twitter: {
      card: "summary",
      title: "11회차 모임 진행 큐시트 · 2026. 9. 20.",
      description: "행사 보조 인력용 진행 큐시트",
    },
  },
  styles: [
    `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@300;400;500;600;700&family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
  :root { --bg:#f6ede6; --bg2:#eee0d6; --bg3:#e4d0c4; --line:#ceb0a0; --accent:#c03828; --accent2:#8c2418; --text:#261410; --text-dim:#7a4c3c; --salmon:#ffb8b0; }
  * { margin:0; padding:0; box-sizing:border-box; }
  html { scroll-behavior:smooth; overflow-y:scroll; scrollbar-gutter:stable; }
  body { background:var(--bg); color:var(--text); font-family:'Noto Sans KR',sans-serif; font-size:15px; line-height:1.75; padding-top:56px; }

  #nav { position:fixed; top:0; left:0; right:0; z-index:100; background:rgba(246,237,230,0.95); backdrop-filter:blur(8px); border-bottom:1px solid var(--line); display:flex; align-items:center; justify-content:space-between; padding:0 max(40px, calc((100% - 1040px) / 2)); height:56px; }
  .nav-left { display:flex; align-items:baseline; gap:14px; min-width:0; }
  .nav-logo { font-size:13px; letter-spacing:0.12em; color:var(--accent); font-weight:500; text-transform:uppercase; white-space:nowrap; text-decoration:none; }
  .nav-title { font-family:'IBM Plex Sans KR',sans-serif; font-size:16px; font-weight:700; color:var(--text); letter-spacing:0.02em; white-space:nowrap; }
  .nav-right { display:flex; align-items:center; gap:14px; }
  .nav-print { font-size:12px; color:var(--accent2); background:var(--salmon); border:none; padding:5px 13px; border-radius:2px; letter-spacing:0.04em; cursor:pointer; font-family:inherit; white-space:nowrap; }
  .nav-back { font-size:12px; color:var(--text-dim); text-decoration:none; letter-spacing:0.08em; white-space:nowrap; }
  .nav-back:hover { color:var(--accent); }

  section { padding:56px max(40px, calc((100% - 1040px) / 2)); border-bottom:1px solid var(--line); }
  h2 { font-family:'IBM Plex Sans KR',sans-serif; font-size:clamp(20px,2.6vw,27px); font-weight:700; color:var(--text); margin-bottom:10px; border-left:3px solid var(--accent); padding-left:18px; }
  .sec-lead { font-size:13.5px; color:var(--text-dim); margin:0 0 26px 21px; line-height:1.85; }

  /* 표지 */
  #cover { background:var(--bg); padding:72px max(40px, calc((100% - 1040px) / 2)) 56px; }
  .cover-tag { font-size:11px; letter-spacing:0.4em; color:var(--accent); text-transform:uppercase; font-weight:600; margin-bottom:18px; }
  .cover-title { font-family:'IBM Plex Sans KR',sans-serif; font-size:clamp(32px,5vw,58px); font-weight:900; line-height:1.12; margin-bottom:10px; }
  .cover-sub { font-size:15px; color:var(--text-dim); letter-spacing:0.02em; }
  .cover-divider { width:40px; height:2px; background:var(--accent); margin:24px 0; }
  .fact-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:10px; margin-top:26px; }
  .fact { background:var(--bg2); padding:18px 20px; }
  .fact h4 { font-size:11px; letter-spacing:0.16em; color:var(--accent); text-transform:uppercase; font-weight:600; margin-bottom:8px; }
  .fact p { font-size:14px; line-height:1.7; }
  .fact p b { font-family:'IBM Plex Sans KR',sans-serif; font-size:16px; }
  .fact p span { font-size:12.5px; color:var(--text-dim); }

  /* 오늘의 성격 */
  .today-box { background:var(--bg2); padding:26px 30px; margin-bottom:16px; }
  .today-box p { font-size:14px; color:var(--text-dim); line-height:1.95; }
  .today-box p b { color:var(--accent2); }
  .mission-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; }
  .mission { background:var(--bg2); padding:20px 22px; border-top:3px solid var(--accent); }
  .mission .m-no { font-family:'IBM Plex Sans KR',sans-serif; font-size:12px; font-weight:700; color:var(--accent); letter-spacing:0.1em; }
  .mission h4 { font-family:'IBM Plex Sans KR',sans-serif; font-size:16px; font-weight:700; margin:4px 0 8px; }
  .mission p { font-size:13px; color:var(--text-dim); line-height:1.8; }

  /* 큐시트 */
  .cue-list { display:flex; flex-direction:column; gap:8px; }
  .cue { display:grid; grid-template-columns:152px 1fr; background:var(--bg2); }
  .cue.prep { background:var(--bg3); }
  .cue.key { background:var(--salmon); }
  .cue-when { padding:20px 18px; border-right:1px solid var(--line); }
  .cue-time { font-family:'IBM Plex Sans KR',sans-serif; font-size:15px; white-space:nowrap; font-weight:700; color:var(--accent2); line-height:1.4; }
  .cue-tag { display:inline-block; margin-top:6px; font-size:10.5px; letter-spacing:0.1em; color:var(--text-dim); border:1px solid var(--line); padding:1px 7px; border-radius:2px; }
  .cue-main { padding:20px 24px; min-width:0; }
  .cue-head { font-family:'IBM Plex Sans KR',sans-serif; font-size:16.5px; font-weight:700; margin-bottom:3px; }
  .cue-note { font-size:12.5px; color:var(--text-dim); margin-bottom:12px; }
  .cue-main ul { list-style:none; }
  .cue-main li { position:relative; font-size:13.5px; line-height:1.85; padding-left:17px; margin-bottom:3px; }
  .cue-main li::before { content:''; position:absolute; left:2px; top:11px; width:5px; height:5px; border:1px solid var(--line); background:rgba(255,255,255,0.5); }
  .cue-main li.star::before { background:var(--accent); border-color:var(--accent); }
  .cue-main li b { color:var(--accent2); }
  .cue-main li span.sub { display:block; font-size:12.5px; color:var(--text-dim); line-height:1.7; }

  /* 체크리스트 */
  .pack-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; }
  .pack { background:var(--bg2); padding:20px 22px; }
  .pack h4 { font-family:'IBM Plex Sans KR',sans-serif; font-size:14.5px; font-weight:700; margin-bottom:10px; padding-bottom:8px; border-bottom:1px solid var(--line); }
  .pack ul { list-style:none; }
  .pack li { position:relative; font-size:13px; line-height:1.8; padding-left:16px; color:var(--text-dim); }
  .pack li::before { content:''; position:absolute; left:1px; top:10px; width:6px; height:6px; border:1px solid var(--line); background:rgba(255,255,255,0.6); }
  .pack li b { color:var(--text); font-weight:500; }

  /* 팀 */
  .team-list { display:flex; flex-direction:column; gap:8px; }
  .team-row { display:grid; grid-template-columns:150px 200px 1fr; gap:0 22px; background:var(--bg2); padding:18px 24px; align-items:center; }
  .team-name { font-family:'IBM Plex Sans KR',sans-serif; font-size:18px; font-weight:700; color:var(--accent2); }
  .team-name span { display:block; font-size:12px; font-weight:400; color:var(--text-dim); letter-spacing:0.04em; }
  .team-where { font-size:13px; color:var(--text); line-height:1.7; }
  .team-where span { display:block; font-size:12px; color:var(--text-dim); }
  .team-people { font-size:13px; color:var(--text-dim); line-height:1.8; }

  /* 유의 */
  .warn-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
  .warn { background:var(--bg2); padding:20px 24px; border-left:3px solid var(--accent); }
  .warn.soft { border-left-color:var(--line); }
  .warn h4 { font-family:'IBM Plex Sans KR',sans-serif; font-size:14.5px; font-weight:700; margin-bottom:8px; }
  .warn ul { list-style:none; }
  .warn li { position:relative; font-size:13px; line-height:1.85; padding-left:14px; color:var(--text-dim); }
  .warn li::before { content:'·'; position:absolute; left:3px; color:var(--accent); font-weight:700; }
  .warn li b { color:var(--accent2); }
  .warn li a { color:var(--accent2); text-decoration:none; border-bottom:1px solid var(--line); }
  .warn li a:hover { color:var(--accent); }

  .foot { padding:34px max(40px, calc((100% - 1040px) / 2)) 60px; font-size:12px; color:var(--text-dim); letter-spacing:0.03em; line-height:1.9; }

  @media (max-width:900px) {
    .fact-grid, .mission-grid, .pack-grid { grid-template-columns:1fr 1fr; }
    .warn-grid { grid-template-columns:1fr; }
    .team-row { grid-template-columns:1fr; gap:10px; }
  }
  @media (max-width:620px) {
    section { padding:44px 20px; } #cover { padding:56px 20px 44px; } #nav { padding:0 20px; } .foot { padding:28px 20px 48px; }
    .nav-logo { display:none; }
    .fact-grid, .mission-grid, .pack-grid { grid-template-columns:1fr; }
    .cue { grid-template-columns:1fr; }
    .cue-when { border-right:none; border-bottom:1px solid var(--line); padding:14px 18px; display:flex; align-items:center; gap:10px; }
    .cue-tag { margin-top:0; }
    .cue-main { padding:16px 18px; }
    .sec-lead { margin-left:0; }
  }

  @media print {
    body { background:#fff; padding-top:0; font-size:11px; }
    #nav { display:none !important; }
    section { padding:16px 0; border-bottom:1px solid #ccc; }
    #cover { padding:0 0 16px; }
    .cover-title { font-size:26px; }
    h2 { font-size:16px; margin-bottom:6px; }
    .sec-lead { margin-bottom:12px; font-size:10.5px; }
    .fact, .pack, .mission, .today-box, .cue, .team-row, .warn { background:#fff; border:1px solid #bbb; }
    .cue.key, .cue.prep { background:#fff; }
    .cue, .pack, .mission, .team-row, .warn { break-inside:avoid; }
    .cue-main li, .pack li, .warn li { line-height:1.55; font-size:10.5px; }
    .cue-head { font-size:12.5px; }
    a { color:inherit; text-decoration:none; }
  }
`,
  ],
  stylesheets: [],
  body: `
<nav id="nav">
  <span class="nav-left">
    <a class="nav-logo" href="/oolimtong_2026_wcf">ninnik × 울림통-변주 2026</a>
    <span class="nav-title">11회차 모임 진행 큐시트</span>
  </span>
  <span class="nav-right">
    <button type="button" class="nav-print" onclick="window.print()">인쇄 / PDF 저장</button>
    <a href="/oolimtong_2026_wcf" class="nav-back">← 메인으로</a>
  </span>
</nav>

<section id="cover">
  <p class="cover-tag">Run Sheet · For Event Assistants</p>
  <h1 class="cover-title">11회차 모임<br>진행 큐시트</h1>
  <p class="cover-sub">행사 보조 인력용 · 시간대별 할 일과 준비물</p>
  <div class="cover-divider"></div>
  <div class="fact-grid">
    <div class="fact">
      <h4>일시</h4>
      <p><b>2026. 9. 20. (일)</b><br><span>15:00 – 20:00 &nbsp;|&nbsp; 보조 인력 13:30 집합</span></p>
    </div>
    <div class="fact">
      <h4>장소</h4>
      <p><b>니닉크라프트</b><br><span>원주시 문막읍 원문로 1734-15<br>+ 하나어린이집 야외 (미로 답사)</span></p>
    </div>
    <div class="fact">
      <h4>참여</h4>
      <p><b>시민작가 17명 · 3팀</b><br><span>작가 김아영 전 팀 동행<br>일반 자유체험 예약 없음</span></p>
    </div>
    <div class="fact">
      <h4>성격</h4>
      <p><b>마지막 회차</b><br><span>제작 없음 · 답사 / 마감 / 기록 / 반출</span></p>
    </div>
  </div>
</section>

<section id="brief">
  <h2>오늘은 이런 날입니다</h2>
  <p class="sec-lead">5월부터 이어온 11회 과정의 마지막 모임입니다. 흙을 쌓는 작업은 끝났고, 완성된 작품을 함께 보고 마감하고 기록하는 자리입니다.</p>
  <div class="today-box">
    <p>
      세 팀이 각각 만든 <b>대형 울림통 3기</b>가 완성되어 있습니다. 오늘은 세 작품을 함께 둘러보며 <b>기름칠(마감)</b>을 하고,
      각자 만든 <b>개인 모뉴먼트</b>를 점검·마무리한 뒤 <b>집으로 가져갑니다.</b>
      저녁에는 바비큐와 함께 작가님들께 깜짝 질문 인터뷰가 진행됩니다.<br>
      오늘의 기록물은 11월 전시와 NFC 콘텐츠의 바탕이 됩니다. <b>오늘 촬영한 것이 곧 전시 자료</b>라고 생각해 주세요.
    </p>
  </div>
  <div class="mission-grid">
    <div class="mission">
      <span class="m-no">MISSION 01</span>
      <h4>기름칠 세팅 · 보조</h4>
      <p>울림통 3기와 개인 모뉴먼트의 오일 마감을 준비하고 곁에서 돕습니다. 재료를 미리 꺼내 두고, 바닥 보호와 뒷정리를 맡습니다.</p>
    </div>
    <div class="mission">
      <span class="m-no">MISSION 02</span>
      <h4>전 과정 기록</h4>
      <p>답사 · 기름칠 전후 · 인터뷰 · 단체컷을 빠짐없이 촬영합니다. 특히 개인 모뉴먼트는 <b>반출 전에 반드시</b> 개별 촬영합니다.</p>
    </div>
    <div class="mission">
      <span class="m-no">MISSION 03</span>
      <h4>모뉴먼트 반출 지원</h4>
      <p>작가님들이 작품을 안전하게 가져가실 수 있도록 포장재를 준비하고 차량 적재를 돕습니다. 촬영 완료를 확인한 뒤 내보냅니다.</p>
    </div>
  </div>
</section>

<section id="cue">
  <h2>시간대별 큐시트</h2>
  <p class="sec-lead">왼쪽은 전체 일정, 오른쪽은 보조 인력이 그 시간에 할 일입니다. 체크박스에 표시하며 진행하세요.</p>
  <div class="cue-list">

    <div class="cue prep">
      <div class="cue-when">
        <p class="cue-time">13:30 – 14:30</p>
        <span class="cue-tag">사전 준비</span>
      </div>
      <div class="cue-main">
        <p class="cue-head">현장 · 재료 · 장비 세팅</p>
        <p class="cue-note">회차 시작 90분 전 집합. 시작 전에 끝내 두어야 하는 일입니다.</p>
        <ul>
          <li>작업 공간 청소, 답사 동선 확보 · 조명 · 환기 확인</li>
          <li><b>기름칠 세트 배치</b> — 천연 오일, 붓, 먼지 털 마른 붓 · 스펀지, 장갑, 헌 천<span class="sub">아교 · 바니시 · 픽사티브 · 오일스테인은 원하시는 분께만 드리도록 따로 모아 둡니다</span></li>
          <li>울림통 주변 바닥에 <b>방수포 · 신문지</b> 깔기 (오일 흘러내림 대비)</li>
          <li>카메라 · 삼각대 충전, 메모리 여유 확인, 업로드 폴더 생성 <b>20260920_11</b></li>
          <li>모뉴먼트 반출용 포장재 준비 — 에어캡 · 박스 · 노끈 · 유성펜 · 이름표</li>
          <li>바비큐 구역 테이블 · 의자 · 조명 위치 잡기<span class="sub">준비 담당은 작가님께 확인 필요</span></li>
        </ul>
      </div>
    </div>

    <div class="cue prep">
      <div class="cue-when">
        <p class="cue-time">14:30 – 15:00</p>
        <span class="cue-tag">맞이</span>
      </div>
      <div class="cue-main">
        <p class="cue-head">참여자 맞이 · 출석 확인</p>
        <ul>
          <li>팀별 명단으로 출석 체크 (아래 &lsquo;팀 · 작품 정보&rsquo; 참고)</li>
          <li>주차 · 화장실 안내, 야외 이동이 있음을 미리 알려 드리기</li>
          <li>지각 · 결석 연락을 받으면 <b>즉시 작가에게 전달</b></li>
          <li>보관 중인 개인 모뉴먼트 위치를 미리 파악 — 누가 무엇을 가져가는지 확인</li>
        </ul>
      </div>
    </div>

    <div class="cue key">
      <div class="cue-when">
        <p class="cue-time">15:00 – 16:30</p>
        <span class="cue-tag">본 일정</span>
      </div>
      <div class="cue-main">
        <p class="cue-head">모이기 · 울림통 3기 답사 · 기름칠</p>
        <p class="cue-note">세 팀의 완성작을 함께 둘러보고 기름칠을 진행합니다.</p>
        <ul>
          <li>답사 순서(예정) — <b>네모</b>(실내) → <b>고리</b>(실내) → <b>미로</b>(하나어린이집 야외)<span class="sub">하나어린이집 이동 여부와 차량 편성은 시작 전 작가님께 확인. 이전 회차에는 각자 차량으로 이동했습니다</span></li>
          <li>기름칠 순서 안내 — ① 마른 붓 · 스펀지로 먼지와 부스러기를 턴다 ② 천연 오일을 <b>얇게 여러 번</b> 펴 바른다 ③ 이음새와 굴곡진 곳은 붓 끝으로 꼼꼼히</li>
          <li class="star">한 번에 두껍게 바르지 않도록 곁에서 안내. 오일 묻은 헌 천은 한곳에 모아 둡니다</li>
          <li class="star"><b>NFC 칩 매립 부위</b>가 손상되지 않았는지 확인하고, 그 위에 오일이 두껍게 덮이지 않도록 주의</li>
          <li>촬영 — 기름칠 <b>전 전경 → 진행 컷 → 후</b> 순서로. 오일을 먹어 색이 올라오는 순간이 가장 중요한 컷입니다</li>
          <li>울림통별 <b>전경 · 디테일 · 입구 · 이름이 드러나는 부분</b>을 각 1컷 이상 확보</li>
          <li>오일 · 붓이 부족하면 즉시 보충, 무거운 재료는 카트 사용</li>
        </ul>
      </div>
    </div>

    <div class="cue key">
      <div class="cue-when">
        <p class="cue-time">16:30 – 17:30</p>
        <span class="cue-tag">본 일정</span>
      </div>
      <div class="cue-main">
        <p class="cue-head">개별 작품 마무리 · 팀별 논의</p>
        <p class="cue-note">각자의 모뉴먼트를 점검하고 마무리합니다. 동시에 팀별로 남은 일정을 논의합니다.</p>
        <ul>
          <li>모뉴먼트 건조 상태 · 균열 점검을 돕고, 원하시는 분께 마감재(아교 · 바니시 · 픽사티브 · 오일스테인) 전달</li>
          <li class="star"><b>픽사티브 · 스프레이류는 반드시 야외 또는 환기되는 곳에서</b> 쓰시도록 안내</li>
          <li class="star"><b>개인 모뉴먼트 개별 촬영 — 오늘 가져가시므로 지금이 마지막 기회입니다</b><span class="sub">밝은 무지 배경 앞에서 1점당 정면 · 측면 · 디테일 3컷. 작가 이름과 작품명을 파일 메모에 함께 남겨 주세요</span></li>
          <li>팀별 논의(작업 확장 · 진행 일정 · 설치 공간 · NFC 콘텐츠) 중 <b>결정사항을 받아 적어</b> 작가에게 전달</li>
          <li>논의 장면도 스냅으로 남기기</li>
        </ul>
      </div>
    </div>

    <div class="cue">
      <div class="cue-when">
        <p class="cue-time">17:30 – 18:00</p>
        <span class="cue-tag">전환</span>
      </div>
      <div class="cue-main">
        <p class="cue-head">정리 · 바비큐 전환</p>
        <ul>
          <li>도구 세척 · 건조 · 수납, 작업대와 바닥 정리</li>
          <li class="star"><b>야외 촬영분은 해가 지기 전에 마무리</b> — 하나어린이집 미로 컷과 단체컷을 밝을 때 먼저 확보</li>
          <li>바비큐 구역 세팅 마무리, 조명 점등, 손 씻을 곳 · 물티슈 배치</li>
          <li>오일 묻은 천은 뭉쳐 두지 말고 펴서 따로 처리</li>
        </ul>
      </div>
    </div>

    <div class="cue key">
      <div class="cue-when">
        <p class="cue-time">18:00 –</p>
        <span class="cue-tag">본 일정</span>
      </div>
      <div class="cue-main">
        <p class="cue-head">바비큐 · 깜짝 질문 인터뷰</p>
        <p class="cue-note">식사와 함께 각 작가님께 깜짝 질문 인터뷰를 진행합니다.</p>
        <ul>
          <li>인터뷰 자리 1곳 확보 — <b>바람과 소음이 적고 조명이 있는 곳</b>. 삼각대 고정, 마이크는 가까이</li>
          <li class="star">명단에 체크하며 진행해 <b>빠지는 분이 없도록</b> 관리 (1인 1~2분)</li>
          <li>촬영 전 녹음 레벨 한 번 확인, 배터리 · 메모리 여유 재확인</li>
          <li>식사 중 스냅 계속. <b>단체 사진 1컷은 반드시</b> 확보</li>
          <li>불 · 숯 관리, 화상 주의. 아이 동반 시 화기 주변 밀착 관리</li>
        </ul>
      </div>
    </div>

    <div class="cue">
      <div class="cue-when">
        <p class="cue-time">19:00 –</p>
        <span class="cue-tag">순차</span>
      </div>
      <div class="cue-main">
        <p class="cue-head">자유 귀가 · 모뉴먼트 반출</p>
        <ul>
          <li>포장 도움 — 에어캡으로 감싸고 박스에 고정, 이름표 부착</li>
          <li class="star"><b>촬영이 끝난 작품만 내보냅니다.</b> 반출 명단에 이름 · 점수를 체크</li>
          <li>차량까지 운반 보조 (무겁거나 큰 작품은 2인 1조)</li>
          <li>깨짐 · 파손이 생기면 즉시 작가에게 보고</li>
        </ul>
      </div>
    </div>

    <div class="cue">
      <div class="cue-when">
        <p class="cue-time">20:00</p>
        <span class="cue-tag">종료</span>
      </div>
      <div class="cue-main">
        <p class="cue-head">종료 · 정리</p>
        <ul>
          <li><b>불과 숯 완전 소화 확인</b>, 쓰레기 분리배출</li>
          <li>도구 세척 · 건조 · 수납, 바닥과 작업대 물청소</li>
          <li>울림통 3기 상태 재확인 — 야외 작품은 덮개 · 비닐 처리</li>
          <li>소모품 잔량 메모 (오일 · 붓 · 포장재)</li>
        </ul>
      </div>
    </div>

    <div class="cue prep">
      <div class="cue-when">
        <p class="cue-time">종료 후</p>
        <span class="cue-tag">당일 내</span>
      </div>
      <div class="cue-main">
        <p class="cue-head">기록 정리 · 근무일지</p>
        <ul>
          <li>촬영 파일 선별 후 <b>당일 중 공유 드라이브 업로드</b></li>
          <li>파일명 규칙 <b>날짜_회차_순번</b> — 예: 20260920_11_001</li>
          <li>회차 메모 작성 — 참여 인원 · 특이사항 · 작품 상태</li>
          <li>근무일지에 출퇴근 시각 · 업무 내용 기재 후 <b>작가 확인 서명</b> 수령</li>
        </ul>
      </div>
    </div>

  </div>
</section>

<section id="prep">
  <h2>준비물 체크리스트</h2>
  <p class="sec-lead">13:30 사전 준비 때 한 번에 확인하세요. 재료 목록표를 기준으로 빠진 항목을 점검합니다.</p>
  <div class="pack-grid">
    <div class="pack">
      <h4>기름칠 · 마감</h4>
      <ul>
        <li><b>천연 오일</b> (넉넉히)</li>
        <li><b>붓</b> — 크기별, 인원수 이상</li>
        <li>먼지 털 마른 붓 · 스펀지</li>
        <li>일회용 장갑 · 앞치마</li>
        <li>헌 천 · 걸레 다량</li>
        <li>방수포 · 신문지</li>
        <li>아교 · 바니시 · 픽사티브 · 오일스테인</li>
        <li>수채화 물감 · 파스텔 (선택 채색용)</li>
      </ul>
    </div>
    <div class="pack">
      <h4>기록 장비</h4>
      <ul>
        <li>카메라 · <b>여분 배터리</b> · 메모리</li>
        <li>삼각대</li>
        <li>인터뷰용 마이크 (있는 경우)</li>
        <li>촬영용 무지 배경천 · 보조 조명</li>
        <li>업로드 폴더 경로 확인</li>
        <li>파일명 규칙 메모</li>
      </ul>
    </div>
    <div class="pack">
      <h4>작품 반출</h4>
      <ul>
        <li>에어캡 · 완충재</li>
        <li>종이박스 (크기별)</li>
        <li>노끈 · 박스테이프</li>
        <li>유성펜 · 이름표</li>
        <li><b>반출 확인 명단</b> (출력본)</li>
        <li>운반용 카트</li>
      </ul>
    </div>
    <div class="pack">
      <h4>야외 이동 · 하나어린이집</h4>
      <ul>
        <li>이동 차량 편성표</li>
        <li>야외용 조명 · 손전등</li>
        <li>돗자리 · 간이 의자</li>
        <li>모기 기피제</li>
        <li>야외 작품 덮개 · 비닐</li>
        <li>물 · 종이컵</li>
      </ul>
    </div>
    <div class="pack">
      <h4>바비큐</h4>
      <ul>
        <li>그릴 · 숯 · 착화제 · 토치</li>
        <li>집게 · 가위 · 도마 · 접시</li>
        <li>테이블 · 의자 · 조명</li>
        <li>쓰레기봉투 (분리배출용)</li>
        <li>물티슈 · 키친타월</li>
        <li>아이스박스 · 음료</li>
      </ul>
    </div>
    <div class="pack">
      <h4>안전 · 기타</h4>
      <ul>
        <li><b>구급함</b> (화상 연고 포함)</li>
        <li>소화기 위치 확인</li>
        <li>출석부 · 명찰</li>
        <li>필기구 · 메모판</li>
        <li><b>근무일지</b></li>
        <li>연장선 · 멀티탭</li>
      </ul>
    </div>
  </div>
</section>

<section id="teams">
  <h2>팀 · 작품 정보</h2>
  <p class="sec-lead">출석 체크와 답사 안내에 사용하세요. 작가 김아영은 모든 팀에 함께합니다.</p>
  <div class="team-list">
    <div class="team-row">
      <div class="team-name">네모<span>토요일 오후 팀</span></div>
      <div class="team-where">니닉크라프트 실내<span>사각 · 피라미드형 상부</span></div>
      <p class="team-people">허양 · 이재홍 · 조영범 · 임계화 · 신정숙 <b>(5명)</b></p>
    </div>
    <div class="team-row">
      <div class="team-name">고리<span>일요일 오전 팀</span></div>
      <div class="team-where">니닉크라프트 실내<span>작품명 〈코아〉 · 눈 · 코 · 입 장식</span></div>
      <p class="team-people">이채명 · 박수연 · 박소연 · 이안 · 박진희 · 이성순 <b>(6명)</b></p>
    </div>
    <div class="team-row">
      <div class="team-name">미로<span>일요일 오후 팀</span></div>
      <div class="team-where">하나어린이집 야외<span>야외 설치 · 이동 필요</span></div>
      <p class="team-people">인동욱 · 민지현 · 조영범 · 김주원 · 김현국 · 이새롬 · 주장석 <b>(7명)</b></p>
    </div>
  </div>
  <p class="sec-lead" style="margin:16px 0 0;">※ 조영범 님은 토 · 일 오후 두 팀에서 활동하십니다. &nbsp;|&nbsp; 인동욱 님은 시민작가와 작업 보조를 겸임하십니다.</p>
</section>

<section id="cautions">
  <h2>꼭 지켜 주세요</h2>
  <p class="sec-lead">오늘 놓치면 되돌릴 수 없는 것들과, 시작 전에 작가님께 확인해야 할 것들입니다.</p>
  <div class="warn-grid">
    <div class="warn">
      <h4>되돌릴 수 없는 것</h4>
      <ul>
        <li><b>개인 모뉴먼트는 오늘 각자 가져갑니다.</b> 반출 전 개별 촬영을 놓치면 전시 자료에 쓸 이미지가 남지 않습니다</li>
        <li><b>기름칠 전 상태</b>는 오늘이 마지막입니다. 바르기 전 전경을 먼저 찍고 시작하세요</li>
        <li>야외(미로) 촬영은 <b>해가 지면 불가능</b>합니다. 17:30 이전에 확보</li>
        <li>인터뷰는 참여 작가 <b>전원</b>이 대상입니다. 중간에 귀가하시는 분이 없도록 순서를 관리하세요</li>
        <li>촬영 파일은 <b>당일 업로드</b>. 다음 날로 미루지 않습니다</li>
      </ul>
    </div>
    <div class="warn">
      <h4>안전</h4>
      <ul>
        <li>오일 · 픽사티브 · 바니시 — <b>환기 필수</b>, 스프레이는 야외에서</li>
        <li>오일 묻은 천을 뭉쳐 두지 말 것 (발열 위험). 펴서 따로 처리</li>
        <li>숯불 · 토치 화기 관리, 화상 연고 비치. 종료 시 <b>완전 소화 확인</b></li>
        <li>야외는 어두워지므로 발밑 조명 확보, 이동 동선 정리</li>
        <li>20kg 이상 재료 · 대형 작품은 카트 또는 2인 1조</li>
        <li>이상 상황은 스스로 판단하지 말고 <b>즉시 작가에게 보고</b></li>
      </ul>
    </div>
    <div class="warn soft">
      <h4>시작 전 작가님께 확인</h4>
      <ul>
        <li>하나어린이집 <b>이동 여부와 차량 편성</b> — 미로 답사를 현장에서 할지</li>
        <li><b>바비큐 준비 담당</b> — 그릴 · 식재료를 누가 가져오는지</li>
        <li>보조 인력 <b>인원과 역할 분담</b> (촬영 / 기름칠 / 반출)</li>
        <li>인터뷰 질문지와 촬영 형식 (가로 / 세로, 얼굴 노출 동의)</li>
        <li>울림통 3기 중 <b>추가 보완이 필요한 부분</b>이 있는지</li>
      </ul>
    </div>
    <div class="warn soft">
      <h4>참고 문서</h4>
      <ul>
        <li><a href="/oolimtong_2026_wcf">프로젝트 메인 — 11회차 공지</a></li>
        <li><a href="/oolimtong_2026_wcf_curriculum#tab-11">11회차 커리큘럼 자료</a></li>
        <li><a href="/oolimtong_2026_wcf_record">팀별 작업 기록</a></li>
        <li><a href="/oolimtong_2026_wcf_assistant">보조 작업자 근무일지</a></li>
        <li><a href="/oolimtong_manual">울림통 매뉴얼</a></li>
      </ul>
    </div>
  </div>
</section>

<p class="foot">
  울림통-변주 2026 &nbsp;·&nbsp; 주관 김아영 (니닉크라프트) &nbsp;·&nbsp; 후원 원주문화재단 보조금 지원사업<br>
  이 큐시트는 2026. 9. 10. 공지된 11회차 일정을 바탕으로 작성되었습니다. 현장 상황에 따라 순서와 시간은 조정될 수 있습니다.
</p>
`,
  scripts: [],
};

export default pageData;
