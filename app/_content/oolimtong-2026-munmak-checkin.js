// 문막-흙으로 잇다 2026 현장 체크인 · 방명록
//
// 사전신청 명단은 /oolimtong_2026_munmak 페이지의 PACKED 값을 그대로 fetch해서 읽어오므로
// 예약이 추가/변경되면 이 페이지에도 자동 반영된다. 체크인은 신청자 1명이 아니라
// 그 자리에 실제로 온 사람 전원의 이름을 받는 방명록 역할을 한다(인원수 집계가 아님).
//
// 기록은 Firestore(public/munmak-checkin-sync.js)로 운영진 기기끼리 실시간 공유한다.
// 연결이 안 되면(익명 로그인 미설정·오프라인·차단) 자동으로 이 기기 localStorage 모드로
// 떨어지고, 나중에 연결되면 로컬에만 있던 기록을 한 번 올려 준다.

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
  .sync-badge.ok {
    color: var(--ok); background: var(--ok-bg); border-color: var(--ok);
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
    border: 2px solid var(--line); background: #fff; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    font-size: 15px; color: #fff; margin-top: 1px;
  }
  .row .check:hover { border-color: var(--accent); }
  .row.checked .check { background: var(--ok); border-color: var(--ok); }
  .row .info { flex: 1; min-width: 0; }
  .row .name-line { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
  .row .name { font-weight: 700; font-size: 15px; flex-shrink: 0; }
  .row .time { color: var(--accent2); font-weight: 600; }
  .row .meta { font-size: 12.5px; color: var(--text-dim); margin-top: 4px; }
  .row .note { font-style: italic; }
  .row .walkin-tag {
    font-size: 10.5px; font-weight: 700; color: var(--accent);
    border: 1px solid var(--accent); border-radius: 3px; padding: 1px 5px;
  }
  .row .del-btn {
    flex-shrink: 0; border: none; background: none; color: var(--text-dim);
    font-size: 18px; cursor: pointer; padding: 0 2px; line-height: 1;
  }
  .row .del-btn:hover { color: var(--accent); }

  /* ── 방명록 이름 입력 ── */
  .name-slots { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; }
  .name-slot-input {
    width: 78px; flex-shrink: 0; border: 1px solid var(--line); border-radius: 4px;
    padding: 6px 7px; font-family: inherit; font-size: 13px; color: var(--text); background: #fff;
  }
  .name-slot-input:focus { outline: none; border-color: var(--accent); }
  /* 첫 칸에 뜨는 신청자 이름은 "아직 안 적힌 상태"로 보여야 한다. */
  .name-slot-input::placeholder { color: #c3a494; }
  /* 미리 채워 둔 신청자 이름 — 아직 확정 전이라 placeholder 와 같은 톤으로 둔다. */
  .name-slot-input.seeded { color: #c3a494; }
  .name-slot-input.seeded:focus { color: var(--text); }
  .name-slot-add {
    flex-shrink: 0; border: 1px dashed var(--line); background: none; color: var(--text-dim);
    font-size: 12px; padding: 6px 10px; border-radius: 4px; cursor: pointer; white-space: nowrap;
  }
  .name-slot-add:hover { border-color: var(--accent2); color: var(--accent2); }
  .guest-count { font-size: 11px; color: var(--text-dim); margin-top: 2px; text-align: right; }
  .row.checked .guest-count { color: var(--ok); font-weight: 600; }

  .walkin-time-select {
    font-family: inherit; font-size: 12.5px; font-weight: 600; color: var(--accent2);
    background: #fff; border: 1px solid var(--line); border-radius: 4px; padding: 3px 6px;
  }
  .walkin-time-select:focus { outline: none; border-color: var(--accent); }

  .walkin-note-input {
    display: block; width: 100%; margin-top: 6px;
    border: 1px solid var(--line); border-radius: 4px; padding: 7px 9px;
    font-size: 12.5px; color: var(--text-dim); background: #fff;
  }
  .walkin-note-input:focus { outline: none; border-color: var(--accent); }

  .add-walkin-btn {
    width: 100%; padding: 11px; font-size: 14px; font-weight: 700;
    background: var(--accent); color: #fff; border: none; border-radius: 4px; cursor: pointer;
    margin-top: 8px;
  }
  .add-walkin-btn:hover { background: var(--accent2); }

  .reset-row { text-align: center; margin-top: 28px; }
  .reset-row button {
    border: 1px solid var(--line); background: none; color: var(--text-dim);
    font-size: 12px; padding: 7px 14px; border-radius: 4px; cursor: pointer;
  }
  .reset-row button:hover { border-color: var(--accent2); color: var(--accent2); }

  .load-msg { text-align: center; padding: 30px 0; color: var(--text-dim); font-size: 13px; }
  `,
];

const body = `
<div class="wrap">
  <div class="top">
    <h1>현장 체크인 · 방명록</h1>
    <span class="top-right">
      <a class="print-link" href="/oolimtong_2026_munmak_roster" target="_blank" rel="noopener noreferrer">명단인쇄 ↗</a>
      <span class="sync-badge" id="sync-badge">연결 중…</span>
    </span>
  </div>

  <div class="notice">
    체크인은 <b>신청자 1명</b>이 아니라 그 자리에 <b>실제로 온 사람 전원의 이름</b>을 적는 방명록입니다.
    인원수만 세지 말고, 이름 칸 하나에 한 명씩 적고 인원이 더 있으면 "+ 추가"로 칸을 늘려 주세요.
    <b>신청자 본인도 한 칸</b>을 차지합니다. 첫 칸에는 신청자 이름이 미리 들어가 있으니 같이 온 사람만
    이어서 적으면 되고, 본인이 안 왔으면 그 칸을 지워 주세요. 현장 워크인은 참여 회차(시간)를 골라 주세요.
    <span id="sync-note">연결 상태를 확인하는 중입니다.</span>
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
    <button type="button" id="add-walkin-btn" class="add-walkin-btn">+ 새 워크인 추가</button>

    <div class="reset-row" id="reset-row" style="display:none;">
      <button type="button" id="reset-btn">이 기기의 방명록 기록 초기화</button>
    </div>
  </div>
</div>
`;

const script = `
(function () {
  var PW = "1661";
  var STORAGE_KEY = "munmak2026-checkin-v2";
  var reservations = null;
  var selectedDate = null;
  var state = loadState();
  var currentItems = [];
  var sync = null;
  var syncStatus = "connecting";
  var mergedLocalIntoRemote = false;
  var lastRemoteEntries = null;
  var saveTimers = {};

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { guestbook: {}, walkins: [] };
      var parsed = JSON.parse(raw);
      return {
        guestbook: parsed.guestbook || {},
        walkins: parsed.walkins || [],
      };
    } catch (e) {
      return { guestbook: {}, walkins: [] };
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
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
        // 명단을 기다리느라 미뤄 둔 첫 병합이 있으면 이제 처리한다.
        if (!mergedLocalIntoRemote && lastRemoteEntries) {
          mergedLocalIntoRemote = true;
          pushLocalOnlyEntries(lastRemoteEntries);
        }
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

  // 워크인은 지금 이 자리에서 등록하는 것이므로, 오늘 날짜면 현재 시각이 속한
  // 회차를 미리 골라 둔다. 틀리면 그 자리에서 바꾸면 된다.
  function defaultWalkinTime() {
    if (selectedDate !== todayStr()) return null;
    var now = new Date();
    var mins = now.getHours() * 60 + now.getMinutes();
    var best = null;
    timeSlotOptions().forEach(function (o) {
      if (o.value.indexOf(":") === -1) return;  // "", 오전/오후 미정 회차는 제외
      var k = timeSortKey(o.value);
      if (k <= mins + 15 && (best === null || k > timeSortKey(best))) best = o.value;
    });
    return best;
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

  function findReservation(id) {
    var list = reservations || [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) return list[i];
    }
    return null;
  }

  function setNames(id, names) {
    state.guestbook[id] = { names: names, updatedAt: Date.now() };
    saveState();
    queueRemoteSave(id);
  }

  // ── 원격 동기화 ──

  function buildPayload(id) {
    var data = { names: namesFor(id), updatedAt: Date.now() };
    var walkin = findWalkin(id);
    if (walkin) {
      data.isWalkin = true;
      data.date = walkin.date || null;
      data.time = walkin.time || null;
      data.note = walkin.note || "";
      data.addedAt = walkin.addedAt || Date.now();
    } else {
      var r = findReservation(id);
      data.isWalkin = false;
      data.date = r ? r.date : null;
      data.name = r ? r.name : "";
    }
    return data;
  }

  function remoteSaveNow(id) {
    if (!sync) return;
    sync.save(id, buildPayload(id)).catch(function () {});
  }

  function queueRemoteSave(id) {
    if (!sync) return;
    clearTimeout(saveTimers[id]);
    saveTimers[id] = setTimeout(function () { remoteSaveNow(id); }, 400);
  }

  // 연결 전에 이 기기에만 적어 둔 기록은 처음 연결될 때 한 번 올려 준다.
  function pushLocalOnlyEntries(remote) {
    Object.keys(state.guestbook).forEach(function (id) {
      if (!remote[id] && namesFor(id).length) remoteSaveNow(id);
    });
    state.walkins.forEach(function (w) {
      if (!remote[w.id]) remoteSaveNow(w.id);
    });
  }

  function applyRemote(entries) {
    var focusInfo = captureFocus();
    lastRemoteEntries = entries;

    // 예약 명단이 아직 안 왔으면 올려도 날짜·신청자 이름이 비게 되므로 기다린다.
    if (!mergedLocalIntoRemote && reservations) {
      mergedLocalIntoRemote = true;
      pushLocalOnlyEntries(entries);
    }

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

    // 지금 타이핑 중인 줄은 로컬 입력이 이기게 둔다. 원격 메아리가 한 박자 늦게
    // 오면 방금 친 글자가 되돌아가 보이기 때문이다.
    if (focusInfo) {
      if (state.guestbook[focusInfo.id]) guestbook[focusInfo.id] = state.guestbook[focusInfo.id];
      var known = walkins.some(function (w) { return w.id === focusInfo.id; });
      if (!known) {
        var localWalkin = findWalkin(focusInfo.id);
        if (localWalkin) walkins.push(localWalkin);
      }
    }

    state = { guestbook: guestbook, walkins: walkins };
    saveState();
    render();
    restoreFocus(focusInfo);
  }

  function captureFocus() {
    var el = document.activeElement;
    if (!el || !el.className || el.className.indexOf("name-slot-input") === -1) return null;
    var rowEl = el.parentNode;
    while (rowEl && (!rowEl.className || rowEl.className.indexOf("row") === -1)) rowEl = rowEl.parentNode;
    if (!rowEl) return null;
    var inputs = Array.prototype.slice.call(rowEl.querySelectorAll(".name-slot-input"));
    return {
      id: rowEl.getAttribute("data-id"),
      index: inputs.indexOf(el),
      caret: el.selectionStart,
    };
  }

  function restoreFocus(info) {
    if (!info || !info.id) return;
    var rowEl = document.querySelector('[data-id="' + info.id + '"]');
    if (!rowEl) return;
    var target = rowEl.querySelectorAll(".name-slot-input")[info.index];
    if (!target) return;
    target.focus();
    try { target.setSelectionRange(info.caret, info.caret); } catch (e) {}
  }

  function renderSyncStatus() {
    var connected = syncStatus === "connected";
    var badge = document.getElementById("sync-badge");
    if (badge) {
      badge.textContent = connected ? "실시간 공유 중" : "이 기기에만 저장";
      badge.className = "sync-badge" + (connected ? " ok" : "");
    }
    var note = document.getElementById("sync-note");
    if (note) {
      note.textContent = connected
        ? "여기 적는 이름은 다른 운영진 폰에도 바로 나타납니다."
        : "지금은 이 폰에만 저장됩니다(공유 연결 안 됨). 적은 내용은 사라지지 않으니 그대로 쓰셔도 됩니다.";
    }
    var resetRow = document.getElementById("reset-row");
    if (resetRow) resetRow.style.display = connected ? "none" : "block";
  }

  function attachSync() {
    if (sync || !window.MunmakCheckinSync) return;
    sync = window.MunmakCheckinSync;
    sync.onStatus(function (next) {
      syncStatus = next;
      renderSyncStatus();
    });
    sync.onData(applyRemote);
  }

  // ── 목록 ──

  function removeWalkin(id) {
    state.walkins = state.walkins.filter(function (w) { return w.id !== id; });
    delete state.guestbook[id];
    saveState();
    if (sync) sync.remove(id).catch(function () {});
    render();
  }

  function updateSummary() {
    var teams = currentItems.length;
    var expected = 0;
    currentItems.forEach(function (it) { if (it.total != null) expected += it.total; });
    var recorded = 0;
    currentItems.forEach(function (it) { recorded += namesFor(it.id).length; });
    var summary = document.getElementById("summary");
    summary.innerHTML =
      "예약+워크인 <b>" + teams + "팀</b>" +
      (expected ? " · 예상 인원 약 <b>" + expected + "명</b>" : "") +
      '<span class="done">현장 인원 <b>' + recorded + "</b>명</span>";
  }

  function renderRow(container, item, opts) {
    opts = opts || {};
    var row = document.createElement("div");
    var currentNames = namesFor(item.id);
    row.className = "row" + (currentNames.length > 0 ? " checked" : "");
    row.setAttribute("data-id", item.id);

    var slotsWrap = document.createElement("div");
    slotsWrap.className = "name-slots";

    var indicator = document.createElement("div");
    indicator.className = "check";
    indicator.textContent = currentNames.length > 0 ? "\\u2713" : "";
    indicator.title = "이름 적기";
    // 눌러도 아무 일이 없으면 고장난 것처럼 보인다. 빈 이름칸으로 보내 준다.
    // 인원수에는 신청자 본인도 들어간다. 첫 칸에 미리 채워 둔 이름을 여기서 확정한다(= 본인 도착).
    indicator.addEventListener("click", function () {
      if (!namesFor(item.id).length && collectNames().length) commitNames();
      var inputs = slotsWrap.querySelectorAll(".name-slot-input");
      for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value.trim()) { inputs[i].focus(); return; }
      }
      addSlot("").focus();
    });
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

    var countLabel = document.createElement("div");
    countLabel.className = "guest-count";

    function collectNames() {
      var names = [];
      Array.prototype.forEach.call(slotsWrap.querySelectorAll(".name-slot-input"), function (inp) {
        var v = inp.value.trim();
        if (v) names.push(v);
      });
      return names;
    }

    function commitNames() {
      var names = collectNames();
      Array.prototype.forEach.call(slotsWrap.querySelectorAll(".name-slot-input"), function (inp) {
        inp.classList.remove("seeded");
      });
      setNames(item.id, names);
      row.classList.toggle("checked", names.length > 0);
      indicator.textContent = names.length > 0 ? "\\u2713" : "";
      countLabel.textContent = names.length + "명 기록됨";
      updateSummary();
    }

    // 첫 칸은 신청자 본인 자리다. 빈 칸에 본인 이름이 흐리게 떠 있어야
    // "동행만 적는 칸"으로 오해하지 않는다.
    function refreshPlaceholders() {
      var inputs = slotsWrap.querySelectorAll(".name-slot-input");
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].placeholder = (i === 0 && !opts.isWalkin && item.name) ? item.name : "이름";
      }
    }

    // 칸 사이에 삭제(×) 버튼을 두면 이름 칸을 나누는 구분자처럼 보여서 두지 않는다.
    // 대신 비운 칸은 포커스가 빠질 때 스스로 사라진다(마지막 한 칸은 남긴다).
    function addSlot(value) {
      var input = document.createElement("input");
      input.type = "text";
      input.className = "name-slot-input";
      input.placeholder = "이름";
      input.value = value || "";
      input.addEventListener("input", commitNames);
      input.addEventListener("blur", function () {
        if (input.value.trim()) return;
        if (slotsWrap.querySelectorAll(".name-slot-input").length <= 1) return;
        input.remove();
        refreshPlaceholders();
        commitNames();
      });

      slotsWrap.insertBefore(input, addBtn);
      refreshPlaceholders();
      return input;
    }

    var addBtn = document.createElement("button");
    addBtn.type = "button";
    addBtn.className = "name-slot-add";
    addBtn.textContent = "+ 추가";
    addBtn.addEventListener("click", function () {
      var input = addSlot("");
      input.focus();
    });
    slotsWrap.appendChild(addBtn);

    // 아직 아무도 안 적힌 예약 행은 첫 칸에 신청자 이름을 미리 넣어 둔다.
    // placeholder 로만 두면 운영진이 그 칸에 동행 이름을 적어 버려 본인이 인원수에서 빠진다.
    // 아직 '기록'은 아니므로 seeded 로 흐리게 두고, 뭐라도 확정되는 순간 같이 올라간다.
    var seeded = !currentNames.length && !opts.isWalkin && !!item.name;
    var initialNames = currentNames.length ? currentNames : [seeded ? item.name : ""];
    initialNames.forEach(function (n) {
      var input = addSlot(n);
      if (seeded) input.classList.add("seeded");
    });
    countLabel.textContent = currentNames.length + "명 기록됨";

    nameLine.appendChild(slotsWrap);
    info.appendChild(nameLine);

    var meta = document.createElement("div");
    meta.className = "meta";
    if (opts.isWalkin) {
      // 워크인도 어느 회차에 들어갔는지 남아야 나중에 회차별 인원을 셀 수 있다.
      var timeSelect = document.createElement("select");
      timeSelect.className = "walkin-time-select";
      timeSlotOptions().forEach(function (slot) {
        var opt = document.createElement("option");
        opt.value = slot.value;
        opt.textContent = slot.label;
        if ((item.time || "") === slot.value) opt.selected = true;
        timeSelect.appendChild(opt);
      });
      timeSelect.addEventListener("change", function () {
        item.time = timeSelect.value || null;
        saveState();
        queueRemoteSave(item.id);
      });
      meta.appendChild(timeSelect);
    } else {
      var metaTimeSpan = document.createElement("span");
      metaTimeSpan.className = "time";
      metaTimeSpan.textContent = fmtTime(item.time);
      meta.appendChild(metaTimeSpan);
    }
    if (!opts.isWalkin) {
      meta.appendChild(document.createTextNode(" · 예상 " + fmtHeadcount(item) + (item.phone ? " · " + item.phone : "")));
      // 비고는 줄을 따로 쓰지 않고 예약정보 뒤에 이어 붙인다(카드 높이 최소화).
      if (item.note) {
        var noteSpan = document.createElement("span");
        noteSpan.className = "note";
        noteSpan.textContent = " · " + item.note;
        meta.appendChild(noteSpan);
      }
    }
    info.appendChild(meta);

    info.appendChild(countLabel);

    if (opts.isWalkin) {
      var noteInput = document.createElement("input");
      noteInput.type = "text";
      noteInput.className = "walkin-note-input";
      noteInput.placeholder = "비고 (선택)";
      noteInput.value = item.note || "";
      noteInput.addEventListener("input", function () {
        item.note = noteInput.value;
        saveState();
        queueRemoteSave(item.id);
      });
      info.appendChild(noteInput);
    }

    row.appendChild(info);

    if (opts.isWalkin) {
      var del = document.createElement("button");
      del.type = "button";
      del.className = "del-btn";
      del.setAttribute("aria-label", "삭제");
      del.textContent = "\\u00d7";
      del.addEventListener("click", function (e) {
        e.stopPropagation();
        removeWalkin(item.id);
      });
      row.appendChild(del);
    }

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
      .sort(function (a, b) { return (b.addedAt || 0) - (a.addedAt || 0); });

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

  function addWalkin() {
    var id = "walkin_" + Date.now() + "_" + Math.random().toString(36).slice(2, 7);
    var walkin = {
      id: id,
      name: "",
      phone: "",
      note: "",
      date: selectedDate,
      time: defaultWalkinTime(),
      addedAt: Date.now(),
    };
    state.walkins.push(walkin);
    saveState();
    remoteSaveNow(id);
    render();
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

  document.getElementById("add-walkin-btn").addEventListener("click", addWalkin);

  document.getElementById("reset-btn").addEventListener("click", function () {
    if (!confirm("이 기기에 저장된 방명록 기록을 모두 지울까요?")) return;
    state = { guestbook: {}, walkins: [] };
    saveState();
    render();
  });

  if (window.MunmakCheckinSync) attachSync();
  else window.addEventListener("munmak-sync-ready", attachSync);
  renderSyncStatus();
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
