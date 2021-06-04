<template>
  <section class="home">
    <div class="home__hero">
      <div class="home__hero--left">
        <h1 class="main-title">Real people, real food.</h1>
        <h3 class="main-body">
          A new way to experience authentic home cooking.
        </h3>
      </div>
      <div class="home__hero--right">
        <location-box
          :class="poscodeHighlight && 'highlight'"
          @addressAdded="removeHighlight"
        />
      </div>
    </div>
    <div class="home__sellers">
      <div v-for="(seller, index) in sellers" :key="`seller__${index}`">
        <div v-if="!addressValue" @click="scrollToTop">
          <image-list
            :image-title="seller.sp_store_name"
            :image-subtitle="getObjVal(seller.custom_fields)"
            :profile-image="seller.active ? seller.store_logo : ''"
            :background-image="seller.active ? seller.shop_logo : ''"
          />
        </div>
        <nuxt-link v-else :to="seller.active ? `/sellers/${seller.id}` : ''">
          <image-list
            :image-title="seller.sp_store_name"
            :image-subtitle="getObjVal(seller.custom_fields)"
            :profile-image="seller.active ? seller.store_logo : ''"
            :background-image="seller.active ? seller.shop_logo : ''"
          />
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data: () => ({
    addressValue: false,
    cuisine: '12485',
    poscodeHighlight: false,
  }),
  computed: {
    ...mapState(['sellers']),
  },
  mounted() {
    this.addressValue = this.$cookies.get('customer_location')
  },
  methods: {
    goToPage(link) {
      this.$router.push(`sellers/${link.toString()}`)
    },
    getObjVal(obj) {
      const parsed = JSON.parse(obj)
      return obj && parsed['12485'].value
    },
    scrollToTop() {
      this.poscodeHighlight = true
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    },
    removeHighlight() {
      if (this.$cookies.get('customer_location')) {
        this.poscodeHighlight = false
        this.addressValue = this.$cookies.get('customer_location')
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
    animation: fadeIn 0.5s;
    padding: 200px 5%;
    width: 90%;
    background-image: url('~/assets/images/hero.jpg');
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
        font-family: 'Poppins', sans-serif;
        text-shadow: 2px 2px 8px var(--color-grey-1);
      }
    }
    &--right {
      animation: fadeIn 0.5s;
      width: 50%;
      padding: 0 5%;
      @media (max-width: $desktop) {
        padding: 0 5%;
        width: 90%;
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
}
</style>
