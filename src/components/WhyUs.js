import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainImg from '../assets/cars/main.png';
import { FaAngleRight } from 'react-icons/fa';
import Box1 from "../assets/choose-us/icon1.png";
import Box2 from "../assets/choose-us/icon2.png";
import Box3 from "../assets/choose-us/icon3.png";


const WhyUs = () => {
  return (
    <>
    <section className="bg-white pt-4 pb-10">
        <div className="container">
          <div className="flex flex-col">
            <Image
              className="w-[90%] h-auto m-auto"
              src={MainImg}
              alt="car_img"
            />
            <div className="flex justify-around mt-[3rem] w-full lg:flex-col lg:items-center lg:text-center lg:gap-[5.5rem] ">
              <div className="text-left flex flex-col max-w-[50rem] text-black lg:items-center lg:text-center ">
                <h4 className='text-[2.2rem] mb-[0.7rem] font-600 font-mont '>Why Choose Us</h4>
                <h2 className='text-[4.2rem] leading-[1.2] mb-[2rem]'>Best valued deals you will ever find</h2>
                <p className='text-[1.6rem] font-mont leading-[1.5] text-gray-400 mb-[3.3rem]'>
                  Discover the best deals you'll ever find with our unbeatable
                  offers. We're dedicated to providing you with the best value
                  for your money, so you can enjoy top-quality services and
                  products without breaking the bank. Our deals are designed to
                  give you the ultimate renting experience, so don't miss out on
                  your chance to save big.
                </p>
                <Link 
                  href="#home"
                  className='no-underline text-white font-bold bg-orange-500 py-6 px-10 rounded-[0.3rem] shadow-[0_10px_15px_0_rgba(255,83,48,0.35)] transition-all duration-300 border-2 border-orange-500 text-[1.6rem] w-fit 
                 hover:shadow-md hover:bg-orange-500'
                >
                  Find Details &nbsp;
                  <i className="fa fa-angle-right inline-block"><FaAngleRight /></i>
                </Link>
              </div>
              <div className="flex flex-col gap-[4.5rem] max-w-[44rem]">

                <div className="flex">
                  <Image src={Box1} alt="car-img" className='w-[11rem] h-[11rem] mr-[1.1rem]' />
                  <div className="flex flex-col gap-[1rem] justify-center ">
                    <h4 className='text-[2.4rem]'>Cross Country Drive</h4>
                    <p className='text-[1.6rem] text-gray-500 font-mont leading-[1.3]'>
                      Take your driving experience to the next level with our
                      top-notch vehicles for your cross-country adventures.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  {" "}
                  <Image src={Box2} alt="coin-img" className='w-[11rem] h-[11rem] mr-[1.1rem]' />
                  <div className="flex flex-col gap-[1rem] justify-center ">
                    <h4 className='text-[2.4rem]'>All Inclusive Pricing</h4>
                    <p className='text-[1.6rem] text-gray-500 font-mont leading-[1.3]'>
                      Get everything you need in one convenient, transparent
                      price with our all-inclusive pricing policy.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  {" "}
                  <Image src={Box3} alt="coin-img" className='w-[11rem] h-[11rem] mr-[1.1rem]' />
                  <div className="flex flex-col gap-[1rem] justify-center">
                    <h4 className='text-[2.4rem]'>No Hidden Charges</h4>
                    <p className='text-[1.6rem] text-gray-500 font-mont leading-[1.3]'>
                      Enjoy peace of mind with our no hidden charges policy. We
                      believe in transparent and honest pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default WhyUs;