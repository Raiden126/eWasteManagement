import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars, faUser, faBoxOpen, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// const StyledDiv = styled.div`
//   font-family: 'Madimi One', sans-serif;
// `;

const Nav = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth);
    const [showNav, setShowNav] = useState(false)

    const handleShowNav = () => {
        setShowNav(true);
    }

    const handleHideNav = () => {
        setShowNav(false)
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.addEventListener('resize', handleResize)
        }
    }, [])
    return (
        <motion.nav
            initial={{ opacity: 0, y: 1 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9 }}
            whileInView={{ opacity: 1 }}
            className='w-full h-14 bg-[#2A55E5] flex items-center md:justify-evenly'>
            <div
                className='aspect-square w-14 ml-1 md:ml-0 flex justify-center items-center text-white'
            >
                {/* <img src='./cdac-logo.svg'
                    alt='logo'
                /> */}
                <h1 className='text-sm '>E-Waste</h1>
            </div>
            <label className='ml-3 relative w-3/4 md:w-2/5 lg:w-2/4'>
                <FontAwesomeIcon icon={faMagnifyingGlass}
                    className='absolute pl-2 text-slate-400 top-1/2 transform -translate-y-1/2' />
                <input
                    type='search'
                    placeholder='Search'
                    className='pl-8 h-8 rounded-md w-full focus:outline-none focus:border focus:border-solid focus:border-gray-800'
                />
            </label>
            {isMobile > 767 ?
                (
                    <div className=' flex flex-row justify-center items-center'>
                        <label
                            className='border border-solid border-gray-300 rounded-3xl ml-2 h-8 w-32 bg-white hover:bg-black flex justify-center items-center'>
                            <a href="/home" className='text-black md:text-sm sm:text-[10px] hover:text-white hover:bg-black'><FontAwesomeIcon icon={faCircleInfo} className='mr-2' />Know More</a>
                        </label>
                        <label
                            className='border border-solid border-gray-300 rounded-3xl ml-2 h-8 w-24 text-center bg-white hover:bg-black flex justify-center items-center'>
                            <a href="/login" className='text-black md:text-sm sm:text-[10px] hover:text-white hover:bg-black'><FontAwesomeIcon icon={faUser} className='mr-2' />Login</a>
                        </label>
                        <label
                            className='border border-solid border-gray-300 rounded-3xl ml-2 h-8 w-40 text-center bg-white hover:bg-black flex justify-center items-center'>
                            <a href="/buyer" className='text-black md:text-sm sm:text-[10px] hover:text-white hover:bg-black'><FontAwesomeIcon icon={faBoxOpen} className='mr-2' />Become a Buyer</a>
                        </label>
                    </div>) :
                (<><FontAwesomeIcon icon={faBars} className='ml-2 mr-1 text-2xl' onClick={handleShowNav} />
                    {showNav && (
                            <div className="absolute inset-0 bg-black h-14 w-full bg-opacity-90 flex">
                                <div className='basis-3/4 flex justify-evenly items-center'>
                                    <label className='border border-solid border-transparent rounded-md text-center text-xs bg-white h-6'>
                                        <a href="/home" className='text-black text-center p-1 '>Know More</a>
                                    </label>
                                    <label className='border border-solid border-transparent rounded-md text-center text-xs bg-white h-6'>
                                        <a href="/login" className='text-black text-center p-1'>Login</a>
                                    </label>
                                    <label className='border border-solid border-transparent rounded-md text-center text-xs bg-white h-6'>
                                        <a href="/buyer" className='text-black text-center p-1'>Become a Buyer</a>
                                    </label>
                                </div>
                                <div className='basis-1/4 flex items-center justify-center'>
                                    <FontAwesomeIcon icon={faBars} className='ml-5 text-2xl text-white' onClick={handleHideNav} />
                                </div>
                            </div>
                    )}
                </>)}
        </motion.nav>
    )
}

export default Nav