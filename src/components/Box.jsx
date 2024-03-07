import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Box = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth);
  const [boxToShow, setBoxToShow] = useState(16);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const eWasteData = [
    {
      "id": 1,
      "sell":789,
      "img": "https://rukminim2.flixcart.com/image/612/612/xif0q/printer/s/8/d/-original-imafkykednshkhx5.jpeg?q=70",
      "rs": "12000",
      "descp": "Canon PIXMA MG2470 All-in-One Inkjet Printer",
      "title": "Printer"
    },
    {
      "id": 2,
      "sell":580,
      "img": "https://rukminim2.flixcart.com/image/612/612/kovsvbk0/keyboard/multi-device-keyboard/m/u/z/150-wired-mouse-and-keyboard-hp-original-imag38q6pxvzzt4g.jpeg?q=70",
      "rs": "1000",
      "descp": "HP 150 Wired Mouse and Keyboard Wired USB Multi-device",
      "title": "Keyboard"
    },
    {
      "id": 3,
      "sell":899,
      "img": "https://rukminim2.flixcart.com/image/612/612/ups/d/d/k/1-year-warranty-extesion-pack-for-apc-ups-model-be700y-ind-apc-original-imae9gzn9e5kpyfs.jpeg?q=70",
      "rs": "5000",
      "descp": "APC Back-UPS BE700Y-IND UPS",
      "title": "Printer"
    },
    {
      "id": 4,
      "sell":789,
      "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/e/i/f/-original-imagpu2tmee2jvds.jpeg?q=70",
      "rs": "11000",
      "descp": "LG 27 inch Full HD LED Backlit IPS Panel with OnScreen Control",
      "title": "Monitor"
    },
    {
      "id": 5,
      "sell":789,
      "img": "https://rukminim2.flixcart.com/image/612/612/kykgb680/digital-security-softwr/h/o/h/-original-imagarmxemfeprtz.jpeg?q=70",
      "rs": "700",
      "descp": "K7 Latest Version 3 PC 1 Year Total Security (Email Del.",
      "title": "Anti-Virus"
    },
    {
      "id": 6,
      "sell":700,
      "img": "https://rukminim2.flixcart.com/image/612/612/xif0q/printer/0/k/q/-original-imagnuwe86ysxha6.jpeg?q=70",
      "rs": "6000",
      "descp": "Egate i9 Pro with Keystone, Bluetooth, Tripod FHD 1080 ...",
      "title": "TriPod"
    },
    {
      "id": 7,
      "sell":609,
      "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/r/r/5/-original-imagupz9vdcgzvnf.jpeg?q=70",
      "rs": "20000",
      "descp": "SAMSUNG Galaxy Book 2 Intel Core i5 12th Gen 1235U - (16 GB/512 G...",
      "title": "Laptop"
    },
    {
      "id": 8,
      "sell":600,
      "img": "https://rukminim2.flixcart.com/image/612/612/xif0q/mouse/i/m/l/wired-usb-mouse-with-3-handy-buttons-with-scroll-wheel-1000-dpi-original-imagsph32hr3gfnn.jpeg?q=70",
      "rs": "4500",
      "descp": "Frontech MS-0047 Wired Optical Mouse",
      "title": "Mouse"
    },
    {
      "id": 9,
      "sell":400,
      "img": "https://rukminim2.flixcart.com/image/612/612/keyboard/laptop-keyboard/q/d/v/amkette-xcite-neo-original-imaesahtwc3ybdnz.jpeg?q=70",
      "rs": "1500",
      "descp": "AMKETTE 398PP, Xcite NEO Wired USB Laptop",
      "title": "Mouse"
    },
    {
      "id": 10,
      "sell": 430,
      "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/b/r/w/gemibook-x-pro-laptop-chuwi-original-imagwfm84fgdm8bv.jpeg?q=70",
      "rs": "9000",
      "descp": "CHUWI Intel Celeron Quad Core 12th Gen N100 - (8 GB/256 GB SSD/Windo",
      "title": "Laptop"
    },
    {
      "id": 11,
      "sell": 430,
      "img": "https://rukminim2.flixcart.com/image/612/612/xif0q/allinone-desktop/g/3/k/glx-i52400-8gbram-128gbm-2ssd-500gbhdd-wifi-galaxar-original-imagxzc2vsyeqzbx.jpeg?q=70",
      "rs": "2000",
      "descp": "GALAXAR INTEL Core i7 (8 GB DDR3/430 GB/128",
      "title": "Laptop"
    },
    {
      "id": 12,
      "sell": 430,
      "img": "https://rukminim2.flixcart.com/image/612/612/kcf4lu80/ups/f/z/c/bx1100c-in-apc-original-imaftjkvbsdjt7jw.jpeg?q=70",
      "rs": "7500",
      "descp": "APC Back-UPS BX1100C-IN UPS",
      "title": "UPS"
    },
    {
      "id": 13,
      "sell": 430,
      "img": "https://rukminim2.flixcart.com/image/612/612/k70spzk0/ups/u/a/c/back-ups-600-apc-original-imafpcr6cy7vfknu.jpeg?q=70",
      "rs": "300",
      "descp": "APC BX600C-IN BACK - UPS 600 UPS",
      "title": "Mouse"
    },
    {
      "id": 14,
      "sell": 430,
      "img": "https://rukminim2.flixcart.com/image/612/612/xif0q/printer/s/c/g/-original-imagzyb5kqpfsf2h.jpeg?q=70",
      "rs": "9500",
      "descp": "HP Ink Tank 316 Multi-function Color Ink Tank",
      "title": "Mouse"
    },
    {
      "id": 15,
      "sell": 430,
      "img": "https://rukminim2.flixcart.com/image/612/612/xif0q/mouse/d/l/l/wired-usb-gaming-mouse-with-breathing-lights-and-dpi-upto-3600-original-imagg6btapfaxtzh.jpeg?q=70",
      "rs": "1200",
      "descp": "Arctic Fox Wired USB Gaming Mouse with",
      "title": "Mouse"
    },
    {
      "id": 16,
      "sell": 430,
      "img": "https://rukminim2.flixcart.com/image/612/612/xif0q/keyboard/t/n/x/-original-imagg6dpuvccgxcq.jpeg?q=70",
      "rs": "5800",
      "descp": "Ant Value FKBRI01 Wired USB Multi-device",
      "title": "Mouse"
    },
    {
      "id": 17,
      "sell": 430,
      "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/h/u/c/-original-imagxfs93hqxbehu.jpeg?q=70",
      "rs": "400",
      "descp": "HP Pavilion (2023) Eyesafe AMD Ryzen 5 Hexa Core 5625U -)",
      "title": "Laptop"
    },
    {
      "id": 18,
      "sell": 430,
      "img": "https://rukminim2.flixcart.com/image/612/612/xif0q/allinone-desktop/0/o/s/aic-i52400-8-430-128-19-11inch-window-11-dzab-original-imagwgwrwzgqffzq.jpeg?q=70",
      "rs": "6700",
      "descp": "DZAB Intel Core i5 (8 GB DDR3/430 GB/128 GB",
      "title": "PC"
    },
    {
      "id": 19,
      "sell": 430,
      "img": "https://rukminim2.flixcart.com/image/612/612/jsdj8nk0/ups/z/r/e/sesto-600-v-guard-original-imafdygpufcbfquz.jpeg?q=70",
      "rs": "1800",
      "descp": "V-Guard Sesto 600 UPS",
      "title": "UPS"
    },
    {
      "id": 20,
      "sell": 430,
      "img": "https://rukminim2.flixcart.com/image/612/612/xif0q/printer/v/f/h/1008w-hp-original-imagpzkmyhdmzrts.jpeg?q=70",
      "rs": "8500",
      "descp": "Single Function Monochrome Laser Printer",
      "title": "Printer"
    },
    {
      "id": 21,
      "sell": 430,
      "img": "https://rukminim2.flixcart.com/image/612/612/ups/d/d/k/1-year-warranty-extesion-pack-for-apc-ups-model-be700y-ind-apc-original-imae9gzn9e5kpyfs.jpeg?q=70",
      "rs": "5000",
      "descp": "APC Back-UPS BE700Y-IND UPS",
      "title": "Printer"
    },
    {
      "id": 22,
      "sell": 430,
      "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/e/i/f/-original-imagpu2tmee2jvds.jpeg?q=70",
      "rs": "11000",
      "descp": "LG 27 inch Full HD LED Backlit IPS Panel with OnScreen Control",
      "title": "Monitor"
    },
    {
      "id": 23,
      "sell": 430,
      "img": "https://rukminim2.flixcart.com/image/612/612/kykgb680/digital-security-softwr/h/o/h/-original-imagarmxemfeprtz.jpeg?q=70",
      "rs": "700",
      "descp": "K7 Latest Version 3 PC 1 Year Total Security (Email Del.",
      "title": "Anti-Virus"
    },
    {
      "id": 24,
      "sell": 430,
      "img": "https://rukminim2.flixcart.com/image/612/612/xif0q/printer/0/k/q/-original-imagnuwe86ysxha6.jpeg?q=70",
      "rs": "6000",
      "descp": "Egate i9 Pro with Keystone, Bluetooth, Tripod FHD 1080 ...",
      "title": "TriPod"
    },
    {
      "id": 25,
      "sell": 430,
      "img": "https://rukminim2.flixcart.com/image/612/612/xif0q/mouse/i/m/l/wired-usb-mouse-with-3-handy-buttons-with-scroll-wheel-1000-dpi-original-imagsph32hr3gfnn.jpeg?q=70",
      "rs": "4500",
      "descp": "Frontech MS-0047 Wired Optical Mouse",
      "title": "Mouse"
    },
    {
      "id": 26,
      "sell": 430,
      "img": "https://rukminim2.flixcart.com/image/612/612/keyboard/laptop-keyboard/q/d/v/amkette-xcite-neo-original-imaesahtwc3ybdnz.jpeg?q=70",
      "rs": "1500",
      "descp": "AMKETTE 398PP, Xcite NEO Wired USB Laptop",
      "title": "Mouse"
    },
    {
      "id": 27,
      "sell": 430,
      "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/b/r/w/gemibook-x-pro-laptop-chuwi-original-imagwfm84fgdm8bv.jpeg?q=70",
      "rs": "9000",
      "descp": "CHUWI Intel Celeron Quad Core 12th Gen N100 - (8 GB/256 GB SSD/Windo",
      "title": "Laptop"
    },
    {
      "id": 28,
      "sell": 430,
      "img": "https://rukminim2.flixcart.com/image/612/612/xif0q/allinone-desktop/g/3/k/glx-i52400-8gbram-128gbm-2ssd-500gbhdd-wifi-galaxar-original-imagxzc2vsyeqzbx.jpeg?q=70",
      "rs": "2000",
      "descp": "GALAXAR INTEL Core i7 (8 GB DDR3/430 GB/128",
      "title": "Laptop"
    },
    ,
    {
      "id": 29,
      "sell": 430,
      "img": "https://rukminim2.flixcart.com/image/612/612/k70spzk0/ups/u/a/c/back-ups-600-apc-original-imafpcr6cy7vfknu.jpeg?q=70",
      "rs": "300",
      "descp": "APC BX600C-IN BACK - UPS 600 UPS",
      "title": "Mouse"
    },
    {
      "id": 30,
      "sell": 430,
      "img": "https://rukminim2.flixcart.com/image/612/612/xif0q/printer/s/c/g/-original-imagzyb5kqpfsf2h.jpeg?q=70",
      "rs": "9500",
      "descp": "HP Ink Tank 316 Multi-function Color Ink Tank",
      "title": "Mouse"
    },
    {
      "id": 31,
      "sell": 430,
      "img": "https://rukminim2.flixcart.com/image/612/612/xif0q/mouse/d/l/l/wired-usb-gaming-mouse-with-breathing-lights-and-dpi-upto-3600-original-imagg6btapfaxtzh.jpeg?q=70",
      "rs": "1200",
      "descp": "Arctic Fox Wired USB Gaming Mouse with",
      "title": "Mouse"
    },
    {
      "id": 32,
      "sell": 430,
      "img": "https://rukminim2.flixcart.com/image/612/612/xif0q/mouse/i/m/l/wired-usb-mouse-with-3-handy-buttons-with-scroll-wheel-1000-dpi-original-imagsph32hr3gfnn.jpeg?q=70",
      "rs": "4500",
      "descp": "Frontech MS-0047 Wired Optical Mouse",
      "title": "Mouse"
    }
  ]

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
