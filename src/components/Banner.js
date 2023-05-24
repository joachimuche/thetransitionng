
import round1 from "../assets/images/circle.png";
import React, { useState, useEffect } from 'react';
import Timer from "./Timer";



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
      }, 7000); // Adjust the transition duration (in milliseconds)
    }, 5000); // Adjust the interval time (in milliseconds)

    return () => clearInterval(interval);
  }, []);
  return (
      <div className="flex bg-hero-city bg-no-repeat bg-cover mx-4 w-full items-center justify-center flex-wrap sm:flex-nowrap leading-normal mt-10 pt-15 mb-5 pb-5 xl:gap-x-4 gap-y-8 xl:mx-2 h-30">
        
    
          <div className="max-w-sm p-2 md:w-2/3 lg:max-w-full gap-y-8 xl:mx-2 mx-1 pt-20">
          <div className="bg-transparent rounded-b lg:rounded-b-none lg:rounded-r sm:p-1 justify-left leading-normal mx-1 p-2 bg-black bg-opacity-80 rounded-lg">
          <div id='home' className="mb-8 sm:mb-2">
             
          
             <div className="lg:mt-30 font-saira text-center font-light -mt-px px-10 text-2xl xl:mt-20 sm:mt-10 sm:text-xl md:text-2xl lg:text-xl xl:text-xl text-white">
                                    THE TRANSITION CONFERENCE 2023
                        </div>

                        <div className={`mt-px text-center justify-center font-saira font-bold px-10 xl:mt-5 sm:mt-5 sm:text-xl leading-[2.2rem] md:text-6xl lg:text-6xl xl:text-6xl  text-yellow mb-4 $`}> {title[currentTitle]} 
                        
                        </div>
                        <div className="mt-px font-semibold text-center px-10 text-2xl xl:mt-5 sm:mt-5 sm:text-2xl leading-[2.2rem] md:text-2xl lg:text-2xl xl:text-2xl  text-purple">
                                    
                        <h3
                       className={`text-xl font-sans font-extralight text-gray mb-4 $`}> {texts[currentText]}</h3>
                        </div>
                              {/*  <div className="text-4xl sm:text-4xl md:text-7xl px-10 xl:text-7xl lg:text-7xl 2xl:text-8xl mt-2 font-semibold flex text-purple justify-left">
                                  
                                    <br />
                              
                                  COUNT-DOWN TIMERE HERE
  </div> */}
             <div className="text-purple text-lg flex justify-center sm:mb-2 sm:">
                <p >
                <Timer/> 
                </p> 
  </div> 
              <div className="h-5 items-center justify-center">
  
          <img src={round1} className='absolute w-40 z-10 left-10' alt=''/>
         </div>
            
            </div>
          </div>
          </div>

               
         
          
          </div>
  
  
      
    
 
  
    );
  };

        
   

export default Banner;
