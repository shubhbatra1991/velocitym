import React from 'react';

const MidBanner = () => {
  return (
    <>
      <section className="w-full h-auto flex bg-slate-800	 my-16 text-center py-8 ">
        <div className="m-auto py-12 text-center">
          <div className="text-white flex w-full h-full text-center justify-center font-bold">
            <div className="flex flex-col gap-6">
              <h2 className='text-6xl leading-5 '>Save big with our cheap car rental!</h2>
              <p className='text-sm'>
                Top Airports. Local Suppliers. <span className='text-orange-700 font-bold'>24/7</span> Support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default MidBanner;