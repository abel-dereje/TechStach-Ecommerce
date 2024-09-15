import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import SummaryApi from '../common'; // Ensure this import points to your API constants
import { toast } from 'react-toastify';
import { MdDelete } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useParams, useNavigate } from 'react-router-dom';
import uploadImage from '../helpers/uploadImage';

const UpdateUser = () => {
  const { userId } = useParams(); 
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    Phone: '',
    role: '',
    profilePic: '',
  });
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const url = `${SummaryApi.singleUser.url.replace(':userId', userId)}`;
  
        const response = await fetch(url, {
          method: SummaryApi.singleUser.method,
          credentials: 'include',
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
        });
  
        const contentType = response.headers.get("content-type");
  
        if (contentType && contentType.includes("application/json")) {
          const userData = await response.json();
          console.log("Response Data:", userData); // Log response for debugging
  
          if (userData.success) {
            setData({
              firstName: userData.data.firstName,
              lastName: userData.data.lastName,
              email: userData.data.email,
              Phone: userData.data.Phone,
              role: userData.data.role,
              profilePic: userData.data.profilePic || ''
            });
          } else {
            toast.error(userData.message || 'Failed to fetch user data');
          }
        } else {
          const text = await response.text();
          console.error("Unexpected response format:", text);
          toast.error("Unexpected response format received from the server.");
        }
      } catch (error) {
        console.error("Fetch Error:", error);
        toast.error(`Error fetching user data: ${error.message}`);
      }
    };
  
    if (userId) {
      fetchUserData();
    }
  }, [userId]);
  

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUploadProfilePic = async (e) => {
    const file = e.target.files[0];
    const uploadImageCloudinary = await uploadImage(file);

    setData((prev) => ({
      ...prev,
      profilePic: uploadImageCloudinary.url
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const url = `${SummaryApi.updateUser.url.replace(':userId', userId)}`;
        const token = localStorage.getItem("token");

        const response = await fetch(url, {
            method: 'PUT', 
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data) 
        });

        const responseData = await response.json();

        if (responseData.success) {
            toast.success(responseData.message);
            navigate('../users');
        } else {
            toast.error(responseData.message);
        }
    } catch (error) {
        console.error("Submit Error:", error);
        toast.error(`Error updating user data: ${error.message}`);
    }
};

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-200">
        <div className="w-full max-w-md mx-auto bg-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-center">Update User</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Form fields */}
            <div className="grid">
              <label className="mb-1">First Name:</label>
              <div className="bg-slate-100 p-2 rounded">
                <input
                  type="text"
                  name="firstName"
                  value={data.firstName}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="grid">
              <label className="mb-1">Last Name:</label>
              <div className="bg-slate-100 p-2 rounded">
                <input
                  type="text"
                  name="lastName"
                  value={data.lastName}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="grid">
              <label className="mb-1">Email:</label>
              <div className="bg-slate-100 p-2 rounded">
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="grid">
              <label className="mb-1">Phone:</label>
              <div className="bg-slate-100 p-2 rounded">
                <input
                  type="text"
                  name="Phone"
                  value={data.Phone}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <label htmlFor="role" className="mt-3">Role :</label>
            <select
              value={data.role}
              name="role"
              onChange={handleOnChange}
              className="p-2 bg-slate-100 border rounded"
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>

            <label htmlFor="profilePic" className="mt-3">Profile Picture :</label>
            <label htmlFor="uploadImageInput">
              <div className="p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center cursor-pointer">
                <div className="text-slate-500 flex justify-center items-center flex-col gap-2">
                  <span className="text-4xl"><FaCloudUploadAlt /></span>
                  <p className="text-sm">Upload Profile Picture</p>
                  <input
                    type="file"
                    id="uploadImageInput"
                    className="hidden"
                    onChange={handleUploadProfilePic}
                  />
                </div>
              </div>
            </label>
            <div>
              {data.profilePic ? (
                <div className="relative group">
                  <img
                    src={data.profilePic}
                    alt="profile"
                    width={80}
                    height={80}
                    className="bg-slate-100 border cursor-pointer"
                  />
                  <div
                    className="absolute bottom-0 right-0 p-1 text-white bg-red-600 rounded-full hidden group-hover:block cursor-pointer"
                    onClick={() => setData((prev) => ({ ...prev, profilePic: '' }))}
                  >
                    <MdDelete />
                  </div>
                </div>
              ) : (
                <p className="text-red-600 text-xs">*Please upload a profile picture</p>
              )}
            </div>
            <button
              style={{
                backgroundColor: "#009FBD",
                transition: "background-color 0.3s",
              }}
              className="bg-[#009FBD] hover:bg-[#009FBD] text-white px-6 py-2 w-full rounded-full hover:scale-110 transition-all"
            >
              Update User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
