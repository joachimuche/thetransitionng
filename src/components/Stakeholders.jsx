import React from "react";
// import Button from "./Button";
import sf from "../assets/images/hero-2.png";
import po from "../assets/images/PO.png";

const Testimonials = () => {
  return (
      <section className="">
          <div className="bg-white">
        <div className='flex justify-center items-center'>
            <h3 className="text-headline-2 text-center pt-1">
                Chief Host
            </h3>
        </div>
        <div className=" flex flex-wrap justify-center mt-3 pt-2 mb-10 pb-5 xl:gap-x-4 gap-y-8 xl:mx-2 h-30 font-sans">
        <div className="max-w-sm md:w-2/3 lg:max-w-full lg:flex gap-y-8 xl:mx-2">
        <div className="bg-transparent rounded-b lg:rounded-b-none lg:rounded-r p-4 sm:p-1 flex flex-col justify-between leading-normal">
        <div className="mb-8">
            <div className="text-gray-900 font-sans font-bold text-xl mb-1 lg:mb-3">
                Dr David Ogbueli <span className="text-sm text-red font-sans font-light"> - Founder, Golden Heart Foundation</span>
            </div>
        <p className=" p-0 text-base font-sans tracking-normal leading-6 font-light">
            Dr. David Ogbueli is a Minister of the Gospel, a Social Reformer, and an iconic transformational leader. He has great passion for Personal Transformation and National Transformation which has birthed various initiatives and ministries causing a positive change among the youth, governments, corporate institutions. He is a Management and Public Policy Consultant to private & public sector institutions and their leaders. He is a widely read author with over one hundred and fifty books published. He has a burning passion for human capital development as a key to nation building; his other interests are social reforms, transformational leadership, and nation transformation. He is the President of Golden Heart Foundation & National Development Centre set up to train & equip Nigerian & African youths on transformational leadership. He also seats on the board of Institute of National Transformation. He has been honoured by the United Nations, state governments, government agencies, corporate agencies & organisations for his youth development projects especially the annual National Youth Summit that empowers over 50,000 youths annually. He is a also member of National Institute for Public Policy & Strategic Studies, an alumnus of Lagos Business School, and IESE Business School in Spain. He seats on the board of six big organisations with a focus on development & transformation.
            </p>
        </div>
       

        </div>
        
        {<img src={sf} alt="Card 1" className="w-full h-60 lg:h-auto lg:w-80 flex-none bg-cover rounded-t m-2 lg:rounded-t-none lg:rounded-l text-center overflow-hidden object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:grayscale duration-300 " />}
            </div>
        </div>
    </div>

  {/* Speaker 2 */}
        <div className="flex justify-center items-center">
            <h3 className="text-headline-2 text-center ">
                Chairman and Host
            </h3>
        </div>
    <div className="flex flex-wrap justify-center  mb-10 pb-5 xl:gap-x-4 gap-y-8 xl:mx-2 h-30 font-sans">
        <div className="max-w-sm md:w-2/3 lg:max-w-full lg:flex gap-y-8 xl:mx-2">
        <div className="bg-transparent rounded-b lg:rounded-b-none lg:rounded-r p-4 sm:p-1 flex flex-col justify-between leading-normal">
        <div className="mb-8">
        <div className="text-black font-sans font-bold text-xl mb-1 lg:mb-3">Okechukwu Eze<span className="text-sm text-red font-sans font-light"> - ED, Tenece Group</span></div>
        <p className="text-xl font-sans font-light">Special thanks to the organisers of the bpurple bootcamp, I decided to join the virtual assistant path in the free tech bootcamp organised by bpurpleHQ 
        as a newbiew, it was so engaging and while at it, I did not only learn the skill, 
        I was subjected to learning, leadership and collaboration skills, it was really a great time, I had to opportunity
        to network with other candidates and my mentors.</p>
        </div>
    
        </div>
        
        {<img src={po} alt="Card 1" className="w-full h-60 lg:h-auto lg:w-80 flex-none bg-cover rounded-t m-2 lg:rounded text-center overflow-hidden object-cover transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-120 hover:grayscale duration-300 " />}
            </div>
        </div>
        
    

    
      
  </section>

  );
};

export default Testimonials;
