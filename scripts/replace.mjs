#!/usr/bin/env zx

let files = await globby(["docs/function/*"]);

for (let i = 0; i < files.length; i++) {
  const file = files[i];

  const fileContent = await fs.readFile(file, "utf-8");

  await fs.writeFile(
    file,
    fileContent.replace(/\<\<\< src/g, "<<< src/function")
  );

  console.log("fileContent: ", fileContent);
}
