"use strict";

function storyTemplate(storyName, componentName) {
  return `
${storyName}.add("${componentName}", () => {
  return (
    <div>
      <${componentName}>${componentName}</${componentName}>
    </div>
  );
});`;
}

module.exports = ({ packageName, componentNames = [] }) => {
  const storyName = `${packageName}Stories`;

  return `
import React from "react";
import { storiesOf } from "@storybook/react";

import { ${componentNames.join(", ")} } from "..";

const ${storyName} = storiesOf("${packageName}", module);
${componentNames.map(componentName => storyTemplate(storyName, componentName)).join("\n")}
`.trim();
};
