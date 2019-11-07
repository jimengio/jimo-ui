import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, select, object } from "@storybook/addon-knobs";

import { Tab } from "..";
import { TabItem } from "../src/tab";

const tabsStory = storiesOf("tabs", module);

tabsStory.addDecorator(withKnobs);

const items: TabItem[] = [
  {
    value: "a",
    title: "a",
  },
  {
    value: "b",
    title: "b",
  },
  {
    value: "c",
    title: "c",
  },
];

tabsStory.add("default", () => (
  <div>
    <Tab value={select<string>("value", items.map(i => i.value), "a")} items={object<TabItem[]>("items", items)} onClick={action("tab click")} />
  </div>
));

tabsStory.add("underline", () => (
  <div>
    <Tab
      value={select<string>("value", items.map(i => i.value), "a")}
      underLine={boolean("underLine", true)}
      items={object<TabItem[]>("items", items)}
      onClick={e => {
        action("tab click")(e);
      }}
    />
  </div>
));
