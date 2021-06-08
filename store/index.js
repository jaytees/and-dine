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
  shippingAddress: false,
  formattedAddress: '',
})

export const mutations = {
  SET_PRODUCTS(state, payload) {
    state.products = payload
  },
  SET_SHOPIFY_PRODUCTS(state, payload) {
    state.shopifyProducts = payload
  },
  SET_SELLERS(state, payload) {
    state.sellers = payload.reverse()
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
  SET_SHIPPING_ADDRESS(state, payload) {
    state.formattedAddress = payload.formatted_address
    const shippingAddress = {
      address1: `${
        payload.types[0] !== 'postal_code'
          ? `${payload.address_components[0].long_name} ${payload.address_components[1].long_name}`
          : payload.address_components[1].long_name
      }`,
      address2: payload.address_components[2].long_name,
      city:
        payload.address_components.length > 7
          ? payload.address_components[4].long_name
          : payload.address_components[3].long_name,
      company: null,
      country: 'United Kingdom',
      firstName: 'First Name',
      lastName: 'Last Name',
      phone: '00000000000',
      province: 'United Kingdom',
      zip:
        payload.types[0] !== 'postal_code'
          ? payload.address_components[6].long_name
          : payload.address_components[0].long_name,
    }
    state.shippingAddress = shippingAddress
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
  async removeFromCart({ commit, state }, payload) {
    await this.$shopify.checkout
      .removeLineItems(state.checkoutInfo.id, payload.lineItems)
      .then((checkout) => {
        commit('SET_CHECKOUT_INFO', checkout)
        this.$cookies.set('checkout_id', checkout.id)
      })
      .catch((err) => console.log(err))
  },
  async updateItemQuantity({ commit, state }, payload) {
    await this.$shopify.checkout
      .updateLineItems(state.checkoutInfo.id, payload.lineItems)
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
      .catch((err) => console.log(err))
  },
  async addDiscount({ commit, state }, payload) {
    await this.$shopify.checkout
      .addDiscount(state.checkoutInfo.id, payload.discountCode)
      .then((checkout) => {
        commit('SET_CHECKOUT_INFO', checkout)
      })
      .catch((err) => console.log(err))
  },
  async updateAddress({ commit, state }) {
    await this.$shopify.checkout
      .updateShippingAddress(state.checkoutInfo.id, state.shippingAddress)
      .then((checkout) => {
        commit('SET_CHECKOUT_INFO', checkout)
      })
      .catch((err) => console.log(err))
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
      state.checkoutInfo.lineItems.forEach((item) => {
        if (!item.title.includes('Small order fee')) count += item.quantity
      })
    return count
  },
  cartItemNames: (state) => {
    return (
      state.checkoutInfo &&
      state.checkoutInfo.lineItems.map((item) => item.title).join(', ')
    )
  },
}
