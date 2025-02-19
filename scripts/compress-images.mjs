import fs from 'fs';
import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from "imagemin-pngquant";
import path from 'path';

const INPUT = "public/images";
const OUTPUT = "tmp-compressed-images";

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
  let dirs = getInOut(input, output);

  for (let item of dirs) {
    console.log(`Processing ${item.input}`);
    const files = await imagemin([`${item.input}/*.{jpg,png}`], {
      destination: item.output,
      plugins: [
        imageminMozjpeg({
          quality: 75,
          progressive: true
        }),
        imageminPngquant({
          quality: [0.6, 0.8],
          speed: 4,
          dithering: 0.2
        }),
      ]
    });

    for (const file of files) {
      const originalPath = path.join(item.input, path.basename(file.destinationPath));
      const originalSize = fs.statSync(originalPath).size;
      const compressedSize = file.data.length;
      const delta = originalSize - compressedSize;

      if (delta <= 0) {
        const growth = ((delta + originalSize) / originalSize * 100).toFixed(1);
        console.log(`Skipping ${path.basename(file.destinationPath)} - no size reduction (${growth}%)`);
        fs.copyFileSync(originalPath, file.destinationPath);
      } else {
        const savings = (delta / originalSize * 100).toFixed(1);
        console.log(`Compressed ${path.basename(file.destinationPath)} - saved ${savings}%`);
      }
    }
  }

  console.log(`Merging compressed images to public/images`);
  const tmpCompressedImages = path.join(process.cwd(), OUTPUT);
  const publicImages = path.join(process.cwd(), "public/images");
  fs.cpSync(tmpCompressedImages, publicImages, { recursive: true });
  console.log('Compression complete');
  fs.rmSync(tmpCompressedImages, { recursive: true, force: true });
})();