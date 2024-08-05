import React, { useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegCircleUser } from 'react-icons/fa6';
import { FaShoppingCart } from 'react-icons/fa';
import { GrSearch } from 'react-icons/gr';
import { toast } from 'react-toastify';
import SummaryApi from "../common";
import { setUserDetails, clearUserDetails } from '../store/userSlice';
import Logo from "./Logo";

const Header = () => {
  const logoColor = "#009FBD";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const userDetails = localStorage.getItem('userDetails');
      if (userDetails) {
        try {
          const parsedUserDetails = JSON.parse(userDetails);
          dispatch(setUserDetails(parsedUserDetails));
        } catch (error) {
          console.error('Error parsing user details from localStorage:', error);
          localStorage.removeItem('userDetails'); // Clear corrupted data
        }
      }
    }
  }, [dispatch]);

  const handleLogout = useCallback(async () => {
    try {
      const response = await fetch(SummaryApi.logout_user.url, {
        method: SummaryApi.logout_user.method,
        credentials: 'include',
      });

      const data = await response.json();

      if (data.success) {
        toast.success(data.message);
        localStorage.removeItem('token');
        localStorage.removeItem('userDetails');
        dispatch(clearUserDetails());
        navigate("/login");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Logout failed. Please try again.');
    }
  }, [dispatch, navigate]);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-4 md:px-8">
        <div className="mb-4 md:mb-0">
          <Link to="/">
            <Logo w={120} h={60} />
          </Link>
        </div>

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
            {user ? (
              <button onClick={handleLogout} className="px-3 py-1 rounded-full text-white bg-[#009FBD] hover:bg-[#2fc8e6]">
                Logout
              </button>
            ) : (
              <Link to="/login" className="px-3 py-1 rounded-full text-white bg-[#009FBD] hover:bg-[#2fc8e6]">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>

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
                Services
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
