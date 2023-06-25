import Link from "next/link";
import React from "react";
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <footer className="bg-white py-[10rem]">
        <div className="container">
          <div className="grid grid-cols-4 gap-[8rem] text-left justify-center text-black">
          {/* grid-cols-[27fr 21fr 21fr 21fr]  */}
            <ul className="list-none">
              <li className="text-[2.4rem] mb-[1.5rem] font-bold" >
                <span>Velocity</span> <span>M</span> Rental
              </li>
              <li className="text-[1.6rem] mb-[3rem] leading-[1.7] text-gray-400">
              We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.
              </li>
              <li className="text-[1.6rem] mb-[1rem] font-500 font-mont ">
                <Link href="tel:123456789" className="text-black transition-all duration-200 no-underline flex hover:text-orange-500">
                  <i className="fa fa-phone mt-[4px]">
                    <FaPhoneAlt />
                  </i> &nbsp; (123) -456-789
                </Link>
              </li>

              <li className="text-[1.6rem] mb-[1rem] font-500 font-mont ">
                <Link 
                  className="text-black transition-all duration-200 no-underline flex hover:text-orange-500"
                  href="mailto: info@velocitym.com"
                >
                  <i className="fa fa-envelope mt-[4px] ">
                    <FaEnvelope />
                  </i>
                  &nbsp; info@velocitym.com
                </Link>
              </li>

              <li>
                <Link
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://myportfolio-delta-cyan.vercel.app/"
                  className="no-underline text-black font-bold transition-all duration-200 hover:text-orange-500"
                >
                  Design by Saurabh
                </Link>
              </li>
            </ul>


            <ul className="list-none">
              <li className="text-[2.4rem] font-bold uppercase font-mont cursor-auto">Company</li>
              <li className="text-[1.6rem] mb-[1rem]">
                <Link className="no-underline text-black transition-all duration-200 hover:text-orange-500"  href="#home">Dublin, Ireland</Link>
              </li>
              <li className="text-[1.6rem] mb-[1rem]">
                <Link className="no-underline text-black transition-all duration-200 hover:text-orange-500"  href="#home">Careers</Link>
              </li>
              <li className="text-[1.6rem] mb-[1rem]">
                <Link  className="no-underline text-black transition-all duration-200 hover:text-orange-500" href="#home">About Us</Link>
              </li>
              <li className="text-[1.6rem] mb-[1rem]">
                <Link  className="no-underline text-black transition-all duration-200 hover:text-orange-500" href="#home">Missions</Link>
              </li>
              <li className="text-[1.6rem] mb-[1rem]">
                <Link  className="no-underline text-black transition-all duration-200 hover:text-orange-500" href="#home">How we work</Link>
              </li>
            </ul>

            <ul className="list-none">
              <li className="text-[2.4rem] font-bold uppercase font-mont cursor-auto mb-[1rem]" >Working Hours</li>
              <li className="text-[1.6rem] mb-[1rem]" >Mon - Fri: 9:00AM - 9:00PM</li>
              <li className="text-[1.6rem] mb-[1rem]" >Sat: 9:00AM - 19:00PM</li>
              <li className="text-[1.6rem] mb-[1rem]" >Sun: Closed</li>
            </ul>

            <ul className="list-none">
              <li className="text-[2.4rem] font-bold uppercase font-mont cursor-auto mb-[1rem]">Subscription</li>
              <li className="text-[1.6rem] mb-[1rem]" >
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li className="text-[1.6rem] mb-[1rem]">
                <input 
                    type="email" 
                    placeholder="Enter Email Address" 
                    className=" font-mont text-[14px] font-400 leading-[26px] bg-gray-100 border-[1px] border-transparent px-[60px] py-[10px] mt-[1rem] outline-none w-full " >
                </input>
              </li>
              <li className="text-[1.6rem] mb-[1rem]">
                <button className="decoration-none text-white font-bold bg-orange-600 py-[1.5rem] px-[2.5rem] transition-all duration-300
                  border-[2px] border-orange-600 text-[1.6rem] cursor-pointer w-full rounded-[0.3rem] shadow-3xl 
                  hover:bg-orange-600 hover:shadow-[0_10px_15px_0_rgba(255,83,48,0.4)]
                ">
                  Submit
                </button>
              </li>
            </ul>

          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;