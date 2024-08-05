import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SummaryApi from '../common';
import displayINRCurrency from '../helpers/displayCurrency';

const SalesCard = () => {
  const [salesProducts, setSalesProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSalesProducts = async () => {
      try {
        const { url, method } = SummaryApi.getProducts; // Assuming getSalesProducts is defined in SummaryApi

        if (method !== 'get') {
          throw new Error('API method is not correctly defined.');
        }

        const response = await axios({
          url,
          method,
        });

        if (response.data.success && Array.isArray(response.data.data)) {
          setSalesProducts(response.data.data);
        } else {
          throw new Error('API response does not contain an array of products');
        }

        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch sales products:', err.message);
        setError('Failed to fetch sales products');
        setLoading(false);
      }
    };

    fetchSalesProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-4">Sales</h2>
      {salesProducts.slice(0, 8).map((product, index) => (
        <div key={index} className="flex items-center space-x-4 mb-4">
          {product.productImage && product.productImage.length > 0 ? (
            <img
              src={product.productImage[0]}
              alt={product.productName}
              className="w-24 h-24 object-cover rounded-md"
            />
          ) : (
            'No Image'
          )}
          <div>
            <p className="font-bold text-slate-600 hover:bg-white hover:text-[#009FBD]">
              {product.productName}
            </p>
            <p className="text-sm line-through text-slate-600">{product.originalPrice}</p>
            <p className="text-sm line-through text-slate-600">{displayINRCurrency (59.99)}</p>
            <p className="text-sm text-[#009FBD]">{displayINRCurrency (product.price)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SalesCard;

