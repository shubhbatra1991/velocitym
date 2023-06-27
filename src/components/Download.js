import React from 'react';
import Image from 'next/image';

import Img1 from "../assets/store/appstore.svg";
import Img2 from "../assets/store/googleapp.svg";


const Download = () => {
  return (
    <>
    <section className="my-download-class w-full h-auto py-[10rem] ">
      <div className="container">

          <div className="flex flex-col max-w-[55rem] gap-[2rem] text-left md:text-center md:m-auto">
              <h2 className="text-black text-[4.2rem] font-mont font-bold">Download our app to get the most out of it</h2>
              <p className="text-[1.6rem] text-gray-500 leading-[1.5] font-mont">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quo sapiente quas architecto nisi excepturi?
                Commodi itaque dolores doloremque eligendi laudantium minima repellat animi impedit!
                Nam nostrum porro atque maxime ipsam?
              </p>
            <div className="flex gap-[3rem] mt-[2rem] md:justify-center">
              <div className="flex gap-6">
                <Image src={Img2} alt="Google Store" className="cursor-pointer w-[40%]" />
                <Image src={Img1} alt="Apple Store" className="cursor-pointer w-[40%]" />
              </div>
            </div>
          </div>

      </div>
    </section>
  </>
  )
};

export default Download;