import React from 'react';
import { Link } from 'react-router-dom'; 

export const Secondnav = () => {
  return (
    <div className="bg-white p-4 lg:p-6 h-16 lg:h-20 flex flex-wrap lg:flex-nowrap items-center">
      <div className="flex items-center">
        <img src='./cdac.png' alt="Logo" className="h-10 lg:h-12 mr-2" />
        <div className="border-r border-gray-500 h-10 lg:h-12 mr-2"></div> 
        <div>
          <span className="text-sm lg:text-sm font-small text-indigo-700">
            उन्नत कंप्यूटिंग के विकास के लिए केंद्र
          </span>
          <br/>
          <span className="text-sm lg:text-sm font-small text-indigo-700">
            CENTER FOR DEVELOPMENT OF ADVANCED COMPUTING
          </span>
        </div>
      </div>

      <div className="flex-grow flex justify-center lg:justify-end mt-4 lg:mt-0 lg:ml-6">
        <nav className="flex flex-col lg:flex-row items-center lg:w-auto">
          
          <Link to="/" className="font-bold px-3 py-2 lg:px-4 lg:py-3 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 mt-2 lg:mt-0 lg:ml-0">Home</Link>
          <Link to="/about" className="font-bold px-3 py-2 lg:px-4 lg:py-3 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 mt-2 lg:mt-0 lg:ml-2">About Us</Link>
          <Link to="/dashboard" className="font-bold px-3 py-2 lg:px-4 lg:py-3 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 mt-2 lg:mt-0 lg:ml-2">Dashboard</Link>
          <Link to="/buyer" className="font-bold px-3 py-2 lg:px-4 lg:py-3 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 mt-2 lg:mt-0 lg:ml-2">Buyer</Link>
          <Link to="/contact" className="font-bold px-3 py-2 lg:px-4 lg:py-3 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 mt-2 lg:mt-0 lg:ml-2">ContactUs</Link>
        </nav>
      </div>
    </div>
  );
};

export default Secondnav;