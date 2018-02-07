const pkg = require('./package');

module.exports = {
  mode: 'universal',

  router: {
    middleware: 'i18n'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Главная',
    titleTemplate: 'ProExchanger | %s',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#00bfa5',
    height: '2px'
  },

  /*
  ** Global CSS
  */
  css: [
    '~assets/css/font-awesome.min.css',
    '~assets/css/main.css',
    '~assets/css/check_order.css',
    '~assets/css/proexchange_main.css',
    '~assets/css/fonts.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/i18n.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue-i18n']
  },
  generate: {
    routes: ['/', '/ru', '/en']
  }
};
