<template>
  <div>
    <nav-bar :navigation="navigationItems" />
    <nuxt />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Default',
  async fetch() {
    await this.$axios
      .get(`/api/proxy/sellers.json`, {
        headers: {
          Authorization: process.env.STOREFRONT_BEARER,
        },
      })
      .then((res) => this.setSellers(res.data.sellers))
      .catch((err) => {
        // eslint-disable-next-line
        console.log(err)
      })
  },
  fetchOnServer: true,
  computed: {
    ...mapState(['navigationItems', 'checkoutInfo']),
  },
  async mounted() {
    this.getProducts()
    !this.checkoutInfo &&
      this.$shopify.checkout.create().then((checkout) => {
        this.setCheckoutInfo(checkout)
        this.$cookies.set('checkout_info', checkout)
      })
    await this.$shopify.product.fetchAll().then((products) => {
      this.shopifyProducts = products
    })
  },
  methods: {
    ...mapActions(['getProducts']),
    ...mapMutations({
      setShopifyProducts: 'SET_SHOPIFY_PRODUCTS',
      setSellers: 'SET_SELLERS',
      setCheckoutInfo: 'SET_CHECKOUT_INFO',
    }),
  },
}
</script>
