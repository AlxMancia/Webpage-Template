/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          "gray-20": "#76F9F9",
          "gray-50": "#28F6F6",
          "gray-100": "#0AEBEB",
          "gray-500": "#08BDBD",
          "primary-100": "#73D5E8",
          "primary-300": "#2CBFDD",
          "primary-500": "#1D97AF",
          "secondary-400": "#1993F0",
          "secondary-500": "#0C72C0",
        },
        backgroundImage: (theme) => ({
          "gradient-yellowred":
            "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
          "mobile-home": "url('./assets/HomePageGraphic.png')",
        }),
        fontFamily: {
          dmsans: ["DM Sans", "sans-serif"],
          montserrat: ["Montserrat", "sans-serif"],
        },
        content: {
          evolvetext: "url('./assets/EvolveText.png')",
          abstractwaves: "url('./assets/AbstractWaves.png')",
          sparkles: "url('./assets/Sparkles.png')",
          circles: "url('./assets/Circles.png')",
        },
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
    },
    plugins: [],
}

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   
// };