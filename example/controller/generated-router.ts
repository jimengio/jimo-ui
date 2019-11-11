import queryString from "query-string";

type Id = string;

function switchPath(x: string) {
  location.hash = `#${x}`;
}

function qsStringify(queries: { [k: string]: any }) {
  return queryString.stringify(queries, { arrayFormat: "bracket" });
}

// generated

// Generated with router-code-generator@0.2.5

export let genRouter = {
  home: {
    name: "home",
    raw: "home",
    path: () => `/home`,
    go: () => switchPath(`/home`),
  },
  buttons: {
    name: "buttons",
    raw: "buttons",
    path: () => `/buttons`,
    go: () => switchPath(`/buttons`),
  },
  tabs: {
    name: "tabs",
    raw: "tabs",
    path: () => `/tabs`,
    go: () => switchPath(`/tabs`),
  },
  icons: {
    name: "icons",
    raw: "icons",
    path: () => `/icons`,
    go: () => switchPath(`/icons`),
  },
  tables: {
    name: "tables",
    raw: "tables",
    path: () => `/tables`,
    go: () => switchPath(`/tables`),
  },
  forms: {
    name: "forms",
    raw: "forms",
    path: () => `/forms`,
    go: () => switchPath(`/forms`),
  },
  modal: {
    name: "modal",
    raw: "modal",
    path: () => `/modal`,
    go: () => switchPath(`/modal`),
  },
  drawer: {
    name: "drawer",
    raw: "drawer",
    path: () => `/drawer`,
    go: () => switchPath(`/drawer`),
  },
  dropdown: {
    name: "dropdown",
    raw: "dropdown",
    path: () => `/dropdown`,
    go: () => switchPath(`/dropdown`),
  },
  imageViewer: {
    name: "image-viewer",
    raw: "image-viewer",
    path: () => `/image-viewer`,
    go: () => switchPath(`/image-viewer`),
  },
  $: {
    name: "home",
    raw: "",
    path: () => `/`,
    go: () => switchPath(`/`),
  },
};

export type GenRouterTypeMain =
  | GenRouterTypeTree["home"]
  | GenRouterTypeTree["buttons"]
  | GenRouterTypeTree["tabs"]
  | GenRouterTypeTree["icons"]
  | GenRouterTypeTree["tables"]
  | GenRouterTypeTree["forms"]
  | GenRouterTypeTree["modal"]
  | GenRouterTypeTree["drawer"]
  | GenRouterTypeTree["dropdown"]
  | GenRouterTypeTree["imageViewer"]
  | GenRouterTypeTree["$"];

export interface GenRouterTypeTree {
  home: {
    name: "home";
    params: {};
    query: {};
    next: null;
  };
  buttons: {
    name: "buttons";
    params: {};
    query: {};
    next: null;
  };
  tabs: {
    name: "tabs";
    params: {};
    query: {};
    next: null;
  };
  icons: {
    name: "icons";
    params: {};
    query: {};
    next: null;
  };
  tables: {
    name: "tables";
    params: {};
    query: {};
    next: null;
  };
  forms: {
    name: "forms";
    params: {};
    query: {};
    next: null;
  };
  modal: {
    name: "modal";
    params: {};
    query: {};
    next: null;
  };
  drawer: {
    name: "drawer";
    params: {};
    query: {};
    next: null;
  };
  dropdown: {
    name: "dropdown";
    params: {};
    query: {};
    next: null;
  };
  imageViewer: {
    name: "image-viewer";
    params: {};
    query: {};
    next: null;
  };
  $: {
    name: "home";
    params: {};
    query: {};
    next: null;
  };
}
