import {
  require_supabase
} from "/build/_shared/chunk-7PMDLNJA.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_session
} from "/build/_shared/chunk-KW4ANYRT.js";
import {
  Form,
  Link,
  useActionData,
  useNavigation
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

// app/routes/auth.register.jsx
var import_node = __toESM(require_node());
var import_supabase = __toESM(require_supabase());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/auth.register.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/auth.register.jsx"
  );
  import.meta.hot.lastModified = "1759396025505.884";
}
function Register() {
  _s();
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-md w-full space-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto h-16 w-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3 hover:-rotate-6 transition-transform", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-10 w-10 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" }, void 0, false, {
        fileName: "app/routes/auth.register.jsx",
        lineNumber: 113,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/auth.register.jsx",
        lineNumber: 112,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/auth.register.jsx",
        lineNumber: 111,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-6 text-3xl font-extrabold text-gray-900 tracking-tight", children: "Create your account" }, void 0, false, {
        fileName: "app/routes/auth.register.jsx",
        lineNumber: 116,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-sm text-gray-600", children: "Join us and start managing your content" }, void 0, false, {
        fileName: "app/routes/auth.register.jsx",
        lineNumber: 119,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/auth.register.jsx",
      lineNumber: 110,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white py-8 px-6 shadow-xl rounded-2xl border border-gray-100", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-6", children: [
        actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-lg bg-red-50 border border-red-200 p-4 animate-shake", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5 text-red-400", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }, void 0, false, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 132,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 131,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 130,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-red-800", children: actionData.error }, void 0, false, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 136,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 135,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth.register.jsx",
          lineNumber: 129,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/auth.register.jsx",
          lineNumber: 128,
          columnNumber: 35
        }, this),
        actionData?.success && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-lg bg-green-50 border border-green-200 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5 text-green-400", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }, void 0, false, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 148,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 147,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 146,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-green-800", children: actionData.message }, void 0, false, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 152,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 151,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth.register.jsx",
          lineNumber: 145,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/auth.register.jsx",
          lineNumber: 144,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "name", className: "block text-sm font-semibold text-gray-700 mb-2", children: "Full name" }, void 0, false, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 161,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" }, void 0, false, {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 167,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 166,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 165,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "name", name: "name", type: "text", autoComplete: "name", required: true, className: "block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm", placeholder: "John Doe" }, void 0, false, {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 170,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 164,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth.register.jsx",
          lineNumber: 160,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-semibold text-gray-700 mb-2", children: "Email address" }, void 0, false, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 176,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" }, void 0, false, {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 182,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 181,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 180,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "email", name: "email", type: "email", autoComplete: "email", required: true, className: "block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm", placeholder: "you@example.com" }, void 0, false, {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 185,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 179,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth.register.jsx",
          lineNumber: 175,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", className: "block text-sm font-semibold text-gray-700 mb-2", children: "Password" }, void 0, false, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 191,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" }, void 0, false, {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 197,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 196,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 195,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "password", name: "password", type: "password", autoComplete: "new-password", required: true, className: "block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" }, void 0, false, {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 200,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 194,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-xs text-gray-500", children: "Must be at least 8 characters" }, void 0, false, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 202,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth.register.jsx",
          lineNumber: 190,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "confirmPassword", className: "block text-sm font-semibold text-gray-700 mb-2", children: "Confirm password" }, void 0, false, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 209,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }, void 0, false, {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 215,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 214,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 213,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "confirmPassword", name: "confirmPassword", type: "password", autoComplete: "new-password", required: true, className: "block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" }, void 0, false, {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 218,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 212,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth.register.jsx",
          lineNumber: 208,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center h-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "terms", name: "terms", type: "checkbox", required: true, className: "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer" }, void 0, false, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 225,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 224,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3 text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "terms", className: "text-gray-700 cursor-pointer", children: [
            "I agree to the",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/terms", className: "font-medium text-indigo-600 hover:text-indigo-500", children: "Terms of Service" }, void 0, false, {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 230,
              columnNumber: 19
            }, this),
            " ",
            "and",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/privacy", className: "font-medium text-indigo-600 hover:text-indigo-500", children: "Privacy Policy" }, void 0, false, {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 234,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 228,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 227,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth.register.jsx",
          lineNumber: 223,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, className: "w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]", children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }, void 0, false, {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 245,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" }, void 0, false, {
              fileName: "app/routes/auth.register.jsx",
              lineNumber: 246,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 244,
            columnNumber: 19
          }, this),
          "Creating account..."
        ] }, void 0, true, {
          fileName: "app/routes/auth.register.jsx",
          lineNumber: 243,
          columnNumber: 31
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          "Create account",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "ml-2 -mr-1 h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M14 5l7 7m0 0l-7 7m7-7H3" }, void 0, false, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 252,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 251,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth.register.jsx",
          lineNumber: 249,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/auth.register.jsx",
          lineNumber: 242,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/auth.register.jsx",
        lineNumber: 126,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full border-t border-gray-300" }, void 0, false, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 262,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 261,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex justify-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-2 bg-white text-gray-500", children: "Already have an account?" }, void 0, false, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 265,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/auth.register.jsx",
            lineNumber: 264,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth.register.jsx",
          lineNumber: 260,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/auth/login", className: "w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all", children: "Sign in instead" }, void 0, false, {
          fileName: "app/routes/auth.register.jsx",
          lineNumber: 272,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/auth.register.jsx",
          lineNumber: 271,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/auth.register.jsx",
        lineNumber: 259,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/auth.register.jsx",
      lineNumber: 125,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center text-xs text-gray-500", children: "Protected by industry-standard encryption and security measures" }, void 0, false, {
      fileName: "app/routes/auth.register.jsx",
      lineNumber: 280,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/auth.register.jsx",
    lineNumber: 108,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/auth.register.jsx",
    lineNumber: 107,
    columnNumber: 10
  }, this);
}
_s(Register, "e3rMULficn7ldQYYArv00m53mwQ=", false, function() {
  return [useActionData, useNavigation];
});
_c = Register;
var _c;
$RefreshReg$(_c, "Register");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Register as default
};
//# sourceMappingURL=/build/routes/auth.register-RZSZGTBY.js.map
