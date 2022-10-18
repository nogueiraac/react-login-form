/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        200: '#c4c4cc',
        100: '#e1e1e6',
      },
      cyan: {
        500: '#81d8f7',
        300: '#9BE1FB'   
      },
      red: {
        600: '#dc2626',
        700: '#b91c1c'
      }
    },
    extend: {
      screens: {
        '-2xl': { max: '1200px'},
        // => @media (min-width: 640px) { ... }
  
        '-xl': { max: '991px'},
        // => @media (min-width: 768px) { ... }
  
        '-lg': { max: '768px'},
        // => @media (min-width: 1024px) { ... }
  
        '-md': { max: '600px'},
        // => @media (min-width: 1280px) { ... }
  
        '-sm': { max: '480px'},
        // => @media (min-width: 1280px) { ... }
      }
    },
  },
  plugins: [],
}
