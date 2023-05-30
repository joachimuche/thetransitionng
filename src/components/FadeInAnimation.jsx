// import React, { useRef, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const FadeInAnimation = ({ children }) => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: .7, 
    });


  return (
      <div ref={ref}
        className={`transition-opacity duration-800 delay-800 ease-in-out ${
        inView ? 'lg:opacity-1' : 'lg:opacity-0'
        }`}>
        {children}
    </div>
  )
}

export default FadeInAnimation

