import React from 'react'; // Import useEffect here
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SummaryApi from './common';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';

function App() {
  const dispatch = useDispatch();
  //const [cartProductCount,setCartProductCount] = useState(0)

  const fetchUserDetails = async () => {
    try {
      const response = await fetch(SummaryApi.current_user.url, {
        method: SummaryApi.current_user.method,
        credentials: 'include',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include the token here
        },
      });
  
      const data = await response.json();
  
      if (data.success) {
        dispatch(setUserDetails(data.data));
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error('Failed to fetch user details.');
    }
  };
  

  return (
    <>
      <Context.Provider value={{ fetchUserDetails }}>
        <ToastContainer position='top-center' />
        <Header />
        <main className='min-h-[calc(100vh-120px)] pt-16'>
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
