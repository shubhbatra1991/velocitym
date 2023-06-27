import React from 'react';
import { useEffect, useState } from "react";
import CarAudi from "../assets/cars/audia1.jpg";
import CarGolf from "../assets/cars/audia1.jpg";
import CarToyota from "../assets/cars/audia1.jpg";
import CarBmw from "../assets/cars/audia1.jpg";
import CarMercedes from "../assets/cars/audia1.jpg";
import CarPassat from "../assets/cars/audia1.jpg";



const Book = () => {

  const [modal, setModal] = useState(false); //  class - active-modal

  // booking car
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [carImg, setCarImg] = useState("");

  // modal infos
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");

  // taking value of modal inputs
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleZip = (e) => {
    setZipCode(e.target.value);
  };

  // open modal when all inputs are fulfilled
  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if (
      pickUp === "" ||
      dropOff === "" ||
      pickTime === "" ||
      dropTime === "" ||
      carType === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector(".booking-modal");
      modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };

  // disable page scroll when modal is displayed
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  // confirm modal booking
  const confirmBooking = (e) => {
    e.preventDefault();
    setModal(!modal);
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "flex";
  };

  // taking value of booking inputs
  const handleCar = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };

  const handlePick = (e) => {
    setPickUp(e.target.value);
  };

  const handleDrop = (e) => {
    setDropOff(e.target.value);
  };

  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e) => {
    setDropTime(e.target.value);
  };

  // based on value name show car img
  let imgUrl;
  switch (carImg) {
    case "Audi A1 S-Line":
      imgUrl = CarAudi;
      break;
    case "VW Golf 6":
      imgUrl = CarGolf;
      break;
    case "Toyota Camry":
      imgUrl = CarToyota;
      break;
    case "BMW 320 ModernLine":
      imgUrl = CarBmw;
      break;
    case "Mercedes-Benz GLK":
      imgUrl = CarMercedes;
      break;
    case "VW Passat CC":
      imgUrl = CarPassat;
      break;
    default:
      imgUrl = "";
  }

  // hide message
  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  return (
    <>
      <section id="booking-section" className="relative bg-gradient-to-b from-gray-50 to-white w-full">
        {/* overlay */}
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>

        <div className="container">
          <div className="m-auto mb-[10rem]">
            <div className="bg-white bg-bookpg w-full p-[4rem] shadow-[0_10px_20px_0_rgba(0,0,0,0.1)] h-auto relative z-4 text-white 
            rounded-[5px] bg-cover bg-no-repeat bg-center flex flex-col  ">
              <h2 className='text-[2.4rem] font-bold mb-[2.7rem]'>Book a car</h2>

              <p className="error-message bg-red-100 border border-red-200 py-[1rem] px-[1.4rem] mb-[1.8rem] mt-[-1rem] rounded-[0.8rem] text-[1.6rem] hidden font-medium justify-between items-center">
                All fields required! <i className="fa fa-xmark cursor-pointer">
                  
                </i>
              </p>

              <p className="booking-done text-green-800 bg-green-200 border-red-300 py-4 px-[1.25rem] mb-[1.8rem] -mt-4 border-[1px] border-transparent rounded-[0.8rem] text-[1.6rem] font-medium hidden justify-between items-center">
                Check your email to confirm an order.{" "}
                <i onClick={hideMessage} className="fa fa-xmark cursor-pointer">

                </i>
              </p>

              <form className="grid grid-cols-3 grid-rows-auto gap-[2rem]">
                <div className="flex flex-col">
                  <label className='text-[1.6rem] font-semibold mb-[1.2rem] text-black'>
                    <i className="fa fa-car text-orange-500">
                      
                    </i> &nbsp; Select Your Car
                    Type <b className='text-orange-500'>*</b>
                  </label>
                  <select 
                      value={carType} 
                      onChange={handleCar} 
                      className='outline-none text-[1.5rem] text-gray-500 font-mont border-[1px] 
                      border-gray-200 rounded-[3px] py-[1.2rem] px-[1.3rem]'
                  >
                    <option>Select your car type</option>
                    <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                    <option value="VW Golf 6">VW Golf 6</option>
                    <option value="Toyota Camry">Toyota Camry</option>
                    <option value="BMW 320 ModernLine">
                      BMW 320 ModernLine
                    </option>
                    <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                    <option value="VW Passat CC">VW Passat CC</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className='text-[1.6rem] font-semibold mb-[1.2rem] text-black'>
                    <i className="fa fa-location-dot text-orange-500"></i> &nbsp; Pick-up{" "}
                    <b className='text-orange-500'>*</b>
                  </label>
                  <select 
                      value={pickUp} 
                      onChange={handlePick} 
                      className='outline-none text-[1.5rem] text-gray-500 font-mont border-[1px] 
                      border-gray-200 rounded-[3px] font-normal py-[1.2rem] px-[1.3rem]'
                  >
                    <option>Select pick up location</option>
                      <option>Dublin</option>
                      <option>Cork</option>
                      <option>Galway</option>
                      <option>Letterkenny</option>
                      <option>Wicklow</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className='text-[1.6rem] font-semibold mb-[1.2rem] text-black'>
                    <i className="fa fa-location-dot text-orange-500"></i> &nbsp; Drop-of{" "}
                    <b className='text-orange-500'>*</b>
                  </label>
                  <select 
                      value={dropOff} 
                      onChange={handleDrop} 
                      className='outline-none text-[1.5rem] text-gray-500 font-mont border-[1px] 
                      border-gray-200 rounded-[3px] font-normal py-[1.2rem] px-[1.3rem]'
                  >
                    <option>Select drop off location</option>
                      <option>Dublin</option>
                      <option>Cork</option>
                      <option>Galway</option>
                      <option>Letterkenny</option>
                      <option>Wicklow</option>
                  </select>
                </div>

                <div className="flex flex-col relative">
                  <label htmlFor="picktime" className='text-[1.6rem] font-semibold mb-[1.2rem] text-black'>
                    <i className="fa fa-calendar-days text-orange-500 "></i> &nbsp;
                    Pick-up <b className='text-orange-500'>*</b>
                  </label>
                  <input
                    id="picktime"
                    value={pickTime}
                    onChange={handlePickTime}
                    type="date"
                    className='text-gray-400 pr-[3rem] outline-none border-[1px] border-solid 
                    border-gray-300 h-auto leading-[36px]  mt-[1rem] w-full text-[10px] '

                    
                  ></input>
                </div>

                <div className="flex flex-col relative">
                  <label 
                    htmlFor="droptime" 
                    className='text-[1.6rem] font-semibold mb-[1.2rem] text-black'
                    type="date"
                  >
                    <i className="fa fa-calendar-days text-orange-500 "></i> &nbsp;
                    Drop-of <b className='text-orange-500'>*</b>
                  </label>
                  <input
                    id="droptime"
                    value={dropTime}
                    onChange={handleDropTime}
                    type="date"
                    className='text-gray-400 pr-[3rem] outline-none border-[1px] border-solid 
                    border-gray-300 h-auto leading-[36px]  mt-[1rem] w-full text-[10px] '
                  ></input>
                </div>

                <button 
                    onClick={openModal} 
                    type="submit" 
                    className="py-[1.3rem] px-[1.3rem] h-fit self-end border-none font-mont text-1.8rem font-medium 
                    text-white bg-orange-600 shadow-[0_10px_15px_rgba(255,83,48,0.35)]  transition-all duration-300 cursor-pointer"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* modal ------------------------------------ */}

      <div className={`
              opacity-0 hidden flex-col fixed overflow-x-hidden overflow-y-scroll z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
              w-83rem h-screen border-2 border-white bg-white bg-opacity-100 pr-2 text-black
              md:w-full sm:top-[50%] 
              ${modal ? "active-modal" : ""}
            `}
      >
        {/* title */}
        <div className="flex justify-between bg-orange-500 text-white items-center p-4">
          <h2 className='text-[3rem] text-lg font-semibold uppercase'>Complete Reservation</h2>
          <i onClick={openModal} className="fa fa-xmark text-2xl text-white/90 cursor-pointer transition duration-200 hover:text-white"  ></i>
        </div>
        {/* message */}
        <div className="flex flex-col gap-6 p-8 bg-rose-100">
          <h4 className='text-[1.9rem] font-bold text-orange-700'>
            <i className="fa  fa-circle-info text-[2.5rem]"></i> Upon completing this
            reservation enquiry, you will receive:
          </h4>
          <p className='text-[1.7rem] text-gray-500 font-semibold leading-[1.6]'>
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>
        {/* car info */}
        <div className="bg-white p-[3rem] grid grid-cols-2 border bottom-[1px] sm:text-center sm:grid-cols-1">
          <div className="flex flex-col gap-[3.2rem]">
            <div className="flex flex-col gap-[2rem]">
              <h5 className='text-[1.8rem] text-orange-600'>Location & Date</h5>
              <span className='flex gap-[1rem] sm:grid-cols-1 sm:text-center sm:justify-center'>
                <i className="fa fa-location-dot text-[1.8rem] pt-[0.2rem] text-gray-600 sm:hidden"></i>
                <div>
                  <h6 className='text-[1.5rem] mb-[0.2rem]'>Pick-Up Date & Time</h6>
                  <p className='text-[1.2rem] text-gray-600'>
                    {pickTime} /{" "}
                    <input type="time" className="text-center w-[8rem] text-[14px] cursor-pointer"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="flex flex-col gap-[2rem]">
              <span className='flex gap-4 sm:grid-cols-1 sm:text-center sm:justify-center'>
                <i className="fa fa-location-dot text-[1.8rem] pt-1 text-gray-500 sm:hidden"></i>
                <div>
                  <h6 className='text-[1.5rem] mb-1'>Drop-Off Date & Time</h6>
                  <p className='text-[1.2rem] text-gray-500'>
                    {dropTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="flex flex-col gap-[2rem]">
              <span className='flex gap-4 sm:grid-cols-1 sm:text-center sm:justify-center'>
                <i className="fa fa-calendar-days text-[1.8rem] pt-1 text-gray-500 sm:hidden"></i>
                <div>
                  <h6 className='text-[1.5rem] mb-1'>Pick-Up Location</h6>
                  <p className='text-[1.2rem] text-gray-500'>{pickUp}</p>
                </div>
              </span>
            </div>

            <div className="flex flex-col gap-[2rem]">
              <span className='flex gap-4 sm:grid-cols-1 sm:text-center sm:justify-center'>
                <i className="fa fa-calendar-days text-[1.8rem] pt-1 text-gray-500 sm:hidden"></i>
                <div>
                  <h6 className='text-[1.5rem] mb-1'>Drop-Off Location</h6>
                  <p className='text-[1.2rem] text-gray-500'>{dropOff}</p>
                </div>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[3rem] sm:mt-[3.5rem]">
            <h5 className='text-lg text-orange-500'>
              <span className='text-black'>Car -</span> {carType}
            </h5>
            {imgUrl && <img src={imgUrl} alt="car_img" className='w-full h-auto' />}
          </div>
        </div>
        {/* personal info */}
        <div className="bg-white flex flex-col p-12">
          <h4 className='text-[1.8rem] uppercase text-orange-600 mb-[2rem]'>Personal Information</h4>
          <form className="flex flex-col">
            <div className="grid grid-cols-2 gap-[2rem] p-4 sm:grid-cols-1">
              <span className='flex flex-col gap-[0.4rem]'>
                <label className='text-[1.2rem] font-semibold text-gray-500'>
                  First Name <b className='text-orange-500'>*</b>
                </label>
                <input
                  value={name}
                  onChange={handleName}
                  type="text"
                  placeholder="Enter your first name"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span className='flex flex-col gap-[0.4rem]'>
                <label className='text-[1.2rem] font-semibold text-gray-500'>
                  Last Name <b className='text-orange-500'>*</b>
                </label>
                <input
                  value={lastName}
                  onChange={handleLastName}
                  type="text"
                  placeholder="Enter your last name"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>

              <span className='flex flex-col gap-[0.4rem]'>
                <label className='text-[1.2rem] font-semibold text-gray-500'>
                  Phone Number <b className='text-orange-500'>*</b>
                </label>
                <input
                  value={phone}
                  onChange={handlePhone}
                  type="tel"
                  placeholder="Enter your phone number"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span className='flex flex-col gap-[0.4rem]'>
                <label className='text-[1.2rem] font-semibold text-gray-500'>
                  Age <b className='text-orange-500'>*</b>
                </label>
                <input
                  value={age}
                  onChange={handleAge}
                  type="number"
                  placeholder="18"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-[2rem] p-4 sm:grid-cols-1">
              <span className='flex flex-col gap-[0.4rem]'>
                <label className='text-[1.2rem] font-semibold text-gray-500'>
                  Email <b className='text-orange-500'>*</b>
                </label>
                <input
                  value={email}
                  onChange={handleEmail}
                  type="email"
                  placeholder="Enter your email address"
                  className='p-4 bg-gray-300 text-gray-500 text-lg font-medium focus:outline-none'
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span className='flex flex-col gap-[0.4rem]'>
                <label className='text-[1.2rem] font-semibold text-gray-500'>
                  Address <b className='text-orange-500'>*</b>
                </label>
                <input
                  value={address}
                  onChange={handleAddress}
                  type="text"
                  placeholder="Enter your street address"
                  className='p-4 bg-gray-300 text-gray-500 text-lg font-medium focus:outline-none'
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-[2rem] p-4 sm:grid-cols-1">
              <span className='flex flex-col gap-[0.4rem]'>
                <label className='text-[1.2rem] font-semibold text-gray-500'>
                  City <b className='text-orange-500'>*</b>
                </label>
                <input
                  value={city}
                  onChange={handleCity}
                  type="text"
                  placeholder="Enter your city"
                  className='p-4 bg-gray-300 text-gray-500 text-lg font-medium focus:outline-none'
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span className='flex flex-col gap-[0.4rem]'>
                <label className='text-[1.2rem] font-semibold text-gray-500'>
                  Zip Code <b className='text-orange-500'>*</b>
                </label>
                <input
                  value={zipcode}
                  onChange={handleZip}
                  type="text"
                  placeholder="Enter your zip code"
                  className='p-4 bg-gray-300 text-gray-500 text-lg font-medium focus:outline-none'
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <span className="flex gap-[1rem] items-center text-[1.2rem] text-gray-600 mt-[2rem] mb-[3rem]">
              <input type="checkbox" className='w-[1.6rem] h-[1.6rem]' ></input>
              <p>Please send me latest news and updates</p>
            </span>

            <div className="bg-gray-300 mx-[-3rem] px-3 py-3 text-right sm:text-center">
              <button onClick={confirmBooking} className='text-white font-bold bg-text-orange border border-yellow-500 py-3 px-8 rounded 
              cursor-pointer transition duration-200 hover:bg-orange-600'>
                Reserve Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
};

export default Book;