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
  checkoutInfo: false,
  shopifyProducts: false,
})

export const mutations = {
  SET_PRODUCTS(state, payload) {
    state.products = payload
  },
  SET_SHOPIFY_PRODUCTS(state, payload) {
    state.shopifyProducts = payload
  },
  SET_SELLERS(state, payload) {
    state.sellers = payload
  },
  SET_CHOSEN_SELLER_ID(state, payload) {
    state.chosenSellerId = payload
  },
  SET_CHECKOUT_INFO(state, payload) {
    state.checkoutInfo = payload
  },
}

export const actions = {
  setProducts({ commit }, products) {
    commit('SET_PRODUCTS', products)
  },
  addToCart({ commit, state }, payload) {
    const variant = state.shopifyProducts.filter(
      (product) => product.title === payload.name
    )
    const lineItemsToAdd = [
      {
        variantId: variant[0].variants[0].id,
        quantity: payload.quantity,
        customAttributes: [{ key: '', value: '' }],
      },
    ]
    this.$shopify.checkout
      .addLineItems(state.checkoutInfo.id, lineItemsToAdd)
      .then((checkout) => {
        commit('SET_CHECKOUT_INFO', checkout)
        this.$cookies.set('checkout_id', checkout.id)
      })
      .catch((err) => console.log(err))
  },
  removeFromCart({ commit, state }, payload) {
    this.$shopify.checkout
      .removeLineItems(payload.checkoutId, payload.lineItems)
      .then((checkout) => {
        commit('SET_CHECKOUT_INFO', checkout)
        this.$cookies.set('checkout_id', checkout.id)
      })
      .catch((err) => console.log(err))
  },
  updateItemQuantity({ commit, state }, payload) {
    this.$shopify.checkout
      .updateLineItems(payload.checkoutId, payload.lineItems)
      .then((checkout) => {
        commit('SET_CHECKOUT_INFO', checkout)
        this.$cookies.set('checkout_id', checkout.id)
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
  cartItemCount: (state) => {
    let count = 0
    state.checkoutInfo &&
      state.checkoutInfo.lineItems.forEach((item) => (count += item.quantity))
    return count
  },
}
