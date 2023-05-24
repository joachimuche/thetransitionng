import React from "react";
import logo from "../assets/images/Tlogo.png";
import Button from "./Button";

const Header = () => {
  const toggleMobileMenu = () => {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
  };

  return ( 
    <div className="z-50 flex justify-evenly gap-x-4 px-2 items-center font-sans pt-2 fixed top-0 right-0 left-0 bg-gray h-16 md:h-20 2xl:h-20">
      <div>
        <img className="w-[95px] h-55px]" src={logo} alt="logo" />
      </div>

      <div className="hidden min-w-[27rem] min-h-12 lg:flex justify-evenly items-center font-light text-sm">
        <a href="#home" className="border-none"> 
          Home
        </a>
        <a href="#speakers" className="">
          Speakers
        </a>
        <a href="#stacked-covered" className="">
          Media
        </a>
        <a href="#faqs" className=""> 
          EDP
        </a>
        <a href="#faqs" className=""> 
          Faqs
        </a>
      </div>

      {/* large */}
      <div className="flex items-center">
        <div className="hidden lg:flex">
          <Button />
        </div>
      </div>

      <div className="md:hidden xl:hidden 2xl:hidden lg:hidden sm:hidden flex items-center bg-white">
        <button
          className="outline-none mobile-menu-button"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-9 h-6 text-gray-500 hover:text-green-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* mobile */}
      <div className="hidden md:block mobile-menu absolute top-16 md:top-20 2xl:top-20 w-2/3 opacity-90">
        <ul className="flex flex-col items-start gap-y-2 text-right">
        <li>
            
            <a
              href="#Home"
              className="md:hidden px-2 py-4 hover:bg-yello transition duration-300 text-black font-bold"
            >
              {/* First Menu Item*/}
            Home  </a>
          </li>
          <li>
            
            <a
              href="#"
              className="md:hidden px-2 py-4 hover:bg-yello transition duration-300 text-black font-bold"
            >
              {/* First Menu Item*/}
            Register  </a>
          </li>
              {/* First Menu Item*/}
              <li>
            
            <a
              href="#speaker"
              className="md:hidden px-2 py-4 hover:bg-yello transition duration-300 text-black font-bold"
            >
              {/* First Menu Item*/}
            Speakers  </a>
          </li>
          <li>
            
            <a
              href="#"
              className="md:hidden px-2 py-4 hover:bg-yello transition duration-300 text-black font-bold"
            >
              {/* First Menu Item*/}
            Media  </a>
          </li>
          
        </ul>
      </div> 
    </div>
  );
};

export default Header;
