/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'inter' : '"Inter", sans-serif'
      } , 
      colors : {
        'black' : '#141414',
        'dark-grey' : '#1F1F1F' , 
        'grey' : '#333333' ,
        'neon-green' : '#C4F82A'
      }
    },
  },
  plugins: [],
}