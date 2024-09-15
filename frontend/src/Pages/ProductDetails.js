import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SummaryApi from '../common';
import { FaStar, FaStarHalf } from "react-icons/fa";
import displayCurrency from '../helpers/displayCurrency';
import CategroyWiseProductDisplay from '../components/CategoryWiseProductDisplay';
import addToCart from '../helpers/addToCart';
import Context from '../context';
import { toast } from 'react-toastify';

const ProductDetails = () => {
  const { id } = useParams(); // Extract id from useParams
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const productImageListLoading = new Array(4).fill(null);
  const [activeImage, setActiveImage] = useState("");
  const [zoomImageCoordinate, setZoomImageCoordinate] = useState({ x: 0, y: 0 });
  const [zoomImage, setZoomImage] = useState(false);
  const { fetchUserAddToCart } = useContext(Context);
  const navigate = useNavigate();

  const fetchProductDetails = async () => {
    if (!id) {
        console.error("Product ID is not defined");
        return;
    }

    console.log("Product ID:", id);

    setLoading(true);
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(SummaryApi.productDetails.url, {
            method: SummaryApi.productDetails.method,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` // Pass the token here
            },
            body: JSON.stringify({ productId: id })
        });
        const dataResponse = await response.json();
        if (response.ok && dataResponse?.data) {
            setData(dataResponse.data);
            setActiveImage(dataResponse.data.productImage[0]);
        } else {
            console.error("Error fetching product details:", dataResponse.message);
        }
    } catch (error) {
        console.error("Error during fetch:", error);
    }
    setLoading(false);
};


  useEffect(() => {
    console.log("Fetching product details for ID:", id);
    fetchProductDetails();
  }, [id]);

  const handleMouseEnterProduct = (imageURL) => {
    setActiveImage(imageURL);
  };

  const handleZoomImage = useCallback((e) => {
    setZoomImage(true);
    const { left, top, width, height } = e.target.getBoundingClientRect();

    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    setZoomImageCoordinate({ x, y });
  }, []);

  const handleLeaveImageZoom = () => {
    setZoomImage(false);
  };

  const handleAddToCart = async (e, id) => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast('Please Login...!');
      return;
    }
  
    await addToCart(e, id);
    fetchUserAddToCart();
  };
  

  const handleBuyProduct = async (e, id) => {
    await addToCart(e, id);
    fetchUserAddToCart();
    navigate("/cart");
  };

  return (
    <div className='container mx-auto p-4'>
      <div className='min-h-[200px] flex flex-col lg:flex-row gap-4'>
        <div className='h-96 flex flex-col lg:flex-row-reverse gap-4'>
          <div className='h-[300px] w-[300px] lg:h-96 lg:w-96 bg-slate-200 relative p-2'>
            {activeImage && (
              <img src={activeImage} alt="Product" className='h-full w-full object-scale-down mix-blend-multiply' onMouseMove={handleZoomImage} onMouseLeave={handleLeaveImageZoom} />
            )}
            {zoomImage && activeImage && (
              <div className='hidden lg:block absolute min-w-[500px] overflow-hidden min-h-[400px] bg-slate-200 p-1 -right-[510px] top-0'>
                <div
                  className='w-full h-full min-h-[400px] min-w-[500px] mix-blend-multiply scale-150'
                  style={{
                    background: `url(${activeImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: `${zoomImageCoordinate.x * 100}% ${zoomImageCoordinate.y * 100}%`
                  }}
                ></div>
              </div>
            )}
          </div>

          <div className='h-full'>
            {loading ? (
              <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full'>
                {productImageListLoading.map((_, index) => (
                  <div className='h-20 w-20 bg-slate-200 rounded animate-pulse' key={"loadingImage" + index}></div>
                ))}
              </div>
            ) : (
              <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full'>
                {data?.productImage?.map((imgURL) => (
                  <div className='h-20 w-20 bg-slate-200 rounded p-1' key={imgURL}>
                    <img src={imgURL} alt="Product Thumbnail" className='w-full h-full object-scale-down mix-blend-multiply cursor-pointer' onMouseEnter={() => handleMouseEnterProduct(imgURL)} onClick={() => handleMouseEnterProduct(imgURL)} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {loading ? (
          <div className='grid gap-1 w-full'>
            <p className='bg-slate-200 animate-pulse h-6 lg:h-8 w-full rounded-full inline-block'></p>
            <p className='text-2xl lg:text-4xl font-medium h-6 lg:h-8 bg-slate-200 animate-pulse w-full'></p>
            <p className='capitalize text-slate-400 bg-slate-200 min-w-[100px] animate-pulse h-6 lg:h-8 w-full'></p>
            <div className='text-[#009FBD] bg-slate-200 h-6 lg:h-8 animate-pulse flex items-center gap-1 w-full'></div>
            <div className='flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1 h-6 lg:h-8 animate-pulse w-full'>
              <p className='text-[#009FBD] bg-slate-200 w-full'></p>
              <p className='text-slate-400 line-through bg-slate-200 w-full'></p>
            </div>
            <div className='flex items-center gap-3 my-2 w-full'>
              <button className='h-6 lg:h-8 bg-slate-200 rounded animate-pulse w-full'></button>
              <button className='h-6 lg:h-8 bg-slate-200 rounded animate-pulse w-full'></button>
            </div>
            <div className='w-full'>
              <p className='text-slate-600 font-medium my-1 h-6 lg:h-8 bg-slate-200 rounded animate-pulse w-full'></p>
              <p className='bg-slate-200 rounded animate-pulse h-10 lg:h-12 w-full'></p>
            </div>
          </div>
        ) : (
          data && (
            <div className='flex flex-col gap-1'>
              <p className='bg-[#009FBD] text-white px-2 rounded-full inline-block w-fit'>{data.brandName}</p>
              <h2 className='text-2xl lg:text-4xl font-medium'>{data.productName}</h2>
              <p className='capitalize text-slate-400'>{data.category}</p>
              <div className='text-[#009FBD] flex items-center gap-1'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>
              <div className='flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1'>
                <p className='text-[#009FBD]'>{displayCurrency(data.sellingPrice)}</p>
                <p className='text-slate-400 line-through'>{displayCurrency(data.price)}</p>
              </div>
              <div className='flex items-center gap-3 my-2'>
                <button className='border-2 bg-[#009FBD] rounded px-3 py-1 min-w-[120px] font-medium text-white bg-[#009FBD] hover:text-slate-600 hover:bg-white' onClick={(e) => handleBuyProduct(e, data._id)}>Buy</button>
                <button className='border-2 bg-[#009FBD] rounded px-3 py-1 min-w-[120px] font-medium text-white bg-[#009FBD] hover:text-slate-600 hover:bg-white' onClick={(e) => handleAddToCart(e, data._id)}>Add To Cart</button>
              </div>
              <div>
                <p className='text-slate-600 font-medium my-1'>Description :</p>
                <p>{data.description}</p>
              </div>
            </div>
          )
        )}
      </div>

      {data?.category && (
        <CategroyWiseProductDisplay category={data.category} heading={"Recommended Product"} />
      )}
    </div>
  );
};

export default ProductDetails;
