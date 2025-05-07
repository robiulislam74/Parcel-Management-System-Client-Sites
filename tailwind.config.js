/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#213448',
        secondaryColor: '#547792',
        thirdColor: '#94B4C1',
        fourthColor: '#ECEFCA'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}


