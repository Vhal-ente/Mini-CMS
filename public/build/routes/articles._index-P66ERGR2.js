import {
  require_db
} from "/build/_shared/chunk-YHYXNOOV.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  Link,
  useLoaderData,
  useSearchParams
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

// app/routes/articles._index.jsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/articles._index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/articles._index.jsx"
  );
  import.meta.hot.lastModified = "1759510716820.2449";
}
function MyArticles() {
  _s();
  const {
    articles,
    total,
    page,
    pageSize,
    totalPages
  } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = (0, import_react2.useState)("all");
  const [searchTerm, setSearchTerm] = (0, import_react2.useState)(searchParams.get("search") || "");
  const [list, setList] = (0, import_react2.useState)(articles || []);
  const getStatusColor = (index) => {
    const colors = ["blue", "yellow", "purple", "orange"];
    return colors[index % colors.length];
  };
  const getStatusBadge = (color) => {
    const badges = {
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-800",
        label: "IEP"
      },
      yellow: {
        bg: "bg-yellow-100",
        text: "text-yellow-800",
        label: "ALP"
      },
      purple: {
        bg: "bg-purple-100",
        text: "text-purple-800",
        label: "MLP"
      },
      orange: {
        bg: "bg-orange-100",
        text: "text-orange-800",
        label: "504"
      }
    };
    return badges[color] || badges.blue;
  };
  const getTimeColor = (index) => {
    if (index === 0)
      return "text-red-600";
    if (index <= 2)
      return "text-orange-500";
    return "text-yellow-600";
  };
  const getRelativeTime = (date, index) => {
    const times = ["Past Due", "In 8 days", "In 11 days", "In 19 days", "In 28 days", "In 31 days"];
    return times[index % times.length];
  };
  const handleSearch = (value) => {
    setSearchTerm(value);
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set("search", value);
    } else {
      newParams.delete("search");
    }
    newParams.set("page", "1");
    setSearchParams(newParams);
  };
  const changePage = (newPage) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", newPage.toString());
    setSearchParams(newParams);
  };
  const changePageSize = (newSize) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("pageSize", newSize.toString());
    newParams.set("page", "1");
    setSearchParams(newParams);
  };
  async function handleDelete(id) {
    const ok = window.confirm("Delete this article? This action cannot be undone.");
    if (!ok)
      return;
    try {
      const res = await fetch(`/articles/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json"
        }
      });
      if (res.ok) {
        setList((prev) => prev.filter((a) => a.id !== id));
      } else {
        const payload = await res.json().catch(() => ({}));
        alert(payload.error || "Delete failed");
      }
    } catch (e) {
      alert("Delete request failed");
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-50 p-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold text-gray-900 mb-6", children: "My Articles" }, void 0, false, {
        fileName: "app/routes/articles._index.jsx",
        lineNumber: 173,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-6 border-b border-gray-200 mb-6", children: [{
        id: "upcoming",
        label: "Upcoming"
      }, {
        id: "draft",
        label: "Draft"
      }, {
        id: "amendment",
        label: "Amendment"
      }, {
        id: "active",
        label: "Active"
      }, {
        id: "all",
        label: "All (Most Recent)"
      }].map((tab) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setActiveTab(tab.id), className: `pb-3 px-1 font-medium text-sm transition-colors ${activeTab === tab.id ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-gray-900"}`, children: tab.label }, tab.id, false, {
        fileName: "app/routes/articles._index.jsx",
        lineNumber: 191,
        columnNumber: 25
      }, this)) }, void 0, false, {
        fileName: "app/routes/articles._index.jsx",
        lineNumber: 175,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", value: searchTerm, onChange: (e) => handleSearch(e.target.value), placeholder: "Filter by title or category...", className: "w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" }, void 0, false, {
        fileName: "app/routes/articles._index.jsx",
        lineNumber: 197,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/articles._index.jsx",
        lineNumber: 196,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/articles._index.jsx",
      lineNumber: 172,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Title" }, void 0, false, {
            fileName: "app/routes/articles._index.jsx",
            lineNumber: 205,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Date" }, void 0, false, {
            fileName: "app/routes/articles._index.jsx",
            lineNumber: 206,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Updated" }, void 0, false, {
            fileName: "app/routes/articles._index.jsx",
            lineNumber: 207,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Category" }, void 0, false, {
            fileName: "app/routes/articles._index.jsx",
            lineNumber: 208,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Status" }, void 0, false, {
            fileName: "app/routes/articles._index.jsx",
            lineNumber: 209,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Actions" }, void 0, false, {
            fileName: "app/routes/articles._index.jsx",
            lineNumber: 210,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/articles._index.jsx",
          lineNumber: 204,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/articles._index.jsx",
          lineNumber: 203,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { className: "bg-white divide-y divide-gray-200", children: list.map((article, index) => {
          const statusColor = getStatusColor(index);
          const statusBadge = getStatusBadge(statusColor);
          const relativeTime = getRelativeTime(article.createdAt, index);
          const timeColor = getTimeColor(index);
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "hover:bg-gray-50", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm font-medium text-gray-900", children: article.title }, void 0, false, {
                fileName: "app/routes/articles._index.jsx",
                lineNumber: 222,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500", children: [
                ((article.content || "") + "").substring(0, 80),
                "..."
              ] }, void 0, true, {
                fileName: "app/routes/articles._index.jsx",
                lineNumber: 223,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 221,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `text-sm font-medium ${timeColor}`, children: relativeTime }, void 0, false, {
                fileName: "app/routes/articles._index.jsx",
                lineNumber: 227,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500", children: new Date(article.createdAt).toLocaleDateString("en-US", {
                month: "numeric",
                day: "numeric",
                year: "numeric"
              }) }, void 0, false, {
                fileName: "app/routes/articles._index.jsx",
                lineNumber: 228,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 226,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-1", children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: `w-3 h-3 ${i < index % 5 ? "text-blue-500" : "text-gray-300"}`, fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "10", cy: "10", r: "10" }, void 0, false, {
                fileName: "app/routes/articles._index.jsx",
                lineNumber: 240,
                columnNumber: 29
              }, this) }, i, false, {
                fileName: "app/routes/articles._index.jsx",
                lineNumber: 239,
                columnNumber: 54
              }, this)) }, void 0, false, {
                fileName: "app/routes/articles._index.jsx",
                lineNumber: 238,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500 mt-1", children: [
                "Last Update: ",
                index === 0 ? "less than a minute ago" : `${index + 1} months ago`
              ] }, void 0, true, {
                fileName: "app/routes/articles._index.jsx",
                lineNumber: 243,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 237,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-3 py-1 inline-flex items-center gap-1 text-xs leading-5 font-semibold rounded-full ${statusBadge.bg} ${statusBadge.text}`, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-2 h-2 rounded-full bg-current" }, void 0, false, {
                fileName: "app/routes/articles._index.jsx",
                lineNumber: 250,
                columnNumber: 25
              }, this),
              statusBadge.label
            ] }, void 0, true, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 249,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 248,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-3 py-1 inline-flex items-center gap-1 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-2 h-2 rounded-full bg-current" }, void 0, false, {
                fileName: "app/routes/articles._index.jsx",
                lineNumber: 257,
                columnNumber: 25
              }, this),
              "Draft"
            ] }, void 0, true, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 256,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 255,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-right", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/articles/${article.id}`, className: "inline-block px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-md hover:bg-indigo-100 transition mr-2", children: "View" }, void 0, false, {
                fileName: "app/routes/articles._index.jsx",
                lineNumber: 263,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => handleDelete(article.id), className: "inline-block px-4 py-2 text-sm font-medium text-red-700 bg-red-50 border border-red-200 rounded-md hover:bg-red-100 transition", children: "Delete" }, void 0, false, {
                fileName: "app/routes/articles._index.jsx",
                lineNumber: 267,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 262,
              columnNumber: 21
            }, this)
          ] }, article.id, true, {
            fileName: "app/routes/articles._index.jsx",
            lineNumber: 220,
            columnNumber: 22
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/articles._index.jsx",
          lineNumber: 214,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/articles._index.jsx",
        lineNumber: 202,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white px-6 py-4 flex items-center justify-between border-t border-gray-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-gray-700", children: [
            total,
            " Record",
            total !== 1 ? "s" : ""
          ] }, void 0, true, {
            fileName: "app/routes/articles._index.jsx",
            lineNumber: 278,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-gray-700", children: "Records per page" }, void 0, false, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 280,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { value: pageSize, onChange: (e) => changePageSize(parseInt(e.target.value)), className: "px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "10", children: "10" }, void 0, false, {
                fileName: "app/routes/articles._index.jsx",
                lineNumber: 282,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "20", children: "20" }, void 0, false, {
                fileName: "app/routes/articles._index.jsx",
                lineNumber: 283,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "50", children: "50" }, void 0, false, {
                fileName: "app/routes/articles._index.jsx",
                lineNumber: 284,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 281,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/articles._index.jsx",
            lineNumber: 279,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/articles._index.jsx",
          lineNumber: 277,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-gray-700", children: [
            "Page ",
            page,
            " of ",
            totalPages
          ] }, void 0, true, {
            fileName: "app/routes/articles._index.jsx",
            lineNumber: 290,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => changePage(1), disabled: page === 1, className: "p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 19l-7-7 7-7m8 14l-7-7 7-7" }, void 0, false, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 293,
              columnNumber: 98
            }, this) }, void 0, false, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 293,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 292,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => changePage(Math.max(1, page - 1)), disabled: page === 1, className: "p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }, void 0, false, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 296,
              columnNumber: 98
            }, this) }, void 0, false, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 296,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 295,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => changePage(Math.min(totalPages, page + 1)), disabled: page === totalPages, className: "p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }, void 0, false, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 299,
              columnNumber: 98
            }, this) }, void 0, false, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 299,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 298,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => changePage(totalPages), disabled: page === totalPages, className: "p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 5l7 7-7 7M5 5l7 7-7 7" }, void 0, false, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 302,
              columnNumber: 98
            }, this) }, void 0, false, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 302,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/articles._index.jsx",
              lineNumber: 301,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/articles._index.jsx",
            lineNumber: 291,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/articles._index.jsx",
          lineNumber: 289,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/articles._index.jsx",
        lineNumber: 276,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/articles._index.jsx",
      lineNumber: 201,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/articles._index.jsx",
    lineNumber: 171,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/articles._index.jsx",
    lineNumber: 170,
    columnNumber: 10
  }, this);
}
_s(MyArticles, "8V3ejNp0dFldeematSXdK1d/ApM=", false, function() {
  return [useLoaderData, useSearchParams];
});
_c = MyArticles;
var _c;
$RefreshReg$(_c, "MyArticles");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  MyArticles as default
};
//# sourceMappingURL=/build/routes/articles._index-P66ERGR2.js.map
