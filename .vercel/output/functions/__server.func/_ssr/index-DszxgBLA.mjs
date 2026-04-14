import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import "./router-DajfIawn.mjs";
import { M as Menu, X } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
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
const BRAND = {
  subtitle: "Parfaits, mini pizzas, fresh juices, and wholesome fast food, crafted with love and delivered with care.",
  whatsappNumber: "2349138928572"
};
const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Menu", href: "#full-menu" },
  { label: "Why Us", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" }
];
function whatsappLink(message) {
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
const WHATSAPP_MESSAGES = {
  order: "Hi, I would like to place an order."
};
const SIZES = {
  sm: "text-xl sm:text-2xl",
  md: "text-2xl sm:text-3xl",
  lg: "text-4xl sm:text-5xl"
};
function Wordmark({ size = "md" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: `relative inline-flex items-baseline font-bold tracking-tight text-ink ${SIZES[size]}`,
      "aria-label": "Loju's Healthy Bites",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { "aria-hidden": "true", className: "relative", children: [
          "L",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                "aria-hidden": "true",
                className: "absolute inset-[12%] -z-10 rounded-full bg-accent-lemon"
              }
            ),
            "o"
          ] }),
          "ju"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            "aria-hidden": "true",
            className: "mx-[0.08em] inline-block h-[0.22em] w-[0.22em] translate-y-[-0.65em] rounded-full bg-accent-tangerine shadow-[1.5px_1.5px_0_var(--color-ink)]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "s" })
      ]
    }
  );
}
function WhatsAppIcon({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      className,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" })
    }
  );
}
const closeMobileMenu = () => {
  const cb = document.getElementById("nav-toggle");
  if (cb) cb.checked = false;
};
function navLinkClasses(isActive, variant) {
  const base = variant === "desktop" ? "inline-flex items-center rounded-full border-[2px] px-3.5 py-1.5 text-xs font-bold transition-colors sm:text-sm" : "mobile-link block rounded-full border-[2px] px-4 py-2 text-center text-sm font-bold transition-colors";
  return isActive ? `${base} border-ink bg-accent-sky text-ink shadow-[2px_2px_0_var(--color-ink)]` : `${base} border-transparent text-text-menu hover:border-ink hover:bg-sky-light`;
}
function Navbar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed inset-x-0 top-0 z-[200] px-4 pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "nav",
    {
      "aria-label": "Primary",
      className: "mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border-[3px] border-ink bg-bg-cream px-4 py-2 shadow-[6px_6px_0_var(--color-ink)] sm:px-5",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "flex items-center gap-2", "aria-label": "Loju's Healthy Bites home", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wordmark, { size: "sm" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden items-center gap-1 rounded-full border-[2px] border-ink bg-white px-2 py-1 shadow-[3px_3px_0_var(--color-ink)] md:flex", children: NAV_LINKS.map((link, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: link.href,
            "aria-current": i === 0 ? "page" : void 0,
            className: navLinkClasses(i === 0, "desktop"),
            children: link.label
          }
        ) }, link.href)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: whatsappLink(WHATSAPP_MESSAGES.order),
            target: "_blank",
            rel: "noopener noreferrer",
            className: "bauhaus-btn hidden bg-whatsapp text-xs text-white lg:inline-flex",
            children: "Order on WhatsApp"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "nav-toggle", type: "checkbox", className: "peer sr-only", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "label",
          {
            htmlFor: "nav-toggle",
            className: "nav-toggle-label inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[2.5px] border-ink bg-white shadow-[3px_3px_0_var(--color-ink)] md:hidden",
            "aria-label": "Toggle navigation menu",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "icon-menu h-5 w-5", "aria-hidden": "true" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "icon-close h-5 w-5", "aria-hidden": "true" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mobile-panel pointer-events-none absolute inset-x-0 top-[calc(100%+0.75rem)] hidden px-4 peer-checked:pointer-events-auto peer-checked:block md:peer-checked:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "bauhaus-card mx-auto flex max-w-6xl flex-col gap-2 bg-bg-cream p-4", children: [
          NAV_LINKS.map((link, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: link.href,
              onClick: closeMobileMenu,
              "aria-current": i === 0 ? "page" : void 0,
              className: navLinkClasses(i === 0, "mobile"),
              children: link.label
            }
          ) }, link.href)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "mt-1 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: whatsappLink(WHATSAPP_MESSAGES.order),
              target: "_blank",
              rel: "noopener noreferrer",
              onClick: closeMobileMenu,
              "aria-label": "Order on WhatsApp",
              className: "mobile-cta group relative flex h-12 items-center justify-start gap-2 overflow-hidden rounded-full border-[2.5px] border-ink bg-whatsapp pl-[0.875rem] font-bold text-white",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-5 w-5 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mobile-cta-text inline-block whitespace-nowrap pr-2 text-sm", children: "Order on WhatsApp" })
              ]
            }
          ) })
        ] }) })
      ]
    }
  ) });
}
function FloatingImage({
  src,
  side
}) {
  const position = side === "left" ? "-left-6 -rotate-6 sm:-left-2 md:left-[18%] lg:left-[24%]" : "-right-6 rotate-6 sm:-right-2 md:right-[18%] lg:right-[24%]";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "aria-hidden": "true",
      className: `pointer-events-none absolute top-[32%] -translate-y-1/2 select-none sm:top-[36%] md:top-[38%] ${position}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 w-20 overflow-hidden rounded-full border-[1px] border-ink shadow-[1px_1px_0_var(--color-ink)] sm:h-28 sm:w-28 sm:border-[1.5px] sm:shadow-[2px_2px_0_var(--color-ink)] md:h-40 md:w-40 lg:h-56 lg:w-56", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: "", className: "h-full w-full object-cover" }) })
    }
  );
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-bg-warm px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingImage, { src: "/images/floating-juice.png", side: "left" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingImage, { src: "/images/floating-pizza.png", side: "right" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mb-5 text-3xl font-bold leading-tight text-text-dark sm:text-4xl lg:text-5xl", children: [
        "Fresh, Flavorful &",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Guilt-Free",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bite-wrap text-accent-tangerine", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bite-text", children: "Bites" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Crafted With Love",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent-tangerine", children: "." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mb-8 max-w-lg text-sm leading-relaxed text-text-body sm:text-lg", children: BRAND.subtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: whatsappLink(WHATSAPP_MESSAGES.order),
          target: "_blank",
          rel: "noopener noreferrer",
          className: "bauhaus-btn bg-whatsapp text-sm text-white sm:text-base",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-5 w-5" }),
            "Order Now →"
          ]
        }
      )
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { id: "main-content", className: "pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}) })
  ] });
}
export {
  App as component
};
