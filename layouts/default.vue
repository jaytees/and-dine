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
    ...mapGetters(['cartItemCount']),
  },
  async mounted() {
    // this.setupMailchimp()
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
      setCartStatus: 'SET_CART_STATUS',
    }),
    // setupMailchimp() {
    //   const chimpScript = document.createElement('script')
    //   const validateScript = document.createElement('script')
    //   chimpScript.appendChild(
    //     document.createTextNode(
    //       `(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[0]='EMAIL';ftypes[0]='email';fnames[4]='PHONE';ftypes[4]='phone';fnames[6]='MMERGE6';ftypes[6]='text';fnames[7]='MMERGE7';ftypes[7]='dropdown';fnames[3]='ADDRESS';ftypes[3]='address';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);`
    //     )
    //   )
    //   validateScript.src =
    //     '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'
    //   validateScript.type = 'text/javascript'
    //   document.body.appendChild(chimpScript)
    //   document.body.appendChild(validateScript)
    // },
    toggleCart() {
      this.setCartStatus(!this.cartIsOpen)
    },
  },
}
</script>
