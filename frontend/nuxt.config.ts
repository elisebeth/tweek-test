// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/styles/main.styl'],
  modules: [
    '@pinia/nuxt',
    'nuxt-icon'
  ],

  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL
    }
  }

})
