import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError() as Error;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Oops! Something went wrong
          </h1>
          <p className="text-gray-600 mb-4">
            {error?.message || "An unexpected error occurred"}
          </p>
          <div className="space-y-2">
            <Link
              to="/home"
              className="block w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Go Home
            </Link>
            <button
              onClick={() => window.location.reload()}
              className="block w-full bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;