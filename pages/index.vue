<template>
  <section class="home">
    <social-head
      title="Real People, Real Food."
      description="A new way to experience authentic home cooking."
      image="~/assets/images/logo-pink.png"
    />
    <div class="home__hero animate__animated animate__fadeIn">
      <div class="home__hero--left animate__animated animate__fadeInUp">
        <h1 class="main-title text-shadow">Real People, Real Food.</h1>
        <h3 class="main-body text-shadow">
          A new way to experience authentic home cooking.
        </h3>
      </div>
      <div class="home__hero--right animate__animated animate__fadeInUp">
        <location-box
          :formatted-address="formattedAddress"
          @addressChanged="updateShippingAddress"
        />
      </div>
    </div>
    <h1 v-if="!formattedAddress" class="home__title">Get started</h1>
    <div v-if="!formattedAddress" class="home__steps" data-aos="fade-up">
      <steps-box />
    </div>
    <div v-else>
      <h1 v-if="isLondon" class="home__title">Our chefs</h1>
      <div v-if="isLondon" class="home__sellers">
        <div v-for="(seller, index) in sellers" :key="`seller__${index}`">
          <nuxt-link
            :to="
              getObjVal(seller.custom_fields, '12910') === 'Yes'
                ? `/sellers/${seller.store_name_handle}`
                : ''
            "
          >
            <image-list
              v-if="seller.active"
              data-aos="fade-up"
              :image-title="seller.sp_store_name"
              :image-subtitle="getObjVal(seller.custom_fields, '12485')"
              :profile-image="seller.store_logo"
              :background-image="seller.shop_logo"
            />
          </nuxt-link>
        </div>
      </div>
      <div v-else class="home__error">
        <h4 class="home__error--sorry">
          Sorry we are not delivering to this area yet, please check in again
          soon.
        </h4>
      </div>
    </div>
    <dynamic-modal
      v-if="!isLondon && showModal"
      class="home__modal"
      @closeModal="closeModal"
    >
      <template v-slot:body>
        <join-form
          :customer="true"
          title="Coming Soon"
          body="We're working on it... We will notify you as soon as we arrive!"
        />
      </template>
    </dynamic-modal>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Home',
  data: () => ({
    cuisine: '12485',
    showModal: true,
  }),
  computed: {
    ...mapState(['sellers', 'formattedAddress', 'checkoutInfo']),
    isLondon() {
      return (
        (this.formattedAddress !== '' &&
          this.formattedAddress.includes('London')) ||
        this.formattedAddress === ''
      )
    },
  },
  watch: {
    isLondon(to) {
      if (!to) this.showModal = true
    },
  },
  methods: {
    ...mapMutations({
      setShippingAddress: 'SET_SHIPPING_ADDRESS',
    }),
    getObjVal(obj, id) {
      const parsed = JSON.parse(obj)
      return obj && parsed[id] && parsed[id].value
    },
    updateShippingAddress(location) {
      this.setShippingAddress(location)
    },
    closeModal() {
      this.showModal = false
    },
    hyphenateString(str) {
      return str.replace(/\s+/g, '-').toLowerCase()
    },
  },
}
</script>

<style lang="scss">
$desktop: 1024px;
$tablet: 768px;
$mobile: 600px;

.home {
  display: inline-block;
  width: 100%;
  margin-bottom: 130px;
  @media (max-width: $tablet) {
    margin-bottom: 280px;
  }
  &__hero {
    margin-top: 70px;
    padding: 200px 5%;
    width: 90%;
    background-image: url('~/assets/images/hero.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    z-index: -999;
    @media (max-width: $desktop) {
      padding: 50px 5%;
      width: 90%;
      display: block;
      height: 800px;
      background-position: top;
    }
    &--left {
      width: 50%;
      padding: 0 5%;
      @media (max-width: $desktop) {
        width: 90%;
        padding: 50px 5%;
        text-align: center;
      }
      .main-title,
      .main-body {
        color: var(--color-white-1);
      }
      .main-body {
        font-size: 24px;
        margin-top: 15px;
        font-family: 'GalanoGrotesque-Medium', sans-serif;
      }
    }
    &--right {
      width: 50%;
      padding: 0 5%;
      @media (max-width: $desktop) {
        padding: 0;
        width: 100%;
      }
    }
  }
  &__sellers,
  &__steps,
  &__error {
    padding: 50px 5%;
    position: relative;
    margin: 0 auto;
    width: 100%;
    display: inline-block;
    &--title {
      color: var(--color-pink-1);
      margin: 0 auto 20px;
    }
  }
  &__error {
    background-color: var(--color-purple-2);
    &--sorry {
      padding: 20px 5%;
      text-align: center;
      width: 80%;
    }
  }
  &__title {
    color: var(--color-pink-1);
    margin: 40px auto -20px;
    text-align: center;
  }
}
</style>
