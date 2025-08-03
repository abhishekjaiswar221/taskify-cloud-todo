import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const HeaderNavigation = () => {
  return (
    <header className="bg-gray-100 border-b border-gray-200 shadow-sm">
      <nav className="px-6 mx-auto max-w-7xl lg:px-20">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Title */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/images/taskify-logo.webp"
              alt="Taskify Logo"
              className="w-auto h-10"
            />
            <span className="text-2xl font-semibold text-gray-900">
              Taskify Todo
            </span>
          </Link>

          {/* Navigation Actions */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="border-[1.5px] text-[#3b5d22] border-[#3b5d22] hover:bg-[#f1f5f0]"
              asChild
            >
              <Link to="/sign-in">Sign In</Link>
            </Button>
            <Button asChild>
              <Link to="/sign-up">Sign Up</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderNavigation;
