// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/strapi',
    '@nuxt/icon',
  ],

  runtimeConfig: {
    strapi: {
      url: 'http://localhost:1337',
    },

    public: {
      strapi: {
        url: 'http://localhost:1337',
      },
    },
  },
});
