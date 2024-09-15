import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import SummaryApi from './common';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';

function App() {
  const dispatch = useDispatch()
  const [cartProductCount,setCartProductCount] = useState(0)

  const fetchUserDetails = async()=>{
      const dataResponse = await fetch(SummaryApi.current_user.url,{
        method : SummaryApi.current_user.method,
        credentials : 'include'
      })

      const dataApi = await dataResponse.json()

      if(dataApi.success){
        dispatch(setUserDetails(dataApi.data))
      }
  }

  const fetchUserAddToCart = async () => {
    try {
        const token = localStorage.getItem('token');
        const dataResponse = await fetch(SummaryApi.countAddToCartProduct.url, {
            method: SummaryApi.countAddToCartProduct.method,
            credentials: 'include',
            headers: {
        'Authorization': `Bearer ${token}`
    }
        });

        const dataApi = await dataResponse.json();
        console.log("Cart Product Count API Response:", dataApi);

        if (dataApi.success && dataApi?.data?.count !== undefined) {
            setCartProductCount(dataApi.data.count);
        } else {
            console.error("Failed to fetch cart count or count is undefined:", dataApi.message || dataApi);
            setCartProductCount(0); // Set to 0 if the count is undefined or the API call fails
        }
    } catch (error) {
        console.error("Error fetching cart count:", error);
        setCartProductCount(0); // Set to 0 in case of an error
    }
};


  useEffect(()=>{
    /**user Details */
    fetchUserDetails()
    /**user Details cart product */
    fetchUserAddToCart()

  },[])
  return (
    <>
      <Context.Provider value={{
          fetchUserDetails,
          cartProductCount, 
          fetchUserAddToCart
      }}>
        <ToastContainer position='top-center' />
        
        <Header/>
        <main className='min-h-[calc(100vh-120px)] pt-16'>
          <Outlet/>
        </main>
        <Footer/>
      </Context.Provider>
    </>
  );
}

export default App;