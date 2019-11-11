import React, { FC } from "react";
import { css } from "emotion";
import { DocBlock, DocDemo, DocSnippet } from "@jimengio/doc-frame";
import { JimoButton } from "@jimengio/jimo-basics";

let content = `
定制的 Button 组件, 支持两个样式.

- default
- filled

TODO:

- disabled 样式

项目 <http://fe.jimu.io/jimo-basics/#/buttons>
`;

let codeButtons = `
<JimoButton text="Submit" onClick={() => {}} />
`;

let PageButtons: FC<{}> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div>
      <DocBlock content={content} />
      <DocDemo title={"buttons"} link={"http://fe.jimu.io/jimo-basics/#/buttons"}>
        <DocSnippet code={codeButtons} />
        <JimoButton text="Submit" onClick={() => {}} />
      </DocDemo>
    </div>
  );
});

export default PageButtons;
