<template>
  <section class="container">
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
export default {
  name: 'Shops',
  data() {
    return {
      checkoutId: '',
    }
  },
  mounted() {
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
