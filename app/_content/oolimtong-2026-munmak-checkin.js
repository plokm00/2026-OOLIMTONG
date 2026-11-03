// 문막-흙으로 잇다 2026 현장 체크인 · 방명록
//
// 사전신청 명단은 /oolimtong_2026_munmak 페이지의 PACKED 값을 그대로 fetch해서 읽어오므로
// 예약이 추가/변경되면 이 페이지에도 자동 반영된다. 체크인은 신청자 1명이 아니라
// 그 자리에 실제로 온 사람 전원의 이름을 받는 방명록 역할을 한다(인원수 집계가 아님).
//
// 행사 기간에는 Firestore로 운영진 기기끼리 실시간 공유했지만, 행사가 끝나 체크인을 닫았다.
// 이제는 닫는 시점의 기록(oolimtong-2026-munmak-checkin-final.js)을 읽기 전용으로 보여 주기만 한다.

import checkinEntries from "./oolimtong-2026-munmak-checkin-final";

// 인라인 스크립트에 넣으므로 "</script>" 같은 조각이 본문을 끊지 않게 "<"를 이스케이프한다.
const finalEntriesJson = JSON.stringify(checkinEntries).split("<").join("\\u003c");

const metadata = {
  title: "현장 체크인 · 방명록 | 문막-흙으로 잇다 2026",
};

const styles = [
  `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@400;600;700&family=Noto+Sans+KR:wght@400;500;700&display=swap');

  :root {
    --bg:      #f6ede6;
    --bg2:     #eee0d6;
    --bg3:     #e4d0c4;
    --line:    #ceb0a0;
    --accent:  #c03828;
    --accent2: #8c2418;
    --text:    #261410;
    --text-dim:#7a4c3c;
    --ok:      #2f7a3d;
    --ok-bg:   #e3f0e3;
  }

  * { box-sizing: border-box; }
  body {
    margin: 0;
    background: var(--bg);
    color: var(--text);
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 15px;
    line-height: 1.6;
    -webkit-tap-highlight-color: transparent;
  }

  .wrap { max-width: 900px; margin: 0 auto; padding: 20px 16px 80px; }

  .top {
    display: flex; align-items: baseline; justify-content: space-between;
    gap: 10px; margin-bottom: 14px;
  }
  .top h1 {
    font-family: 'IBM Plex Sans KR', sans-serif;
    font-size: 19px; font-weight: 700; margin: 0;
  }
  .top-right { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
  .print-link {
    font-size: 11px; font-weight: 700; color: var(--accent2); text-decoration: none;
    border: 1px solid var(--accent2); border-radius: 3px; padding: 3px 8px; white-space: nowrap;
  }
  .print-link:hover { background: var(--accent2); color: #fff; }
  .sync-badge {
    font-size: 11px; font-weight: 600; color: var(--accent2);
    background: #f5e0da; border: 1px solid var(--accent2);
    border-radius: 3px; padding: 3px 8px; white-space: nowrap;
  }
  .sync-badge:disabled {
    font-family: inherit; color: var(--text-dim); background: var(--bg2);
    border-color: var(--line); cursor: not-allowed;
  }

  .notice {
    background: #f5e0da; border-radius: 4px; padding: 12px 14px;
    font-size: 12.5px; color: var(--accent2); line-height: 1.7; margin-bottom: 16px;
  }

  /* ── 잠금 ── */
  .gate {
    background: var(--bg2); border: 1px solid var(--line); border-radius: 6px;
    padding: 20px 18px; text-align: center;
  }
  .gate p { margin: 0 0 12px; font-size: 13.5px; color: var(--text-dim); }
  .gate input {
    width: 140px; font-size: 18px; text-align: center; letter-spacing: 0.2em;
    padding: 10px 8px; border: 1px solid var(--line); border-radius: 4px;
    background: #fff; color: var(--text); margin-right: 8px;
  }
  .gate button {
    font-size: 14px; font-weight: 600; padding: 10px 18px;
    background: var(--accent); color: #fff; border: none; border-radius: 4px;
    cursor: pointer;
  }
  .gate button:hover { background: var(--accent2); }
  .gate .msg { display: block; margin-top: 10px; font-size: 12.5px; color: var(--accent2); min-height: 1.4em; }

  /* ── 날짜 탭 ── */
  .date-tabs { display: flex; gap: 6px; margin-bottom: 12px; }
  .date-tab {
    flex: 1; text-align: center; padding: 9px 4px; border-radius: 4px;
    border: 1px solid var(--line); background: #fff; color: var(--text-dim);
    font-size: 13.5px; font-weight: 600; cursor: pointer;
  }
  .date-tab.active { background: var(--accent); border-color: var(--accent); color: #fff; }

  /* ── 요약 ── */
  .summary {
    display: flex; justify-content: space-between; align-items: center;
    flex-wrap: wrap; gap: 4px 12px;
    background: var(--bg2); border-radius: 5px; padding: 10px 14px;
    font-size: 13px; color: var(--text-dim); margin-bottom: 14px;
  }
  .summary b { color: var(--text); font-size: 15px; }
  .summary .done { color: var(--ok); font-weight: 700; }

  /* ── 목록 ── */
  .section-label {
    font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
    color: var(--text-dim); font-weight: 600; margin: 18px 0 8px;
  }
  .empty-msg { font-size: 13px; color: var(--text-dim); padding: 14px 0; }

  .row {
    display: flex; align-items: flex-start; gap: 12px;
    background: #fff; border: 1px solid var(--line); border-radius: 6px;
    padding: 12px 14px; margin-bottom: 8px; transition: background 0.15s, border-color 0.15s;
  }
  .row.checked { background: var(--ok-bg); border-color: var(--ok); }
  .row .check {
    flex-shrink: 0; width: 26px; height: 26px; border-radius: 50%;
    border: 2px solid var(--line); background: #fff;
    display: flex; align-items: center; justify-content: center;
    font-size: 15px; color: #fff; margin-top: 1px;
  }
  .row.checked .check { background: var(--ok); border-color: var(--ok); }
  .row .info { flex: 1; min-width: 0; }
  .row .name-line { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
  .row .name { font-weight: 700; font-size: 15px; flex-shrink: 0; }
  .row .time { color: var(--text-dim); font-weight: 500; }
  .row .meta { font-size: 12.5px; color: var(--text-dim); margin-top: 4px; }
  .row .note { font-style: italic; }
  .row .phone-link { color: var(--accent2); font-weight: 700; text-decoration: none; border-bottom: 1px dotted var(--accent2); }
  .row .phone-link:hover { color: var(--accent); border-bottom-color: var(--accent); }
  .row .sms-link {
    margin-left: 5px; font-size: 11px; font-weight: 700; color: var(--accent2); text-decoration: none;
    border: 1px solid var(--accent2); border-radius: 3px; padding: 1px 5px; vertical-align: 1px;
  }
  .row .sms-link:hover { background: var(--accent2); color: #fff; }
  .row .walkin-tag {
    font-size: 10.5px; font-weight: 700; color: var(--accent);
    border: 1px solid var(--accent); border-radius: 3px; padding: 1px 5px;
  }

  /* ── 방명록 이름 (마감 후 읽기 전용) ── */
  .name-slots { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; }
  .name-slot-input {
    width: 78px; flex-shrink: 0; border: 1px solid var(--line); border-radius: 4px;
    padding: 6px 7px; font-family: inherit; font-size: 13px; color: var(--text); background: #fff;
  }
  .name-slot-input:focus { outline: none; }
  /* 첫 칸에 뜨는 신청자 이름은 "아직 안 적힌 상태"로 보여야 한다. */
  .name-slot-input::placeholder { color: #c3a494; }
  /* 미리 채워 둔 신청자 이름 — 아직 확정 전이라 placeholder 와 같은 톤으로 둔다. */
  .name-slot-input.seeded { color: #c3a494; }
  .guest-count { font-size: 11px; color: var(--text-dim); margin-top: 2px; text-align: right; }
  .row.checked .guest-count { color: var(--ok); font-weight: 600; }

  .walkin-time-select {
    font-family: inherit; font-size: 12.5px; font-weight: 500; color: var(--text-dim);
    background: #fff; border: 1px solid var(--line); border-radius: 4px; padding: 3px 6px;
  }
  .walkin-time-select:disabled { opacity: 1; color: var(--text-dim); }

  .row .meta.walkin-meta { display: flex; align-items: center; gap: 6px; }
  .walkin-note-input {
    flex: 1; min-width: 0;
    border: 1px solid var(--line); border-radius: 4px; padding: 5px 9px;
    font-family: inherit; font-size: 12.5px; color: var(--text-dim); background: #fff;
  }
  .walkin-note-input:focus { outline: none; }

  .load-msg { text-align: center; padding: 30px 0; color: var(--text-dim); font-size: 13px; }
  `,
];

const body = `
<div class="wrap">
  <div class="top">
    <h1>현장 체크인 · 방명록</h1>
    <span class="top-right">
      <a class="print-link" href="/oolimtong_2026_munmak_roster" target="_blank" rel="noopener noreferrer">명단인쇄 ↗</a>
      <button type="button" class="sync-badge" disabled>실시간 공유 종료</button>
    </span>
  </div>

  <div class="notice">
    행사가 끝나 현장 체크인을 마감했습니다. 아래는 마감 시점의 방명록 기록이며, 더 이상 고칠 수 없습니다.
  </div>

  <div class="gate" id="gate">
    <p>운영진 비밀번호를 입력하세요.</p>
    <div>
      <input type="password" id="gate-pw" inputmode="numeric" maxlength="8" placeholder="••••" aria-label="비밀번호">
      <button type="button" id="gate-btn">열기</button>
    </div>
    <span class="msg" id="gate-msg"></span>
  </div>

  <div id="app" style="display:none;">
    <div class="date-tabs" id="date-tabs"></div>
    <div class="summary" id="summary"></div>

    <div class="section-label">사전신청</div>
    <div id="reserved-list"></div>

    <div class="section-label">현장 워크인</div>
    <div id="walkin-list"></div>
  </div>
</div>
`;

const script = `
(function () {
  var PW = "1661";
  var FINAL_ENTRIES = ${finalEntriesJson};
  var reservations = null;
  var selectedDate = null;
  var state = buildState(FINAL_ENTRIES);
  var currentItems = [];

  // 마감 기록을 예전 실시간 스냅샷과 같은 모양(guestbook + walkins)으로 펼친다.
  function buildState(entries) {
    var guestbook = {};
    var walkins = [];
    Object.keys(entries).forEach(function (id) {
      var e = entries[id] || {};
      if (e.names && e.names.length) {
        guestbook[id] = { names: e.names, updatedAt: e.updatedAt || 0 };
      }
      if (e.isWalkin) {
        walkins.push({
          id: id,
          date: e.date || null,
          time: e.time || null,
          note: e.note || "",
          addedAt: e.addedAt || 0,
        });
      }
    });
    return { guestbook: guestbook, walkins: walkins };
  }

  function unpackFromHtml(html) {
    // 문막 페이지가 <script type="application/json" id="munmak-reservations"> 로
    // 내보내는 base64 문자열을 그대로 읽는다. 이 스크립트는 서버 렌더링 HTML에
    // 그대로 찍히므로(클라이언트에서 나중에 주입되는 실행 스크립트와 달리)
    // fetch한 텍스트에서 안전하게 정규식으로 꺼낼 수 있다.
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

  function loadMsg(text) {
    var list = document.getElementById("reserved-list");
    if (list) list.innerHTML = '<p class="load-msg">' + text + "</p>";
  }

  function fetchReservations() {
    loadMsg("사전신청 명단을 불러오는 중...");
    fetch("/oolimtong_2026_munmak")
      .then(function (res) { return res.text(); })
      .then(function (html) {
        reservations = unpackFromHtml(html);
        render();
      })
      .catch(function () {
        reservations = [];
        loadMsg("명단을 불러오지 못했습니다. 새로고침해 주세요.");
      });
  }

  function fmtTime(t) {
    if (!t) return "시간 미정";
    if (t === "AM") return "오전 (시간 미정)";
    if (t === "PM") return "오후 (시간 미정)";
    return t;
  }

  function fmtHeadcount(r) {
    if (r.total == null) return "인원 미정";
    var s = r.total + "명";
    if (r.adults != null && r.kids != null) s += " (성인 " + r.adults + "·아동 " + r.kids + ")";
    return s;
  }

  var BASE_TIME_SLOTS = [
    "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
    "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  ];

  // 워크인 회차 선택지. 고정 회차에 그날 실제 예약 시간을 합쳐 둬서
  // 명단에만 있는 회차(오전/오후 미정 포함)도 고를 수 있게 한다.
  function timeSlotOptions() {
    var set = {};
    BASE_TIME_SLOTS.forEach(function (t) { set[t] = true; });
    (reservations || []).forEach(function (r) {
      if (r.date === selectedDate && r.time) set[r.time] = true;
    });
    var opts = [{ value: "", label: "시간 미정" }];
    Object.keys(set)
      .sort(function (a, b) { return timeSortKey(a) - timeSortKey(b); })
      .forEach(function (t) { opts.push({ value: t, label: fmtTime(t) }); });
    return opts;
  }

  function timeSortKey(t) {
    if (!t) return 9999;
    if (t === "AM") return 600;
    if (t === "PM") return 1300;
    var m = t.match(/^(\\d{1,2}):(\\d{2})$/);
    if (!m) return 9998;
    return (+m[1]) * 60 + (+m[2]);
  }

  function todayStr() {
    var d = new Date();
    var y = d.getFullYear(), m = ("0" + (d.getMonth() + 1)).slice(-2), day = ("0" + d.getDate()).slice(-2);
    return y + "-" + m + "-" + day;
  }

  function dateLabel(dateStr) {
    var m = dateStr.match(/^\\d{4}-(\\d{2})-(\\d{2})$/);
    if (!m) return dateStr;
    return (+m[1]) + "/" + (+m[2]);
  }

  function getDates() {
    var set = {};
    (reservations || []).forEach(function (r) { if (r.date) set[r.date] = true; });
    state.walkins.forEach(function (w) { if (w.date) set[w.date] = true; });
    var dates = Object.keys(set).sort();
    if (!dates.length) dates = [todayStr()];
    return dates;
  }

  function pickDefaultDate(dates) {
    var today = todayStr();
    if (dates.indexOf(today) !== -1) return today;
    var future = dates.filter(function (d) { return d >= today; });
    if (future.length) return future[0];
    return dates[dates.length - 1];
  }

  function renderTabs(dates) {
    var el = document.getElementById("date-tabs");
    el.innerHTML = "";
    dates.forEach(function (d) {
      var btn = document.createElement("div");
      btn.className = "date-tab" + (d === selectedDate ? " active" : "");
      btn.textContent = dateLabel(d);
      btn.addEventListener("click", function () {
        selectedDate = d;
        render();
      });
      el.appendChild(btn);
    });
  }

  function namesFor(id) {
    var entry = state.guestbook[id];
    return (entry && entry.names) || [];
  }

  function findWalkin(id) {
    for (var i = 0; i < state.walkins.length; i++) {
      if (state.walkins[i].id === id) return state.walkins[i];
    }
    return null;
  }

  // 세는 대상은 '실제로 온 팀'이다. 이름이 하나도 안 적힌 사전신청은 노쇼로 빠지고,
  // 아직 이름을 안 적은 빈 워크인 칸도 현장참여로 세지 않는다.
  // 팀별 예상 인원은 각 줄에 그대로 있으므로 요약줄에서는 다루지 않는다.
  function updateSummary() {
    var reservedTotal = 0, reservedCame = 0, walkinCame = 0, recorded = 0;
    currentItems.forEach(function (it) {
      var count = namesFor(it.id).length;
      recorded += count;
      if (findWalkin(it.id)) {
        if (count) walkinCame += 1;
      } else {
        reservedTotal += 1;
        if (count) reservedCame += 1;
      }
    });
    // 행사 당일 아침에 "노쇼 17팀"이 떠 있으면 사실과 다르다. 아직 안 온 것뿐이므로
    // 지난 날짜에만 노쇼라고 쓰고, 오늘이나 앞으로의 날짜는 미도착으로 둔다.
    var missLabel = selectedDate < todayStr() ? "노쇼" : "미도착";
    var summary = document.getElementById("summary");
    summary.innerHTML =
      "<span>사전신청 <b>" + reservedTotal + "</b>팀 중 참석 <b>" + reservedCame + "</b>팀 (" + missLabel + " <b>" + (reservedTotal - reservedCame) + "</b>팀)" +
      " · 현장참여 <b>" + walkinCame + "</b>팀</span>" +
      '<span class="done">현장 인원 <b>' + recorded + "</b>명</span>";
  }

  // 마감 후에는 고칠 수 없으므로 칸은 readonly 로만 남긴다. 체크 표시와 흐린
  // 신청자 이름(아무도 안 적힌 팀)은 마감 직전 화면과 똑같이 보이게 둔다.
  function renderRow(container, item, opts) {
    opts = opts || {};
    var row = document.createElement("div");
    var currentNames = namesFor(item.id);
    row.className = "row" + (currentNames.length > 0 ? " checked" : "");
    row.setAttribute("data-id", item.id);

    var indicator = document.createElement("div");
    indicator.className = "check";
    indicator.textContent = currentNames.length > 0 ? "\u2713" : "";
    row.appendChild(indicator);

    var info = document.createElement("div");
    info.className = "info";

    var nameLine = document.createElement("div");
    nameLine.className = "name-line";
    var nameSpan = document.createElement("span");
    nameSpan.className = "name";
    nameSpan.textContent = item.name || (opts.isWalkin ? "워크인" : "이름 미정");
    nameLine.appendChild(nameSpan);
    if (opts.isWalkin) {
      var tag = document.createElement("span");
      tag.className = "walkin-tag";
      tag.textContent = "워크인";
      nameLine.appendChild(tag);
    }

    var slotsWrap = document.createElement("div");
    slotsWrap.className = "name-slots";
    var seeded = !currentNames.length && !opts.isWalkin && !!item.name;
    var initialNames = currentNames.length ? currentNames : [seeded ? item.name : ""];
    initialNames.forEach(function (n, i) {
      var input = document.createElement("input");
      input.type = "text";
      input.className = "name-slot-input" + (seeded ? " seeded" : "");
      input.placeholder = (i === 0 && !opts.isWalkin && item.name) ? item.name : "이름";
      input.value = n || "";
      input.readOnly = true;
      slotsWrap.appendChild(input);
    });
    nameLine.appendChild(slotsWrap);
    info.appendChild(nameLine);

    var meta = document.createElement("div");
    meta.className = "meta" + (opts.isWalkin ? " walkin-meta" : "");
    if (opts.isWalkin) {
      var timeSelect = document.createElement("select");
      timeSelect.className = "walkin-time-select";
      timeSelect.disabled = true;
      timeSlotOptions().forEach(function (slot) {
        var opt = document.createElement("option");
        opt.value = slot.value;
        opt.textContent = slot.label;
        if ((item.time || "") === slot.value) opt.selected = true;
        timeSelect.appendChild(opt);
      });
      meta.appendChild(timeSelect);

      var noteInput = document.createElement("input");
      noteInput.type = "text";
      noteInput.className = "walkin-note-input";
      noteInput.placeholder = "비고 (선택)";
      noteInput.value = item.note || "";
      noteInput.readOnly = true;
      meta.appendChild(noteInput);
    } else {
      var metaTimeSpan = document.createElement("span");
      metaTimeSpan.className = "time";
      metaTimeSpan.textContent = fmtTime(item.time);
      meta.appendChild(metaTimeSpan);
      // 회차 → 연락처 → 예상 인원 → 비고 순서.
      if (item.phone) {
        var digits = item.phone.split("-").join("").split(" ").join("");
        meta.appendChild(document.createTextNode(" · "));
        var telLink = document.createElement("a");
        telLink.className = "phone-link";
        telLink.href = "tel:" + digits;
        telLink.textContent = item.phone;
        meta.appendChild(telLink);
        var smsLink = document.createElement("a");
        smsLink.className = "sms-link";
        smsLink.href = "sms:" + digits;
        smsLink.textContent = "문자";
        meta.appendChild(smsLink);
      }
      meta.appendChild(document.createTextNode(" · 예상 " + fmtHeadcount(item)));
      if (item.note) {
        var noteSpan = document.createElement("span");
        noteSpan.className = "note";
        noteSpan.textContent = " · " + item.note;
        meta.appendChild(noteSpan);
      }
    }
    info.appendChild(meta);

    var countLabel = document.createElement("div");
    countLabel.className = "guest-count";
    countLabel.textContent = currentNames.length + "명 기록됨";
    info.appendChild(countLabel);

    row.appendChild(info);
    container.appendChild(row);
  }

  function render() {
    if (!reservations) return;
    var dates = getDates();
    if (!selectedDate || dates.indexOf(selectedDate) === -1) selectedDate = pickDefaultDate(dates);
    renderTabs(dates);

    var dayReservations = reservations
      .filter(function (r) { return r.date === selectedDate; })
      .sort(function (a, b) { return timeSortKey(a.time) - timeSortKey(b.time); });
    var dayWalkins = state.walkins
      .filter(function (w) { return w.date === selectedDate; })
      // 사전신청과 같이 회차 순으로 쌓이게 한다. 새로 추가한 워크인이 위로 끼어들면
      // 방금 적던 자리를 놓친다. 같은 회차 안에서는 추가한 순서대로 아래로 붙는다.
      .sort(function (a, b) {
        var d = timeSortKey(a.time) - timeSortKey(b.time);
        if (d !== 0) return d;
        return (a.addedAt || 0) - (b.addedAt || 0);
      });

    currentItems = dayReservations.concat(dayWalkins);

    var reservedList = document.getElementById("reserved-list");
    reservedList.innerHTML = "";
    if (!dayReservations.length) {
      reservedList.innerHTML = '<p class="empty-msg">이 날짜에는 사전신청이 없습니다.</p>';
    } else {
      dayReservations.forEach(function (r) { renderRow(reservedList, r, { isWalkin: false }); });
    }

    var walkinList = document.getElementById("walkin-list");
    walkinList.innerHTML = "";
    if (!dayWalkins.length) {
      walkinList.innerHTML = '<p class="empty-msg">아직 추가된 워크인이 없습니다.</p>';
    } else {
      dayWalkins.forEach(function (w) { renderRow(walkinList, w, { isWalkin: true }); });
    }

    updateSummary();
  }

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
      msg.textContent = "비밀번호가 올바르지 않습니다.";
    }
  });
  document.getElementById("gate-pw").addEventListener("keydown", function (e) {
    if (e.key === "Enter") document.getElementById("gate-btn").click();
  });
})();
`;

const pageData = {
  metadata,
  styles,
  stylesheets: [],
  body,
  scripts: [
    {
      attributes: { type: "text/javascript" },
      content: script,
    },
  ],
};

export default pageData;
