import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

const HeaderNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="relative overflow-hidden border-b border-gray-200 shadow-sm bg-gradient-to-r from-gray-100 to-gray-50">
        {/* Background Blur Blob */}
        <div className="absolute -top-28 -left-28 w-[300px] h-[300px] bg-green-100 rounded-full blur-[100px] opacity-30 z-0"></div>

        <nav className="relative z-20 px-6 mx-auto max-w-7xl lg:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Logo & Title */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/images/taskify-logo.webp"
                alt="Taskify Logo"
                className="w-auto h-12"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-gray-900">
                  Taskify Todo
                </span>
                <span className="text-sm font-medium text-green-700">
                  Organize effortlessly 🌱
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="items-center hidden gap-4 md:flex">
              <Button
                variant="outline"
                className="h-11 w-24 rounded-xl text-[#3b5d22] border-[#3b5d22] hover:bg-[#f1f5f0]"
                asChild
              >
                <Link to="/sign-in">Sign In</Link>
              </Button>
              <Button className="w-24 h-11 rounded-xl" asChild>
                <Link to="/sign-up">Sign Up</Link>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-gray-700 rounded-xl md:hidden hover:bg-gray-200 focus:outline-none"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <header className="absolute w-full overflow-hidden border-b border-gray-200 shadow-sm top-20 bg-gradient-to-r from-gray-100 to-gray-50">
          <nav className="relative z-20 px-6 mx-auto max-w-7xl lg:px-20">
            <div className="flex flex-col items-start gap-2 my-4 md:hidden">
              <Button
                variant="outline"
                className="w-full cursor-pointer h-11 rounded-xl text-[#3b5d22] border-[#3b5d22] hover:bg-[#f1f5f0]"
                asChild
              >
                <Link to="/sign-in" onClick={() => setMenuOpen(false)}>
                  Sign In
                </Link>
              </Button>
              <Button className="w-full cursor-pointer h-11 rounded-xl" asChild>
                <Link to="/sign-up" onClick={() => setMenuOpen(false)}>
                  Sign Up
                </Link>
              </Button>
            </div>
          </nav>
        </header>
      )}
    </>
  );
};

export default HeaderNavigation;
