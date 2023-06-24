import HeroPages from '@/components/HeroPage';
import React from 'react';

import Person1 from '../assets/team/member1.jpg';
import Person2 from '../assets/team/member2.jpg';
import Person3 from '../assets/team/member3.jpg';
import Person4 from '../assets/team/member4.jpg';
import Person5 from '../assets/team/member5.jpg';
import BookBanner from '@/components/BookBanner';


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
      <div className='container'>
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

     <BookBanner />
    </section>
    
  )
};

export default team;