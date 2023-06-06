import React from 'react';
import { useState,useEffect } from 'react';
import Image from 'next/image';
import { FaAngleUp,FaCircleCheck,FaAngleRight } from 'react-icons/fa';
import HeroCar from '../../assets/cars/car-front.png';
import BgShape from '../../assets/hero/hero-bg.png';
import Link from 'next/link';



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
      if (window.pageYOffset > 600) {
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
    <section id="home" className="w-full h-[97vh] bg-gray-200 relative ">
        <div className="container">
          <Image className="absolute top-0 right-0 z-1 md:hidden" src={BgShape} alt="bg-shape" />
          <div className="w-full h-[100vh] flex items-center relative md:justify-center ">
            <div className="flex flex-col z-3 max-w-[50rem] mt-[5rem] md:text-center md:items-center">
              <h4 className='text-[2.2rem] font-mont text-black'>Plan your trip now</h4>
              <h1 className='text-[4rem] font-mont font-bold leading-[1.2] mt-[1rem] mb-[2.3rem]'>
                Save <span className='text-orange-500'>big</span> with our car rental
              </h1>
              <p className='text-[1.2rem] font-mont leading-[1.6] text-gray-400 mb-[4rem]'>
                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                flexible pick-up options and much more.
              </p>
              <div className="flex gap-[2rem] text-[1.2rem] font-mont sm:flex-col">
                <Link
                  onClick={bookBtn}
                  className="bg-text-orange p-7 rounded-md shadow-md transition duration-300 border-2 border-text-orange hover:bg-fa4226 hover:shadow-lg"
                  href="/"
                >
                  Book Ride &nbsp; 
                  <i className="fa fa-circle-check">
                    <FaCircleCheck />
                  </i>
                </Link>
                <Link className="bg-black p-7 rounded-md border-2 border-black transition duration-300 hover:bg-transparent hover:text-black" href="/">
                  Learn More &nbsp; 
                  <i className="fa-solid fa-angle-right">
                  <FaAngleRight />

                  </i>
                </Link>
              </div>
            </div>

            {/* img */}
            <Image
              src={HeroCar}
              alt="car-img"
              className="z-2 absolute right-0 w-65p mt-20 md:mt-0 md:w-full md:static md:visible"
            />
          </div>
        </div>

        {/* page up */}
        <div
          onClick={scrollToTop}
          className={`fixed text-white text-2xl bg-text-orange border-4 border-white w-8 h-8 bottom-20 right-20 z-20 hidden 
          items-center justify-center p-8 cursor-pointer ${goUp ? "show-scroll" : ""}`}
        >
          <i className="fa-solid fa-angle-up"><FaAngleUp /></i>
        </div>
      </section>
    </>
  )
}

export default HeroBg;