"use client";

// 작가 페이지 맨 아래 방명록 — 이름(선택)과 한 줄 글만 받는다.
// DB 읽기를 줄이려고 방명록 칸이 화면에 가까워졌을 때 한 번만 불러오고, 자동 새로고침은 하지 않는다.

import { useEffect, useRef, useState } from "react";

const NAME_MAX = 12;
const TEXT_MAX = 100;

const day = (ms) => {
  const d = new Date(ms);
  return `${d.getMonth() + 1}.${d.getDate()}.`;
};

// 내가 남긴 글의 지우기 열쇠 — 이 브라우저에만 둔다(다른 기기에서는 지울 수 없다).
const MINE_KEY = "oolimtong-guestbook-mine";
const readMine = () => {
  try {
    const data = JSON.parse(window.localStorage.getItem(MINE_KEY) || "{}");
    return data && typeof data === "object" ? data : {};
  } catch {
    return {};
  }
};
const writeMine = (data) => {
  try {
    window.localStorage.setItem(MINE_KEY, JSON.stringify(data));
  } catch {
    // 저장하지 못하면 이번 방문 동안만 지울 수 있다.
  }
};

const MESSAGES = {
  empty: "글을 적어 주세요.",
  too_fast: "잠시 뒤에 다시 남겨 주세요.",
  failed: "남기지 못했어요. 잠시 뒤에 다시 해 주세요.",
  delete_failed: "지우지 못했어요. 잠시 뒤에 다시 해 주세요.",
  edit_failed: "고치지 못했어요. 잠시 뒤에 다시 해 주세요.",
};

// 이름 옆에 한 줄 글칸을 두는 간단한 구성(모바일 청첩장 축하글처럼). 글은 모서리가 조금씩 다른 파랑 계열 말풍선으로 쌓인다.
const TINTS = ["", "is-deep"];
const SHAPES = [
  "10px 6px 12px 4px",
  "6px 12px 5px 10px",
  "12px 8px 4px 10px",
  "8px 4px 12px 7px",
  "5px 10px 8px 12px",
];
const tilt = (id) => {
  let h = 0;
  for (const c of String(id)) h = (h * 31 + c.charCodeAt(0)) | 0;
  return Math.abs(h);
};

export default function ArtistGuestbook({ artistId, artistName }) {
  const box = useRef(null);
  const [entries, setEntries] = useState(null);
  const [loadError, setLoadError] = useState(false);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [website, setWebsite] = useState("");
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState("");
  const [mine, setMine] = useState({});
  const [askDelete, setAskDelete] = useState("");
  const [editing, setEditing] = useState("");
  const [draft, setDraft] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => { setMine(readMine()); }, []);

  useEffect(() => {
    const el = box.current;
    if (!el) return undefined;
    let done = false;
    const load = () => {
      if (done) return;
      done = true;
      fetch(`/api/guestbook/${artistId}`)
        .then((res) => (res.ok ? res.json() : Promise.reject()))
        .then((data) => setEntries(data.entries ?? []))
        .catch(() => setLoadError(true));
    };
    if (!("IntersectionObserver" in window)) { load(); return undefined; }
    const io = new IntersectionObserver((items) => {
      if (items.some((item) => item.isIntersecting)) { load(); io.disconnect(); }
    }, { rootMargin: "400px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [artistId]);

  // 남기기(또는 Enter)를 누르면 바로 올린다. 다시 확인을 묻지 않는다(확인을 못 보고 떠나면 글이 빠지므로).
  // 잘못 남긴 글은 이 휴대폰에서 '내 글 지우기'로 지울 수 있다.
  async function submit(event) {
    event.preventDefault();
    if (sending) return;
    const body = text.trim();
    if (!body) { setNotice(MESSAGES.empty); return; }
    setSending(true);
    setNotice("");
    try {
      const res = await fetch(`/api/guestbook/${artistId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, text: body, website }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) { setNotice(MESSAGES[data.error] ?? MESSAGES.failed); return; }
      if (data.entry) {
        setEntries((list) => [{ ...data.entry, fresh: true }, ...(list ?? [])]);
        if (data.token) {
          const next = { ...readMine(), [data.entry.id]: data.token };
          writeMine(next);
          setMine(next);
        }
      }
      setText("");
    } catch {
      setNotice(MESSAGES.failed);
    } finally {
      setSending(false);
    }
  }

  async function remove(id) {
    const token = mine[id];
    if (!token) return;
    try {
      const res = await fetch(`/api/guestbook/${artistId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, token }),
      });
      if (!res.ok) throw new Error("delete");
      setEntries((list) => (list ?? []).filter((entry) => entry.id !== id));
      const next = { ...readMine() };
      delete next[id];
      writeMine(next);
      setMine(next);
    } catch {
      setNotice(MESSAGES.delete_failed);
    } finally {
      setAskDelete("");
    }
  }

  function startEdit(entry) {
    setAskDelete("");
    setNotice("");
    setEditing(entry.id);
    setDraft(entry.text);
  }

  // 자기 글 고치기 — 남길 때 받은 열쇠로 확인한다. 글만 바뀌고 이름·날짜는 그대로다.
  async function saveEdit(event, id) {
    event.preventDefault();
    if (saving) return;
    const body = draft.trim();
    if (!body) { setNotice(MESSAGES.empty); return; }
    const token = mine[id];
    if (!token) return;
    setSaving(true);
    setNotice("");
    try {
      const res = await fetch(`/api/guestbook/${artistId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, token, text: body }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.entry) { setNotice(MESSAGES[data.error] ?? MESSAGES.edit_failed); return; }
      setEntries((list) => (list ?? []).map((entry) => (entry.id === id ? { ...entry, text: data.entry.text, edited: data.entry.edited } : entry)));
      setEditing("");
    } catch {
      setNotice(MESSAGES.edit_failed);
    } finally {
      setSaving(false);
    }
  }

  return (
    <section className="xp-block xp-guest" id="guestbook" aria-labelledby="xp-guest-title" ref={box}>
      <h2 className="xp-h2" id="xp-guest-title">방명록</h2>
      <p className="og-sub">{artistName} 작가의 울림에 한마디 답해 주세요.</p>
      <form className="og-card" onSubmit={submit}>
        <div className="og-line">
          <input
            className="og-name"
            value={name}
            onChange={(e) => setName(e.target.value.slice(0, NAME_MAX))}
            placeholder="이름"
            aria-label="이름(선택)"
            maxLength={NAME_MAX}
            autoComplete="nickname"
          />
          <input
            className="og-text"
            value={text}
            onChange={(e) => setText(e.target.value.slice(0, TEXT_MAX))}
            placeholder="한 줄 남기기"
            aria-label={`${artistName} 작가에게 남기는 글`}
            maxLength={TEXT_MAX}
            enterKeyHint="send"
          />
          <button className="og-send" type="submit" disabled={sending || !text.trim()}>{sending ? "남기는 중" : "남기기"}</button>
        </div>
        <input className="xp-guest-trap" value={website} onChange={(e) => setWebsite(e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" />
      </form>
      {notice ? <p className="xp-guest-notice" role="status">{notice}</p> : null}
      {loadError ? <p className="og-empty">방명록을 불러오지 못했어요.</p> : null}
      {entries?.length ? (
        <ul className="og-wall">
          {entries.map((entry) => {
            const n = tilt(entry.id);
            return (
              <li
                key={entry.id}
                className={[TINTS[n % TINTS.length], entry.fresh ? "is-fresh" : ""].filter(Boolean).join(" ") || undefined}
                style={{ borderRadius: SHAPES[n % SHAPES.length], rotate: `${((n % 5) - 2) * 0.25}deg` }}
              >
                {editing === entry.id ? (
                  <form className="og-edit" onSubmit={(event) => saveEdit(event, entry.id)}>
                    <input
                      value={draft}
                      onChange={(e) => setDraft(e.target.value.slice(0, TEXT_MAX))}
                      aria-label="고칠 글"
                      maxLength={TEXT_MAX}
                      enterKeyHint="done"
                      autoFocus
                    />
                    <button type="submit" disabled={saving || !draft.trim()}>{saving ? "저장 중" : "저장"}</button>
                    <button type="button" onClick={() => setEditing("")}>취소</button>
                  </form>
                ) : (
                  <p>{entry.text}</p>
                )}
                <span>
                  {entry.name || "익명"} · {day(entry.at)}
                  {entry.edited ? " · 수정됨" : ""}
                  {mine[entry.id] && editing !== entry.id ? (
                    askDelete === entry.id ? (
                      <em className="og-del">
                        지울까요?
                        <button type="button" onClick={() => remove(entry.id)}>지우기</button>
                        <button type="button" onClick={() => setAskDelete("")}>아니요</button>
                      </em>
                    ) : (
                      <em className="og-del">
                        <button type="button" className="og-fix" onClick={() => startEdit(entry)}>수정</button>
                        <button type="button" onClick={() => setAskDelete(entry.id)}>내 글 지우기</button>
                      </em>
                    )
                  ) : null}
                </span>
              </li>
            );
          })}
        </ul>
      ) : null}
    </section>
  );
}
