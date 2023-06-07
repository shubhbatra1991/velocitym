import React from 'react';
import Link from 'next/link';
import { FaStar,FaCarSide } from 'react-icons/fa';
import BookBanner from '@/components/BookBanner';
import HeroPages from '@/components/HeroPage';
import CarImg1 from '../assets/cars/audia1.jpg';
import CarImg2 from '../assets/cars/audia1.jpg';
import CarImg3 from '../assets/cars/audia1.jpg';
import CarImg4 from '../assets/cars/audia1.jpg';
import CarImg5 from '../assets/cars/audia1.jpg';
import CarImg6 from '../assets/cars/audia1.jpg';



const models = () => {
  return (
    <>
      <section className="models-section">
        <HeroPages name="Vehicle Models" />  
        <div className="container">
          <div className="grid grid-cols-3 grid-rows-auto gap-[3rem] items-center 
          text-center m-0 py-[10rem] lg:grid-cols-2 lg:w-fit-content md:grid-cols-1 md:w-fit-content">
            
            <div className="flex w-[35rem] flex-col border border-gray-300 rounded-md sm:grid-cols-1 sm:w-full">
              <div className="w-full h-auto rounded-md">
                <img src={CarImg1} alt="car_img" width={100} height={27} />
                <div className="px-[2rem] py-[3rem] flex flex-col text-black">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col text-left gap-[0.5rem]">
                      <p className='text-[3rem] font-bold'>Audi A1</p>
                      <span className='flex gap-[0.4rem]'>
                        <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                        <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                        <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                        <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                        <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                      </span>
                    </div>
                    <div className="flex flex-col text-right">
                      <h4 className='text-[2.8rem]'>$45</h4>
                      <p className='text-[1.4rem]'>per day</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-x-7 gap-y-2 mt-2.5rem mx-auto pb-2.5rem border-b border-gray-300">
                    <span className='text-lg font-medium text-left text-gray-400'>
                      <i className="fa fa-car-side text-black"><FaCarSide /></i> &nbsp; Audi
                    </span>
                    <span style={{ textAlign: "right" }} className='text-lg font-medium text-left text-gray-400'>
                      4/5 &nbsp; <i className="fa fa-car-side text-black"><FaCarSide /></i>
                    </span>
                    <span className='text-lg font-medium text-left text-gray-400'>
                      <i className="fa fa-car-side text-black"><FaCarSide /></i> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }} className='text-lg font-medium text-left text-gray-400'>
                      Diesel &nbsp; <i className="fa fa-car-side text-black"><FaCarSide /></i>
                    </span>
                  </div>
                  <div className="bg-red-500 p-7 rounded-md shadow-md transition duration-300 border-2 border-red-500 text-xl cursor-pointer hover:shadow-lg hover:bg-red-600">
                    <Link onClick={() => window.scrollTo(0, 0)} href="/" className='text-white font-bold no-underline'>
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-[35rem] flex-col border border-gray-300 rounded-md sm:grid-cols-1 sm:w-full">
              <div className="w-full h-auto rounded-md">
                <img src={CarImg2} alt="car_img" width={100} height={27} />
                <div className="px-[2rem] py-[3rem] flex flex-col text-black">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col text-left gap-[0.5rem]">
                      <p className='text-[3rem] font-bold'>Audi A1</p>
                      <span className='flex gap-[0.4rem]'>
                        <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                        <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                        <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                        <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                        <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                      </span>
                    </div>
                    <div className="flex flex-col text-right">
                      <h4 className='text-[2.8rem]'>$45</h4>
                      <p className='text-[1.4rem]'>per day</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-x-7 gap-y-2 mt-2.5rem mx-auto pb-2.5rem border-b border-gray-300">
                    <span className='text-lg font-medium text-left text-gray-400'>
                      <i className="fa fa-car-side text-black"><FaCarSide /></i> &nbsp; Audi
                    </span>
                    <span style={{ textAlign: "right" }} className='text-lg font-medium text-left text-gray-400'>
                      4/5 &nbsp; <i className="fa fa-car-side text-black"><FaCarSide /></i>
                    </span>
                    <span className='text-lg font-medium text-left text-gray-400'>
                      <i className="fa fa-car-side text-black"><FaCarSide /></i> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }} className='text-lg font-medium text-left text-gray-400'>
                      Diesel &nbsp; <i className="fa fa-car-side text-black"><FaCarSide /></i>
                    </span>
                  </div>
                  <div className="bg-red-500 p-7 rounded-md shadow-md transition duration-300 border-2 border-red-500 text-xl cursor-pointer hover:shadow-lg hover:bg-red-600">
                    <Link onClick={() => window.scrollTo(0, 0)} href="/" className='text-white font-bold no-underline'>
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-[35rem] flex-col border border-gray-300 rounded-md sm:grid-cols-1 sm:w-full">
              <div className="w-full h-auto rounded-md">
                <img src={CarImg3} alt="car_img" width={100} height={27} />
                <div className="px-[2rem] py-[3rem] flex flex-col text-black">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col text-left gap-[0.5rem]">
                      <p className='text-[3rem] font-bold'>Audi A1</p>
                      <span className='flex gap-[0.4rem]'>
                        <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                        <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                        <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                        <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                        <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                      </span>
                    </div>
                    <div className="flex flex-col text-right">
                      <h4 className='text-[2.8rem]'>$45</h4>
                      <p className='text-[1.4rem]'>per day</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-x-7 gap-y-2 mt-2.5rem mx-auto pb-2.5rem border-b border-gray-300">
                    <span className='text-lg font-medium text-left text-gray-400'>
                      <i className="fa fa-car-side text-black"><FaCarSide /></i> &nbsp; Audi
                    </span>
                    <span style={{ textAlign: "right" }} className='text-lg font-medium text-left text-gray-400'>
                      4/5 &nbsp; <i className="fa fa-car-side text-black"><FaCarSide /></i>
                    </span>
                    <span className='text-lg font-medium text-left text-gray-400'>
                      <i className="fa fa-car-side text-black"><FaCarSide /></i> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }} className='text-lg font-medium text-left text-gray-400'>
                      Diesel &nbsp; <i className="fa fa-car-side text-black"><FaCarSide /></i>
                    </span>
                  </div>
                  <div className="bg-red-500 p-7 rounded-md shadow-md transition duration-300 border-2 border-red-500 text-xl cursor-pointer hover:shadow-lg hover:bg-red-600">
                    <Link onClick={() => window.scrollTo(0, 0)} href="/" className='text-white font-bold no-underline'>
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-[35rem] flex-col border border-gray-300 rounded-md sm:grid-cols-1 sm:w-full">
              <div className="w-full h-auto rounded-md">
                <img src={CarImg4} alt="car_img" width={100} height={27} />
                <div className="px-[2rem] py-[3rem] flex flex-col text-black">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col text-left gap-[0.5rem]">
                      <p className='text-[3rem] font-bold'>Audi A1</p>
                      <span className='flex gap-[0.4rem]'>
                        <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                        <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                        <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                        <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                        <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                      </span>
                    </div>
                    <div className="flex flex-col text-right">
                      <h4 className='text-[2.8rem]'>$45</h4>
                      <p className='text-[1.4rem]'>per day</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-x-7 gap-y-2 mt-2.5rem mx-auto pb-2.5rem border-b border-gray-300">
                    <span className='text-lg font-medium text-left text-gray-400'>
                      <i className="fa fa-car-side text-black"><FaCarSide /></i> &nbsp; Audi
                    </span>
                    <span style={{ textAlign: "right" }} className='text-lg font-medium text-left text-gray-400'>
                      4/5 &nbsp; <i className="fa fa-car-side text-black"><FaCarSide /></i>
                    </span>
                    <span className='text-lg font-medium text-left text-gray-400'>
                      <i className="fa fa-car-side text-black"><FaCarSide /></i> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }} className='text-lg font-medium text-left text-gray-400'>
                      Diesel &nbsp; <i className="fa fa-car-side text-black"><FaCarSide /></i>
                    </span>
                  </div>
                  <div className="bg-red-500 p-7 rounded-md shadow-md transition duration-300 border-2 border-red-500 text-xl cursor-pointer hover:shadow-lg hover:bg-red-600">
                    <Link onClick={() => window.scrollTo(0, 0)} href="/" className='text-white font-bold no-underline'>
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-[35rem] flex-col border border-gray-300 rounded-md sm:grid-cols-1 sm:w-full">
              <div className="w-full h-auto rounded-md">
                <img src={CarImg5} alt="car_img" width={100} height={27} />
                <div className="px-[2rem] py-[3rem] flex flex-col text-black">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col text-left gap-[0.5rem]">
                      <p className='text-[3rem] font-bold'>Audi A1</p>
                      <span className='flex gap-[0.4rem]'>
                        <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                        <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                        <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                        <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                        <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                      </span>
                    </div>
                    <div className="flex flex-col text-right">
                      <h4 className='text-[2.8rem]'>$45</h4>
                      <p className='text-[1.4rem]'>per day</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-x-7 gap-y-2 mt-2.5rem mx-auto pb-2.5rem border-b border-gray-300">
                    <span className='text-lg font-medium text-left text-gray-400'>
                      <i className="fa fa-car-side text-black"><FaCarSide /></i> &nbsp; Audi
                    </span>
                    <span style={{ textAlign: "right" }} className='text-lg font-medium text-left text-gray-400'>
                      4/5 &nbsp; <i className="fa fa-car-side text-black"><FaCarSide /></i>
                    </span>
                    <span className='text-lg font-medium text-left text-gray-400'>
                      <i className="fa fa-car-side text-black"><FaCarSide /></i> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }} className='text-lg font-medium text-left text-gray-400'>
                      Diesel &nbsp; <i className="fa fa-car-side text-black"><FaCarSide /></i>
                    </span>
                  </div>
                  <div className="bg-red-500 p-7 rounded-md shadow-md transition duration-300 border-2 border-red-500 text-xl cursor-pointer hover:shadow-lg hover:bg-red-600">
                    <Link onClick={() => window.scrollTo(0, 0)} href="/" className='text-white font-bold no-underline'>
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-[35rem] flex-col border border-gray-300 rounded-md sm:grid-cols-1 sm:w-full">
              <div className="w-full h-auto rounded-md">
                <img src={CarImg6} alt="car_img" width={100} height={27} />
                <div className="px-[2rem] py-[3rem] flex flex-col text-black">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col text-left gap-[0.5rem]">
                      <p className='text-[3rem] font-bold'>Audi A1</p>
                      <span className='flex gap-[0.4rem]'>
                        <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                        <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                        <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                        <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                        <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                      </span>
                    </div>
                    <div className="flex flex-col text-right">
                      <h4 className='text-[2.8rem]'>$45</h4>
                      <p className='text-[1.4rem]'>per day</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-x-7 gap-y-2 mt-2.5rem mx-auto pb-2.5rem border-b border-gray-300">
                    <span className='text-lg font-medium text-left text-gray-400'>
                      <i className="fa fa-car-side text-black"><FaCarSide /></i> &nbsp; Audi
                    </span>
                    <span style={{ textAlign: "right" }} className='text-lg font-medium text-left text-gray-400'>
                      4/5 &nbsp; <i className="fa fa-car-side text-black"><FaCarSide /></i>
                    </span>
                    <span className='text-lg font-medium text-left text-gray-400'>
                      <i className="fa fa-car-side text-black"><FaCarSide /></i> &nbsp; Manual
                    </span>
                    <span style={{ textAlign: "right" }} className='text-lg font-medium text-left text-gray-400'>
                      Diesel &nbsp; <i className="fa fa-car-side text-black"><FaCarSide /></i>
                    </span>
                  </div>
                  <div className="bg-red-500 p-7 rounded-md shadow-md transition duration-300 border-2 border-red-500 text-xl cursor-pointer hover:shadow-lg hover:bg-red-600">
                    <Link onClick={() => window.scrollTo(0, 0)} href="/" className='text-white font-bold no-underline'>
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BookBanner />
      </section>
    </>
  )
};

export default models;