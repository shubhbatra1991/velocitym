import React from 'react';
import { useState } from "react";
import { FaAngleDown } from 'react-icons/fa';

const Questions = () => {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <>
      <section className="bg-carfaq bg-no-repeat bg-center md:bg-bottom bg-cover py-40 ">
        <div className="container">
          <div className="flex flex-col text-black">
            <div className="flex flex-col m-auto text-center max-w-[80rem] leading-[1.5]">
              <h5 className='text-[2.4rem] font-semibold'>FAQ</h5>
              <h2 className='mb-[1.7rem] text-[4.2rem] font-bold'>Frequently Asked Questions</h2>
              <p className='text-gray-600 p-[1.6rem]'>
                Frequently Asked Questions About the Car Rental Booking Process
                on Our Website: Answers to Common Concerns and Inquiries.
              </p>
            </div>

            <div className="flex flex-col text-center justify-center mt-[7rem]">
              <div className="flex flex-col text-black bg-white w-[80rem] shadow-md cursor-pointer md:w-full">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`flex justify-between items-center shadow-md px-4.5 py-1.8 transition duration-150 ease ${getClassQuestion("q1")}`}
                >
                  <p className='text-[1.8rem] font-semibold'>1. What is special about comparing rental car deals?</p>
                  <i className="fa FaAngleDown text-2xl"><FaAngleDown /></i>
                </div>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`text-gray font-mont text-base leading-7 max-h-0 overflow-hidden transition-all duration-400 ease-in-out px-12 ${getClassAnswer("q1")}`}
                >
                  Comparing rental car deals is important as it helps find the
                  best deal that fits your budget and requirements, ensuring you
                  get the most value for your money. By comparing various
                  options, you can find deals that offer lower prices,
                  additional services, or better car models. You can find car
                  rental deals by researching online and comparing prices from
                  different rental companies.
                </div>
              </div>
              <div className="flex flex-col text-black bg-white w-[80rem] shadow-md cursor-pointer md:w-full">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`flex justify-between items-center shadow-md px-4.5 py-1.8 transition duration-150 ease ${getClassQuestion("q2")}`}
                >
                  <p className='text-[1.8rem] font-semibold'>2. How do I find the car rental deals?</p>
                  <i className="fa FaAngleDown text-2xl"><FaAngleDown /></i>
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`text-gray font-mont text-base leading-7 max-h-0 overflow-hidden transition-all duration-400 ease-in-out px-12 ${getClassAnswer("q2")}`}
                >
                  You can find car rental deals by researching online and
                  comparing prices from different rental companies. Websites
                  such as Expedia, Kayak, and Travelocity allow you to compare
                  prices and view available rental options. It is also
                  recommended to sign up for email newsletters and follow rental
                  car companies on social media to be informed of any special
                  deals or promotions.
                </div>
              </div>
              <div className="flex flex-col text-black bg-white w-[80rem] shadow-md cursor-pointer md:w-full">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`flex justify-between items-center shadow-md px-4.5 py-1.8 transition duration-150 ease ${getClassQuestion("q3")}`}
                >
                  <p className='text-[1.8rem] font-semibold'>3. How do I find such low rental car prices?</p>
                  <i className="fa FaAngleDown text-2xl"><FaAngleDown /></i>
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`text-gray font-mont text-base leading-7 max-h-0 overflow-hidden transition-all duration-400 ease-in-out px-12 ${getClassAnswer("q3")}`}
                >
                  Book in advance: Booking your rental car ahead of time can
                  often result in lower prices. Compare prices from multiple
                  companies: Use websites like Kayak, Expedia, or Travelocity to
                  compare prices from multiple rental car companies. Look for
                  discount codes and coupons: Search for discount codes and
                  coupons that you can use to lower the rental price. Renting
                  from an off-airport location can sometimes result in lower
                  prices.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Questions