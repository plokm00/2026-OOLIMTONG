// 문막-흙으로 잇다 2026 현장 체크인 (테스트 버전)
// 사전신청 명단은 /oolimtong_2026_munmak 페이지의 PACKED 값을 그대로 fetch해서 읽어오므로
// 예약이 추가/변경되면 이 페이지에도 자동 반영된다. 체크인 상태는 지금은
// 이 기기의 localStorage에만 저장된다 — 여러 폰이 동시에 보는 실시간 버전이 아니다.

const metadata = {
  title: "현장 체크인(테스트) | 문막-흙으로 잇다 2026",
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
    border: 2px solid var(--line); background: #fff; cursor: pointer;
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

  /* ── 워크인 추가 폼 ── */
  .walkin-form {
    background: var(--bg2); border-radius: 6px; padding: 14px; margin-top: 8px;
  }
  .walkin-form .fields { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 10px; }
  .walkin-form input {
    border: 1px solid var(--line); border-radius: 4px; padding: 9px 10px;
    font-size: 14px; background: #fff; color: var(--text);
  }
  .walkin-form input[name="name"] { flex: 2; min-width: 120px; }
  .walkin-form input[name="total"] { flex: 1; min-width: 70px; }
  .walkin-form input[name="note"] { flex: 3; min-width: 140px; }
  .walkin-form button {
    width: 100%; padding: 11px; font-size: 14px; font-weight: 700;
    background: var(--accent); color: #fff; border: none; border-radius: 4px; cursor: pointer;
  }
  .walkin-form button:hover { background: var(--accent2); }

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
    <h1>현장 체크인</h1>
    <span class="test-badge">테스트 버전 · 이 기기에만 저장</span>
  </div>

  <div class="notice">
    지금은 <b>이 폰(브라우저)에만</b> 체크인 여부가 저장되는 시험판입니다. 다른 사람 폰과 실시간으로 공유되진 않아요.
    사전신청 명단은 <b>문막 페이지와 자동으로 같은 데이터</b>를 불러오므로, 예약이 바뀌면 새로고침 시 반영됩니다.
    써보시고 여러 명이 동시에 봐야 한다는 게 확인되면, 그다음 실시간 공유 버전(Firebase)으로 업그레이드합니다.
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

    <div class="walkin-form">
      <form id="walkin-form">
        <div class="fields">
          <input type="text" name="name" placeholder="이름 (선택)" autocomplete="off">
          <input type="number" name="total" placeholder="인원" min="1" inputmode="numeric" autocomplete="off">
          <input type="text" name="note" placeholder="비고 (선택)" autocomplete="off">
        </div>
        <button type="submit">현장 워크인으로 추가 + 체크인</button>
      </form>
    </div>

    <div class="reset-row">
      <button type="button" id="reset-btn">이 기기의 체크인 기록 초기화</button>
    </div>
  </div>
</div>
`;

const script = `
(function () {
  var PW = "1661";
  var STORAGE_KEY = "munmak2026-checkin-v1";
  var reservations = null;
  var selectedDate = null;
  var state = loadState();

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { checked: {}, walkins: [] };
      var parsed = JSON.parse(raw);
      return {
        checked: parsed.checked || {},
        walkins: parsed.walkins || [],
      };
    } catch (e) {
      return { checked: {}, walkins: [] };
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

  function isChecked(id) { return !!state.checked[id]; }

  function toggleChecked(id) {
    if (state.checked[id]) delete state.checked[id];
    else state.checked[id] = Date.now();
    saveState();
    render();
  }

  function removeWalkin(id) {
    state.walkins = state.walkins.filter(function (w) { return w.id !== id; });
    delete state.checked[id];
    saveState();
    render();
  }

  function renderRow(container, item, opts) {
    opts = opts || {};
    var row = document.createElement("div");
    row.className = "row" + (isChecked(item.id) ? " checked" : "");

    var check = document.createElement("div");
    check.className = "check";
    check.textContent = isChecked(item.id) ? "\\u2713" : "";
    check.addEventListener("click", function () { toggleChecked(item.id); });
    row.appendChild(check);

    var info = document.createElement("div");
    info.className = "info";

    var nameLine = document.createElement("div");
    nameLine.className = "name-line";
    var nameSpan = document.createElement("span");
    nameSpan.className = "name";
    nameSpan.textContent = item.name || "이름 미정";
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

    var meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent = fmtHeadcount(item) + (item.phone ? " · " + item.phone : "");
    info.appendChild(meta);

    if (item.note) {
      var note = document.createElement("div");
      note.className = "note";
      note.textContent = item.note;
      info.appendChild(note);
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

    var totalPeople = 0, checkedPeople = 0;
    dayReservations.concat(dayWalkins).forEach(function (item) {
      var count = item.total == null ? 1 : item.total;
      totalPeople += count;
      if (isChecked(item.id)) checkedPeople += count;
    });
    var summary = document.getElementById("summary");
    summary.innerHTML =
      "예약+워크인 <b>" + (dayReservations.length + dayWalkins.length) + "팀</b> · 예상 인원 약 <b>" + totalPeople + "명</b>" +
      '<span class="done">체크인 ' + checkedPeople + "명</span>";
  }

  function handleWalkinSubmit(e) {
    e.preventDefault();
    var form = e.target;
    var name = form.name.value.trim();
    var total = form.total.value ? +form.total.value : null;
    var note = form.note.value.trim();
    var id = "walkin_" + Date.now() + "_" + Math.random().toString(36).slice(2, 7);
    var walkin = {
      id: id,
      name: name,
      total: total,
      adults: null,
      kids: null,
      phone: "",
      note: note,
      date: selectedDate,
      time: null,
      addedAt: Date.now(),
    };
    state.walkins.push(walkin);
    state.checked[id] = Date.now();
    saveState();
    form.reset();
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

  document.getElementById("walkin-form").addEventListener("submit", handleWalkinSubmit);

  document.getElementById("reset-btn").addEventListener("click", function () {
    if (!confirm("이 기기에 저장된 체크인 기록을 모두 지울까요?")) return;
    state = { checked: {}, walkins: [] };
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
