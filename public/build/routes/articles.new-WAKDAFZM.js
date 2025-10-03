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

// app/routes/articles.new.jsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/articles.new.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/articles.new.jsx"
  );
  import.meta.hot.lastModified = "1759510716821.1877";
}
function NewArticle() {
  _s();
  const actionData = useActionData();
  const {
    parents
  } = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const safeParents = parents ?? [];
  const [title, setTitle] = (0, import_react2.useState)("");
  const [slug, setSlug] = (0, import_react2.useState)("");
  const [autoSlug, setAutoSlug] = (0, import_react2.useState)(true);
  (0, import_react2.useEffect)(() => {
    if (autoSlug && title) {
      const generatedSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
      setSlug(generatedSlug);
    }
  }, [title, autoSlug]);
  const handleSlugChange = (e) => {
    setAutoSlug(false);
    setSlug(e.target.value);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-3xl mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/articles", className: "inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-4 h-4 mr-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }, void 0, false, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 124,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 123,
          columnNumber: 13
        }, this),
        "Back to Articles"
      ] }, void 0, true, {
        fileName: "app/routes/articles.new.jsx",
        lineNumber: 122,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-12 w-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-7 w-7 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 4v16m8-8H4" }, void 0, false, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 131,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 130,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 129,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900", children: "Create New Article" }, void 0, false, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 135,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600 mt-1", children: "Add a new article to your content management system" }, void 0, false, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 136,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 134,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/articles.new.jsx",
        lineNumber: 128,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/articles.new.jsx",
      lineNumber: 121,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "p-8", children: [
      actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6 rounded-lg bg-red-50 border border-red-200 p-4 animate-shake", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5 text-red-400", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }, void 0, false, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 151,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 150,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 149,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-red-800", children: actionData.error }, void 0, false, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 155,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 154,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/articles.new.jsx",
        lineNumber: 148,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/articles.new.jsx",
        lineNumber: 147,
        columnNumber: 35
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "title", className: "block text-sm font-semibold text-gray-700 mb-2", children: [
            "Article Title",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-red-500 ml-1", children: "*" }, void 0, false, {
              fileName: "app/routes/articles.new.jsx",
              lineNumber: 165,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 163,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }, void 0, false, {
              fileName: "app/routes/articles.new.jsx",
              lineNumber: 170,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/articles.new.jsx",
              lineNumber: 169,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/articles.new.jsx",
              lineNumber: 168,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "title", name: "title", type: "text", required: true, value: title, onChange: (e) => setTitle(e.target.value), className: "block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm", placeholder: "Enter article title" }, void 0, false, {
              fileName: "app/routes/articles.new.jsx",
              lineNumber: 173,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 167,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-xs text-gray-500", children: "This will be displayed as the main heading" }, void 0, false, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 175,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 162,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "slug", className: "block text-sm font-semibold text-gray-700 mb-2", children: [
            "URL Slug",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-red-500 ml-1", children: "*" }, void 0, false, {
              fileName: "app/routes/articles.new.jsx",
              lineNumber: 184,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 182,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" }, void 0, false, {
              fileName: "app/routes/articles.new.jsx",
              lineNumber: 189,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/articles.new.jsx",
              lineNumber: 188,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/articles.new.jsx",
              lineNumber: 187,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "slug", name: "slug", type: "text", required: true, value: slug, onChange: handleSlugChange, pattern: "[a-z0-9]+(?:-[a-z0-9]+)*", className: "block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm font-mono", placeholder: "article-url-slug" }, void 0, false, {
              fileName: "app/routes/articles.new.jsx",
              lineNumber: 192,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 186,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-xs text-gray-500", children: autoSlug ? "Auto-generated from title (edit to customize)" : "Lowercase letters, numbers, and hyphens only" }, void 0, false, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 194,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 181,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "content", className: "block text-sm font-semibold text-gray-700 mb-2", children: "Content" }, void 0, false, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 201,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { id: "content", name: "content", rows: 8, className: "block w-full px-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm resize-none", placeholder: "Write your article content here..." }, void 0, false, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 205,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 204,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-xs text-gray-500", children: "Optional - You can add or edit content later" }, void 0, false, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 207,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 200,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "parentId", className: "block text-sm font-semibold text-gray-700 mb-2", children: "Parent Article" }, void 0, false, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 214,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" }, void 0, false, {
              fileName: "app/routes/articles.new.jsx",
              lineNumber: 220,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/articles.new.jsx",
              lineNumber: 219,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/articles.new.jsx",
              lineNumber: 218,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "parentId", name: "parentId", className: "block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm appearance-none cursor-pointer", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "No parent (Top-level article)" }, void 0, false, {
                fileName: "app/routes/articles.new.jsx",
                lineNumber: 224,
                columnNumber: 21
              }, this),
              safeParents.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: p.id, children: p.title }, p.id, false, {
                fileName: "app/routes/articles.new.jsx",
                lineNumber: 225,
                columnNumber: 43
              }, this))
            ] }, void 0, true, {
              fileName: "app/routes/articles.new.jsx",
              lineNumber: 223,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }, void 0, false, {
              fileName: "app/routes/articles.new.jsx",
              lineNumber: 231,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/articles.new.jsx",
              lineNumber: 230,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/articles.new.jsx",
              lineNumber: 229,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 217,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-xs text-gray-500", children: safeParents.length > 0 ? "Organize articles in a hierarchy" : "No parent articles available yet" }, void 0, false, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 235,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 213,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/articles.new.jsx",
        lineNumber: 160,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 flex items-center justify-between pt-6 border-t border-gray-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/articles", className: "inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-4 h-4 mr-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }, void 0, false, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 245,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 244,
            columnNumber: 17
          }, this),
          "Cancel"
        ] }, void 0, true, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 243,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, className: "inline-flex items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]", children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }, void 0, false, {
              fileName: "app/routes/articles.new.jsx",
              lineNumber: 253,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" }, void 0, false, {
              fileName: "app/routes/articles.new.jsx",
              lineNumber: 254,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 252,
            columnNumber: 21
          }, this),
          "Creating Article..."
        ] }, void 0, true, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 251,
          columnNumber: 33
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-5 h-5 mr-2", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }, void 0, false, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 259,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 258,
            columnNumber: 21
          }, this),
          "Create Article"
        ] }, void 0, true, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 257,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 250,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/articles.new.jsx",
        lineNumber: 242,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/articles.new.jsx",
      lineNumber: 145,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/articles.new.jsx",
      lineNumber: 144,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 bg-indigo-50 border border-indigo-100 rounded-xl p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5 text-indigo-600", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }, void 0, false, {
        fileName: "app/routes/articles.new.jsx",
        lineNumber: 273,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/articles.new.jsx",
        lineNumber: 272,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/articles.new.jsx",
        lineNumber: 271,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-semibold text-indigo-900", children: "Tips for creating articles" }, void 0, false, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 277,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 text-sm text-indigo-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "list-disc list-inside space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Use clear, descriptive titles for better organization" }, void 0, false, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 280,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "URL slugs should be unique and SEO-friendly" }, void 0, false, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 281,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Parent articles help create a content hierarchy" }, void 0, false, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 282,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Content can be added or edited after creation" }, void 0, false, {
            fileName: "app/routes/articles.new.jsx",
            lineNumber: 283,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 279,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/articles.new.jsx",
          lineNumber: 278,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/articles.new.jsx",
        lineNumber: 276,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/articles.new.jsx",
      lineNumber: 270,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/articles.new.jsx",
      lineNumber: 269,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/articles.new.jsx",
    lineNumber: 119,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/articles.new.jsx",
    lineNumber: 118,
    columnNumber: 10
  }, this);
}
_s(NewArticle, "dopwzZtFX4dB6Ir5toq3CIGSY2Y=", false, function() {
  return [useActionData, useLoaderData, useNavigation];
});
_c = NewArticle;
var _c;
$RefreshReg$(_c, "NewArticle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  NewArticle as default
};
//# sourceMappingURL=/build/routes/articles.new-WAKDAFZM.js.map
