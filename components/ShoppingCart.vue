<template>
  <div
    class="shopping-cart animate__animated animate__fadeInRight animate__faster box-shadow"
  >
    <dynamic-button
      class="shopping-cart__close"
      :is-slot="true"
      @clickEvent="returnCartClick()"
    >
      <template v-slot:button-body>
        <fa :icon="['fas', 'times']" />
      </template>
    </dynamic-button>
    <div v-if="showItems">
      <h3 class="shopping-cart__title">Your order with {{ chosenStore }}</h3>
      <div
        v-for="(item, index) in checkoutInfo.lineItems"
        :key="`item_${index}`"
        class="shopping-cart__items"
      >
        <quantity-operator
          v-if="!item.title.includes('Small order fee')"
          :product-quantity="item.quantity"
          :item-id="item.id"
          class="shopping-cart__items--quantity"
          @returnQuantity="updateQuantity"
        />
        <div class="shopping-cart__items--container">
          <h4 class="title">
            {{ item.title }}
          </h4>
          <fa
            v-if="!item.title.includes('Small order fee')"
            :icon="['fas', 'times']"
            class="remove"
            @click="removeItem(item.id)"
          />
        </div>
      </div>
      <!-- <h3 class="shopping-cart__total">Shipping: £3.99</h3> -->
      <h3 class="shopping-cart__total">Total: £{{ totalPrice }}</h3>
      <dynamic-button
        color="pink"
        :text="!loading ? 'Checkout' : ''"
        width="100%"
        :icon="loading ? 'spinner' : ''"
        :spinning="loading"
        @clickEvent="goToCheckout"
      />
    </div>
    <div v-else class="shopping-cart__empty">
      <fa :icon="['fas', 'shopping-cart']" class="shopping-cart__empty--icon" />
      <h3 class="shopping-cart__text">Your cart is empty!</h3>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  name: 'ShoppingCart',
  data: () => ({
    loading: false,
  }),
  computed: {
    ...mapState(['chosenStore', 'checkoutInfo']),
    ...mapGetters(['sellerById']),
    showItems() {
      return this.checkoutInfo && this.checkoutInfo.lineItems.length > 0
    },
    totalPrice() {
      return parseFloat(this.checkoutInfo.totalPrice).toFixed(2)
    },
  },
  methods: {
    ...mapActions([
      'addToCart',
      'removeFromCart',
      'updateItemQuantity',
      'addDiscount',
      'updateAddress',
    ]),
    returnCartClick() {
      this.$emit('returnCartClick', true)
    },
    goToCheckout() {
      this.loading = true
      this.updateAddress().then(() => {
        this.loading = false
        location.replace(this.checkoutInfo.webUrl)
      })
    },
    removeItem(itemId) {
      this.removeFromCart({
        lineItems: [itemId],
      }).then(() => {
        if (
          this.checkoutInfo.lineItems.length === 1 &&
          this.checkoutInfo.lineItems[0].title.includes('Small order fee')
        )
          this.removeFromCart({
            lineItems: [this.checkoutInfo.lineItems[0].id],
          })
      })
    },
    updateQuantity(payload) {
      this.updateItemQuantity({
        lineItems: [{ id: payload.id, quantity: payload.quantity }],
      })
    },
  },
}
</script>

<style lang="scss">
$desktop: 1024px;
$tablet: 768px;
$mobile: 600px;

.shopping-cart {
  height: 100%;
  width: 27%;
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  background-color: var(--color-white-1);
  transition: 0.5s;
  padding: 2%;
  @media (max-width: $desktop) {
    width: 90%;
    padding: 5%;
  }
  &__title {
    margin: 20px 0;
  }
  &__items {
    padding: 30px 0 20px;
    display: flex;
    &--quantity {
      svg,
      h3 {
        font-size: 20px !important;
      }
      svg {
        margin-top: 3px;
      }
    }
    &--container {
      display: flex;
      position: absolute;
      right: 5%;
      .title {
        margin: 0 10px;
      }
      svg {
        margin-top: 2px;
      }
      .remove {
        color: var(--color-pink-1);
        cursor: pointer;
        font-size: 20px;
      }
    }
  }
  &__empty {
    text-align: center;
    padding: 10% 0;
    &--icon {
      font-size: 80px;
      color: var(--color-pink-1);
      margin-bottom: 20px;
    }
  }
  &__total {
    margin: 20px 0;
  }
  &__close {
    padding: 0;
    color: var(--color-pink-1);
    font-size: 35px;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  }
}
</style>
