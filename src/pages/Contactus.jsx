import React from 'react';

const ContactUs = () => {
  return (
    <div className='bg-gray-200 p-4 flex flex-col justify-center items-center'>
     <h1 className="text-2xl font-bold mb-4 text-red-500">Contact</h1>
     <p className="mb-4 italic">The Step Initiative - Always stay informed</p>

      <nav className="mb-4">
        <ul className="flex">
          <li className="mr-2">
            <a href="/">HOME</a>
          </li>
          <li className="mr-2 ">{'>'}</li>
          <li className="mr-2 text-green-500">
            <a href="/contact ">CONTACT</a>
          </li>
        </ul>
      </nav>
    
      <div className="w-3/4 md:w-2/4 h-px bg-green-700 mx-auto mt-5"></div>

      <div className="flex ">
  <div className="md:ml-12 flex-grow">
    <div className="flex justify-center">
      <div>
        <h1 className="text-2xl font-bold mb-4">Contact Us Now</h1>
        <p className="mb-4">Please contact us via mail for further information</p>  

        <form>
          <label className="block mb-2" htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-gray-400 rounded-md p-2 mb-4 w-full"
            placeholder="Enter your name"
          />

          <label className="block mb-2" htmlFor="phone">Phone No</label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="border border-gray-400 rounded-md p-2 mb-4 w-full"
            placeholder="Enter your Phone No."
          />

          <label className="block mb-2" htmlFor="email">Email Address</label>
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
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
      
      <div class="flex items-center ml-12">
        <img src="path_to_profile_icon" alt="Profile Icon" class="w-10 h-10 rounded-full mr-4" />
        <div>
          <h1 class="text-2xl font-bold mb-1">John Doe</h1>
          <p class="text-gray-500">Email: johndoe@example.com</p>
          <p class="text-gray-500">Phone: +1 234 567 890</p>
        </div>
      </div>
    </div>
  </div>
</div>

  </div>



  );
};

export default ContactUs;