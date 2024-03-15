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