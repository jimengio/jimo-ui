import { IRouteRule } from "@jimengio/ruled-router";

export const routerRules: IRouteRule[] = [
  { path: "home" },
  { path: "buttons" },
  { path: "tabs" },
  { path: "icons" },
  { path: "tables" },
  { path: "forms" },
  {
    path: "modal",
  },
  {
    path: "drawer",
  },
  { path: "dropdown" },
  {
    path: "image-viewer",
  },
  { path: "", name: "home" },
];
