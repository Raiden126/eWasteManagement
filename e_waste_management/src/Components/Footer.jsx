import React from 'react'

const Footer = () => {
  return (
    <footer
    className='mb-5'>
            <hr className='w-full border border-solid border-gray-200 mb-6'/>
            <h1 className='text-center text-sm'><a className='hover:text-gray-400' href='/help'>Help |&nbsp;</a><a className='hover:text-gray-400' href='/'>Website Policies |&nbsp;</a><a className='hover:text-gray-400' href='/'>Copyright Policy |&nbsp;</a><a className='hover:text-gray-400' href='/'>Terms & Conditions |&nbsp;</a><a className='hover:text-gray-400' href='/'>Reach Us</a></h1>
            <h1 className='text-center text-sm'>Website owned & maintained by: Centre for Development of Advanced Computing (C-DAC)</h1>
            <h1 className='text-center text-sm'>&copy; 2024 C-DAC. All Rights Reserved</h1>
    </footer>
  )
}

export default Footer