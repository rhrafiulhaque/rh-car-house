/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF3426',
        secondary: '#FFEDED'
      },
      backgroundImage: {
        'hero': 'linear-gradient(225deg, hsla(0, 0%, 100%, 1) 20%, hsla(2, 93%, 94%, 1) 100%)',
        'login': 'linear-gradient(to right top, #ffde9f, #ffe3ae, #ffe8bd, #feeccd, #fdf1dc, #fcf3e2, #fcf4e7, #fbf6ed, #fbf5eb, #fbf5e9, #fbf4e8, #fbf3e6)',

      },
    },
  },
  plugins: [],
}