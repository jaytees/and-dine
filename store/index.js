export const state = () => ({
  products: false,
  sellers: false,
  chosenSellerId: false,
  navigationItems: [
    { id: 0, name: 'index', value: '', link: '/' },
    { id: 1, name: 'about', value: 'ABOUT US', link: '/about' },
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
  SET_CHOSEN_SELLER_ID(state, payload) {
    state.chosenSellerId = payload
  },
}

export const actions = {
  async getProducts({ commit }) {
    await this.$axios
      .$get(
        `${process.env.STOREFRONT_URL}/products.json?access_token=${process.env.STOREFRONT_ACCESS_TOKEN}&refresh_token=${process.env.STOREFRONT_REFRESH_TOKEN}`
      )
      .then((resp) => {
        commit('SET_PRODUCTS', resp.products)
      })
  },
}

export const getters = {
  productsById: (state) => {
    return (
      state.products &&
      state.products.filter(
        (product) => product.seller_id === parseInt(state.chosenSellerId)
      )
    )
  },
  sellerById: (state) => {
    return (
      state.sellers &&
      state.sellers.filter(
        (seller) => seller.id === parseInt(state.chosenSellerId)
      )
    )
  },
}
