<template>
  <section v-if="sellerReady" class="seller">
    <social-head
      title="Real People, Real Food."
      description="A new way to experience authentic home cooking."
      image="~/assets/images/logo-pink.png"
    />
    <div
      class="seller__hero animate__animated animate__fadeIn"
      :style="`background-image: url(${sellerById[0].store_banner})`"
    >
      <h1 class="seller__hero--title animate__animated animate__fadeInUp">
        {{ sellerById[0].sp_store_name }}
      </h1>
    </div>
    <seller-bio
      data-aos="fade-right"
      class="seller__bio"
      :seller-logo="sellerById[0].store_logo"
      :seller-name="sellerById[0].sp_store_name"
      :seller-description="parseString(sellerById[0].description)"
    />
    <div class="seller__delivery">
      <h3>Delivery Information</h3>
      <p v-if="sellerHandle === 'lazy-susan'">
        Order by midnight on Sunday for delivery on Tuesday
      </p>
      <p v-else>Order by midnight on Wednesday for delivery on Friday</p>
    </div>
    <div v-if="productsReady" class="seller__products">
      <image-list
        v-for="(product, index) in productsById"
        :key="`seller__${index}`"
        data-aos="fade-up"
        :image-title="product.product_name"
        :image-subtitle="`£${parseFloat(product.price).toFixed(2)}`"
        :background-image="product.images[0].img_lg"
        @clickEvent="openProductModal(product)"
      />
    </div>
    <dynamic-modal
      v-if="showProductModal && chosenProduct"
      class="seller__modal"
      @closeModal="closeProductModal"
    >
      <template v-slot:body>
        <div
          class="seller__modal--image"
          :style="
            hasImages
              ? `background-image: url(${chosenProduct.images[0].img_lg})`
              : '~/assets/images/comingsoon.png'
          "
        ></div>
        <div class="seller__modal--content">
          <h2>{{ chosenProduct.product_name }}</h2>
          <p>{{ parseString(chosenProduct.product_description) }}</p>
          <h3>Allergen Information</h3>
          <p>{{ parseString(chosenProduct.product_tag) }}</p>
          <h3>Cooking Instructions</h3>
          <p>{{ parseString(chosenProduct.product_policy) }}</p>
        </div>
        <div class="seller__modal--actions">
          <quantity-operator
            class="quantity-operator"
            :product-quantity="productQuantity"
            @returnQuantity="updateQuantity"
          />
          <dynamic-button
            color="pink"
            :text="
              !loading
                ? `Add to cart - £${parseFloat(overallPrice).toFixed(2)}`
                : ''
            "
            :icon="loading ? 'spinner' : ''"
            :spinning="loading"
            @clickEvent="addItem(chosenProduct.product_name)"
          />
        </div>
      </template>
    </dynamic-modal>
    <dynamic-modal
      v-if="showStoreModal"
      class="seller__modal"
      @closeModal="closeStoreModal"
    >
      <template v-slot:body>
        <h2 class="seller__modal--title">Create new order?</h2>
        <h4 class="seller__modal--body">
          Your order is {{ cartItemNames }} from {{ chosenSellerName }}
        </h4>
        <dynamic-button
          text="New order"
          color="pink"
          width="100%"
          @clickEvent="
            closeStoreModal(
              sellerById[0].sp_store_name,
              chosenProduct.product_name
            )
          "
        />
      </template>
    </dynamic-modal>
  </section>
</template>

<script>
import { decode } from 'html-entities'
import { mapMutations, mapGetters, mapState, mapActions } from 'vuex'
export default {
  name: 'Seller',
  // async fetch() {
  //   await this.$axios
  //     .get(`${process.env.STOREFRONT_URL}feature-apps/seller-timing.json`, {
  //       params: {
  //         access_token: process.env.STOREFRONT_ACCESS_TOKEN,
  //         refresh_token: process.env.STOREFRONT_REFRESH_TOKEN,
  //       },
  //     })
  //     .then((res) => {
  //       const slots = JSON.parse(
  //         res.data.slots.filter(
  //           (slot) => slot.seller_name === this.sellerName
  //         )[0].time_slot_json
  //       )
  //       const slotArr = Object.values(slots)
  //       const slotsWithDays = slotArr.map((slot, i) => ({
  //         ...slot['2'],
  //         day: this.days[i],
  //       }))
  //       console.log(slotsWithDays)
  //     })
  //     .catch((err) => console.log(err))
  // },
  // fetchOnServer: true,
  asyncData: ({ params }) => ({
    sellerHandle: params.handle,
    showProductModal: false,
    showStoreModal: false,
    chosenProduct: false,
    productQuantity: 1,
    loading: false,
    timeSlots: false,
    days: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
  }),
  computed: {
    ...mapGetters(['sellerById', 'productsById', 'cartItemNames']),
    ...mapState([
      'checkoutInfo',
      'shopifyProducts',
      'products',
      'sellers',
      'chosenSellerName',
    ]),
    productsReady() {
      return this.productsById.length > 0
    },
    sellerReady() {
      return this.sellerById.length > 0
    },
    sellerName() {
      return this.sellerById[0].full_name
    },
    overallPrice() {
      return (
        parseFloat(this.chosenProduct.price).toFixed(2) * this.productQuantity
      )
    },
    cartHasItems() {
      return this.checkoutInfo && this.checkoutInfo.lineItems.length > 0
    },
    storeNameCorrect() {
      return this.chosenSellerName === this.sellerById[0].sp_store_name
    },
    hasImages() {
      return this.chosenProduct.images.length > 0
    },
  },
  mounted() {
    const seller = this.sellers.filter(
      (seller) => seller.store_name_handle === this.sellerHandle
    )
    this.updateChosenProducts({
      handle: this.sellerHandle,
      id: seller[0].id,
    })
  },
  methods: {
    ...mapMutations({
      setCartStatus: 'SET_CART_STATUS',
    }),
    ...mapActions([
      'addToCart',
      'removeCartItems',
      'setupCheckout',
      'removeSmallOrderFee',
      'addSmallOrderFee',
      'updateChosenProducts',
    ]),
    parseString(string) {
      if (string) {
        const noTags = string.replace(/<[^>]+>/g, '')
        const noQuotes = noTags.replace(/[[\]"]+/g, '', '')
        const addSpaces = noQuotes.replace(/,/g, ', ')
        return decode(addSpaces.replace(/&nbsp;/g, ''))
      }
      return 'Coming soon!'
    },
    openProductModal(productInfo) {
      this.chosenProduct = productInfo
      this.showProductModal = true
      this.setCartStatus(false)
    },
    closeProductModal() {
      this.showProductModal = false
      this.productQuantity = 1
    },
    openStoreModal() {
      this.showStoreModal = true
    },
    closeStoreModal(store, product) {
      this.showStoreModal = false
      if (store) {
        this.removeCartItems(store)
        this.setupCheckout().then(() => this.addItem(product))
      }
    },
    updateQuantity(payload) {
      this.productQuantity = payload.quantity
    },
    addItem(name) {
      this.loading = true
      if (this.cartHasItems && !this.storeNameCorrect) {
        this.openStoreModal()
      } else {
        this.removeSmallOrderFee().then(() => {
          this.addToCart({
            name,
            quantity: this.productQuantity,
            store: this.sellerById[0].sp_store_name,
          }).then(() => {
            this.addSmallOrderFee()
            this.loading = false
            this.closeProductModal()
          })
        })
      }
    },
  },
}
</script>

<style lang="scss">
$desktop: 1024px;
$tablet: 768px;
$mobile: 600px;

.seller {
  margin-bottom: 100px;
  display: inline-block;
  margin-bottom: 200px;
  @media (max-width: $tablet) {
    margin-bottom: 300px;
  }
  &__hero {
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 200px 0;
    display: flex;
    z-index: -999;
    margin-top: 70px;
    color: var(--color-white-1);
    @media (max-width: $tablet) {
      display: block;
      background-position: top;
      padding: 50px 0;
    }
    &--title {
      margin: 0 auto;
      @media (max-width: $tablet) {
        text-align: center;
        font-size: 46px;
        padding: 0 20px;
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
      display: block;
      text-align: center;
      padding: 15px 35px 0;
    }
  }
  &__modal {
    &--image {
      height: 300px;
      background-position: center;
      background-size: cover;
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
      }
      .quantity-operator {
        @media (max-width: $tablet) {
          margin: 0 auto;
        }
      }
      .dynamic-button {
        position: absolute;
        right: 20px;
        bottom: 20px;
        @media (max-width: $tablet) {
          position: inherit;
          margin: 20px;
        }
      }
    }
    &--body {
      margin: 20px 0;
    }
  }
}
</style>
