import React from "react";
import Logo from "./Logo";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const logoColor = "#009FBD"; // Light blue color

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <Link to="/">
            <Logo w={120} h={60} />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center w-full max-w-lg border border-gray-300 rounded-full overflow-hidden shadow-md focus-within:shadow-lg">
          <input
            type="text"
            placeholder="Search product here..."
            className="w-full px-4 py-2 text-gray-700 placeholder-gray-400 outline-none"
          />
          <button
            className="text-lg min-w-[50px] h-10 bg-[#009FBD] flex items-center justify-center rounded-r-full text-white"
          >
            <GrSearch />
          </button>
        </div>

        {/* User & Cart Icons */}
        <div className="flex items-center gap-4">
          <div
            style={{ color: logoColor }}
            className="text-3xl cursor-pointer flex items-center justify-center"
          >
            <FaRegCircleUser />
          </div>
          <div
            style={{ color: logoColor }}
            className="text-2xl relative cursor-pointer flex items-center justify-center"
          >
            <FaShoppingCart />
            <div
              style={{ backgroundColor: logoColor }}
              className="text-white w-5 h-5 rounded-full flex items-center justify-center absolute -top-2 -right-2"
            >
              <p className="text-sm">0</p>
            </div>
          </div>
          <div>
            <Link
              to="/login"
              className="px-4 py-2 rounded-full text-white font-bold"
              style={{
                backgroundColor: logoColor,
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#088395")} // Slightly darker shade
              onMouseLeave={(e) => (e.target.style.backgroundColor = logoColor)}
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="bg-white py-2">
        <div className="container mx-auto px-4 md:px-8">
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/"
                className="font-bold text-gray-700 hover:text-[#009FBD] transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/wishlist"
                className="font-bold text-gray-700 hover:text-[#009FBD] transition-colors duration-300"
              >
                Wishlist
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="font-bold text-gray-700 hover:text-[#009FBD] transition-colors duration-300"
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                to="/checkout"
                className="font-bold text-gray-700 hover:text-[#009FBD] transition-colors duration-300"
              >
                Checkout
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="font-bold text-gray-700 hover:text-[#009FBD] transition-colors duration-300"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
