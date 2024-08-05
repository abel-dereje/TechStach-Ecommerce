import React, { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { setUserDetails } from "../store/userSlice";
import loginIcons from "../assets/signin.gif";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = useCallback(
    async (credentials) => {
      try {
        const response = await fetch(SummaryApi.signIn.url, {
          method: SummaryApi.signIn.method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });

        const result = await response.json();

        console.log("API Response:", result); // Log the response to check its structure

        if (result.success) {
          toast.success(result.message);

          if (result.token && result.user) {
            localStorage.setItem("token", result.token);
            localStorage.setItem("userDetails", JSON.stringify(result.user));
            console.log("Stored Token:", localStorage.getItem("token")); // Check if token is stored
            console.log(
              "Stored User Details:",
              localStorage.getItem("userDetails")
            );
            dispatch(setUserDetails(result.user));
            navigate("/");
          } else {
            toast.error("Token or user details are missing in the response.");
          }
        } else {
          toast.error(result.message);
        }
      } catch (error) {
        console.error("Login error:", error);
        toast.error("Login failed. Please try again.");
      }
    },
    [dispatch, navigate]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(data);
  };

  return (
    <section className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col p-4 rounded-lg shadow-lg">
        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md">
          <img src={loginIcons} className="w-full h-full" alt="login" />
        </div>
        <h2 className="text-center text-2xl font-bold text-[#009FBD] mb-8">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="email" className="text-gray-600 font-semibold mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={data.email}
            onChange={handleOnChange}
            className="border-2 p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#009FBD]"
            required
          />
          <label
            htmlFor="password"
            className="text-gray-600 font-semibold mb-2"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={data.password}
              onChange={handleOnChange}
              className="border-2 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#009FBD]"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-3 cursor-pointer text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="flex justify-end mt-2">
            <Link
              to="/forgot-password"
              className="block w-fit ml-auto hover:underline hover:text-red-600"
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "#009FBD",
              transition: "background-color 0.3s",
            }}
            className="bg-[#009FBD] hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6"
          >
            Login
          </button>
        </form>
        <p className="my-5">
          Don't have an account?{" "}
          <Link
            to="/sign-up"
            style={{ color: "#009FBD", transition: "background-color 0.3s" }}
            className="text-red-600 hover:text-red-700 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
