import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-cyan-600 to-cyan-300">
      <div className="max-w-md p-8 bg-cyan-400 rounded shadow-lg text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
        <p className="text-gray-800 mb-6 font-medium">Something went wrong.</p>
        <p className="text-gray-700 mb-6 font-medium">Error Code: 404</p>
        <p className="text-gray-700 mb-6 font-medium">We&apos;re sorry for the inconvenience. Please try again later.</p>
        <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Back to Home
        </Link>
      </div>
    </div>
    );
};

export default ErrorPage;