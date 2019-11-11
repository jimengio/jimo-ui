import React, { FC, useState } from "react";
import { css } from "emotion";
import { DocDemo, DocSnippet, DocBlock } from "@jimengio/doc-frame";
import { JimoTabs, IJimoTabItem } from "../../src";

let content = `
Tabs 组件

文档 <http://fe.jimu.io/jimo-basics/#/tabs>
`;

let codeTabs = `
let items: IJimoTabItem[] = [
  { title: "A", value: "a" },
  { title: "This is b", value: "b" },
  { title: "c", value: "c" },
];

<JimoTabs
  items={items}
  value={tab}
  onClick={(value) => {
    setTab(value.value);
  }}
/>
`;

let items: IJimoTabItem[] = [
  { title: "A", value: "a" },
  { title: "This is b", value: "b" },
  { title: "c", value: "c" },
];

let PageTabs: FC<{}> = React.memo((props) => {
  let [tab, setTab] = useState(null as string);

  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div>
      <DocBlock content={content} />
      <DocDemo title="Tabs" link={null}>
        <JimoTabs
          items={items}
          value={tab}
          onClick={(value) => {
            setTab(value.value);
          }}
        />
        <DocSnippet code={codeTabs} />
      </DocDemo>
    </div>
  );
});

export default PageTabs;
