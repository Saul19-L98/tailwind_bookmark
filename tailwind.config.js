/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html","./src/**/*.js"],
  theme: {
    fontFamily:{
      sans:['Rubik','sans-serif'],
    },
    screens:{
      sm:'30em',
      md:'48em',
      lg:'63.75em',
      xl:'90em',
    },
    backgroundImage: () => ({
      'dots': "url('../src/assets/images/bg-dots.svg')",
    }),
    extend: {
      colors:{
        softBlue:'hsl(231,69%,60%)',
        softRed:'hsl(0,94%,66%)',
        grayishBlue:'hsl(229,8%,60%)',
        veryDarkBlue:'hsl(229,31%,21%)',
      },
    },
  },
  plugins: [],
}
