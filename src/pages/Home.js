import React from 'react'
import slider from './slider.gif'
import photo from '../components/photo.png'
function Home() {
  return (
    <div>
        <p className='text-center mt-24 text-slate-800 text-xl font-semibold'>
        Welcome to the <span className='text-3xl font-serif font-bold text-orange-800'>Next-Gen Library Services</span>, where innovation meets libraries in the digital age.
        </p>
    <div className='flex items-center justify-between mx-20 mt-8'>
        <span className='flex flex-col '>
            <span><img src={photo} className='h-60 rounded-full ml-8'/></span>
            <span className='text-slate-700 font-extrabold text-4xl'>Next-Gen Library Services Using IoT</span>
        </span>
        <img src={slider} className='h-96 w-auto rounded-3xl'/>
    </div>
    </div>
  )
}

export default Home