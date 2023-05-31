import React from "react";
import FadeInAnimation from "../components/FadeInAnimation";


const Home = () => {
  return (
    
    <div> 
        <section id='about' className=' py-2 md:py-10 px-4 md:px-10 lg:px-20'>
        <div className='flex justify-center items-center'>
        <p className='text-title-1 text-center border-b-2 border-b-red'>About The Transition</p>
        </div>
        <FadeInAnimation>
        <div className='bg-white-01 flex gap-6 justify-center flex-col md:flex-row p-[10px] lg:p-[40px] rounded-md'>
          <div className='bg-blue p-5 lg:p-10 flex items-center justify-center'>
            <p className='text-center text-white text-headline-2 md:text-headline-1 md:text-left'>The <br/>Transition</p>
          </div>
        <div className='md:w-[50%]'>
          <p className='text-left mt-[5px] md:mt-0 text-lg'>
          The Transition” is a platform of the Dominion City Church for nurturing enduring entrepreneurs, businesses and enterprises, through expositions, training, mentorship, and funding. It is designed to equip professional, small business owners, and aspiring entrepreneurs with the right knowledge, attitude, and practice to conquer the fears and hurdles associated with their areas of passion and interest, appreciate the proven codes for effective venturing, harness opportunities, access complementary funds and ultimately build successful businesses.
          </p>
        </div> 
        </div>
        </FadeInAnimation>
      </section>
      </div>
    
  );
};

export default Home;
