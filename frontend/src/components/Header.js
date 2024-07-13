import React from "react";
import Logo from "./Logo";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-16 shadow-md bg-white">
      <div className=" h-full container mx-auto flex items-center px-4 justify-between">
        <div className="">
        <Link to={"/"}>
        <Logo w={90} h={50} />
        </Link>
          
        </div>

        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2">
          <input
            type="text"
            placeholder="search product here..."
            className="w-full outline-none"
          />
          <div
            style={{ backgroundColor: "#009FBD" }}
            className="text-lg min-w-[50px] h-8 bg-blue-600 flex items-center justify-center rounded-r-full text-white"
          >
            <GrSearch />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div
            style={{ color: "#009FBD" }}
            className="text-3xl cursor-pointer flex items-center justify-center rounded-full "
          >
            <FaRegCircleUser />
          </div>

          <div style={{ color: "#009FBD" }} className="text-2xl relative cursor-pointer flex items-center justify-center">
            <span >
              <FaShoppingCart />
            </span>
            <div
              style={{ backgroundColor: "#009FBD" }}
              className="bg-blue-600 text-white w-5 h-5 rounded-full p-1 flex items-center absolute -top-3 -right-4"
            >
              <p className="text-sm">0</p>
            </div>
          </div>

          <div>
            <Link to="/login" 
              className="px-3 py-1 rounded-full text-white"
              style={{
                backgroundColor: "#009FBD",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#088395")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#009FBD")}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
