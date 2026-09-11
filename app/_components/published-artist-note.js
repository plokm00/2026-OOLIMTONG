"use client";

import { useEffect, useState } from "react";

export default function PublishedArtistNote({ artist, notes }) {
  // 서버에서 17명 분을 미리 받아 왔다면 곧바로 그린다 — 작가를 바꿔도 로딩이 없다.
  const preloaded = notes ? { status: notes[artist.id] ? "done" : "empty", text: notes[artist.id] || "" } : null;
  const [state, setState] = useState(preloaded ?? { status: "loading", text: "" });

  useEffect(() => {
    if (notes) {
      setState({ status: notes[artist.id] ? "done" : "empty", text: notes[artist.id] || "" });
      return undefined;
    }

    let active = true;
    setState({ status: "loading", text: "" });

    fetch(`/api/artist-note/published/${encodeURIComponent(artist.id)}`)
      .then(async (response) => {
        if (!response.ok) throw new Error("load_failed");
        return response.json();
      })
      .then((data) => {
        if (active) setState({ status: data.text ? "done" : "empty", text: data.text || "" });
      })
      .catch(() => {
        if (active) setState({ status: "error", text: "" });
      });

    return () => {
      active = false;
    };
  }, [artist.id, notes]);

  return (
    <section className="published-note" aria-live="polite">
      <style>{`
        .published-note { margin-top:34px; padding:40px 48px; border:1px solid #e7d5c8; background:#fffcf8; box-shadow:0 2px 12px rgba(38,20,16,.05); }
        .published-note-label { margin:0 0 18px; color:var(--an-accent2); font-size:12px; font-weight:700; letter-spacing:.1em; }
        .published-note-text { margin:0; color:var(--an-text); font-size:16px; line-height:1.95; white-space:pre-wrap; }
        .published-note-state { margin:0; color:var(--an-dim); font-size:14px; line-height:1.7; }
        @media (max-width:700px) { .published-note { padding:26px 20px; } }
      `}</style>
      <p className="published-note-label">공개 작가 노트</p>
      {state.status === "done" ? <p className="published-note-text">{state.text}</p> : null}
      {state.status === "loading" ? <p className="published-note-state">작가 노트를 불러오는 중입니다.</p> : null}
      {state.status === "empty" ? <p className="published-note-state">아직 완성된 작가 노트가 없습니다.</p> : null}
      {state.status === "error" ? <p className="published-note-state">작가 노트를 잠시 불러오지 못했습니다.</p> : null}
    </section>
  );
}
