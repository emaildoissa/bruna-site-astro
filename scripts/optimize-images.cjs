const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const os = require("os");

const PUBLIC_DIR = path.resolve("public");
const MIN_SIZE = 50 * 1024;
const MAX_DIM = 1920;
const JPEG_QUALITY = 80;
const PNG_QUALITY = 80;

const extensions = new Set([".jpg", ".jpeg", ".png"]);
const imageFiles = [];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (extensions.has(ext)) {
        imageFiles.push(fullPath);
      }
    }
  }
}

walk(PUBLIC_DIR);

console.log(`Encontrados ${imageFiles.length} arquivos de imagem\n`);

let totalBefore = 0;
let totalAfter = 0;
let processed = 0;
let skipped = 0;

async function processAll() {
  for (const filePath of imageFiles) {
    const stat = fs.statSync(filePath);
    const size = stat.size;

    if (size < MIN_SIZE) {
      skipped++;
      continue;
    }

    const ext = path.extname(filePath).toLowerCase();
    const relativePath = path.relative(PUBLIC_DIR, filePath);
    const beforeMB = (size / 1024 / 1024).toFixed(2);

    try {
      const img = sharp(filePath);
      const metadata = await img.metadata();

      let pipeline = img;

      if (metadata.width > MAX_DIM || metadata.height > MAX_DIM) {
        pipeline = pipeline.resize({
          width: MAX_DIM,
          height: MAX_DIM,
          fit: "inside",
          withoutEnlargement: true,
        });
      }

      if (ext === ".png") {
        pipeline = pipeline.png({ quality: PNG_QUALITY, palette: true });
      } else {
        pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
      }

      const buffer = await pipeline.toBuffer();
      img.destroy();

      // Write to temp file first, then rename to avoid Windows file locking
      const tmpPath = path.join(
        os.tmpdir(),
        `imgopt_${Date.now()}_${path.basename(filePath)}`
      );
      fs.writeFileSync(tmpPath, buffer);
      fs.renameSync(tmpPath, filePath);

      const afterMB = (buffer.length / 1024 / 1024).toFixed(2);
      const reduction = ((1 - buffer.length / size) * 100).toFixed(1);

      totalBefore += size;
      totalAfter += buffer.length;
      processed++;

      console.log(
        `\u2713 ${relativePath}  ${beforeMB}MB \u2192 ${afterMB}MB  (-${reduction}%)`
      );
    } catch (err) {
      console.error(`\u2717 ${relativePath}: ${err.message}`);
    }
  }

  const savedMB = ((totalBefore - totalAfter) / 1024 / 1024).toFixed(2);
  console.log(
    `\nProcessados: ${processed}  |  Pulados (<50KB): ${skipped}`
  );
  console.log(
    `Total: ${(totalBefore / 1024 / 1024).toFixed(2)}MB \u2192 ${(totalAfter / 1024 / 1024).toFixed(2)}MB`
  );
  console.log(`Economia: ${savedMB}MB`);
}

processAll().catch(console.error);
