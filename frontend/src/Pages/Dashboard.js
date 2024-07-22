import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-4">
      <div className="flex flex-wrap">
        {/* Card 1 */}
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Total Sales</h2>
            <p className="text-2xl">$15,000</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">New Users</h2>
            <p className="text-2xl">150</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-gradient-to-r from-yellow-400 to-red-500 text-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Pending Orders</h2>
            <p className="text-2xl">75</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-gradient-to-r from-teal-400 to-indigo-500 text-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Products</h2>
            <p className="text-2xl">350</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Revenue</h2>
            <p className="text-2xl">$120,000</p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-gradient-to-r from-pink-400 to-red-500 text-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Customer Feedback</h2>
            <p className="text-2xl">1,200</p>
          </div>
        </div>
      </div>

      {/* Latest Transactions */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Latest Transactions</h2>
        <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto">
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
  );
};

export default Dashboard;