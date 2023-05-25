import React from 'react'

const BrandLogoCard = ({image, title}) => {
  return (
    <div className='w-[140px] h-[35px] items-center justify-center px-4 mx-4 grayscale'>
        <div className=' flex justify-center items-center rounded-full'>
        <img src={image} alt={title}/>
        </div>
    </div>
  )
}

export default BrandLogoCard