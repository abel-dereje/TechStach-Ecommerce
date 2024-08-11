import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import SummaryApi from '../common';
import axios from 'axios';
import { faPlus, faTrash, faEye, faEdit, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, ] = useState(5);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const { url, method } = SummaryApi.allUser;

        if (method !== 'get') {
          throw new Error('API method is not correctly defined.');
        }

        const response = await axios({
          url,
          method,
          headers: {
        'Authorization': `Bearer ${token}`
      },
        });

        if (response.data.success && Array.isArray(response.data.data)) {
          setUsers(response.data.data);
        } else {
          throw new Error('API response does not contain an array of users');
        }

        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch users:', err.message);
        setError('Failed to fetch users');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = (id) => {
    console.log(`Delete user with id: ${id}`);
  };

  const handleView = (id) => {
    console.log(`View user with id: ${id}`);
  };

  const handleActive = (id) => {
    console.log(`View user with id: ${id}`);
  };

  const handleEdit = (id) => {
    console.log(`Edit user with id: ${id}`);
  };

  // Pagination logic
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="flex h-screen">
      <Sidebar /> {/* Sidebar component */}
      
      <div className="flex-1 p-6 bg-gray-100 overflow-auto">
        <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Products</h2>
          <Link to="/sign-up" className="bg-[#009FBD] hover:bg-[#009FBD] text-white px-4 py-2 rounded flex items-center">
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Add Users
          </Link>
        </div>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr>
                <th className="px-4 py-2 text-left">No</th>
                  <th className="px-4 py-2 text-left">First Name</th>
                  <th className="px-4 py-2 text-left">Last Name</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Phone No</th>
                  <th className="px-4 py-2 text-left">Role</th>
                  {/* <th className="px-4 py-2 text-left">Status</th> */}
                  <th className="px-4 py-2 text-left">Date</th>

                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
              {currentUsers.map((user, index) => (
                  <tr key={user._id} className="border-t">
                    <td className="px-4 py-2">{indexOfFirstUser + index + 1}</td>
                    {/* <td className="px-4 py-2">
                      {product.productImage.length > 0 ? (
                        <img
                          src={product.productImage[0]}
                          alt={product.productName}
                          className="w-12 h-12 object-cover" // Minimized image size
                        />
                      ) : (
                        'No Image'
                      )}
                    </td> */}
                    <td className="px-4 py-2">{user.firstName}</td>
                    <td className="px-4 py-2">{user.lastName}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2">{user.phone}</td>
                    <td className="px-4 py-2">{user.role}</td>
                    {/* <td className="px-4 py-2">{user.status}</td> */}
                    <td className="px-4 py-2">{new Date(user.createdAt).toLocaleDateString()}</td>
                    <td className="px-4 py-2 flex space-x-2">
                      <button onClick={() => handleActive(user._id)} className="text-green-500 hover:text-blue-700">
                        <FontAwesomeIcon icon={faToggleOn} />
                      </button>
                      <button onClick={() => handleView(user._id)} className="text-blue-500 hover:text-blue-700">
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                      <button onClick={() => handleEdit(user._id)} className="text-yellow-500 hover:text-yellow-700">
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button onClick={() => handleDelete(user._id)} className="text-red-500 hover:text-red-700">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination controls */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-[#009FBD] text-white px-4 py-2 rounded"
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="bg-[#009FBD] text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
