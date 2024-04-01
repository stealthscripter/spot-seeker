/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'world-map': "url('/assets/WorldMap.svg')",
        })
    },
    container :{
      center : true
    },
    fontFamily : {
        Lato : ["Lato", "sans-serif"]
    }
  },
  plugins: [],
}