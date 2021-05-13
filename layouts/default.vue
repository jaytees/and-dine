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
    if (this.$cookies.get('checkout_id')) {
      this.fetchCheckout()
      this.$cookies.get('chosen_store') &&
        this.setChosenStore(this.$cookies.get('chosen_store'))
    } else {
      this.$cookies.remove('chosen_store')
      this.setupCheckout()
    }
    await this.$shopify.product.fetchAll().then((products) => {
      this.setShopifyProducts(products)
    })
  },
  methods: {
    ...mapActions(['getProducts', 'setupCheckout', 'fetchCheckout']),
    ...mapMutations({
      setShopifyProducts: 'SET_SHOPIFY_PRODUCTS',
      setSellers: 'SET_SELLERS',
      setCheckoutInfo: 'SET_CHECKOUT_INFO',
      setChosenStore: 'SET_CHOSEN_STORE',
    }),
    toggleCart() {
      this.cartIsOpen = !this.cartIsOpen
    },
  },
}
</script>
