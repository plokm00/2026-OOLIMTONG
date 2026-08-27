// 시민작가노트 프로필 사진 생성기
// 사용법: node tools/make-artist-profile.mjs <원본이미지> <작가id> [--cx 0.5] [--cy 0.35] [--h 0.5]
//   cx, cy : 얼굴 중심 위치(이미지 기준 0~1 비율)
//   h      : 잘라낼 세로 길이(이미지 높이 기준 비율). 가로는 4:5 비율로 자동 계산.
// 결과: public/artist-profiles/<작가id>.webp (300x375, 2x 해상도)

import path from "node:path";
import sharp from "sharp";

const OUT_W = 300;
const OUT_H = 375;

const [input, id, ...rest] = process.argv.slice(2);
if (!input || !id) {
  console.error("사용법: node tools/make-artist-profile.mjs <원본이미지> <작가id> [--cx 0.5] [--cy 0.35] [--h 0.5]");
  process.exit(1);
}

const opts = { cx: 0.5, cy: 0.35, h: 0.5 };
for (let i = 0; i < rest.length; i += 2) {
  const key = rest[i].replace(/^--/, "");
  if (key in opts) opts[key] = Number(rest[i + 1]);
}

const image = sharp(input).rotate();
const meta = await image.metadata();

let cropH = Math.round(meta.height * opts.h);
let cropW = Math.round((cropH * OUT_W) / OUT_H);
if (cropW > meta.width) {
  cropW = meta.width;
  cropH = Math.round((cropW * OUT_H) / OUT_W);
}

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const left = clamp(Math.round(meta.width * opts.cx - cropW / 2), 0, meta.width - cropW);
const top = clamp(Math.round(meta.height * opts.cy - cropH / 2), 0, meta.height - cropH);

const out = path.join("public", "artist-profiles", `${id}.webp`);
await image
  .extract({ left, top, width: cropW, height: cropH })
  .resize(OUT_W, OUT_H, { fit: "cover" })
  .webp({ quality: 82 })
  .toFile(out);

console.log(`${out} <- ${input} (원본 ${meta.width}x${meta.height}, 크롭 ${cropW}x${cropH} @ ${left},${top})`);
