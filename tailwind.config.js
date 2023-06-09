/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        movedown: 'movedown 4s linear 1',
        'fade-in': 'fade-in 0.5s ease-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        movedown: {
          '0%': { transform: 'translateY(-100px)' },
          '100%': {transform: 'translateY(0)'}
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': {opacity: '1'},
        }
      },

      fontSize: {
        'headline' : [
          '48px',
          {
            lineHeight: '56px',
            letterSpacing: '0.5px',
            fontWeight: 700
          }
        ],
        'headline-1' : [
          '32px',
          {
            lineHeight: '40px',
            letterSpacing: '0.5px',
            fontWeight: 700
          }
        ], 
        'headline-2' : [
          '28px', 
          {
            lineHeight: '36px',
            letterSpacing: '0.25px',
            fontWeight: 600
          }
        ],
        'headline-3' : [
          '24px',
          {
            lineHeight: '24px',
            letterSpacing: '0.25px',
            fontWeight: 500
          }
        ],
        'title-1' : [
          '22px',
          {
            lineHeight: '28px',
            fontWeight: 600
          }
        ],
        'title-2' : [
          '20px', 
          {
            lineHeight: '24px',
            fontWeight: 500
          }
        ],
        'title-3' : [
          '18px', 
          {
            lineHeight: '20px',
            fontWeight: 500
          }
        ],
        'body-1' : [
          '16px', 
          {
            lineHeight: '24px',
            fontWeight: 400,
            letterSpacing: '0.25px'
          }
        ],
        'body-2' : [
          '14px', 
          {
            lineHeight: '20px',
            fontWeight: 400
          }
        ],
        'body-3' : [
          '12px', 
          {
            lineHeight: '16px',
            fontWeight: 300
          }
        ],
        'label-1' : [
          '14px', 
          {
            lineHeight: '20px',
            fontWeight: 400,
            letterSpacing: '0.25px'
          }
        ],
        'label-2' : [
          '12px', 
          {
            lineHeight: '16px',
            fontWeight: 400,
            letterSpacing: '0.25px'
          }
        ],
        'label-3' : [
          '10px', 
          {
            lineHeight: '12px',
            fontWeight: 400,
            letterSpacing: '0.5px'
          }
        ],
        'button-1' : [
          '16px', 
          {
            lineHeight: '24px',
            fontWeight: 500,
            letterSpacing: '0.5px',
          }
        ],
        'button-2' : [
          '14px', 
          {
            lineHeight: '20px',
            fontWeight: 500,
            letterSpacing: '0.25px',
          }
        ],
      },


    colors:{
      'purple': '#3a2350',
      'white': '#ffffff',
      'black': '#000',
      'black2': '#000009',
      'gray': '#F8F8F8',
      'yellow': '	#FFBF00',
      'red': '#ed2739',
      'blue': '#0C9EDA',
      'background': '#EBE6E6',

      transparent: 'transparent',
      
    },
    
      fontFamily:{

        'sans': ['Roboto', 'Montserrat', 'Lato', 'Open Sans', 'Source Sans Pro', 'sans-serif'],
        'serif': ['Georgia','Cambria','Times'],
        'saira': ['Saira', 'sans-serif']
      },

      backgroundImage: {
        'hero12': "url('./assets/images/pstn.jpeg')",
        'hero2': "url('./assets/images/gis.jpeg')",
        'hero': "url('https://www.youtube.com/watch?v=Eg5k4fNyh_E')",
        'hero1': "url('./assets/images/city2.png')",
        'hero-2': "url('./assets/images/hero-2.png')",

        'hero-city' : "url('./assets/images/background3.jpg')",
      },
    },
    

 
  variants: {},
  plugins: [],
}

}
