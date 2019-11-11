import React, { FC } from "react";
import { css } from "emotion";
import { DocBlock, DocDemo, DocSnippet } from "@jimengio/doc-frame";
import { DropdownArea } from "../../src";

let content = `
提供了 \`<DrodownArea />\` 和 \`<DropdownMenu>\` 两个组件.

文档 <http://fe.jimu.io/dropdown/#/dropdown-menu>
`;

let code = `
<DropdownArea className={styleTrigger} title="A title"
              renderContent={(onClose) => "Some content"}>
  <div>Content with title</div>
</DropdownArea>
`;

let PageDropdown: FC<{}> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div>
      <DocBlock content={content} />

      <DocDemo title={"Dropdown"} link={null}>
        <DocSnippet code={code} />

        <DropdownArea className={styleTrigger} title="A title" renderContent={(onClose) => "Some content"}>
          <div>Content with title</div>
        </DropdownArea>
      </DocDemo>
    </div>
  );
});

export default PageDropdown;

let styleTrigger = css``;
