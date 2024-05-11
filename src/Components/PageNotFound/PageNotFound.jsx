import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="container mx-auto py-10 text-center">
      <h1 className="text-4xl font-bold mb-6">404 Page Not Found</h1>
      <p className="text-lg mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="inline-block bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 py-3 text-lg font-semibold"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
