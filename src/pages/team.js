import HeroPages from '@/components/HeroPage';
import React from 'react';
import { FaPhone } from 'react-icons/fa';
import Person1 from '../assets/team/member1.jpg';
import Person2 from '../assets/team/member2.jpg';
import Person3 from '../assets/team/member3.jpg';
import Person4 from '../assets/team/member4.jpg';
import Person5 from '../assets/team/member5.jpg';


const team = () => {
  const teamPpl = [
    { img: Person1, name: "Julia Roberts", job: "Saleswoman" },
    { img: Person2, name: "Joana W", job: "CFO" },
    { img: Person3, name: "Stephanie", job: "Business Owner" },
    { img: Person4, name: "Anubhav S", job: "Product Owner" },
    { img: Person5, name: "Mahim K", job: "Web Developer" },
  ];

  return (
    <section>
      <HeroPages name="Our Team" />
      <div>
      <div className="grid grid-cols-3 grid-rows-auto gap-[4rem] items-center text-center px-[10rem] py-[2rem] w-[110rem] m-0 
      lg:grid-cols-2 lg:w-fit-content md:grid-cols-1 md:w-fit-content">
            {teamPpl.map((ppl, id) => (
              <div key={id} className="w-[33rem] bg-white shadow-xl sm:w-full">
                <div className="w-full h-auto bg-white">
                  <img src={ppl.img} alt="team_img" className='w-full'/>
                </div>
                <div className="text-black p-[3rem]">
                  <h3 className='text-[2.2rem]'>{ppl.name}</h3>
                  <p className='text-[1.5rem] font-semibold text-gray-500'>{ppl.job}</p>
                </div>
              </div>
            ))}
          </div>
      </div>

      <div className="flex w-full h-[20rem] relative mt-[7rem] ">
              <div className="bg-gray-500 opacity-[0.89] w-full h-full right-0 top-0 absolute">
                <div className="container">
                  <div className="text-white z-5 relative w-full h-[20rem] flex items-center gap-[5rem] md:flex-col md:justify-center md:items-center md:gap-[1rem] md:text-center">
                    <h2 className='text-[3.2rem]' >Book a car by getting in touch with us</h2>
                    <span className='flex text-[2.7rem] gap-[1rem] items-center text-orange-600 whitespace-nowrap'>
                      <i className='fa fa-phone'><FaPhone /></i>
                      <h3>(123)-456-999</h3>
                    </span>
                  </div>
                </div>
              </div>
            </div>
    </section>
    
  )
};

export default team;