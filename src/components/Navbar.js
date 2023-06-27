import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/logo/Logo.png";
import { useState } from "react";
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";

function Navbar() {
  const [nav, setNav] = useState(false);
  const router = useRouter();

  const openNav = () => {
    setNav(true);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div
            onClick={closeNav}
            className="text-[3rem] absolute top-[3.5rem] right-[3.5rem] cursor-pointer transition-all duration-300"
          >
            <HiX />
          </div>
          <ul className="flex flex-col list-none text-[2.3rem] gap-[3rem] text-center">
            <li>
              <Link onClick={closeNav} href="/" className="no-underline text-black font-semibold transition-all duration-300 hover:text-orange-600">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="/about" className="no-underline text-black font-semibold transition-all duration-300 hover:text-orange-600">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="/models" className="no-underline text-black font-semibold transition-all duration-300 hover:text-orange-600">
                Models
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="/TestimonialsPage" className="no-underline text-black font-semibold transition-all duration-300 hover:text-orange-600">
                Testimonials
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="/team" className="no-underline text-black font-semibold transition-all duration-300 hover:text-orange-600">
                Our Team
              </Link>
            </li>
            <li>
              <Link onClick={openNav} href="/contact" className="no-underline text-black font-semibold transition-all duration-300 hover:text-orange-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* desktop */}
        <div
          className="max-w-[133rem] w-full h-auto flex justify-between items-center py-[2.7rem] px-[2rem] absolute top-0 left-0
          right-0 bg-transparent m-auto z-[99999]"
        >
          <div className="w-[14.5rem]">
            <Link href="/" onClick={() => window.scrollTo(0, 0)}>
              <Image src={Logo} alt="logo-img" width={150} height={150} />
            </Link>
          </div>
          <ul className={`flex gap-[2.1rem] list-none lg:hidden ${nav ? "hidden" : ""}`}>
            <li>
              <Link
                className={`text-[1.6rem] font-mont font-bold ${
                  router.pathname === "/" ? "text-orange-600" : "text-black"
                } no-underline cursor-pointer transition-all duration-300 hover:text-orange-600`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link className="text-[1.6rem] font-mont font-bold text-black no-underline cursor-pointer transition-all duration-300 hover:text-orange-600" href="/about">
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link className="text-[1.6rem] font-mont font-bold text-black no-underline cursor-pointer transition-all duration-300 hover:text-orange-600" href="/models">
                Vehicle Models
              </Link>
            </li>
            <li>
              {" "}
              <Link className="text-[1.6rem] font-mont font-bold text-black no-underline cursor-pointer transition-all duration-300 hover:text-orange-600" href="/TestimonialsPage">
                Testimonials
              </Link>
            </li>
            <li>
              {" "}
              <Link className="text-[1.6rem] font-mont font-bold text-black no-underline cursor-pointer transition-all duration-300 hover:text-orange-600" href="/team">
                Our Team
              </Link>
            </li>
            <li>
              {" "}
              <Link className="text-[1.6rem] font-mont font-bold text-black no-underline cursor-pointer transition-all duration-300 hover:text-orange-600" href="/contact">
                Contact
              </Link>
            </li>
            </ul>
          <div className="flex gap-[2.5rem] text-[1.6rem] font-mont font-500 items-center lg:hidden">
            <Link
              className="no-underline text-black cursor-pointer transition-all duration-300 font-bold hover:text-orange-600"
              href="/"
            >
              Sign In
            </Link>
            <Link
              className="no-underline bg-orange-500 text-white py-[1.5rem] px-[3rem] rounded-[3px] transition-all 
            duration-300 shadow-[0_10px_15px_0_rgba(255,83,48,0.35)] hover:shadow-[0_10px_15px_0_rgba(255,83,48,0.5)]
            hover:bg-orange-600"
              href="/"
            >
              Register
            </Link>
          </div>
          {/* mobile */}
          <div
            className={`mobile-hamb text-[2.8rem] hidden cursor-pointer transition-all duration-300 lg:flex ${
              nav ? "hidden" : ""
            }`}
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