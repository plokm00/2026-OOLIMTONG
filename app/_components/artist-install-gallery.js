"use client";

import { useState } from "react";

// 전시 전경 — 큰 사진 한 장과 그 아래 썸네일. 썸네일을 누르면 큰 사진이 바뀐다.
// 큰 사진은 지금 보이는 한 장만 불러오고, 나머지는 누를 때 불러온다.
export default function ArtistInstallGallery({ photos }) {
  const [index, setIndex] = useState(0);
  const current = photos[index] ?? photos[0];

  return (
    <div className="xp-install-gallery">
      <div className="xp-install">
        <img src={current.src} alt={current.alt} width="1800" height="840" />
      </div>
      {photos.length > 1 ? (
        <div className="xp-install-thumbs" role="group" aria-label="전시 전경 사진 고르기">
          {photos.map((photo, i) => (
            <button
              type="button"
              key={photo.src}
              className={i === index ? "is-on" : undefined}
              aria-pressed={i === index}
              aria-label={`${i + 1}번째 사진: ${photo.alt}`}
              onClick={() => setIndex(i)}
            >
              <img src={photo.thumb} alt="" width="360" height="168" loading="lazy" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
