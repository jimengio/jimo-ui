import React, { FC } from "react";
import { css } from "emotion";
import { DocBlock } from "@jimengio/doc-frame";

let content = `
### Meson Form

文档 <http://fe.jimu.io/meson-form/>
`;

let PageForms: FC<{}> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div>
      <DocBlock content={content} />
    </div>
  );
});

export default PageForms;
