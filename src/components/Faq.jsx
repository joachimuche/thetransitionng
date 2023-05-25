// import React, { useState } from 'react'


const Faq = () => {
  return (
    <div>
      <section class="">
        <div class="container px-3 py-10 mx-auto">
          <div class="text-center md:mb-20">
          <h1 className='py-2 font-semibold text-4xl text-purple mt-10'>FAQs</h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
             {/*optional text */}
            </p>
          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="w-full lg:w-2/2 px-4 md:py-2">
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md px-4">
                What is The Transition business School
                </summary>

                <p class="text-sm m-4 text-purple">
                hic natus eum distinctio minus ipsum fugit maiores placeat quasi dolorum nulla nobis ea? Laboriosam quod, at quidem repellat delectus dolorum excepturi animi nulla perspiciatis error? Aliquid at labore ducimus consequatur, delectus cumque animi nobis nemo? Ipsa et assumenda facere enim provident, 
                id voluptatem tempore exercitationem temporibus sequi architecto dolorum quis quibusdam? Laudantium natus
                </p>
              </details>
              <details class="mb-4">
                <summary class="font-semibold bg-gray-200 rounded-md px-4">
                Who can attend the transition business school?
                </summary>

                <p class="text-sm m-4 text-purple">
                hic natus eum distinctio minus ipsum fugit maiores placeat quasi dolorum nulla nobis ea? Laboriosam quod, at qui
                dem repellat delectus dolorum excepturi animi nulla perspiciatis error? Aliquid at labore ducimus consequatur, delectus cumque animi nobis nemo? Ipsa et assumenda facere enim provident, id voluptatem tempore exercitationem temporibus sequi architecto dolorum quis quibusdam? Laudantium natus
                </p>
              </details>
             
            
           
            </div>
           
          </div>
        </div>
      </section>
    </div>
    
  )
}

export default Faq





