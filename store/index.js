export const state = () => ({
  products: false,
  collections: false,
  sellers: false,
  chosenSellerId: false,
  chosenSellerName: false,
  chosenSellerHandle: false,
  chosenCollectionName: false,
  cartIsOpen: false,
  cartLoading: false,
  navigationItems: [
    { id: 0, name: 'index', value: '', link: '/' },
    { id: 1, name: 'about', value: 'ABOUT US', link: '/about' },
    { id: 2, name: 'join', value: 'COOK WITH US', link: '/join' },
  ],
  checkoutInfo: false,
  shopifyProducts: false,
  shippingAddress: false,
  formattedAddress: '',
  cookiesAccepted: false,
})

export const mutations = {
  SET_PRODUCTS(state, payload) {
    state.products = payload
  },
  SET_COLLECTIONS(state, payload) {
    state.collections = payload
  },
  SET_SHOPIFY_PRODUCTS(state, payload) {
    state.shopifyProducts = payload
  },
  SET_SELLERS(state, payload) {
    const inactive = payload.filter((item) =>
      item.store_name_handle.includes('coming-soon')
    )
    const active = payload.filter(
      (item) => !item.store_name_handle.includes('coming-soon')
    )
    const newArr = active.concat(inactive)
    state.sellers = newArr
  },
  SET_CHECKOUT_INFO(state, payload) {
    state.checkoutInfo = payload
  },
  SET_CHOSEN_SELLER_NAME(state, payload) {
    state.chosenSellerName = payload
  },
  SET_CHOSEN_SELLER_HANDLE(state, payload) {
    state.chosenSellerHandle = payload
  },
  SET_CHOSEN_SELLER_ID(state, payload) {
    state.chosenSellerId = payload
  },
  SET_CHOSEN_COLLECTION_NAME(state, payload) {
    state.chosenCollectionName = payload
  },
  SET_CART_STATUS(state, payload) {
    state.cartIsOpen = payload
  },
  SET_SHIPPING_ADDRESS(state, payload) {
    state.formattedAddress = payload.formatted_address
    // if (payload && payload.address_components.length > 5) {
    //   const shippingAddress = {
    //     address1: `${
    //       payload.address_components[0].types[0] !== 'postal_code'
    //         ? `${payload.address_components[0].long_name} ${payload.address_components[1].long_name}`
    //         : payload.address_components[1].long_name
    //     }`,
    //     address2: payload.address_components[2].long_name,
    //     city:
    //       payload.address_components.length > 7
    //         ? payload.address_components[4].long_name
    //         : payload.address_components[3].long_name,
    //     company: null,
    //     country: 'United Kingdom',
    //     lastName: '-------',
    //     phone: '00000000000',
    //     province: 'United Kingdom',
    //     zip:
    //       payload.address_components[0].types[0] !== 'postal_code'
    //         ? payload.address_components[6].long_name
    //         : payload.address_components[0].long_name,
    //   }
    //   state.shippingAddress = shippingAddress
    // }
  },
  SET_COOKIES_ACCEPTED(state, payload) {
    state.cookiesAccepted = payload
  },
  SET_CART_LOADING(state, payload) {
    state.cartLoading = payload
  },
}

export const actions = {
  setProducts({ commit }, products) {
    commit('SET_PRODUCTS', products)
  },
  setCollections({ commit }, collections) {
    commit('SET_COLLECTIONS', collections)
  },
  async fetchCollections({ commit }) {
    await this.$shopify.collection
      .fetchAllWithProducts()
      .then((collections) => {
        commit('SET_COLLECTIONS', collections)
        // console.log(collections[0].products)
      })
  },
  async addToCart({ commit, state, getters }, payload) {
    const variant = getters.productsByCollection.filter(
      (product) => product.title === payload.name
    )
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
        commit('SET_CHOSEN_SELLER_NAME', payload.store)
        this.$cookies.set('checkout_id', checkout.id)
        this.$cookies.set('chosen_seller', payload.store)
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
  async addSmallOrderFee({ commit, state, getters }) {
    if (getters.smallOrderFee) {
      const variant = getters.productsByCollection.filter(
        (product) =>
          product.title === `Small order fee - £${getters.smallOrderFee}`
      )
      const lineItemsToAdd = [
        {
          variantId: variant[0].variants[0].id,
          quantity: 1,
          customAttributes: [{ key: '', value: '' }],
        },
      ]
      await this.$shopify.checkout
        .addLineItems(state.checkoutInfo.id, lineItemsToAdd)
        .then((checkout) => {
          commit('SET_CHECKOUT_INFO', checkout)
          this.$cookies.set('checkout_id', checkout.id)
          this.commit('SET_CART_LOADING', false)
        })
        .catch((err) => console.log(err))
    } else {
      this.commit('SET_CART_LOADING', false)
    }
  },
  async removeSmallOrderFee({ state, commit }) {
    this.commit('SET_CART_LOADING', true)
    const smallOrderItems = state.checkoutInfo.lineItems.filter((item) =>
      item.title.includes('Small order fee')
    )
    if (smallOrderItems.length > 0)
      await this.$shopify.checkout
        .removeLineItems(state.checkoutInfo.id, smallOrderItems[0].id)
        .then((checkout) => {
          commit('SET_CHECKOUT_INFO', checkout)
          this.$cookies.set('checkout_id', checkout.id)
        })
        .catch((err) => console.log(err))
  },
  removeCartItems({ commit }, store) {
    commit('SET_CHOSEN_SELLER_NAME', store)
    this.$cookies.set('chosen_seller', store)
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
  updateChosenSeller({ commit }, payload) {
    commit('SET_CHOSEN_SELLER_NAME', payload.name)
    commit('SET_CHOSEN_SELLER_HANDLE', payload.handle)
  },
  updateChosenProducts({ commit }, payload) {
    commit('SET_CHOSEN_SELLER_ID', payload.id)
    commit('SET_CHOSEN_COLLECTION_NAME', payload.handle)
  },
}

export const getters = {
  activeSellers: (state) => {
    return state.sellers.filter((seller) => seller.active)
  },
  productsById: (state) => {
    return (
      state.products &&
      state.products.filter(
        (product) => product.seller_id === parseInt(state.chosenSellerId)
      )
    )
  },
  productsByCollection: (state) => {
    return (
      state.collections &&
      state.collections.filter(
        (collection) => collection.handle === state.chosenCollectionName
      )[0].products
    )
  },
  smallOrderFee: (state) => {
    return (
      state.checkoutInfo.totalPrice < 15 &&
      state.checkoutInfo.lineItems.length > 0 &&
      parseFloat(15 - state.checkoutInfo.totalPrice).toFixed(2)
    )
  },
  smallOrderFees: (state) => {
    return (
      state.collections &&
      state.collections.filter(
        (collection) => collection.handle === 'small-order-fees'
      )[0].products
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
