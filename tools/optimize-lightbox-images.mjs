import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const projectRoot = path.resolve(import.meta.dirname, "..");
const htmlPath = path.join(
  projectRoot,
  "public",
  "children_workshop.html",
);
const sourceDir = path.join(
  projectRoot,
  "media-source",
  "site-media",
  "cropped",
);
const outputDir = path.resolve(
  process.env.LIGHTBOX_OUTPUT_DIR ??
    path.join(projectRoot, "public", "lightbox"),
);
const applyHtml = process.argv.includes("--apply");
const publicPathPrefix = "/lightbox";
const publicUrlBase = "https://ninnikkraft.vercel.app/lightbox";
const assetVersion = "20260727-2";

const html = await fs.readFile(htmlPath, "utf8");
const previewPattern = /data-preview=(["'])(.*?)\1/g;
const previewUrls = [...html.matchAll(previewPattern)].map((match) => match[2]);
const uniquePreviewUrls = [...new Set(previewUrls)];

if (previewUrls.length === 0) {
  throw new Error(`No data-preview images found in ${htmlPath}`);
}

await fs.mkdir(outputDir, { recursive: true });

let sourceBytes = 0;
let outputBytes = 0;
let resizedImages = 0;
const replacements = new Map();
const files = [];
const sourceEntries = await fs.readdir(sourceDir, { withFileTypes: true });
const sourceFilesByStem = new Map();

for (const entry of sourceEntries) {
  if (!entry.isFile() || entry.name.includes("_thumb")) continue;
  const stem = path.parse(entry.name).name;
  const existing = sourceFilesByStem.get(stem);

  if (existing) {
    throw new Error(
      `Multiple non-thumbnail source files share the stem "${stem}": ` +
        `${existing}, ${entry.name}`,
    );
  }

  sourceFilesByStem.set(stem, entry.name);
}

for (const [index, previewUrl] of uniquePreviewUrls.entries()) {
  const url = new URL(previewUrl, "https://ninnikkraft.vercel.app");
  const encodedObjectPath = url.pathname.split("/o/")[1];
  let sourceName;

  if (encodedObjectPath) {
    const objectPath = decodeURIComponent(encodedObjectPath);
    const originalPrefix = "site-media/cropped/";
    const optimizedPrefix = "site-media/cropped/lightbox/";

    if (objectPath.startsWith(optimizedPrefix)) {
      const optimizedName = objectPath.slice(optimizedPrefix.length);
      sourceName = sourceFilesByStem.get(path.parse(optimizedName).name);
    } else if (objectPath.startsWith(originalPrefix)) {
      sourceName = objectPath.slice(originalPrefix.length);
    }
  } else if (url.pathname.startsWith(`${publicPathPrefix}/`)) {
    const optimizedName = decodeURIComponent(
      url.pathname.slice(publicPathPrefix.length + 1),
    );
    sourceName = sourceFilesByStem.get(path.parse(optimizedName).name);
  }

  if (!sourceName) {
    throw new Error(`Could not match preview URL to a source: ${previewUrl}`);
  }

  const relativeSourcePath = sourceName;
  const sourcePath = path.join(sourceDir, relativeSourcePath);
  const parsedPath = path.parse(relativeSourcePath);
  const outputName = `${parsedPath.name}.webp`;
  const outputPath = path.join(outputDir, outputName);
  const sourceStat = await fs.stat(sourcePath);
  const sourceMetadata = await sharp(sourcePath).metadata();

  await sharp(sourcePath)
    .rotate()
    .resize({
      width: 1800,
      height: 1400,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({
      quality: 82,
      alphaQuality: 90,
      effort: 6,
      smartSubsample: true,
    })
    .toFile(outputPath);

  const outputStat = await fs.stat(outputPath);
  const outputMetadata = await sharp(outputPath).metadata();
  const optimizedUrl =
    `${publicUrlBase}/${encodeURIComponent(outputName)}?v=${assetVersion}`;

  sourceBytes += sourceStat.size;
  outputBytes += outputStat.size;
  if (
    outputMetadata.width !== sourceMetadata.autoOrient.width ||
    outputMetadata.height !== sourceMetadata.autoOrient.height
  ) {
    resizedImages += 1;
  }

  replacements.set(previewUrl, optimizedUrl);
  files.push({
    source: relativeSourcePath,
    output: outputName,
    sourceWidth: sourceMetadata.autoOrient.width,
    sourceHeight: sourceMetadata.autoOrient.height,
    outputWidth: outputMetadata.width,
    outputHeight: outputMetadata.height,
    sourceBytes: sourceStat.size,
    outputBytes: outputStat.size,
  });

  if ((index + 1) % 25 === 0 || index + 1 === uniquePreviewUrls.length) {
    console.log(`Optimized ${index + 1}/${uniquePreviewUrls.length}`);
  }
}

if (applyHtml) {
  let updatedHtml = html;

  for (const [sourceUrl, optimizedUrl] of replacements) {
    updatedHtml = updatedHtml.replaceAll(sourceUrl, optimizedUrl);
  }

  if (updatedHtml === html) {
    throw new Error("HTML was not changed");
  }

  await fs.writeFile(htmlPath, updatedHtml, "utf8");
}

const report = {
  previewReferences: previewUrls.length,
  uniqueImages: uniquePreviewUrls.length,
  resizedImages,
  sourceMB: Number((sourceBytes / 1024 / 1024).toFixed(2)),
  outputMB: Number((outputBytes / 1024 / 1024).toFixed(2)),
  reductionPercent: Number(
    ((1 - outputBytes / sourceBytes) * 100).toFixed(1),
  ),
  largestOutputKB: Number(
    (
      Math.max(...files.map((file) => file.outputBytes)) /
      1024
    ).toFixed(1),
  ),
  maxOutputWidth: Math.max(...files.map((file) => file.outputWidth)),
  maxOutputHeight: Math.max(...files.map((file) => file.outputHeight)),
  outputDir,
  htmlUpdated: applyHtml,
};

console.log(JSON.stringify(report, null, 2));
