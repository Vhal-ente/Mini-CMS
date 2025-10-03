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

// app/routes/auth.login.jsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/auth.login.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/auth.login.jsx"
  );
  import.meta.hot.lastModified = "1759511164977.8982";
}
function Login() {
  _s();
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-md w-full space-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto h-16 w-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-6 transition-transform", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-10 w-10 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" }, void 0, false, {
        fileName: "app/routes/auth.login.jsx",
        lineNumber: 91,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/auth.login.jsx",
        lineNumber: 90,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/auth.login.jsx",
        lineNumber: 89,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-6 text-3xl font-extrabold text-gray-900 tracking-tight", children: "Welcome back" }, void 0, false, {
        fileName: "app/routes/auth.login.jsx",
        lineNumber: 94,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-sm text-gray-600", children: "Sign in to manage your content" }, void 0, false, {
        fileName: "app/routes/auth.login.jsx",
        lineNumber: 97,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/auth.login.jsx",
      lineNumber: 88,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white py-8 px-6 shadow-xl rounded-2xl border border-gray-100", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-6", children: [
        actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-lg bg-red-50 border border-red-200 p-4 animate-shake", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5 text-red-400", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }, void 0, false, {
            fileName: "app/routes/auth.login.jsx",
            lineNumber: 110,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/auth.login.jsx",
            lineNumber: 109,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/auth.login.jsx",
            lineNumber: 108,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-red-800", children: actionData.error }, void 0, false, {
            fileName: "app/routes/auth.login.jsx",
            lineNumber: 114,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/auth.login.jsx",
            lineNumber: 113,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth.login.jsx",
          lineNumber: 107,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/auth.login.jsx",
          lineNumber: 106,
          columnNumber: 35
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-semibold text-gray-700 mb-2", children: "Email address" }, void 0, false, {
            fileName: "app/routes/auth.login.jsx",
            lineNumber: 123,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" }, void 0, false, {
              fileName: "app/routes/auth.login.jsx",
              lineNumber: 129,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/auth.login.jsx",
              lineNumber: 128,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/auth.login.jsx",
              lineNumber: 127,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "email", name: "email", type: "email", autoComplete: "email", required: true, className: "block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm", placeholder: "you@example.com" }, void 0, false, {
              fileName: "app/routes/auth.login.jsx",
              lineNumber: 132,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/auth.login.jsx",
            lineNumber: 126,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth.login.jsx",
          lineNumber: 122,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", className: "block text-sm font-semibold text-gray-700 mb-2", children: "Password" }, void 0, false, {
            fileName: "app/routes/auth.login.jsx",
            lineNumber: 138,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" }, void 0, false, {
              fileName: "app/routes/auth.login.jsx",
              lineNumber: 144,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/auth.login.jsx",
              lineNumber: 143,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/auth.login.jsx",
              lineNumber: 142,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "password", name: "password", type: "password", autoComplete: "current-password", required: true, className: "block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" }, void 0, false, {
              fileName: "app/routes/auth.login.jsx",
              lineNumber: 147,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/auth.login.jsx",
            lineNumber: 141,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth.login.jsx",
          lineNumber: 137,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "remember-me", name: "remember-me", type: "checkbox", className: "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer" }, void 0, false, {
              fileName: "app/routes/auth.login.jsx",
              lineNumber: 154,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "remember-me", className: "ml-2 block text-sm text-gray-700 cursor-pointer", children: "Remember me" }, void 0, false, {
              fileName: "app/routes/auth.login.jsx",
              lineNumber: 155,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/auth.login.jsx",
            lineNumber: 153,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/auth/forgot-password", className: "font-medium text-indigo-600 hover:text-indigo-500 transition-colors", children: "Forgot password?" }, void 0, false, {
            fileName: "app/routes/auth.login.jsx",
            lineNumber: 161,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/auth.login.jsx",
            lineNumber: 160,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth.login.jsx",
          lineNumber: 152,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, className: "w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]", children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }, void 0, false, {
              fileName: "app/routes/auth.login.jsx",
              lineNumber: 171,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" }, void 0, false, {
              fileName: "app/routes/auth.login.jsx",
              lineNumber: 172,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/auth.login.jsx",
            lineNumber: 170,
            columnNumber: 19
          }, this),
          "Signing in..."
        ] }, void 0, true, {
          fileName: "app/routes/auth.login.jsx",
          lineNumber: 169,
          columnNumber: 31
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          "Sign in",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "ml-2 -mr-1 h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M14 5l7 7m0 0l-7 7m7-7H3" }, void 0, false, {
            fileName: "app/routes/auth.login.jsx",
            lineNumber: 178,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/auth.login.jsx",
            lineNumber: 177,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth.login.jsx",
          lineNumber: 175,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/auth.login.jsx",
          lineNumber: 168,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/auth.login.jsx",
        lineNumber: 104,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full border-t border-gray-300" }, void 0, false, {
            fileName: "app/routes/auth.login.jsx",
            lineNumber: 188,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/auth.login.jsx",
            lineNumber: 187,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex justify-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-2 bg-white text-gray-500", children: "Don't have an account?" }, void 0, false, {
            fileName: "app/routes/auth.login.jsx",
            lineNumber: 191,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/auth.login.jsx",
            lineNumber: 190,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth.login.jsx",
          lineNumber: 186,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/auth/register", className: "w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all", children: "Create new account" }, void 0, false, {
          fileName: "app/routes/auth.login.jsx",
          lineNumber: 198,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/auth.login.jsx",
          lineNumber: 197,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/auth.login.jsx",
        lineNumber: 185,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/auth.login.jsx",
      lineNumber: 103,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center text-xs text-gray-500", children: [
      "By signing in, you agree to our",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/terms", className: "text-indigo-600 hover:text-indigo-500 font-medium", children: "Terms of Service" }, void 0, false, {
        fileName: "app/routes/auth.login.jsx",
        lineNumber: 208,
        columnNumber: 11
      }, this),
      " ",
      "and",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/privacy", className: "text-indigo-600 hover:text-indigo-500 font-medium", children: "Privacy Policy" }, void 0, false, {
        fileName: "app/routes/auth.login.jsx",
        lineNumber: 212,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/auth.login.jsx",
      lineNumber: 206,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/auth.login.jsx",
    lineNumber: 86,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/auth.login.jsx",
    lineNumber: 85,
    columnNumber: 10
  }, this);
}
_s(Login, "e3rMULficn7ldQYYArv00m53mwQ=", false, function() {
  return [useActionData, useNavigation];
});
_c = Login;
var _c;
$RefreshReg$(_c, "Login");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Login as default
};
//# sourceMappingURL=/build/routes/auth.login-SLEFX7KF.js.map
