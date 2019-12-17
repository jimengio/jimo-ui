import React, { FC } from "react";
import { css } from "emotion";
import { useConfirmModal, JimoButton } from "../../src";
import { DocDemo, DocBlock, DocSnippet } from "@jimengio/doc-frame";

let PageConfirm: FC<{}> = React.memo((props) => {
  /** Plugins */
  /** Methods */
  /** Effects */
  /** Renderers */

  let [ui, waitConfirmation] = useConfirmModal();

  let onClick = async () => {
    let result = await waitConfirmation({ type: "warning", text: "Confirm doing this?" });
    console.log("result", result);
  };

  return (
    <div>
      <DocBlock content={content} />

      <DocDemo title="Pop confirm modal">
        <JimoButton onClick={onClick} text="Pop"></JimoButton>

        <DocSnippet code={code} />
      </DocDemo>
      {ui}
    </div>
  );
});

export default PageConfirm;

let content = `
弹框二次确认方法

http://fe.jimu.io/meson-modal/#/confirm
`;

let code = `
let [ui, waitConfirmation] = useConfirmModal();

let onClick = async () => {
  let result = await waitConfirmation({ type: "warning", text: "Confirm" });
  console.log("result", result);
};

<div>
  <JimoButton onClick={onClick} text="Confirm"></JimoButton>
  {ui}
</div>
`;
