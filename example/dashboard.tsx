import React from "react";
import { css, cx } from "emotion";
import { Switch, NavLink, Route, Redirect } from "react-router-dom";
import { fullHeight, row, ColorBorder, flex, minWidth0 } from "@jimengio/jasmin-ui/lib/styles";

import CreatePageDemo from "./create-page";

interface IProps {
  match: any;
}

interface IState {}

export default class Dashboard extends React.Component<IProps, IState> {
  render() {
    const { match } = this.props;

    return (
      <div className={cx(fullHeight, styleMainContainer)}>
        <div className={cx(fullHeight, row, styleContent)}>
          <div className={cx(fullHeight, styleSidebar)}>
            <NavLink to={`${match.path}/create-page`} />
          </div>
          <div className={cx(flex, minWidth0)}>
            <Switch>
              <Route path={`${match.path}/create-page`} render={p => <CreatePageDemo />} />
              <Redirect to={`${match.path}/create-page`} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

const styleMainContainer = css`
  padding: 10px;
  background-color: #f0f2f5;
`;

const styleContent = css`
  background-color: #ffffff;
`;

const styleSidebar = css`
  width: 300px;
  border-right: 1px solid ${ColorBorder.default};
`;
