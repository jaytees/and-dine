<template>
  <div class="navbar">
    <nuxt-link class="navbar__logo-pink" to="/">
      <img src="~/assets/images/logo-pink.png" />
    </nuxt-link>
    <nuxt-link class="navbar__logo-white" to="/">
      <img src="~/assets/images/logo.png" />
    </nuxt-link>
    <div class="navbar__items--icons-mobile">
      <fa :icon="['fas', 'shopping-cart']" @click="returnCartClick" />
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
        <fa :icon="['fas', 'shopping-cart']" @click="returnCartClick" />
        <!-- <fa :icon="['fas', 'user']" /> -->
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
    returnCartClick() {
      this.$emit('returnCartClick', true)
    },
  },
}
</script>

<style lang="scss">
$desktop: 1024px;
$tablet: 768px;
$mobile: 600px;

.navbar {
  width: 80%;
  padding: 0 10%;
  background-color: transparent;
  z-index: 999;
  position: absolute;
  font-family: 'Gotham-Bold', sans-serif;
  @media (max-width: $tablet) {
    width: 90%;
    padding: 20px 5%;
    background-color: var(--color-white-1);
  }
  &__logo-pink,
  &__logo-white {
    img {
      width: 110px;
      padding: 20px 0;
      @media (max-width: $tablet) {
        width: 70px;
        padding: 0;
      }
    }
  }
  &__logo-pink {
    display: none;
    @media (max-width: $tablet) {
      display: inline;
    }
  }
  &__logo-white {
    display: inline;
    @media (max-width: $tablet) {
      display: none;
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
    @media (max-width: $tablet) {
      display: none;
      width: 100%;
      background-color: var(--color-white-1);
      padding: 20px;
    }
    &--tab-wrapper {
      cursor: pointer;
      margin: 0 15px;
      .tab {
        padding: 5px;
        border-radius: 5px;
        color: var(--color-pink-1);
        @media (max-width: $tablet) {
          background-color: var(--color-white-1);
        }
        &:hover,
        .selected-link {
          background-color: var(--color-pink-1);
          color: var(--color-white-1);
          @media (max-width: $tablet) {
            opacity: 0.9;
          }
        }
      }
      .link {
        text-decoration: none;
        color: var(--color-white-1);
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        @media (max-width: $tablet) {
          color: var(--color-pink-1);
        }
      }
    }
    &--icons-desktop {
      @media (max-width: $tablet) {
        display: none;
      }
      cursor: pointer;
      text-align: right;
      svg {
        margin: 0 5px;
        font-size: 24px;
        color: var(--color-white-1);
        @media (max-width: $tablet) {
          color: var(--color-pink-1);
        }
      }
      svg:hover {
        color: var(--color-pink-1);
        @media (max-width: $tablet) {
          opacity: 0.9;
        }
      }
    }
    &--icons-mobile {
      @media (min-width: $tablet) {
        display: none;
      }
      cursor: pointer;
      float: right;
      svg {
        margin: 0 5px;
        font-size: 24px;
        color: var(--color-pink-1);
      }
      svg:hover {
        opacity: 0.9;
      }
    }
  }
}
</style>
