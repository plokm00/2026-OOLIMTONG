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

const MESSAGES = {
  empty: "글을 적어 주세요.",
  too_fast: "잠시 뒤에 다시 남겨 주세요.",
  failed: "남기지 못했어요. 잠시 뒤에 다시 해 주세요.",
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
      if (data.entry) setEntries((list) => [data.entry, ...(list ?? [])]);
      setText("");
    } catch {
      setNotice(MESSAGES.failed);
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="xp-block xp-guest" id="guestbook" aria-labelledby="xp-guest-title" ref={box}>
      <h2 className="xp-h2" id="xp-guest-title">방명록</h2>
      <form className="xp-guest-form" onSubmit={submit}>
        <input
          className="xp-guest-name"
          value={name}
          onChange={(e) => setName(e.target.value.slice(0, NAME_MAX))}
          placeholder="이름(선택)"
          aria-label="이름(선택)"
          maxLength={NAME_MAX}
          autoComplete="nickname"
        />
        <input
          className="xp-guest-text"
          value={text}
          onChange={(e) => setText(e.target.value.slice(0, TEXT_MAX))}
          placeholder="작가에게 한 줄 남겨 주세요"
          aria-label={`${artistName} 작가에게 남기는 글`}
          maxLength={TEXT_MAX}
          enterKeyHint="send"
        />
        <input className="xp-guest-trap" value={website} onChange={(e) => setWebsite(e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <button className="xp-guest-send" type="submit" disabled={sending}>{sending ? "남기는 중" : "남기기"}</button>
      </form>
      {notice ? <p className="xp-guest-notice" role="status">{notice}</p> : null}
      {loadError ? <p className="xp-guest-empty">방명록을 불러오지 못했어요.</p> : null}
      {entries && !entries.length ? <p className="xp-guest-empty">첫 번째 글을 남겨 주세요.</p> : null}
      {entries?.length ? (
        <ul className="xp-guest-list">
          {entries.map((entry) => (
            <li key={entry.id}>
              <b>{entry.name || "익명"}</b>
              <span className="xp-guest-msg">{entry.text}</span>
              <time dateTime={new Date(entry.at).toISOString()}>{day(entry.at)}</time>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
