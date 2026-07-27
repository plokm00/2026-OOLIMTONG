import fs from "node:fs/promises";
import path from "node:path";

const publicDir = path.resolve(process.argv[2] ?? "public");
const bucket = "oolimtong-archive.firebasestorage.app";
const objectPrefix = "site-media";
const firebaseMediaBase =
  `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/`;
const mediaExtensions = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".webp",
  ".avif",
  ".svg",
  ".mp4",
  ".webm",
  ".mov",
  ".m4v",
  ".mp3",
  ".wav",
  ".ogg",
]);

const rootEntries = await fs.readdir(publicDir, { withFileTypes: true });
const mediaPaths = rootEntries
  .filter(
    (entry) =>
      entry.isFile() &&
      mediaExtensions.has(path.extname(entry.name).toLowerCase()),
  )
  .map((entry) => entry.name);

const croppedDir = path.join(publicDir, "cropped");
const croppedEntries = await fs.readdir(croppedDir, { withFileTypes: true });
mediaPaths.push(
  ...croppedEntries
    .filter(
      (entry) =>
        entry.isFile() &&
        mediaExtensions.has(path.extname(entry.name).toLowerCase()),
    )
    .map((entry) => `cropped/${entry.name}`),
);

const manifest = Object.fromEntries(
  mediaPaths
    .sort((left, right) => left.localeCompare(right, "ko"))
    .map((relativePath) => {
      const objectPath = `${objectPrefix}/${relativePath}`;
      const url = `${firebaseMediaBase}${encodeURIComponent(objectPath)}?alt=media`;
      return [relativePath, url];
    }),
);

const htmlFiles = rootEntries.filter(
  (entry) =>
    entry.isFile() && path.extname(entry.name).toLowerCase() === ".html",
);

let replacements = 0;
let lazyImagesAdded = 0;

for (const entry of htmlFiles) {
  const htmlPath = path.join(publicDir, entry.name);
  let html = await fs.readFile(htmlPath, "utf8");

  for (const [relativePath, url] of Object.entries(manifest)) {
    for (const quote of ['"', "'", "`"]) {
      const source = `${quote}${relativePath}${quote}`;
      const target = `${quote}${url}${quote}`;
      const occurrences = html.split(source).length - 1;
      if (occurrences > 0) {
        html = html.replaceAll(source, target);
        replacements += occurrences;
      }
    }
  }

  html = html.replace(
    /<img\b(?=[^>]*\bsrc=["']https:\/\/firebasestorage\.googleapis\.com\/v0\/b\/oolimtong-archive\.firebasestorage\.app\/o\/)[^>]*>/gi,
    (tag) => {
      if (
        /\bloading\s*=/i.test(tag) ||
        /\bclass=["'][^"']*(?:header-loop|title-wordmark)[^"']*["']/i.test(tag)
      ) {
        return tag;
      }

      lazyImagesAdded += 1;
      return tag.replace(/>$/, ' loading="lazy" decoding="async">');
    },
  );

  await fs.writeFile(htmlPath, html, "utf8");
}

const manifestPath = path.resolve(
  "tools/firebase-media-manifest.json",
);
await fs.writeFile(
  manifestPath,
  `${JSON.stringify(
    {
      bucket,
      objectPrefix,
      generatedAt: new Date().toISOString(),
      files: manifest,
    },
    null,
    2,
  )}\n`,
  "utf8",
);

console.log(
  JSON.stringify(
    {
      mediaFiles: mediaPaths.length,
      htmlFiles: htmlFiles.length,
      replacements,
      lazyImagesAdded,
      manifestPath,
    },
    null,
    2,
  ),
);
