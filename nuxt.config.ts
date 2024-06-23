// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport:'content="width=device-width, initial-scale=1" ',
      title: "IsaViking Art",
      meta: [
        {
          name: "description",
          content: "Custom art by IsaViking",
        },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Jockey+One&display=swap",
        },
      ],
    },
  },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/cloudinary"
  ]
});


