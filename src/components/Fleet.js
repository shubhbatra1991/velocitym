import React from 'react';
import { useState } from "react";
import CarBox from "./CarBox";
import { CAR_DATA } from "./CarData";

const Fleet = () => {

  const [active, setActive] = useState("SecondCar");
  const [colorBtn, setColorBtn] = useState("btn1");

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };


  return (

    <>
      <section className="py-[10rem] w-full">
        <div className="container">
          <div className="flex flex-col">
            <div className="m-auto text-center text-black max-w-[50rem] mb-[5rem]">
              <h3 className='text-[2.4rem] font-mont font-bold'>Vehicle Models</h3>
              <h2 className='text-[4.2rem] font-mont mt-[0.5rem] mb-[1rem]'>Our rental fleet</h2>
              <p className='text-[1.6rem] font-mont text-gray-500 leading-[1.5]'>
                Choose from a variety of our amazing vehicles to rent for your
                next adventure or business trip
              </p>
            </div>
            <div className="flex justify-between gap-[1rem] ">
              {/* pick car */}
              <div className="flex flex-col gap-[0.7rem]">
                <button
                  className={`
                    ${coloringButton("btn1")}
                    text-[2rem] font-mont font-semibold cursor-pointer border-none
                    py-[1.5rem] px-[2.5rem] bg-gray-300 transition-all duration-200
                    text-left hover:bg-orange-500 hover:text-white
                    `}
                  onClick={() => {
                    setActive("SecondCar");
                    btnID("btn1");
                  }}
                >
                  Audi A1 S-Line
                </button>
                <button
                  className={`
                    ${coloringButton("btn1")}
                    text-[2rem] font-mont font-semibold cursor-pointer border-none
                    py-[1.5rem] px-[2.5rem] bg-gray-300 transition-all duration-200
                    text-left hover:bg-orange-500 hover:text-white
                  `}
                  id="btn2"
                  onClick={() => {
                    setActive("FirstCar");
                    btnID("btn2");
                  }}
                >
                  VW Golf 6
                </button>
                <button
                  className={`
                    ${coloringButton("btn1")}
                    text-[2rem] font-mont font-semibold cursor-pointer border-none
                    py-[1.5rem] px-[2.5rem] bg-gray-300 transition-all duration-200
                    text-left hover:bg-orange-500 hover:text-white
                    `}
                  id="btn3"
                  onClick={() => {
                    setActive("ThirdCar");
                    btnID("btn3");
                  }}
                >
                  Toyota Camry
                </button>
                <button
                  className={`
                    ${coloringButton("btn1")}
                    text-[2rem] font-mont font-semibold cursor-pointer border-none
                    py-[1.5rem] px-[2.5rem] bg-gray-300 transition-all duration-200
                    text-left hover:bg-orange-500 hover:text-white
                  `}
                  id="btn4"
                  onClick={() => {
                    setActive("FourthCar");
                    btnID("btn4");
                  }}
                >
                  BMW 320 ModernLine
                </button>
                <button
                  className={`
                    ${coloringButton("btn1")}
                    text-[2rem] font-mont font-semibold cursor-pointer border-none
                    py-[1.5rem] px-[2.5rem] bg-gray-300 transition-all duration-200
                    text-left hover:bg-orange-500 hover:text-white
                  `}
                  id="btn5"
                  onClick={() => {
                    setActive("FifthCar");
                    btnID("btn5");
                  }}
                >
                  Mercedes-Benz GLK
                </button>
                <button
                  className={`
                    ${coloringButton("btn1")}
                    text-[2rem] font-mont font-semibold cursor-pointer border-none
                    py-[1.5rem] px-[2.5rem] bg-gray-300 transition-all duration-200
                    text-left hover:bg-orange-500 hover:text-white
                  `}
                  id="btn6"
                  onClick={() => {
                    setActive("SixthCar");
                    btnID("btn6");
                  }}
                >
                  VW Passat CC
                </button>
              </div>

              {active === "FirstCar" && <CarBox data={CAR_DATA} carID={0} />}
              {active === "SecondCar" && <CarBox data={CAR_DATA} carID={1} />}
              {active === "ThirdCar" && <CarBox data={CAR_DATA} carID={2} />}
              {active === "FourthCar" && <CarBox data={CAR_DATA} carID={3} />}
              {active === "FifthCar" && <CarBox data={CAR_DATA} carID={4} />}
              {active === "SixthCar" && <CarBox data={CAR_DATA} carID={5} />}
            </div>
          </div>
        </div>
      </section>

    </>
  )
};

export default Fleet;