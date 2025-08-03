import React from "react";

const FooterNavigation = () => {
  return (
    <footer className="relative w-full overflow-hidden border-t border-gray-200 bg-gradient-to-r from-gray-100 to-gray-50">
      {/* Background Blur Blob - visual harmony with header/home */}
      <div className="absolute -bottom-24 -right-24 w-[300px] h-[300px] bg-green-100 rounded-full blur-[100px] opacity-30 z-0" />

      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-6 mx-auto text-sm text-center text-gray-600 max-w-7xl">
        <p className="mb-1 font-semibold tracking-tight text-gray-800">
          🌱 Taskify Todo
        </p>
        <p className="mb-1">
          &copy; {new Date().getFullYear()} Taskify. All rights reserved.
        </p>
        <p>
          Made with <span className="text-red-500">❤️</span> by{" "}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-800 hover:underline"
          >
            Abhishek D Jaiswar
          </a>
        </p>
      </div>
    </footer>
  );
};

export default FooterNavigation;
