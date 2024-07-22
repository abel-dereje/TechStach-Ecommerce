import React from 'react'
import Sidebar from './Sidebar'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';



const Products = () => {
  return (
    <div className="flex h-screen">
      <Sidebar /> {/* Sidebar component */}
      
      <div className="flex-1 p-6 bg-gray-100 overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Latest Transactions</h2>
          <Link to="/add-product" className="bg-[#009FBD] hover:bg-[#009FBD] text-white px-4 py-2 rounded flex items-center">
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Add Product
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left">Transaction ID</th>
                  <th className="px-4 py-2 text-left">User</th>
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2 text-left">Amount</th>
                  <th className="px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2">TXN12345</td>
                  <td className="px-4 py-2">John Doe</td>
                  <td className="px-4 py-2">2024-07-18</td>
                  <td className="px-4 py-2">$200.00</td>
                  <td className="px-4 py-2 text-green-500">Completed</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">TXN12346</td>
                  <td className="px-4 py-2">Jane Smith</td>
                  <td className="px-4 py-2">2024-07-17</td>
                  <td className="px-4 py-2">$150.00</td>
                  <td className="px-4 py-2 text-yellow-500">Pending</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">TXN12347</td>
                  <td className="px-4 py-2">Mike Johnson</td>
                  <td className="px-4 py-2">2024-07-16</td>
                  <td className="px-4 py-2">$300.00</td>
                  <td className="px-4 py-2 text-red-500">Failed</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2">TXN12348</td>
                  <td className="px-4 py-2">Alice Brown</td>
                  <td className="px-4 py-2">2024-07-15</td>
                  <td className="px-4 py-2">$250.00</td>
                  <td className="px-4 py-2 text-green-500">Completed</td>
                </tr>
                {/* More rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
