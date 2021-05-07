<template>
  <div class="shopping-cart">
    <dynamic-button
      class="shopping-cart__close"
      :is-slot="true"
      @clickEvent="returnCartClick()"
    >
      <template v-slot:button-body>
        <fa :icon="['fas', 'times-circle']" />
      </template>
    </dynamic-button>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  props: {
    checkoutInfo: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  methods: {
    returnCartClick() {
      this.$emit('returnCartClick', true)
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
  width: 26%;
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  background-color: var(--color-white-1);
  transition: 0.5s;
  padding: 2%;
  -webkit-box-shadow: 0px 5px 5px 0px var(--color-grey-2);
  -moz-box-shadow: 0px 5px 5px 0px var(--color-grey-2);
  box-shadow: 0px 5px 5px 0px var(--color-grey-2);
  @media (max-width: $desktop) {
    width: 90%;
    padding: 5%;
  }
  &__close {
    color: var(--color-pink-1);
    font-size: 35px;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  }
}
</style>
