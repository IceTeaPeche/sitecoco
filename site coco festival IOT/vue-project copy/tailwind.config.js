/** @type {import('tailwindcss').Config} */
module.exports = {
   purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-121212': '#121212',
        'custom-FAFAFA': '#FAFAFA',
        'custom-008533': '#008533',
        
        
      },
      fontFamily: {
         'baloo': ['"Baloo 2"', 'cursive'],
      },
        fontWeight: {
        '400': 400,
        '500': 500,
        '600': 600,
        '700': 700,
        '800': 800,
      },
        screens: {
      'tablet': '690px',
      

          '4k': '687px',
    

          'tel': '200px',
      
          'rt': '420px',

          'rt1': '1130px'
      
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}