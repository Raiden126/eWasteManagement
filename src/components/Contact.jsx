import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <motion.main
        initial = {{opacity: 0, y: 50}}
        animate = {{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
        className='flex flex-wrap mt-12 ml-4 mb-5'>
            <div className={`basis-1/2 sm:basis-1/2 md:basis-1/3 mb-4 ${isMobile < 640 && 'sm:basis-full'}`}>
                <h1 className='text-lg mb-2 font-normal'>CENTERS</h1>
                <hr className='w-3/4 border border-solid border-gray-200 mb-2' />
                <ul className='ml-4'>
                    <li className='list-item list-disc ml-2 hover:text-gray-600 hover:opacity-80'><a href='https://www.cdac.in/index.aspx?id=BL'>Bengaluru</a></li>
                    <li className='list-item list-disc ml-2 hover:text-gray-600 hover:opacity-80'><a href='https://www.cdac.in/index.aspx?id=CH'>Chennai</a></li>
                    <li className='list-item list-disc ml-2 hover:text-gray-600 hover:opacity-80'><a href='https://www.cdac.in/index.aspx?id=DL'>Delhi</a></li>
                    <li className='list-item list-disc ml-2 hover:text-gray-600 hover:opacity-80'><a href='https://www.cdac.in/index.aspx?id=HY'>Hyderabad</a></li>
                    <li className='list-item list-disc ml-2 hover:text-gray-600 hover:opacity-80'><a href='https://cdac.in/index.aspx?id=KL'>Kolkata</a></li>
                    <li className='list-item list-disc ml-2 hover:text-gray-600 hover:opacity-80'><a href='https://cdac.in/index.aspx?id=KL'>Mohali</a></li>
                    <li className='list-item list-disc ml-2 hover:text-gray-600 hover:opacity-80'><a href='https://www.cdac.in/index.aspx?id=MB'>Mumbai</a></li>
                    <li className='list-item list-disc ml-2 hover:text-gray-600 hover:opacity-80'><a href='https://www.cdac.in/index.aspx?id=ND'>Noida</a></li>
                    <li className='list-item list-disc ml-2 hover:text-gray-600 hover:opacity-80'><a href='https://www.cdac.in/index.aspx?id=PT'>Patna</a></li>
                    <li className='list-item list-disc ml-2 hover:text-gray-600 hover:opacity-80'><a href='https://www.cdac.in/index.aspx?id=PN'>Pune</a></li>
                    <li className='list-item list-disc ml-2 hover:text-gray-600 hover:opacity-80'><a href='https://www.cdac.in/index.aspx?id=SL'>Silchar</a></li>
                    <li className='list-item list-disc ml-2 hover:text-gray-600 hover:opacity-80'><a href='https://www.cdac.in/index.aspx?id=TVM'>Thiruvananthapuram</a></li>
                </ul>
            </div>
            <div className={`basis-1/2 sm:basis-1/2 md:basis-1/3 mb-4 ${isMobile < 640 && 'sm:basis-full'}`}>
                <h1 className='text-lg mb-2 font-normal'>LINKS</h1>
                <hr className='w-3/4 border border-solid border-gray-200 mb-2' />
                <ul className='ml-4'>
                    <li className='list-item list-disc ml-2 hover:text-gray-600 hover:opacity-80'><a href='/about'>About Us</a></li>
                    <li className='list-item list-disc ml-2 hover:text-gray-600 hover:opacity-80'><a href='/Products-&-Services'>Products & Services</a></li>
                    <li className='list-item list-disc ml-2 hover:text-gray-600 hover:opacity-80'><a href='/R&D'>R&D</a></li>
                    <li className='list-item list-disc ml-2 hover:text-gray-600 hover:opacity-80'><a href='/Careers'>Careers</a></li>
                    <li className='list-item list-disc ml-2 hover:text-gray-600 hover:opacity-80'><a href='/Tenders'>Tenders</a></li>
                    <li className='list-item list-disc ml-2 hover:text-gray-600 hover:opacity-80'><a href='/Press-kit'>Press Kit</a></li>
                    <li className='list-item list-disc ml-2 hover:text-gray-600 hover:opacity-80'><a href='/Video-Gallery'>Video Gallery</a></li>
                    <li className='list-item list-disc ml-2 hover:text-gray-600 hover:opacity-80'><a href='/Events'>Events</a></li>
                    <li className='list-item list-disc ml-2 hover:text-gray-600 hover:opacity-80'><a href='/Awards'>Awards</a></li>
                    <li className='list-item list-disc ml-2 hover:text-gray-600 hover:opacity-80'><a href='/Achievement'>Achievement</a></li>
                    <li className='list-item list-disc ml-2 hover:text-gray-600 hover:opacity-80'><a href='/Alliance'>Alliance</a></li>
                </ul>
            </div>
            <div className={`basis-full sm:basis-full md:basis-1/3 mb-4 ${isMobile < 640 && 'sm:basis-1/3'}`}>
                <h1 className='text-lg mb-2 font-normal'>CONTACT US</h1>
                <hr className='w-3/4 border border-solid border-gray-200 mb-2' />
                <img src='./map.jpg' className='h-52 w-72 ml-4 hover:scale-105 transition-transform ease-in' />
                <h1 className='text-base font-medium ml-4'>Centre For Development Of Advanced Computing</h1>
                <h2 className='ml-4'>NIT Silchar Campus</h2>
                <h2 className='ml-4'>Silchar - 788010</h2>
                <h2 className='ml-4'>Assam(India)</h2>
                <h2 className='ml-4'>Phone: +91 03842-242009</h2>
                <h2 className='ml-4'>Fax: +91 03842-242009</h2>
            </div>
        </motion.main>
    )
}

export default Contact