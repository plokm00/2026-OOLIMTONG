// 문막-흙으로 잇다 2026 현장 방명록 — 인쇄용 명단
//
// 체크인 페이지(/oolimtong_2026_munmak_checkin)가 Firestore에 적어 둔 방명록을
// 그대로 읽어 번호를 매긴 표로 뽑는다. 여기서는 읽기만 하고 아무것도 쓰지 않는다.
// 사전신청 명단은 체크인 페이지와 같은 방식으로 /oolimtong_2026_munmak 에서 가져온다.

const metadata = {
  title: "방명록 인쇄 | 문막-흙으로 잇다 2026",
};

const styles = [
  `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@400;600;700&family=Noto+Sans+KR:wght@400;500;700&display=swap');

  :root {
    --bg:      #f6ede6;
    --bg2:     #eee0d6;
    --line:    #ceb0a0;
    --accent:  #c03828;
    --accent2: #8c2418;
    --text:    #261410;
    --text-dim:#7a4c3c;
  }

  * { box-sizing: border-box; }
  body {
    margin: 0;
    background: var(--bg);
    color: var(--text);
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 15px;
    line-height: 1.6;
  }

  .wrap { max-width: 900px; margin: 0 auto; padding: 20px 16px 80px; }

  .top { display: flex; align-items: baseline; justify-content: space-between; gap: 10px; margin-bottom: 14px; }
  .top h1 { font-family: 'IBM Plex Sans KR', sans-serif; font-size: 19px; font-weight: 700; margin: 0; }
  .back-link { font-size: 11px; font-weight: 700; color: var(--accent2); text-decoration: none; white-space: nowrap; }
  .back-link:hover { text-decoration: underline; }

  .notice {
    background: var(--bg2); border: 1px solid var(--line); border-radius: 4px;
    padding: 11px 13px; font-size: 12.5px; color: var(--text-dim); margin-bottom: 14px;
  }

  .gate {
    background: var(--bg2); border: 1px solid var(--line); border-radius: 4px;
    padding: 22px; text-align: center;
  }
  .gate p { margin: 0 0 12px; font-size: 13.5px; color: var(--text-dim); }
  .gate input {
    font-family: inherit; font-size: 15px; padding: 8px 10px; width: 120px; text-align: center;
    border: 1px solid var(--line); border-radius: 4px; background: #fff; color: var(--text);
  }
  .gate button {
    font-family: inherit; font-size: 14px; font-weight: 700; padding: 9px 18px; margin-left: 6px;
    background: var(--accent); color: #fff; border: none; border-radius: 4px; cursor: pointer;
  }
  .gate button:hover { background: var(--accent2); }
  .gate .msg { display: block; margin-top: 10px; font-size: 12.5px; color: var(--accent2); min-height: 1.4em; }

  .controls { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-bottom: 16px; }
  .date-tabs { display: flex; gap: 6px; flex-wrap: wrap; }
  .date-tab {
    font-family: inherit; font-size: 13px; font-weight: 600; padding: 7px 14px; cursor: pointer;
    background: #fff; color: var(--text-dim); border: 1px solid var(--line); border-radius: 4px;
  }
  .date-tab.active { background: var(--accent); color: #fff; border-color: var(--accent); }
  .print-btn {
    margin-left: auto; font-family: inherit; font-size: 14px; font-weight: 700; padding: 9px 18px;
    background: var(--accent); color: #fff; border: none; border-radius: 4px; cursor: pointer;
  }
  .print-btn:hover { background: var(--accent2); }

  .sheet { background: #fff; border: 1px solid var(--line); border-radius: 4px; padding: 22px 24px; margin-bottom: 18px; }
  .sheet h2 {
    font-family: 'IBM Plex Sans KR', sans-serif; font-size: 17px; font-weight: 700;
    margin: 0 0 2px; letter-spacing: -0.2px;
  }
  .sheet .sheet-sub { font-size: 12.5px; color: var(--text-dim); margin: 0 0 14px; }

  table.roster { width: 100%; border-collapse: collapse; font-size: 13.5px; }
  table.roster th, table.roster td { border: 1px solid var(--line); padding: 6px 9px; text-align: left; }
  table.roster th { background: var(--bg2); font-weight: 700; font-size: 12.5px; white-space: nowrap; }
  table.roster td.num { width: 44px; text-align: center; color: var(--text-dim); }
  table.roster td.name { font-weight: 600; }
  table.roster td.team { width: 42%; color: var(--text-dim); font-size: 12.5px; }
  /* 이어받는 줄은 따옴표만 가운데에 — 종이 방명록에서 같은 팀을 묶는 표시. */
  table.roster td.team.ditto { text-align: center; color: var(--text-dim); letter-spacing: 1px; }
  /* 함께 온 단위가 바뀌는 자리에 선을 굵게 둬서 팀 경계가 보이게 한다. */
  table.roster tr.team-start td { border-top: 2px solid var(--line); }
  table.roster tr.slot-head td {
    background: var(--bg2); font-weight: 700; font-size: 12.5px; color: var(--accent2);
  }
  .roster-2col { display: grid; grid-template-columns: 1fr 1fr; gap: 0 14px; align-items: start; }
  @media (max-width: 700px) { .roster-2col { grid-template-columns: 1fr; gap: 14px 0; } }

  .empty-msg { font-size: 13px; color: var(--text-dim); text-align: center; padding: 24px 0; margin: 0; }
  .load-msg { text-align: center; padding: 30px 0; color: var(--text-dim); font-size: 13px; }

  /* ── 인쇄 ── */
  @page { margin: 14mm; }
  @media print {
    body { background: #fff; font-size: 11pt; }
    .wrap { max-width: none; padding: 0; }
    .no-print { display: none !important; }
    .sheet { border: none; border-radius: 0; padding: 0; margin: 0 0 10mm; }
    .sheet + .sheet { page-break-before: always; }
    table.roster { font-size: 9.5pt; }
    .roster-2col { gap: 0 7mm; }
    table.roster th, table.roster td { border: 1px solid #999; padding: 4px 6px; }
    table.roster th, table.roster tr.slot-head td { background: #eee !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    table.roster tr { page-break-inside: avoid; }
    thead { display: table-header-group; }
  }
  `,
];

const body = `
<div class="wrap">
  <div class="top">
    <h1>현장 방명록 · 인쇄용 명단</h1>
    <a class="back-link no-print" href="/oolimtong_2026_munmak_checkin">← 현장 체크인으로</a>
  </div>

  <div class="notice no-print">
    체크인 페이지에 적힌 이름을 그대로 번호 매겨 뽑습니다. 이름이 하나도 안 적힌 팀은 빠집니다.
    <b>인쇄</b>를 누르면 그대로 종이로 나오고, 인쇄 창에서 "PDF로 저장"을 고르면 파일로 받을 수 있습니다.
  </div>

  <div class="gate no-print" id="gate">
    <p>운영진 비밀번호를 입력하세요.</p>
    <div>
      <input type="password" id="gate-pw" inputmode="numeric" maxlength="8" placeholder="••••" aria-label="비밀번호">
      <button type="button" id="gate-btn">열기</button>
    </div>
    <span class="msg" id="gate-msg"></span>
  </div>

  <div id="app" style="display:none;">
    <div class="controls no-print">
      <div class="date-tabs" id="date-tabs"></div>
      <button type="button" class="print-btn" id="print-btn">인쇄 / PDF 저장</button>
    </div>
    <div id="sheets"></div>
  </div>
</div>
`;

const script = `
(function () {
  var PW = "1661";
  var reservations = null;
  var entries = null;
  var selectedDate = "all";
  var DITTO = "〃";

  // ── 명단 읽기 ──

  function unpackFromHtml(html) {
    var re = new RegExp('<script[^>]*id="munmak-reservations"[^>]*>([^<]*)</script>');
    var m = html.match(re);
    if (!m) return [];
    try {
      var packed = JSON.parse(m[1]);
      var bin = atob(packed);
      var bytes = new Uint8Array(bin.length);
      for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      return JSON.parse(new TextDecoder("utf-8").decode(bytes));
    } catch (e) {
      return [];
    }
  }

  function fetchReservations() {
    fetch("/oolimtong_2026_munmak")
      .then(function (res) { return res.text(); })
      .then(function (html) {
        reservations = unpackFromHtml(html);
        render();
      })
      .catch(function () {
        reservations = [];
        render();
      });
  }

  function attachSync() {
    if (!window.MunmakCheckinSync) return;
    window.MunmakCheckinSync.onData(function (next) {
      entries = next;
      render();
    });
  }

  // ── 표시 형식 ──

  function timeSortKey(t) {
    if (!t) return 9999;
    if (t === "AM") return 600;
    if (t === "PM") return 1300;
    var parts = String(t).split(":");
    if (parts.length !== 2) return 9998;
    var h = parseInt(parts[0], 10), m = parseInt(parts[1], 10);
    if (isNaN(h) || isNaN(m)) return 9998;
    return h * 60 + m;
  }

  function fmtTime(t) {
    if (!t) return "시간 미정";
    if (t === "AM") return "오전";
    if (t === "PM") return "오후";
    return t;
  }

  function dateLabel(dateStr) {
    var parts = String(dateStr).split("-");
    if (parts.length !== 3) return dateStr;
    var dows = ["일", "월", "화", "수", "목", "금", "토"];
    var d = new Date(+parts[0], +parts[1] - 1, +parts[2]);
    return (+parts[1]) + "월 " + (+parts[2]) + "일(" + dows[d.getDay()] + ")";
  }

  function esc(text) {
    return String(text == null ? "" : text)
      .split("&").join("&amp;")
      .split("<").join("&lt;")
      .split(">").join("&gt;");
  }

  // ── 자료 모으기 ──

  function getDates() {
    var set = {};
    (reservations || []).forEach(function (r) { if (r.date) set[r.date] = true; });
    Object.keys(entries || {}).forEach(function (id) {
      var e = entries[id];
      if (e && e.isWalkin && e.date) set[e.date] = true;
    });
    return Object.keys(set).sort();
  }

  // 한 날짜의 팀 목록. 이름이 하나도 안 적힌 팀은 인쇄에서 뺀다.
  function teamsFor(date) {
    var list = [];
    (reservations || []).forEach(function (r) {
      if (r.date !== date) return;
      var e = (entries || {})[r.id];
      var names = (e && e.names) || [];
      if (!names.length) return;
      list.push({ time: r.time, host: r.name, names: names, note: r.note || "", isWalkin: false });
    });
    Object.keys(entries || {}).forEach(function (id) {
      var e = entries[id];
      if (!e || !e.isWalkin || e.date !== date) return;
      var names = e.names || [];
      if (!names.length) return;
      list.push({ time: e.time, host: "", names: names, note: e.note || "", isWalkin: true });
    });
    list.sort(function (a, b) {
      var d = timeSortKey(a.time) - timeSortKey(b.time);
      if (d !== 0) return d;
      if (a.isWalkin !== b.isWalkin) return a.isWalkin ? 1 : -1;
      return (a.host || "").localeCompare(b.host || "");
    });
    return list;
  }

  // ── 그리기 ──

  function sheetHtml(date) {
    var teams = teamsFor(date);
    var total = 0;
    teams.forEach(function (t) { total += t.names.length; });

    var html = '<div class="sheet">';
    html += "<h2>문막-흙으로 잇다 2026 · " + esc(dateLabel(date)) + " 현장 방명록</h2>";
    html += '<p class="sheet-sub">총 ' + total + "명 · " + teams.length + "팀 · 출력 " + esc(printedAt()) + "</p>";

    if (!teams.length) {
      html += '<p class="empty-msg">이 날짜에는 아직 적힌 이름이 없습니다.</p></div>';
      return html;
    }

    // 회차 머리줄과 이름줄을 한 줄기로 늘어놓는다. 좌우로 자르기 쉬우라고.
    var items = [];
    var no = 0;
    var lastTime = null;
    teams.forEach(function (t) {
      var timeKey = t.time || "";
      if (timeKey !== lastTime) {
        lastTime = timeKey;
        var slotCount = 0;
        teams.forEach(function (o) { if ((o.time || "") === timeKey) slotCount += o.names.length; });
        items.push({ type: "slot", label: fmtTime(t.time) + " 회차 · " + slotCount + "명" });
      }
      t.names.forEach(function (name, i) {
        no += 1;
        items.push({
          type: "name",
          no: no,
          name: name,
          // 함께 온 단위의 첫 줄에만 소속을 적고, 나머지는 따옴표로 이어 받는다(종이 방명록과 같은 방식).
          team: i === 0 ? (t.isWalkin ? "현장" : t.host + "(사전신청)") : DITTO,
          first: i === 0,
        });
      });
    });

    // 좌우 두 열. 이름 줄 수의 절반에서 자르고, 오른쪽 열이 회차 중간에서
    // 시작하면 무슨 회차인지 몰라 헤매므로 이어짐 머리줄을 다시 얹는다.
    var half = Math.ceil(no / 2);
    var left = [], right = [];
    var seen = 0, curSlot = null, splitSlot = null;
    items.forEach(function (it) {
      if (it.type === "slot") curSlot = it.label;
      if (seen < half) {
        left.push(it);
        if (it.type === "name") {
          seen += 1;
          if (seen === half) splitSlot = curSlot;
        }
      } else {
        if (!right.length && it.type !== "slot" && splitSlot) {
          right.push({ type: "slot", label: splitSlot + " (이어서)" });
        }
        right.push(it);
      }
    });

    html += right.length ? '<div class="roster-2col">' : '<div class="roster-1col">';
    html += tableHtml(left);
    if (right.length) html += tableHtml(right);
    html += "</div></div>";
    return html;
  }

  function tableHtml(rows) {
    var html = '<table class="roster"><thead><tr>';
    html += "<th>번호</th><th>이름</th><th>구분</th>";
    html += "</tr></thead><tbody>";
    rows.forEach(function (it) {
      if (it.type === "slot") {
        html += '<tr class="slot-head"><td colspan="3">' + esc(it.label) + "</td></tr>";
        return;
      }
      html += '<tr' + (it.first ? ' class="team-start"' : "") + ">";
      html += '<td class="num">' + it.no + "</td>";
      html += '<td class="name">' + esc(it.name) + "</td>";
      html += '<td class="team' + (it.first ? "" : " ditto") + '">' + esc(it.team) + "</td>";
      html += "</tr>";
    });
    html += "</tbody></table>";
    return html;
  }

  function printedAt() {
    var d = new Date();
    var mm = ("0" + (d.getMonth() + 1)).slice(-2);
    var dd = ("0" + d.getDate()).slice(-2);
    var hh = ("0" + d.getHours()).slice(-2);
    var mi = ("0" + d.getMinutes()).slice(-2);
    return d.getFullYear() + "-" + mm + "-" + dd + " " + hh + ":" + mi;
  }

  function renderTabs(dates) {
    var el = document.getElementById("date-tabs");
    el.innerHTML = "";
    var options = [{ value: "all", label: "전체" }];
    dates.forEach(function (d) { options.push({ value: d, label: dateLabel(d) }); });
    options.forEach(function (opt) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "date-tab" + (selectedDate === opt.value ? " active" : "");
      btn.textContent = opt.label;
      btn.addEventListener("click", function () {
        selectedDate = opt.value;
        render();
      });
      el.appendChild(btn);
    });
  }

  function render() {
    var sheets = document.getElementById("sheets");
    if (!sheets) return;
    if (reservations === null || entries === null) {
      sheets.innerHTML = '<p class="load-msg">명단을 불러오는 중...</p>';
      return;
    }
    var dates = getDates();
    if (selectedDate !== "all" && dates.indexOf(selectedDate) === -1) selectedDate = "all";
    renderTabs(dates);

    var target = selectedDate === "all" ? dates : [selectedDate];
    if (!target.length) {
      sheets.innerHTML = '<p class="empty-msg">아직 적힌 이름이 없습니다.</p>';
      return;
    }
    sheets.innerHTML = target.map(sheetHtml).join("");
  }

  // ── 잠금 ──

  function unlock() {
    document.getElementById("gate").style.display = "none";
    document.getElementById("app").style.display = "block";
    fetchReservations();
  }

  document.getElementById("gate-btn").addEventListener("click", function () {
    var pw = document.getElementById("gate-pw");
    var msg = document.getElementById("gate-msg");
    if (pw.value.trim() === PW) {
      unlock();
    } else {
      msg.textContent = "비밀번호가 맞지 않습니다.";
      pw.value = "";
      pw.focus();
    }
  });

  document.getElementById("gate-pw").addEventListener("keydown", function (e) {
    if (e.key === "Enter") document.getElementById("gate-btn").click();
  });

  document.getElementById("print-btn").addEventListener("click", function () {
    window.print();
  });

  if (window.MunmakCheckinSync) attachSync();
  else window.addEventListener("munmak-sync-ready", attachSync);
})();
`;

const pageData = {
  metadata,
  styles,
  stylesheets: [],
  body,
  scripts: [
    {
      attributes: { type: "module", src: "/munmak-checkin-sync.js" },
      content: "",
    },
    {
      attributes: { type: "text/javascript" },
      content: script,
    },
  ],
};

export default pageData;
