import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import { Button } from "..";

const buttonsStory = storiesOf("buttons", module);

buttonsStory.addDecorator(withKnobs);

buttonsStory.add("common", () => (
  <div>
    <Button text={text("text", "text")} onClick={action("default")} />
    <br />
    <br />
    <Button text={"fillColor"} fillColor={boolean("fillColor", true)} onClick={action("fillColor")} />
  </div>
));

buttonsStory.add("prepend", () => (
  <div>
    <Button text={"prepend"} prepend={"✌️"} onClick={action("✌️prepend")} /> <Button text={"prepend"} prepend={"✌️"} fillColor onClick={action("✌️prepend")} />
    <br />
    <br />
    <Button text={"prepend"} prepend={text("prepend", "😬")} onClick={action("😬prepend")} />{" "}
    <Button text={"prepend"} prepend={text("prepend", "😬")} fillColor onClick={action("😬prepend")} />
    <br />
    <br />
    <Button text={"prepend"} prepend={"☢︎"} onClick={action("☢︎prepend")} /> <Button text={"prepend"} prepend={"☢︎"} fillColor onClick={action("☢︎prepend")} />
  </div>
));
