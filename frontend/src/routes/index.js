import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import ForgotPassword from '../Pages/ForgotPassword';
import SignUp from '../Pages/SignUp';
import AdminPanel from '../Pages/AdminPanel';
import User from '../Pages/User';
import AddProduct from '../Pages/AddProduct';
import Products from '../Pages/Products';
import ProductDetails from '../Pages/ProductDetails';
import Cart from '../Pages/Cart';
import SearchProduct from '../Pages/searchProduct';
import CategoryProduct from '../Pages/CategoryProduct';
import UpdateProduct from '../Pages/UpdateProduct';
import UpdateUser from '../Pages/updateUser';
import ContactUs from '../Pages/ContactUs';
import Service from '../Pages/Service';
import Checkout from '../Pages/Checkout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
      {
        path: '/admin-page',
        element: <AdminPanel />,
      },
      {
        path: '/add-product',
        element: <AddProduct />,
      },
      {
        path : "/category-product",
        element : <CategoryProduct/>
    },
      {
        path: '/products',
        element: <Products />
      },
      {
        path : '/product/:id',
        element : <ProductDetails />
    },
      {
        path : '/:id',
        element : <UpdateProduct />
    },
    {
      path : 'cart',
      element : <Cart/>
    },
    
    {
      path : 'checkout',
      element : <Checkout/>
    },
    {
      path : "search",
      element : <SearchProduct />
  },
      {
        path: '/users',
        element: <User />,
      },
      {
        path: '/contact',
        element: <ContactUs />,
      },
      {
        path: '/services',
        element: <Service />,
      },
      {
        path : '/users/:userId',
        element : <UpdateUser />
    },
    ],
  },
]);

export default router;
