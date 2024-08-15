// import logo from './logo.svg';
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
    const token = localStorage.getItem('token');
  
    if (!token) {
      console.error('User is not authenticated, please log in');
      return;
    }
  
    try {
      const dataResponse = await fetch(SummaryApi.addToCartProductCount.url, {
        method: SummaryApi.addToCartProductCount.method,
        credentials: 'include',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      if (!dataResponse.ok) {
        throw new Error(`HTTP error! status: ${dataResponse.status}`);
      }
  
      const dataApi = await dataResponse.json();
      console.log('API Response:', dataApi);
  
      if (dataApi?.data?.count !== undefined) {
        setCartProductCount(dataApi.data.count);
      } else {
        console.error('Failed to fetch cart count:', dataApi.message || dataApi);
      }
    } catch (error) {
      console.error('Error fetching cart count:', error);
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
      <Context.Provider value={{ cartProductCount, setCartProductCount, fetchUserDetails, fetchUserAddToCart }}>

          
        <ToastContainer 
          position='top-center'
        />
        
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