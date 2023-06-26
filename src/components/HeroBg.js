import React from 'react';
import Link from 'next/link';
import HeroCar from "../assets/cars/golf6.jpg";
import { useEffect, useState } from "react";
import Image from 'next/image';
import BannerBg from '../assets/hero/hero-bg.png';
import { TbCircleCheckFilled } from 'react-icons/tb';
import { GoTriangleRight} from 'react-icons/go';
import { FaAngleUp } from 'react-icons/fa';

const HeroBg = () => {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <>
      <section id="home" className="w-full h-[97vh] bg-white relative">
        <div className="container">
          <Image 
            className="absolute top-0 right-0 z-1 md:hidden" 
            alt="bg-shape" 
            src={BannerBg}
            />
          <div className="w-full h-[100vh] flex items-center relative">
            <div className="flex flex-col z-3 max-w-[50rem] mt-[5rem]">
              <h4 className='text-[2.2rem] text-black font-mont'>Plan your trip now</h4>
              <h1 className='text-[5.2rem] font-mont font-bold text-black leading-[1.2] mt-[1rem] mb-[2.3rem]'>
                Save <span className='text-orange-500'>big</span> with our car rental
              </h1>
              <p className='font-mont text-[1.6rem] leading-[1.6] text-gray-500 mb-[4rem]'>
                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                flexible pick-up options and much more.
              </p>
              <div className="flex gap-8 text-[1.6rem] font-mont">
                <Link
                  onClick={bookBtn}
                  className="flex no-underline text-white font-bold bg-orange-500 py-[1.8rem] px-[3rem] rounded-[0.3rem] transition-all duration-300 border-2 border-orange-500
                  shadow-[0_10px_15px_0_rgba(255,83,48,0.35)] xs:p-4 hover:bg-orange-400 hover:shadow-lg hover:shadow-red-950 "
                  href="/"
                >
                  Book Ride &nbsp; 
                  <i className="fa fa-circle-check mt-[4px]">
                    <TbCircleCheckFilled />
                  </i>
                </Link>
                <Link className="flex no-underline text-white font-bold bg-black py-[1.8rem] px-[3rem] rounded-[0.3rem] border-2 border-black transition-all duration-300
                hover:bg-transparent hover:text-black" href="/">
                  Learn More &nbsp; 
                  <i className="fa fa-angle-right mt-[4px]">
                    <GoTriangleRight />
                  </i>
                </Link>
              </div>
            </div>

            {/* img */}
            <Image
              src={HeroCar}
              alt="car-img"
              className="z-2 absolute right-0 w-[65%] mt-[5rem]"
            />
          </div>
        </div>

        {/* page up */}
        <div
          onClick={scrollToTop}
          className={
            `flex scroll-up 
            ${goUp ? "show-scroll flex" : ""}
            `}
        >
          <i className="fa fa-angle-up">
            <FaAngleUp />
          </i>
        </div>
      </section>
    </>
  )
};

export default HeroBg;