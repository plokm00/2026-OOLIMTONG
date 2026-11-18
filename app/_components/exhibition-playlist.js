"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./artist-exhibition.module.css";

export default function ExhibitionPlaylist({ tracks }) {
  const audio = useRef(null);
  const audioGraph = useRef(null);
  const request = useRef(0);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(45);
  const [error, setError] = useState("");

  useEffect(() => () => {
    request.current += 1;
    audioGraph.current?.context.close();
    audioGraph.current = null;
  }, []);

  function setAudioVolume(player, value) {
    if (audioGraph.current) audioGraph.current.gain.gain.value = value / 100;
    else player.volume = value / 100;
  }

  async function play(trackIndex, restart = false) {
    const player = audio.current;
    const track = tracks[trackIndex];
    const playRequest = ++request.current;
    setIndex(trackIndex);
    setError("");

    try {
      // Safari on iOS controls media-element volume through the device buttons.
      // A gain node keeps the on-page volume control working there as well.
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!audioGraph.current && AudioContextClass) {
        const context = new AudioContextClass();
        const gain = context.createGain();
        context.createMediaElementSource(player).connect(gain).connect(context.destination);
        audioGraph.current = { context, gain };
      }
      const context = audioGraph.current?.context;
      if (context?.state === "suspended") void context.resume().catch(() => {});
      setAudioVolume(player, volume);

      if (player.getAttribute("src") !== track.src) player.src = track.src;
      else if (restart) player.currentTime = 0;
      await player.play();
    } catch {
      if (playRequest !== request.current) return;
      setPlaying(false);
      setError("음악을 재생할 수 없습니다. 다시 시도해 주세요.");
    }
  }

  function toggle() {
    if (!audio.current.paused) {
      request.current += 1;
      audio.current.pause();
      return;
    }
    void play(index);
  }

  return (
    <section className={styles.player} aria-labelledby="exhibition-music">
      <audio
        ref={audio}
        preload="none"
        onPlaying={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => void play((index + 1) % tracks.length, true)}
        onError={() => {
          setPlaying(false);
          setError("음악 파일을 불러올 수 없습니다.");
        }}
      />
      <div className={styles.playerRow}>
        <button type="button" className={styles.playerBtn} onClick={toggle}>
          <span aria-hidden="true">{playing ? "Ⅱ" : "▶"} </span>
          {playing ? "일시정지" : "음악 재생"}
        </button>
        <p className={styles.currentTrack}>
          <strong id="exhibition-music">배경음악</strong>
          {tracks[index].title}
        </p>
        <label className={styles.volume}>
          음량
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            aria-valuetext={`${volume}%`}
            onChange={(event) => {
              const value = Number(event.target.value);
              setVolume(value);
              setAudioVolume(audio.current, value);
            }}
          />
        </label>
      </div>
      <details className={styles.playlist}>
        <summary>재생목록</summary>
        <ol>
          {tracks.map((track, trackIndex) => (
            <li key={track.src}>
              <button type="button" aria-current={trackIndex === index} onClick={() => void play(trackIndex, true)}>
                {track.title}
              </button>
            </li>
          ))}
        </ol>
      </details>
      {error && <p className={styles.playerError} role="status">{error}</p>}
    </section>
  );
}
