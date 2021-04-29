<template>
  <section class="container home">
    <div class="home__hero">
      <div class="home__hero--left">
        <h1 class="main-title">Real people, real food.</h1>
        <p class="main-body">A new way to experience authentic home cooking.</p>
      </div>
      <div class="home__hero--right">
        <div class="location-box">
          <img
            class="location-box__logo"
            src="~/assets/images/popup-pink.png"
          />
          <p class="location-box__body">
            We're delivering London's best home cook's food straight to you
            door.
          </p>
          <div class="location-box__search">
            <text-input
              class="location-box__search--field"
              :width="$device.isMobile ? '200px' : '300px'"
              place-holder="Enter your postcode..."
              :is-uppercase="true"
              @inputValue="updatePostcode"
            />
            <dynamic-button
              class="location-box__search--button"
              width="50px"
              icon="search"
              color="pink"
              height="45px"
              @clickEvent="validatePostcode"
            />
          </div>
          <span v-if="showPostcodeError" class="location-box__error"
            >Please enter a valid UK postcode</span
          >
        </div>
      </div>
    </div>
    <div class="home__sellers">
      <div
        v-for="(seller, index) in sellers"
        :key="`seller__${index}`"
        class="home__sellers--wrapper"
      >
        <img
          class="shop-image"
          :style="`background-image: url(${seller.shop_logo});`"
        />
        <h3 class="shop-title">{{ seller.sp_store_name }}</h3>
        <h4 class="shop-location">{{ seller.city }}</h4>
        <img class="seller-image" :src="seller.store_logo" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
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
    top: 0;
    background-image: url('~/assets/images/hero.jpg');
    background-size: cover;
    height: 600px;
    display: flex;
    position: absolute;
    z-index: -999;
    @media (max-width: $tablet) {
      display: inline;
      height: 800px;
      background-position: top;
    }
    &--left,
    &--right {
      width: 50%;
      @media (max-width: $tablet) {
        width: 100%;
      }
    }
    &--left {
      padding: 180px 5% 180px 10%;
      @media (max-width: $tablet) {
        padding: 5%;
        text-align: center;
        width: 90%;
        .main-title {
          font-size: 46px;
        }
      }
      .main-title,
      .main-body {
        color: var(--color-white-1);
      }
      .main-body {
        font-size: 26px;
      }
    }
    &--right {
      padding: 150px 10%;
      @media (max-width: $tablet) {
        padding: 5%;
        width: 90%;
      }
      .location-box {
        background-color: var(--color-white-1);
        border-radius: 20px;
        padding: 30px;
        -webkit-box-shadow: 0px 5px 5px 0px var(--color-grey-1);
        -moz-box-shadow: 0px 5px 5px 0px var(--color-grey-1);
        box-shadow: 0px 5px 5px 0px var(--color-grey-1);
        &__logo {
          width: 200px;
          margin: 0 auto;
          display: flex;
        }
        &__body {
          color: var(--color-black-1);
          margin: 30px 0;
        }
        &__search {
          display: flex;
          margin-bottom: 20px;
          &--button {
            margin-left: 15px;
          }
        }
        &__error {
          color: var(--color-pink-1);
          font-weight: 600;
          margin-top: 10px;
        }
      }
    }
  }
  &__sellers {
    width: 100%;
    position: absolute;
    top: 650px;
    display: flex;
    padding: 0 10%;
    @media (max-width: $tablet) {
      top: 850px;
      display: inline;
      padding: 0 5%;
    }
    &--wrapper {
      width: 40%;
      height: 400px;
      cursor: pointer;
      @media (max-width: $tablet) {
        width: 90%;
      }
      &:nth-child(odd) {
        margin-right: 5%;
      }
      &:nth-child(even) {
        margin-left: 5%;
      }
      .shop-title {
        color: var(--color-pink-1);
        font-size: 22px;
        margin: 10px 0;
      }
      .shop-location {
        color: var(--color-grey-1);
        font-size: 18px;
        margin: 10px 0;
      }
      .shop-image {
        height: 350px;
        width: 100%;
        background-size: center;
        border-radius: 20px;
        -webkit-box-shadow: 0px 5px 5px 0px var(--color-grey-2);
        -moz-box-shadow: 0px 5px 5px 0px var(--color-grey-2);
        box-shadow: 0px 5px 5px 0px var(--color-grey-2);
      }
      .seller-image {
        width: 100px;
        height: 100px;
        position: absolute;
        border-radius: 50%;
        top: 300px;
        left: 35.5%;
        border: 4px solid var(--color-white-1);
        @media (max-width: $tablet) {
          left: 70%;
        }
      }
    }
  }
}
</style>
