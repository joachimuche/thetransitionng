import React from 'react'
import { useInView } from 'react-intersection-observer';

const FadeInDirection = ({ children, direction }) => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });
    const getAnimationClass = () => {
        if (direction === 'right') {
            return inView ? 'lg:translate-x-0 duration-3000 delay-800 ease-in-out' : 'lg:translate-x-full duration-3000 delay-800 ease-in-out';
        } else if (direction === 'left') {
            return inView ? 'lg:translate-x-0 duration-3000 delay-800 ease-in-out' : 'lg:-translate-x-full duration-3000 delay-800 ease-in-out';
        }
        return '';
    };

  return (
    <div ref={ref}
        className={`transition-transform duration-800 delay-800 transform ${
        getAnimationClass()
      }`}
      >
       {children} 
    </div>
  )
}

export default FadeInDirection