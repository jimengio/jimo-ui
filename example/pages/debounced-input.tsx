import React, { FC, useState } from "react";
import { css } from "emotion";
import { DocDemo, DocSnippet, DocBlock } from "@jimengio/doc-frame";
import { DebouncedInput } from "../../src";

let content = `
DebouncedInput

base on antd
`;

let codeTabs = `
<DebouncedInput onDebouncedChange={(v) => setValue1(v)} />

<DebouncedInput style={{ width: "100%" }} hideSearch onDebouncedChange={(v) => setValue2(v)} />
`;

let PageTabs: FC<{}> = React.memo((props) => {
  let [value1, setValue1] = useState<string>();
  let [value2, setValue2] = useState<string>();

  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div>
      <DocBlock content={content} />
      <DocDemo title="DebouncedInput" link={null}>
        <DebouncedInput onDebouncedChange={(v) => setValue1(v)} />
        <p>value: {value1}</p>
        <DebouncedInput style={{ width: "100%" }} hideSearch onDebouncedChange={(v) => setValue2(v)} />
        <p>value: {value2}</p>
        <DocSnippet code={codeTabs} />
      </DocDemo>
    </div>
  );
});

export default PageTabs;
