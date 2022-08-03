/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        // md: "1023px",
      },
      lineHeight: {
        custom: "61.152px",
        "line-height": 1.45,
        "line-height-medium": 0.91,
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        heading: ["Oswald", "sans-serif"],
      },
      fontSize: {
        "custom-large": "67.2px",
        "custom-medium": "43.68px",
        "custom-smallest": "13.65px",
        "title-size": "16.8px",
        "discription-text-size": "1rem",
        "experience-text-smallest-size": "0.7rem",
        "experience-text-smaller-size": "0.75rem",
      },
      colors: {
        "primary-dark-500": "#292a2a",
        "primary-dark-300": "#2b2c2c",
        "primary-dark-200": "#2d2e2e",

        "primary-dark-text-500": "#a4a5a6",
        "primary-dark-text-300": "#979899",
        "primary-dark-text-orange": "#e0a80d",

        "primary-border-color": "#404242",

        "primary-dark-icon-bg": "#3f4040",
        "primary-dark-icon-hover-bg": "#323333",
        "primary-dark-icon": "#717273",

        "secondary-light-500": "#f8f8f8",
        "secondary-light-300": "#fbfbfb",
        "secondary-light-200": "#fcfcfc",

        "secondary-light-text-500": "#727272",
        "secondary-light-text-300": "#939393",
        "secondary-light-text-orange": "#F8BB10",

        "secondary-border-color": "#ececec",

        "secondary-light-icon-bg": "#ededed",
        "secondary-light-icon-hover-bg": "transparent",
        "secondary-light-icon": "#c6c6c6",
        "secondary-light-icon-hover": "#e0a707",

        "md-secondary": "#fafafa",
        "md-primary": "#282929",
      },
      spacing: {
        container: "4.375rem 4.8rem 1.6625rem",
        "profile-container": "2.625rem 4.8rem 1.6625rem",
        "md-container": "3.15rem 3.5rem 1.4rem",
        "sm-container": "1.75rem",
        "b-container": "2.7125rem",
        "no-t-inner-top": "4.375rem",
        "no-t-container": "0 4.8rem 1.6625rem",
        "sm-no-t-container": "0 3.5rem 1.4rem",
        "xs-no-t-container": "0 1.75rem 1.75rem",

        "no-b-container": "4.375rem 4.8rem 0",
        "sm-no-b-container": "3.15rem 3.5rem 0",
        "xs-no-b-container": "1.75rem 1.75rem 0rem",
      },
      width: {
        25: "25%",
        30: "30%",
        50: "50%",
        70: "70%",
        75: "75%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};
