import React, { useState } from 'react'
import { Link,useNavigate } from "react-router-dom";

import loginIcons from "../assest/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SummaryApi from '../common';
import { toast } from 'react-toastify';


const Login = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPassword,setShowPassword] = useState(false)
  const [data,setData] = useState({
      email : "",
      password : ""
  })
  const navigate = useNavigate()

  const handleOnChange = (e) =>{
      const { name , value } = e.target

      setData((preve)=>{
          return{
              ...preve,
              [name] : value
          }
      })
  }


  const handleSubmit = async(e) =>{
      e.preventDefault()

      const dataResponse = await fetch(SummaryApi.signIn.url,{
          method : SummaryApi.signIn.method,
          credentials : 'include',
          headers : {
              "content-type" : "application/json"
          },
          body : JSON.stringify(data)
      })

      const dataApi = await dataResponse.json()

      if(dataApi.success){
          toast.success(dataApi.message)
          navigate('/')
      }

      if(dataApi.error){
          toast.error(dataApi.message)
      }

  }
  


  const styles = {
    default: {
      padding: "10px",
      borderRadius: "5px",
      transition: "background-color 0.3s ease",
      color: "black",
    },
    hover: {
      color: "#009FBD",
      cursor: "pointer",
    },
    
  };

  return (
    <section id="login">
      <div className="mx-auto container p-4">
        <div className="bg-white p-5 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto" >
            <img
              src={loginIcons}
              alt="login icons"
            />
          </div>

          <form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Email: </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  value={data.email}
                  name='email'
                  onChange={handleOnChange}
                  placeholder="enter email address"
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
                  name='password'
                  onChange={handleOnChange}
                  placeholder="enter password"
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
              <Link
                to="/forgot-password"
                className="block w-fit ml-auto hover:underline hover:text-red-600"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={isHovered ? { ...styles.default, ...styles.hover } : styles.default}
              >
                Forgot password?
              </Link>
            </div>
            <button
              style={{
                backgroundColor: "#009FBD",
                transition: "background-color 0.3s",
              }}
              className="bg--600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6"
            >
              Login
            </button>
          </form>
          <p className="my-5">
            Don't have an account?{" "}
            <Link
              to="/sign-up"
              style={{
                color: "#009FBD",
                transition: "background-color 0.3s",
              }}
              className="text-red-600 hover:text-red-700 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
