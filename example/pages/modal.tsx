import React, { FC, useState } from "react";
import { css } from "emotion";
import { MesonModal, JimoButton } from "../../src";
import { DocBlock, DocSnippet } from "@jimengio/doc-frame";

let content = `
Modal 组件

文档 <http://fe.jimu.io/meson-modal/#/modal>
`;

let code = `
let [visible, setVisible] = useState(false);

<MesonModal
  title={"DEMO modal"}
  visible={visible}
  onClose={() => {
    setVisible(false);
  }}
  renderContent={() => {
    return (
      <div>
        SOMETHING....
        <span
          onClick={() => {
            setVisible(false);
          }}
        >
          Close
        </span>
      </div>
    );
  }}
/>`;

let PageModal: FC<{}> = React.memo((props) => {
  let [visible, setVisible] = useState(false);

  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div>
      <DocBlock content={content} />
      <JimoButton
        text={"Open"}
        onClick={() => {
          setVisible(true);
        }}
      />
      <DocSnippet code={code} />

      <MesonModal
        title={"DEMO modal"}
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        renderContent={() => {
          return (
            <div>
              SOMETHING....
              <span
                onClick={() => {
                  setVisible(false);
                }}
              >
                Close
              </span>
            </div>
          );
        }}
      />
    </div>
  );
});

export default PageModal;
