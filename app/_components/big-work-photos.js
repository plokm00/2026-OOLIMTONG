"use client";

// 17인 목록의 대형 울림통 카드 사진 — 마우스를 올리면 홍보물의 푸른 망점 이미지로 바뀌고(모뉴먼트 섬네일과 같은 효과),
// 누르면 그 울림통의 사진들을 크게 넘겨 본다. 사진은 창을 열 때만 불러온다.

import { useCallback, useEffect, useState } from "react";

export default function BigWorkPhotos({ work }) {
  const photos = work.photos ?? [];
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [touchX, setTouchX] = useState(null);
  const blue = work.image.replace(/\.webp$/, "-blue.webp");

  const move = useCallback((step) => setIndex((i) => (i + step + photos.length) % photos.length), [photos.length]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
    };
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, move]);

  const pic = (
    <>
      <img src={work.image} alt={work.alt} loading="lazy" />
      <img className="xi-big-blue" src={blue} alt="" loading="lazy" />
    </>
  );

  if (!photos.length) return <div className="xi-big-pic">{pic}</div>;

  const current = photos[index];
  return (
    <>
      <button
        type="button"
        className="xi-big-pic"
        onClick={() => { setIndex(0); setOpen(true); }}
        aria-label={`${work.title} 사진 ${photos.length}장 보기`}
      >
        {pic}
        <span className="xi-big-more">사진 {photos.length}장 보기</span>
      </button>
      {open ? (
        <div className="xi-lb" role="dialog" aria-modal="true" aria-label={`${work.title} 사진`} onClick={() => setOpen(false)}>
          <figure
            onClick={(event) => event.stopPropagation()}
            onTouchStart={(event) => setTouchX(event.touches[0].clientX)}
            onTouchEnd={(event) => {
              if (touchX === null) return;
              const dx = event.changedTouches[0].clientX - touchX;
              if (Math.abs(dx) > 40) move(dx < 0 ? 1 : -1);
              setTouchX(null);
            }}
          >
            <img key={current.src} src={current.src} alt={current.alt} />
            <figcaption>
              <b>{work.title}</b> {current.alt}
              <span>{index + 1} / {photos.length}</span>
            </figcaption>
          </figure>
          <button type="button" className="xi-lb-nav is-prev" aria-label="이전 사진" onClick={(event) => { event.stopPropagation(); move(-1); }}>‹</button>
          <button type="button" className="xi-lb-nav is-next" aria-label="다음 사진" onClick={(event) => { event.stopPropagation(); move(1); }}>›</button>
          <button type="button" className="xi-lb-close" aria-label="닫기" onClick={() => setOpen(false)}>×</button>
        </div>
      ) : null}
    </>
  );
}
