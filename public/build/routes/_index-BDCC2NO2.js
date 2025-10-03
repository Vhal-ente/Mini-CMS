import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  Link
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

// app/routes/_index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.jsx"
  );
  import.meta.hot.lastModified = "1759510716818.997";
}
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex items-center justify-center space-x-2 mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-16 w-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl transform -rotate-6 hover:rotate-0 transition-transform", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-10 w-10 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 31,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 30,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 29,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-5xl font-extrabold text-gray-900 tracking-tight sm:text-6xl mb-6", children: [
        "Welcome to",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent", children: "Mini CMS" }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 38,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 36,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "max-w-2xl mx-auto text-xl text-gray-600 mb-12", children: "A simple and elegant content management system. Create, organize, and manage your articles with ease." }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 43,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center space-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/auth/login", className: "inline-flex items-center px-8 py-4 border border-transparent text-base font-semibold rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl", children: [
          "Get Started",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "ml-2 w-5 h-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 7l5 5m0 0l-5 5m5-5H6" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 52,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 51,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 49,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/articles", className: "inline-flex items-center px-8 py-4 border border-gray-300 text-base font-semibold rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-all shadow-md hover:shadow-lg", children: "Browse Articles" }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 56,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 48,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300" }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 66,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-12 w-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-6 w-6 text-indigo-600", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 70,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 69,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 68,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Easy Content Creation" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 73,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Create and edit articles with a simple, intuitive interface designed for productivity." }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 74,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 67,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 65,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300" }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 82,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-6 w-6 text-purple-600", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 86,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 85,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 84,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Smart Organization" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 89,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Organize your content hierarchically with parent-child article relationships." }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 90,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 83,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 81,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative group", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300" }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 98,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-12 w-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-6 w-6 text-indigo-600", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 102,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 101,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 100,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Secure Access" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 105,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Built-in authentication and session management to keep your content safe and secure." }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 106,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 99,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 97,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 63,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-24 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-8 py-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold text-gray-900", children: "Start Managing Your Content Today" }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 117,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-gray-600", children: "Join our growing community of content creators" }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 120,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 116,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-8 sm:grid-cols-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-4xl font-bold text-indigo-600", children: "100+" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 126,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-sm text-gray-600", children: "Articles Created" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 127,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 125,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-4xl font-bold text-purple-600", children: "50+" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 130,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-sm text-gray-600", children: "Active Users" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 131,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 129,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-4xl font-bold text-indigo-600", children: "24/7" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 134,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-sm text-gray-600", children: "Access Available" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 135,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 133,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 124,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 115,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 114,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-BDCC2NO2.js.map
