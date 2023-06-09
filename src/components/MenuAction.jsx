import React from 'react'
// import {DefaultButton} from '../Components/Button'

const MenuAction = () => {
  return (
    <div className='flex justify-center mt-6 lg:mt-2'>
        <a href='/' rel="noreferrer" target="_blank">
            <button className='h-[48px] bg-black lg:bg-black lg:hover:bg-blue rounded-2xl'>
                <p className='text-white lg:text-white lg:text-lg tracking-wide text-center px-[25px] hover:text-white'>Register</p>    
            </button>      
        </a>
    </div>
  )
}

export default MenuAction