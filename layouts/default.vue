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
  computed: {
    ...mapState(['navigationItems', 'checkoutInfo', 'cartIsOpen']),
    ...mapGetters(['cartItemCount', 'sellerById']),
    isSmallOrder() {
      return this.checkoutInfo.totalPrice < 15
    },
    smallOrderFee() {
      return (
        this.isSmallOrder &&
        parseFloat(15 - this.checkoutInfo.totalPrice).toFixed(2)
      )
    },
  },
  watch: {
    checkoutInfo(to, from) {
      if (to) {
        if (
          to.lineItems.length === 1 &&
          to.lineItems[0].title.includes('Small order fee')
        )
          this.removeFromCart({
            lineItems: [to.lineItems[0].id],
            checkoutId: to.id,
          })

        if (to.totalPrice > 15) {
          const smallOrderItem = to.lineItems.filter((item) =>
            item.title.includes('Small order fee')
          )
          this.removeFromCart({
            lineItems: [smallOrderItem[0].id],
            checkoutId: to.id,
          })
        }
        if (to.totalPrice < 15) {
          this.addToCart({
            name: `Small order fee - £${this.smallOrderFee}`,
            quantity: 1,
            store: this.sellerById[0].sp_store_name,
          })
        }
      }
    },
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
    ...mapActions([
      'getProducts',
      'setupCheckout',
      'fetchCheckout',
      'removeFromCart',
      'addToCart',
    ]),
    ...mapMutations({
      setShopifyProducts: 'SET_SHOPIFY_PRODUCTS',
      setSellers: 'SET_SELLERS',
      setCheckoutInfo: 'SET_CHECKOUT_INFO',
      setChosenStore: 'SET_CHOSEN_STORE',
      setCartStatus: 'SET_CART_STATUS',
    }),
    toggleCart() {
      this.setCartStatus(!this.cartIsOpen)
    },
  },
}
</script>
