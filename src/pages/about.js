import Layout from '@/components/Layout';
import React from 'react';
import HeroPages from '@/components/HeroPage';
import BookBanner from '@/components/BookBanner';
import PlanTrip from '@/components/PlanTrip';
import AboutMain from "../assets/about/about-main.jpg";
import Box1 from "../assets/about/icon1.png";
import Box2 from "../assets/about/icon2.png";
import Box3 from "../assets/about/icon3.png";
import Image from 'next/image';


const about = () => {
  return (
    <Layout>
    <>
      <section className="about-page">
        <HeroPages name="About" />

        <div className="container">
          <div className="!flex gap-[5rem] mx-40 my-40 !max-w-[90rem] items-center
          lg:grid lg:grid-cols-1 lg:max-w-[49rem] lg:text-center
          sm:max-w-full">
            <Image
              className="w-[43rem] h-[43rem] lg:m-0 sm:w-full sm:h-auto"
              src={AboutMain}
              alt="car-renting"
            />
            <div className="text-black flex flex-col">
              <h3 className='text-[2.2rem] font-mont font-500 mb-[1rem]'>About Company</h3>
              <h2 className='text-[4.2rem] leading-[1.2]'>You start the engine and your adventure begins</h2>
              <p className='text-[1.6rem] text-gray-500 font-mont leading-[1.5] mt-[2rem] mb-[4rem]'>
                Certain but she but shyness why cottage. Guy the put instrument
                sir entreaties affronting. Pretended exquisite see cordially the
                you. Weeks quiet do vexed or whose. Motionless if no to
                affronting imprudence no precaution. My indulged as disposal
                strongly attended.
              </p>
              <div className="grid grid-cols-3 gap-[4rem]">
                <div className="flex flex-col">
                  <Image src={Box1} alt="car-icon" className='w-[7rem]' />
                  <span className='flex items-center gap-[1rem] '>
                    <h4 className='text-[4.6rem]'>20</h4>
                    <p className='text-[1.6rem] text-gray-400 font-mont leadin-[1.5] mt-[2rem] mb-[4rem]'>Car Types</p>
                  </span>
                </div>
                <div className="flex flex-col  ">
                  <Image src={Box2} alt="car-icon"  className='w-[7rem]'/>
                  <span className='flex items-center gap-[1rem] '>
                    <h4 className='text-[4.6rem]'>85</h4>
                    <p className='text-[1.6rem] text-gray-400 font-mont leadin-[1.5] mt-[2rem] mb-[4rem]'>Rental Outlets</p>
                  </span>
                </div>
                <div className="flex flex-col ">
                  <Image src={Box3} alt="car-icon" className="last:w-[5rem] w-[7rem]" />
                  <span className='flex items-center gap-[1rem] '>
                    <h4 className='text-[4.6rem]'>75</h4>
                    <p className='text-[1.6rem] text-gray-400 font-mont leadin-[1.5] mt-[2rem] mb-[4rem]'>Repair Shop</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <PlanTrip />
        </div>
      </section>
    <BookBanner />
      
    </>
    </Layout>
  )
}

export default about