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
  data() {
    return {
      cartIsOpen: false,
    }
  },
  computed: {
    ...mapState(['navigationItems', 'checkoutInfo']),
    ...mapGetters(['cartItemCount']),
  },
  async mounted() {
    this.$cookies.get('checkout_id')
      ? this.$shopify.checkout
          .fetch(this.$cookies.get('checkout_id'))
          .then((checkout) => {
            this.setCheckoutInfo(checkout)
          })
      : this.$shopify.checkout.create().then((checkout) => {
          this.setCheckoutInfo(checkout)
          this.$cookies.set('checkout_id', checkout)
        })
    await this.$shopify.product.fetchAll().then((products) => {
      this.setShopifyProducts(products)
    })
  },
  methods: {
    ...mapActions(['getProducts']),
    ...mapMutations({
      setShopifyProducts: 'SET_SHOPIFY_PRODUCTS',
      setSellers: 'SET_SELLERS',
      setCheckoutInfo: 'SET_CHECKOUT_INFO',
    }),
    toggleCart() {
      this.cartIsOpen = !this.cartIsOpen
    },
  },
}
</script>
