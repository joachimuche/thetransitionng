import React from "react";



const Home = () => {
  return (
    <div>
        
        <section className="bg-purple p-4 w-full">
        <div className="mx-4">
          
          
          <div id="why-us">
            <p className="max-w-max font-semibold text-4xl text-white p-2 my-4">
              About The Transition
            </p>
          </div>
          <div className="md:flex justify-between">
            <p className="text-sm md:text-2xl md:leading-[3rem]  md:w-3/3 text-white font-sans font-light mb-10">
            “The Transition” is a platform of the Dominion City Church for nurturing enduring entrepreneurs, businesses and enterprises, through expositions,
             training, mentorship, and funding. It is designed to equip professional, small business owners, and aspiring entrepreneurs with the right knowledge, 
             attitude, and practice to conquer the fears and hurdles associated with their areas of passion and interest,
             appreciate the proven codes for effective venturing, harness opportunities, access complementary funds and ultimately build successful businesses.
            </p>
            {/* <img className=" w-[125px] h-[35px] hidden md:block md:mr-44" src={logo} alt="star" /> */}
          </div>

  
        </div>
        
        
        
      </section>
   
      

    </div>
  );
};

export default Home;
