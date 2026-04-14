import { c as createRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, H as HeadContent, S as Scripts } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/tiny-warning.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/tanstack__store.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__react-store.mjs";
import "../_libs/use-sync-external-store.mjs";
const appCss = "/assets/styles-BkSQYPiX.css";
const Route$1 = createRootRoute({
  head: () => ({
    meta: [{
      charSet: "utf-8"
    }, {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0, viewport-fit=cover"
    }, {
      name: "theme-color",
      content: "#eab308"
    }, {
      name: "robots",
      content: "index, follow"
    }, {
      title: "Loju's Healthy Bites — Fresh, Flavorful & Guilt-Free Bites"
    }, {
      name: "description",
      content: "Loju's Healthy Bites — parfaits, mini pizzas, fresh juices, and wholesome fast food crafted with love. Order on WhatsApp for pickup or delivery."
    }],
    links: [{
      rel: "stylesheet",
      href: appCss
    }, {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    }, {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous"
    }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap"
    }]
  }),
  shellComponent: RootDocument
});
function RootDocument({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#main-content", className: "skip-link", children: "Skip to main content" }),
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter = () => import("./index-DszxgBLA.mjs");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0
  });
  return router;
}
export {
  getRouter
};
