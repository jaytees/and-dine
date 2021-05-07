<template>
  <section v-if="dataReady" class="seller">
    <div
      class="seller__hero"
      :style="`background-image: url(${sellerById[0].store_banner})`"
    >
      <h1 class="seller__hero--title">{{ sellerById[0].sp_store_name }}</h1>
    </div>
    <seller-bio
      class="seller__bio"
      :seller-logo="sellerById[0].store_logo"
      :seller-name="sellerById[0].sp_store_name"
      :product-type="productsById[0].product_type"
      :seller-description="parseString(sellerById[0].description)"
    />
    <div class="seller__delivery">
      <h4>Delivery Information</h4>
      <p>Order by midnight on Wednesday for delivery Saturday</p>
    </div>
    <div class="seller__products">
      <image-list
        v-for="(product, index) in productsById"
        :key="`seller__${index}`"
        :image-title="product.product_name"
        :image-subtitle="`£${product.price}`"
        :background-image="product.images[0].img_lg"
        @clickEvent="openProductModal(product)"
      />
    </div>
    <dynamic-modal
      v-if="showModal && chosenProduct"
      class="seller__modal"
      @closeModal="closeProductModal"
    >
      <template v-slot:body>
        <div
          class="seller__modal--image"
          :style="
            chosenProduct.images.length > 0
              ? `background-image: url(${chosenProduct.images[0].img_lg})`
              : '~/assets/images/comingsoon.png'
          "
        ></div>
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
import { mapMutations, mapGetters, mapState } from 'vuex'
export default {
  name: 'Seller',
  asyncData({ params }) {
    return {
      sellerId: params.id,
      showModal: false,
      chosenProduct: false,
      productQuantity: 1,
    }
  },
  computed: {
    ...mapGetters(['sellerById', 'productsById']),
    ...mapState(['checkoutInfo', 'shopifyProducts', 'products']),
    dataReady() {
      return this.productsById.length > 0 && this.sellerById.length > 0
    },
    overallPrice() {
      return this.chosenProduct.price * this.productQuantity
    },
  },
  mounted() {
    this.setChosenSellerId(this.sellerId)
  },
  methods: {
    ...mapMutations({
      setChosenSellerId: 'SET_CHOSEN_SELLER_ID',
      setCheckoutInfo: 'SET_CHECKOUT_INFO',
      setProducts: 'SET_PRODUCTS',
    }),
    parseString(string) {
      if (string) {
        const noTags = string.replace(/<[^>]+>/g, '')
        const noQuotes = noTags.replace(/[[\]"]+/g, '', '')
        const addSpaces = noQuotes.replace(/,/g, ', ')
        return addSpaces.replace(/&nbsp;/g, '')
      }
      return 'Coming soon!'
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
        .addLineItems(this.checkoutInfo.id, lineItemsToAdd)
        .then((checkout) => {
          this.setCheckoutInfo(checkout)
          this.$cookies.set('checkout_info', checkout)
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
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
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
    padding: 50px 5% 0;
    position: relative;
    margin: 0 auto;
    width: 100%;
  }
  &__delivery {
    width: 80%;
    @media (max-width: $tablet) {
      display: inline;
      text-align: center;
    }
  }
  &__modal {
    &--image {
      height: 300px;
      background-position: center;
      background-size: cover;
      -webkit-box-shadow: 0px 5px 5px 0px var(--color-grey-2);
      -moz-box-shadow: 0px 5px 5px 0px var(--color-grey-2);
      box-shadow: 0px 5px 5px 0px var(--color-grey-2);
      border-radius: 5px;
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
        margin-top: 30px;
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
            opacity: 0.9;
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
