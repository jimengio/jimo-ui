import React from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter } from "react-router-dom";
import Dashboard from "./dashboard";
import "@jimengio/jasmin-ui/lib/assets/antd/antd.min.css";

class ExampleApp extends React.Component<any, any> {
  render() {
    return (
      <HashRouter>
        <Route path="/" render={p => <Dashboard match={p.match} />} />
      </HashRouter>
    );
  }
}

function renderExampleApp() {
  ReactDOM.render(<ExampleApp />, document.querySelector("#app_container"));
}

window.onload = renderExampleApp;

declare const module: any;

if (module.hot) {
  module.hot.accept(["./dashboard"], () => {
    renderExampleApp();
  });
}
