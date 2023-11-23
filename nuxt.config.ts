// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: ['@storyblok/nuxt', '@nuxtseo/module'],

  storyblok: {
    accessToken: process.env.SB_API_KEY,
  },

  site: {
    url: 'http://localhost:3000',
    name: 'Default Site Name',
    description: 'Default Site Description',
  },
});
