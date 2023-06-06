import Link from "next/link";
import Logo from "../assets/logo/Logo.png";
import { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div
          className={`flex flex-col w-full h-[100vh] fixed top-0 left-[-100%] bg-white z-50 justify-center items-center transition-all duration-500 ease-in-out ${
            nav ? "open-nav" : ""
          }`}
        >
          <div
            onClick={openNav}
            className="text-3xl absolute top-[3.5rem] right-[3.5rem] cursor-pointer transition-all duration-300 hover:text-orange"
          >
            <FaTimes />
          </div>
          <ul className="flex flex-col list-none text-[2.3rem] gap-[3rem] text-center">
            <li>
              <Link onClick={openNav} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="/models">
                Models
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="/team">
                Our Team
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* desktop */}
        <div className="max-w-[133rem] w-full h-auto flex justify-between items-center px-[2.7rem] py-[2rem] absolute top-0 left-0 right-0 bg-transparent z-50 mx-auto">
          <div className="w-[14.5rem]">
            <Link href="/" onClick={() => window.scrollTo(0, 0)}>
              <Image src={Logo} alt="logo-img" width={100} height={100} />
            </Link>
          </div>
          <ul className="hidden md:flex list-none gap-2.1rem">
            <li>
              <Link className="mr-4" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="mx-4" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="mx-4" href="/models">
                Vehicle Models
              </Link>
            </li>
            <li>
              <Link className="mx-4" href="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link className="mx-4" href="/team">
                Our Team
              </Link>
            </li>
            <li>
              <Link className="ml-4" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="navbar__buttons flex gap-2.5rem text-base font-medium items-center">
            <Link
              className="text-black cursor-pointer hover:text-orange transition-all duration-300 mx-10 "
              href="/"
            >
              Sign In
            </Link>
            <Link
              className="bg-orange-700 text-white px-3 py-1.5 rounded-md shadow transition-all duration-300 hover:shadow-md hover:bg-orange-400 "
              href="/"
            >
              Register
            </Link>
          </div>

          {/* mobile */}
          <div
            className="text-[2.8rem] md:hidden cursor-pointer transition-all duration-300 hover:text-orange-700"
            onClick={openNav}
          >
            <FaBars />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;