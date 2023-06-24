import React from 'react';
import HeroPages from '@/components/HeroPage';
import BookBanner from '@/components/BookBanner';
import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaEnvelopeOpenText, FaMapLocation } from 'react-icons/fa';

const contact = () => {
  return (
    <>
      <section>
        <HeroPages name="Contact" />
        <div className="container">
          <div className="grid grid-cols-2 gap-[3rem] m-auto text-black px-[2rem] py-[10rem] my-bg-contact-class">
            <div className="flex flex-col gap-[1rem] max-w-[41rem]">
              <h2 className='text-[4.2rem] leading-[1.3] mb-[2rem] font-bold' >Need additional information?</h2>
              <p className='text-[1.6rem] font-mont text-gray-500 leading-[1.6] mb-[2rem]'>
                A multifaceted professional skilled in multiple fields of
                research, development as well as a learning specialist. Over 15
                years of experience.
              </p>
              <Link href="/" className='text-decoration-none text-black text-[1.6rem] font-semibold transition-all duration-200 mb-2'>
                <i className="fa-solid fa-phone inline-block">
                  <FaPhoneAlt />
                </i>&nbsp; (123) 456-7869
              </Link>
              <Link href="/" className='text-decoration-none text-black text-[1.6rem] font-semibold transition-all duration-200 mb-2'>
                <i className="fa-solid fa-envelope inline-block">
                  <FaEnvelope />    
                </i>&nbsp;
                xyz@velocity.com
              </Link>
              <Link href="/" className='text-decoration-none text-black text-[1.6rem] font-semibold transition-all duration-200 mb-2'>
                <i className="fa fa-location-sharp inline-block">
                
                </i>&nbsp; Dublin,
                Ireland
              </Link>
            </div>
            <div className="flex flex-col">
              <form className='flex flex-col'>
                <label className='text-[1.6rem] font-semibold mb-[1rem]'>
                  Full Name <b className='text-red-500'>*</b>
                </label>
                <input type="text" placeholder='E.g: "Joe Shmoe"' className='bg-gray-100 text-[1.6rem] border-none outline-none mb-[2.3rem] py-[19px] px-[30px]'></input>

                <label className='text-[1.6rem] font-semibold mb-[1rem] '>
                  Email <b className='text-red-500'>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com" className='bg-gray-100 text-[1.6rem] border-none outline-none mb-[2.3rem] py-[19px] px-[30px]'></input>

                <label className='text-[1.6rem] font-semibold mb-[1rem]'>
                  Tell us about it <b className='text-red-500'>*</b>
                </label>
                <textarea placeholder="Write Here.." className='py-[19px] px-[30px] bg-gray-100 h-[18rem] text-[1.6rem] border-none outline-none mb-[2.5rem]' ></textarea>

                <button type="submit" className='bg-orange-600 py-[1.8rem] px-[3rem] rounded-md shadow-md transition-all 
                duration-300 border-2 border-orange-600 text-white text-[1.8rem] font-semibold cursor-pointer
                text-center contact-button
                '>
                  <i className="fa fa-envelope-open-text inline-block"><FaEnvelopeOpenText /></i>&nbsp; Send
                  Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <BookBanner />
    </>
  )
}

export default contact;