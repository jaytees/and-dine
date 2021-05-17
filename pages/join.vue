<template>
  <section v-if="productTypeNames" class="join">
    <div class="join__hero">
      <div class="join__hero--left">
        <join-form :product-types="productTypeNames" />
      </div>
      <div class="join__hero--right">
        <h1 class="main-title">Cook with us.</h1>
        <h3 class="main-body">
          Sell from your kitchen and earn extra income, with hours that suit.
          Partner with us today. you.
        </h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Join',
  async fetch() {
    await this.$axios
      .get(`${process.env.STOREFRONT_URL}products/types.json`, {
        headers: {
          Authorization: process.env.STOREFRONT_BEARER,
        },
      })
      .then(
        (res) =>
          (this.productTypeNames = res.data.type.map((type) => type.type_name))
      )
      .catch((err) => console.log(err))
  },
  fetchOnServer: true,
  data: () => ({
    productTypeNames: false,
  }),
}
</script>

<style lang="scss">
$desktop: 1024px;
$tablet: 768px;
$mobile: 600px;

.join {
  &__hero {
    padding: 200px 5%;
    width: 90%;
    background-image: url('~/assets/images/pasta-background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    z-index: -999;
    @media (max-width: $desktop) {
      width: 90%;
      display: block;
      background-position: top;
    }
    &--right {
      animation: bounceIn 0.5s;
      width: 50%;
      padding: 5%;
      @media (max-width: $desktop) {
        animation: fadeIn 0.5s;
        width: 90%;
        padding: 100px 5% 30px;
        text-align: center;
        .main-title {
          font-size: 46px;
        }
      }
      .main-title,
      .main-body {
        color: var(--color-white-1);
      }
      .main-body {
        font-size: 24px;
        margin-top: 15px;
        font-family: 'Circular', sans-serif;
        text-shadow: 2px 2px 8px var(--color-grey-1);
      }
    }
    &--left {
      animation: bounceIn 0.5s;
      width: 50%;
      padding: 0 5%;
      @media (max-width: $desktop) {
        animation: fadeIn 0.5s;
        padding: 5%;
        width: 90%;
      }
    }
  }
}
</style>
