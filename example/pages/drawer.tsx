import React, { FC, useState } from "react";
import { css } from "emotion";
import { MesonDrawer, JimoButton } from "../../src";
import { DocDemo, DocSnippet, DocBlock } from "@jimengio/doc-frame";

let content = `
Drawer 组件.

支持定制 header

组件文档 <http://fe.jimu.io/meson-modal/#/drawer>
`;

let code = `
<MesonDrawer
  title={"DEMO drawer"}
  width={400}
  visible={visible}
  onClose={() => {
    setVisible(false);
  }}
  renderContent={() => {
    return (
      <div>
        SOMETHING
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
`;

let PageDrawer: FC<{}> = React.memo((props) => {
  let [visible, setVisible] = useState(false);

  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div>
      <DocBlock content={content} />

      <DocSnippet code={code} />

      <DocDemo title="DEMO" link={null}>
        <JimoButton
          text="Show"
          fillColor
          onClick={() => {
            setVisible(true);
          }}
        />
      </DocDemo>
      <MesonDrawer
        title={"DEMO drawer"}
        width={400}
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        renderContent={() => {
          return (
            <div>
              SOMETHING
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

export default PageDrawer;
