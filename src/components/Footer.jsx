import React from "react";
// import logo from "../assets/images/Tlogo.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className=" mt-[4rem] py-2 bg-black">
      <div>
        <div className="flex flex-col">
          <div className="md:flex md:justify-between px-6 md:my-4 flex">
            <div>
              <p className="text-gray mt-5 ml-2 text-sm font-sans font-extralight">Email: info@thetransitionng.org</p>
              <p className="text-gray mt-2 ml-2 text-sm font-extralight">Tel: +234 703 175 930 | +234 903 000 8695</p>
              <p className="text-gray mt-2 ml-2 text-sm font-extralight">Address: Nigerian Law School Ozumba Mbadiwe Street <br/>Victoria Island, Lagos</p>
            </div>
            <div>
              <div className="flex justify-center text-3xl items-center py-2">
                <FaFacebookF className="bg-white rounded-full p-2 border-none outline-none text-black mx-2" />
                <FaLinkedinIn className="bg-white rounded-full p-2 border-none outline-none text-black  mx-2" />
                <FaTwitter className="bg-white rounded-full p-2 border-none outline-none text-black mx-2" />
                <FaYoutube className="bg-white  rounded-full p-2 border-none outline-none text-black mx-2" />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row  justify-center  items-center px-2">
          <div className="md:flex md:justify-evenly text-white font-extralight">
              <p className="p-4">&copy; 2023 The Transition Business School</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
