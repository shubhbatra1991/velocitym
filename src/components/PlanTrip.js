import React from 'react';
import Image from 'next/image';
import SelectCar from '../assets/icons/select_car1.png';
import Operator from '../assets/icons/operator.png';
import Drive from '../assets/icons/drive.png';

const PlanTrip = () => {
  return (
    <>
      <section className="bg-white p-[5.3rem] w-full">
        <div className="container">
          <div className="flex flex-col">
            <div className="m-auto text-center text-black">
              <h3 className='text-[2.4rem] font-mont font-500 '>Plan your trip now</h3>
              <h2 className='text-[4.2rem] mt-[1.3rem] mb-[3rem] font-mont font-bold'>Quick & easy car rental</h2>
            </div>

            <div className="grid grid-cols-3 grid-rows-auto mt-[3.7rem] px-[3rem] md:grid-cols-1 md:mt-[1rem] lg:grid-cols-2 lg:gap-x-[2rem] ">
              <div className="text-center px-[6rem] py-[1rem] xs:px-0">
                <Image src={SelectCar} alt="icon_img" width={150} height={150} className='m-auto' />
                <h3 className='text-[2.4em] font-bold mb-[1rem]'>Select Car</h3>
                <p className='text-[1.6rem] text-gray-500 leading-[1.43] font-mont '>
                  We offers a big range of vehicles for all your driving needs.
                  We have the perfect car to meet your needs
                </p>
              </div>

              <div className="text-center px-[6rem] py-[1rem] xs:px-0">
                <Image src={Operator} alt="icon_img" width={150} height={150} className='m-auto' />
                <h3 className='text-[2.4em] font-bold mb-[1rem]'>Contact Operator</h3>
                <p className='text-[1.6rem] text-gray-500 leading-[1.43] font-mont  '>
                  Our knowledgeable and friendly operators are always ready to
                  help with any questions or concerns
                </p>
              </div>

              <div className="text-center px-[6rem] py-[1rem] xs:px-0 ">
                <Image src={Drive} alt="icon_img" width={150} height={150} className='m-auto' />
                <h3 className='text-[2.4em] font-bold mb-[1rem]'>Let's Drive</h3>
                <p className='text-[1.6rem] text-gray-500 leading-[1.43] font-mont '>
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