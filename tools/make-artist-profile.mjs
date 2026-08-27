// 시민작가노트 프로필 사진 생성기
// 사용법: node tools/make-artist-profile.mjs <원본이미지> <작가id> [--cx 0.5] [--cy 0.35] [--h 0.5]
//   cx, cy : 얼굴 중심 위치(이미지 기준 0~1 비율)
//   h      : 잘라낼 세로 길이(이미지 높이 기준 비율). 가로는 4:5 비율로 자동 계산.
// 보정(모두 1이 원본 그대로, 생략 가능):
//   --contrast 1.15 --saturation 1.15 --brightness 1.03 --sharpen 1
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

const opts = { cx: 0.5, cy: 0.35, h: 0.5, contrast: 1, saturation: 1, brightness: 1, sharpen: 0 };
for (let i = 0; i < rest.length; i += 2) {
  const key = rest[i].replace(/^--/, "");
  if (key in opts) opts[key] = Number(rest[i + 1]);
}

// EXIF 회전을 먼저 굽고 나서 크기를 재야 세로 사진의 좌표가 맞습니다.
const upright = await sharp(input).rotate().toBuffer();
const image = sharp(upright);
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
let pipeline = image
  .extract({ left, top, width: cropW, height: cropH })
  .resize(OUT_W, OUT_H, { fit: "cover" });

// 배경에 묻히는 인물을 살리는 보정. 대비는 중간톤(128)을 축으로 벌린다.
if (opts.contrast !== 1) {
  pipeline = pipeline.linear(opts.contrast, 128 * (1 - opts.contrast));
}
if (opts.saturation !== 1 || opts.brightness !== 1) {
  pipeline = pipeline.modulate({ saturation: opts.saturation, brightness: opts.brightness });
}
if (opts.sharpen) pipeline = pipeline.sharpen({ sigma: 1 });

await pipeline.webp({ quality: 82 }).toFile(out);

const tweaks = ["contrast", "saturation", "brightness", "sharpen"]
  .filter((key) => opts[key] !== (key === "sharpen" ? 0 : 1))
  .map((key) => `${key} ${opts[key]}`)
  .join(", ");
console.log(`${out} <- ${input} (원본 ${meta.width}x${meta.height}, 크롭 ${cropW}x${cropH} @ ${left},${top}${tweaks ? `, ${tweaks}` : ""})`);
