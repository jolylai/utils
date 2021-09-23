#!/usr/bin/env zx

let files = await globby(["tests/function/*"]);

for (let i = 0; i < files.length; i++) {
  const file = files[i];

  const fileName = path.basename(file);

  const src = path.resolve(__dirname, "..", file);

  const dest = path.resolve(__dirname, "../tests/function", fileName);

  await fs.move(src, dest);
}
