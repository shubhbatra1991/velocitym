import React from 'react';
import Image from 'next/image';

import Img1 from "../assets/store/appstore.svg";
import Img2 from "../assets/store/googleapp.svg";
import Banner2 from '../assets/store/bg02.png';

const Download = () => {
  return (
    <>
    <section className="relative h-screen">
      <Image src={Banner2} alt="banner image" />
      <div className="absolute inset-1 max-w-[133rem] m-auto px-[2.5rem] ">
        <div className="flex flex-col max-w-[55rem] px-6 md:px-0 text-center">
            <h2 className="text-black text-2xl md:text-4xl">Download our app to get the most out of it</h2>
            <p className="text-sm text-gray-500 leading-6 mt-4 md:mt-6 font-mont">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quo sapiente quas architecto nisi excepturi?
              Commodi itaque dolores doloremque eligendi laudantium minima repellat animi impedit!
              Nam nostrum porro atque maxime ipsam?
            </p>
          <div className="flex justify-center mt-8 md:mt-12">
            <div className="flex gap-6">
              <Image src={Img2} alt="Google Store" className="cursor-pointer w-20 h-20 md:w-32 md:h-32" />
              <Image src={Img1} alt="Apple Store" className="cursor-pointer w-20 h-20 md:w-32 md:h-32" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
};

export default Download;