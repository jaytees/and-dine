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
              :width="$device.isMobile ? '150px' : '300px'"
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
        <nuxt-link :to="seller.id.toString()">
          <img
            class="shop-image"
            :style="`background-image: url(${seller.shop_logo});`"
          />
          <img class="seller-image" :src="seller.store_logo" />
          <h3 class="shop-title">{{ seller.sp_store_name }}</h3>
          <h4 class="shop-location">{{ seller.city }}</h4>
        </nuxt-link>
      </div>
      <div class="home__sellers--wrapper">
        <div class="shop-image-placeholder"></div>
        <div class="seller-placeholder"></div>
        <h3 class="shop-title">New Seller</h3>
        <h4 class="shop-location">New location</h4>
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
    padding: 0;
    background-image: url('~/assets/images/hero.jpg');
    background-size: cover;
    height: 600px;
    display: flex;
    position: relative;
    z-index: -999;
    @media (max-width: $tablet) {
      display: block;
      height: 800px;
      width: 90%;
      padding: 0 5%;
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
      }
    }
    &--right {
      padding: 150px 10%;
      @media (max-width: $tablet) {
        padding: 5%;
      }
      .location-box {
        background-color: var(--color-white-1);
        border-radius: 20px;
        padding: 30px;
        -webkit-box-shadow: 0px 5px 5px 0px var(--color-grey-2);
        -moz-box-shadow: 0px 5px 5px 0px var(--color-grey-2);
        box-shadow: 0px 5px 5px 0px var(--color-grey-2);
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
    position: relative;
    padding: 50px 10%;
    @media (max-width: $tablet) {
      display: block;
      padding: 0;
    }
    &--wrapper {
      width: 35%;
      cursor: pointer;
      float: left;
      position: relative;
      @media (max-width: $tablet) {
        padding: 5%;
        width: 90%;
      }
      &:hover {
        opacity: 0.8;
      }
      &:nth-child(odd) {
        margin-right: 5%;
        @media (max-width: $tablet) {
          margin-right: 0;
        }
      }
      &:nth-child(even) {
        margin-left: 5%;
        @media (max-width: $tablet) {
          margin-left: 0;
        }
      }
      a {
        text-decoration: none;
      }
      .shop-title,
      .shop-location {
        margin: 10px 0;
      }
      .shop-image,
      .shop-image-placeholder {
        height: 300px;
        width: 100%;
        background-size: center;
        border-radius: 20px;
        -webkit-box-shadow: 0px 5px 5px 0px var(--color-grey-2);
        -moz-box-shadow: 0px 5px 5px 0px var(--color-grey-2);
        box-shadow: 0px 5px 5px 0px var(--color-grey-2);
      }
      .seller-image,
      .seller-placeholder {
        position: relative;
        bottom: 80px;
        left: 80%;
        width: 100px;
        height: 100px;
        margin-bottom: -110px;
        border-radius: 50%;
        border: 4px solid var(--color-white-1);
        @media (max-width: $tablet) {
          left: 70%;
        }
      }
      .shop-image-placeholder {
        background-image: url('~/assets/images/comingsoon.png');
        background-position: center;
      }
      .seller-placeholder {
        background-color: var(--color-purple-2);
      }
    }
  }
}
</style>
