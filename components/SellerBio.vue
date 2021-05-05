<template>
  <div class="bio">
    <img class="bio__profile-image" :src="sellerLogo" />
    <div class="bio__profile-container">
      <h3>{{ sellerName }}</h3>
      <h4>{{ productType }}</h4>
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
      default: '',
      required: true,
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

.bio {
  display: flex;
  width: 80%;
  @media (max-width: $tablet) {
    display: inline;
    text-align: center;
  }
  &__profile-image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 4px solid var(--color-white-1);
    @media (max-width: $tablet) {
      margin: 20px auto 0;
      display: block;
    }
  }
  &__profile-container {
    padding: 35px;
  }
}
</style>
