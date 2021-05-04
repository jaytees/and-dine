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
            v-if="seller.shop_logo !== ''"
            class="shop-image"
            :src="seller.shop_logo"
          />
          <img v-else src="~/assets/images/comingsoon.png" class="shop-image" />
          <img
            v-if="seller.store_logo"
            class="seller-image"
            :src="seller.store_logo"
          />
          <img
            v-else
            class="seller-image"
            src="~/assets/images/comingsoon.png"
          />
          <h3 class="shop-title">{{ seller.sp_store_name }}</h3>
          <h4 class="shop-location">{{ seller.city }}</h4>
        </nuxt-link>
      </div>
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
        margin-top: 15px;
      }
    }
    &--right {
      padding: 150px 10%;
      @media (max-width: $tablet) {
        padding: 5%;
      }
      .location-box {
        background-color: var(--color-white-1);
        border-radius: 5px;
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
          font-size: 18px;
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
          font-weight: 300;
          margin-top: 10px;
        }
      }
    }
  }
  &__sellers {
    position: relative;
    padding: 50px 5%;
    width: 100%;
    @media (max-width: $tablet) {
      display: block;
      padding: 0;
    }
    &--wrapper {
      width: 29%;
      cursor: pointer;
      float: left;
      position: relative;
      margin: 0 1% 0 0;
      @media (max-width: $tablet) {
        padding: 5%;
        width: 90%;
        margin: 0;
      }
      &:hover {
        opacity: 0.8;
      }
      a {
        text-decoration: none;
      }
      .shop-image {
        width: 100%;
        border-radius: 5px;
        height: 250px;
        background-color: var(--color-purple-1);
        -webkit-box-shadow: 0px 5px 5px 0px var(--color-grey-2);
        -moz-box-shadow: 0px 5px 5px 0px var(--color-grey-2);
        box-shadow: 0px 5px 5px 0px var(--color-grey-2);
      }
      .seller-image {
        position: relative;
        bottom: 80px;
        left: 75%;
        background-color: var(--color-purple-1);
        width: 100px;
        height: 100px;
        margin-bottom: -110px;
        border-radius: 50%;
        border: 4px solid var(--color-white-1);
        @media (max-width: $tablet) {
          left: 70%;
        }
      }
    }
  }
}
</style>
