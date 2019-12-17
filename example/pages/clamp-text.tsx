import React, { FC } from "react";
import { css } from "emotion";
import { ClampText, Space } from "../../src";
import { DocDemo, DocBlock, DocSnippet } from "@jimengio/doc-frame";

let PageClampText: FC<{}> = React.memo((props) => {
  /** Plugins */
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div>
      <DocBlock content={content}></DocBlock>
      <DocDemo title="Clamp text">
        <div className={styleNarrow}>
          <ClampText text={longText} addTooltip />
          <Space height={40} />
          <ClampText text={longText} lines={5} addTooltip />
        </div>

        <DocSnippet code={code} />
      </DocDemo>
    </div>
  );
});

export default PageClampText;

let styleNarrow = css`
  width: 200px;
`;

let longText =
  "工业互联网平台本质是通过工业互联网网络采集海量工业数据，并提供数据存储、管理、呈现、分析、建模及应用开发环境，汇聚制造企业及第三方开发者，开发出覆盖产品全生命周期的业务及创新性应用，以提升资源配置效率，推动制造业的高质量发展。 ";

let content = `
ClampText 组件, 用于文字的裁剪样式.

* 文本裁剪 http://fe.jimu.io/jimo-basics/#/clamp-text
* 添加 Tooltip http://fe.jimu.io/jimo-basics/#/text-tooltip
`;

let code = `
<ClampText text={longText} lines={5} addTooltip />
`;
