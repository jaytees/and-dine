export const state = () => ({
  products: false,
  sellers: false,
  chosenSellerId: false,
  chosenStore: false,
  cartIsOpen: false,
  navigationItems: [
    { id: 0, name: 'index', value: '', link: '/' },
    { id: 1, name: 'about', value: 'ABOUT US', link: '/about' },
    { id: 2, name: 'join', value: 'COOK WITH US', link: '/join' },
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
  SET_CHOSEN_STORE(state, payload) {
    state.chosenStore = payload
  },
  SET_CART_STATUS(state, payload) {
    state.cartIsOpen = payload
  },
}

export const actions = {
  setProducts({ commit }, products) {
    commit('SET_PRODUCTS', products)
  },
  async addToCart({ commit, state }, payload) {
    const variant =
      state.shopifyProducts &&
      state.shopifyProducts.filter((product) => product.title === payload.name)
    const lineItemsToAdd = [
      {
        variantId: variant[0].variants[0].id,
        quantity: payload.quantity,
        customAttributes: [{ key: '', value: '' }],
      },
    ]
    await this.$shopify.checkout
      .addLineItems(state.checkoutInfo.id, lineItemsToAdd)
      .then((checkout) => {
        commit('SET_CHECKOUT_INFO', checkout)
        commit('SET_CHOSEN_STORE', payload.store)
        this.$cookies.set('checkout_id', checkout.id)
        this.$cookies.set('chosen_store', payload.store)
      })
      .catch((err) => console.log(err))
  },
  async removeFromCart({ commit }, payload) {
    await this.$shopify.checkout
      .removeLineItems(payload.checkoutId, payload.lineItems)
      .then((checkout) => {
        commit('SET_CHECKOUT_INFO', checkout)
        this.$cookies.set('checkout_id', checkout.id)
      })
      .catch((err) => console.log(err))
  },
  async updateItemQuantity({ commit }, payload) {
    await this.$shopify.checkout
      .updateLineItems(payload.checkoutId, payload.lineItems)
      .then((checkout) => {
        commit('SET_CHECKOUT_INFO', checkout)
        this.$cookies.set('checkout_id', checkout.id)
      })
  },
  removeCartItems({ commit }, store) {
    commit('SET_CHOSEN_STORE', store)
    this.$cookies.set('chosen_store', store)
    commit('SET_CHECKOUT_INFO', false)
  },
  async setupCheckout({ commit }) {
    await this.$shopify.checkout.create().then((checkout) => {
      commit('SET_CHECKOUT_INFO', checkout)
      this.$cookies.set('checkout_id', checkout.id)
    })
  },
  async fetchCheckout({ commit }) {
    await this.$shopify.checkout
      .fetch(this.$cookies.get('checkout_id'))
      .then((checkout) => {
        commit('SET_CHECKOUT_INFO', checkout)
      })
  },
  async addDiscount({ commit }, payload) {
    await this.$shopify.checkout
      .addDiscount(payload.checkoutId, payload.discountCode)
      .then((checkout) => {
        commit('SET_CHECKOUT_INFO', checkout)
      })
  },
  async sendEmail(info) {
    await this.$axios.$post('/mail/send', {
      from: info.name,
      subject: 'New customer sign-up',
      text: `Hello my name is ${info.firstName} ${info.lastName} and I would like to start cooking with you! My details are as follows: Email: ${info.email} <br/> Number: ${info.number} <br /> Postcode: ${info.postcode} <br /> Cuisine: ${info.cuisine} <br /> Thanks!`,
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
  cartItemNames: (state) => {
    return (
      state.checkoutInfo &&
      state.checkoutInfo.lineItems.map((item) => item.title).join(', ')
    )
  },
}
