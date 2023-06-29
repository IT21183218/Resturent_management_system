/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      scale: {
        '65': '0.65',
        '60': '0.60',
        '54': '0.54',
      },
      flexBasis: {
        '1/20':'5.0%',
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      }, 
      spacing: {
        '928': '58rem',
      },
      screens: {
        'xmd': '928px',  
        '3xl':'2000px',     
      },
      colors:{
        'backGrnd':'#FCBF49',
      },
      spacing:{
        'xl':'54rem',
      },

    },
  },
  plugins: [],
}
