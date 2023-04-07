/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./components/**/*.{js,vue,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./plugins/**/*.{js,ts}`,
    `./nuxt.config.{js,ts}`,
  ],
  theme: {
    extend: {
      colors: {
        "yellow": `#ffc900`,
        "red": `#da1500`,
        "light-grey": `#e9e9ed`,
        "dark-grey": `#4b5563`,
      },
      fontSize: {
        "base": [`1rem`, `1.5rem`],
        "lg": [`1.5rem`, `1.8rem`],
        "xl": [`2.1rem`, `2.5rem`],
        "2xl": [`2.8rem`, `3rem`],
        "3xl": [`3.5rem`, `3.5rem`],
      },
      minHeight: {
        "1/2": `50%`,
      },
    },
    aspectRatio: {
      "4/3": `4/3`,
      "7/5": `7/5`,
      "3/2": `3/2`,
      "2/1": `2/1`,
      "3/1": `3/1`,
    },
  },
  screens: {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "2xl": 1536,
  },
  plugins: [],
}
