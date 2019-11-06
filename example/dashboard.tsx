import React from "react";
import { css, cx } from "emotion";
import { Switch, NavLink, Route, Redirect } from "react-router-dom";

interface IProps {
  match: any;
}

interface IState {}

export default class Dashboard extends React.Component<IProps, IState> {
  render() {
    const { match } = this.props;

    return <div className={cx(styleMainContainer)}>Dashboard</div>;
  }
}

const styleMainContainer = css`
  padding: 10px;
  background-color: #f0f2f5;
`;
