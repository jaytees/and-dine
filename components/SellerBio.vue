<template>
  <div class="seller-bio">
    <div
      class="seller-bio__profile-image box-shadow"
      :style="
        sellerLogo
          ? `background-image: url(${sellerLogo})`
          : 'background-color: var(--color-purple-1)'
      "
    ></div>
    <div class="seller-bio__profile-container">
      <h3>{{ sellerName }}</h3>
      <p>{{ sellerDescription }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SellerBio',
  transition: 'fade-enter',
  props: {
    sellerLogo: {
      type: String,
      default: '',
      required: true,
    },
    sellerName: {
      type: String,
      default: '',
      required: true,
    },
    productType: {
      type: String,
      default: 'Food',
      required: false,
    },
    sellerDescription: {
      type: String,
      default: '',
      required: true,
    },
  },
}
</script>

<style lang="scss">
$desktop: 1024px;
$tablet: 768px;
$mobile: 600px;

.seller-bio {
  display: flex;
  width: 80%;
  @media (max-width: $tablet) {
    display: inline;
    text-align: center;
  }
  &__profile-image {
    background-color: var(--color-purple-1);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-position: bottom;
    background-size: cover;
    border: 4px solid var(--color-white-1);
    @media (max-width: $tablet) {
      margin: 20px auto 0;
      display: block;
    }
  }
  &__profile-container {
    padding: 10px 2% 35px;
    width: 80%;
    @media (max-width: $tablet) {
      padding: 35px 35px 0;
      h3 {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
