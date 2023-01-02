const { theme } = require('./tailwind.config')

const { CLOUDINARY_PROJECT_ID } = process.env

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    '~/assets/css/main.css'
  ],
  image: {
    alias: {
      'photos': '/biketournb/photos',
      'misc': '/biketournb/misc',
    },
    domains: [
      'res.cloudinary.com',
    ],
    provider: 'cloudinary',
    screens: theme.screens,
    cloudinary: {
      baseURL: `https://res.cloudinary.com/${CLOUDINARY_PROJECT_ID}/image/upload/`,
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxt/image-edge',
  ],
  nitro: {
    preset: 'vercel',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
