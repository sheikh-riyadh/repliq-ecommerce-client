/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        fiama: {
          primary: '#000',
          secondary: '#E55472',
          accent: "#3A4256",
          neutral: "#191D24",
          "base-100": "#fff",
        }
      }
    ]
  },
  theme: {
    extend: {},
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif']
    }
  },
  plugins: [require("daisyui")],
}
