import React from 'react';

const ContactUs = () => {
  return (
    <div className='bg-gray-200 p-4 flex flex-col justify-center items-center'>
      <h1 className="text-2xl font-bold mb-4">Contact</h1>
      <p className="mb-4">The Step Initiative - Always stay informed</p>
      <nav className="mb-4">
        <ul className="flex">
          <li className="mr-2">
            <a href="/">HOME</a>
          </li>
          <li className="mr-2">{'>'}</li>
          <li className="mr-2">
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    
      <div className="w-3/4 md:w-2/4 h-px bg-black mx-auto mt-5"></div>

      <div className='flex flex-col md:flex-row w-full mt-10 justify-center'>
        <div className='w-full md:w-3/4 p-4'>
          <h1 className="text-2xl font-bold mb-4">Contact Us Now</h1>
          <p className="mb-4">Please Contact Us via mail for further information</p>  
  
          <form className="mt-8">
            <label className="block mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-400 rounded-md p-2 mb-4 w-full"
              placeholder="Enter your name"
            />

            <label className="block mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-400 rounded-md p-2 mb-4 w-full"
              placeholder="Enter your email"
            />

            <label className="block mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="border border-gray-400 rounded-md p-2 mb-4 h-32 resize-none w-full"
              placeholder="Enter your message"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 "
            >
              Send Message
            </button>
          </form>
        </div>


      </div>
    </div>
  );
};

export default ContactUs;






