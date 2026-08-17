"use client";

import { useEffect } from "react";

const artistLinks = {
  허양: "/oolimtong_2026_wcf_artists#heoyang",
  이재홍: "/oolimtong_2026_wcf_artists#lee-jaehong",
  조영범: "/oolimtong_2026_wcf_artists#cho-youngbeom",
  임계화: "/oolimtong_2026_wcf_artists#im-gyehwa",
  신정숙: "/oolimtong_2026_wcf_artists#shin-jeongsuk",
  이채명: "/oolimtong_2026_wcf_artists#lee-chaemyeong",
  박수연: "/oolimtong_2026_wcf_artists#park-suyeon",
  박소연: "/oolimtong_2026_wcf_artists#park-soyeon",
  이안: "/oolimtong_2026_wcf_artists#lee-an",
  박진희: "/oolimtong_2026_wcf_artists#park-jinhee",
  이성순: "/oolimtong_2026_wcf_artists#lee-seongsun",
  인동욱: "/oolimtong_2026_wcf_artists#in-donguk",
  민지현: "/oolimtong_2026_wcf_artists#min-jihyeon",
  김주원: "/oolimtong_2026_wcf_artists#kim-juwon",
  김현국: "/oolimtong_2026_wcf_artists#kim-hyeonguk",
  이새롬: "/oolimtong_2026_wcf_artists#lee-saerom",
  주장석: "/oolimtong_2026_wcf_artists#joo-jangseok",
};

export default function RecordArtistLinks() {
  useEffect(() => {
    document.querySelectorAll(".team-head .team-line").forEach((line) => {
      if (line.dataset.artistLinksReady) return;

      const when = line.querySelector(".team-when");
      const names = line.textContent
        .replace(when?.textContent ?? "", "")
        .split("·")
        .map((name) => name.trim())
        .filter((name) => name && name !== "김아영");

      if (!when || !names.length) return;
      line.dataset.artistLinksReady = "true";
      line.replaceChildren(when);

      names.forEach((name) => {
        line.append(" · ");
        const link = document.createElement("a");
        link.className = "record-artist-link";
        link.href = artistLinks[name] ?? "/oolimtong_2026_wcf_artists";
        link.textContent = name;
        link.setAttribute("aria-label", `${name} 작가 노트로 이동`);
        line.appendChild(link);
      });

      const note = document.createElement("p");
      note.className = "artist-link-note";
      note.textContent = "기획·진행 김아영 · 작가 이름을 누르면 개인 작가 노트로 이동합니다.";
      line.after(note);
    });
  }, []);

  return (
    <style>{`
      .record-artist-link { color:var(--text); font-weight:600; text-decoration:none; border-bottom:1px solid transparent; transition:color .15s,border-color .15s; }
      .record-artist-link:hover, .record-artist-link:focus-visible { color:var(--accent); border-color:var(--accent); outline:none; }
      .artist-link-note { margin:8px 0 0; color:var(--accent2); font-size:12px; }
    `}</style>
  );
}
