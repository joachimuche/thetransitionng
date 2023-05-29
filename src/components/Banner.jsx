
import round1 from "../assets/images/circle.png";
import React, { useState, useEffect } from 'react';
import Timer from "./Timer";
import MenuAction from "./MenuAction";



const texts = ['Adetokunbo Ademola Hall Nigerian Law School, Victoria Island.', 'JULY 31st, 2023', '10:00PM (GMT+1)']; // Replace with your desired texts
const title = ['REPOSITIONING FOR THE FUTURE', 'ENTERPRISE DEVELOPMENT'];


const Banner = () => {

  const [currentText, setCurrentText] = useState(0);
  const [sliderAnimation, setSliderAnimation] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setSliderAnimation(true);
      setTimeout(() => {
        setCurrentText((prevText) => (prevText + 1) % texts.length);
        setSliderAnimation(false);
      }, 5000); // Adjust the transition duration (in milliseconds)
    }, 5000); // Adjust the interval time (in milliseconds)

    return () => clearInterval(interval);
  }, []);


  const [currentTitle, setCurrentTitle] = useState(0);
  const [titleAnimation, setTitleAnimation] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleAnimation(true);
      setTimeout(() => {
        setCurrentTitle((prevTitle) => (prevTitle + 1) % title.length);
        setTitleAnimation(false);
      }, 5000); // Adjust the transition duration (in milliseconds)
    }, 5000); // Adjust the interval time (in milliseconds)

    return () => clearInterval(interval);
  }, []);
  return (
      <div className="bg-black bg-hero-city h-screen bg-cover bg-center">
        
    <div id='home' className='w-full h-full flex flex-col justify-center items-center backdrop-brightness-50 text-neutral-02'>
      <div className="lg:mt-30 font-saira text-center font-light -mt-px px-10 text-2xl xl:mt-20 sm:mt-10 sm:text-base md:text-2xl lg:text-xl xl:text-xl text-white">
        THE TRANSITION CONFERENCE 2023
      </div>
      <div className='text-2xl mt-[12px] text-blue lg:text-6xl '> 
        {title[currentTitle]} 
      </div>
      <div className="flex justify-center items-center">
        <h3 className='text-center text-white mt-2 lg:mt-4'> {texts[currentText]}</h3>
      </div>
      
        <Timer /> 
        
        <MenuAction className='w-[500px]'/>
        
      <div className="hidden lg:flex h-5 items-center justify-center">
        <img src={round1} className='absolute w-40 z-10 left-10' alt=''/>
      </div>       
    </div>
  </div>
    );
  };

        
   

export default Banner;
