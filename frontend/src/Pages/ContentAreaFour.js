import React, { useState, useEffect } from "react";
import SummaryApi from "../common";
import axios from "axios";
import displayINRCurrency from "../helpers/displayCurrency";

const ContentAreaFour = () => {
  const [contentAreaFour, setContentAreaFour] = useState([]);
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
          setContentAreaFour(response.data.data);
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

  // Limit to 2 products for display
  const limitedProducts = contentAreaFour.slice(0, 2);

  return (
    <div className="bg-white p-4 mb-4">
      <h2 className="text-xl font-bold mb-4">Phone and Computing</h2>
      <div className="grid grid-cols-2 gap-4">
        {limitedProducts.map((product, index) => (
          <div key={index} className="flex flex-col items-center border p-4 rounded-md shadow-md">
            <div className="flex flex-row gap-2 mb-4">
              <img
                src={product.productImage && product.productImage.length > 0 ? product.productImage[0] : 'No Image'}
                alt=""
                className="w-1/2 h-40 object-cover rounded-md"
              />
              <img
                src={product.productImage && product.productImage.length > 1 ? product.productImage[1] : 'No Image'}
                alt=""
                className="w-1/2 h-40 object-cover rounded-md"
              />
            </div>
            <div className="text-center mt-2">
              <p className="font-bold text-slate-600">{product.productName}</p>
              <p className="text-sm text-gray-500">{displayINRCurrency(product.price)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentAreaFour;
