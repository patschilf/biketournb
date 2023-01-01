const { theme } = require('./tailwind.config')
const glob = require('glob')

const ipxRoutes = (() => {
  return glob.sync('/img/**/*.jpg', {nodir: true, root: 'public', nomount: true})
    .map((filename: string) => [150, 320, 480, 640, 768, 1024, 1280, 1600]
      .map((width: number) => `/_ipx/w_${width}${filename}`))
    .reduce((all: string[], routes: string[]) => all.concat(...routes), [])
})()
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
    preset: "vercel",
    prerender: {
      crawlLinks: true,
      routes: ['/', ...ipxRoutes],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
