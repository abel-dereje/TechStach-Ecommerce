import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faChartBar, faCog, faBoxOpen, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Dashboard from './Dashboard';

const AdminPanel = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-200">
      {/* Sidebar */}
      <div className="w-full md:w-1/5 bg-white text-slate-600 p-4">
        <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
        <ul className="space-y-2">
          <li>
            <a href="admin-page" className="block py-2 px-4 rounded-lg hover:bg-white hover:text-[#009FBD]">
              <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />
              Dashboard
            </a>
          </li>
          <li>
            <a href="/users" className="block py-2 px-4 rounded-lg hover:bg-white hover:text-[#009FBD]">
              <FontAwesomeIcon icon={faUsers} className="mr-2" />
              Users
            </a>
          </li>
          <li>
            <a href="products" className="block py-2 px-4 rounded-lg hover:bg-white hover:text-[#009FBD]">
              <FontAwesomeIcon icon={faBoxOpen} className="mr-2" />
              Products
            </a>
          </li>
          <li>
            <a href="#orders" className="block py-2 px-4 rounded-lg hover:bg-white hover:text-[#009FBD]">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
              Orders
            </a>
          </li>
          <li>
            <a href="#reports" className="block py-2 px-4 rounded-lg hover:bg-white hover:text-[#009FBD]">
              <FontAwesomeIcon icon={faChartBar} className="mr-2" />
              Reports
            </a>
          </li>
          <li>
            <a href="#settings" className="block py-2 px-4 rounded-lg hover:bg-white hover:text-[#009FBD]">
              <FontAwesomeIcon icon={faCog} className="mr-2" />
              Settings
            </a>
          </li>
        </ul>
      </div>

      
       <Dashboard />        
    </div>
  );
}

export default AdminPanel;
