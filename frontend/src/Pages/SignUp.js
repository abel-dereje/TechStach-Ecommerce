import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginIcons from "../assets/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import imageTobase64 from "../helpers/imageToBase64";
import SummaryApi from "../common";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    profilePic: "",
  });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleUploadPic = async (e) => {
    const file = e.target.files[0];
    const imagePic = await imageTobase64(file);

    setData((preve) => {
      return {
        ...preve,
        profilePic: imagePic,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!window.confirm("Are you sure you want to add this user?")) {
      return;
    }

    if (data.password === data.confirmPassword) {
      try {
        const response = await fetch(SummaryApi.signUP.url, {
          method: SummaryApi.signUP.method,
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (result.success) {
          toast.success(result.message);
          navigate("/login");
        } else if (result.error) {
          toast.error("User already registered.");
          toast.error(result.message);
        }
      } catch (error) {
        toast.error("An error occurred. Please try again.");
      }
    } else {
      toast.error("Passwords do not match.");
    }
  };

  return (
    <section className="p-3 md:p-4">
      <div className="w-full max-w-md bg-white m-auto flex items-center flex-col p-4 rounded-lg shadow-lg">
        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md">
          <img src={loginIcons} className="w-full h-full" alt="login" />
          <form>
            <label>
              <div className="text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full">
                Upload Photo
              </div>
              <input
                type="file"
                className="hidden"
                onChange={handleUploadPic}
              />
            </label>
          </form>
        </div>
        <h2 className="text-center text-2xl font-bold text-[#009FBD] mb-8">
          Sign up
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="fName" className="text-gray-600 font-semibold mb-2">
            First name
          </label>
          <input
            type="text"
            name="firstName"
            value={data.firstName}
            onChange={handleOnChange}
            placeholder="enter first name"
            className="border-2 p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#009FBD]"
          />
          <label htmlFor="fName" className="text-gray-600 font-semibold mb-2">
            Last name
          </label>
          <input
            type="text"
            name="lastName"
            value={data.lastName}
            onChange={handleOnChange}
            placeholder="enter last name"
            className="border-2 p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#009FBD]"
          />

          <label htmlFor="email" className="text-gray-600 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleOnChange}
            placeholder="enter email address"
            required
            className="border-2 p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#009FBD]"
          />

          <label htmlFor="fName" className="text-gray-600 font-semibold mb-2">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            value={data.phone}
            onChange={handleOnChange}
            placeholder="enter phone number"
            required
            className="border-2 p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#009FBD]"
          />

          <label
            htmlFor="password"
            className="text-gray-600 font-semibold mb-2"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={data.password}
              name="password"
              onChange={handleOnChange}
              placeholder="enter password"
              required
              className="border-2 p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#009FBD]"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-3 cursor-pointer text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <label
            htmlFor="confirmPassword"
            className="text-gray-600 font-semibold mb-2"
          >
            Confirm Password
          </label>
          <div className="relative mb-4">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={data.confirmPassword}
              name="confirmPassword"
              onChange={handleOnChange}
              placeholder="confirm password"
              required
              className="border-2 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#009FBD]"
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
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
            Sign up
          </button>
        </form>
        <p className="my-5">
          Already have account?{" "}
          <Link
            to="/login"
            style={{ color: "#009FBD", transition: "background-color 0.3s" }}
            className="text-red-600 hover:text-red-700 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
