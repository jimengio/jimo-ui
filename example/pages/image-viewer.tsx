import React, { FC } from "react";
import { css } from "emotion";
import { DocBlock } from "@jimengio/doc-frame";

let content = `
图片预览

文档 <http://fe.jimu.io/image-viewer/#/image-viewer>
`;

let PageImageViewer: FC<{}> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div>
      <DocBlock content={content} />
    </div>
  );
});

export default PageImageViewer;
