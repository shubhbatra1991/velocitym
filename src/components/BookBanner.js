import React from 'react';
import { FaPhone } from 'react-icons/fa';

const BookBanner = () => {
  return (
   <>
     <div className="flex w-full h-[20rem] relative mt-[7rem] ">
        <div className="bg-gray-500 opacity-[0.89] w-full h-full right-0 top-0 absolute">
        <div className="container">
            <div className="text-white z-5 relative w-full h-[20rem] flex items-center gap-[5rem] md:flex-col md:justify-center md:items-center md:gap-[1rem] md:text-center">
            <h2 className='text-[3.2rem]' >Book a car by getting in touch with us</h2>
            <span className='flex text-[2.7rem] gap-[1rem] items-center text-orange-600 whitespace-nowrap'>
                <i className='fa fa-phone'><FaPhone /></i>
                <h3>(123)-456-999</h3>
            </span>
            </div>
        </div>
        </div>
    </div>
   </>
  )
}

export default BookBanner;