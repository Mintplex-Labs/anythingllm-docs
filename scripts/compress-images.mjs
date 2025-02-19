import fs from 'fs';
import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from "imagemin-pngquant";
import path from 'path';

const INPUT = "public/images";
const OUTPUT = "public/images";

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
    console.log(`Compressing ${item.input} {jpg,png}`);
    await imagemin([`${item.input}/*.{jpg,png}`], {
      destination: item.output,
      plugins: [
        imageminMozjpeg({
          quality: 85,
          progressive: true
        }),
        imageminPngquant({
          quality: [0.8, 0.95],
          speed: 4,
          dithering: 0.5
        }),
      ]
    });
  }
  console.log('output success');
})();