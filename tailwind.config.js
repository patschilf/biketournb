/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#ffc900",
        red: "#da1500",
      },
      fontSize: {
        base: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "4rem",
        "4xl": "5rem",
        "5xl": "6rem",
        "6xl": "7rem",
      },
    },
    aspectRatio: {
      "4/3": "4/3",
      "3/2": "3/2",
      "2/1": "2/1",
      "3/1": "3/1",
    },
  },
  plugins: [],
}
