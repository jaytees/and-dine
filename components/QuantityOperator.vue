<template>
  <div class="quantity-operator">
    <fa
      :icon="['fa', 'minus']"
      :class="quantity <= 1 && 'disable-icon'"
      @click="changeQuantity(false)"
    />
    <h3>{{ quantity }}</h3>
    <fa :icon="['fas', 'plus']" @click="changeQuantity(true)" />
  </div>
</template>

<script>
export default {
  name: 'QuantityOperator',
  props: {
    productQuantity: {
      type: Number,
      required: true,
      default: 1,
    },
    itemId: {
      type: String,
      default: '',
      required: false,
    },
  },
  data() {
    return {
      quantity: this.productQuantity,
    }
  },
  methods: {
    changeQuantity(plus) {
      !plus && this.quantity > 1 && (this.quantity -= 1)
      plus && (this.quantity += 1)
      this.$emit('returnQuantity', { quantity: this.quantity, id: this.itemId })
    },
  },
}
</script>

<style lang="scss">
$desktop: 1024px;
$tablet: 768px;
$mobile: 600px;

.quantity-operator {
  display: flex;
  @media (max-width: $tablet) {
    display: inline-flex;
  }
  .disable-icon {
    color: var(--color-grey-2);
  }
  svg {
    color: var(--color-pink-1);
    cursor: pointer;
    font-size: 35px;
    &:hover {
      opacity: 0.9;
    }
  }
  h3 {
    margin: 0 20px;
    font-weight: 900;
    font-size: 30px;
  }
}
</style>
