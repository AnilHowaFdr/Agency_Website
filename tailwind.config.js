/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      primary: ["Poppins", "sans-serif"],
      secondary: ["DM Sans", "sans-serif"],
      third: ["Nunito", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#3661FC",
      },
    },
  },
  plugins: [],
};