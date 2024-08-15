import SummaryApi from "../common"
import { toast } from 'react-toastify'

const addToCart = async (e, productId) => {
    e.preventDefault();
  
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('Please log in to add products to the cart.');
      return;
    }
  
    try {
      const response = await fetch(SummaryApi.addToCart.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ productId }),
      });
  
      const data = await response.json();
      
      console.log("Response from backend:", data);
  
      if (response.ok) {
        if (data.success) {
          toast.success(data.message || 'Product added to cart!');
        } else if (data.error && data.message === 'Already exists in Add to cart') {
          toast.error(data.message || 'Product is already in your cart.');
        }
      } else {
        toast.error(data.message || 'Error adding product to cart.');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
      console.error("Error in addToCart:", error);
    }
  };
  
  
  


export default addToCart