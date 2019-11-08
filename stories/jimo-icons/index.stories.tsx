import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, number } from "@storybook/addon-knobs";

import JimoIcon, { EJimoIcon } from "@jimengio/jimo-icons";
const README = require("./README.md");

const iconsStories = storiesOf("jimo-icons", module);

iconsStories.addDecorator(withKnobs);

iconsStories.add("readme", () => <div />, {
  options: {
    showPanel: false,
  },
  info: {
    text: `${README.default}`,
    source: false,
  },
});

iconsStories.add(
  "default",
  () => {
    return (
      <div>
        {Object.keys(EJimoIcon).map((k: keyof typeof EJimoIcon) => (
          <div key={k} style={{ margin: "12px 0" }}>
            <JimoIcon name={EJimoIcon[k]} style={{ fontSize: `${number("fontSize", 22)}px` }} /> {`${k}:`}
          </div>
        ))}
      </div>
    );
  },
  {
    notes: { markdown: README },
    info: {
      inline: false,
    },
  }
);
