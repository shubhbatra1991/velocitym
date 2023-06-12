import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/logo/Logo.png";
import { useState } from "react";
import { useRouter } from 'next/router';


const CustomLink = ({ href, title, className="" }) => {
  const router= useRouter();

  return(
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`
          h-[1px] inline-block w-full bg-dark absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? 'w-full': 'w-0'}
        `}
      >
      &nbsp;
      </span>
    </Link>

  );
}

// for mobile view
const CustomMobileLink = ({ href, title, className="", toggle })  => {

  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href)
  };

  return(
    <button href={href} className={`${className} relative group text-light my-2`} onClick={handleClick}>
            {title}

            <span className={`
                  h-[1px] inline-block w-0 bg-light 
                  absolute left-0 -bottom-0.5
                  group-hover:w-full transition-[width] ease duration-300
                  ${router.asPath === href ? 'w-full': 'w-0'}
              `}
            >
              &nbsp;
            </span>
        </button>
  );
}


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick= () => {
      setIsOpen(!isOpen)
  };

  return (
    <>
      <header  className='w-full px-32 py-8 font-medium flex items-center justify-between
    relative z-10 lg:px-16 md:px-12 sm:px-8'>

        <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
            <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1': '-translate-y-0.5'}`}></span>
            <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0': 'opacity-100'} `}></span>
            <span className={`bg-dark transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1': 'translate-y-0.5'} `}></span>
        </button>

        <div className='w-full flex justify-between items-center'>
          <nav className="text-black font-bold">
              <CustomLink href="/" title="Home" className='mr-4' />
              <CustomLink href="/about" title="About" className='mr-4' />
              <CustomLink href="/models" title="Models" className='mr-4' />
              <CustomLink href="/TestimonialsPage" title="Testimonials" className='mr-4' />
              <CustomLink href="/team" title="Team" className='mr-4' />
              <CustomLink href="/contact" title="Contact" className='mr-4' />
          </nav>
        </div>

        {/* for mobile menu */}
        {
          isOpen ?
          <div
          initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
          animate={{scale:1, opacity:1}}
          className='min-w-[70vw] flex flex-col z-30 justify-between 
          items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-dark/90 -light/75 rounded-lg backdrop-blur-md py-32
          '
        >
        <nav className='flex items-center flex-col justify-center'>
                <CustomMobileLink href="/" title="Home" className='' toggle={handleClick} />
                <CustomMobileLink href="/about" title="About" className='' toggle={handleClick} />
                <CustomMobileLink href="/models" title="Models" className='' toggle={handleClick} />
                <CustomMobileLink href="/TestimonialsPage" title="Testimonials" className='' toggle={handleClick} />
                <CustomMobileLink href="/team" title="Team" className='' toggle={handleClick} />
                <CustomMobileLink href="/contact" title="Contact" className='' toggle={handleClick} />
            </nav>
        </div>
          : null
        }
        <div className='absolute top-2 translate-x-[-50%]'>
          <Image src={Logo} alt="logo-img" width={100} height={100} />
        </div>

      </header>
    </>
  );
}

export default Navbar;