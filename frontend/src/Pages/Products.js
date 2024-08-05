import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { faPlus, faTrash, faEye, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import SummaryApi from '../common/index';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, ] = useState(5); // Updated to 5 items per page

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { url, method } = SummaryApi.getProducts;

        if (method !== 'get') {
          throw new Error('API method is not correctly defined.');
        }

        const response = await axios({
          url,
          method
        });

        if (response.data.success && Array.isArray(response.data.data)) {
          setProducts(response.data.data);
        } else {
          throw new Error('API response does not contain an array of products');
        }

        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch products:', err.message);
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = (id) => {
    console.log(`Delete product with id: ${id}`);
  };

  const handleView = (id) => {
    console.log(`View product with id: ${id}`);
  };

  const handleEdit = (id) => {
    console.log(`Edit product with id: ${id}`);
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex h-screen">
      <Sidebar /> {/* Sidebar component */}
      
      <div className="flex-1 p-6 bg-gray-100 overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Products</h2>
          <Link to="/add-product" className="bg-[#009FBD] hover:bg-[#009FBD] text-white px-4 py-2 rounded flex items-center">
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Add Product
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left">No</th>
                  <th className="px-4 py-2 text-left">Image</th>
                  <th className="px-4 py-2 text-left">Product Name</th>
                  <th className="px-4 py-2 text-left">Brand</th>
                  <th className="px-4 py-2 text-left">Category</th>
                  {/* <th className="px-4 py-2 text-left">Price</th> */}
                  <th className="px-4 py-2 text-left">Selling Price</th>
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentProducts.map((product, index) => (
                  <tr key={product._id} className="border-t">
                    <td className="px-4 py-2">{indexOfFirstProduct + index + 1}</td>
                    <td className="px-4 py-2">
                      {product.productImage.length > 0 ? (
                        <img
                          src={product.productImage[0]}
                          alt={product.productName}
                          className="w-12 h-12 object-cover" // Minimized image size
                        />
                      ) : (
                        'No Image'
                      )}
                    </td>
                    <td className="px-4 py-2">{product.productName}</td>
                    <td className="px-4 py-2">{product.brandName}</td>
                    <td className="px-4 py-2">{product.category}</td>
                    <td className="px-4 py-2">{product.price}</td>
                    {/* <td className="px-4 py-2">{product.sellingPrice}</td> */}
                    <td className="px-4 py-2">{new Date(product.createdAt).toLocaleDateString()}</td>
                    <td className="px-4 py-2 flex space-x-2">
                      <button onClick={() => handleView(product._id)} className="text-blue-500 hover:text-blue-700">
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                      <button onClick={() => handleEdit(product._id)} className="text-yellow-500 hover:text-yellow-700">
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button onClick={() => handleDelete(product._id)} className="text-red-500 hover:text-red-700">
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

export default Products;
