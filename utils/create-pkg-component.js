#!/usr/bin/env node
"use strict";
/**
 *
 * /src/components/package-name
 * ├── /src/
 * |   │── component-name1.tsx
 * |   └── component-name2.tsx
 * └── index.tsx
 *
 */
const path = require("path");
const fs = require("fs-extra");
const task = require("./task");
const fmt = require("./fmt");

const componentTemplate = require("./template/component-template");
const componentStoriesTemplate = require("./template/component-stories-template");

const packageName = process.argv[2];

module.exports = task("create-package-components", async () => {
  const componentNames = [...process.argv];
  componentNames.splice(0, 3);

  if (!packageName) {
    throw new Error("Missing package name argument, use: `yarn create-pkg-component [package-name] [component-name]`");
  }

  if (fmt.containsUppercaseLetters(packageName)) {
    throw new Error(`Wrong format for '${packageName}': use kebab-case for package-name`);
  }

  const packageDir = path.join("src/components", packageName);

  // Check if directory already exist
  const packageDirExistsAlready = await fs.pathExists(packageDir);

  if (packageDirExistsAlready) {
    throw new Error(`Directory already exists: ${packageDir}`);
  }

  // Create directory
  await fs.ensureDir(packageDir);

  console.info("Package name will be:", packageName);

  // Create `src` dir in package
  await fs.ensureDir(path.join(packageDir, "src"));
  await fs.writeFile(path.join(packageDir, "index.tsx"), getIndexFile(componentNames));

  await Promise.all(componentNames.map(componentName => createComponent({ componentName, packageDir })));

  // Create `stories` dir in package
  await fs.ensureDir(path.join(packageDir, "stories"));
  await fs.writeFile(
    path.join(packageDir, "stories", `index.stories.tsx`),
    componentStoriesTemplate({ packageName, componentNames: componentNames.map(n => fmt.camelCase(n)) })
  );
});

async function createComponent({ componentName, packageDir }) {
  if (!componentName) {
    throw new Error("Missing component name argument, use: `yarn create-pkg-component [package-name] [component-name]`");
  }

  if (fmt.containsUppercaseLetters(componentName)) {
    throw new Error(`Wrong format for '${componentName}': use kebab-case for component-name`);
  }

  await fs.writeFile(path.join(packageDir, "src", `${componentName}.tsx`), componentTemplate({ componentName: fmt.camelCase(componentName) }));
}

function getIndexFile(componentNames) {
  return componentNames.map(componentName => `export { default as ${fmt.camelCase(componentName)} } from "./src/${componentName}";`).join("\n");
}
