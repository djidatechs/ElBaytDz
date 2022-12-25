/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "3xl":"1792px",
        "onlymobile" : {min:"0px", max : "639px"},
        "untilLg" : {min:"0px", max : "1023px"},
        "untilMd" : {min:"0px", max : "767px"},
      },
      colors:{
        "night" : "#003554",
        "primary" : "#003554",
        "sky" : "#157BF6",
        "sun" : "#FFC100" ,
        "old" : "#D9B227"
      
      }
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui")],
}