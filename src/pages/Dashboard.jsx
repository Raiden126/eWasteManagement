import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100">
<div className="bg-white h-screen md:w-64 flex-shrink-0 overflow-y-auto relative">
  <nav className="p-4">
    <ul className="space-y-4">
      <li>
        <a href="#" className="block px-3 py-2 rounded-md text-black hover:bg-opacity-75 transition duration-300 ease-in-out" onclick="showForm()">Overview</a>
      </li>
      <li>
        <a href="#" className="block px-3 py-2 rounded-md text-black hover:bg-opacity-75 transition duration-300 ease-in-out">Vendor's List</a>
      </li>
      <li>
        <a href="#" className="block px-3 py-2 rounded-md text-black hover:bg-opacity-75 transition duration-300 ease-in-out">Transactions</a>
      </li>
      <li>
        <a href="#" className="block px-3 py-2 rounded-md text-black hover:bg-opacity-75 transition duration-300 ease-in-out">Goegraphy</a>
      </li>
      <li>
        <a href="#" className="block px-3 py-2 rounded-md text-black hover:bg-opacity-75 transition duration-300 ease-in-out">Performance</a>
      </li>
    </ul>
  </nav>
</div>


      {/* Card Container */}
      <div className="w-full md:w-3/4 p-4 ml-10">
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Card content */}
          <h1 className="text-xl font-bold mb-4">C-DAC CINE</h1>
          <p className="text-gray-700">
           WELCOME TO PUBLIC DASHBOARD
          </p>
        </div>

        <div className="flex flex-wrap justify-between mt-8 ">
          <div className="w-full md:w-1/4 bg-blue-500 rounded-lg p-4 shadow-md text-white mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Box 1</h2>
            <p className="mt-2">Content </p>
          </div>
          <div className="w-full md:w-1/4 bg-green-500 rounded-lg p-4 shadow-md text-white mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Box 2</h2>
            <p className="mt-2">Content </p>
          </div>
          <div className="w-full md:w-1/4 bg-purple-500 rounded-lg p-4 shadow-md text-white mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Box 3</h2>
            <p className="mt-2">Content </p>
          </div>
        </div>

        <div className="flex mt-8 justify-center">
  <div className="w-full max-w-3xl bg-white rounded-lg p-4 shadow-lg">
    <h2 className="text-lg font-bold mb-4">Recent Activity</h2>
    <div className="overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Applicant Name</th>
            <th className="px-4 py-2 text-left">College Name</th>
            <th className="px-4 py-2 text-left">Institute Location</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-8 py-2 ">Ruchika</td>
            <td className="px-8 py-2">AUS</td>
            <td className="px-8 py-2">Silchar</td>
            <td className="px-4 py-2">Completed</td>
          </tr>
          <tr>
            <td className="px-8 py-2 ">Ruchika</td>
            <td className="px-8 py-2">AUS</td>
            <td className="px-8 py-2">Silchar</td>
            <td className="px-4 py-2">Completed</td>
          </tr>
          <tr>
            <td className="px-8 py-2 ">Ruchika</td>
            <td className="px-8 py-2">AUS</td>
            <td className="px-8 py-2">Silchar</td>
            <td className="px-4 py-2">Completed</td>
          </tr>
          <tr>
            <td className="px-8 py-2 ">Ruchika</td>
            <td className="px-8 py-2">AUS</td>
            <td className="px-8 py-2">Silchar</td>
            <td className="px-4 py-2">Completed</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  </div>
</div>




      </div>
      
    </div>
  );
};

export default Dashboard;