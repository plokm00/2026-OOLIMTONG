// 문막-흙으로 잇다 2026 현장 체크인 · 방명록 (테스트 버전)
// 사전신청 명단은 /oolimtong_2026_munmak 페이지의 PACKED 값을 그대로 fetch해서 읽어오므로
// 예약이 추가/변경되면 이 페이지에도 자동 반영된다. 체크인은 신청자 1명이 아니라
// 그 자리에 실제로 온 사람 전원의 이름을 받는 방명록 역할을 한다(인원수 집계가 아님).
// 기록은 지금은 이 기기의 localStorage에만 저장된다 — 여러 폰이 동시에 보는 실시간 버전이 아니다.

const metadata = {
  title: "현장 체크인 · 방명록(테스트) | 문막-흙으로 잇다 2026",
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

  .wrap { max-width: 640px; margin: 0 auto; padding: 20px 16px 80px; }

  .top {
    display: flex; align-items: baseline; justify-content: space-between;
    gap: 10px; margin-bottom: 14px;
  }
  .top h1 {
    font-family: 'IBM Plex Sans KR', sans-serif;
    font-size: 19px; font-weight: 700; margin: 0;
  }
  .test-badge {
    font-size: 11px; font-weight: 600; color: var(--accent2);
    background: #f5e0da; border: 1px solid var(--accent2);
    border-radius: 3px; padding: 3px 8px; white-space: nowrap;
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
    border: 2px solid var(--line); background: #fff;
    display: flex; align-items: center; justify-content: center;
    font-size: 15px; color: #fff; margin-top: 1px;
  }
  .row.checked .check { background: var(--ok); border-color: var(--ok); }
  .row .info { flex: 1; min-width: 0; }
  .row .name-line { display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap; }
  .row .name { font-weight: 700; font-size: 15px; }
  .row .time { font-size: 12.5px; color: var(--accent2); font-weight: 600; }
  .row .meta { font-size: 12.5px; color: var(--text-dim); margin-top: 2px; }
  .row .note { font-size: 12px; color: var(--text-dim); margin-top: 2px; font-style: italic; }
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
  .guest-wrap { margin-top: 8px; }
  .guest-input {
    display: block; width: 100%; min-height: 46px; resize: vertical;
    border: 1px solid var(--line); border-radius: 4px; padding: 8px 10px;
    font-family: inherit; font-size: 13.5px; color: var(--text); background: #fff;
  }
  .guest-input:focus { outline: none; border-color: var(--accent); }
  .guest-count { font-size: 11px; color: var(--text-dim); margin-top: 3px; text-align: right; }
  .row.checked .guest-count { color: var(--ok); font-weight: 600; }

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
    <span class="test-badge">테스트 버전 · 이 기기에만 저장</span>
  </div>

  <div class="notice">
    체크인은 <b>신청자 1명</b>이 아니라 그 자리에 <b>실제로 온 사람 전원의 이름</b>을 적는 방명록입니다.
    인원수만 세지 말고, 각 줄에 그날 온 사람 이름을 쉼표(,)로 구분해 적어 주세요.
    지금은 이 폰(브라우저)에만 저장되는 시험판입니다 — 다른 사람 폰과 실시간으로 공유되진 않아요.
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

    <div class="reset-row">
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

  function parseNames(raw) {
    return raw
      .split(/[,\\n]/)
      .map(function (s) { return s.trim(); })
      .filter(function (s) { return s.length > 0; });
  }

  function setNames(id, names) {
    state.guestbook[id] = { names: names, updatedAt: Date.now() };
    saveState();
  }

  function removeWalkin(id) {
    state.walkins = state.walkins.filter(function (w) { return w.id !== id; });
    delete state.guestbook[id];
    saveState();
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
      '<span class="done">방명록 기록 ' + recorded + "명</span>";
  }

  function renderRow(container, item, opts) {
    opts = opts || {};
    var row = document.createElement("div");
    var currentNames = namesFor(item.id);
    row.className = "row" + (currentNames.length > 0 ? " checked" : "");

    var indicator = document.createElement("div");
    indicator.className = "check";
    indicator.textContent = currentNames.length > 0 ? "\\u2713" : "";
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
    var timeSpan = document.createElement("span");
    timeSpan.className = "time";
    timeSpan.textContent = fmtTime(item.time);
    nameLine.appendChild(timeSpan);
    info.appendChild(nameLine);

    if (!opts.isWalkin) {
      var meta = document.createElement("div");
      meta.className = "meta";
      meta.textContent = "예상 " + fmtHeadcount(item) + (item.phone ? " · " + item.phone : "");
      info.appendChild(meta);
    }

    if (item.note) {
      var noteLine = document.createElement("div");
      noteLine.className = "note";
      noteLine.textContent = item.note;
      info.appendChild(noteLine);
    }

    var guestWrap = document.createElement("div");
    guestWrap.className = "guest-wrap";

    var textarea = document.createElement("textarea");
    textarea.className = "guest-input";
    textarea.rows = 2;
    textarea.placeholder = "실제 방문한 사람 이름을 쉼표로 구분해 입력 (예: 김민준, 이서연, 박도윤)";
    textarea.value = currentNames.join(", ");

    var countLabel = document.createElement("div");
    countLabel.className = "guest-count";
    countLabel.textContent = currentNames.length + "명 기록됨";

    textarea.addEventListener("input", function () {
      var names = parseNames(textarea.value);
      setNames(item.id, names);
      row.classList.toggle("checked", names.length > 0);
      indicator.textContent = names.length > 0 ? "\\u2713" : "";
      countLabel.textContent = names.length + "명 기록됨";
      updateSummary();
    });

    guestWrap.appendChild(textarea);
    guestWrap.appendChild(countLabel);
    info.appendChild(guestWrap);

    if (opts.isWalkin) {
      var noteInput = document.createElement("input");
      noteInput.type = "text";
      noteInput.className = "walkin-note-input";
      noteInput.placeholder = "비고 (선택)";
      noteInput.value = item.note || "";
      noteInput.addEventListener("input", function () {
        item.note = noteInput.value;
        saveState();
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
      time: null,
      addedAt: Date.now(),
    };
    state.walkins.push(walkin);
    saveState();
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
