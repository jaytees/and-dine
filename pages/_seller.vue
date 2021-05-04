<template>
  <section v-if="dataReady" class="seller container">
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
        <p>{{ parseString(sellerById[0].short_desc) }}</p>
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
          :src="
            product.images.length > 0
              ? product.images[0].img_lg
              : '~/assets/images/comingsoon.png'
          "
        />
        <h3 class="product-title">{{ product.product_name }}</h3>
        <h4 class="product-price">£{{ product.price }}</h4>
      </div>
    </div>
    <dynamic-modal
      v-if="showModal"
      class="seller__modal"
      @closeModal="closeProductModal"
    >
      <template v-slot:body>
        <img
          class="seller__modal--image"
          :src="
            chosenProduct.images.length > 0
              ? chosenProduct.images[0].img_lg
              : '~/assets/images/comingsoon.png'
          "
        />
        <div class="seller__modal--content">
          <h2>{{ chosenProduct.product_name }}</h2>
          <p>{{ parseString(chosenProduct.product_description) }}</p>
          <h4>Ingredients</h4>
          <p>{{ parseString(chosenProduct.product_tag) }}</p>
          <h4>Cooking Instructions</h4>
          <p>{{ parseString(chosenProduct.product_policy) }}</p>
        </div>
        <div class="seller__modal--actions">
          <div class="quantity-container">
            <fa
              :icon="['fas', 'minus-circle']"
              :class="productQuantity <= 1 && 'disable-icon'"
              @click="changeQuantity(false)"
            />
            <h3>{{ productQuantity }}</h3>
            <fa :icon="['fas', 'plus-circle']" @click="changeQuantity(true)" />
          </div>
          <dynamic-button
            color="pink"
            :text="`Add to cart - £${overallPrice}`"
            @clickEvent="addToCart(chosenProduct.product_name)"
          />
        </div>
      </template>
    </dynamic-modal>
  </section>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'Sellers',
  transition: 'fade-enter',
  asyncData({ params }) {
    return {
      sellerId: params.seller,
      checkoutId: false,
      showModal: false,
      chosenProduct: false,
      productQuantity: 1,
      checkoutUrl: '',
      shopifyProducts: [],
    }
  },
  computed: {
    ...mapGetters(['productsById', 'sellerById']),
    dataReady() {
      return this.productsById.length > 0 && this.sellerById.length > 0
    },
    overallPrice() {
      return this.chosenProduct.price * this.productQuantity
    },
  },
  created() {
    this.setChosenSellerId(this.sellerId)
    this.$shopify.checkout.create().then((checkout) => {
      this.checkoutId = checkout.id
      this.checkoutUrl = checkout.webUrl
    })
    this.$shopify.product.fetchAll().then((products) => {
      // Do something with the products
      this.shopifyProducts = products
    })
  },
  methods: {
    ...mapMutations({
      setChosenSellerId: 'SET_CHOSEN_SELLER_ID',
      setCheckoutInfo: 'SET_CHECKOUT_INFO',
    }),
    parseString(string) {
      const noTags = string.replace(/<[^>]+>/g, '')
      const noQuotes = noTags.replace(/[[\]"]+/g, '', '')
      const addSpaces = noQuotes.replace(/,/g, ', ')
      return addSpaces.replace(/&nbsp;/g, '')
    },
    changeQuantity(plus) {
      !plus && this.productQuantity > 1 && (this.productQuantity -= 1)
      plus && (this.productQuantity += 1)
    },
    addToCart(itemName) {
      const variant = this.shopifyProducts.filter(
        (product) => product.title === itemName
      )
      const lineItemsToAdd = [
        {
          variantId: variant[0].variants[0].id,
          quantity: this.productQuantity,
          customAttributes: [{ key: '', value: '' }],
        },
      ]
      this.$shopify.checkout
        .addLineItems(this.checkoutId, lineItemsToAdd)
        .then((checkout) => {
          location.replace(checkout.webUrl)
        })
    },
    openProductModal(productInfo) {
      this.chosenProduct = productInfo
      this.showModal = true
    },
    closeProductModal() {
      this.showModal = false
      this.productQuantity = 1
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
    background-image: url('~assets/images/hero.jpg');
    background-position: cover;
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
    @media (max-width: $tablet) {
      display: inline-block;
    }
    &--wrapper {
      width: 35%;
      cursor: pointer;
      float: left;
      position: relative;
      margin: 0 20px 0 0;
      @media (max-width: $tablet) {
        padding: 5%;
        width: 90%;
        margin: 0;
      }
      &:hover {
        opacity: 0.8;
      }
      .product-title {
        margin: 5px 0;
      }
      .product-price {
        margin: 0 0 10px;
      }
      .product-image {
        height: 250px;
        width: 100%;
        background-position: center;
        border-radius: 5px;
        -webkit-box-shadow: 0px 5px 5px 0px var(--color-grey-2);
        -moz-box-shadow: 0px 5px 5px 0px var(--color-grey-2);
        box-shadow: 0px 5px 5px 0px var(--color-grey-2);
      }
    }
  }
  &__modal {
    &--image {
      height: 300px;
      -webkit-box-shadow: 0px 5px 5px 0px var(--color-grey-2);
      -moz-box-shadow: 0px 5px 5px 0px var(--color-grey-2);
      box-shadow: 0px 5px 5px 0px var(--color-grey-2);
      @media (max-width: $tablet) {
        height: 200px;
      }
    }
    &--content {
      margin: 20px 0;
      border-top: 1px solid var(--color-grey-2);
      border-bottom: 1px solid var(--color-grey-2);
      p {
        margin: 10px 0;
      }
    }
    &--actions {
      display: flex;
      @media (max-width: $tablet) {
        display: block;
        text-align: center;
      }
      .quantity-container {
        display: flex;
        @media (max-width: $tablet) {
          margin: 0 auto;
          display: inline-flex;
        }
        .disable-icon {
          color: var(--color-grey-2);
        }
        svg {
          color: var(--color-pink-1);
          font-size: 35px;
          cursor: pointer;
          &:hover {
            opacity: 0.8;
          }
        }
        h3 {
          margin: 0 20px;
          font-weight: 900;
          font-size: 35px;
        }
      }
      .dynamic-button {
        position: absolute;
        right: 20px;
        @media (max-width: $tablet) {
          position: inherit;
          margin: 20px;
        }
      }
    }
  }
}
</style>
