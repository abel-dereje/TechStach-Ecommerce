import React, { useState, useEffect } from 'react';
import SummaryApi from '../common';
import axios from 'axios';
import { Link } from 'react-router-dom';
import displayCurrency from '../helpers/displayCurrency';

const TrendingProducts = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          setTrendingProducts(response.data.data);
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Limit to the first 8 products
  const limitedProducts = trendingProducts.slice(0, 8);

  return (
    <div className='bg-white p-4 mb-4'>
      <h2 className="text-xl font-bold mb-4">Trending Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {limitedProducts.map((product, index) => (
          <Link to={`/product/${product._id}`} key={index} className="text-white px-4 py-2 rounded flex items-center">
            <div className="flex items-center space-x-4 mb-4">
              {product.productImage && product.productImage.length > 0 ? (
                <img
                  src={product.productImage[1]}
                  alt={product.productName}
                  className="w-24 h-24 object-cover rounded-md"
                />
              ) : (
                'No Image'
              )}
              <div>
                <p className="font-bold text-slate-600 hover:bg-white hover:text-[#009FBD]">{product.productName}</p>
                <p className="text-sm line-through text-slate-600">{displayCurrency (159.99)}</p>
                <p className="font-bold text-slate-600 hover:bg-white hover:text-[#009FBD]">{displayCurrency(product.price)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
