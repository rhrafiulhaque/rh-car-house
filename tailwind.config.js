/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-white': 'hsla(0, 0%, 100%, 1)',
        'custom-pink': 'hsla(2, 93%, 94%, 1)',
      },
      backgroundImage: {
        'hero': 'linear-gradient(225deg, hsla(0, 0%, 100%, 1) 20%, hsla(2, 93%, 94%, 1) 100%)',
      },
    },
  },
  plugins: [],
}