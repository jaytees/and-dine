// import { flattened } from './data/sizes'
// const dynamicRoutes = () => {
//   return new Promise((resolve) => {
//     resolve(flattened.map((el) => `/${el}/`))
//   })
// }
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'banner-generator',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    script: [
      {
        src: 'https://yahoo.github.io/gifshot/js/dependencies/gifshot.min.js',
        async: true,
        ssr: false,
        body: true,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/static/styles/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/font-awesome', ssr: false },
    { src: '~/plugins/vue-meta', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  target: 'static',

  router: {
    base: '/',
  },

  env: {
    STOREFRONT_URL: 'https://mvmapi.webkul.com/api/v2/',
    STOREFRONT_REFRESH_TOKEN:
      'ZDgyMmE2NTk5NzNlZDgyMDk4MmNlMTZjNGUxODg2ZWU3ZGQzZjg1ODgyNTZiM2JjMGEyMGYzNWUzYjVkNDQ3MA',
    STOREFRONT_ACCESS_TOKEN:
      'YjZiNmRlZjE1ZGJiZWRlMTFmZGRmYzc0Njg0ZDIyMjYwYjcxMDQxZjEyNzA3ZGRhMzlhOTgzODAzNDE0NzYzYQ',
  },

  generate: {
    // routes: dynamicRoutes,
    fallback: '404.html',
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxt/http',
    '@nuxtjs/pwa',
    '@nuxt/content',
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['faShoppingBasket', 'faShoppingCart', 'faUser'],
          },
        ],
      },
    ],
  ],

  publicRuntimeConfig: {
    axios: {
      baseURL: '/',
    },
  },
}
