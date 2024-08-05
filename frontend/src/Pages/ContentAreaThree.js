import React, { useState, useEffect } from "react";
import SummaryApi from "../common";
import axios from "axios";
import { Link } from "react-router-dom";
import displayINRCurrency from "../helpers/displayCurrency";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ContentAreaThree = () => {
  const [contentProductsThree, setContentProductsThree] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { url, method } = SummaryApi.getProducts;

        if (method !== "get") {
          throw new Error("API method is not correctly defined.");
        }

        const response = await axios({
          url,
          method,
        });

        if (response.data.success && Array.isArray(response.data.data)) {
          setContentProductsThree(response.data.data);
        } else {
          throw new Error("API response does not contain an array of products");
        }

        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch products:", err.message);
        setError("Failed to fetch products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const limitedProducts = contentProductsThree.slice(0, 6);

  return (
    <div className="bg-white p-4 mb-4 animate-slide-in-left">
              <h2 className="text-xl font-bold mb-4">Printers</h2>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        // navigation 
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }} // Ensure autoplay is enabled
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {limitedProducts.map((product, index) => (
            
          <SwiperSlide key={index}>
            <div className="flex flex-col items-left">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                  <Link to="#">
                    <img
                      src={product.productImage && product.productImage.length > 0 ? product.productImage[1] : 'No Image'}
                      alt={product.productName}
                      className="w-50 h-19 object-cover rounded-md hover:transform hover:translate-x-4 transition-transform"
                    />
                  </Link>
                  <div className="text-center mt-2">
                    <p className="font-bold text-slate-600 hover:bg-white hover:text-[#009FBD]">{product.productName}</p>
                    <p className="text-sm line-through text-slate-600">{displayINRCurrency(159.99)}</p>
                    <p className="font-bold text-slate-600 hover:bg-white hover:text-[#009FBD]">{displayINRCurrency(product.price)}</p>
                  </div>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ContentAreaThree;