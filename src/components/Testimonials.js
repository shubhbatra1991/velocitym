import React from 'react';
import Image from 'next/image';
import Img1 from '../../assets/users/user1.jpg';
import Img2 from '../../assets/users/user3.jpg';
import { FaQuoteRight } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <>
      <section className="bg-gray-200 py-[10rem] text-black  w-full">
        <div className="container">
          <div className="flex flex-col">
            <div className="flex flex-col m-auto text-center max-w-[70rem] mb-[5rem]">
              <h4 className='text-[2rem] font-semibold'>Reviewed by People</h4>
              <h2 className='text-[3rem] mb-[1.4rem]'>Client's Testimonials</h2>
              <p className='text-[1.5rem] text-gray-500 leading-[1.4]'>
                Discover the positive impact we've made on the our clients by
                reading through their testimonials. Our clients have experienced
                our service and results, and they're eager to share their
                positive experiences with you.
              </p>
            </div>

            <div className="flex gap-3 w-full justify-center p-6 lg:p-0 ">
              <div className="bg-white shadow-md w-[54rem] p-[5.5rem] relative lg:px-[3rem] lg:py-[5rem] ">
                <span className="text-[6.2rem] text-orange-600 absolute bottom-[33px] right-[60px] sm:hidden ">
                  <i className="fa fa-quote-right"><FaQuoteRight /></i>
                </span>
                <p className='text-[2rem] font-500'>
                  "We leased a vehicle using this service, and it was fantastic. The renting process was simple, and the costs were inexpensive. "
                </p>
                <div className="flex">
                  <div className="flex gap-4 text-center mt-6">
                    <Image src={Img1} alt="user_img" width={100} height={80} className='rounded-full' />
                    <span>
                      <h4 className='text-[1.5rem]'>Parry Dickson</h4>
                      <p className='font-400 text-[1rem]'>Algeria</p>
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials