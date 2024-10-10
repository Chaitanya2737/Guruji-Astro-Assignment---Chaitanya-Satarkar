/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#F6F5F2", // for background
        light:"##021526", // for text
        secondary: "#1E201E",// for background
        dark:"rgb(255 255 255)", // for text
      }
    },
  },
  plugins: [],
}