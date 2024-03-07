import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Box = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth);
  const [boxToShow, setBoxToShow] = useState(16);
  const [eWasteData, setEwasteData] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    axios.get('http://localhost:3001/eWasteData')
    .then(response => {
      setEwasteData(response.data)
    })

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);
  
  const handleLoadBoxes = () => {
    setBoxToShow((prevBox) => prevBox + 4)
  }

  const mostSellData = eWasteData.filter(item => item.sell > 480);
  const remainingData = eWasteData;

  return (
    <>
      <motion.main
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className={`mt-3 flex justify-evenly items-center flex-wrap ${isMobile > 480 && 'flex flex-wrap justify-evenly items-center'}`}>
      <h1 className='md:ml-12 md:text-2xl border border-solid border-transparent shadow-xl text-base ml-2 font-medium mt-3 sm:text-lg'>Most sell</h1>
      <section className="mt-3 flex justify-evenly items-center flex-wrap">
        {mostSellData.map((item) => (
          <div key={item.id} className={`hover:scale-105 transition-transform ease-in delay-75 border mb-5 border-transparent shadow-lg border-solid rounded-md h-72 w-2/3 md:w-1/4 md:mx-[2px] lg:w-1/5 xl:w-1/5`}>
            <img src={item.img} className='border border-solid border-transparent m-2 w-11/12 shadow-md rounded-md h-44 object-contain' alt='Product' />
            <h1 className='ml-2 font-semibold'>{`Rs: ${item.rs}`}</h1>
            <p className='ml-2 font-normal'>{item.descp}</p>
          </div>
        ))}
      </section>
      <h1 className='md:ml-12 md:text-2xl text-base ml-2 border border-solid border-transparent shadow-xl font-medium mt-12 sm:text-lg'>Recommendations</h1>
      <section className={`mt-3 flex justify-evenly items-center flex-wrap ${isMobile > 480 && 'flex flex-wrap justify-evenly items-center'}`}>
        {remainingData.slice(0, boxToShow).map((item) => (
          <div key={item.id} className={`hover:scale-105 transition-transform ease-in border mb-5 border-transparent shadow-lg border-solid rounded-md h-72 w-2/3 md:w-1/4 md:mx-[2px] lg:w-1/5 xl:w-1/5 ${isMobile > 480 && 'h-72 w-2/6 mx-10 mt-5'}`}>
            <img src={item.img} className='border border-solid border-transparent m-2 w-11/12 shadow-md rounded-md h-44 object-contain' alt='Product' />
            <h1 className='ml-2 font-semibold'>{`Rs: ${item.rs}`}</h1>
            <p className='ml-2 font-normal'>{item.descp}</p>
          </div>
        ))}
      </section>
      </motion.main>
      {eWasteData.length > boxToShow ? <div className='flex justify-center items-center mb-1'>
          <motion.button
          initial = {{opacity: 0, y: 50}}
          animate = {{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
            className='border border-solid border-black p-2 w-32 rounded-md bg-[#2A55E5] text-white hover:bg-white hover:text-black'
            onClick={handleLoadBoxes}
          >
            Load More
          </motion.button>
        </div> : <div></div> }
    </>
  );
};

export default Box;
