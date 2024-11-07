import React from "react";
import { Link } from "react-router-dom";
import brand from "../assets/brand.png";

function Navbar() {
  return (
    <nav className="bg-black p-4">
      <div className="flex justify-between items-center container mx-auto">
        <div className="flex items-center ml-4">
          <Link to="/">
            <img src={brand} alt="brand logo" className="w-auto h-10 md:h-12" />
          </Link>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          <Link
            to="/home"
            className="text-white text-base md:text-lg hover:text-gray-400"
          >
            Home
          </Link>
          <Link
            to="/home"
            className="text-white text-base md:text-lg hover:text-gray-400"
          >
            Gallery
          </Link>
          <Link
            to="/home"
            className="text-white text-sm md:text-base font-semibold py-1 px-3 md:py-2 md:px-4 rounded-md bg-[#CF796C] hover:bg-[#b3655c] transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
