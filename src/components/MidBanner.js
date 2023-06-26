import React from 'react';

const MidBanner = () => {
  return (
    <>
      <section className="w-full h-auto flex bg-zinc-800 my-[8rem] text-center py-[6rem] ">
        <div className="container">
          <div className="m-auto py-12 text-center">
            <div className="text-white flex w-full h-full items-center justify-center ">
              <div className="flex flex-col gap-6">
                <h2 className='text-[5.2rem] leading-[1.3] '>Save big with our cheap car rental!</h2>
                <p className='text-[2.4rem]'>
                  Top Airports. Local Suppliers. <span className='text-orange-600 font-bold'>24/7</span> Support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default MidBanner;