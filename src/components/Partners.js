import React from "react";
import logo from "../assets/images/Tlogo.png";
import tenece from "../assets/images/tenece.jpeg";
import goldenheart from "../assets/images/goldenheart.jpeg";
import fastpace from "../assets/images/fastpace.jpeg";


const Partners = () => {
  return (
    <div>
    <h3 className="sm:mt-1 md:mt-10 font-sans font-extralight grayscale text-2xl text-center text-purple">
    Partners and Sponsors
          </h3>
    <div className="h-20 mt-2 bg-gray justify-center items-center" >
     
      
        
        <div className="flex flex-col relative overflow-x-hidden">
          <div className="md:flex md:justify-center items-center px-4 my-2 animate-marquee whitespace-nowrap">
            
            <div>
              <img
                className=" w-[140px] h-[35px] items-center justify-center px-4 mx-4 grayscale"
                src={logo}
                alt="logo"
              />
            </div>
            <div>
              <img
                className=" w-[90px] h-[45px] items-center justify-center px-4 mx-4 grayscale"
                src={tenece}
                alt="logo"
              />
            </div>
            <div>
              <img
                className=" w-[90px] h-[45px] items-center justify-center px-4 mx-4 grayscale"
                src={goldenheart}
                alt="logo"
              />
            </div>
            <div>
              <img
                className=" w-[90px] h-[45px] items-center justify-center px-4 mx-4 grayscale"
                src={fastpace}
                alt="logo"
              />
            </div>
            <div>
              <img
                className=" w-[120px] h-[25px] items-center justify-center px-4 mx-4 grayscale"
                src={logo}
                alt="logo"
              />
            </div>
            <div>
              <img
                className=" w-[140px] h-[35px] items-center justify-center px-4 mx-4 grayscale"
                src={logo}
                alt="logo"
              />
            </div>
           
            
          </div>

          {/* <div className=" md:flex md:justify-center items-center px-4 my-2 absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
          <div>
              <img
                className=" w-[140px] h-[35px] items-center justify-center px-4 mx-4 grayscale"
                src={logo}
                alt="logo"
              />
            </div>
    
            <div>
              <img
                className=" w-[125px] h-[35px] items-center justify-center px-4 mx-4 grayscale"
                src={logo}
                alt="logo"
              />
            </div>
            <div>
              <img
                className=" w-[125px] h-[35px] items-center justify-center px-4 mx-4 grayscale"
                src={logo}
                alt="logo"
              />
            </div>
        </div>
        */}
          
        </div>
      </div>
    </div>
  );
};

export default Partners;


