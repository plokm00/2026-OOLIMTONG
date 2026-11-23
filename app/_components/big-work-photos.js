"use client";

// 17인 목록의 대형 울림통 카드 사진 — 마우스를 작품 모양 위에 올리면 홍보물의 푸른 망점 이미지로 바뀌고
// (모뉴먼트 섬네일과 같은 효과) 커서가 돋보기로 바뀐다. 작품을 누르면 사진들을 크게 넘겨 본다.
// 첫 장은 카드에서 잘려 보이는 작품 프로필 사진 전체. 나머지 사진은 창을 열 때만 불러온다.
// 작품 모양인지는 망점 이미지(배경이 투명한 PNG 계열 webp)의 투명도로 판단한다.

import { useCallback, useEffect, useRef, useState } from "react";

export default function BigWorkPhotos({ work }) {
  const photos = work.photos?.length ? [{ src: work.image, alt: work.alt, profile: true }, ...work.photos] : [];
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [touchX, setTouchX] = useState(null);
  const [flash, setFlash] = useState(false);
  const [hit, setHit] = useState(false);
  const button = useRef(null);
  const mask = useRef(null);
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

  // 마우스가 없는 기기(휴대폰)에서는 롤오버를 볼 수 없으니, 카드가 화면에 들어올 때 망점 이미지를 한 번 비춰
  // 누를 수 있는 그림이라는 걸 알린다.
  useEffect(() => {
    const el = button.current;
    if (!el || window.matchMedia("(hover:hover) and (pointer:fine)").matches) return undefined;
    if (window.matchMedia("(prefers-reduced-motion:reduce)").matches) return undefined;
    let timer;
    const io = new IntersectionObserver((items) => {
      if (!items.some((item) => item.isIntersecting)) return;
      io.disconnect();
      timer = setTimeout(() => {
        setFlash(true);
        timer = setTimeout(() => setFlash(false), 1100);
      }, 350);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => { io.disconnect(); clearTimeout(timer); };
  }, []);

  // 망점 이미지를 작은 캔버스에 그려 두고, 마우스 위치의 투명도로 작품 모양 위인지 본다.
  const readMask = (img) => {
    try {
      const w = 160;
      const h = Math.round((img.naturalHeight / img.naturalWidth) * w) || 1;
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      ctx.drawImage(img, 0, 0, w, h);
      mask.current = { w, h, data: ctx.getImageData(0, 0, w, h).data };
    } catch {
      mask.current = null;
    }
  };
  // 이미지가 화면을 그리기 전에 이미 받아져 있으면 onLoad가 지나가 버리므로 한 번 더 확인한다.
  useEffect(() => {
    const img = button.current?.querySelector(".xi-big-blue");
    if (img?.complete && img.naturalWidth) readMask(img);
  }, []);
  const overShape = (event) => {
    const img = button.current?.querySelector(".xi-big-blue");
    const m = mask.current;
    if (!img || !m) return true;
    const r = img.getBoundingClientRect();
    const x = Math.floor(((event.clientX - r.left) / r.width) * m.w);
    const y = Math.floor(((event.clientY - r.top) / r.height) * m.h);
    if (x < 0 || y < 0 || x >= m.w || y >= m.h) return false;
    return m.data[(y * m.w + x) * 4 + 3] > 60;
  };

  const pic = (
    <>
      <img src={work.image} alt={work.alt} loading="lazy" />
      <img className="xi-big-blue" src={blue} alt="" loading="lazy" onLoad={(event) => readMask(event.currentTarget)} />
    </>
  );

  if (!photos.length) return <div className="xi-big-pic">{pic}</div>;

  const current = photos[index];
  return (
    <>
      <button
        type="button"
        ref={button}
        className={["xi-big-pic", flash ? "is-flash" : "", hit ? "is-hit" : ""].filter(Boolean).join(" ")}
        onMouseMove={(event) => setHit(overShape(event))}
        onMouseLeave={() => setHit(false)}
        onClick={(event) => {
          // 마우스로 누를 때는 작품 모양 위일 때만 연다(손가락·키보드는 사진 어디를 눌러도 연다).
          if (event.detail > 0 && event.nativeEvent.pointerType === "mouse" && !overShape(event)) return;
          setIndex(0);
          setOpen(true);
        }}
        aria-label={`${work.title} 사진 ${photos.length}장 보기`}
      >
        {pic}
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
