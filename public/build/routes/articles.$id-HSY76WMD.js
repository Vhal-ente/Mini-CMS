import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useNavigation
} from "/build/_shared/chunk-SZWRMOYJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-AOTOEBQB.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/articles.$id.jsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/articles.$id.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/articles.$id.jsx"
  );
}
function EditArticlePage() {
  _s();
  const {
    article,
    potentialParents
  } = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [Quill, setQuill] = (0, import_react2.useState)(null);
  const [content, setContent] = (0, import_react2.useState)(article?.content || "");
  (0, import_react2.useEffect)(() => {
    import("/build/_shared/lib-7O64GV6Z.js").then((mod) => setQuill(() => mod.default));
  }, []);
  (0, import_react2.useEffect)(() => {
    if (typeof window !== "undefined") {
      import("/build/_shared/quill.snow-K56RVEBK.js");
    }
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/articles`, className: "inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-4 h-4 mr-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }, void 0, false, {
          fileName: "app/routes/articles.$id.jsx",
          lineNumber: 163,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/articles.$id.jsx",
          lineNumber: 162,
          columnNumber: 13
        }, this),
        "Back to Article"
      ] }, void 0, true, {
        fileName: "app/routes/articles.$id.jsx",
        lineNumber: 160,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-12 w-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-7 w-7 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" }, void 0, false, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 171,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 170,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 169,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900", children: "Edit Article" }, void 0, false, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 175,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600 mt-1", children: "Update the article information and content" }, void 0, false, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 176,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 174,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/articles.$id.jsx",
          lineNumber: 168,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/articles", className: "hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-4 h-4 mr-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }, void 0, false, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 181,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 180,
            columnNumber: 15
          }, this),
          "All Articles"
        ] }, void 0, true, {
          fileName: "app/routes/articles.$id.jsx",
          lineNumber: 179,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/articles.$id.jsx",
        lineNumber: 167,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/articles.$id.jsx",
      lineNumber: 159,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "p-8", children: [
      actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6 rounded-lg bg-red-50 border border-red-200 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-red-800", children: actionData.error }, void 0, false, {
        fileName: "app/routes/articles.$id.jsx",
        lineNumber: 193,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/articles.$id.jsx",
        lineNumber: 192,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/articles.$id.jsx",
        lineNumber: 191,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/articles.$id.jsx",
        lineNumber: 190,
        columnNumber: 35
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "title", className: "block text-sm font-semibold text-gray-700 mb-2", children: [
            "Article Title",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-red-500 ml-1", children: "*" }, void 0, false, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 202,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 200,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }, void 0, false, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 207,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 206,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 205,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "title", name: "title", type: "text", required: true, defaultValue: article?.title, className: "block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm", placeholder: "Enter article title" }, void 0, false, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 210,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 204,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/articles.$id.jsx",
          lineNumber: 199,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "slug", className: "block text-sm font-semibold text-gray-700 mb-2", children: [
            "URL Slug",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-red-500 ml-1", children: "*" }, void 0, false, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 218,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 216,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" }, void 0, false, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 223,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 222,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 221,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "slug", name: "slug", type: "text", required: true, defaultValue: article?.slug, pattern: "[a-z0-9]+(?:-[a-z0-9]+)*", className: "block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm font-mono", placeholder: "article-url-slug" }, void 0, false, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 226,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 220,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-xs text-gray-500", children: "Lowercase letters, numbers, and hyphens only" }, void 0, false, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 229,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/articles.$id.jsx",
          lineNumber: 215,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "parentId", className: "block text-sm font-semibold text-gray-700 mb-2", children: "Parent Article" }, void 0, false, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 233,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" }, void 0, false, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 237,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 236,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 235,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "parentId", name: "parentId", defaultValue: article?.parentId || "", className: "block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm appearance-none cursor-pointer", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "No parent (Top-level article)" }, void 0, false, {
                fileName: "app/routes/articles.$id.jsx",
                lineNumber: 242,
                columnNumber: 21
              }, this),
              potentialParents.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: p.id, children: p.title }, p.id, false, {
                fileName: "app/routes/articles.$id.jsx",
                lineNumber: 243,
                columnNumber: 48
              }, this))
            ] }, void 0, true, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 240,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }, void 0, false, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 247,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 246,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 245,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 234,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/articles.$id.jsx",
          lineNumber: 232,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "content", className: "block text-sm font-semibold text-gray-700 mb-2", children: "Content" }, void 0, false, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 254,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent transition-all", children: Quill ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Quill, { theme: "snow", value: content, onChange: setContent, className: "bg-white", modules: {
            toolbar: [[{
              header: [1, 2, 3, false]
            }], ["bold", "italic", "underline", "strike"], [{
              list: "ordered"
            }, {
              list: "bullet"
            }], ["blockquote", "code-block"], ["link"], ["clean"]]
          } }, void 0, false, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 256,
            columnNumber: 28
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "content", value: content, onChange: (e) => setContent(e.target.value), rows: 12, className: "block w-full px-3 py-3 border-0 leading-5 bg-white placeholder-gray-400 focus:outline-none sm:text-sm resize-none", placeholder: "Write your article content here..." }, void 0, false, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 264,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 255,
            columnNumber: 17
          }, this),
          Quill && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "content", value: content }, void 0, false, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 268,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-xs text-gray-500", children: Quill ? "Rich text editor loaded" : "Loading rich text editor..." }, void 0, false, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 270,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/articles.$id.jsx",
          lineNumber: 253,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/articles.$id.jsx",
        lineNumber: 198,
        columnNumber: 13
      }, this),
      article.children && article.children.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-blue-800", children: [
        "This article has ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: article.children.length }, void 0, false, {
          fileName: "app/routes/articles.$id.jsx",
          lineNumber: 278,
          columnNumber: 40
        }, this),
        " child article",
        article.children.length !== 1 ? "s" : ""
      ] }, void 0, true, {
        fileName: "app/routes/articles.$id.jsx",
        lineNumber: 277,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/articles.$id.jsx",
        lineNumber: 276,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/articles.$id.jsx",
        lineNumber: 275,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/articles.$id.jsx",
        lineNumber: 274,
        columnNumber: 65
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 flex items-center justify-between pt-6 border-t border-gray-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/articles", className: "inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-4 h-4 mr-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }, void 0, false, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 287,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 286,
            columnNumber: 17
          }, this),
          "Cancel"
        ] }, void 0, true, {
          fileName: "app/routes/articles.$id.jsx",
          lineNumber: 285,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, className: "inline-flex items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]", children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }, void 0, false, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 297,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" }, void 0, false, {
              fileName: "app/routes/articles.$id.jsx",
              lineNumber: 298,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 296,
            columnNumber: 23
          }, this),
          "Saving Changes..."
        ] }, void 0, true, {
          fileName: "app/routes/articles.$id.jsx",
          lineNumber: 295,
          columnNumber: 35
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-5 h-5 mr-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }, void 0, false, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 303,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 302,
            columnNumber: 23
          }, this),
          "Save Changes"
        ] }, void 0, true, {
          fileName: "app/routes/articles.$id.jsx",
          lineNumber: 301,
          columnNumber: 27
        }, this) }, void 0, false, {
          fileName: "app/routes/articles.$id.jsx",
          lineNumber: 293,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/articles.$id.jsx",
          lineNumber: 292,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/articles.$id.jsx",
        lineNumber: 284,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/articles.$id.jsx",
      lineNumber: 189,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/articles.$id.jsx",
      lineNumber: 188,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 bg-gray-50 border border-gray-200 rounded-xl p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-semibold text-gray-700 mb-3", children: "Article Information" }, void 0, false, {
        fileName: "app/routes/articles.$id.jsx",
        lineNumber: 314,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-500", children: "Created:" }, void 0, false, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 317,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-2 text-gray-900 font-medium", children: new Date(article.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          }) }, void 0, false, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 318,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/articles.$id.jsx",
          lineNumber: 316,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-500", children: "Last Updated:" }, void 0, false, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 327,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-2 text-gray-900 font-medium", children: new Date(article.updatedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          }) }, void 0, false, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 328,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/articles.$id.jsx",
          lineNumber: 326,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-500", children: "Article ID:" }, void 0, false, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 337,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-2 text-gray-900 font-mono text-xs", children: article.id }, void 0, false, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 338,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/articles.$id.jsx",
          lineNumber: 336,
          columnNumber: 13
        }, this),
        article.parent && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-500", children: "Parent:" }, void 0, false, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 341,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/articles/${article.parent.id}`, className: "ml-2 text-indigo-600 hover:text-indigo-500 font-medium", children: article.parent.title }, void 0, false, {
            fileName: "app/routes/articles.$id.jsx",
            lineNumber: 342,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/articles.$id.jsx",
          lineNumber: 340,
          columnNumber: 32
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/articles.$id.jsx",
        lineNumber: 315,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/articles.$id.jsx",
      lineNumber: 313,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/articles.$id.jsx",
    lineNumber: 158,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/articles.$id.jsx",
    lineNumber: 157,
    columnNumber: 10
  }, this);
}
_s(EditArticlePage, "mhWy2uwhwr8o3LgTbPK98t576hE=", false, function() {
  return [useLoaderData, useActionData, useNavigation];
});
_c = EditArticlePage;
var _c;
$RefreshReg$(_c, "EditArticlePage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  EditArticlePage as default
};
//# sourceMappingURL=/build/routes/articles.$id-HSY76WMD.js.map
