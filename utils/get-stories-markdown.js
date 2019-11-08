"use strict";
/**
 * sync online markdown
 *
 * /stories
 * ├── /github-repository-name/
 *     │── ...
 *     └── README.md
 */

const path = require("path");
const https = require("https");
const fs = require("fs-extra");
const task = require("./task");

const shellUrl = pkgName => `https://raw.githubusercontent.com/jimengio/${pkgName}/master/README.md`;
const storiesRootPath = "stories";

async function getMarkdown(url, filePath) {
  const getCtx = url =>
    new Promise((resolve, reject) =>
      https
        .get(url, res => {
          let html = "";
          res.on("data", data => {
            html += data;
          });
          res.on("end", () => {
            resolve(html);
          });
        })
        .on("error", err => {
          reject(err);
        })
    );

  const content = await getCtx(url);
  await createMdFile(filePath, content);
}

async function createMdFile(filePath, content) {
  console.info(`Write ${filePath}/README.md`);

  await fs.outputFile(path.join(filePath, "README.md"), content);
}

module.exports = task("get-stories-markdown", async () => {
  const dir = await fs.readdirSync(storiesRootPath);
  const promiseAll = dir.map(f => getMarkdown(shellUrl(f), `${storiesRootPath}/${f}`));
  await Promise.all(promiseAll);
});
