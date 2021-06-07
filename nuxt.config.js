export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'and-dine',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
        type: 'text/javascript',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/static/styles/main.scss', '~/static/styles/animate.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/font-awesome', ssr: false },
    { src: '~/plugins/vue-meta', ssr: false },
    { src: '~/plugins/vue-friendly-iframe', ssr: false },
    { src: '~/plugins/vue-google-maps', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/image',
  ],

  target: 'static',

  router: {
    base: '/',
  },

  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
  },

  env: {
    STOREFRONT_URL:
      process.env.NODE_ENV !== 'production'
        ? 'https://mvmapi.webkul.com/api/v2/'
        : 'https://mvmapi.webkul.com/api/v2/',
    STOREFRONT_REFRESH_TOKEN:
      'ZDgyMmE2NTk5NzNlZDgyMDk4MmNlMTZjNGUxODg2ZWU3ZGQzZjg1ODgyNTZiM2JjMGEyMGYzNWUzYjVkNDQ3MA',
    STOREFRONT_ACCESS_TOKEN:
      'YjZiNmRlZjE1ZGJiZWRlMTFmZGRmYzc0Njg0ZDIyMjYwYjcxMDQxZjEyNzA3ZGRhMzlhOTgzODAzNDE0NzYzYQ',
    STOREFRONT_BEARER:
      'Bearer YjZiNmRlZjE1ZGJiZWRlMTFmZGRmYzc0Njg0ZDIyMjYwYjcxMDQxZjEyNzA3ZGRhMzlhOTgzODAzNDE0NzYzYQ',
    SHOPIFY_DOMAIN: 'anddine.myshopify.com',
    SHOPIFY_ACCESS_TOKEN: 'd4ba832cfe834593d2b1e99447a4c3f4',
    MAILCHIMP_API_KEY: '0b223ff6d3a9eb9ba8111dfacf24278f-us1',
    MAILCHIMP_CLIENT_ID: '579802540657',
    MAILCHIMP_CLIENT_SECRET:
      '6f6e7d8508b0805c61462bc9a371d5512383a9e3d66fabbe5b',
    MAILCHIMP_AUDIENCE_ID: '5c8512abdc',
    GOOGLE_API_KEY: 'AIzaSyC_gWbzZHOo1xpc9eOgzgqUa44PGdGY4Pg',
  },

  generate: {
    fallback: true,
  },

  axios: {
    proxy: false,
    proxyHeaders: false,
    baseURL:
      process.env.NODE_ENV !== 'production'
        ? 'http://localhost:3000'
        : 'https://develop.d2nz46kp2z46p7.amplifyapp.com',
    // headers: {
    //   common: {
    //     Accept: 'application/json, text/plain, */*',
    //   },
    //   delete: {},
    //   get: {},
    //   head: {},
    //   post: {},
    //   put: {},
    //   patch: {},
    // },
  },

  // proxy: {
  //   '/api/proxy/': {
  //     target: 'https://mvmapi.webkul.com/api/v2/',
  //     pathRewrite: { '^/api/proxy/': '' },
  //     changeOrigin: true,
  //   },
  // },

  // serverMiddleware: [{ path: '/api/subscribe', handler: '~/api/index.js' }],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/device',
    '@nuxt/http',
    '@nuxtjs/pwa',
    '@nuxt/content',
    'nuxt-shopify',
    '@nuxt/http',
    'nuxt-lazy-load',
    'cookie-universal-nuxt',
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: [
              'faShoppingBasket',
              'faShoppingCart',
              'faUser',
              'faSearch',
              'faBars',
              'faPlus',
              'faTimes',
              'faMinus',
              'faLocationArrow',
            ],
          },
        ],
      },
    ],
  ],
}
