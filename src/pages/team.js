import HeroPages from '@/components/HeroPage';
import React from 'react';
import BookBanner from '@/components/BookBanner';


const team = () => {
  const teamPpl = [
    { img: 'assets/team/member1.jpg', name: "Julia Roberts", job: "Saleswoman" },
    { img: 'assets/team/member2.jpg', name: "Joana W", job: "CFO" },
    { img: 'assets/team/member3.jpg', name: "Stephanie", job: "Business Owner" },
    { img: 'assets/team/member4.jpg', name: "Anubhav S", job: "Product Owner" },
    { img: 'assets/team/member5.jpg', name: "Mahim K", job: "Web Developer" },
  ];

  return (
    <section>
      <HeroPages name="Our Team" />
      <div className='container'>
      <div className="grid grid-cols-3 grid-rows-auto gap-[4rem] items-center text-center px-[10rem] py-[2rem] w-[110rem] m-0 
      ">
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