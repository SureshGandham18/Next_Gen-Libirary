import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

function Footer() {
  return (
    <footer className='bg-gray-900 shadow-md flex justify-between px-6 sm:px-56 pt-11 pb-36 w-full'>
        <div>
            <p className='text-white text-xl'>CATEGORIES</p>
            <p className='text-gray-400 text-sm'>Web Builder</p>
            <p className='text-gray-400 text-sm'>Hosting</p>
            <p className='text-gray-400 text-sm'>Data Center</p>
            <p className='text-gray-400 text-sm'>Robotic-Automation</p>
        </div>
        <div>
            <p className='text-white text-xl'>CONTACT</p>
            <p className='text-gray-400 text-sm'>Contact</p>
            <p className='text-gray-400 text-sm'>Privacy Policy</p>
            <p className='text-gray-400 text-sm'>Terms Of Service</p>
            <p className='text-gray-400 text-sm'>Categories</p>
            <p className='text-gray-400 text-sm'>About</p>
        </div>
        <p className='flex items-center gap-1'>
            <span className='text-gray-400 text-sm'>Top Relevant</span>
            <IoIosArrowDown className='text-gray-400' size={20}/>
        </p>
    </footer>
  )
}

export default Footer