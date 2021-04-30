<template>
  <section v-if="dataReady" class="seller container">
    <!-- <button
      @click="
        buyItem('Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTY5NjYxNDAzMTUyNQ==')
      "
    >
      Buy!!
    </button> -->
    <div
      class="seller__hero"
      :style="`background-image: url(${sellerById[0].store_banner})`"
    >
      <h1 class="seller__hero--title">{{ sellerById[0].sp_store_name }}</h1>
    </div>
    <div class="seller__bio">
      <img class="seller__bio--profile-image" :src="sellerById[0].store_logo" />
      <div class="seller__bio--profile-container">
        <h3>{{ sellerById[0].sp_store_name }}</h3>
        <h4>{{ productsById[0].product_type }}</h4>
        <p>{{ removeTags(sellerById[0].short_desc) }}</p>
      </div>
    </div>
    <div class="seller__delivery">
      <h4>Delivery Information</h4>
      <p>Order by midnight on Wednesday for delivery Saturday</p>
    </div>
    <div class="seller__products">
      <div
        v-for="(product, index) in productsById"
        :key="`seller__${index}`"
        class="seller__products--wrapper"
        @click="openProductModal(product)"
      >
        <img
          class="product-image"
          :style="
            product.images.length > 0
              ? `background-image: url(${product.images[0].img_lg})`
              : `background-image: url('~assets/images/comingsoon.png')`
          "
        />
        <h3 class="product-title">{{ product.product_name }}</h3>
        <h4 class="product-price">£{{ product.price }}</h4>
      </div>
    </div>
    <dynamic-modal v-if="showModal" @closeModal="closeProductModal" />
  </section>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'Sellers',
  transition: 'fade-enter',
  asyncData({ params }) {
    console.log(params)
    return {
      sellerId: params.seller,
      checkoutId: false,
      showModal: false,
      chosenProduct: false,
    }
  },
  computed: {
    ...mapGetters(['productsById', 'sellerById']),
    dataReady() {
      return this.productsById && this.sellerById
    },
  },
  created() {
    this.setChosenSellerId(this.sellerId)
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
    ...mapMutations({
      setChosenSellerId: 'SET_CHOSEN_SELLER_ID',
    }),
    removeTags(string) {
      return string.replace(/<[^>]+>/g, '')
    },
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
    openProductModal(productInfo) {
      this.chosenProduct = productInfo
      this.showModal = true
    },
    closeProductModal() {
      this.showModal = false
    },
  },
}
</script>

<style lang="scss">
$desktop: 1024px;
$tablet: 768px;
$mobile: 600px;

.seller {
  &__hero {
    width: 100%;
    background-image: url(/_nuxt/assets/images/hero.jpg);
    background-size: cover;
    padding: 200px 0;
    display: flex;
    z-index: -999;
    color: var(--color-white-1);
    @media (max-width: $tablet) {
      display: block;
      background-position: top;
    }
    &--title {
      margin: 0 auto;
      @media (max-width: $tablet) {
        text-align: center;
      }
    }
  }
  &__bio,
  &__products,
  &__delivery {
    padding: 50px 10% 0;
    position: relative;
    @media (max-width: $tablet) {
      display: inline;
      padding: 0;
    }
  }
  &__bio {
    display: flex;
    width: 80%;
    @media (max-width: $tablet) {
      display: inline;
      text-align: center;
    }
    &--profile-image {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border: 4px solid var(--color-white-1);
      @media (max-width: $tablet) {
        margin: 20px auto 0;
        display: block;
      }
    }
    &--profile-container {
      padding: 35px;
    }
  }
  &__delivery {
    width: 80%;
    @media (max-width: $tablet) {
      display: inline;
      text-align: center;
    }
  }
  &__products {
    width: 100%;
    @media (max-width: $tablet) {
      display: inline-block;
    }
    &--wrapper {
      width: 35%;
      cursor: pointer;
      float: left;
      position: relative;
      @media (max-width: $tablet) {
        padding: 5%;
        width: 90%;
      }
      &:hover {
        opacity: 0.8;
      }
      &:nth-child(odd) {
        margin-right: 5%;
        @media (max-width: $tablet) {
          margin-right: 0;
        }
      }
      &:nth-child(even) {
        margin-left: 5%;
        @media (max-width: $tablet) {
          margin-left: 0;
        }
      }
      .product-title,
      .product-price {
        margin: 10px 0;
      }
      .product-image {
        height: 300px;
        width: 100%;
        background-position: center;
        border-radius: 20px;
        -webkit-box-shadow: 0px 5px 5px 0px var(--color-grey-2);
        -moz-box-shadow: 0px 5px 5px 0px var(--color-grey-2);
        box-shadow: 0px 5px 5px 0px var(--color-grey-2);
      }
    }
  }
}
</style>
