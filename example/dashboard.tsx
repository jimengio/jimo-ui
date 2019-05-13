import React from "react";
import { Button } from "@jimengio/jasmin-ui";

interface IProps {
  match: any;
}

interface IState {}

export default class Dashboard extends React.Component<IProps, IState> {
  render() {
    return (
      <div>
        Init page
        <div>
          <Button type="primary">Button</Button>
        </div>
      </div>
    );
  }
}
