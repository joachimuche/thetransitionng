import React from "react";
// import Button from "./Button";
import sf from "../assets/images/hero-2.png";
import po from "../assets/images/PO.png";

const Testimonials = () => {
    return (
    <div>
        {/* first speaker */}
    <section className="bg-white px-5 py-5 md:px-20">
        <div className="md:pb-9">
                <div className='flex justify-center items-center pb-4'>
                    <h3 className="text-headline-2 text-center">
                        Chief Host
                    </h3>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                    <div className="md:w-[50%]">
                        <p className="font-bold text-base">Dr David Ogbueli - <span className="text-sm font-light text-red te">Founder, Golden Heart Foundation</span></p>
                            <p className="mt-1 text-base"> Dr. David Ogbueli is a Minister of the Gospel, a Social Reformer, and an iconic transformational leader. He has great passion for Personal Transformation and National Transformation which has birthed various initiatives and ministries causing a positive change among the youth, governments, corporate institutions. He is a Management and Public Policy Consultant to private & public sector institutions and their leaders. He is a widely read author with over one hundred and fifty books published. He has a burning passion for human capital development as a key to nation building; his other interests are social reforms, transformational leadership, and nation transformation. He is the President of Golden Heart Foundation & National Development Centre set up to train & equip Nigerian & African youths on transformational leadership.</p>
                    </div>
                    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:grayscale duration-300">
                        <img src={sf} alt="Card 1" width={400} height={300} />
                    </div>
                </div>
        </div>
    </section>
        
            
        {/* Second speaker */}
    <section className="px-5 py-5 md:px-20">
        <div className="md:pb-9">
                <div className='flex justify-center items-center pb-4'>
                    <h3 className="text-headline-2 text-center">
                        Chairman and Host
                    </h3>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                    <div className="md:w-[50%]">
                        <p className="font-bold text-base">Okechukwu Eze - <span className="text-sm font-light text-red te">ED, Tenece Group</span></p>
                            <p className="mt-1 text-base">Special thanks to the organisers of the bpurple bootcamp, I decided to join the virtual assistant path in the free tech bootcamp organised by bpurpleHQ as a newbiew, it was so engaging and while at it, I did not only learn the skill, I was subjected to learning, leadership and collaboration skills, it was really a great time, I had to opportunity to network with other candidates and my mentors.</p>
                    </div>
                    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:grayscale duration-300">
                        <img src={po} alt="Card 1" width={400} height={300} />
                    </div>
                </div>
        </div>
        </section> 
    </div>
  );
};

export default Testimonials;


