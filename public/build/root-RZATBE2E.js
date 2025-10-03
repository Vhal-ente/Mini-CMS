import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useLocation
} from "/build/_shared/chunk-SZWRMOYJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-AOTOEBQB.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-KBBIQYVV.css";

// app/root.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.jsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: tailwind_default
}];
function App() {
  _s();
  const location = useLocation();
  const isActive = (path) => {
    if (path === "/articles") {
      return location.pathname === path;
    }
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { className: "h-full bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 text-gray-900 antialiased", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 overflow-hidden pointer-events-none", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 47,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 48,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 49,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative min-h-full flex flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200/50 shadow-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between h-16", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-10 w-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-6 transition-transform", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-6 w-6 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" }, void 0, false, {
              fileName: "app/root.jsx",
              lineNumber: 62,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/root.jsx",
              lineNumber: 60,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/root.jsx",
              lineNumber: 59,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent", children: "Mini CMS" }, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 67,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-500", children: "Content Management" }, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 70,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/root.jsx",
              lineNumber: 66,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/root.jsx",
            lineNumber: 58,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "flex items-center space-x-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/articles", className: `px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive("/articles") ? "bg-indigo-100 text-indigo-700 shadow-sm" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" }, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 81,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 79,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Articles" }, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 84,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/root.jsx",
              lineNumber: 78,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/root.jsx",
              lineNumber: 76,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/articles/new", className: `px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive("/articles/new") ? "bg-indigo-100 text-indigo-700 shadow-sm" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 4v16m8-8H4" }, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 92,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 90,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "New Article" }, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 95,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/root.jsx",
              lineNumber: 89,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/root.jsx",
              lineNumber: 87,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-6 w-px bg-gray-300 mx-2" }, void 0, false, {
              fileName: "app/root.jsx",
              lineNumber: 98,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/auth/login", className: "px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-md hover:shadow-lg transition-all transform hover:scale-105", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" }, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 104,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 102,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Sign in" }, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 107,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/root.jsx",
              lineNumber: 101,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/root.jsx",
              lineNumber: 99,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/root.jsx",
            lineNumber: 75,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/root.jsx",
          lineNumber: 56,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 55,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 54,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 min-h-[calc(100vh-12rem)] p-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 118,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 117,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 116,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { className: "backdrop-blur-md bg-white/60 border-t border-gray-200/50 mt-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: [
            "\xA9 2025 Mini CMS. Built with",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-red-500", children: "\u2665" }, void 0, false, {
              fileName: "app/root.jsx",
              lineNumber: 128,
              columnNumber: 19
            }, this),
            " using Remix & Supabase"
          ] }, void 0, true, {
            fileName: "app/root.jsx",
            lineNumber: 126,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "text-gray-500 hover:text-indigo-600 transition-colors", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Documentation" }, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 133,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" }, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 136,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 134,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/root.jsx",
              lineNumber: 131,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "text-gray-500 hover:text-indigo-600 transition-colors", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "GitHub" }, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 141,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z", clipRule: "evenodd" }, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 144,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 142,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/root.jsx",
              lineNumber: 139,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "text-gray-500 hover:text-indigo-600 transition-colors", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Twitter" }, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 150,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" }, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 153,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 151,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/root.jsx",
              lineNumber: 148,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/root.jsx",
            lineNumber: 130,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/root.jsx",
          lineNumber: 125,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 124,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/root.jsx",
          lineNumber: 123,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 162,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 163,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { children: `
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
        ` }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 166,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_s(App, "pkHmaVRPskBaU4tMJuJJpV42k1I=", false, function() {
  return [useLocation];
});
_c = App;
var _c;
$RefreshReg$(_c, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-RZATBE2E.js.map
