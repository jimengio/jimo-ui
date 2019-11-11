import React, { FC } from "react";
import { css } from "emotion";
import { DocSnippet, DocDemo, DocBlock } from "@jimengio/doc-frame";
import JimoIcon, { EJimoIcon } from "@jimengio/jimo-icons";
import FaIcon, { EFaIcon } from "@jimengio/fa-icons";

let code = `
<JimoIcon name={EJimoIcon.tick} />;
`;

let content = `
图标集 jimo-icons

项目 <http://fe.jimu.io/jimo-icons/>
`;

let contentFa = `
另外还有 FontAwesome 的图标

查找图标 <http://fe.jimu.io/fontawesome-finder/>
`;

let codeFa = `
<FaIcon name={EFaIcon.Save} />
`;

let PageIcons: FC<{}> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div>
      <DocBlock content={content} />
      <DocDemo title={"Icons"} link={null}>
        <DocSnippet code={code} />
        <JimoIcon name={EJimoIcon.tick} />
      </DocDemo>

      <DocBlock content={contentFa} />
      <DocDemo title={"FontAwesome Icons"} link={null}>
        <DocSnippet code={codeFa} />
        <FaIcon name={EFaIcon.Save} />
      </DocDemo>
    </div>
  );
});

export default PageIcons;
