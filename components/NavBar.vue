<template>
  <div class="navbar">
    <img
      v-if="$device.isMobile"
      class="navbar__logo"
      src="~/assets/images/logo-pink.png"
    />
    <img v-else class="navbar__logo" src="~/assets/images/logo.png" />
    <div class="navbar__items--icons-mobile">
      <a href="https://anddine.myshopify.com/cart">
        <fa :icon="['fas', 'shopping-cart']" />
      </a>
      <a href="https://anddine.myshopify.com/account/login">
        <fa :icon="['fas', 'user']" />
      </a>
      <fa
        class="burger"
        :icon="['fas', 'bars']"
        @click="showMobileNav = !showMobileNav"
      />
    </div>
    <ul class="navbar__items" :class="showMobileNav && 'show-nav'">
      <li
        v-for="(item, index) in navItems"
        :key="`tab_${index}`"
        class="navbar__items--tab-wrapper"
      >
        <div
          v-if="item.value !== ''"
          class="tab"
          :class="item.name === currentPage && 'selected-link'"
        >
          <a v-if="item.external" class="link" :href="item.external">
            <span>{{ item.value }}</span>
          </a>
          <nuxt-link v-else class="link" :to="item.link">
            <span>{{ item.value }}</span>
          </nuxt-link>
        </div>
      </li>
      <li class="navbar__items--icons-desktop">
        <a href="https://anddine.myshopify.com/cart">
          <fa :icon="['fas', 'shopping-cart']" />
        </a>
        <a href="https://anddine.myshopify.com/account/login">
          <fa :icon="['fas', 'user']" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    navigation: {
      type: Array,
      require: true,
      default: () => [],
    },
  },
  data() {
    return {
      navItems: [],
      showMobileNav: false,
    }
  },
  computed: {
    currentPage() {
      return this.$route.name
    },
  },
  mounted() {
    this.navItems = this.navigation
  },
  methods: {
    showNav() {
      this.showMobileNav = true
    },
  },
}
</script>

<style lang="scss">
$desktop: 1024px;
$tablet: 768px;
$mobile: 600px;

.navbar {
  padding: 0 10%;
  background-color: transparent;
  @media (max-width: $desktop) {
    background-color: var(--color-white-1);
  }
  z-index: 999;
  @media (max-width: $desktop) {
    padding: 20px;
  }
  &__logo {
    width: 110px;
    position: absolute;
    padding: 20px 0;
    @media (max-width: $desktop) {
      width: 70px;
      padding: 0;
    }
  }
  .show-nav {
    display: block;
    animation: fadeIn 0.5s;
  }
  &__items {
    float: right;
    display: flex;
    list-style-type: none;
    padding: 20px 0;
    animation: fadeOut 0.5s;
    @media (max-width: $desktop) {
      display: none;
      width: 100%;
      background-color: var(--color-white-1);
      padding: 20px;
      margin-right: -20px;
    }
    &--tab-wrapper {
      cursor: pointer;
      margin: 0 15px;
      .tab {
        padding: 5px;
        border-radius: 10px;
        @media (max-width: $desktop) {
          background-color: var(--color-white-1);
        }
        &:hover,
        .selected-link {
          background-color: var(--color-pink-1);
          @media (max-width: $desktop) {
            opacity: 0.8;
          }
        }
      }
      .link {
        text-decoration: none;
        color: var(--color-white-1);
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        @media (max-width: $desktop) {
          color: var(--color-pink-1);
        }
      }
    }
    &--icons-desktop {
      @media (max-width: $desktop) {
        display: none;
      }
      cursor: pointer;
      text-align: right;
      svg {
        margin: 0 5px;
        font-size: 24px;
        color: var(--color-white-1);
        @media (max-width: $desktop) {
          color: var(--color-pink-1);
        }
      }
      svg:hover {
        color: var(--color-pink-1);
        @media (max-width: $desktop) {
          opacity: 0.8;
        }
      }
    }
    &--icons-mobile {
      @media (min-width: $tablet) {
        display: none;
      }
      cursor: pointer;
      text-align: right;
      svg {
        margin: 0 5px;
        font-size: 24px;
        color: var(--color-pink-1);
      }
      svg:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
