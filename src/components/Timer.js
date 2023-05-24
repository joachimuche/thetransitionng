import React from "react";

  
const Timer = () => {

    {/* insert Js script for timer functionalty*/}

    return (

        <div>
        <div class=" bg-yellow-500 flex justify-center px-5 py-5" >
            <div class="text-yellow-100">


                <h1 class="text-4xl text-center mb-3 font-sans font-light text-white sm:text-xl">Counting Down</h1>
                <div class="text-6xl text-center flex w-full items-center justify-center">
                    <div class="text-2xl mr-1 text-white font-extralight">in</div>
                    <div class="w-24 mx-1 p-2 bg-white text-yellow-500 rounded-lg">
                        <div class="font-mono leading-none" x-text="days">45</div>
                        <div class="font-mono uppercase text-sm leading-none">Days</div>
                    </div>
                    <div class="w-24 mx-1 p-2 bg-white text-yellow-500 rounded-lg">
                        <div class="font-mono leading-none" x-text="hours">32</div>
                        <div class="font-mono uppercase text-sm leading-none">Hours</div>
                    </div>
                    <div class="w-24 mx-1 p-2 bg-white text-yellow-500 rounded-lg">
                        <div class="font-mono leading-none" x-text="minutes">05</div>
                        <div class="font-mono uppercase text-sm leading-none">Minutes</div>
                    </div>
                    <div class="text-2xl mx-1 text-white font-extralight">and</div>
                    <div class="w-24 mx-1 p-2 bg-white text-yellow-500 rounded-lg">
                        <div class="font-mono leading-none" x-text="seconds">11</div>
                        <div class="font-mono uppercase text-sm leading-none">Seconds</div>
                    </div>
                </div>
               
           
           </div>
        </div>

        </div>
         

      );
   };     

export default Timer;