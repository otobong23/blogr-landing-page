/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "pattern-circles": "url(../images/bg-pattern-circles.svg)",
        "pattern-intro-desktop": "url(../images/bg-pattern-intro-desktop.svg), linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%))",
        "pattern-intro-mobile": "url(../images/bg-pattern-intro-mobile.svg), linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%))",
        'gradient-nav': "linear-gradient(to right, hsl(237, 17%, 21%), hsl(237, 23%, 32%))"
      },
      colors:{
        "Light-red(CTA-text)": "hsl(356, 100%, 66%)",
        "Very-light-red(CTA-hover-background)": "hsl(355, 100%, 74%)",
        "Very-dark-blue(headings)": "hsl(208, 49%, 24%)",

        // ### Neutral
        "White(text)": "hsl(0, 0%, 100%)",
        "Grayish-blue(footer-text)": "hsl(240, 2%, 79%)",
        "Very-dark-grayish-blue(body-copy)": "hsl(207, 13%, 34%)",
        "Very-dark-black-blue(footer-background)": "hsl(240, 10%, 16%)",

        // Background gradient - Intro/CTA mobile nav:
        "Very-light-red": "hsl(13, 100%, 72%)",
        "Light-red": "hsl(353, 100%, 62%)",

        // Background gradient - body:
        "Very-dark-gray-blue": "hsl(237, 17%, 21%)",
        "Very-dark-desaturated-blue": "hsl(237, 23%, 32%)"
      }
    },
  },
  plugins: [],
}
