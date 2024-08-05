import React, { useState, useEffect } from 'react';
import AddProduct from './AddProduct';
import { toast } from 'react-toastify';

const ParentComponent = () => {
  const [products, setProducts] = useState([]);
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);

  const fetchData = async () => {
    // Fetch the product data from the backend
    const response = await fetch('API_URL_FOR_PRODUCTS');
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddProductClose = () => {
    setIsAddProductOpen(false);
  };

  const handleOpenAddProduct = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error("Please log in first");
      return;
    }
    setIsAddProductOpen(true);
  };

  return (
    <div>
      <button onClick={handleOpenAddProduct}>Add Product</button>
      {isAddProductOpen && (
        <AddProduct onClose={handleAddProductClose} fetchData={fetchData} />
      )}
      {/* Render products */}
    </div>
  );
};

export default ParentComponent;
