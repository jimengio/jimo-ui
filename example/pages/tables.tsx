import React, { FC } from "react";
import { css } from "emotion";
import { DocDemo, DocSnippet, DocBlock } from "@jimengio/doc-frame";
import { RoughDivTable, ActionLinks, IActionLinkItem } from "../../src";
import { IRoughTableColumn } from "@jimengio/rough-table/lib/rough-div-table";

let code = `
let data = [
  { code: "001", name: "螺丝", model: "DDR6", source: "外购", type: "产品" },
];


let columns: IRoughTableColumn<IData>[] = [
  { title: "物料编号", dataIndex: "code", render: (item: IData["code"], record: IData) => item },
  { title: "名称", dataIndex: "name", render: (item: IData["name"], record: IData) => item },
  { title: "型号", dataIndex: "model", render: (item: IData["model"], record: IData) => item },
  { title: "操作", dataIndex: "model", width: 80, render: (item: any, record: IData) => <ActionLinks actions={actions} spaced /> },
];

<RoughDivTable data={data} columns={columns} rowPadding={24} />
`;

let content = `
Table 组件

文档 <http://fe.jimu.io/rough-table/#/basic>
`;

let actions: IActionLinkItem[] = [
  {
    text: "修改",
    onClick: () => {},
  },
  {
    text: "删除",
    onClick: () => {},
  },
  {
    hidden: true,
    text: "恢复",
    onClick: () => {},
  },
  null,
];

interface IData {
  code: string;
  name: any;
  model: string;
  source: string;
  type: string;
}

let data: IData[] = [
  { code: "001", name: "螺丝", model: "DDR6", source: "外购", type: "产品" },
  { code: "003", name: "扳手", model: "DDR6", source: "外购", type: "产品" },
  { code: "004", name: "堵头", model: "33-36", source: "外购", type: "产品" },
  { code: "044", name: "软管", model: "HO", source: "外购", type: "产品" },
  { code: "045", name: 0, model: "HO", source: "外购", type: "产品" },
];

let columns: IRoughTableColumn<IData>[] = [
  { title: "物料编号", dataIndex: "code", render: (item: IData["code"], record: IData) => item },
  { title: "名称", dataIndex: "name", render: (item: IData["name"], record: IData) => item },
  { title: "型号", dataIndex: "model", render: (item: IData["model"], record: IData) => item },
  { title: "操作", dataIndex: "model", width: 80, render: (item: any, record: IData) => <ActionLinks actions={actions} spaced /> },
];

let PageTables: FC<{}> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div>
      <DocBlock content={content} />
      <DocSnippet code={code} />

      <DocDemo title="A very simple table" link={null}>
        <RoughDivTable data={data} columns={columns} rowPadding={24} />
      </DocDemo>
    </div>
  );
});

export default PageTables;
