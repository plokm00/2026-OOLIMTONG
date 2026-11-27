"use client";

import { useEffect, useState } from "react";

import { MEDIA_PLAY, MEDIA_STOP } from "./artist-bgm-player";

// 전시 전경 — 큰 사진 한 장과 그 아래 썸네일. 썸네일을 누르면 큰 사진이 바뀐다.
// 큰 사진은 지금 보이는 한 장만 불러오고, 나머지는 누를 때 불러온다.
// 항목에 video가 있으면 영상으로 보여 준다(src는 포스터). 영상은 재생을 누르기 전까지 받지 않는다.
// 세로 영상(portrait)은 자르지 않고 세로 그대로 보인다 — 그때만 칸이 화면 높이에 맞춰 커진다.
// 영상은 현장 소리와 함께 재생하고, 재생하는 동안 배경음악은 잠시 멈춘다(MEDIA_PLAY/STOP 이벤트).
export default function ArtistInstallGallery({ photos }) {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState(false);
  const current = photos[index] ?? photos[0];
  const isVideo = Boolean(current.video);

  // 재생 중에 다른 사진으로 넘기면 영상이 사라지면서 pause가 오지 않으므로, 여기서 끝났다고 알린다.
  useEffect(() => {
    if (!isVideo) return undefined;
    return () => window.dispatchEvent(new Event(MEDIA_STOP));
  }, [isVideo, current.video]);

  return (
    <div className={["xp-install-gallery", isVideo ? "is-video" : "", isVideo && current.portrait ? "is-portrait" : ""].filter(Boolean).join(" ")}>
      <div className="xp-install">
        {isVideo ? (
          <video
            key={current.video}
            src={current.video}
            poster={current.src}
            aria-label={current.alt}
            width={current.portrait ? 720 : 1800}
            height={current.portrait ? 1546 : 840}
            controls
            playsInline
            preload="none"
            autoPlay={picked}
            onPlay={() => window.dispatchEvent(new Event(MEDIA_PLAY))}
            onPause={() => window.dispatchEvent(new Event(MEDIA_STOP))}
            onEnded={() => window.dispatchEvent(new Event(MEDIA_STOP))}
          />
        ) : (
          <img src={current.src} alt={current.alt} width="1800" height="840" />
        )}
      </div>
      {photos.length > 1 ? (
        <div className="xp-install-thumbs" role="group" aria-label="전시 전경 사진 고르기">
          {photos.map((photo, i) => (
            <button
              type="button"
              key={photo.video ?? photo.src}
              className={[i === index ? "is-on" : "", photo.video ? "is-video" : ""].join(" ").trim() || undefined}
              aria-pressed={i === index}
              aria-label={`${i + 1}번째 ${photo.video ? "영상" : "사진"}: ${photo.alt}`}
              onClick={() => {
                setPicked(true);
                setIndex(i);
              }}
            >
              <img src={photo.thumb} alt="" width="360" height="168" loading="lazy" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
