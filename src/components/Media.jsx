import React from "react";
// import Button from "./Button";
import Video from "./Video"

const Media = () => {
  return (
    <section className="">
        <h3 className="py-2 md:pt-10 mt-5 sm:mt-1 md:mt-1 font-semibold text-4xl text-center xl pl-10 text-purple w-2/2 ">
        
              </h3>
    <div className="flex flex-wrap justify-center mt-5 pt-2 mb-10 pb-5 xl:gap-x-4 gap-y-8 xl:mx-2 h-30">
        <div className="max-w-sm md:w-2/3 lg:max-w-full lg:flex gap-y-8 xl:mx-2">


      {/*  <div className="bg-transparent rounded-b lg:rounded-b-none lg:rounded-r p-4 sm:p-1 flex flex-col justify-between leading-normal">
        <div className="mb-8">
        <p className="text-gray-700 text-bold p-5 text-xl">Special thanks to the organisers of the bpurple bootcamp, I decided to join the virtual assistant path in the free tech bootcamp organised by bpurpleHQ 
        as a newbiew, it was so engaging and whil</p>
        </div>
       

        </div>
         */}
        <div className="h-80 lg:h-auto flex-none bg-contain rounded-t m-2 lg:rounded-t-none lg:rounded-l overflow-hidden"><Video/>
            </div>
        </div>


    
  </div>

  
  </section>

  );
};

export default Media;
