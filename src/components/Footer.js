import React from "react";
import { FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <footer className="bg-white py-16 px-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left text-black">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">
                <span>VelocityM</span> Rental
              </h3>
              <p className="text-gray-500">
                We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.
              </p>
              <a href="tel:123456789" className="text-black hover:text-orange">
                <i className="fa-solid fa-phone"></i> &nbsp; (123) -456-789
              </a>
              <a href="mailto:xyz@gmail.com" className="text-black hover:text-orange">
                <i className={{FaPhone}}></i> &nbsp; xyz@gmail.com
              </a>
              <a
                style={{ fontSize: "14px" }}
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-black hover:text-orange"
              >
                Design by Saurabh Batra
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold uppercase">Company</h3>
              <a href="#home" className="text-black hover:text-orange transition-all duration-200">
                New York
              </a>
              <a href="#home" className="text-black hover:text-orange  transition-all duration-200">
                Careers
              </a>
              <a href="#home" className="text-black hover:text-orange  transition-all duration-200">
                Mobile
              </a>
              <a href="#home" className="text-black hover:text-orange  transition-all duration-200">
                Blog
              </a>
              <a href="#home" className="text-black hover:text-orange  transition-all duration-200">
                How we work
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Working Hours</h3>
              <p>Mon - Fri: 9:00AM - 9:00PM</p>
              <p>Sat: 9:00AM - 19:00PM</p>
              <p>Sun: Closed</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Subscription</h3>
              <p>Subscribe your Email address for latest news & updates.</p>
              <input type="email" placeholder="Enter Email Address" className="w-full py-2 px-4 bg-gray-300 border border-transparent rounded focus:outline-none focus:bg-white focus:border-orange-500" />
              <button className="submit-email bg-orange-500 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:bg-orange-600 w-full cursor-pointer text-[1.6rem]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;