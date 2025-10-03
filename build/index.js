var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
));

// app/lib/db.server.js
var db_server_exports = {};
__export(db_server_exports, {
  prisma: () => prisma
});
import { PrismaClient } from "@prisma/client";
var prisma, init_db_server = __esm({
  "app/lib/db.server.js"() {
    global.__prisma || (global.__prisma = new PrismaClient()), prisma = global.__prisma;
  }
});

// node_modules/react-quill/dist/quill.snow.css
var require_quill_snow = __commonJS({
  "node_modules/react-quill/dist/quill.snow.css"(exports, module) {
    module.exports = "/build/_assets/quill.snow-APWK2L6R.css";
  }
});

// empty-module:../utils/supabase.client
var require_supabase = __commonJS({
  "empty-module:../utils/supabase.client"(exports, module) {
    module.exports = {};
  }
});

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { renderToString } from "react-dom/server";
import { RemixServer } from "@remix-run/react";
import { jsxDEV } from "react/jsx-dev-runtime";
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = renderToString(
    /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.jsx",
      lineNumber: 11,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!doctype html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import { Links, LiveReload, Meta, Outlet, Scripts, useLocation, Link } from "@remix-run/react";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-KBBIQYVV.css";

// app/root.jsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [{ rel: "stylesheet", href: tailwind_default }];
function App() {
  let location = useLocation(), isActive = (path) => path === "/articles" ? location.pathname === path : location.pathname === path || location.pathname.startsWith(path + "/");
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { className: "h-full bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 text-gray-900 antialiased", children: [
      /* @__PURE__ */ jsxDEV2("div", { className: "fixed inset-0 overflow-hidden pointer-events-none", children: [
        /* @__PURE__ */ jsxDEV2("div", { className: "absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 28,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV2("div", { className: "absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 29,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV2("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 30,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("div", { className: "relative min-h-full flex flex-col", children: [
        /* @__PURE__ */ jsxDEV2("header", { className: "sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200/50 shadow-sm", children: /* @__PURE__ */ jsxDEV2("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV2("div", { className: "flex items-center justify-between h-16", children: [
          /* @__PURE__ */ jsxDEV2(Link, { to: "/", className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ jsxDEV2("div", { className: "h-10 w-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-6 transition-transform", children: /* @__PURE__ */ jsxDEV2(
              "svg",
              {
                className: "h-6 w-6 text-white",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsxDEV2(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/root.jsx",
                    lineNumber: 47,
                    columnNumber: 23
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/root.jsx",
                lineNumber: 41,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 40,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV2("div", { children: [
              /* @__PURE__ */ jsxDEV2("h1", { className: "text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent", children: "Mini CMS" }, void 0, !1, {
                fileName: "app/root.jsx",
                lineNumber: 56,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV2("p", { className: "text-xs text-gray-500", children: "Content Management" }, void 0, !1, {
                fileName: "app/root.jsx",
                lineNumber: 59,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/root.jsx",
              lineNumber: 55,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/root.jsx",
            lineNumber: 39,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV2("nav", { className: "flex items-center space-x-1", children: [
            /* @__PURE__ */ jsxDEV2(
              Link,
              {
                to: "/articles",
                className: `px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive("/articles") ? "bg-indigo-100 text-indigo-700 shadow-sm" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"}`,
                children: /* @__PURE__ */ jsxDEV2("span", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxDEV2(
                    "svg",
                    {
                      className: "h-4 w-4",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: /* @__PURE__ */ jsxDEV2(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/root.jsx",
                          lineNumber: 80,
                          columnNumber: 25
                        },
                        this
                      )
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/root.jsx",
                      lineNumber: 74,
                      columnNumber: 23
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV2("span", { children: "Articles" }, void 0, !1, {
                    fileName: "app/root.jsx",
                    lineNumber: 87,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/root.jsx",
                  lineNumber: 73,
                  columnNumber: 21
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/root.jsx",
                lineNumber: 65,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ jsxDEV2(
              Link,
              {
                to: "/articles/new",
                className: `px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive("/articles/new") ? "bg-indigo-100 text-indigo-700 shadow-sm" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"}`,
                children: /* @__PURE__ */ jsxDEV2("span", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxDEV2(
                    "svg",
                    {
                      className: "h-4 w-4",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: /* @__PURE__ */ jsxDEV2(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M12 4v16m8-8H4"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/root.jsx",
                          lineNumber: 105,
                          columnNumber: 25
                        },
                        this
                      )
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/root.jsx",
                      lineNumber: 99,
                      columnNumber: 23
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV2("span", { children: "New Article" }, void 0, !1, {
                    fileName: "app/root.jsx",
                    lineNumber: 112,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/root.jsx",
                  lineNumber: 98,
                  columnNumber: 21
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/root.jsx",
                lineNumber: 90,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ jsxDEV2("div", { className: "h-6 w-px bg-gray-300 mx-2" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 115,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV2(
              Link,
              {
                to: "/auth/login",
                className: "px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-md hover:shadow-lg transition-all transform hover:scale-105",
                children: /* @__PURE__ */ jsxDEV2("span", { className: "flex items-center space-x-2", children: [
                  /* @__PURE__ */ jsxDEV2(
                    "svg",
                    {
                      className: "h-4 w-4",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: /* @__PURE__ */ jsxDEV2(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/root.jsx",
                          lineNumber: 127,
                          columnNumber: 25
                        },
                        this
                      )
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/root.jsx",
                      lineNumber: 121,
                      columnNumber: 23
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV2("span", { children: "Sign in" }, void 0, !1, {
                    fileName: "app/root.jsx",
                    lineNumber: 134,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/root.jsx",
                  lineNumber: 120,
                  columnNumber: 21
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/root.jsx",
                lineNumber: 116,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/root.jsx",
            lineNumber: 64,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 37,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 36,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV2("main", { className: "flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8", children: /* @__PURE__ */ jsxDEV2("div", { className: "bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 min-h-[calc(100vh-12rem)] p-8", children: /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 145,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 144,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 143,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV2("footer", { className: "backdrop-blur-md bg-white/60 border-t border-gray-200/50 mt-auto", children: /* @__PURE__ */ jsxDEV2("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6", children: /* @__PURE__ */ jsxDEV2("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxDEV2("p", { className: "text-sm text-gray-600", children: [
            "\xA9 2025 Mini CMS. Built with",
            " ",
            /* @__PURE__ */ jsxDEV2("span", { className: "text-red-500", children: "\u2665" }, void 0, !1, {
              fileName: "app/root.jsx",
              lineNumber: 155,
              columnNumber: 19
            }, this),
            " using Remix & Supabase"
          ] }, void 0, !0, {
            fileName: "app/root.jsx",
            lineNumber: 153,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV2("div", { className: "flex items-center space-x-6", children: [
            /* @__PURE__ */ jsxDEV2(
              "a",
              {
                href: "#",
                className: "text-gray-500 hover:text-indigo-600 transition-colors",
                children: [
                  /* @__PURE__ */ jsxDEV2("span", { className: "sr-only", children: "Documentation" }, void 0, !1, {
                    fileName: "app/root.jsx",
                    lineNumber: 162,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV2(
                    "svg",
                    {
                      className: "h-5 w-5",
                      fill: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ jsxDEV2("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" }, void 0, !1, {
                        fileName: "app/root.jsx",
                        lineNumber: 168,
                        columnNumber: 23
                      }, this)
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/root.jsx",
                      lineNumber: 163,
                      columnNumber: 21
                    },
                    this
                  )
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/root.jsx",
                lineNumber: 158,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ jsxDEV2(
              "a",
              {
                href: "#",
                className: "text-gray-500 hover:text-indigo-600 transition-colors",
                children: [
                  /* @__PURE__ */ jsxDEV2("span", { className: "sr-only", children: "GitHub" }, void 0, !1, {
                    fileName: "app/root.jsx",
                    lineNumber: 175,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV2(
                    "svg",
                    {
                      className: "h-5 w-5",
                      fill: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ jsxDEV2(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                          clipRule: "evenodd"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/root.jsx",
                          lineNumber: 181,
                          columnNumber: 23
                        },
                        this
                      )
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/root.jsx",
                      lineNumber: 176,
                      columnNumber: 21
                    },
                    this
                  )
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/root.jsx",
                lineNumber: 171,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ jsxDEV2(
              "a",
              {
                href: "#",
                className: "text-gray-500 hover:text-indigo-600 transition-colors",
                children: [
                  /* @__PURE__ */ jsxDEV2("span", { className: "sr-only", children: "Twitter" }, void 0, !1, {
                    fileName: "app/root.jsx",
                    lineNumber: 192,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV2(
                    "svg",
                    {
                      className: "h-5 w-5",
                      fill: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ jsxDEV2("path", { d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" }, void 0, !1, {
                        fileName: "app/root.jsx",
                        lineNumber: 198,
                        columnNumber: 23
                      }, this)
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/root.jsx",
                      lineNumber: 193,
                      columnNumber: 21
                    },
                    this
                  )
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/root.jsx",
                lineNumber: 188,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/root.jsx",
            lineNumber: 157,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 152,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 151,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 150,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 207,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 208,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("style", { children: `
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        ` }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 211,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/articles._index.jsx
var articles_index_exports = {};
__export(articles_index_exports, {
  default: () => MyArticles,
  loader: () => loader
});
init_db_server();
import { json } from "@remix-run/node";
import { useLoaderData, Link as Link2, useSearchParams } from "@remix-run/react";
import { useState } from "react";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
async function loader({ request }) {
  let url = new URL(request.url), page = parseInt(url.searchParams.get("page") || "1"), pageSize = parseInt(url.searchParams.get("pageSize") || "10"), search = url.searchParams.get("search") || "", skip = (page - 1) * pageSize, where = {};
  search && (where.OR = [
    { title: { contains: search, mode: "insensitive" } },
    { category: { contains: search, mode: "insensitive" } }
  ]);
  let [articles, total] = await Promise.all([
    prisma.article.findMany({
      where,
      skip,
      take: pageSize,
      orderBy: { createdAt: "desc" },
      include: {
        parent: !0,
        _count: { select: { children: !0 } }
      }
    }),
    prisma.article.count({ where })
  ]), totalPages = Math.ceil(total / pageSize);
  return json({ articles, total, page, pageSize, totalPages });
}
function MyArticles() {
  let { articles, total, page, pageSize, totalPages } = useLoaderData(), [searchParams, setSearchParams] = useSearchParams(), [activeTab, setActiveTab] = useState("all"), [searchTerm, setSearchTerm] = useState(searchParams.get("search") || ""), [list, setList] = useState(articles || []), getStatusColor = (index) => {
    let colors = ["blue", "yellow", "purple", "orange"];
    return colors[index % colors.length];
  }, getStatusBadge = (color) => {
    let badges = {
      blue: { bg: "bg-blue-100", text: "text-blue-800", label: "IEP" },
      yellow: { bg: "bg-yellow-100", text: "text-yellow-800", label: "ALP" },
      purple: { bg: "bg-purple-100", text: "text-purple-800", label: "MLP" },
      orange: { bg: "bg-orange-100", text: "text-orange-800", label: "504" }
    };
    return badges[color] || badges.blue;
  }, getTimeColor = (index) => index === 0 ? "text-red-600" : index <= 2 ? "text-orange-500" : "text-yellow-600", getRelativeTime = (date, index) => {
    let times = [
      "Past Due",
      "In 8 days",
      "In 11 days",
      "In 19 days",
      "In 28 days",
      "In 31 days"
    ];
    return times[index % times.length];
  }, handleSearch = (value) => {
    setSearchTerm(value);
    let newParams = new URLSearchParams(searchParams);
    value ? newParams.set("search", value) : newParams.delete("search"), newParams.set("page", "1"), setSearchParams(newParams);
  }, changePage = (newPage) => {
    let newParams = new URLSearchParams(searchParams);
    newParams.set("page", newPage.toString()), setSearchParams(newParams);
  }, changePageSize = (newSize) => {
    let newParams = new URLSearchParams(searchParams);
    newParams.set("pageSize", newSize.toString()), newParams.set("page", "1"), setSearchParams(newParams);
  };
  async function handleDelete(id) {
    if (window.confirm("Delete this article? This action cannot be undone."))
      try {
        let res = await fetch(`/articles/${id}`, {
          method: "DELETE",
          headers: { Accept: "application/json" }
        });
        if (res.ok)
          setList((prev) => prev.filter((a) => a.id !== id));
        else {
          let payload = await res.json().catch(() => ({}));
          alert(payload.error || "Delete failed");
        }
      } catch {
        alert("Delete request failed");
      }
  }
  return /* @__PURE__ */ jsxDEV3("div", { className: "min-h-screen bg-gray-50 p-8", children: /* @__PURE__ */ jsxDEV3("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV3("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxDEV3("h1", { className: "text-2xl font-bold text-gray-900 mb-6", children: "My Articles" }, void 0, !1, {
        fileName: "app/routes/articles._index.jsx",
        lineNumber: 133,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "flex gap-6 border-b border-gray-200 mb-6", children: [
        { id: "upcoming", label: "Upcoming" },
        { id: "draft", label: "Draft" },
        { id: "amendment", label: "Amendment" },
        { id: "active", label: "Active" },
        { id: "all", label: "All (Most Recent)" }
      ].map((tab) => /* @__PURE__ */ jsxDEV3(
        "button",
        {
          onClick: () => setActiveTab(tab.id),
          className: `pb-3 px-1 font-medium text-sm transition-colors ${activeTab === tab.id ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-gray-900"}`,
          children: tab.label
        },
        tab.id,
        !1,
        {
          fileName: "app/routes/articles._index.jsx",
          lineNumber: 143,
          columnNumber: 15
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/articles._index.jsx",
        lineNumber: 135,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "mb-6", children: /* @__PURE__ */ jsxDEV3(
        "input",
        {
          type: "text",
          value: searchTerm,
          onChange: (e) => handleSearch(e.target.value),
          placeholder: "Filter by title or category...",
          className: "w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/articles._index.jsx",
          lineNumber: 158,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/articles._index.jsx",
        lineNumber: 157,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/articles._index.jsx",
      lineNumber: 132,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { className: "bg-white rounded-lg shadow overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV3("table", { className: "min-w-full divide-y divide-gray-200", children: [
        /* @__PURE__ */ jsxDEV3("thead", { className: "bg-gray-50", children: /* @__PURE__ */ jsxDEV3("tr", { children: [
          /* @__PURE__ */ jsxDEV3("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Title" }, void 0, !1, {
            fileName: "app/routes/articles._index.jsx",
            lineNumber: 172,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV3("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Date" }, void 0, !1, {
            fileName: "app/routes/articles._index.jsx",
            lineNumber: 173,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV3("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Updated" }, void 0, !1, {
            fileName: "app/routes/articles._index.jsx",
            lineNumber: 174,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV3("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Category" }, void 0, !1, {
            fileName: "app/routes/articles._index.jsx",
            lineNumber: 175,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV3("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Status" }, void 0, !1, {
            fileName: "app/routes/articles._index.jsx",
            lineNumber: 176,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV3("th", { className: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Actions" }, void 0, !1, {
            fileName: "app/routes/articles._index.jsx",
            lineNumber: 177,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/articles._index.jsx",
          lineNumber: 171,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/articles._index.jsx",
          lineNumber: 170,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV3("tbody", { className: "bg-white divide-y divide-gray-200", children: list.map((article, index) => {
          let statusColor = getStatusColor(index), statusBadge = getStatusBadge(statusColor), relativeTime = getRelativeTime(article.createdAt, index), timeColor = getTimeColor(index);
          return /* @__PURE__ */ jsxDEV3("tr", { className: "hover:bg-gray-50", children: [
            /* @__PURE__ */ jsxDEV3("td", { className: "px-6 py-4", children: [
              /* @__PURE__ */ jsxDEV3("div", { className: "text-sm font-medium text-gray-900", children: article.title }, void 0, !1, {
                fileName: "app/routes/articles._index.jsx",
                lineNumber: 191,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV3("div", { className: "text-sm text-gray-500", children: [
                ((article.content || "") + "").substring(0, 80),
                "..."
              ] }, void 0, !0, {
                fileName: "app/routes/articles._index.jsx",
                lineNumber: 192,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 190,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV3("td", { className: "px-6 py-4 whitespace-nowrap", children: [
              /* @__PURE__ */ jsxDEV3("div", { className: `text-sm font-medium ${timeColor}`, children: relativeTime }, void 0, !1, {
                fileName: "app/routes/articles._index.jsx",
                lineNumber: 196,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV3("div", { className: "text-sm text-gray-500", children: new Date(article.createdAt).toLocaleDateString("en-US", {
                month: "numeric",
                day: "numeric",
                year: "numeric"
              }) }, void 0, !1, {
                fileName: "app/routes/articles._index.jsx",
                lineNumber: 197,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 195,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV3("td", { className: "px-6 py-4 whitespace-nowrap", children: [
              /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center gap-1", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxDEV3("svg", { className: `w-3 h-3 ${i < index % 5 ? "text-blue-500" : "text-gray-300"}`, fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxDEV3("circle", { cx: "10", cy: "10", r: "10" }, void 0, !1, {
                fileName: "app/routes/articles._index.jsx",
                lineNumber: 210,
                columnNumber: 29
              }, this) }, i, !1, {
                fileName: "app/routes/articles._index.jsx",
                lineNumber: 209,
                columnNumber: 27
              }, this)) }, void 0, !1, {
                fileName: "app/routes/articles._index.jsx",
                lineNumber: 207,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV3("div", { className: "text-sm text-gray-500 mt-1", children: [
                "Last Update: ",
                index === 0 ? "less than a minute ago" : `${index + 1} months ago`
              ] }, void 0, !0, {
                fileName: "app/routes/articles._index.jsx",
                lineNumber: 214,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 206,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV3("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxDEV3("span", { className: `px-3 py-1 inline-flex items-center gap-1 text-xs leading-5 font-semibold rounded-full ${statusBadge.bg} ${statusBadge.text}`, children: [
              /* @__PURE__ */ jsxDEV3("span", { className: "w-2 h-2 rounded-full bg-current" }, void 0, !1, {
                fileName: "app/routes/articles._index.jsx",
                lineNumber: 221,
                columnNumber: 25
              }, this),
              statusBadge.label
            ] }, void 0, !0, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 220,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 219,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV3("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxDEV3("span", { className: "px-3 py-1 inline-flex items-center gap-1 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800", children: [
              /* @__PURE__ */ jsxDEV3("span", { className: "w-2 h-2 rounded-full bg-current" }, void 0, !1, {
                fileName: "app/routes/articles._index.jsx",
                lineNumber: 228,
                columnNumber: 25
              }, this),
              "Draft"
            ] }, void 0, !0, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 227,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 226,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV3("td", { className: "px-6 py-4 whitespace-nowrap text-right", children: [
              /* @__PURE__ */ jsxDEV3(
                Link2,
                {
                  to: `/articles/${article.id}`,
                  className: "inline-block px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-md hover:bg-indigo-100 transition mr-2",
                  children: "View"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/articles._index.jsx",
                  lineNumber: 234,
                  columnNumber: 23
                },
                this
              ),
              /* @__PURE__ */ jsxDEV3(
                "button",
                {
                  onClick: () => handleDelete(article.id),
                  className: "inline-block px-4 py-2 text-sm font-medium text-red-700 bg-red-50 border border-red-200 rounded-md hover:bg-red-100 transition",
                  children: "Delete"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/articles._index.jsx",
                  lineNumber: 241,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 233,
              columnNumber: 21
            }, this)
          ] }, article.id, !0, {
            fileName: "app/routes/articles._index.jsx",
            lineNumber: 189,
            columnNumber: 19
          }, this);
        }) }, void 0, !1, {
          fileName: "app/routes/articles._index.jsx",
          lineNumber: 181,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/articles._index.jsx",
        lineNumber: 169,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "bg-white px-6 py-4 flex items-center justify-between border-t border-gray-200", children: [
        /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxDEV3("span", { className: "text-sm text-gray-700", children: [
            total,
            " Record",
            total !== 1 ? "s" : ""
          ] }, void 0, !0, {
            fileName: "app/routes/articles._index.jsx",
            lineNumber: 256,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV3("span", { className: "text-sm text-gray-700", children: "Records per page" }, void 0, !1, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 258,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV3(
              "select",
              {
                value: pageSize,
                onChange: (e) => changePageSize(parseInt(e.target.value)),
                className: "px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500",
                children: [
                  /* @__PURE__ */ jsxDEV3("option", { value: "10", children: "10" }, void 0, !1, {
                    fileName: "app/routes/articles._index.jsx",
                    lineNumber: 264,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV3("option", { value: "20", children: "20" }, void 0, !1, {
                    fileName: "app/routes/articles._index.jsx",
                    lineNumber: 265,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV3("option", { value: "50", children: "50" }, void 0, !1, {
                    fileName: "app/routes/articles._index.jsx",
                    lineNumber: 266,
                    columnNumber: 19
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/articles._index.jsx",
                lineNumber: 259,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/articles._index.jsx",
            lineNumber: 257,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/articles._index.jsx",
          lineNumber: 255,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxDEV3("span", { className: "text-sm text-gray-700", children: [
            "Page ",
            page,
            " of ",
            totalPages
          ] }, void 0, !0, {
            fileName: "app/routes/articles._index.jsx",
            lineNumber: 272,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV3("button", { onClick: () => changePage(1), disabled: page === 1, className: "p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed", children: /* @__PURE__ */ jsxDEV3("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV3("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 19l-7-7 7-7m8 14l-7-7 7-7" }, void 0, !1, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 275,
              columnNumber: 98
            }, this) }, void 0, !1, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 275,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 274,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV3("button", { onClick: () => changePage(Math.max(1, page - 1)), disabled: page === 1, className: "p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed", children: /* @__PURE__ */ jsxDEV3("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV3("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }, void 0, !1, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 278,
              columnNumber: 98
            }, this) }, void 0, !1, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 278,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 277,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV3("button", { onClick: () => changePage(Math.min(totalPages, page + 1)), disabled: page === totalPages, className: "p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed", children: /* @__PURE__ */ jsxDEV3("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV3("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }, void 0, !1, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 281,
              columnNumber: 98
            }, this) }, void 0, !1, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 281,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 280,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV3("button", { onClick: () => changePage(totalPages), disabled: page === totalPages, className: "p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed", children: /* @__PURE__ */ jsxDEV3("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV3("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 5l7 7-7 7M5 5l7 7-7 7" }, void 0, !1, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 284,
              columnNumber: 98
            }, this) }, void 0, !1, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 284,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 283,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/articles._index.jsx",
            lineNumber: 273,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/articles._index.jsx",
          lineNumber: 271,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/articles._index.jsx",
        lineNumber: 254,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/articles._index.jsx",
      lineNumber: 168,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/articles._index.jsx",
    lineNumber: 131,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/articles._index.jsx",
    lineNumber: 130,
    columnNumber: 5
  }, this);
}

// app/routes/auth.register.jsx
var auth_register_exports = {};
__export(auth_register_exports, {
  action: () => action,
  default: () => Register
});
import { json as json2, redirect } from "@remix-run/node";
import { Form, useActionData, useNavigation, Link as Link3 } from "@remix-run/react";

// app/lib/supabase.server.js
import { createClient } from "@supabase/supabase-js";
var supabaseUrl = process.env.SUPABASE_URL, supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY, supabaseServer = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { persistSession: !1 }
});

// app/utils/session.server.js
import { createCookieSessionStorage } from "@remix-run/node";
var { SESSION_SECRET } = process.env;
if (!SESSION_SECRET)
  throw new Error("SESSION_SECRET not set in env");
var storage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    httpOnly: !0,
    path: "/",
    sameSite: "lax",
    secrets: [SESSION_SECRET],
    secure: !1
  }
}), { commitSession, getSession, destroySession } = storage;

// app/routes/auth.register.jsx
import { Fragment, jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
async function action({ request }) {
  let formData = await request.formData(), name = formData.get("name"), email = formData.get("email"), password = formData.get("password"), confirmPassword = formData.get("confirmPassword");
  if (!name || !email || !password || !confirmPassword)
    return json2(
      { error: "All fields are required" },
      { status: 400 }
    );
  if (password !== confirmPassword)
    return json2(
      { error: "Passwords do not match" },
      { status: 400 }
    );
  if (password.length < 8)
    return json2(
      { error: "Password must be at least 8 characters long" },
      { status: 400 }
    );
  try {
    let { data, error } = await supabaseServer.auth.signUp({
      email,
      password,
      options: {
        data: {
          name
        }
      }
    });
    if (error)
      return json2({ error: error.message }, { status: 400 });
    if (!data.session || !data.user)
      return json2(
        {
          success: !0,
          message: "Registration successful! Please check your email to verify your account."
        },
        { status: 200 }
      );
    let session = await getSession(request.headers.get("Cookie"));
    return session.set("access_token", data.session.access_token), session.set("user", data.user), redirect("/articles", {
      headers: { "Set-Cookie": await commitSession(session) }
    });
  } catch (err) {
    return console.error("Registration error:", err), json2(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
function Register() {
  let actionData = useActionData(), isSubmitting = useNavigation().state === "submitting";
  return /* @__PURE__ */ jsxDEV4("div", { className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV4("div", { className: "max-w-md w-full space-y-8", children: [
    /* @__PURE__ */ jsxDEV4("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxDEV4("div", { className: "mx-auto h-16 w-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3 hover:-rotate-6 transition-transform", children: /* @__PURE__ */ jsxDEV4(
        "svg",
        {
          className: "h-10 w-10 text-white",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /* @__PURE__ */ jsxDEV4(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 93,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/auth.register.jsx",
          lineNumber: 87,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/auth.register.jsx",
        lineNumber: 86,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("h2", { className: "mt-6 text-3xl font-extrabold text-gray-900 tracking-tight", children: "Create your account" }, void 0, !1, {
        fileName: "app/routes/auth.register.jsx",
        lineNumber: 101,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("p", { className: "mt-2 text-sm text-gray-600", children: "Join us and start managing your content" }, void 0, !1, {
        fileName: "app/routes/auth.register.jsx",
        lineNumber: 104,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/auth.register.jsx",
      lineNumber: 85,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { className: "bg-white py-8 px-6 shadow-xl rounded-2xl border border-gray-100", children: [
      /* @__PURE__ */ jsxDEV4(Form, { method: "post", className: "space-y-6", children: [
        actionData?.error && /* @__PURE__ */ jsxDEV4("div", { className: "rounded-lg bg-red-50 border border-red-200 p-4 animate-shake", children: /* @__PURE__ */ jsxDEV4("div", { className: "flex", children: [
          /* @__PURE__ */ jsxDEV4("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxDEV4(
            "svg",
            {
              className: "h-5 w-5 text-red-400",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              children: /* @__PURE__ */ jsxDEV4(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                  clipRule: "evenodd"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/auth.register.jsx",
                  lineNumber: 122,
                  columnNumber: 23
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 117,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 116,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV4("div", { className: "ml-3", children: /* @__PURE__ */ jsxDEV4("p", { className: "text-sm font-medium text-red-800", children: actionData.error }, void 0, !1, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 130,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 129,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth.register.jsx",
          lineNumber: 115,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/auth.register.jsx",
          lineNumber: 114,
          columnNumber: 15
        }, this),
        actionData?.success && /* @__PURE__ */ jsxDEV4("div", { className: "rounded-lg bg-green-50 border border-green-200 p-4", children: /* @__PURE__ */ jsxDEV4("div", { className: "flex", children: [
          /* @__PURE__ */ jsxDEV4("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxDEV4(
            "svg",
            {
              className: "h-5 w-5 text-green-400",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              children: /* @__PURE__ */ jsxDEV4(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                  clipRule: "evenodd"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/auth.register.jsx",
                  lineNumber: 148,
                  columnNumber: 23
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 143,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 142,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV4("div", { className: "ml-3", children: /* @__PURE__ */ jsxDEV4("p", { className: "text-sm font-medium text-green-800", children: actionData.message }, void 0, !1, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 156,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 155,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth.register.jsx",
          lineNumber: 141,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/auth.register.jsx",
          lineNumber: 140,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { children: [
          /* @__PURE__ */ jsxDEV4(
            "label",
            {
              htmlFor: "name",
              className: "block text-sm font-semibold text-gray-700 mb-2",
              children: "Full name"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 166,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV4("div", { className: "relative", children: [
            /* @__PURE__ */ jsxDEV4("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsxDEV4(
              "svg",
              {
                className: "h-5 w-5 text-gray-400",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsxDEV4(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/auth.register.jsx",
                    lineNumber: 180,
                    columnNumber: 21
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/routes/auth.register.jsx",
                lineNumber: 174,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 173,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV4(
              "input",
              {
                id: "name",
                name: "name",
                type: "text",
                autoComplete: "name",
                required: !0,
                className: "block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm",
                placeholder: "John Doe"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/auth.register.jsx",
                lineNumber: 188,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 172,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth.register.jsx",
          lineNumber: 165,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { children: [
          /* @__PURE__ */ jsxDEV4(
            "label",
            {
              htmlFor: "email",
              className: "block text-sm font-semibold text-gray-700 mb-2",
              children: "Email address"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 202,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV4("div", { className: "relative", children: [
            /* @__PURE__ */ jsxDEV4("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsxDEV4(
              "svg",
              {
                className: "h-5 w-5 text-gray-400",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsxDEV4(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/auth.register.jsx",
                    lineNumber: 216,
                    columnNumber: 21
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/routes/auth.register.jsx",
                lineNumber: 210,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 209,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV4(
              "input",
              {
                id: "email",
                name: "email",
                type: "email",
                autoComplete: "email",
                required: !0,
                className: "block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm",
                placeholder: "you@example.com"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/auth.register.jsx",
                lineNumber: 224,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 208,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth.register.jsx",
          lineNumber: 201,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { children: [
          /* @__PURE__ */ jsxDEV4(
            "label",
            {
              htmlFor: "password",
              className: "block text-sm font-semibold text-gray-700 mb-2",
              children: "Password"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 238,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV4("div", { className: "relative", children: [
            /* @__PURE__ */ jsxDEV4("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsxDEV4(
              "svg",
              {
                className: "h-5 w-5 text-gray-400",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsxDEV4(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/auth.register.jsx",
                    lineNumber: 252,
                    columnNumber: 21
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/routes/auth.register.jsx",
                lineNumber: 246,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 245,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV4(
              "input",
              {
                id: "password",
                name: "password",
                type: "password",
                autoComplete: "new-password",
                required: !0,
                className: "block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm",
                placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/auth.register.jsx",
                lineNumber: 260,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 244,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV4("p", { className: "mt-1 text-xs text-gray-500", children: "Must be at least 8 characters" }, void 0, !1, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 270,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth.register.jsx",
          lineNumber: 237,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { children: [
          /* @__PURE__ */ jsxDEV4(
            "label",
            {
              htmlFor: "confirmPassword",
              className: "block text-sm font-semibold text-gray-700 mb-2",
              children: "Confirm password"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 277,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV4("div", { className: "relative", children: [
            /* @__PURE__ */ jsxDEV4("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsxDEV4(
              "svg",
              {
                className: "h-5 w-5 text-gray-400",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsxDEV4(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/auth.register.jsx",
                    lineNumber: 291,
                    columnNumber: 21
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/routes/auth.register.jsx",
                lineNumber: 285,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 284,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV4(
              "input",
              {
                id: "confirmPassword",
                name: "confirmPassword",
                type: "password",
                autoComplete: "new-password",
                required: !0,
                className: "block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm",
                placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/auth.register.jsx",
                lineNumber: 299,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 283,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth.register.jsx",
          lineNumber: 276,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { className: "flex items-start", children: [
          /* @__PURE__ */ jsxDEV4("div", { className: "flex items-center h-5", children: /* @__PURE__ */ jsxDEV4(
            "input",
            {
              id: "terms",
              name: "terms",
              type: "checkbox",
              required: !0,
              className: "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 314,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 313,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV4("div", { className: "ml-3 text-sm", children: /* @__PURE__ */ jsxDEV4("label", { htmlFor: "terms", className: "text-gray-700 cursor-pointer", children: [
            "I agree to the",
            " ",
            /* @__PURE__ */ jsxDEV4(
              Link3,
              {
                to: "/terms",
                className: "font-medium text-indigo-600 hover:text-indigo-500",
                children: "Terms of Service"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/auth.register.jsx",
                lineNumber: 325,
                columnNumber: 19
              },
              this
            ),
            " ",
            "and",
            " ",
            /* @__PURE__ */ jsxDEV4(
              Link3,
              {
                to: "/privacy",
                className: "font-medium text-indigo-600 hover:text-indigo-500",
                children: "Privacy Policy"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/auth.register.jsx",
                lineNumber: 332,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 323,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 322,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth.register.jsx",
          lineNumber: 312,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4(
          "button",
          {
            type: "submit",
            disabled: isSubmitting,
            className: "w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]",
            children: isSubmitting ? /* @__PURE__ */ jsxDEV4(Fragment, { children: [
              /* @__PURE__ */ jsxDEV4(
                "svg",
                {
                  className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: [
                    /* @__PURE__ */ jsxDEV4(
                      "circle",
                      {
                        className: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        strokeWidth: "4"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/auth.register.jsx",
                        lineNumber: 356,
                        columnNumber: 21
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV4(
                      "path",
                      {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/auth.register.jsx",
                        lineNumber: 364,
                        columnNumber: 21
                      },
                      this
                    )
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/auth.register.jsx",
                  lineNumber: 350,
                  columnNumber: 19
                },
                this
              ),
              "Creating account..."
            ] }, void 0, !0, {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 349,
              columnNumber: 17
            }, this) : /* @__PURE__ */ jsxDEV4(Fragment, { children: [
              "Create account",
              /* @__PURE__ */ jsxDEV4(
                "svg",
                {
                  className: "ml-2 -mr-1 h-5 w-5",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: /* @__PURE__ */ jsxDEV4(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M14 5l7 7m0 0l-7 7m7-7H3"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/auth.register.jsx",
                      lineNumber: 381,
                      columnNumber: 21
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/auth.register.jsx",
                  lineNumber: 375,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 373,
              columnNumber: 17
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 343,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/auth.register.jsx",
        lineNumber: 111,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsxDEV4("div", { className: "relative", children: [
          /* @__PURE__ */ jsxDEV4("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ jsxDEV4("div", { className: "w-full border-t border-gray-300" }, void 0, !1, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 397,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 396,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV4("div", { className: "relative flex justify-center text-sm", children: /* @__PURE__ */ jsxDEV4("span", { className: "px-2 bg-white text-gray-500", children: "Already have an account?" }, void 0, !1, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 400,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 399,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth.register.jsx",
          lineNumber: 395,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { className: "mt-6", children: /* @__PURE__ */ jsxDEV4(
          Link3,
          {
            to: "/auth/login",
            className: "w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all",
            children: "Sign in instead"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 407,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/auth.register.jsx",
          lineNumber: 406,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/auth.register.jsx",
        lineNumber: 394,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/auth.register.jsx",
      lineNumber: 110,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV4("p", { className: "text-center text-xs text-gray-500", children: "Protected by industry-standard encryption and security measures" }, void 0, !1, {
      fileName: "app/routes/auth.register.jsx",
      lineNumber: 418,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/auth.register.jsx",
    lineNumber: 83,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.register.jsx",
    lineNumber: 82,
    columnNumber: 5
  }, this);
}

// app/routes/articles.$id.jsx
var articles_id_exports = {};
__export(articles_id_exports, {
  action: () => action2,
  default: () => EditArticlePage,
  loader: () => loader2
});
import { useLoaderData as useLoaderData2, Form as Form2, Link as Link4, useNavigation as useNavigation2, useActionData as useActionData2 } from "@remix-run/react";
import { redirect as redirect2, json as json3 } from "@remix-run/node";
import { useEffect, useState as useState2 } from "react";
import { Fragment as Fragment2, jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
async function loader2({ params }) {
  let { prisma: prisma2 } = await Promise.resolve().then(() => (init_db_server(), db_server_exports)), article = await prisma2.article.findUnique({
    where: { id: params.id },
    include: {
      parent: !0,
      children: !0
    }
  });
  if (!article)
    throw new Response("Not Found", { status: 404 });
  let potentialParents = await prisma2.article.findMany({
    where: {
      parentId: null,
      id: { not: params.id }
    },
    orderBy: { createdAt: "desc" }
  });
  return json3({ article, potentialParents });
}
async function action2({ request, params }) {
  let { prisma: prisma2 } = await Promise.resolve().then(() => (init_db_server(), db_server_exports));
  if (request.method?.toUpperCase() === "DELETE")
    try {
      return await prisma2.article.delete({ where: { id: params.id } }), new Response(null, { status: 204 });
    } catch (e) {
      return json3({ error: e?.message || "Delete failed" }, { status: 500 });
    }
  let form = await request.formData(), title = form.get("title"), slug = form.get("slug"), content = form.get("content"), parentId = form.get("parentId") || null;
  if (!title || !slug)
    return json3({ error: "Title and slug are required" }, { status: 400 });
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))
    return json3(
      { error: "Slug must be lowercase with hyphens only (e.g., my-article-title)" },
      { status: 400 }
    );
  try {
    return await prisma2.article.update({
      where: { id: params.id },
      data: {
        title,
        slug,
        content: content || null,
        parentId
      }
    }), redirect2("/articles");
  } catch (e) {
    return e?.code === "P2002" ? json3({ error: "An article with this slug already exists" }, { status: 400 }) : json3({ error: e?.message || "Failed to update article" }, { status: 500 });
  }
}
function EditArticlePage() {
  let { article, potentialParents } = useLoaderData2(), actionData = useActionData2(), isSubmitting = useNavigation2().state === "submitting", [Quill, setQuill] = useState2(null), [content, setContent] = useState2(article?.content || "");
  return useEffect(() => {
    import("react-quill").then((mod) => setQuill(() => mod.default));
  }, []), useEffect(() => {
    typeof window < "u" && Promise.resolve().then(() => __toESM(require_quill_snow()));
  }, []), /* @__PURE__ */ jsxDEV5("div", { className: "min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV5("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV5("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxDEV5(
        Link4,
        {
          to: "/articles",
          className: "inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors mb-4",
          children: [
            /* @__PURE__ */ jsxDEV5("svg", { className: "w-4 h-4 mr-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV5("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }, void 0, !1, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 111,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 110,
              columnNumber: 13
            }, this),
            "Back to Article"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/articles.$id.jsx",
          lineNumber: 106,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV5("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxDEV5("div", { className: "flex items-center space-x-4", children: [
          /* @__PURE__ */ jsxDEV5("div", { className: "h-12 w-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsxDEV5("svg", { className: "h-7 w-7 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV5("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" }, void 0, !1, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 119,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 118,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 117,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("div", { children: [
            /* @__PURE__ */ jsxDEV5("h1", { className: "text-3xl font-bold text-gray-900", children: "Edit Article" }, void 0, !1, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 123,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV5("p", { className: "text-sm text-gray-600 mt-1", children: "Update the article information and content" }, void 0, !1, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 124,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 122,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/articles.$id.jsx",
          lineNumber: 116,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV5(Link4, { to: "/articles", className: "hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors", children: [
          /* @__PURE__ */ jsxDEV5("svg", { className: "w-4 h-4 mr-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV5("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }, void 0, !1, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 129,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 128,
            columnNumber: 15
          }, this),
          "All Articles"
        ] }, void 0, !0, {
          fileName: "app/routes/articles.$id.jsx",
          lineNumber: 127,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/articles.$id.jsx",
        lineNumber: 115,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/articles.$id.jsx",
      lineNumber: 105,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden", children: /* @__PURE__ */ jsxDEV5(Form2, { method: "post", className: "p-8", children: [
      actionData?.error && /* @__PURE__ */ jsxDEV5("div", { className: "mb-6 rounded-lg bg-red-50 border border-red-200 p-4", children: /* @__PURE__ */ jsxDEV5("div", { className: "flex", children: /* @__PURE__ */ jsxDEV5("div", { className: "ml-3", children: /* @__PURE__ */ jsxDEV5("p", { className: "text-sm font-medium text-red-800", children: actionData.error }, void 0, !1, {
        fileName: "app/routes/articles.$id.jsx",
        lineNumber: 142,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/articles.$id.jsx",
        lineNumber: 141,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/articles.$id.jsx",
        lineNumber: 140,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/articles.$id.jsx",
        lineNumber: 139,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxDEV5("div", { children: [
          /* @__PURE__ */ jsxDEV5("label", { htmlFor: "title", className: "block text-sm font-semibold text-gray-700 mb-2", children: [
            "Article Title",
            /* @__PURE__ */ jsxDEV5("span", { className: "text-red-500 ml-1", children: "*" }, void 0, !1, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 152,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 150,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV5("div", { className: "relative", children: [
            /* @__PURE__ */ jsxDEV5("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsxDEV5("svg", { className: "h-5 w-5 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV5("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }, void 0, !1, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 157,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 156,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 155,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV5(
              "input",
              {
                id: "title",
                name: "title",
                type: "text",
                required: !0,
                defaultValue: article?.title,
                className: "block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm",
                placeholder: "Enter article title"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/articles.$id.jsx",
                lineNumber: 160,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 154,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/articles.$id.jsx",
          lineNumber: 149,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV5("div", { children: [
          /* @__PURE__ */ jsxDEV5("label", { htmlFor: "slug", className: "block text-sm font-semibold text-gray-700 mb-2", children: [
            "URL Slug",
            /* @__PURE__ */ jsxDEV5("span", { className: "text-red-500 ml-1", children: "*" }, void 0, !1, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 175,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 173,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV5("div", { className: "relative", children: [
            /* @__PURE__ */ jsxDEV5("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsxDEV5("svg", { className: "h-5 w-5 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV5("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" }, void 0, !1, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 180,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 179,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 178,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV5(
              "input",
              {
                id: "slug",
                name: "slug",
                type: "text",
                required: !0,
                defaultValue: article?.slug,
                pattern: "[a-z0-9]+(?:-[a-z0-9]+)*",
                className: "block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm font-mono",
                placeholder: "article-url-slug"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/articles.$id.jsx",
                lineNumber: 183,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 177,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV5("p", { className: "mt-1 text-xs text-gray-500", children: "Lowercase letters, numbers, and hyphens only" }, void 0, !1, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 194,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/articles.$id.jsx",
          lineNumber: 172,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV5("div", { children: [
          /* @__PURE__ */ jsxDEV5("label", { htmlFor: "parentId", className: "block text-sm font-semibold text-gray-700 mb-2", children: "Parent Article" }, void 0, !1, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 198,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV5("div", { className: "relative", children: [
            /* @__PURE__ */ jsxDEV5("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsxDEV5("svg", { className: "h-5 w-5 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV5("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" }, void 0, !1, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 202,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 201,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 200,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV5(
              "select",
              {
                id: "parentId",
                name: "parentId",
                defaultValue: article?.parentId || "",
                className: "block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm appearance-none cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxDEV5("option", { value: "", children: "No parent (Top-level article)" }, void 0, !1, {
                    fileName: "app/routes/articles.$id.jsx",
                    lineNumber: 211,
                    columnNumber: 21
                  }, this),
                  potentialParents.map(
                    (p) => /* @__PURE__ */ jsxDEV5("option", { value: p.id, children: p.title }, p.id, !1, {
                      fileName: "app/routes/articles.$id.jsx",
                      lineNumber: 213,
                      columnNumber: 21
                    }, this)
                  )
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/articles.$id.jsx",
                lineNumber: 205,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ jsxDEV5("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none", children: /* @__PURE__ */ jsxDEV5("svg", { className: "h-5 w-5 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV5("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }, void 0, !1, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 218,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 217,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 216,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 199,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/articles.$id.jsx",
          lineNumber: 197,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV5("div", { children: [
          /* @__PURE__ */ jsxDEV5("label", { htmlFor: "content", className: "block text-sm font-semibold text-gray-700 mb-2", children: "Content" }, void 0, !1, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 225,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV5("div", { className: "border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent transition-all", children: Quill ? /* @__PURE__ */ jsxDEV5(
            Quill,
            {
              theme: "snow",
              value: content,
              onChange: setContent,
              className: "bg-white",
              modules: {
                toolbar: [
                  [{ header: [1, 2, 3, !1] }],
                  ["bold", "italic", "underline", "strike"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["blockquote", "code-block"],
                  ["link"],
                  ["clean"]
                ]
              }
            },
            void 0,
            !1,
            {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 228,
              columnNumber: 19
            },
            this
          ) : /* @__PURE__ */ jsxDEV5(
            "textarea",
            {
              name: "content",
              value: content,
              onChange: (e) => setContent(e.target.value),
              rows: 12,
              className: "block w-full px-3 py-3 border-0 leading-5 bg-white placeholder-gray-400 focus:outline-none sm:text-sm resize-none",
              placeholder: "Write your article content here..."
            },
            void 0,
            !1,
            {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 245,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 226,
            columnNumber: 17
          }, this),
          Quill && /* @__PURE__ */ jsxDEV5("input", { type: "hidden", name: "content", value: content }, void 0, !1, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 257,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ jsxDEV5("p", { className: "mt-1 text-xs text-gray-500", children: Quill ? "Rich text editor loaded" : "Loading rich text editor..." }, void 0, !1, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 259,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/articles.$id.jsx",
          lineNumber: 224,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/articles.$id.jsx",
        lineNumber: 148,
        columnNumber: 13
      }, this),
      article.children && article.children.length > 0 && /* @__PURE__ */ jsxDEV5("div", { className: "mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg", children: /* @__PURE__ */ jsxDEV5("div", { className: "flex", children: /* @__PURE__ */ jsxDEV5("div", { className: "ml-3", children: /* @__PURE__ */ jsxDEV5("p", { className: "text-sm text-blue-800", children: [
        "This article has ",
        /* @__PURE__ */ jsxDEV5("strong", { children: article.children.length }, void 0, !1, {
          fileName: "app/routes/articles.$id.jsx",
          lineNumber: 268,
          columnNumber: 40
        }, this),
        " child article",
        article.children.length !== 1 ? "s" : ""
      ] }, void 0, !0, {
        fileName: "app/routes/articles.$id.jsx",
        lineNumber: 267,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/articles.$id.jsx",
        lineNumber: 266,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/articles.$id.jsx",
        lineNumber: 265,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/articles.$id.jsx",
        lineNumber: 264,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { className: "mt-8 flex items-center justify-between pt-6 border-t border-gray-200", children: [
        /* @__PURE__ */ jsxDEV5(Link4, { to: "/articles", className: "inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50", children: [
          /* @__PURE__ */ jsxDEV5("svg", { className: "w-4 h-4 mr-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV5("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }, void 0, !1, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 278,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 277,
            columnNumber: 17
          }, this),
          "Cancel"
        ] }, void 0, !0, {
          fileName: "app/routes/articles.$id.jsx",
          lineNumber: 276,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV5("div", { className: "flex items-center space-x-3", children: /* @__PURE__ */ jsxDEV5(
          "button",
          {
            type: "submit",
            disabled: isSubmitting,
            className: "inline-flex items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]",
            children: isSubmitting ? /* @__PURE__ */ jsxDEV5(Fragment2, { children: [
              /* @__PURE__ */ jsxDEV5("svg", { className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
                /* @__PURE__ */ jsxDEV5("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }, void 0, !1, {
                  fileName: "app/routes/articles.$id.jsx",
                  lineNumber: 292,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV5("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" }, void 0, !1, {
                  fileName: "app/routes/articles.$id.jsx",
                  lineNumber: 293,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/articles.$id.jsx",
                lineNumber: 291,
                columnNumber: 23
              }, this),
              "Saving Changes..."
            ] }, void 0, !0, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 290,
              columnNumber: 19
            }, this) : /* @__PURE__ */ jsxDEV5(Fragment2, { children: [
              /* @__PURE__ */ jsxDEV5("svg", { className: "w-5 h-5 mr-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV5("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }, void 0, !1, {
                fileName: "app/routes/articles.$id.jsx",
                lineNumber: 300,
                columnNumber: 25
              }, this) }, void 0, !1, {
                fileName: "app/routes/articles.$id.jsx",
                lineNumber: 299,
                columnNumber: 23
              }, this),
              "Save Changes"
            ] }, void 0, !0, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 298,
              columnNumber: 19
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 284,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/articles.$id.jsx",
          lineNumber: 283,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/articles.$id.jsx",
        lineNumber: 275,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/articles.$id.jsx",
      lineNumber: 137,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/articles.$id.jsx",
      lineNumber: 136,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "mt-6 bg-gray-50 border border-gray-200 rounded-xl p-6", children: [
      /* @__PURE__ */ jsxDEV5("h3", { className: "text-sm font-semibold text-gray-700 mb-3", children: "Article Information" }, void 0, !1, {
        fileName: "app/routes/articles.$id.jsx",
        lineNumber: 312,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm", children: [
        /* @__PURE__ */ jsxDEV5("div", { children: [
          /* @__PURE__ */ jsxDEV5("span", { className: "text-gray-500", children: "Created:" }, void 0, !1, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 315,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("span", { className: "ml-2 text-gray-900 font-medium", children: new Date(article.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          }) }, void 0, !1, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 316,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/articles.$id.jsx",
          lineNumber: 314,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV5("div", { children: [
          /* @__PURE__ */ jsxDEV5("span", { className: "text-gray-500", children: "Last Updated:" }, void 0, !1, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 325,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("span", { className: "ml-2 text-gray-900 font-medium", children: new Date(article.updatedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          }) }, void 0, !1, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 326,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/articles.$id.jsx",
          lineNumber: 324,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV5("div", { children: [
          /* @__PURE__ */ jsxDEV5("span", { className: "text-gray-500", children: "Article ID:" }, void 0, !1, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 335,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV5("span", { className: "ml-2 text-gray-900 font-mono text-xs", children: article.id }, void 0, !1, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 336,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/articles.$id.jsx",
          lineNumber: 334,
          columnNumber: 13
        }, this),
        article.parent && /* @__PURE__ */ jsxDEV5("div", { children: [
          /* @__PURE__ */ jsxDEV5("span", { className: "text-gray-500", children: "Parent:" }, void 0, !1, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 340,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV5(Link4, { to: `/articles/${article.parent.id}`, className: "ml-2 text-indigo-600 hover:text-indigo-500 font-medium", children: article.parent.title }, void 0, !1, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 341,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/articles.$id.jsx",
          lineNumber: 339,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/articles.$id.jsx",
        lineNumber: 313,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/articles.$id.jsx",
      lineNumber: 311,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/articles.$id.jsx",
    lineNumber: 104,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/articles.$id.jsx",
    lineNumber: 103,
    columnNumber: 5
  }, this);
}

// app/routes/articles.new.jsx
var articles_new_exports = {};
__export(articles_new_exports, {
  action: () => action3,
  default: () => NewArticle,
  loader: () => loader3
});
import { Form as Form3, useActionData as useActionData3, useLoaderData as useLoaderData3, useNavigation as useNavigation3, Link as Link5 } from "@remix-run/react";
import { redirect as redirect3, json as json4 } from "@remix-run/node";
import { useState as useState3, useEffect as useEffect2 } from "react";
import { Fragment as Fragment3, jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
async function action3({ request }) {
  let { prisma: prisma2 } = await Promise.resolve().then(() => (init_db_server(), db_server_exports)), form = await request.formData(), title = form.get("title"), slug = form.get("slug"), content = form.get("content"), parentId = form.get("parentId") || null;
  if (!title || !slug)
    return json4({ error: "Title and slug are required" }, { status: 400 });
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))
    return json4(
      { error: "Slug must be lowercase with hyphens only (e.g., my-article-title)" },
      { status: 400 }
    );
  try {
    return await prisma2.article.create({
      data: {
        title,
        slug,
        content: content || null,
        parentId
      }
    }), redirect3("/articles");
  } catch (e) {
    return e.code === "P2002" ? json4({ error: "An article with this slug already exists" }, { status: 400 }) : json4({ error: e?.message || "Database error occurred" }, { status: 500 });
  }
}
async function loader3() {
  let { prisma: prisma2 } = await Promise.resolve().then(() => (init_db_server(), db_server_exports)), parents = await prisma2.article.findMany({
    where: { parentId: null },
    orderBy: { createdAt: "desc" }
  });
  return json4({ parents });
}
function NewArticle() {
  let actionData = useActionData3(), { parents } = useLoaderData3(), isSubmitting = useNavigation3().state === "submitting", safeParents = parents ?? [], [title, setTitle] = useState3(""), [slug, setSlug] = useState3(""), [autoSlug, setAutoSlug] = useState3(!0);
  useEffect2(() => {
    if (autoSlug && title) {
      let generatedSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
      setSlug(generatedSlug);
    }
  }, [title, autoSlug]);
  let handleSlugChange = (e) => {
    setAutoSlug(!1), setSlug(e.target.value);
  };
  return /* @__PURE__ */ jsxDEV6("div", { className: "min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV6("div", { className: "max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV6("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxDEV6(
        Link5,
        {
          to: "/articles",
          className: "inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors mb-4",
          children: [
            /* @__PURE__ */ jsxDEV6(
              "svg",
              {
                className: "w-4 h-4 mr-2",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsxDEV6(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M15 19l-7-7 7-7"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/articles.new.jsx",
                    lineNumber: 96,
                    columnNumber: 15
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/routes/articles.new.jsx",
                lineNumber: 90,
                columnNumber: 13
              },
              this
            ),
            "Back to Articles"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 86,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV6("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsxDEV6("div", { className: "h-12 w-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsxDEV6(
          "svg",
          {
            className: "h-7 w-7 text-white",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /* @__PURE__ */ jsxDEV6(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M12 4v16m8-8H4"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/articles.new.jsx",
                lineNumber: 113,
                columnNumber: 17
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 107,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 106,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { children: [
          /* @__PURE__ */ jsxDEV6("h1", { className: "text-3xl font-bold text-gray-900", children: "Create New Article" }, void 0, !1, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 122,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV6("p", { className: "text-sm text-gray-600 mt-1", children: "Add a new article to your content management system" }, void 0, !1, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 123,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 121,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/articles.new.jsx",
        lineNumber: 105,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/articles.new.jsx",
      lineNumber: 85,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { className: "bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden", children: /* @__PURE__ */ jsxDEV6(Form3, { method: "post", className: "p-8", children: [
      actionData?.error && /* @__PURE__ */ jsxDEV6("div", { className: "mb-6 rounded-lg bg-red-50 border border-red-200 p-4 animate-shake", children: /* @__PURE__ */ jsxDEV6("div", { className: "flex", children: [
        /* @__PURE__ */ jsxDEV6("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxDEV6(
          "svg",
          {
            className: "h-5 w-5 text-red-400",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            children: /* @__PURE__ */ jsxDEV6(
              "path",
              {
                fillRule: "evenodd",
                d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                clipRule: "evenodd"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/articles.new.jsx",
                lineNumber: 143,
                columnNumber: 23
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 138,
            columnNumber: 21
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 137,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { className: "ml-3", children: /* @__PURE__ */ jsxDEV6("p", { className: "text-sm font-medium text-red-800", children: actionData.error }, void 0, !1, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 151,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 150,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/articles.new.jsx",
        lineNumber: 136,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/articles.new.jsx",
        lineNumber: 135,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxDEV6("div", { children: [
          /* @__PURE__ */ jsxDEV6(
            "label",
            {
              htmlFor: "title",
              className: "block text-sm font-semibold text-gray-700 mb-2",
              children: [
                "Article Title",
                /* @__PURE__ */ jsxDEV6("span", { className: "text-red-500 ml-1", children: "*" }, void 0, !1, {
                  fileName: "app/routes/articles.new.jsx",
                  lineNumber: 165,
                  columnNumber: 19
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/articles.new.jsx",
              lineNumber: 160,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV6("div", { className: "relative", children: [
            /* @__PURE__ */ jsxDEV6("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsxDEV6(
              "svg",
              {
                className: "h-5 w-5 text-gray-400",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsxDEV6(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/articles.new.jsx",
                    lineNumber: 175,
                    columnNumber: 23
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/routes/articles.new.jsx",
                lineNumber: 169,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/articles.new.jsx",
              lineNumber: 168,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV6(
              "input",
              {
                id: "title",
                name: "title",
                type: "text",
                required: !0,
                value: title,
                onChange: (e) => setTitle(e.target.value),
                className: "block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm",
                placeholder: "Enter article title"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/articles.new.jsx",
                lineNumber: 183,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 167,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6("p", { className: "mt-1 text-xs text-gray-500", children: "This will be displayed as the main heading" }, void 0, !1, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 194,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 159,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { children: [
          /* @__PURE__ */ jsxDEV6(
            "label",
            {
              htmlFor: "slug",
              className: "block text-sm font-semibold text-gray-700 mb-2",
              children: [
                "URL Slug",
                /* @__PURE__ */ jsxDEV6("span", { className: "text-red-500 ml-1", children: "*" }, void 0, !1, {
                  fileName: "app/routes/articles.new.jsx",
                  lineNumber: 206,
                  columnNumber: 19
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/articles.new.jsx",
              lineNumber: 201,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV6("div", { className: "relative", children: [
            /* @__PURE__ */ jsxDEV6("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsxDEV6(
              "svg",
              {
                className: "h-5 w-5 text-gray-400",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsxDEV6(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/articles.new.jsx",
                    lineNumber: 216,
                    columnNumber: 23
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/routes/articles.new.jsx",
                lineNumber: 210,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/articles.new.jsx",
              lineNumber: 209,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV6(
              "input",
              {
                id: "slug",
                name: "slug",
                type: "text",
                required: !0,
                value: slug,
                onChange: handleSlugChange,
                pattern: "[a-z0-9]+(?:-[a-z0-9]+)*",
                className: "block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm font-mono",
                placeholder: "article-url-slug"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/articles.new.jsx",
                lineNumber: 224,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 208,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6("p", { className: "mt-1 text-xs text-gray-500", children: autoSlug ? "Auto-generated from title (edit to customize)" : "Lowercase letters, numbers, and hyphens only" }, void 0, !1, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 236,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 200,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { children: [
          /* @__PURE__ */ jsxDEV6(
            "label",
            {
              htmlFor: "content",
              className: "block text-sm font-semibold text-gray-700 mb-2",
              children: "Content"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/articles.new.jsx",
              lineNumber: 245,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV6("div", { className: "relative", children: /* @__PURE__ */ jsxDEV6(
            "textarea",
            {
              id: "content",
              name: "content",
              rows: 8,
              className: "block w-full px-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm resize-none",
              placeholder: "Write your article content here..."
            },
            void 0,
            !1,
            {
              fileName: "app/routes/articles.new.jsx",
              lineNumber: 252,
              columnNumber: 19
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 251,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6("p", { className: "mt-1 text-xs text-gray-500", children: "Optional - You can add or edit content later" }, void 0, !1, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 260,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 244,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { children: [
          /* @__PURE__ */ jsxDEV6(
            "label",
            {
              htmlFor: "parentId",
              className: "block text-sm font-semibold text-gray-700 mb-2",
              children: "Parent Article"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/articles.new.jsx",
              lineNumber: 267,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV6("div", { className: "relative", children: [
            /* @__PURE__ */ jsxDEV6("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsxDEV6(
              "svg",
              {
                className: "h-5 w-5 text-gray-400",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsxDEV6(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/articles.new.jsx",
                    lineNumber: 281,
                    columnNumber: 23
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/routes/articles.new.jsx",
                lineNumber: 275,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/articles.new.jsx",
              lineNumber: 274,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV6(
              "select",
              {
                id: "parentId",
                name: "parentId",
                className: "block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm appearance-none cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxDEV6("option", { value: "", children: "No parent (Top-level article)" }, void 0, !1, {
                    fileName: "app/routes/articles.new.jsx",
                    lineNumber: 294,
                    columnNumber: 21
                  }, this),
                  safeParents.map((p) => /* @__PURE__ */ jsxDEV6("option", { value: p.id, children: p.title }, p.id, !1, {
                    fileName: "app/routes/articles.new.jsx",
                    lineNumber: 296,
                    columnNumber: 23
                  }, this))
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/articles.new.jsx",
                lineNumber: 289,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ jsxDEV6("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none", children: /* @__PURE__ */ jsxDEV6(
              "svg",
              {
                className: "h-5 w-5 text-gray-400",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsxDEV6(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M19 9l-7 7-7-7"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/articles.new.jsx",
                    lineNumber: 308,
                    columnNumber: 23
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/routes/articles.new.jsx",
                lineNumber: 302,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/articles.new.jsx",
              lineNumber: 301,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 273,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6("p", { className: "mt-1 text-xs text-gray-500", children: safeParents.length > 0 ? "Organize articles in a hierarchy" : "No parent articles available yet" }, void 0, !1, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 317,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 266,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/articles.new.jsx",
        lineNumber: 157,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "mt-8 flex items-center justify-between pt-6 border-t border-gray-200", children: [
        /* @__PURE__ */ jsxDEV6(
          Link5,
          {
            to: "/articles",
            className: "inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all",
            children: [
              /* @__PURE__ */ jsxDEV6(
                "svg",
                {
                  className: "w-4 h-4 mr-2",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: /* @__PURE__ */ jsxDEV6(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M6 18L18 6M6 6l12 12"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/articles.new.jsx",
                      lineNumber: 337,
                      columnNumber: 19
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/articles.new.jsx",
                  lineNumber: 331,
                  columnNumber: 17
                },
                this
              ),
              "Cancel"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 327,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV6(
          "button",
          {
            type: "submit",
            disabled: isSubmitting,
            className: "inline-flex items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]",
            children: isSubmitting ? /* @__PURE__ */ jsxDEV6(Fragment3, { children: [
              /* @__PURE__ */ jsxDEV6(
                "svg",
                {
                  className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: [
                    /* @__PURE__ */ jsxDEV6(
                      "circle",
                      {
                        className: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        strokeWidth: "4"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/articles.new.jsx",
                        lineNumber: 360,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV6(
                      "path",
                      {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/articles.new.jsx",
                        lineNumber: 368,
                        columnNumber: 23
                      },
                      this
                    )
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/articles.new.jsx",
                  lineNumber: 354,
                  columnNumber: 21
                },
                this
              ),
              "Creating Article..."
            ] }, void 0, !0, {
              fileName: "app/routes/articles.new.jsx",
              lineNumber: 353,
              columnNumber: 19
            }, this) : /* @__PURE__ */ jsxDEV6(Fragment3, { children: [
              /* @__PURE__ */ jsxDEV6(
                "svg",
                {
                  className: "w-5 h-5 mr-2",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: /* @__PURE__ */ jsxDEV6(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M5 13l4 4L19 7"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/articles.new.jsx",
                      lineNumber: 384,
                      columnNumber: 23
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/articles.new.jsx",
                  lineNumber: 378,
                  columnNumber: 21
                },
                this
              ),
              "Create Article"
            ] }, void 0, !0, {
              fileName: "app/routes/articles.new.jsx",
              lineNumber: 377,
              columnNumber: 19
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 347,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/articles.new.jsx",
        lineNumber: 326,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/articles.new.jsx",
      lineNumber: 132,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/articles.new.jsx",
      lineNumber: 131,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { className: "mt-6 bg-indigo-50 border border-indigo-100 rounded-xl p-6", children: /* @__PURE__ */ jsxDEV6("div", { className: "flex", children: [
      /* @__PURE__ */ jsxDEV6("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxDEV6(
        "svg",
        {
          className: "h-5 w-5 text-indigo-600",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /* @__PURE__ */ jsxDEV6(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/articles.new.jsx",
              lineNumber: 409,
              columnNumber: 17
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 403,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/articles.new.jsx",
        lineNumber: 402,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "ml-3", children: [
        /* @__PURE__ */ jsxDEV6("h3", { className: "text-sm font-semibold text-indigo-900", children: "Tips for creating articles" }, void 0, !1, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 418,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { className: "mt-2 text-sm text-indigo-700", children: /* @__PURE__ */ jsxDEV6("ul", { className: "list-disc list-inside space-y-1", children: [
          /* @__PURE__ */ jsxDEV6("li", { children: "Use clear, descriptive titles for better organization" }, void 0, !1, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 421,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV6("li", { children: "URL slugs should be unique and SEO-friendly" }, void 0, !1, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 422,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV6("li", { children: "Parent articles help create a content hierarchy" }, void 0, !1, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 423,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV6("li", { children: "Content can be added or edited after creation" }, void 0, !1, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 424,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 420,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 419,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/articles.new.jsx",
        lineNumber: 417,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/articles.new.jsx",
      lineNumber: 401,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/articles.new.jsx",
      lineNumber: 400,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/articles.new.jsx",
    lineNumber: 83,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/articles.new.jsx",
    lineNumber: 82,
    columnNumber: 5
  }, this);
}

// app/routes/auth.logout.jsx
var auth_logout_exports = {};
__export(auth_logout_exports, {
  action: () => action4,
  default: () => Logout
});
var import_supabase2 = __toESM(require_supabase());
import { redirect as redirect4 } from "@remix-run/react";
async function action4({ request }) {
  let session = await getSession(request.headers.get("Cookie"));
  return session.get("access_token") && await import_supabase2.supabaseClient.auth.signOut(), redirect4("/", {
    headers: { "Set-Cookie": await destroySession(session) }
  });
}
function Logout() {
  return null;
}

// app/routes/auth.login.jsx
var auth_login_exports = {};
__export(auth_login_exports, {
  action: () => action5,
  default: () => Login
});
import { json as json5, redirect as redirect5 } from "@remix-run/node";
import { Form as Form4, useActionData as useActionData4, useNavigation as useNavigation4, Link as Link6 } from "@remix-run/react";
import { Fragment as Fragment4, jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
async function action5({ request }) {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password");
  if (!email || !password)
    return json5(
      { error: "Email and password are required" },
      { status: 400 }
    );
  try {
    let { data, error } = await supabaseServer.auth.signInWithPassword({
      email,
      password
    });
    if (error)
      return json5({ error: error.message }, { status: 401 });
    if (!data.session || !data.user)
      return json5({ error: "Authentication failed" }, { status: 401 });
    let session = await getSession(request.headers.get("Cookie"));
    return session.set("access_token", data.session.access_token), session.set("user", data.user), redirect5("/articles", {
      headers: { "Set-Cookie": await commitSession(session) }
    });
  } catch (err) {
    return console.error("Login error:", err), json5(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
function Login() {
  let actionData = useActionData4(), isSubmitting = useNavigation4().state === "submitting";
  return /* @__PURE__ */ jsxDEV7("div", { className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV7("div", { className: "max-w-md w-full space-y-8", children: [
    /* @__PURE__ */ jsxDEV7("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxDEV7("div", { className: "mx-auto h-16 w-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-6 transition-transform", children: /* @__PURE__ */ jsxDEV7(
        "svg",
        {
          className: "h-10 w-10 text-white",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /* @__PURE__ */ jsxDEV7(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/auth.login.jsx",
              lineNumber: 66,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/auth.login.jsx",
          lineNumber: 60,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/auth.login.jsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7("h2", { className: "mt-6 text-3xl font-extrabold text-gray-900 tracking-tight", children: "Welcome back" }, void 0, !1, {
        fileName: "app/routes/auth.login.jsx",
        lineNumber: 74,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7("p", { className: "mt-2 text-sm text-gray-600", children: "Sign in to manage your content" }, void 0, !1, {
        fileName: "app/routes/auth.login.jsx",
        lineNumber: 77,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/auth.login.jsx",
      lineNumber: 58,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV7("div", { className: "bg-white py-8 px-6 shadow-xl rounded-2xl border border-gray-100", children: [
      /* @__PURE__ */ jsxDEV7(Form4, { method: "post", className: "space-y-6", children: [
        actionData?.error && /* @__PURE__ */ jsxDEV7("div", { className: "rounded-lg bg-red-50 border border-red-200 p-4 animate-shake", children: /* @__PURE__ */ jsxDEV7("div", { className: "flex", children: [
          /* @__PURE__ */ jsxDEV7("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxDEV7(
            "svg",
            {
              className: "h-5 w-5 text-red-400",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              children: /* @__PURE__ */ jsxDEV7(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                  clipRule: "evenodd"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/auth.login.jsx",
                  lineNumber: 95,
                  columnNumber: 23
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/auth.login.jsx",
              lineNumber: 90,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/auth.login.jsx",
            lineNumber: 89,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV7("div", { className: "ml-3", children: /* @__PURE__ */ jsxDEV7("p", { className: "text-sm font-medium text-red-800", children: actionData.error }, void 0, !1, {
            fileName: "app/routes/auth.login.jsx",
            lineNumber: 103,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/auth.login.jsx",
            lineNumber: 102,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth.login.jsx",
          lineNumber: 88,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/auth.login.jsx",
          lineNumber: 87,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV7("div", { children: [
          /* @__PURE__ */ jsxDEV7(
            "label",
            {
              htmlFor: "email",
              className: "block text-sm font-semibold text-gray-700 mb-2",
              children: "Email address"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/auth.login.jsx",
              lineNumber: 113,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV7("div", { className: "relative", children: [
            /* @__PURE__ */ jsxDEV7("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsxDEV7(
              "svg",
              {
                className: "h-5 w-5 text-gray-400",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsxDEV7(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/auth.login.jsx",
                    lineNumber: 127,
                    columnNumber: 21
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/routes/auth.login.jsx",
                lineNumber: 121,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/auth.login.jsx",
              lineNumber: 120,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV7(
              "input",
              {
                id: "email",
                name: "email",
                type: "email",
                autoComplete: "email",
                required: !0,
                className: "block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm",
                placeholder: "you@example.com"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/auth.login.jsx",
                lineNumber: 135,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/auth.login.jsx",
            lineNumber: 119,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth.login.jsx",
          lineNumber: 112,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV7("div", { children: [
          /* @__PURE__ */ jsxDEV7(
            "label",
            {
              htmlFor: "password",
              className: "block text-sm font-semibold text-gray-700 mb-2",
              children: "Password"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/auth.login.jsx",
              lineNumber: 149,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV7("div", { className: "relative", children: [
            /* @__PURE__ */ jsxDEV7("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsxDEV7(
              "svg",
              {
                className: "h-5 w-5 text-gray-400",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsxDEV7(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/auth.login.jsx",
                    lineNumber: 163,
                    columnNumber: 21
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/routes/auth.login.jsx",
                lineNumber: 157,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/auth.login.jsx",
              lineNumber: 156,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV7(
              "input",
              {
                id: "password",
                name: "password",
                type: "password",
                autoComplete: "current-password",
                required: !0,
                className: "block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm",
                placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/auth.login.jsx",
                lineNumber: 171,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/auth.login.jsx",
            lineNumber: 155,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth.login.jsx",
          lineNumber: 148,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV7("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxDEV7("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxDEV7(
              "input",
              {
                id: "remember-me",
                name: "remember-me",
                type: "checkbox",
                className: "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/auth.login.jsx",
                lineNumber: 186,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              "label",
              {
                htmlFor: "remember-me",
                className: "ml-2 block text-sm text-gray-700 cursor-pointer",
                children: "Remember me"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/auth.login.jsx",
                lineNumber: 192,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/auth.login.jsx",
            lineNumber: 185,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV7("div", { className: "text-sm", children: /* @__PURE__ */ jsxDEV7(
            Link6,
            {
              to: "/auth/forgot-password",
              className: "font-medium text-indigo-600 hover:text-indigo-500 transition-colors",
              children: "Forgot password?"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/auth.login.jsx",
              lineNumber: 201,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/auth.login.jsx",
            lineNumber: 200,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth.login.jsx",
          lineNumber: 184,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV7(
          "button",
          {
            type: "submit",
            disabled: isSubmitting,
            className: "w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]",
            children: isSubmitting ? /* @__PURE__ */ jsxDEV7(Fragment4, { children: [
              /* @__PURE__ */ jsxDEV7(
                "svg",
                {
                  className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: [
                    /* @__PURE__ */ jsxDEV7(
                      "circle",
                      {
                        className: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        strokeWidth: "4"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/auth.login.jsx",
                        lineNumber: 224,
                        columnNumber: 21
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV7(
                      "path",
                      {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/auth.login.jsx",
                        lineNumber: 232,
                        columnNumber: 21
                      },
                      this
                    )
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/auth.login.jsx",
                  lineNumber: 218,
                  columnNumber: 19
                },
                this
              ),
              "Signing in..."
            ] }, void 0, !0, {
              fileName: "app/routes/auth.login.jsx",
              lineNumber: 217,
              columnNumber: 17
            }, this) : /* @__PURE__ */ jsxDEV7(Fragment4, { children: [
              "Sign in",
              /* @__PURE__ */ jsxDEV7(
                "svg",
                {
                  className: "ml-2 -mr-1 h-5 w-5",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: /* @__PURE__ */ jsxDEV7(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M14 5l7 7m0 0l-7 7m7-7H3"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/auth.login.jsx",
                      lineNumber: 249,
                      columnNumber: 21
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/auth.login.jsx",
                  lineNumber: 243,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/auth.login.jsx",
              lineNumber: 241,
              columnNumber: 17
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/auth.login.jsx",
            lineNumber: 211,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/auth.login.jsx",
        lineNumber: 84,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsxDEV7("div", { className: "relative", children: [
          /* @__PURE__ */ jsxDEV7("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ jsxDEV7("div", { className: "w-full border-t border-gray-300" }, void 0, !1, {
            fileName: "app/routes/auth.login.jsx",
            lineNumber: 265,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/auth.login.jsx",
            lineNumber: 264,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV7("div", { className: "relative flex justify-center text-sm", children: /* @__PURE__ */ jsxDEV7("span", { className: "px-2 bg-white text-gray-500", children: "Don't have an account?" }, void 0, !1, {
            fileName: "app/routes/auth.login.jsx",
            lineNumber: 268,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/auth.login.jsx",
            lineNumber: 267,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth.login.jsx",
          lineNumber: 263,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV7("div", { className: "mt-6", children: /* @__PURE__ */ jsxDEV7(
          Link6,
          {
            to: "/auth/register",
            className: "w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all",
            children: "Create new account"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/auth.login.jsx",
            lineNumber: 275,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/auth.login.jsx",
          lineNumber: 274,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/auth.login.jsx",
        lineNumber: 262,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/auth.login.jsx",
      lineNumber: 83,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV7("p", { className: "text-center text-xs text-gray-500", children: [
      "By signing in, you agree to our",
      " ",
      /* @__PURE__ */ jsxDEV7(
        Link6,
        {
          to: "/terms",
          className: "text-indigo-600 hover:text-indigo-500 font-medium",
          children: "Terms of Service"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/auth.login.jsx",
          lineNumber: 288,
          columnNumber: 11
        },
        this
      ),
      " ",
      "and",
      " ",
      /* @__PURE__ */ jsxDEV7(
        Link6,
        {
          to: "/privacy",
          className: "text-indigo-600 hover:text-indigo-500 font-medium",
          children: "Privacy Policy"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/auth.login.jsx",
          lineNumber: 295,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/auth.login.jsx",
      lineNumber: 286,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/auth.login.jsx",
    lineNumber: 56,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login.jsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
import { Link as Link7 } from "@remix-run/react";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function Index() {
  return /* @__PURE__ */ jsxDEV8("div", { className: "min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50", children: /* @__PURE__ */ jsxDEV8("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20", children: [
    /* @__PURE__ */ jsxDEV8("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxDEV8("div", { className: "inline-flex items-center justify-center space-x-2 mb-6", children: /* @__PURE__ */ jsxDEV8("div", { className: "h-16 w-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl transform -rotate-6 hover:rotate-0 transition-transform", children: /* @__PURE__ */ jsxDEV8(
        "svg",
        {
          className: "h-10 w-10 text-white",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /* @__PURE__ */ jsxDEV8(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.jsx",
              lineNumber: 18,
              columnNumber: 17
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.jsx",
          lineNumber: 12,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 11,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 10,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8("h1", { className: "text-5xl font-extrabold text-gray-900 tracking-tight sm:text-6xl mb-6", children: [
        "Welcome to",
        " ",
        /* @__PURE__ */ jsxDEV8("span", { className: "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent", children: "Mini CMS" }, void 0, !1, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 30,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8("p", { className: "max-w-2xl mx-auto text-xl text-gray-600 mb-12", children: "A simple and elegant content management system. Create, organize, and manage your articles with ease." }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "flex items-center justify-center space-x-4", children: [
        /* @__PURE__ */ jsxDEV8(
          Link7,
          {
            to: "/auth/login",
            className: "inline-flex items-center px-8 py-4 border border-transparent text-base font-semibold rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl",
            children: [
              "Get Started",
              /* @__PURE__ */ jsxDEV8(
                "svg",
                {
                  className: "ml-2 w-5 h-5",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: /* @__PURE__ */ jsxDEV8(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M13 7l5 5m0 0l-5 5m5-5H6"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/_index.jsx",
                      lineNumber: 52,
                      columnNumber: 17
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.jsx",
                  lineNumber: 46,
                  columnNumber: 15
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/_index.jsx",
            lineNumber: 41,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV8(
          Link7,
          {
            to: "/articles",
            className: "inline-flex items-center px-8 py-4 border border-gray-300 text-base font-semibold rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-all shadow-md hover:shadow-lg",
            children: "Browse Articles"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.jsx",
            lineNumber: 61,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 40,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { className: "mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxDEV8("div", { className: "relative group", children: [
        /* @__PURE__ */ jsxDEV8("div", { className: "absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300" }, void 0, !1, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 74,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { className: "relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxDEV8("div", { className: "h-12 w-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxDEV8(
            "svg",
            {
              className: "h-6 w-6 text-indigo-600",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /* @__PURE__ */ jsxDEV8(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.jsx",
                  lineNumber: 83,
                  columnNumber: 19
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.jsx",
              lineNumber: 77,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 76,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV8("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Easy Content Creation" }, void 0, !1, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 91,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV8("p", { className: "text-gray-600", children: "Create and edit articles with a simple, intuitive interface designed for productivity." }, void 0, !1, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 92,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 75,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 73,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "relative group", children: [
        /* @__PURE__ */ jsxDEV8("div", { className: "absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300" }, void 0, !1, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 100,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { className: "relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxDEV8("div", { className: "h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxDEV8(
            "svg",
            {
              className: "h-6 w-6 text-purple-600",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /* @__PURE__ */ jsxDEV8(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.jsx",
                  lineNumber: 109,
                  columnNumber: 19
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.jsx",
              lineNumber: 103,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 102,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV8("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Smart Organization" }, void 0, !1, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 117,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV8("p", { className: "text-gray-600", children: "Organize your content hierarchically with parent-child article relationships." }, void 0, !1, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 118,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 101,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 99,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "relative group", children: [
        /* @__PURE__ */ jsxDEV8("div", { className: "absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300" }, void 0, !1, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 126,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { className: "relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ jsxDEV8("div", { className: "h-12 w-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxDEV8(
            "svg",
            {
              className: "h-6 w-6 text-indigo-600",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /* @__PURE__ */ jsxDEV8(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.jsx",
                  lineNumber: 135,
                  columnNumber: 19
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.jsx",
              lineNumber: 129,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 128,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV8("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Secure Access" }, void 0, !1, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 143,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV8("p", { className: "text-gray-600", children: "Built-in authentication and session management to keep your content safe and secure." }, void 0, !1, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 144,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 127,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 125,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 71,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { className: "mt-24 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden", children: /* @__PURE__ */ jsxDEV8("div", { className: "px-8 py-12", children: [
      /* @__PURE__ */ jsxDEV8("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxDEV8("h2", { className: "text-3xl font-bold text-gray-900", children: "Start Managing Your Content Today" }, void 0, !1, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 155,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV8("p", { className: "mt-2 text-gray-600", children: "Join our growing community of content creators" }, void 0, !1, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 158,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 154,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV8("div", { className: "grid grid-cols-1 gap-8 sm:grid-cols-3", children: [
        /* @__PURE__ */ jsxDEV8("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxDEV8("div", { className: "text-4xl font-bold text-indigo-600", children: "100+" }, void 0, !1, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 164,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV8("div", { className: "mt-2 text-sm text-gray-600", children: "Articles Created" }, void 0, !1, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 165,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 163,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxDEV8("div", { className: "text-4xl font-bold text-purple-600", children: "50+" }, void 0, !1, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 168,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV8("div", { className: "mt-2 text-sm text-gray-600", children: "Active Users" }, void 0, !1, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 169,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 167,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxDEV8("div", { className: "text-4xl font-bold text-indigo-600", children: "24/7" }, void 0, !1, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 172,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV8("div", { className: "mt-2 text-sm text-gray-600", children: "Access Available" }, void 0, !1, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 173,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 171,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 162,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 153,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 152,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-QFVHDP3X.js", imports: ["/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-SZWRMOYJ.js", "/build/_shared/chunk-AOTOEBQB.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-RZATBE2E.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-BDCC2NO2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/articles.$id": { id: "routes/articles.$id", parentId: "root", path: "articles/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/articles.$id-HSY76WMD.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/articles._index": { id: "routes/articles._index", parentId: "root", path: "articles", index: !0, caseSensitive: void 0, module: "/build/routes/articles._index-P66ERGR2.js", imports: ["/build/_shared/chunk-YHYXNOOV.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/articles.new": { id: "routes/articles.new", parentId: "root", path: "articles/new", index: void 0, caseSensitive: void 0, module: "/build/routes/articles.new-WAKDAFZM.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/auth.login": { id: "routes/auth.login", parentId: "root", path: "auth/login", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.login-HKFGCZLY.js", imports: ["/build/_shared/chunk-7PMDLNJA.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-KW4ANYRT.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/auth.logout": { id: "routes/auth.logout", parentId: "root", path: "auth/logout", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.logout-7LLOD6TI.js", imports: ["/build/_shared/chunk-PH7FC7E6.js", "/build/_shared/chunk-KW4ANYRT.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/auth.register": { id: "routes/auth.register", parentId: "root", path: "auth/register", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.register-VO3UR2HV.js", imports: ["/build/_shared/chunk-7PMDLNJA.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-KW4ANYRT.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "d08daafe", hmr: { runtime: "/build/_shared/chunk-AOTOEBQB.js", timestamp: 1759510725686 }, url: "/build/manifest-D08DAAFE.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/articles._index": {
    id: "routes/articles._index",
    parentId: "root",
    path: "articles",
    index: !0,
    caseSensitive: void 0,
    module: articles_index_exports
  },
  "routes/auth.register": {
    id: "routes/auth.register",
    parentId: "root",
    path: "auth/register",
    index: void 0,
    caseSensitive: void 0,
    module: auth_register_exports
  },
  "routes/articles.$id": {
    id: "routes/articles.$id",
    parentId: "root",
    path: "articles/:id",
    index: void 0,
    caseSensitive: void 0,
    module: articles_id_exports
  },
  "routes/articles.new": {
    id: "routes/articles.new",
    parentId: "root",
    path: "articles/new",
    index: void 0,
    caseSensitive: void 0,
    module: articles_new_exports
  },
  "routes/auth.logout": {
    id: "routes/auth.logout",
    parentId: "root",
    path: "auth/logout",
    index: void 0,
    caseSensitive: void 0,
    module: auth_logout_exports
  },
  "routes/auth.login": {
    id: "routes/auth.login",
    parentId: "root",
    path: "auth/login",
    index: void 0,
    caseSensitive: void 0,
    module: auth_login_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
