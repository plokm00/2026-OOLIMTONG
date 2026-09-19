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
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@400;500;600;700&family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
  :root { --bg:#f6ede6; --bg2:#eee0d6; --bg3:#e4d0c4; --line:#ceb0a0; --accent:#c03828; --accent2:#8c2418; --text:#261410; --text-dim:#7a4c3c; --salmon:#ffb8b0; }
  * { margin:0; padding:0; box-sizing:border-box; }
  html { overflow-y:scroll; scrollbar-gutter:stable; }
  body { background:var(--bg); color:var(--text); font-family:'Noto Sans KR',sans-serif; font-size:15px; line-height:1.75; padding-top:56px; }

  #nav { position:fixed; top:0; left:0; right:0; z-index:100; background:rgba(246,237,230,0.95); backdrop-filter:blur(8px); border-bottom:1px solid var(--line); display:flex; align-items:center; justify-content:space-between; padding:0 max(40px, calc((100% - 940px) / 2)); height:56px; }
  .nav-left { display:flex; align-items:baseline; gap:14px; min-width:0; }
  .nav-logo { font-size:13px; letter-spacing:0.12em; color:var(--accent); font-weight:500; text-transform:uppercase; white-space:nowrap; text-decoration:none; }
  .nav-title { font-family:'IBM Plex Sans KR',sans-serif; font-size:16px; font-weight:700; color:var(--text); white-space:nowrap; }
  .nav-right { display:flex; align-items:center; gap:14px; }
  .nav-print { font-size:12px; color:var(--accent2); background:var(--salmon); border:none; padding:5px 13px; border-radius:2px; cursor:pointer; font-family:inherit; white-space:nowrap; }
  .nav-back { font-size:12px; color:var(--text-dim); text-decoration:none; letter-spacing:0.08em; white-space:nowrap; }
  .nav-back:hover { color:var(--accent); }

  .wrap { padding:56px max(40px, calc((100% - 940px) / 2)) 72px; }
  .head-tag { font-size:11px; letter-spacing:0.36em; color:var(--accent); text-transform:uppercase; font-weight:600; margin-bottom:14px; }
  h1 { font-family:'IBM Plex Sans KR',sans-serif; font-size:clamp(28px,4.4vw,44px); font-weight:900; line-height:1.15; margin-bottom:14px; }
  .head-meta { font-size:14.5px; color:var(--text-dim); line-height:1.9; }
  .head-meta b { color:var(--accent2); font-weight:600; }
  .rule { height:1px; background:var(--line); margin:30px 0 0; }

  table { width:100%; border-collapse:collapse; margin-top:30px; }
  thead th { font-family:'IBM Plex Sans KR',sans-serif; font-size:11.5px; font-weight:600; letter-spacing:0.16em; text-transform:uppercase; color:var(--accent); text-align:left; padding:0 16px 10px; border-bottom:2px solid var(--line); }
  tbody td { padding:18px 16px; border-bottom:1px solid var(--line); vertical-align:top; }
  tbody tr:nth-child(odd) td { background:var(--bg2); }
  .t-time { width:132px; font-family:'IBM Plex Sans KR',sans-serif; font-size:15px; font-weight:700; color:var(--accent2); white-space:nowrap; }
  .t-what { width:34%; font-size:14.5px; font-weight:500; line-height:1.7; }
  .t-what span { display:block; font-size:12.5px; font-weight:400; color:var(--text-dim); margin-top:3px; }
  .t-do { font-size:13.5px; color:var(--text-dim); line-height:1.8; }
  .t-do ul { list-style:none; }
  .t-do li { position:relative; padding-left:13px; }
  .t-do li::before { content:'·'; position:absolute; left:3px; color:var(--accent); font-weight:700; }
  .t-do b { color:var(--accent2); font-weight:600; }

  .foot { margin-top:26px; font-size:12.5px; color:var(--text-dim); line-height:1.9; }
  .foot a { color:var(--accent2); }

  @media (max-width:680px) {
    .wrap { padding:40px 20px 56px; } #nav { padding:0 20px; }
    .nav-logo { display:none; }
    table, thead, tbody, tr, td { display:block; width:100%; }
    thead { display:none; }
    tbody tr { border-bottom:1px solid var(--line); margin-bottom:8px; }
    tbody td { border-bottom:none; padding:4px 16px; }
    tbody td:first-child { padding-top:14px; }
    tbody td:last-child { padding-bottom:16px; }
    .t-time, .t-what { width:auto; }
  }

  @media print {
    body { background:#fff; padding-top:0; font-size:11px; }
    #nav { display:none !important; }
    .wrap { padding:0; }
    h1 { font-size:24px; }
    .head-meta { font-size:11px; }
    tbody tr:nth-child(odd) td { background:#fff; }
    tbody td { border-bottom:1px solid #bbb; padding:10px 12px; break-inside:avoid; }
    thead th { border-bottom:1px solid #666; color:#000; }
    .t-do, .t-what span { font-size:10.5px; line-height:1.6; }
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

<div class="wrap">
  <p class="head-tag">Run Sheet · For Event Assistants</p>
  <h1>11회차 모임 진행 큐시트</h1>
  <p class="head-meta">
    <b>2026. 9. 20. (일) 15:00 – 20:00</b> &nbsp;·&nbsp; 니닉크라프트<br>
    시민작가 17명 · 3팀 (네모 · 고리 · 미로) &nbsp;|&nbsp; 마지막 회차 — 제작 없이 답사 · 마감 · 기록
  </p>
  <div class="rule"></div>

  <table>
    <thead>
      <tr><th>시간</th><th>진행</th><th>보조 인력 할 일</th></tr>
    </thead>
    <tbody>
      <tr>
        <td class="t-time">15:00 – 16:30</td>
        <td class="t-what">모이기 · 울림통 3기 답사<span>세 팀의 완성작을 함께 둘러보고 기름칠</span></td>
        <td class="t-do"><ul>
          <li>기름칠 재료 준비 — 천연 오일 · 붓 · 마른 붓 · 헌 천 · 장갑 · 방수포</li>
          <li>기름칠 <b>전 · 후</b> 촬영, 울림통별 전경 1컷씩</li>
          <li>오일 흘러내림 정리, 부족한 재료 보충</li>
        </ul></td>
      </tr>
      <tr>
        <td class="t-time">16:30 – 17:30</td>
        <td class="t-what">개별 작품 마무리<span>각자의 모뉴먼트 점검 · 마무리</span></td>
        <td class="t-do"><ul>
          <li>마감재 전달 (아교 · 바니시 · 픽사티브 · 오일스테인)</li>
          <li><b>모뉴먼트 개별 촬영 — 오늘 각자 가져가시므로 반출 전 필수</b></li>
          <li>팀별 논의 결정사항 메모해 작가에게 전달</li>
        </ul></td>
      </tr>
      <tr>
        <td class="t-time">17:30 – 18:00</td>
        <td class="t-what">정리 · 바비큐 준비</td>
        <td class="t-do"><ul>
          <li>도구 세척 · 수납, 작업대 정리</li>
          <li><b>야외 · 단체 사진은 해 지기 전에</b> 먼저 확보</li>
          <li>테이블 · 의자 · 조명 배치</li>
        </ul></td>
      </tr>
      <tr>
        <td class="t-time">18:00 –</td>
        <td class="t-what">바비큐 · 깜짝 질문 인터뷰<span>식사와 함께 각 작가님께 인터뷰</span></td>
        <td class="t-do"><ul>
          <li>인터뷰 촬영 — <b>참여 작가 전원</b>, 1인 1~2분, 명단 체크하며</li>
          <li>바람 · 소음 적은 자리 1곳, 삼각대 고정</li>
          <li>화기 관리, 식사 중 스냅 계속</li>
        </ul></td>
      </tr>
      <tr>
        <td class="t-time">19:00 –</td>
        <td class="t-what">자유 귀가</td>
        <td class="t-do"><ul>
          <li>모뉴먼트 포장 (에어캡 · 박스 · 이름표) · 차량 적재 보조</li>
          <li>촬영이 끝난 작품만 내보내기</li>
        </ul></td>
      </tr>
      <tr>
        <td class="t-time">20:00</td>
        <td class="t-what">종료</td>
        <td class="t-do"><ul>
          <li>불 · 숯 완전 소화, 쓰레기 분리배출</li>
          <li>바닥 · 작업대 청소, 야외 작품 덮개 처리</li>
          <li>촬영 파일 <b>당일 업로드</b> (날짜_회차_순번) · 근무일지 작성</li>
        </ul></td>
      </tr>
    </tbody>
  </table>

  <p class="foot">
    ※ 하나어린이집 야외(미로) 답사 이동 여부, 바비큐 준비 담당은 당일 작가 안내에 따릅니다.<br>
    ※ 이상 상황은 즉시 작가에게 보고해 주세요. &nbsp;|&nbsp; <a href="/oolimtong_2026_wcf_assistant">보조 작업자 근무일지 ↗</a>
  </p>
</div>
`,
  scripts: [],
};

export default pageData;
