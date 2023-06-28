import HeroPages from '@/components/HeroPage';
import BookBanner from '@/components/BookBanner';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaStar,FaCarSide } from 'react-icons/fa';



const models = () => {

    const modelCars = [
        {img: '/assets/cars/audi-box.png', price: 65 , name: 'Audi', nameTag: 'Audi', nameNumber: '4/5', transmission: 'Manual', type: 'Diesel'},
        {img: '/assets/cars/benz.jpg', price: 75, name: 'Mercedes Benz', nameTag: 'Benz', nameNumber: '4/5', transmission: 'Manual', type: 'Diesel'},
        {img: '/assets/cars/audia1.jpg', price: 95 , name: 'Audi', nameTag: 'Audi', nameNumber: '4/5', transmission: 'Automatic', type: 'Diesel'},
        {img: '/assets/cars/bmw320.jpg', price: 105 , name: 'BMW', nameTag: 'BMW', nameNumber: '4/5', transmission: 'Manual', type: 'Petrol'},
        {img: '/assets/cars/golf6-box.png', price: 145 , name: 'New Golf', nameTag: 'Volkswagen', nameNumber: '4/5', transmission: 'Manual', type: 'Diesel'},
        {img: '/assets/cars/passat-box.png', price: 245 , name: 'VW passat', nameTag: 'Volkswagen', nameNumber: '4/5', transmission: 'Automatic', type: 'Diesel'}
    ];

  return (
    <section className="models-section">
      <HeroPages name="Vehicle Models" /> 
      <div className='container'>
      <div className="grid grid-cols-3 grid-rows-auto gap-[3rem] items-center 
          text-center m-0 py-[10rem] md:grid-cols-1 md:w-fit lg:grid-cols-2 lg:w-fit">
           
           {
              modelCars.map((cars, id)=>{
                return (
                <div className="flex w-full h-auto flex-col border border-gray-300 rounded-md " key={id} >
                <div className="w-full h-auto rounded-md">
                  <Image src={cars.img} alt="car_img" width={1000} height={1000} />
                  <div className="px-[2rem] py-[3rem] flex flex-col text-black">
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col text-left gap-[0.5rem]">
                        <p className='text-[3rem] font-bold'>{cars.name}</p>
                        <span className='flex gap-[0.4rem]'>
                          <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                          <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                          <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                          <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                          <i className="fa fa-star text-yellow-400 text-[1.4rem]"><FaStar /></i>
                        </span>
                      </div>
                      <div className="flex flex-col text-right">
                        <h4 className='text-[2.8rem]'>${cars.price}</h4>
                        <p className='text-[1.4rem]'>per day</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-[7rem] gap-y-[2rem] my-[2rem] pb-[2.5rem] border-b border-gray-300">
                      <span className='text-[1.8rem] font-semibold text-left text-gray-400 flex'>
                        <i className="fa fa-car-side text-black mt-[4px]"><FaCarSide /></i> 
                        <span>&nbsp; {cars.nameTag}</span>
                      </span>
                      <span style={{ textAlign: "right" }} className='text-[1.8rem] font-semibold text-left text-gray-400 flex'>
                        4/5 &nbsp; <i className="fa fa-car-side text-black mt-[4px]"><FaCarSide /></i>
                      </span>
                      <span className='text-[1.8rem] font-semibold text-left text-gray-400 flex'>
                        <i className="fa fa-car-side text-black mt-[4px]"><FaCarSide /></i> &nbsp; {cars.transmission}
                      </span>
                      <span style={{ textAlign: "right" }} className='text-[1.8rem] font-semibold text-left text-gray-400 flex'>
                        {cars.type} &nbsp; <i className="fa fa-car-side text-black mt-[4px]"><FaCarSide /></i>
                      </span>
                    </div>
                    <div className="bg-orange-500 px-[1.8rem] py-[3rem] rounded-md shadow-md transition-all duration-300 border-2 border-orange-500 text-[1.8rem] cursor-pointer hover:shadow-lg hover:bg-orange-600">
                      <Link onClick={() => window.scrollTo(0, 0)} href="/" className='text-white font-bold no-underline'>
                        Book Ride
                      </Link>
                    </div>
                  </div>
                </div>
                </div>
              )})
            }
        </div>
      </div>

     <BookBanner />
    </section>
    
  )
};

export default models;

