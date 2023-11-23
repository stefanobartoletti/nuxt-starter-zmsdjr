// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: ['@storyblok/nuxt', '@nuxtseo/module'],

  storyblok: {
    accessToken: 'yo1Uw4GnJ0rVOFOSlQRXSgtt',
  },

  site: {
    url: 'http://localhost:3000',
    name: 'Default Site Name',
    description: 'Default Site Description',
  },
});
