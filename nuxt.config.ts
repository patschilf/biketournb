const { theme } = require('./tailwind.config')

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    '~/assets/css/main.css'
  ],
  image: {
    provider: "ipx",
    screens: theme.screens,
  },
  modules: [
    '@nuxt/content',
    '@nuxt/image-edge',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
