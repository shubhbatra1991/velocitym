import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';


const BookBanner = () => {
  return (
   <>
     <div className="flex w-full h-[20rem] my-custom-book-class
      relative mt-[7rem] md:h-fit-content md:py-[1rem]"
     >
        <div className="bg-black opacity-[0.75] w-full h-full right-0 top-0 absolute" >
        <div className="container">
            <div className="text-white relative z-5 w-full h-[20rem] flex items-center gap-[5rem] text-center justify-center font-bold
              md:flex-col md:justify-center md:items-center md:gap-[1rem] md:text-center
            ">
            <h2 className='text-[3.2rem] shadow-md' >Book a car by getting in touch with us</h2>
            <span className='flex text-[2.7rem] gap-[1rem] items-center text-orange-600 whitespace-nowrap hover:text-orange-100'>
                <i className='fa fa-phone'><FaPhoneAlt /></i>
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