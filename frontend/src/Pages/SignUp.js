import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginIcons from "../assest/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from 'react-toastify';
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
    <section id="signup">
      <div className="mx-auto container p-4">
        <div className="bg-white p-5 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
            <div>
              <img src={data.profilePic || loginIcons} alt="login icons" />
            </div>
            <form>
              <label>
                <div className="text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full">
                  Upload Photo
                </div>
                <input type="file" className="hidden" onChange={handleUploadPic} />
              </label>
            </form>
          </div>

          <form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="grid">
              <label>First name: </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="text"
                  name="firstName"
                  value={data.firstName}
                  onChange={handleOnChange}
                  placeholder="enter first name"
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
              <div className="grid">
                <label>Last name: </label>
                <div className="bg-slate-100 p-2">
                  <input
                    type="text"
                    name="lastName"
                    value={data.lastName}
                    onChange={handleOnChange}
                    placeholder="enter last name"
                    required
                    className="w-full h-full outline-none bg-transparent"
                  />
                </div>
              </div>
            </div>
            <div className="grid">
              <label>Email: </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  placeholder="enter email address"
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="grid">
              <label>Phone: </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="text"
                  name="phone"
                  value={data.phone}
                  onChange={handleOnChange}
                  placeholder="enter phone number"
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="grid">
              <label>Password: </label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  value={data.password}
                  name="password"
                  onChange={handleOnChange}
                  placeholder="enter password"
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
              <div className="grid">
                <label>Confirm password: </label>
                <div className="bg-slate-100 p-2 flex">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={data.confirmPassword}
                    name="confirmPassword"
                    onChange={handleOnChange}
                    placeholder="enter confirm password"
                    required
                    className="w-full h-full outline-none bg-transparent"
                  />
                  <div
                    className="cursor-pointer text-xl"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                  >
                    <span>
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button
              style={{
                backgroundColor: "#009FBD",
                transition: "background-color 0.3s",
              }}
              className="bg--600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6"
            >
              Sign up
            </button>
          </form>
          <p className="my-5">
            Already have account?{" "}
            <Link
              to="/login"
              style={{
                color: "#009FBD",
                transition: "background-color 0.3s",
              }}
              className="text-red-600 hover:text-red-700 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
