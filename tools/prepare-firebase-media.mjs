import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceDir = path.resolve(process.argv[2] ?? "public/cropped");
const outputDir = path.resolve(
  process.argv[3] ?? "C:/tmp/oolimtong-firebase-media/cropped",
);
const mediaExtensions = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".svg",
  ".mp4",
  ".webm",
  ".mov",
  ".m4v",
  ".mp3",
  ".wav",
  ".ogg",
]);

const entries = await fs.readdir(sourceDir, { withFileTypes: true });
const files = entries.filter(
  (entry) =>
    entry.isFile() &&
    mediaExtensions.has(path.extname(entry.name).toLowerCase()),
);

await fs.mkdir(outputDir, { recursive: true });

let sourceBytes = 0;
let outputBytes = 0;
let optimizedImages = 0;
let copiedFiles = 0;

for (const [index, entry] of files.entries()) {
  const sourcePath = path.join(sourceDir, entry.name);
  const outputPath = path.join(outputDir, entry.name);
  const extension = path.extname(entry.name).toLowerCase();
  const sourceStat = await fs.stat(sourcePath);
  sourceBytes += sourceStat.size;

  if (extension === ".jpg" || extension === ".jpeg") {
    const temporaryPath = `${outputPath}.tmp`;
    await sharp(sourcePath)
      .rotate()
      .resize({
        width: 2400,
        height: 2400,
        fit: "inside",
        withoutEnlargement: true,
      })
      .jpeg({
        quality: 82,
        progressive: true,
        mozjpeg: true,
      })
      .toFile(temporaryPath);

    const optimizedStat = await fs.stat(temporaryPath);
    if (optimizedStat.size < sourceStat.size) {
      await fs.rename(temporaryPath, outputPath);
      outputBytes += optimizedStat.size;
      optimizedImages += 1;
    } else {
      await fs.rm(temporaryPath);
      await fs.copyFile(sourcePath, outputPath);
      outputBytes += sourceStat.size;
      copiedFiles += 1;
    }
  } else if (extension === ".png") {
    const temporaryPath = `${outputPath}.tmp`;
    await sharp(sourcePath)
      .rotate()
      .resize({
        width: 2400,
        height: 2400,
        fit: "inside",
        withoutEnlargement: true,
      })
      .png({
        compressionLevel: 9,
        adaptiveFiltering: true,
      })
      .toFile(temporaryPath);

    const optimizedStat = await fs.stat(temporaryPath);
    if (optimizedStat.size < sourceStat.size) {
      await fs.rename(temporaryPath, outputPath);
      outputBytes += optimizedStat.size;
      optimizedImages += 1;
    } else {
      await fs.rm(temporaryPath);
      await fs.copyFile(sourcePath, outputPath);
      outputBytes += sourceStat.size;
      copiedFiles += 1;
    }
  } else {
    await fs.copyFile(sourcePath, outputPath);
    outputBytes += sourceStat.size;
    copiedFiles += 1;
  }

  if ((index + 1) % 25 === 0 || index + 1 === files.length) {
    console.log(`Prepared ${index + 1}/${files.length}`);
  }
}

console.log(
  JSON.stringify(
    {
      files: files.length,
      optimizedImages,
      copiedFiles,
      sourceMB: Number((sourceBytes / 1024 / 1024).toFixed(1)),
      outputMB: Number((outputBytes / 1024 / 1024).toFixed(1)),
      reductionPercent: Number(
        ((1 - outputBytes / sourceBytes) * 100).toFixed(1),
      ),
      outputDir,
    },
    null,
    2,
  ),
);
