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
        path: '/products',
        element: <Products />,
      },
      {
        path : '/product/:id',
        element : <ProductDetails />
    },
      {
        path: '/users',
        element: <User />,
      },
    ],
  },
]);

export default router;
