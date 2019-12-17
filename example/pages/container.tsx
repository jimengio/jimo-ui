import React, { FC } from "react";
import { css, cx } from "emotion";
import { row, expand, fullscreen } from "@jimengio/flex-styles";

import { ISidebarEntry, DocSidebar } from "@jimengio/doc-frame";

import { HashRedirect, findRouteTarget } from "@jimengio/ruled-router/lib/dom";
import { genRouter, GenRouterTypeMain } from "controller/generated-router";
import PageButtons from "./buttons";
import PageTabs from "./tabs";
import PageForms from "./forms";
import PageIcons from "./icons";
import PageDrawer from "./drawer";
import PageDropdown from "./dropdown";
import PageImageViewer from "./image-viewer";
import PageTables from "./tables";
import PageAbout from "./about";
import PageModal from "./modal";
import PageLayout from "./layout";
import PageClampText from "./clamp-text";
import PageConfirm from "./confirm";

let items: ISidebarEntry[] = [
  {
    title: "Home",
    path: genRouter.home.name,
  },
  {
    title: "Layout",
    path: genRouter.layout.name,
  },
  {
    title: "Buttons",
    path: genRouter.buttons.name,
  },
  {
    title: "Tabs",
    path: genRouter.tabs.name,
  },
  {
    title: "Icons",
    path: genRouter.icons.name,
  },
  {
    title: "Forms",
    path: genRouter.forms.name,
  },
  {
    title: "Tables",
    path: genRouter.tables.name,
  },
  {
    title: "Modal",
    path: genRouter.modal.name,
  },
  {
    title: "Drawer",
    path: genRouter.drawer.name,
  },
  {
    title: "Dropdown",
    path: genRouter.dropdown.name,
  },
  {
    title: "Image Viewer",
    path: genRouter.imageViewer.name,
  },
  {
    title: "Confirm",
    path: genRouter.confirm.name,
  },
  {
    title: "Clamp text",
    path: genRouter.clampText.name,
  },
];

const renderChildPage = (routerTree: GenRouterTypeMain) => {
  switch (routerTree?.name) {
    case "home":
      return <PageAbout />;
    case "layout":
      return <PageLayout />;
    case "buttons":
      return <PageButtons />;
    case "tabs":
      return <PageTabs />;
    case "icons":
      return <PageIcons />;
    case "forms":
      return <PageForms />;
    case "tabs":
      return <PageTables />;
    case "modal":
      return <PageModal />;
    case "tables":
      return <PageTables />;
    case "icons":
      return <PageIcons />;
    case "drawer":
      return <PageDrawer />;
    case "dropdown":
      return <PageDropdown />;
    case "image-viewer":
      return <PageImageViewer />;
    case "clamp-text":
      return <PageClampText />;
    case "confirm":
      return <PageConfirm />;
    default:
      return (
        <HashRedirect to={genRouter.home.name} delay={2}>
          2s to redirect
        </HashRedirect>
      );
  }

  return <div>NOTHING</div>;
};

let onSwitchPage = (path: string) => {
  let target = findRouteTarget(genRouter, path);
  if (target != null) {
    target.go();
  }
};

let Container: FC<{
  router: GenRouterTypeMain;
}> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={cx(row, fullscreen, styleContainer)}>
      <DocSidebar
        title="Jimo UI"
        currentPath={props.router.name}
        onSwitch={(item) => {
          onSwitchPage(item.path);
        }}
        items={items}
      />
      <div className={cx(expand, styleBody)}>{renderChildPage(props.router)}</div>
    </div>
  );
});

export default Container;

const styleContainer = css``;

let styleBody = css`
  padding: 16px;
`;
