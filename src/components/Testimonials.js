import React from 'react';
import Image from 'next/image';
import Img1 from '../assets/users/user3.jpg';
import Img2 from '../assets/users/user4.jpg';
import { BiSolidQuoteRight } from 'react-icons/bi';

const Testimonials = () => {
  return (
    <>
      <section className="bg-gray-100 py-[10rem] text-black  w-full">
        <div className="container">
          <div className="flex flex-col">
            <div className="flex flex-col m-auto text-center max-w-[70rem] mb-[5rem]">
              <h4 className='text-[2.2rem] font-semibold'>Reviewed by People</h4>
              <h2 className='text-[4.2rem] mb-[1.4rem] font-mont font-bold'>Client's Testimonials</h2>
              <p className='text-[1.6rem] text-gray-500 leading-[1.4] font-mont'>
                Discover the positive impact we've made on the our clients by
                reading through their testimonials. Our clients have experienced
                our service and results, and they're eager to share their
                positive experiences with you.
              </p>
            </div>

            <div className="flex gap-[3rem] w-full justify-center p-[3rem] lg:p-0 ">
              <div className="bg-white shadow-md w-[54rem] p-[3rem] relative lg:px-[3rem] lg:py-[5rem] ">
                <span className="text-[6.2rem] text-orange-600 absolute bottom-[60px] right-[60px] xs:!right-[35px]">
                  <i className="fa fa-quote-right"><BiSolidQuoteRight /></i>
                </span>
                <p className='text-[2.2rem] font-500'>
                  "We leased a vehicle using this service, and it was fantastic. The renting process was simple, and the costs were inexpensive. "
                </p>
                <div className="flex">
                  <div className="flex gap-[2rem] text-center mt-[3rem]">
                    <Image src={Img1} alt="user_img" className='w-[7rem] h-[7rem] rounded-full' />
                    <span>
                      <h4 className='text-[1.8rem] font-bold'>Parry Dickson</h4>
                      <p className='font-400 text-[1.6rem] font-mont flex'>Algeria</p>
                    </span>
                  </div>
                </div>
              </div>


              {/* second box */}
              <div className="bg-white shadow-md w-[54rem] p-[3rem] relative lg:px-[3rem] lg:py-[5rem] lg:hidden ">
                <span className="text-[6.2rem] text-orange-600 absolute bottom-[60px] right-[60px] xs:!right-[35px]">
                  <i className="fa fa-quote-right"><BiSolidQuoteRight /></i>
                </span>
                <p className='text-[2.2rem] font-500'>
                  "I would like to thank you for a great service and an eperience. It was fun, I will definetely recommend their service. "
                </p>
                <div className="flex">
                  <div className="flex gap-[2rem] text-center mt-[3rem]">
                    <Image src={Img2} alt="user_img" className='w-[7rem] h-[7rem] rounded-full' />
                    <span>
                      <h4 className='text-[1.8rem] font-bold'>Tanmay Khanna</h4>
                      <p className='font-400 text-[1.6rem] font-mont flex'>Delhi, India</p>
                    </span>
                  </div>
                </div>
              </div>
              {/* second box ends */}

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials