import React from 'react';

const Card = () => {
  return (
    
    <div className="flex flex-wrap justify-center  bg-slate-200 py-10 md:py-14 lg:py-16 ">
 
      
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 sm:w-80 md:w-96 lg:w-96 xl:w-96">
        
        <img src="https://picsum.photos/300/200" alt="Card Image" className="w-full h-48 object-cover" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">E-Waste Disposal Guidelines</div>
          <p className="text-gray-700 text-base">
          Managing electronic waste (e-waste) is crucial to minimize environmental impact and promote sustainable practices. Here are some general guidelines for e-waste management
          </p>
        </div>
        <div className="px-6 py-4 mt-auto">
          <a href="cardpage" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </a>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 sm:w-80 md:w-96 lg:w-96 xl:w-96">
        <img src="https://picsum.photos/300/200" alt="Card Image" className="w-full h-48 object-cover" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">State Pollution Board Control</div>
          <p className="text-gray-700 text-base">
          The State Pollution Control Board (SPCB) is a statutory authority that is responsible for implementing the provisions of the Water Act, Air Act, and other environmental acts and rules
          </p>
        </div>
        <div className="px-6 py-4 mt-auto">
          <a href="cardpage" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </a>
        </div>
      </div>

      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 sm:w-80 md:w-96 lg:w-96 xl:w-96">
        <img src="https://picsum.photos/300/200" alt="Card Image" className="w-full h-48 object-cover" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">E-Waste Rules </div>
          <p className="text-gray-700 text-base">
          E-Waste (Management) Rules, 2022 in force since 1st April, 2023 to manage e-waste in an environmentally sound manner with an improved Extended Producer Responsibility (EPR) regime in place for e-waste recycling
          </p>
        </div>
        <div className="px-6 py-4 mt-auto">
          <a href="cardpage" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </a>
        </div>
      </div>
  

    </div>
  );
};

export default Card;