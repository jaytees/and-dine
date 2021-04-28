export const state = () => ({
  products: '',
  sellers: '',
  navigationItems: [
    { id: 0, name: 'index', value: '', link: '/' },
    { id: 1, name: 'shops', value: 'ABOUT US', link: '/about' },
    {
      id: 2,
      name: 'join',
      value: 'COOK WITH US',
      link: '/join',
      external: 'https://anddine.sp-seller.webkul.com',
    },
  ],
})

export const mutations = {
  SET_PRODUCTS(state, payload) {
    state.products = payload
  },
  SET_SELLERS(state, payload) {
    state.sellers = payload
  },
}

export const actions = {
  // async getProducts({ commit }) {
  //   await this.$axios
  //     .$get(
  //       `${process.env.STOREFRONT_URL}/products.json?access_token=${process.env.STOREFRONT_ACCESS_TOKEN}&refresh_token=${process.env.STOREFRONT_REFRESH_TOKEN}`
  //     )
  //     .then((resp) => {
  //       commit('SET_PRODUCTS', resp.products)
  //     })
  // },
  // async getSellers({ commit }) {
  //   await this.$axios
  //     .$get(`${process.env.STOREFRONT_URL}/sellers.json`, {
  //       headers: {
  //         'Access-Control-Allow-Origin': '*',
  //         'Content-Type': 'application/json',
  //         Authorization: process.env.STOREFRONT_BEARER,
  //       },
  //     })
  //     .then((resp) => {
  //       commit('SET_SELLERS', resp.sellers)
  //     })
  // },
  // $.ajax({
  //   url: `${process.env.STOREFRONT_URL}/sellers.json`,
  //   type: 'GET',
  //   headers: {
  //     'X-Requested-With': 'XMLHttpRequest',
  //     Authorization: process.env.STOREFRONT_BEARER,
  //   },
  //   crossDomain: true,
  //   dataType: 'jsonp',
  // }).done(function (data) {
  //   console.log('Data: ', data)
  // })
  // },
}

export const getters = {
  // styleKeys: (state) => {
  //   return Object.keys(state.chosenElement.style)
  // },
  // contentKeys: (state) => {
  //   return Object.keys(state.content)
  // },
}
