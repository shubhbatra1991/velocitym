import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

const Questions = () => {
  const [activeQ, setActiveQ] = useState('');

  const openQ = (id) => {
    setActiveQ(activeQ === id ? '' : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? 'active-answer' : '';
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? 'active-question' : '';
  };

  return (
    <>
      <section className="my-faqs w-full">
        <div className="container">
          <div className="flex flex-col text-black">
            <div className="flex flex-col m-auto text-center max-w-[80rem] leading-[1.5]">
              <h5 className="text-[2.2rem] font-bold">FAQ</h5>
              <h2 className="mb-[1.7rem] text-[4.2rem] font-bold">Frequently Asked Questions</h2>
              <p className="text-gray-600 text-[1.6rem]">
                Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.
              </p>
            </div>

            <div className="flex flex-col text-center mt-[7rem] items-center">

              {/* Question 1 */}
              <div className="flex flex-col text-black bg-white w-[80rem] shadow-[0_10px_15px_0_rgba(0,0,0,0.1)] cursor-pointer">
                <div
                  id="q1"
                  onClick={() => openQ('q1')}
                  className={`flex bg-white text-black justify-between items-center px-[4.5rem] py-[1.8rem] transition duration-150 ease shadow-[0 3px 6px 0 rgba(0,0,0,0.1)]  ${getClassQuestion('q1')}`}
                >
                  <p className="text-[1.8rem] font-semibold">1. What is special about comparing rental car deals?</p>
                  <i className="text-[2rem]"><FaAngleDown /></i>
                </div>
                <div
                  id="a1"
                  className={`text-gray font-mont text-[1.6rem] leading-[1.7] max-h-0 overflow-hidden transition-all duration-400 ease ${getClassAnswer('q1')}`}
                >
                  Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.
                </div>
              </div>

              {/* Question 2 */}
              <div className="flex flex-col text-black bg-white w-[80rem] shadow-[0_10px_15px_0_rgba(0,0,0,0.1)] cursor-pointer">
                <div
                  id="q2"
                  onClick={() => openQ('q2')}
                  className={`flex bg-white text-black justify-between items-center px-[4.5rem] py-[1.8rem] transition duration-150 ease shadow-[0 3px 6px 0 rgba(0,0,0,0.1)]  ${getClassQuestion('q2')}`}
                >
                  <p className="text-[1.8rem] font-semibold">2. How do I find the car rental deals?</p>
                  <i className="text-[2rem]"><FaAngleDown /></i>
                </div>
                <div
                  id="a2"
                  className={`text-gray font-mont text-[1.6rem] leading-[1.7] max-h-0 overflow-hidden transition-all duration-400 ease ${getClassAnswer('q2')}`}
                >
                  You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.
                </div>
              </div>

              {/* Question 3 */}
              <div className="flex flex-col text-black bg-white w-[80rem] shadow-[0_10px_15px_0_rgba(0,0,0,0.1)] cursor-pointer">
                <div
                  id="q3"
                  onClick={() => openQ('q3')}
                  className={`flex bg-white text-black justify-between items-center px-[4.5rem] py-[1.8rem] transition duration-150 ease shadow-[0 3px 6px 0 rgba(0,0,0,0.1)] ${getClassQuestion('q3')}`}
                >
                  <p className="text-[1.8rem] font-semibold">3. How do I find such low rental car prices?</p>
                  <i className="text-[2rem]"><FaAngleDown /></i>
                </div>
                <div
                  id="a3"
                  className={`text-gray font-mont text-[1.6rem] leading-[1.7] max-h-0 overflow-hidden transition-all duration-400 ease ${getClassAnswer('q3')}`}
                >
                  Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Questions;