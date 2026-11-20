"use client";

import { useEffect, useRef, useState } from "react";

import { trackSeconds } from "../_content/artist-music-lengths";

// 작가 전시 프로필의 배경음악 플레이어 — 화면 아래에 붙어 있고, 켜기·끄기·소리 크기·곡 목록을 다룬다.
// 브라우저는 소리가 나는 자동재생을 막으므로, 처음 스크롤하거나 누르는 순간 재생을 시작한다(플레이어에서 끄면 다시 켜지지 않는다).
// 음원은 preload="none" — 재생 전에는 파일을 받지 않는다.
// 재생 목록은 반복한다: 마지막 곡이 끝나면 첫 곡으로, 한 곡뿐이면 그 곡을 되풀이한다.

const VOLUME_KEY = "artist-bgm-volume";

// 곡 길이를 3:05처럼 분:초로 쓴다.
function length(src) {
  const sec = trackSeconds[src];
  if (!sec) return "";
  return `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")}`;
}

function Meta({ track }) {
  const len = length(track.src);
  return (
    <>
      {track.note ? <small>{track.note}</small> : null}
      {len ? <small className="bgm-len">{len}</small> : null}
    </>
  );
}

export default function ArtistBgmPlayer({ tracks }) {
  const audioRef = useRef(null);
  const rootRef = useRef(null);
  const userStoppedRef = useRef(false);
  const playOnChangeRef = useRef(false);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.6);
  const [muted, setMuted] = useState(false);
  const [listOpen, setListOpen] = useState(false);
  const [error, setError] = useState("");

  const track = tracks[index];

  useEffect(() => {
    try {
      const saved = parseFloat(window.localStorage.getItem(VOLUME_KEY));
      if (saved >= 0 && saved <= 1) setVolume(saved);
    } catch {
      // 저장소를 쓸 수 없으면 기본 음량을 쓴다.
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      audio.muted = muted;
    }
  }, [volume, muted]);

  // 첫 스크롤·터치·클릭·키 입력에 맞춰 배경음악을 시작한다. 플레이어 안을 누른 경우는 플레이어가 직접 처리한다.
  // 브라우저가 소리 재생을 허락하는 입력은 정해져 있어(터치를 뗄 때, 클릭, 키 입력 등) 어떤 입력에서 허락될지
  // 브라우저마다 다르다. 그래서 여러 입력에서 시도하고, 실제로 재생이 시작되면 그때 듣기를 멈춘다.
  useEffect(() => {
    const events = ["scroll", "wheel", "touchstart", "touchend", "pointerdown", "pointerup", "keydown"];
    let done = false;
    let trying = false;
    function cleanup() {
      done = true;
      events.forEach((name) => window.removeEventListener(name, start, true));
    }
    async function start(event) {
      if (done || trying) return;
      // Esc는 멈추는 키이므로 음악을 켜지 않는다
      if (event.type === "keydown" && event.key === "Escape") return;
      if (event.target instanceof Node && rootRef.current?.contains(event.target)) return cleanup();
      if (userStoppedRef.current) return cleanup();
      const audio = audioRef.current;
      if (!audio || !audio.paused) return cleanup();
      trying = true;
      try {
        await audio.play();
        setError("");
        cleanup();
      } catch {
        // 이 입력으로는 허락되지 않았다 — 다음 입력에서 다시 시도한다.
      } finally {
        trying = false;
      }
    }
    events.forEach((name) => window.addEventListener(name, start, { capture: true, passive: true }));
    return cleanup;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // PC에서 Esc를 누르면 배경음악을 멈춘다(플레이어의 일시정지와 같아서, 그 뒤 스크롤해도 다시 켜지지 않는다).
  // 다만 지도 팝업이나 곡 목록이 열려 있으면 Esc는 그것만 닫고 음악은 그대로 둔다.
  useEffect(() => {
    function onKey(event) {
      if (event.key !== "Escape" || event.defaultPrevented) return;
      const popupClose = document.querySelector(".leaflet-popup .leaflet-popup-close-button");
      if (popupClose) {
        popupClose.click();
        return;
      }
      if (listOpen) {
        setListOpen(false);
        return;
      }
      const audio = audioRef.current;
      if (audio && !audio.paused) {
        userStoppedRef.current = true;
        audio.pause();
      }
    }
    // 지도(Leaflet)를 누른 뒤에는 지도가 키 입력을 가로채 위로 올려보내지 않으므로, 먼저 받는 단계(capture)에서 듣는다
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [listOpen]);

  async function play() {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      await audio.play();
      setError("");
    } catch {
      setPlaying(false);
    }
  }

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      userStoppedRef.current = false;
      play();
    } else {
      userStoppedRef.current = true;
      audio.pause();
    }
  }

  function choose(next, autoplay = true) {
    const n = (next + tracks.length) % tracks.length;
    setIndex(n);
    setError("");
    if (autoplay) {
      userStoppedRef.current = false;
      playOnChangeRef.current = true;
    }
  }

  // 곡이 바뀐 뒤(src가 새로 붙은 뒤) 재생을 이어 간다.
  useEffect(() => {
    if (!playOnChangeRef.current) return;
    playOnChangeRef.current = false;
    audioRef.current?.load();
    play();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  function changeVolume(value) {
    const v = Math.min(1, Math.max(0, value));
    setVolume(v);
    setMuted(v === 0);
    try {
      window.localStorage.setItem(VOLUME_KEY, String(v));
    } catch {
      // 저장하지 못해도 재생에는 지장이 없다.
    }
  }

  return (
    <aside className="bgm" ref={rootRef} aria-label="배경음악">
      <style>{`
        .bgm { position:fixed; left:0; right:0; bottom:0; z-index:20; padding:0 12px calc(10px + env(safe-area-inset-bottom)); pointer-events:none; }
        .bgm-box { max-width:696px; margin:0 auto; background:rgba(23,20,90,.96); color:#fff; box-shadow:0 10px 30px rgba(23,20,90,.25); pointer-events:auto; -webkit-backdrop-filter:blur(8px); backdrop-filter:blur(8px); }
        .bgm-bar { display:flex; align-items:center; gap:4px; padding:6px 8px 6px 6px; }
        .bgm button { display:inline-flex; align-items:center; justify-content:center; flex:0 0 auto; width:40px; height:40px; padding:0; border:0; background:none; color:#fff; cursor:pointer; }
        .bgm button:focus-visible { outline:2px solid #3fd07f; outline-offset:-2px; }
        .bgm button svg { width:18px; height:18px; fill:currentColor; }
        .bgm .bgm-play { width:42px; height:42px; border-radius:50%; background:#169a52; }
        .bgm .bgm-play svg { width:16px; height:16px; }
        .bgm-now { flex:1 1 auto; min-width:0; padding:0 6px; }
        .bgm-kicker { display:block; color:#7fd0f5; font-size:10px; font-weight:700; letter-spacing:.12em; }
        .bgm-title { display:-webkit-box; overflow:hidden; font-size:13.5px; font-weight:500; line-height:1.35; -webkit-line-clamp:2; -webkit-box-orient:vertical; word-break:keep-all; }
        .bgm-title small { margin-left:6px; color:#b7b5dd; font-size:11.5px; font-weight:400; }
        .bgm-vol { display:flex; align-items:center; gap:0; }
        .bgm-vol input { width:84px; accent-color:#3fd07f; }
        .bgm-list { margin:0; padding:2px 8px 10px; list-style:none; }
        .bgm-list button { display:flex; justify-content:flex-start; gap:10px; width:100%; height:auto; min-height:40px; padding:8px 8px; text-align:left; font:inherit; font-size:13px; line-height:1.4; color:#d9d8f3; }
        .bgm-list button[aria-current="true"] { color:#fff; font-weight:700; }
        .bgm-list button[aria-current="true"] .bgm-no { color:#3fd07f; }
        .bgm-list button:hover { background:rgba(255,255,255,.06); }
        .bgm-no { flex:0 0 auto; width:18px; color:#7fd0f5; font-variant-numeric:tabular-nums; }
        .bgm-list small { margin-left:6px; color:#a8a6d4; font-weight:400; }
        .bgm small.bgm-len { font-variant-numeric:tabular-nums; }
        .bgm-error { margin:0; padding:0 14px 10px; color:#ffd2c8; font-size:12px; }
        @media (max-width:420px) { .bgm-vol input { width:58px; } .bgm .bgm-skip { display:none; } }
        @media print { .bgm { display:none; } }
      `}</style>

      <audio
        ref={audioRef}
        src={track.src}
        preload="none"
        loop={tracks.length === 1}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => choose(index + 1)}
        onError={() => {
          setPlaying(false);
          setError("음악 파일을 불러오지 못했습니다.");
        }}
      />

      <div className="bgm-box">
        {listOpen ? (
          <ol className="bgm-list" aria-label="재생 목록">
            {tracks.map((t, i) => (
              <li key={t.src}>
                <button type="button" aria-current={i === index} onClick={() => choose(i)}>
                  <span className="bgm-no">{i + 1}</span>
                  <span>{t.title}<Meta track={t} /></span>
                </button>
              </li>
            ))}
          </ol>
        ) : null}

        <div className="bgm-bar">
          <button type="button" className="bgm-play" onClick={toggle} aria-label={playing ? "배경음악 끄기" : "배경음악 켜기"} aria-pressed={playing}>
            {playing ? (
              <svg viewBox="0 0 16 16" aria-hidden="true"><rect x="3" y="2" width="3.6" height="12" /><rect x="9.4" y="2" width="3.6" height="12" /></svg>
            ) : (
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2.2v11.6L14 8z" /></svg>
            )}
          </button>
          {tracks.length > 1 ? (
            <button type="button" className="bgm-skip" onClick={() => choose(index + 1)} aria-label="다음 곡">
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 2.5v11L10 8zM11 2.5h2.5v11H11z" /></svg>
            </button>
          ) : null}
          <div className="bgm-now" aria-live="polite">
            <span className="bgm-kicker">BGM {index + 1}/{tracks.length}</span>
            <span className="bgm-title">{track.title}<Meta track={track} /></span>
          </div>
          <div className="bgm-vol">
            <button type="button" onClick={() => setMuted((m) => !m)} aria-label={muted ? "소리 켜기" : "소리 끄기"} aria-pressed={muted}>
              {muted || volume === 0 ? (
                <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M1.5 5.5h3L8.5 2v12l-4-3.5h-3zM10.5 5.2l1.1-1.1 1.7 1.7 1.7-1.7 1.1 1.1-1.7 1.7 1.7 1.7-1.1 1.1-1.7-1.7-1.7 1.7-1.1-1.1 1.7-1.7z" /></svg>
              ) : (
                <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M1.5 5.5h3L8.5 2v12l-4-3.5h-3zM10.5 5a3.8 3.8 0 0 1 0 6l-.9-1.1a2.4 2.4 0 0 0 0-3.8zM12.3 2.8a6.6 6.6 0 0 1 0 10.4l-.9-1.1a5.2 5.2 0 0 0 0-8.2z" /></svg>
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={muted ? 0 : volume}
              onChange={(e) => changeVolume(parseFloat(e.target.value))}
              aria-label="소리 크기"
            />
          </div>
          <button type="button" onClick={() => setListOpen((o) => !o)} aria-label="재생 목록" aria-expanded={listOpen}>
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M1.5 3h9v1.6h-9zM1.5 7.2h9v1.6h-9zM1.5 11.4h6v1.6h-6zM11.5 9.5V2.5h3.5v1.6h-2v6.4a2 2 0 1 1-1.5-1.94z" /></svg>
          </button>
        </div>
        {error ? <p className="bgm-error" role="status">{error}</p> : null}
      </div>
    </aside>
  );
}
