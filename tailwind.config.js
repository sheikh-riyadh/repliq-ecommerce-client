/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        fiama: {
          primary: '#222',
          secondary: '#E55472',
          accent: "#3A4256",
          neutral: "#191D24",
          "base-100": "#fff",
        }
      }
    ]
  },
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/src/Assets/banner-1.jpg')",
        'newsletter': "url('/src/Assets/newsletter.jpg')",
        'countdown-banner': "url('/src/Assets/countdown-banner.jpg')",

      }
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif']
    }
  },
  plugins: [require("daisyui")],
}
