<template>
  <section class="container home">
    <div class="home__hero">
      <div class="home__hero--left">
        <h1 class="title">Real people, real food.</h1>
        <p class="body">A new way to experience authentic home cooking.</p>
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
              width="250px"
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
            >Please enter a valid UK postcode!</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  async fetch() {
    this.sellers = await fetch(`${process.env.STOREFRONT_URL}/sellers.json`, {
      headers: {
        Authorization: process.env.STOREFRONT_BEARER,
      },
    }).then((res) => res.json())
  },
  fetchOnServer: true,
  data() {
    return {
      sellers: '',
      showPostcodeError: false,
      postcodeValue: '',
    }
  },
  computed: {
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
    &--left,
    &--right {
      width: 50%;
    }
    &--left {
      padding: 180px 200px 180px 100px;
      .title,
      .body {
        color: var(--colour-white-1);
      }
      .body {
        font-size: 26px;
      }
    }
    &--right {
      padding: 150px 100px;
      .location-box {
        background-color: var(--colour-white-1);
        border-radius: 10px;
        height: 280px;
        padding: 30px;
        -webkit-box-shadow: 0px 5px 5px 0px var(--colour-grey-1); /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
        -moz-box-shadow: 0px 5px 5px 0px var(--colour-grey-1); /* Firefox 3.5 - 3.6 */
        box-shadow: 0px 5px 5px 0px var(--colour-grey-1);
        &__logo {
          width: 200px;
          margin: 0 auto;
          display: flex;
        }
        &__body {
          color: var(--colour-black-1);
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
          color: var(--colour-pink-1);
          font-weight: 600;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
