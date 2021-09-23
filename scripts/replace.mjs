#!/usr/bin/env zx

let files = await globby(["tests/function/*"]);

for (let i = 0; i < files.length; i++) {
  const file = files[i];
  console.log("file: ", file);
  const fileName = path.basename(file);

  const fileContent = await fs.readFile(file, "utf-8");

  await fs.writeFile(file, fileContent.replace(/\.\.\/src/g, "../../src"));

  console.log("fileContent: ", fileContent);
}
