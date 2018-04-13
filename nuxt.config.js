const pkg = require('./package')

const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Hibiki Sushi & Bar',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'cache-control', content: 'max-age= 2628000' },
      { name: 'keywords', content: 'Hibiki Sushi, Hibiki Sushi Bar, Sushi Santa Clarita, Sushi SCV, Santa Clarita, Canyon Country Restaurants, Santa Clarita Restaurants, SCV Restaurants, Canyon Country Sushi, Los Angeles Sushi, Hibiki Sushi Inc. Santa Clarita Valley, Yelp Sushi'},
      { hid: 'description', name: 'description', content: 'All-You-Can-Eat Sushi & a large menu in a roomy, laid-back Japanese bar & eatery with draft beer, and select premium sake & wine bottles.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Merienda:700' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ff2a00', height: '4px', duration: 6000 },

  /*
  ** Global CSS
  */
  css: [
    'vuetify/src/stylus/main.styl',
    '~assets/styles/main.css',
    '~assets/styles/mailchimp.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-52741024-1'
    }],
    ['@nuxtjs/component-cache', {
      max: 10000,
      maxAge: 1000 * 60 * 60
    }]
  ],

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
        ]
      }
    }
  }
}

