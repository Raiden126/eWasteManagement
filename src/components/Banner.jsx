import React from 'react'
import { motion } from 'framer-motion'

const Banner = () => {
  return (
    <>
      <motion.img
        initial={{ opacity: 0, y: 10 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9 }}
        whileInView={{ opacity: 1 }}
        src='./banner.jpeg' alt='Banner' className='h-auto w-full' />
    </>
  )
}

export default Banner

const eWasteData = [
  {
    "id": 1,
    "img": "https://rukminim2.flixcart.com/image/612/612/xif0q/printer/s/8/d/-original-imafkykednshkhx5.jpeg?q=70",
    "rs": "12000",
    "descp": "Canon PIXMA MG2470 All-in-One Inkjet Printer",
    "title": "Printer"
  },
  {
    "id": 2,
    "img": "https://rukminim2.flixcart.com/image/612/612/kovsvbk0/keyboard/multi-device-keyboard/m/u/z/150-wired-mouse-and-keyboard-hp-original-imag38q6pxvzzt4g.jpeg?q=70",
    "rs": "1000",
    "descp": "HP 150 Wired Mouse and Keyboard Wired USB Multi-device .",
    "title": "Keyboard"
  },
  {
    "id": 3,
    "img": "https://rukminim2.flixcart.com/image/612/612/ups/d/d/k/1-year-warranty-extesion-pack-for-apc-ups-model-be700y-ind-apc-original-imae9gzn9e5kpyfs.jpeg?q=70",
    "rs": "5000",
    "descp": "APC Back-UPS BE700Y-IND UPS",
    "title": "Printer"
  },
  {
    "id": 4,
    "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/e/i/f/-original-imagpu2tmee2jvds.jpeg?q=70",
    "rs": "11000",
    "descp": "LG 27 inch Full HD LED Backlit IPS Panel with OnScreen Control",
    "title": "Monitor"
  },
  {
    "id": 5,
    "img": "https://rukminim2.flixcart.com/image/612/612/kykgb680/digital-security-softwr/h/o/h/-original-imagarmxemfeprtz.jpeg?q=70",
    "rs": "700",
    "descp": "K7 Latest Version 3 PC 1 Year Total Security (Email Del.",
    "title": "Anti-Virus"
  },
  {
    "id": 6,
    "img": "https://rukminim2.flixcart.com/image/612/612/xif0q/printer/0/k/q/-original-imagnuwe86ysxha6.jpeg?q=70",
    "rs": "6000",
    "descp": "Egate i9 Pro with Keystone, Bluetooth, Tripod FHD 1080 ...",
    "title": "TriPod"
  },
  {
    "id": 7,
    "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/r/r/5/-original-imagupz9vdcgzvnf.jpeg?q=70",
    "rs": "20000",
    "descp": "SAMSUNG Galaxy Book 2 Intel Core i5 12th Gen 1235U - (16 GB/512 G...",
    "title": "Laptop"
  },
  {
    "id": 8,
    "img": "https://rukminim2.flixcart.com/image/612/612/xif0q/mouse/i/m/l/wired-usb-mouse-with-3-handy-buttons-with-scroll-wheel-1000-dpi-original-imagsph32hr3gfnn.jpeg?q=70",
    "rs": "4500",
    "descp": "Frontech MS-0047 Wired Optical Mouse",
    "title": "Mouse"
  },
  {
    "id": 9,
    "img": "https://rukminim2.flixcart.com/image/612/612/keyboard/laptop-keyboard/q/d/v/amkette-xcite-neo-original-imaesahtwc3ybdnz.jpeg?q=70",
    "rs": "1500",
    "descp": "AMKETTE 398PP, Xcite NEO Wired USB Laptop",
    "title": "Mouse"
  },
  {
    "id": 10,
    "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/b/r/w/gemibook-x-pro-laptop-chuwi-original-imagwfm84fgdm8bv.jpeg?q=70",
    "rs": "9000",
    "descp": "CHUWI Intel Celeron Quad Core 12th Gen N100 - (8 GB/256 GB SSD/Windo",
    "title": "Laptop"
  },
  {
    "id": 11,
    "img": "https://rukminim2.flixcart.com/image/612/612/xif0q/allinone-desktop/g/3/k/glx-i52400-8gbram-128gbm-2ssd-500gbhdd-wifi-galaxar-original-imagxzc2vsyeqzbx.jpeg?q=70",
    "rs": "2000",
    "descp": "GALAXAR INTEL Core i7 (8 GB DDR3/500 GB/128",
    "title": "Laptop"
  },
  {
    "id": 12,
    "img": "https://rukminim2.flixcart.com/image/612/612/kcf4lu80/ups/f/z/c/bx1100c-in-apc-original-imaftjkvbsdjt7jw.jpeg?q=70",
    "rs": "7500",
    "descp": "APC Back-UPS BX1100C-IN UPS",
    "title": "UPS"
  },
  {
    "id": 13,
    "img": "https://rukminim2.flixcart.com/image/612/612/k70spzk0/ups/u/a/c/back-ups-600-apc-original-imafpcr6cy7vfknu.jpeg?q=70",
    "rs": "300",
    "descp": "APC BX600C-IN BACK - UPS 600 UPS",
    "title": "Mouse"
  },
  {
    "id": 14,
    "img": "https://rukminim2.flixcart.com/image/612/612/xif0q/printer/s/c/g/-original-imagzyb5kqpfsf2h.jpeg?q=70",
    "rs": "9500",
    "descp": "HP Ink Tank 316 Multi-function Color Ink Tank",
    "title": "Mouse"
  },
  {
    "id": 15,
    "img": "https://rukminim2.flixcart.com/image/612/612/xif0q/mouse/d/l/l/wired-usb-gaming-mouse-with-breathing-lights-and-dpi-upto-3600-original-imagg6btapfaxtzh.jpeg?q=70",
    "rs": "1200",
    "descp": "Arctic Fox Wired USB Gaming Mouse with",
    "title": "Mouse"
  },
  {
    "id": 16,
    "img": "https://rukminim2.flixcart.com/image/612/612/xif0q/keyboard/t/n/x/-original-imagg6dpuvccgxcq.jpeg?q=70",
    "rs": "5800",
    "descp": "Ant Value FKBRI01 Wired USB Multi-device",
    "title": "Mouse"
  },
  {
    "id": 17,
    "img": "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/h/u/c/-original-imagxfs93hqxbehu.jpeg?q=70",
    "rs": "400",
    "descp": "HP Pavilion (2023) Eyesafe AMD Ryzen 5 Hexa Core 5625U -)",
    "title": "Laptop"
  },
  {
    "id": 18,
    "img": "https://rukminim2.flixcart.com/image/612/612/xif0q/allinone-desktop/0/o/s/aic-i52400-8-500-128-19-11inch-window-11-dzab-original-imagwgwrwzgqffzq.jpeg?q=70",
    "rs": "6700",
    "descp": "DZAB Intel Core i5 (8 GB DDR3/500 GB/128 GB",
    "title": "PC"
  },
  {
    "id": 19,
    "img": "https://rukminim2.flixcart.com/image/612/612/jsdj8nk0/ups/z/r/e/sesto-600-v-guard-original-imafdygpufcbfquz.jpeg?q=70",
    "rs": "1800",
    "descp": "V-Guard Sesto 600 UPS",
    "title": "UPS"
  },
  {
    "id": 20,
    "img": "https://rukminim2.flixcart.com/image/612/612/xif0q/printer/v/f/h/1008w-hp-original-imagpzkmyhdmzrts.jpeg?q=70",
    "rs": "8500",
    "descp": "Single Function Monochrome Laser Printer",
    "title": "Printer"
  }
]