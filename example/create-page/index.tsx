import React from "react";
import { Button } from "@jimengio/jasmin-ui";

import CreatePage from "@components/create-page";

interface IProps {}

const CreatePageDemo: React.FC<IProps> = props => {
  return (
    <CreatePage title={"Create page demo"} leftHeader={"回退"} rightHeader={<Button type="primary">新建</Button>}>
      init page
    </CreatePage>
  );
};

export default CreatePageDemo;
