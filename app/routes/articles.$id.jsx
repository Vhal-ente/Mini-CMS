import { useLoaderData, Form, Link, useNavigation, useActionData } from "@remix-run/react";
import { redirect, json } from "@remix-run/node";
import { useEffect, useState } from "react";

export async function loader({ params }) {
  const { prisma } = await import("../lib/db.server");
  const article = await prisma.article.findUnique({
    where: { id: params.id },
    include: {
      parent: true,
      children: true,
    },
  });

  if (!article) {
    throw new Response("Not Found", { status: 404 });
  }

  const potentialParents = await prisma.article.findMany({
    where: {
      parentId: null,
      id: { not: params.id },
    },
    orderBy: { createdAt: "desc" },
  });

  return json({ article, potentialParents });
}

export async function action({ request, params }) {
  const { prisma } = await import("../lib/db.server");
  const method = request.method?.toUpperCase();

  // handle DELETE first
  if (method === "DELETE") {
    try {
      await prisma.article.delete({ where: { id: params.id } });
      return new Response(null, { status: 204 });
    } catch (e) {
      return json({ error: e?.message || "Delete failed" }, { status: 500 });
    }
  }

  // handle update (POST)
  const form = await request.formData();
  const title = form.get("title");
  const slug = form.get("slug");
  const content = form.get("content");
  const parentId = form.get("parentId") || null;

  if (!title || !slug) {
    return json({ error: "Title and slug are required" }, { status: 400 });
  }

  const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  if (!slugRegex.test(slug)) {
    return json(
      { error: "Slug must be lowercase with hyphens only (e.g., my-article-title)" },
      { status: 400 }
    );
  }

  try {
    await prisma.article.update({
      where: { id: params.id },
      data: {
        title,
        slug,
        content: content || null,
        parentId,
      },
    });

    return redirect("/articles");
  } catch (e) {
    if (e?.code === "P2002") {
      return json({ error: "An article with this slug already exists" }, { status: 400 });
    }
    return json({ error: e?.message || "Failed to update article" }, { status: 500 });
  }
}

export default function EditArticlePage() {
  const { article, potentialParents } = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const [Quill, setQuill] = useState(null);
  const [content, setContent] = useState(article?.content || "");

  useEffect(() => {
    import("react-quill").then((mod) => setQuill(() => mod.default));
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("react-quill/dist/quill.snow.css");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link
            to={`/articles`}
            className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors mb-4"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Article
          </Link>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Edit Article</h1>
                <p className="text-sm text-gray-600 mt-1">Update the article information and content</p>
              </div>
            </div>
            <Link to="/articles" className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              All Articles
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <Form method="post" className="p-8">
            {actionData?.error && (
              <div className="mb-6 rounded-lg bg-red-50 border border-red-200 p-4">
                <div className="flex">
                  <div className="ml-3">
                    <p className="text-sm font-medium text-red-800">{actionData.error}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                  Article Title
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    required
                    defaultValue={article?.title}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm"
                    placeholder="Enter article title"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="slug" className="block text-sm font-semibold text-gray-700 mb-2">
                  URL Slug
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <input
                    id="slug"
                    name="slug"
                    type="text"
                    required
                    defaultValue={article?.slug}
                    pattern="[a-z0-9]+(?:-[a-z0-9]+)*"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm font-mono"
                    placeholder="article-url-slug"
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500">Lowercase letters, numbers, and hyphens only</p>
              </div>

              <div>
                <label htmlFor="parentId" className="block text-sm font-semibold text-gray-700 mb-2">Parent Article</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                  <select
                    id="parentId"
                    name="parentId"
                    defaultValue={article?.parentId || ""}
                    className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all sm:text-sm appearance-none cursor-pointer"
                  >
                    <option value="">No parent (Top-level article)</option>
                    {potentialParents.map((p) => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-semibold text-gray-700 mb-2">Content</label>
                <div className="border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent transition-all">
                  {Quill ? (
                    <Quill
                      theme="snow"
                      value={content}
                      onChange={setContent}
                      className="bg-white"
                      modules={{
                        toolbar: [
                          [{ header: [1, 2, 3, false] }],
                          ["bold", "italic", "underline", "strike"],
                          [{ list: "ordered" }, { list: "bullet" }],
                          ["blockquote", "code-block"],
                          ["link"],
                          ["clean"],
                        ],
                      }}
                    />
                  ) : (
                    <textarea
                      name="content"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      rows={12}
                      className="block w-full px-3 py-3 border-0 leading-5 bg-white placeholder-gray-400 focus:outline-none sm:text-sm resize-none"
                      placeholder="Write your article content here..."
                    />
                  )}
                </div>

                {/* Only include hidden input when Quill is used to avoid duplicate fields */}
                {Quill && <input type="hidden" name="content" value={content} />}

                <p className="mt-1 text-xs text-gray-500">{Quill ? "Rich text editor loaded" : "Loading rich text editor..."}</p>
              </div>
            </div>

            {article.children && article.children.length > 0 && (
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex">
                  <div className="ml-3">
                    <p className="text-sm text-blue-800">
                      This article has <strong>{article.children.length}</strong> child article{article.children.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 flex items-center justify-between pt-6 border-t border-gray-200">
              <Link to="/articles" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Cancel
              </Link>

              <div className="flex items-center space-x-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Saving Changes...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Save Changes
                    </>
                  )}
                </button>
              </div>
            </div>
          </Form>
        </div>

        <div className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Article Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Created:</span>
              <span className="ml-2 text-gray-900 font-medium">
                {new Date(article.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div>
              <span className="text-gray-500">Last Updated:</span>
              <span className="ml-2 text-gray-900 font-medium">
                {new Date(article.updatedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div>
              <span className="text-gray-500">Article ID:</span>
              <span className="ml-2 text-gray-900 font-mono text-xs">{article.id}</span>
            </div>
            {article.parent && (
              <div>
                <span className="text-gray-500">Parent:</span>
                <Link to={`/articles/${article.parent.id}`} className="ml-2 text-indigo-600 hover:text-indigo-500 font-medium">{article.parent.title}</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
