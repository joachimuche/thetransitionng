import React from 'react'

const BrandLogoCard = ({image, title}) => {
  return (
    <div className='mx-4 p-5 flex items-center min-w-[80px]'>
        <div className='w-[48px] h-[48px] rounded-full flex justify-center items-center'>
        <img src={image} alt={title}  />
        </div>
    </div>
  )
}

export default BrandLogoCard