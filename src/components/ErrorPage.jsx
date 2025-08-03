import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen px-6 overflow-hidden bg-white">
      <div className="relative z-20 max-w-xl text-center">
        <img
          src="/images/taskify-logo.webp"
          alt="Taskify logo"
          className="w-16 mx-auto mb-6 animate-fade-in"
        />
        <h1 className="mb-2 font-extrabold text-gray-900 text-7xl animate-slide-up">
          404
        </h1>
        <h2 className="mb-4 text-2xl font-semibold text-gray-700 animate-slide-up">
          Page Not Found
        </h2>
        <p className="mb-6 text-lg text-gray-500 delay-100 animate-slide-up">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or may have
          been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 font-semibold text-white transition-all delay-200 shadow-md bg-primary rounded-xl animate-fade-in"
        >
          Go back home
        </Link>
      </div>

      <footer className="absolute z-20 text-sm text-gray-400 bottom-6">
        &copy; {new Date().getFullYear()} Taskify Todo. All rights reserved.
      </footer>
    </div>
  );
};

export default ErrorPage;
