"use strict";

module.exports = ({ componentName }) => {
  return `
import React, { FC } from "react"

export interface ${componentName}Props {}

const ${componentName}:FC<${componentName}Props> = (props) => {

  return <div>${componentName}</div>
}

export default ${componentName};
`.trim();
};
