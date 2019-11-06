import React, { FC } from "react";

import JimoTabs, { IJimoTabItem } from "@jimengio/jimo-basics/lib/jimo-tabs";
import UnderlineTabs from "@jimengio/jimo-basics/lib/underline-tabs";

export type TabItem = IJimoTabItem;

export interface TabProps {
  value: string;
  items: TabItem[];
  underLine?: boolean;
  onClick: (value: TabItem) => void;
}

const Tab: FC<TabProps> = props => {
  const { underLine, ...rest } = props;

  return underLine ? <UnderlineTabs {...rest} /> : <JimoTabs {...rest} />;
};

export default Tab;
