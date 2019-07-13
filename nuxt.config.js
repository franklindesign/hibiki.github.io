const pkg = require("./package");

const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: "Hibiki Sushi & Bar",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { "http-equiv": "cache-control", content: "max-age= 2628000" },
      {
        name: "keywords",
        content:
          "Hibiki Sushi, Hibiki Sushi Bar, Sushi Santa Clarita, Sushi SCV, Santa Clarita, Canyon Country Restaurants, Santa Clarita Restaurants, SCV Restaurants, Canyon Country Sushi, Los Angeles Sushi, Hibiki Sushi Inc. Santa Clarita Valley, Yelp Sushi"
      },
      {
        hid: "description",
        name: "description",
        content:
          "All-You-Can-Eat Japanese food with a large selection of items on the menu. Spacy room for large parties with booths and bar. Great selection of Japanese beer and Draft for All You Can Drink as well as select premium sake & wine bottles."
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap|Material+Icons"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Merienda:700&display=swap"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#ff2a00", height: "4px", duration: 6000 },

  /*
   ** Global CSS
   */
  css: [
    "vuetify/src/stylus/main.styl",
    "~assets/styles/main.css",
    "~assets/styles/mailchimp.css",
    "swiper/dist/css/swiper.css"
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "@/plugins/vuetify",
    { src: "~/plugins/swiper.js", ssr: false },
    "@/plugins/vue-lazysizes.client.js"
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    "@bazzite/nuxt-optimized-images",
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-52741024-1"
      }
    ],
    [
      "@nuxtjs/component-cache",
      {
        max: 10000,
        maxAge: 31557600
      }
    ]
  ],
  optimizedImages: {
    optimizeImagesInDev: false,
    optimizeImages: true,
    handleImages: ["jpeg", "png", "svg", "webp", "gif"],
    mozjpeg: {
      quality: 75
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */

    extend(config, ctx) {
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ];
      }
    }
  }
};
