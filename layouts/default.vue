<template>
  <div class="container" :class="cartIsOpen ? 'cart-open' : 'cart-closed'">
    <shopping-cart
      v-if="cartIsOpen"
      :checkout-info="checkoutInfo"
      @returnCartClick="toggleCart"
    />
    <nav-bar
      :navigation="navigationItems"
      :item-count="cartItemCount"
      @returnCartClick="toggleCart"
    />
    <nuxt />
    <cookie-bar
      v-if="!cookiesAccepted"
      :class="cookiesAccepted ? 'animate__animated animate__fadeOut' : ''"
    />
    <footer-bar />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Default',
  middleware: ['webkul'],
  async fetch() {
    await this.$axios
      .get(`${process.env.STOREFRONT_URL}sellers.json`, {
        headers: {
          Authorization: process.env.STOREFRONT_BEARER,
        },
      })
      .then((res) => this.setSellers(res.data.sellers))
      .catch((err) => console.log(err))
  },
  fetchOnServer: true,
  computed: {
    ...mapState([
      'navigationItems',
      'checkoutInfo',
      'cartIsOpen',
      'chosenSellerName',
      'checkoutInfo',
      'cookiesAccepted',
      'chosenSellerHandle',
    ]),
    ...mapGetters(['cartItemCount', 'sellerById']),
    hasAcceptedCookies() {
      return this.$cookies.get('cookies_accepted')
    },
    hasCheckoutId() {
      return this.$cookies.get('checkout_id')
    },
    hasChosenSeller() {
      return this.$cookies.get('chosen_seller')
    },
    hasCustomerLocation() {
      return this.$cookies.get('customer_location')
    },
  },
  watch: {
    checkoutInfo(to, from) {
      if (to) {
        if (to.orderStatusUrl || from.orderStatusUrl) {
          this.$cookies.remove('chosen_seller')
          this.$cookies.remove('checkout_id')
          this.setupCheckout()
        }
      }
    },
  },
  async mounted() {
    this.fetchCollections()
    if (this.hasCheckoutId && this.hasAcceptedCookies) {
      this.setCookiesAccepted(true)
      this.fetchCheckout()
      if (this.hasChosenSeller) {
        this.updateChosenSeller({
          name: this.$cookies.get('chosen_seller'),
          handle: this.$cookies
            .get('chosen_seller')
            .replace(/\s+/g, '-')
            .toLowerCase(),
        })
      }
    } else {
      this.$cookies.remove('chosen_seller')
      this.setupCheckout()
    }
    await this.$shopify.product.fetchAll().then((products) => {
      this.setShopifyProducts(products)
      if (this.hasCustomerLocation && this.hasAcceptedCookies) {
        const location = this.$cookies.get('customer_location')
        this.setShippingAddress(location)
      }
    })
  },
  methods: {
    ...mapActions([
      'getProducts',
      'setupCheckout',
      'fetchCheckout',
      'updateAddress',
      'fetchCollections',
      'updateChosenSeller',
    ]),
    ...mapMutations({
      setShopifyProducts: 'SET_SHOPIFY_PRODUCTS',
      setSellers: 'SET_SELLERS',
      setCheckoutInfo: 'SET_CHECKOUT_INFO',
      setCartStatus: 'SET_CART_STATUS',
      setShippingAddress: 'SET_SHIPPING_ADDRESS',
      setCookiesAccepted: 'SET_COOKIES_ACCEPTED',
    }),
    toggleCart() {
      this.setCartStatus(!this.cartIsOpen)
    },
  },
}
</script>
