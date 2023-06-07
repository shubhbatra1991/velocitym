import React from 'react';
import { useState } from "react";

const CarBox = ({ data, carID }) => {
    const [carLoad, setCarLoad] = useState(true);
  return (
    <>
    {data[carID].map((car, id) => (
      <div 
        key={id} 
        className="
          gap-[11rem] flex justify-between lg:gap-4 md:flex-col
          md:items-center md:justify-center md:gap-[5rem]
      ">
        {/* car */}
        <div className="w-[50rem] relative md:w-full">
          {carLoad && <span className="
            w-[48px] h-[48px] border-[5px] border-b-orange-500 rounded-[50%]
            inline-block box-border absolute 
            animate-rotation top-1/2 left-1/2 transform-translate-1/2-1/2
          
          "></span>}
          <img
            style={{ display: carLoad ? "none" : "block" }}
            src={car.img}
            alt="car_img"
            onLoad={() => setCarLoad(false)}
            className='w-full mt-24'
          />
        </div>
        {/* description */}
        <div className="w-[25rem]">
          <div className="w-full bg-orange-500 text-[1.8rem] flex
          items-center gap-[1.5rem] text-white px-1 py-7 nowrap
          ">
            <span className='text-[2.8rem] font-bold'>${car.price}</span>/ rent per day
          </div>
          <div className="grid grid-cols-1 grid-rows-auto text-[1.4rem]">
            <div className="grid grid-cols-2 text-center grid-rows-auto
            p-4 border-b-2 border-r-2 border-l-2 border-gray-300
            ">
              <span className='odd:border-r-2 odd:border-gray-400'>Model</span>
              <span className='odd:border-r-2 odd:border-gray-400'>{car.model}</span>
            </div>

            <div className="grid grid-cols-2 text-center grid-rows-auto
            p-4 border-b-2 border-r-2 border-l-2 border-gray-300">
              <span className='odd:border-r-2 odd:border-gray-400'>Mark</span>
              <span className='odd:border-r-2 odd:border-gray-400'>{car.mark}</span>
            </div>

            <div className="grid grid-cols-2 text-center grid-rows-auto
            p-4 border-b-2 border-r-2 border-l-2 border-gray-300">
              <span className='odd:border-r-2 odd:border-gray-400'>Year</span>
              <span className='odd:border-r-2 odd:border-gray-400'>{car.year}</span>
            </div>

            <div className="grid grid-cols-2 text-center grid-rows-auto
            p-4 border-b-2 border-r-2 border-l-2 border-gray-300">
              <span className='odd:border-r-2 odd:border-gray-400'>Doors</span>
              <span className='odd:border-r-2 odd:border-gray-400'>{car.doors}</span>
            </div>

            <div className="grid grid-cols-2 text-center grid-rows-auto
            p-4 border-b-2 border-r-2 border-l-2 border-gray-300">
              <span className='odd:border-r-2 odd:border-gray-400'>AC</span>
              <span className='odd:border-r-2 odd:border-gray-400'>{car.air}</span>
            </div>

            <div className="grid grid-cols-2 text-center grid-rows-auto
            p-4 border-b-2 border-r-2 border-l-2 border-gray-300">
              <span className='odd:border-r-2 odd:border-gray-400'>Transmission</span>
              <span className='odd:border-r-2 odd:border-gray-400'> {car.transmission}</span>
            </div>

            <div className="grid grid-cols-2 text-center grid-rows-auto
            p-4 border-b-2 border-r-2 border-l-2 border-gray-300">
              <span className='odd:border-r-2 odd:border-gray-400'>Fuel</span>
              <span className='odd:border-r-2 odd:border-gray-400'>{car.fuel}</span>
            </div>
          </div>
          {/* btn cta */}
          <a className="
            text-[2rem] uppercase no-underline font-semibold text-white font-mont
            bg-orange-500 p-4 flex justify-center mt-[1.4rem] transition-all duration-300
            hover:bg-orange-500 shadow-white shadow-lg
          " href="#booking-section">
            Reserve Now
          </a>
        </div>
      </div>
    ))}
  </>
  )
}

export default CarBox;