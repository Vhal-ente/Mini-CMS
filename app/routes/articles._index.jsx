import { json } from "@remix-run/node";
import { useLoaderData, Link, useSearchParams } from "@remix-run/react";
import { useState } from "react";
import { prisma } from "../lib/db.server";

export async function loader({ request }) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") || "1");
  const pageSize = parseInt(url.searchParams.get("pageSize") || "10");
  const search = url.searchParams.get("search") || "";

  const skip = (page - 1) * pageSize;

  const where = {};
  if (search) {
    where.OR = [
      { title: { contains: search, mode: "insensitive" } },
      { category: { contains: search, mode: "insensitive" } },
    ];
  }

  const [articles, total] = await Promise.all([
    prisma.article.findMany({
      where,
      skip,
      take: pageSize,
      orderBy: { createdAt: "desc" },
      include: {
        parent: true,
        _count: { select: { children: true } },
      },
    }),
    prisma.article.count({ where }),
  ]);

  const totalPages = Math.ceil(total / pageSize);

  return json({ articles, total, page, pageSize, totalPages });
}

export default function MyArticles() {
  const { articles, total, page, pageSize, totalPages } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");

  // local list state so we can remove items after delete
  const [list, setList] = useState(articles || []);

  const getStatusColor = (index) => {
    const colors = ["blue", "yellow", "purple", "orange"];
    return colors[index % colors.length];
  };

  const getStatusBadge = (color) => {
    const badges = {
      blue: { bg: "bg-blue-100", text: "text-blue-800", label: "IEP" },
      yellow: { bg: "bg-yellow-100", text: "text-yellow-800", label: "ALP" },
      purple: { bg: "bg-purple-100", text: "text-purple-800", label: "MLP" },
      orange: { bg: "bg-orange-100", text: "text-orange-800", label: "504" },
    };
    return badges[color] || badges.blue;
  };

  const getTimeColor = (index) => {
    if (index === 0) return "text-red-600";
    if (index <= 2) return "text-orange-500";
    return "text-yellow-600";
  };

  const getRelativeTime = (date, index) => {
    const times = [
      "Past Due",
      "In 8 days",
      "In 11 days",
      "In 19 days",
      "In 28 days",
      "In 31 days",
    ];
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
    if (!ok) return;

    try {
      const res = await fetch(`/articles/${id}`, {
        method: "DELETE",
        headers: { Accept: "application/json" },
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

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">My Articles</h1>

          <div className="flex gap-6 border-b border-gray-200 mb-6">
            {[
              { id: "upcoming", label: "Upcoming" },
              { id: "draft", label: "Draft" },
              { id: "amendment", label: "Amendment" },
              { id: "active", label: "Active" },
              { id: "all", label: "All (Most Recent)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 px-1 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mb-6">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Filter by title or category..."
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Updated</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {list.map((article, index) => {
                const statusColor = getStatusColor(index);
                const statusBadge = getStatusBadge(statusColor);
                const relativeTime = getRelativeTime(article.createdAt, index);
                const timeColor = getTimeColor(index);

                return (
                  <tr key={article.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{article.title}</div>
                      <div className="text-sm text-gray-500">{((article.content || "") + "").substring(0, 80)}...</div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`text-sm font-medium ${timeColor}`}>{relativeTime}</div>
                      <div className="text-sm text-gray-500">
                        {new Date(article.createdAt).toLocaleDateString("en-US", {
                          month: "numeric",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`w-3 h-3 ${i < (index % 5) ? "text-blue-500" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                            <circle cx="10" cy="10" r="10" />
                          </svg>
                        ))}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        Last Update: {index === 0 ? "less than a minute ago" : `${index + 1} months ago`}
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex items-center gap-1 text-xs leading-5 font-semibold rounded-full ${statusBadge.bg} ${statusBadge.text}`}>
                        <span className="w-2 h-2 rounded-full bg-current" />
                        {statusBadge.label}
                      </span>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 inline-flex items-center gap-1 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        <span className="w-2 h-2 rounded-full bg-current" />
                        Draft
                      </span>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <Link
                        to={`/articles/${article.id}`}
                        className="inline-block px-4 py-2 text-sm font-medium text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-md hover:bg-indigo-100 transition mr-2"
                      >
                        View
                      </Link>

                      <button
                        onClick={() => handleDelete(article.id)}
                        className="inline-block px-4 py-2 text-sm font-medium text-red-700 bg-red-50 border border-red-200 rounded-md hover:bg-red-100 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="bg-white px-6 py-4 flex items-center justify-between border-t border-gray-200">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-700">{total} Record{total !== 1 ? "s" : ""}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">Records per page</span>
                <select
                  value={pageSize}
                  onChange={(e) => changePageSize(parseInt(e.target.value))}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                >
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-700">Page {page} of {totalPages}</span>
              <div className="flex items-center gap-2">
                <button onClick={() => changePage(1)} disabled={page === 1} className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
                </button>
                <button onClick={() => changePage(Math.max(1, page - 1))} disabled={page === 1} className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={() => changePage(Math.min(totalPages, page + 1))} disabled={page === totalPages} className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
                <button onClick={() => changePage(totalPages)} disabled={page === totalPages} className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
