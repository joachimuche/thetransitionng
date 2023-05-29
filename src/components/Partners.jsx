import React from "react";
import logo from "../assets/images/Tlogo.png";
import tenece from "../assets/images/tenece.jpeg";
import goldenheart from "../assets/images/goldenheart.jpeg";
import fastpace from "../assets/images/fastpace.jpeg";
import BrandLogoCard from "./BrandLogoCard";

const BrandLogo = [
  {
    id: 1,
    image: logo,
    title: 'logo-icon'
  },
		{
      id: 2,
      image: tenece,
      title: 'tenece-icon'
    },
		{
      id: 3,
      image: goldenheart,
      title: 'goldenheart-icon'
    },
		{
      id: 4,
      image: fastpace,
      title: 'fastpace-icon'
  },
    {
    id: 5,
    image: logo,
    title: 'logo-icon'
  },
		{
      id: 6,
      image: tenece,
      title: 'tenece-icon'
    },
		{
      id: 7,
      image: goldenheart,
      title: 'goldenheart-icon'
    },
		{
      id: 8,
      image: fastpace,
      title: 'fastpace-icon'
    },
]


const Partners = () => {
  return (
    <div className="bg-white px-20">
      <p className="text-center text-title-1">Meet Our Partners</p>

      <div className='flex justify-center items-center overflow-x-hidden'>
        <div className= 'flex py-5'>
          {BrandLogo.map(({ id, image, title }) => (
            <BrandLogoCard
              key={id}
              image={image}
              title={title}
            />
          ))}
        </div>

        {/* <div className= 'flex absolute top-0 py-12 animate-marquee2 whitespace-nowrap'>
          {BrandLogo.map(({ id, image, title }) => (
            <BrandLogoCard
              key={id}
              image={image}
              title={title}
            />
          ))}
        </div> */}
      </div>
    </div>

    
  );
};

export default Partners;


