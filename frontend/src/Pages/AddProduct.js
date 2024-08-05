import React, { useState } from 'react';
import Sidebar from './Sidebar';
import SummaryApi from '../common';
import ProductCategory from '../helpers/ProductCategory';
import DisplayImage from './DisplayImage';
import { toast } from 'react-toastify';
import uploadImage from '../helpers/uploadImage';
import { MdDelete } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";

const AddProduct = () => {
  const [data, setData] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    description: "",
    price: "",
    sellingPrice: ""
  });
  const [openFullScreenImage, setOpenFullScreenImage] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUploadProduct = async (e) => {
    const file = e.target.files[0];
    const uploadImageCloudinary = await uploadImage(file);

    setData((prev) => ({
      ...prev,
      productImage: [...prev.productImage, uploadImageCloudinary.url]
    }));
  };

  const handleDeleteProductImage = (index) => {
    const newProductImage = [...data.productImage];
    newProductImage.splice(index, 1);
    setData((prev) => ({ ...prev, productImage: [...newProductImage] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const token = localStorage.getItem('token');
    console.log("Token retrieved from localStorage:", token);  // Log the token
  
    if (!token) {
      toast.error("Please log in first");
      return;
    }
  
    const response = await fetch(SummaryApi.uploadProduct.url, {
      method: SummaryApi.uploadProduct.method,
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,  // Include the token in the headers
      },
      body: JSON.stringify(data),
    });
  
    const responseData = await response.json();
    console.log("Response Data:", responseData); 
  
    if (responseData.success) {
      toast.success(responseData.message);
      // onClose();  // Call onClose to close the modal
      // fetchData();  // Call fetchData to refresh the product list
    } else {
      toast.error(responseData.message);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-200">
        <div className="w-full max-w-md mx-auto bg-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-center">Add Product</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="grid">
              <label className="mb-1">Product Name:</label>
              <div className="bg-slate-100 p-2 rounded">
                <input
                  type="text"
                  name="productName"
                  value={data.productName}
                  onChange={handleOnChange}
                  placeholder="Enter product name"
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="grid">
              <label className="mb-1">Brand Name:</label>
              <div className="bg-slate-100 p-2 rounded">
                <input
                  type="text"
                  name="brandName"
                  value={data.brandName}
                  onChange={handleOnChange}
                  placeholder="Enter brand name"
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <label htmlFor='category' className='mt-3'>Category :</label>
              <select required value={data.category} name='category' onChange={handleOnChange} className='p-2 bg-slate-100 border rounded'>
                  <option value={""}>Select Category</option>
                  {
                    ProductCategory.map((el, index) => (
                      <option value={el.value} key={el.value + index}>{el.label}</option>
                    ))
                  }
              </select>
            
            <label htmlFor='productImage' className='mt-3'>Product Image :</label>
              <label htmlFor='uploadImageInput'>
              <div className='p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center cursor-pointer'>
                        <div className='text-slate-500 flex justify-center items-center flex-col gap-2'>
                          <span className='text-4xl'><FaCloudUploadAlt /></span>
                          <p className='text-sm'>Upload Product Image</p>
                          <input type='file' id='uploadImageInput' className='hidden' onChange={handleUploadProduct} />
                        </div>
              </div>
              </label>
              <div>
                  {
                    data?.productImage[0] ? (
                        <div className='flex items-center gap-2'>
                            {
                              data.productImage.map((el, index) => (
                                  <div className='relative group' key={index}>
                                      <img 
                                        src={el} 
                                        alt={el} 
                                        width={80} 
                                        height={80}  
                                        className='bg-slate-100 border cursor-pointer'  
                                        onClick={() => {
                                          setOpenFullScreenImage(true);
                                          setFullScreenImage(el);
                                        }}/>

                                        <div className='absolute bottom-0 right-0 p-1 text-white bg-red-600 rounded-full hidden group-hover:block cursor-pointer' onClick={() => handleDeleteProductImage(index)}>
                                          <MdDelete/>  
                                        </div>
                                  </div>
                                ))
                            }
                        </div>
                    ) : (
                      <p className='text-red-600 text-xs'>*Please upload product image</p>
                    )
                  }
                  
              </div>
              <label htmlFor='description' className='mt-3'>Description :</label>
              <textarea 
                className='h-28 bg-slate-100 border resize-none p-1' 
                placeholder='enter product description' 
                rows={3} 
                onChange={handleOnChange} 
                name='description'
                value={data.description}
              />
            <div className="grid">
              <label className="mb-1">Price:</label>
              <div className="bg-slate-100 p-2 rounded">
                <input
                  type="text"
                  name="price"
                  value={data.price}
                  onChange={handleOnChange}
                  placeholder="Enter price"
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="grid">
              <label className="mb-1">Selling Price:</label>
              <div className="bg-slate-100 p-2 rounded">
                <input
                  type="text"
                  name="sellingPrice"
                  value={data.sellingPrice}
                  onChange={handleOnChange}
                  placeholder="Enter selling price"
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <button
              style={{
                backgroundColor: "#009FBD",
                transition: "background-color 0.3s",
              }}
              className="bg-[#009FBD] hover:bg-[#009FBD] text-white px-6 py-2 w-full rounded-full hover:scale-110 transition-all"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
      {openFullScreenImage && (
        <DisplayImage onClose={() => setOpenFullScreenImage(false)} imgUrl={fullScreenImage} />
      )}
    </div>
  );
};

export default AddProduct;
