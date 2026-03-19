import fs from "fs";
import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";
import path from "path";

const INPUT = "public/images";
const OUTPUT = "tmp-compressed-images";
const MIN_SIZE_BYTES = 1 * 1024 ** 2; // 1MB - skip files smaller than this

function getInOut(input, output) {
  let ret = [];
  ret.push({ input, output });
  const dirs = fs.readdirSync(input);
  for (let dir of dirs) {
    let inputNext = path.join(input, dir);
    let outputNext = path.join(output, dir);
    if (fs.statSync(inputNext).isDirectory()) {
      ret.push(...getInOut(inputNext, outputNext));
    }
  }
  return ret;
}

(async () => {
  let input = path.join(process.cwd(), INPUT);
  let output = path.join(process.cwd(), OUTPUT);
  fs.mkdirSync(output, { recursive: true });

  let dirs = getInOut(input, output);

  for (let item of dirs) {
    // To target a specific directory to prevent duplicate compression, you can uncomment the following
    // if (!item.input.includes("document-chat")) continue;

    // Get all image files and filter to only those above the minimum size
    const allFiles = fs.readdirSync(item.input).filter((f) => /\.(jpg|png)$/i.test(f));
    const largeFiles = allFiles.filter((f) => {
      const filePath = path.join(item.input, f);
      if (!fs.statSync(filePath).isFile()) return false;
      const size = fs.statSync(filePath).size;
      if (size < MIN_SIZE_BYTES) {
        console.log(`Skipping ${f} - already small (${(size / 1024).toFixed(1)} KB)`);
        return false;
      }
      return true;
    });

    if (largeFiles.length === 0) continue;

    console.log(`Processing ${item.input} (${largeFiles.length} large files)`);
    
    // Process only the large files
    const files = await imagemin(
      largeFiles.map((f) => path.join(item.input, f)),
      {
        destination: item.output,
        plugins: [
          imageminMozjpeg({
            quality: 75,
            progressive: true,
          }),
          imageminPngquant({
            quality: [0.6, 0.8],
            speed: 4,
            dithering: 0.2,
          }),
        ],
      }
    );

    for (const file of files) {
      const originalPath = path.join(
        item.input,
        path.basename(file.destinationPath)
      );
      const originalSize = fs.statSync(originalPath).size;
      const compressedSize = file.data.length;
      const delta = originalSize - compressedSize;

      if (delta <= 0) {
        const growth = (((compressedSize / originalSize) * 100) - 100).toFixed(1);
        console.log(
          `Skipping ${path.basename(file.destinationPath)} - no size reduction (+${growth}%)`
        );
        // Remove from temp so it won't overwrite the original
        fs.unlinkSync(file.destinationPath);
      } else {
        const savings = ((delta / originalSize) * 100).toFixed(1);
        console.log(
          `Compressed ${path.basename(file.destinationPath)} - saved ${savings}%`
        );
      }
    }
  }

  console.log(`Merging compressed images to public/images`);
  const tmpCompressedImages = path.join(process.cwd(), OUTPUT);
  const publicImages = path.join(process.cwd(), "public/images");
  fs.cpSync(tmpCompressedImages, publicImages, { recursive: true });
  console.log("Compression complete");
  fs.rmSync(tmpCompressedImages, { recursive: true, force: true });
})();
