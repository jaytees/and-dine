<template>
  <section class="container">
    <div>{{ sellers }}</div>
    <button
      @click="
        buyItem('Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTY5NjYxNDAzMTUyNQ==')
      "
    >
      Buy!!
    </button>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Shops',
  data() {
    return {
      checkoutId: '',
    }
  },
  computed: {
    ...mapState(['sellers']),
  },
  mounted() {
    this.getSellers()
    this.$shopify.checkout.create().then((checkout) => {
      this.checkoutId = checkout.id
      this.checkoutUrl = checkout.webUrl
      console.log(checkout)
    })
    this.$shopify.product.fetchAll().then((products) => {
      // Do something with the products
      console.log(products)
    })
  },
  methods: {
    ...mapActions(['getSellers']),
    buyItem(variantId) {
      const lineItemsToAdd = [
        {
          variantId,
          quantity: 3,
          customAttributes: [{ key: '', value: '' }],
        },
      ]

      // Add an item to the checkout
      this.$shopify.checkout
        .addLineItems(this.checkoutId, lineItemsToAdd)
        .then((checkout) => {
          // Do something with the updated checkout
          console.log(checkout) // Array with one additional line item
        })
    },
  },
}
</script>
