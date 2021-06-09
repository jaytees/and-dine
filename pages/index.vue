<template>
  <section class="home">
    <div class="home__hero">
      <div class="home__hero--left">
        <h1 class="main-title">Real People, Real Food.</h1>
        <h3 class="main-body">
          A new way to experience authentic home cooking.
        </h3>
      </div>
      <div class="home__hero--right">
        <location-box
          :class="poscodeHighlight && 'highlight'"
          :formatted-address="formattedAddress"
          @addressChanged="updateShippingAddress"
        />
      </div>
    </div>
    <div v-if="isLondon" class="home__sellers">
      <div v-for="(seller, index) in sellers" :key="`seller__${index}`">
        <div v-if="!formattedAddress" @click="scrollToTop">
          <image-list
            v-if="seller.active"
            :image-title="seller.sp_store_name"
            :image-subtitle="getObjVal(seller.custom_fields, '12485')"
            :profile-image="seller.store_logo"
            :background-image="seller.shop_logo"
          />
        </div>
        <nuxt-link
          v-else
          :to="
            getObjVal(seller.custom_fields, '12910') === 'Yes'
              ? `/sellers/${seller.id}`
              : ''
          "
        >
          <image-list
            v-if="seller.active"
            :image-title="seller.sp_store_name"
            :image-subtitle="getObjVal(seller.custom_fields, '12485')"
            :profile-image="seller.store_logo"
            :background-image="seller.shop_logo"
          />
        </nuxt-link>
      </div>
    </div>
    <div v-else class="home__sellers">
      <h3>
        Sorry we are not delivering to this area yet, please check in again
        soon.
      </h3>
    </div>
    <dynamic-modal
      v-if="!isLondon && showModal"
      class="home__modal"
      @closeModal="closeModal"
    >
      <template v-slot:body>
        <join-form :customer="true" />
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
    poscodeHighlight: false,
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
    goToPage(link) {
      this.$router.push(`sellers/${link.toString()}`)
    },
    getObjVal(obj, id) {
      const parsed = JSON.parse(obj)
      return obj && parsed[id] && parsed[id].value
    },
    scrollToTop() {
      this.poscodeHighlight = true
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    },
    updateShippingAddress(location) {
      this.removeHighlight()
      this.setShippingAddress(location)
    },
    removeHighlight() {
      if (this.formattedAddress) {
        this.poscodeHighlight = false
      }
    },
    closeModal() {
      this.showModal = false
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
  margin-bottom: 200px;
  @media (max-width: $tablet) {
    margin-bottom: 300px;
  }
  &__hero {
    animation: fadeIn 0.5s;
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
      animation: fadeIn 0.5s;
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
        text-shadow: 2px 2px 8px var(--color-grey-1);
      }
      .main-body {
        font-size: 24px;
        margin-top: 15px;
        font-family: 'GalanoGrotesque-Medium', sans-serif;
      }
    }
    &--right {
      animation: fadeIn 0.5s;
      width: 50%;
      padding: 0 5%;
      @media (max-width: $desktop) {
        padding: 0;
        width: 100%;
      }
      .highlight {
        animation: bounce 1s;
      }
    }
  }
  &__sellers {
    animation: fadeIn 0.5s;
    padding: 50px 5%;
    position: relative;
    margin: 0 auto;
    width: 100%;
  }
  // &__modal {
  //   text-align: center;
  //   &--image {
  //     margin: 0 auto;
  //     width: 200px;
  //   }
  //   &--content {
  //     margin: 20px 0;
  //     border-top: 1px solid var(--color-grey-2);
  //     border-bottom: 1px solid var(--color-grey-2);
  //     p {
  //       margin: 10px 0;
  //     }
  //   }
  //   &--body {
  //     margin: 20px 0;
  //   }
  // }
}
</style>
