#!/usr/bin/env zx

let files = await globby(["src/function/*", "src/array/*"]);

const importScripts = [];
const exportScripts = [];

for (let i = 0; i < files.length; i++) {
  const [src, category, file] = files[i].split("/");

  const module = path.basename(file, ".js");

  importScripts.push(`import ${module} from './${category}/${file}'`);
  exportScripts.push(module);
}

const entryFilePath = "src/index.js";
fs.ensureFile(entryFilePath);

const entryFileContent = `
${importScripts.join("\n")}

export {
  ${exportScripts.join(",\n  ")}
}
`;

fs.writeFile(entryFilePath, entryFileContent);
