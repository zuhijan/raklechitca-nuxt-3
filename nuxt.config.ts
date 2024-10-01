// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'default',
      titleTemplate: '%s - Raklechitca with Nuxt32',
    }
  },
  $development: {
    app: {
      head: {
        titleTemplate: '%s - Raklechitca with Nuxt3',
      }
    }
  }
})
