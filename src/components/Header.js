import React from 'react'
import {Link} from 'react-router-dom'
import photo from './photo.png'
import { HiStatusOnline } from "react-icons/hi";
import { MdHome } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

function Header() {
  return (
    <header className='bg-slate-400 shadow-md fixed w-full z-10 top-0'>
        <div className='flex justify-between items-center max-w-6xl ml-6 p-1'>
            <img src={photo} className='h-16 w-auto rounded-full'/>
            <ul className='flex gap-11 text-xl font-bold'>
                <Link to='/'><li className='flex gap-1 items-center hover:underline '><span><MdHome /></span><span>Home</span></li></Link>
                <Link to='/about'><li className='hover:underline'>About</li></Link>
                {/* <Link to='https://projectsfactoryserver.in/index.php'><li className='hover:underline flex items-center gap-1'><span><HiStatusOnline /></span><span>Library Status</span></li></Link>
                 */}
                 <Link to='/librarystatus' className='hover:underline flex items-center gap-1' ><span><HiStatusOnline /></span><span>Library Status</span></Link>
                <Link to='/contact'><li className='flex gap-1 items-center hover:underline '><span><IoMdContact /></span><span>Contact</span></li></Link>
            </ul>
        </div>
    </header>
  )
}

export default Header