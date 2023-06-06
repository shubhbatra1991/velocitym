import React from 'react';
import Image from 'next/image';
import SelectCar from '../assets/icons/select_car1.png';
import Operator from '../assets/icons/operator.png';
import Drive from '../assets/icons/drive.png';

const PlanTrip = () => {
  return (
    <>
      <section className="bg-white p-11">
        <div className="container">
          <div className="flex flex-col">
            <div className="m-auto text-center text-black">
              <h3 className='text-[2.3rem] font-semibold my-4  '>Plan your trip now</h3>
              <h2 className='text-[4.2rem] mt-[1.3rem] mb-[3rem] '>Quick & easy car rental</h2>
            </div>

            <div className="grid grid-cols-3 grid-rows-auto mt[3.7rem] px-[3rem] ">
              <div className="text-center px-[6rem] py-[1rem] ">
                <Image src={SelectCar} alt="icon_img" width={50} height={50} className='m-auto' />
                <h3 className='text-[1.5em] font-bold mb-4'>Select Car</h3>
                <p className='text-[1.6rem] text-gray-500 leading-[1] '>
                  We offers a big range of vehicles for all your driving needs.
                  We have the perfect car to meet your needs
                </p>
              </div>

              <div className="text-center px-[6rem] py-[1rem] ">
                <Image src={Operator} alt="icon_img" width={50} height={50} className='m-auto' />
                <h3 className='text-[1.5em] font-bold mb-4'>Contact Operator</h3>
                <p className='text-[1.6rem] text-gray-500 leading-[1] '>
                  Our knowledgeable and friendly operators are always ready to
                  help with any questions or concerns
                </p>
              </div>

              <div className="text-center px-[6rem] py-[1rem] ">
                <Image src={Drive} alt="icon_img" width={50} height={50} className='m-auto' />
                <h3 className='text-[1.5em] font-bold mb-4'>Let's Drive</h3>
                <p className='text-[1.6rem] text-gray-500 leading-[1] '>
                  Whether you're hitting the open road, we've got you covered
                  with our wide range of cars
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    
  )
};

export default PlanTrip;