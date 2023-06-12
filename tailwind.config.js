/** @type {import('tailwindcss').Config} */
const {fontFamily} = require('tailwindcss/defaultTheme')
module.exports = {
  mode:'jit',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'carfaq': "url('/src/assets/cars/car-bg.png')",
        'heropage': "url('/src/assets/cars/heroes-bg.png')",
        'bookpg': "url('/src/assets/store/book-bg.png')",
      },
    },
  },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
  
      "xl": { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
  
      "lg": { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
  
      "md": { max: "767px" },
      // => @media (max-width: 767px) { ... }
  
      "sm": { max: "639px" },
      // => @media (max-width: 639px) { ... }
  
      "xs": { max: "479px" },
      // => @media (max-width: 479px) { ... }
  },
  plugins: [],
}
