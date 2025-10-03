import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Heading */}
          <div className="inline-flex items-center justify-center space-x-2 mb-6">
            <div className="h-16 w-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl transform -rotate-6 hover:rotate-0 transition-transform">
              <svg
                className="h-10 w-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight sm:text-6xl mb-6">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Mini CMS
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-12">
            A simple and elegant content management system. Create, organize, and manage your articles with ease.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center space-x-4">
            <Link
              to="/auth/login"
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-semibold rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>

            <Link
              to="/articles"
              className="inline-flex items-center px-8 py-4 border border-gray-300 text-base font-semibold rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-all shadow-md hover:shadow-lg"
            >
              Browse Articles
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-12 w-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Content Creation</h3>
              <p className="text-gray-600">
                Create and edit articles with a simple, intuitive interface designed for productivity.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Organization</h3>
              <p className="text-gray-600">
                Organize your content hierarchically with parent-child article relationships.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-12 w-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Access</h3>
              <p className="text-gray-600">
                Built-in authentication and session management to keep your content safe and secure.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="px-8 py-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Start Managing Your Content Today
              </h2>
              <p className="mt-2 text-gray-600">
                Join our growing community of content creators
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600">100+</div>
                <div className="mt-2 text-sm text-gray-600">Articles Created</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600">50+</div>
                <div className="mt-2 text-sm text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600">24/7</div>
                <div className="mt-2 text-sm text-gray-600">Access Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}