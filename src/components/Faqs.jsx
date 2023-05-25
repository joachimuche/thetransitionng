import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'



const Faqs = () => {
    const [toggle1, setToggle1] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    const [toggle3, setToggle3] = useState(false)
    const [toggle4, setToggle4] = useState(false)
    // const [toggle5, setToggle5] = useState(false)
    // const [toggle6, setToggle6] = useState(false)
  return (
    <div className=' w-full bg-purple mb-10 mt-10'>
        <div className='flex flex-col items-center'>
           
           {/* <h2 className='py-2 text-white text-2xl'> Got Questions ?</h2> */}
            <h1 className='py-2 font-semibold text-4xl text-white mt-10'>FAQs</h1>
            <section className='border-2 bg-white border-[#ffffff] lg:w-3/4 m-2 w-full'>
                <div className={`h-20 mt-2 p-2`} onClick={() => {setToggle1(!toggle1)}}>
                   <div className={` flex items-center justify-between`}>
                        <p className='font-semibold px-4 md:text-xl'>Do I have access to fee waiver?</p>
                        <FaPlus className={`${toggle1? '-rotate-90 ease-in-out  duration-300' : 'rotate-90 ease-in-out  duration-300'}`} />
                   </div>
                    <p className= {`${toggle1 ? "block" : "hidden "} mt-2`}>YES! Every prospecting candidate is liable to have a fee waiver during our scholarship and special offers, to a tune of
                    100%</p>
                </div>
            </section>
            <section className='border-2 bg-white border-[#ffffff] lg:w-3/4 m-2 w-full '>
                <div className={`h-20 mt-4 p-2`} onClick={() => {setToggle2(!toggle2)}}>
                   <div className={` flex items-center justify-between`}>
                        <p className='font-semibold px-4 md:text-xl'>What is the base requirement for learning?</p>
                        <FaPlus className={`${toggle2? '-rotate-90 ease-in-out  duration-300' : 'rotate-90 ease-in-out  duration-300'}`} />
                   </div>
                    <p className={`${toggle2 ? "block" : "hidden"}`}>Zeal is KEY to learn, learning never ends, you have to embibe the cultureof learning, un-learning and re-learning. 
                    Staying glued to the changes in the tech ecosystem.</p>
                </div>
            </section>
            <section className='border-2 bg-white border-[#ffffff]]  lg:w-3/4 m-2 w-full '>
                <div className={`h-20 mt-4 p-2`} onClick={() => {setToggle3(!toggle3)}}>
                   <div className={` flex items-center justify-between`}>
                        <p className='font-semibold px-4 md:text-xl'>How do I know the program that is fit for me?</p>
                        <FaPlus className={`${toggle3? '-rotate-90 ease-in-out  duration-300' : 'rotate-90 ease-in-out  duration-300'}`} />
                   </div>
                    <p className={`${toggle3 ? "block" : "hidden"}`}>You will have a session with our counselloers who will advice based on your personality and choice</p>
                </div>
            </section>   
             <section className='border-2 bg-white border-[#ffffff]  lg:w-3/4 m-2 w-full '>
                <div className={`h-20 mt-4 p-2`} onClick={() => {setToggle4(!toggle4)}}>
                   <div className={` flex items-center justify-between `}>
                        <p className='font-semibold px-4 md:text-xl'>Do I get a payment structure?</p>
                        <FaPlus className={`${toggle4? '-rotate-90 ease-in-out  duration-300' : 'rotate-90 ease-in-out  duration-300'}`} />
                   </div>
                    <p className={`${toggle4 ? "block" : "hidden"}`}>Our fees comes with a well structured payment plan.</p>
                </div>
                </section>

                
             <div className='flex justify-center items-center mt-8' />
            
               
        </div>
    </div>
  )
}

export default Faqs