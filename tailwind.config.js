/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primaryColor: '#212121',
        secondaryColor: '#F5F7FA',
        thirdColor: '#94B4C1',
        fourthColor: '#ECEFCA',
        textColor: '#212121',
        pinkRed: '#FF3C57',
        borderColor: '#E0E0E0',
        hoverColor: '#EF4444',
        cardBg: '#FFEFEB'
      },
      backgroundImage:{
        bgImg: "url('https://i.ibb.co.com/C5HS2Tsx/pexels-tomfisk-3856433.jpg')"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ['light', 'synthwave'], // Add or customize themes here
  },
}


