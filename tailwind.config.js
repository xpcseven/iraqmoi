/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    extend: {
      colors: {
'colorone' : '#054fb5',
'colortwo' : '#0282c2',
'colorthree': '#0282c2',
'hussam2' : '#000000',
'sky1':'#065985',
      }
    },
    fontFamily:{
      cairo:[ "cairo", "sans-serif"],
    },

  },
  plugins: [],
}

