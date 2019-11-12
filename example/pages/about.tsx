import React, { FC } from "react";
import { css } from "emotion";
import { DocBlock } from "@jimengio/doc-frame";

let contentAbout = `
Jimo UI 组件集合.

\`\`\`
import { JimoButton, MesonForm, MesonModal } from "@jimengio/jimo-ui"
\`\`\`
`;

let PageAbout: FC<{}> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div>
      <DocBlock content={contentAbout} />
    </div>
  );
});

export default PageAbout;
