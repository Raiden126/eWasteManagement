import React from 'react'

const Nav = () => {
  return (
    <div className='bg-gray-800 p-4 h-16 flex '>
      <label className="flex items-center w-full justify-end">
        <span className="sr-only">Search</span>
        <input 
          className="placeholder:italic placeholder-text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-3 pr-9 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
          placeholder="Search for anything..." 
          type="text" 
          name="search"
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-2">
       
        </span>
      </label>
    </div>
  )
}

export default Nav