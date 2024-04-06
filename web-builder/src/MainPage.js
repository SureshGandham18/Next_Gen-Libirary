import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { GiTrophyCup } from "react-icons/gi";
import { IoDiamondOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

import p1 from './assets/121.png'

function MainPage() {
  return (
    <div className='mx-4 md:mx-10 lg:mx-56 mt-24'>
        <p className='text-gray-800 text-center mt-4 text-4xl'>Best Website builders in the US</p>
        <hr className='h-px mt-4 mb-3 bg-gray-200 border-0 dark:bg-gray-200'/>
        <div className='flex flex-col md:flex-row md:justify-between'>
            <div className='flex flex-col md:flex-row gap-6'> 
                <p className='flex items-center gap-1'>
                  <FaRegCheckCircle className='text-gray-400' size={15}/>
                  <span className='text-gray-400 text-sm'>Last Updated - February 22, 2020</span>
                </p>
                <p className='flex items-center gap-1'>
                  <IoInformationCircleOutline className='text-gray-400' size={20}/>
                  <span className='text-gray-400 text-sm'>Advertising Disclosure</span>
                </p>                
            </div>
            <div className="md:self-center"> 
                <p className='flex items-center gap-1'>
                  <span className='text-gray-400 text-sm'>Top Relevant</span>
                  <IoIosArrowDown className='text-gray-400' size={20}/>
                </p>
            </div>
        </div>
        <hr className='h-px mt-4 mb-3 bg-gray-200 border-0 dark:bg-gray-300'/>
        <div className='flex justify-between mx-4 text-gray-500 text-xs'>
          <p>Tools</p>
          <p>AWS Builder</p>
          <p>Start Build</p>
          <p>Build Supplies</p>
          <p>Tooling</p>
          <p>BlueHosting</p>
        </div>
        <div className='flex gap-2 mt-3 items-center mx-4 text-gray-500 text-xs'>
          <p>Home</p>
          <p className='text-sm'>{`>`}</p>
          <p>Hosting for all</p>
          <p className='text-sm'>{`>`}</p>
          <p>Hosting</p>
          <p className='text-sm'>{`>`}</p>
          <p>Hosting6</p>
          <p className='text-sm'>{`>`}</p>
          <p>Hosting5</p>
        </div>
        <div className='bg-orange-500 text-white py-1 px-2 mt-5 rounded-tr-lg rounded-br-lg  inline-block'>
          <div className='flex gap-1 items-center'>
            <GiTrophyCup size={15}/>
            <span>Best Choice</span>
          </div>
        </div>
        <div className='flex sm:flex-row flex-col gap-4 ml-3 bg-white rounded-lg p-5  text-gray-500 -mt-2'>
          <div>
            <p className='border -ml-10 bg-white border-gray-200 rounded-full text-center py-2'>1</p>
          </div>
          <div className='flex flex-col items-center'>
            <img className='max-w-32  mt-16 mb-3' src={p1} alt='p1'/>
            <p className='text-xs'>Builder 1</p>
          </div>
          <div className='text-sm'>
            <p ><span className='text-gray-800'>WixPro 72-Inch Responsive Website Builder-</span> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
            <p className='text-gray-900 font-semibold my-2'>Main highlights</p>
            <p className='ml-3'>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
            <p className='text-blue-500 flex items-center gap-1 mt-2'>Show more<IoIosArrowDown/></p>
          </div>
          <div className='flex flex-col items-center justify-between'>
            <div className='flex flex-col items-center bg-blue-50 w-24 p-3 rounded-lg'>
              <p className='text-blue-600 text-xl'>9.8</p>
              <p className='text-blue-600 text-xs font-semibold'>Exceptional</p>
              <p className='flex text-yellow-400 my-2'><FaStar size={9}/><FaStar size={9}/><FaStar size={9}/><FaStar size={9}/><FaStar size={9}/></p>
            </div>
            <div className='bg-blue-500 text-white py-2 my-2 w-44 text-center  rounded-lg  inline-block'>
              <span>View</span>

            </div>
          </div>
        </div>
          
        <br/>
        <div className='bg-orange-500 text-white py-1 px-2 mt-5 rounded-tr-lg rounded-br-lg  inline-block'>
          <div className='flex gap-1 items-center'>
            <IoDiamondOutline size={15}/>
            <span>Best Value</span>
          </div>
        </div>

        <div className='flex gap-4 ml-3 sm:flex-row flex-col bg-white rounded-lg p-5 mb-8  text-gray-500 -mt-2'>
          <div>
            <p className='border -ml-10 bg-white border-gray-200 rounded-full text-center py-2'>2</p>
          </div>
          <div className='flex flex-col items-center'>
            <img className='max-w-32  mt-16 mb-3' src={p1} alt='p1'/>
            <p className='text-xs'>Builder</p>
          </div>
          <div className='text-sm'>
            <p ><span className='text-gray-800'>SiteCraft 68-Inch Ultimate Web Design Studio-</span> Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)</p>
            <p className='text-gray-900 font-semibold my-2'>Main highlights</p>
            <p className='ml-3'>[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.</p>
            <p className='text-blue-500 flex items-center gap-1 mt-2'>Show more<IoIosArrowDown/></p>
          </div>
          <div className='flex flex-col items-center justify-between'>
            <div className='flex flex-col items-center bg-blue-50 w-24 p-3 rounded-lg'>
              <p className='text-blue-600 text-xl'>9.5</p>
              <p className='text-blue-600 text-xs font-semibold'>Excellent</p>
              <p className='flex text-yellow-400 my-2'><FaStar size={9}/><FaStar size={9}/><FaStar size={9}/><FaStar size={9}/><FaStarHalfAlt size={9}/></p>
            </div>
            <div className='bg-blue-500 text-white py-2 my-2 w-44 mt text-center  rounded-lg  inline-block'>
              <span>View</span>

            </div>
          </div>
        </div>


        <div className='flex gap-4 sm:flex-row flex-col ml-3 bg-white rounded-lg p-5 mb-8 text-gray-500 -mt-2'>
          <div>
            <p className='border -ml-10 bg-white border-gray-200 rounded-full text-center py-2'>3</p>
          </div>
          <div className='flex flex-col items-center'>
            <img className='max-w-32  mt-16 mb-3' src={p1} alt='p1'/>
            <p className='text-xs'>Builder 1</p>
          </div>
          <div className='text-sm'>
            <p ><span className='text-gray-800'>WixPro 72-Inch Responsive Website Builder-</span> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
            <p className='text-gray-900 font-semibold my-2'>Main highlights</p>
            <p className='ml-3'>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
            <p className='text-blue-500 flex items-center gap-1 mt-2'>Show more<IoIosArrowDown/></p>
          </div>
          <div className='flex flex-col items-center justify-between'>
            <div className='flex flex-col items-center bg-blue-50 w-24 p-3 rounded-lg'>
              <p className='text-blue-600 text-xl'>9.3</p>
              <p className='text-blue-600 text-xs font-semibold'>Exceptional</p>
              <p className='flex text-yellow-400 my-2'><FaStar size={9}/><FaStar size={9}/><FaStar size={9}/><FaStar size={9}/><FaStar size={9}/></p>
            </div>
            <div className='bg-blue-500 my-2 text-white py-2 w-44 text-center  rounded-lg  inline-block'>
              <span>View</span>

            </div>
          </div>
        </div>

        <div className='flex sm:flex-row flex-col gap-4 ml-3 bg-white rounded-lg p-5 mb-4 text-gray-500 -mt-2'>
          <div>
            <p className='border -ml-10 bg-white border-gray-200 rounded-full text-center py-2'>4</p>
          </div>
          <div className='flex flex-col items-center'>
            <img className='max-w-32  mt-16 mb-3' src={p1} alt='p1'/>
            <p className='text-xs'>CDK</p>
          </div>
          <div className='text-sm'>
            <p ><span className='text-gray-800'>CDK Resposive Builder:</span> An extensive library of widgets and apps, and detailed step-by-step guides</p>
            <p className='text-blue-900 bg-gray-100  rounded-md my-2 inline-block px-2'>26% Off</p>
            <p className='text-gray-900 font-semibold my-2'>Main highlights</p>
            <div className='ml-3 text-gray-800 px-4 py-2 rounded-lg flex flex-col gap-1 bg-orange-50'>
              <p><span className='text-blue 500 px-1 bg-white rounded-sm'>9.9</span>building responsive</p> 
              <p><span className='text-blue 500 px-1 bg-white rounded-sm'>8.9</span>Cool</p>
              <p><span className='text-blue 500 px-1 bg-white rounded-sm'>8.9</span>Docs</p>
            </div>
            <p className='text-gray-800'>Why we love it</p>
            <div className='text-gray-700 ml-3 flex flex-col gap-2 my-2'>
              <p className='flex gap-1 items-center'><span className='text-blue-500 bg-blue-100 rounded-full p-1'><FaCheck size={10}/></span>Documentation</p>
              <p className='flex gap-1 items-center'><span className='text-blue-500 bg-blue-100 rounded-full p-1'><FaCheck size={10}/></span>Easy Use</p>
              <p className='flex gap-1 items-center'><span className='text-blue-500 bg-blue-100 rounded-full p-1'><FaCheck size={10}/></span>Out Of Box</p>
            </div>
            <p className='text-blue-500 flex items-center gap-1 mt-2'>Show more<IoIosArrowDown/></p>
          </div>
          
          <div className='flex flex-col items-center justify-between'>
            <div className='flex flex-col items-center bg-blue-50 w-24 p-3 rounded-lg'>
              <p className='text-blue-600 text-xl'>9.1</p>
              <p className='text-blue-600 text-xs font-semibold'>Very Good</p>
              <p className='flex text-yellow-400 my-2'><FaStar size={9}/><FaStar size={9}/><FaStar size={9}/><FaStar size={9}/><FaRegStar size={9}/></p>
            </div>
            <div className='bg-blue-500 my-2 text-white py-2 w-44 mt text-center  rounded-lg  inline-block'>
              <span>View</span>
            </div>
          </div>
        </div>
        <p className='text-gray-800 my-4 text-xl sm:text-2xl'>Related deals you might like for</p>

        <div className='flex sm:flex-row flex-col gap-2 items-center justify-between'>
          <div className=' bg-white inline-block rounded-lg max-w-60 p-3'>
            <img className='max-w-28 mb-4 mx-auto mt-4 ' src={p1} alt='p1'/>
            <span className='text-blue-900 text-sm bg-gray-100 mr-1  rounded-md my-2 inline-block px-2'>20% Off</span>
            <span className='text-blue-900 text-sm bg-gray-100  rounded-md my-2 inline-block px-2'>Limited time</span>
            <p className='text-gray-700 text-sm text-center font-medium '>Webbuilder 1</p>
            <p className='text-gray-500 text-sm my-1'>Computer  Modern clasic with wix support</p>
            <div className='flex gap-2 items-baseline'>
              <p className='text-gray-600 text-xl'>$39.96</p>
              <p className='text-gray-400 text-xs'>$49.96</p>
              <p className='text-red-600 text-xs'>(20% Off)</p>
            </div>
            <div className='bg-blue-500 text-white py-2 w-48 mx-3 my-3 text-center  rounded-lg  inline-block'>
              View Deal
            </div>
          </div>

          <div className=' bg-white inline-block rounded-lg max-w-60 p-3'>
            <img className='max-w-28 mb-4 mx-auto mt-4 ' src={p1} alt='p1'/>
            <span className='text-blue-900 text-sm bg-gray-100 mr-1  rounded-md my-2 inline-block px-2'>20% Off</span>
            <span className='text-blue-900 text-sm bg-gray-100  rounded-md my-2 inline-block px-2'>Limited time</span>
            <p className='text-gray-700 text-sm text-center font-medium '>Webbuilder 1</p>
            <p className='text-gray-500 text-sm my-1'>Computer  Modern clasic with wix support</p>
            <div className='flex gap-2 items-baseline'>
              <p className='text-gray-600 text-xl'>$39.96</p>
              <p className='text-gray-400 text-xs'>$49.96</p>
              <p className='text-red-600 text-xs'>(20% Off)</p>
            </div>
            <div className='bg-blue-500 text-white py-2 w-48 mx-3 my-3 text-center  rounded-lg  inline-block'>
              View Deal
            </div>
          </div>

          <div className=' bg-white inline-block rounded-lg max-w-60 p-3'>
            <img className='max-w-28 mb-4 mx-auto mt-4 ' src={p1} alt='p1'/>
            <span className='text-blue-900 text-sm bg-gray-100 mr-1  rounded-md my-2 inline-block px-2'>20% Off</span>
            <span className='text-blue-900 text-sm bg-gray-100  rounded-md my-2 inline-block px-2'>Limited time</span>
            <p className='text-gray-700 text-sm text-center font-medium '>Webbuilder 1</p>
            <p className='text-gray-500 text-sm my-1'>Computer  Modern clasic with wix support</p>
            <div className='flex gap-2 items-baseline'>
              <p className='text-gray-600 text-xl'>$39.96</p>
              <p className='text-gray-400 text-xs'>$49.96</p>
              <p className='text-red-600 text-xs'>(20% Off)</p>
            </div>
            <div className='bg-blue-500 text-white py-2 w-48 mx-3 my-3 text-center  rounded-lg  inline-block'>
              View Deal
            </div>
          </div>
        </div>
        <div className='flex items-center  justify-between'>
          <p className='text-gray-600 my-6 text-2xl'><p>Sign up and get exclusive</p><p>special deals</p></p>
          <div className='bg-blue-500 text-white py-2  px-3 rounded-tr-lg rounded-br-lg  inline-block'>
            <span>Sign Up</span>
          </div>
        </div>
    </div>
  )
}

export default MainPage