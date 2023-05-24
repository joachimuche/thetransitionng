/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 50s linear infinite',
        marquee2: 'marquee2 20s linear infinite',
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
      },


    colors:{
      'purple': '#3a2350',
      'white': '#ffffff',
      'black': '#000',
      'gray': '#F8F8F8',
      'yellow': '	#FFBF00',
      'red': '#ed2739',
      'blue': '#0C9EDA',

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

        'hero-city' : "url('./assets/images/city.jpg')",
      },
    },
    

 
  variants: {},
  plugins: [],
}

}
