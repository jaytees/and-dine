import axios from 'axios'
export default {
  head: {
    title: '&Dine | Real People, Real Food',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: '&Dine',
        name: 'Real People, Real Food.',
        content: 'A new way to experience authentic home cooking.',
      },
    ],
    script: [
      {
        type: 'text/javascript',
        src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
      },
    ],
  },

  css: ['~/static/styles/main.scss'],

  plugins: [
    { src: '~/plugins/vue-meta', ssr: false },
    { src: '~/plugins/vue-friendly-iframe', ssr: false },
    { src: '~/plugins/vue-aos', ssr: false },
  ],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxt/image'],

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
    routes() {
      return axios
        .get(`https://mvmapi.webkul.com/api/v2/sellers.json`, {
          headers: {
            Authorization:
              'Bearer YjZiNmRlZjE1ZGJiZWRlMTFmZGRmYzc0Njg0ZDIyMjYwYjcxMDQxZjEyNzA3ZGRhMzlhOTgzODAzNDE0NzYzYQ',
          },
        })
        .then((res) => {
          return res.data.sellers.map((user) => {
            return '/sellers/' + user.store_name_handle
          })
        })
    },
  },

  axios: {
    proxy: false,
    proxyHeaders: false,
    baseURL:
      process.env.NODE_ENV !== 'production'
        ? 'http://localhost:3000'
        : 'https://develop.d2nz46kp2z46p7.amplifyapp.com',
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
      'nuxt-google-maps-module',
      {
        defer: false,
        async: false,
        key: 'AIzaSyC_gWbzZHOo1xpc9eOgzgqUa44PGdGY4Pg',
        libraries: ['places'],
      },
    ],
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
              'faSpinner',
              'faCopyright',
              'faPizzaSlice',
              'faSearchLocation',
              'faHouseUser',
              'faAngleRight',
              'faAngleDown',
            ],
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['faFacebook', 'faInstagram', 'faTwitter'],
          },
        ],
      },
    ],
  ],
}
