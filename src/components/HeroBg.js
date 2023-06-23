import React from 'react';
import Link from 'next/link';
import BgShape from "../assets/hero/hero-bg.png";
import HeroCar from "../assets/cars/car-front.png";
import { useEffect, useState } from "react";

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
      <section id="home" className="w-full h-[97vh] bg-gray-300 relative">
        <div className="container">
          <img className="absolute top-0 right-0 z-1 md:hidden my-custom-hero-bg" alt="bg-shape" />
          <div className="w-full h-[100vh] flex items-center relative md:justify-center">
            <div className="flex flex-col z-3 max-w-[50rem] mt-[5rem] md:text-center md:items-center">
              <h4 className='text-[1.5rem] text-black font-mont'>Plan your trip now</h4>
              <h1 className='text-xl font-mont font-bold text-black leading-[1.2] mt-[1rem] mb-[2.3rem]'>
                Save <span className='text-orange-500'>big</span> with our car rental
              </h1>
              <p className='font-mont text-[1.2rem] leading-[1.6] text-gray-500 mb-[4rem]'>
                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                flexible pick-up options and much more.
              </p>
              <div className="flex gap-8 text-[1.2rem] font-mont xs:flex-col">
                <Link
                  onClick={bookBtn}
                  className="bg-orange-500 p-8 rounded-[0.3rem] transition-all duration-300 border-2 border-orange-500
                  xs:p-4 hover:bg-orange-400 hover:shadow-lg hover:shadow-red-950 "
                  href="/"
                >
                  Book Ride &nbsp; <i className="fa-solid fa-circle-check"></i>
                </Link>
                <Link className="text-black p-4 rounded-[0.3rem] border-2 border-black transition-all duration-300
                hover:bg-transparent hover:text-black" href="/">
                  Learn More &nbsp; <i className="fa-solid fa-angle-right"></i>
                </Link>
              </div>
            </div>

            {/* img */}
            <img
              src={HeroCar}
              alt="car-img"
              className="z-2 absolute right-0 w-[65%] mt-[5rem] md:hidden"
            />
          </div>
        </div>

        {/* page up */}
        <div
          onClick={scrollToTop}
          className={
            `
            fixed text-[2.5rem] text-white bg-orange-600 w-[2rem]
            h-[2rem] bottom-[5rem] right-[5rem] z-20 hidden items-center text-center
            justify-center p-8 cursor-pointer border-[3px] border-white
            scroll-up 
            ${goUp ? "show-scroll flex" : ""}
            `}
        >
          <i className="fa-solid fa-angle-up"></i>
        </div>
      </section>
    </>
  )
}

export default HeroBg;