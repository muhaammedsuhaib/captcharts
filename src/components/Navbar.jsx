import React from "react";
import { Link, useLocation } from "react-router-dom";
import brand1 from "../assets/brand.png";
import brand2 from "../assets/brand2.png";
import { CiSearch } from "react-icons/ci";
import profile from "../assets/userprofile.png";

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav className={`p-4 ${isHomePage ? "bg-black" : "bg-[#F7F7F7]"}`}>
      <div className="flex justify-between items-center container mx-auto">
        <div className="flex items-center">
          <Link to="/" className="ml-4">
            <img
              src={isHomePage ? brand1 : brand2}
              alt="brand logo"
              className="w-auto h-8 sm:h-10 md:h-12"
            />
          </Link>
        </div>

        <div className="flex items-center space-x-4 sm:space-x-5 md:space-x-6">
          {isHomePage ? (
            <>
              <Link
                to="/"
                className="text-white text-sm sm:text-base md:text-lg hover:text-gray-400"
              >
                Home
              </Link>
              <Link
                to="/feed"
                className="text-white text-sm sm:text-base md:text-lg hover:text-gray-400"
              >
                Gallery
              </Link>
              <Link
                to="/feed"
                className="text-white text-sm sm:text-base font-semibold py-1 px-3 md:py-2 md:px-4 rounded-md bg-[#CF796C] hover:bg-[#b3655c] transition duration-300"
              >
                Login
              </Link>
            </>
          ) : (
            <>
              <div className="flex items-center bg-white rounded-full py-1 px-2 sm:py-1.5 sm:px-3 md:py-2 md:px-4 shadow-sm">
                <input
                  type="text"
                  className="rounded-full text-xs sm:text-sm text-gray-700 focus:outline-none placeholder-gray-500"
                  placeholder="Search..."
                />
                <CiSearch className="text-gray-500 ml-1 sm:ml-2" size={18} />
              </div>
              <Link
                to="/"
                className="flex items-center text-white font-semibold text-xs sm:text-sm md:text-base py-1 px-1 sm:py-1 sm:px-2 rounded-full bg-[#CF796C] hover:bg-[#b3655c] transition duration-300"
              >
                <img
                  src={profile}
                  alt="Profile"
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full mr-2"
                />
                <span className="hidden sm:block">Asha Sunny</span>
              </Link>
              <Link
                to="/"
                className="text-white text-xs sm:text-sm md:text-base font-semibold py-1 px-3 sm:py-2 sm:px-4 rounded-full bg-[#CF796C] hover:bg-[#b3655c] transition duration-300"
              >
                Logout
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
