<template>
  <section class="container home">
    <div class="home__hero">
      <div class="home__hero--left">
        <h1 class="main-title">Real people, real food.</h1>
        <p class="main-body">A new way to experience authentic home cooking.</p>
      </div>
      <div class="home__hero--right">
        <location-box />
      </div>
    </div>
    <div class="home__sellers">
      <image-list
        v-for="(seller, index) in sellers"
        :key="`seller__${index}`"
        :image-title="seller.sp_store_name"
        :image-subtitle="seller.city"
        :profile-image="seller.store_logo"
        :background-image="seller.shop_logo"
        @clickEvent="goToPage(seller.id)"
      />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  transition: 'fade-enter',
  data() {
    return {
      showPostcodeError: false,
      postcodeValue: '',
    }
  },
  computed: {
    ...mapState(['sellers']),
    isValidPostcode() {
      const postcodeRegEx = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i
      return postcodeRegEx.test(this.postcodeValue) && this.postcodeValue !== ''
    },
  },
  methods: {
    updatePostcode(postcode) {
      this.postcodeValue = postcode
    },
    validatePostcode() {
      if (this.isValidPostcode) {
        this.showPostcodeError = false
        this.$cookies.set('dine-location', this.postcodeValue)
      } else {
        this.showPostcodeError = true
      }
    },
    goToPage(link) {
      this.$router.push(`sellers/${link.toString()}`)
    },
  },
}
</script>

<style lang="scss">
$desktop: 1024px;
$tablet: 768px;
$mobile: 600px;

.home {
  &__hero {
    width: 100%;
    padding: 0;
    background-image: url('~/assets/images/hero.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 600px;
    display: flex;
    z-index: -999;
    @media (max-width: $tablet) {
      display: block;
      height: 800px;
      width: 100%;
      background-position: top;
    }
    &--left,
    &--right {
      width: 50%;
      @media (max-width: $tablet) {
        width: 90%;
      }
    }
    &--left {
      padding: 180px 5% 180px 10%;
      @media (max-width: $tablet) {
        padding: 5%;
        text-align: center;
        .main-title {
          font-size: 46px;
          margin-top: 100px;
        }
      }
      .main-title,
      .main-body {
        color: var(--color-white-1);
      }
      .main-body {
        font-size: 26px;
        margin-top: 15px;
      }
    }
    &--right {
      padding: 150px 10%;
      @media (max-width: $tablet) {
        padding: 5%;
      }
    }
  }
  &__sellers {
    padding: 50px 5%;
    position: relative;
    margin: 0 auto;
    width: 100%;
  }
}
</style>
