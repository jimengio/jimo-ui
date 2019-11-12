import React, { FC } from "react";
import { css, cx } from "emotion";
import { row, column, rowMiddle, rowParted, rowCenter, columnParted, center, expand } from "../../src";
import { DocDemo, DocSnippet, DocBlock } from "@jimengio/doc-frame";

let codeFn = (x: string) => `
<div className={cx(${x}, styleBox)}>
  <div />
  <div />
  <div />
</div>
`;

let content = `
内置了一些 Flexbox 的常用 emotion 变量, 可以通过组合的方式快速生成布局

\`\`\`
center;
column;
columnParted;
expand;
flex; // alias for expand, same
fullscreen;
noShrink;
row;
rowCenter;
rowMiddle;
rowParted;
\`\`\`

查看更多函数 <https://github.com/jimengio/flex-styles>
`;

let codeExpand = `
<div className={cx(row, styleBox)}>
  <div />
  <div className={expand} />
</div>
`;

let PageLayout: FC<{}> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div>
      <DocBlock content={content} />
      <DocDemo title={"row"} link={null}>
        <div className={cx(row, styleBox)}>
          <div />
          <div />
          <div />
        </div>
        <DocSnippet code={codeFn("row")} />
      </DocDemo>

      <DocDemo title={"expand"} link={null}>
        <div className={cx(row, styleBox)}>
          <div />
          <div className={expand} />
        </div>
        <DocSnippet code={codeExpand} />
      </DocDemo>

      <DocDemo title={"rowMiddle"} link={null}>
        <div className={cx(rowMiddle, styleBox)}>
          <div />
          <div />
          <div />
        </div>
        <DocSnippet code={codeFn("rowMiddle")} />
      </DocDemo>

      <DocDemo title={"rowParted"} link={null}>
        <div className={cx(rowParted, styleBox)}>
          <div />
          <div />
          <div />
        </div>
        <DocSnippet code={codeFn("rowParted")} />
      </DocDemo>

      <DocDemo title={"rowCenter"} link={null}>
        <div className={cx(rowCenter, styleBox)}>
          <div />
          <div />
          <div />
        </div>
        <DocSnippet code={codeFn("rowCenter")} />
      </DocDemo>

      <DocDemo title={"column"} link={null}>
        <div className={cx(column, styleBox)}>
          <div />
          <div />
          <div />
        </div>
        <DocSnippet code={codeFn("column")} />
      </DocDemo>

      <DocDemo title={"center"} link={null}>
        <div className={cx(center, styleBox)}>
          <div />
          <div />
          <div />
        </div>
        <DocSnippet code={codeFn("center")} />
      </DocDemo>

      <DocDemo title={"columnParted"} link={null}>
        <div className={cx(columnParted, styleBox)}>
          <div />
          <div />
          <div />
        </div>
        <DocSnippet code={codeFn("columnParted")} />
      </DocDemo>
    </div>
  );
});

export default PageLayout;

let styleBox = css`
  margin: 8px;
  border: 1px solid #aaa;
  width: 120px;
  height: 120px;

  div {
    margin: 2px;
    min-width: 20px;
    min-height: 20px;
    border: 1px solid #aaa;
  }
`;
