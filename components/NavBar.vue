<template>
  <div class="navbar">
    <nuxt-link class="navbar__logo-pink" to="/">
      <img src="~/assets/images/logo-pink.png" />
    </nuxt-link>
    <nuxt-link class="navbar__logo-white" to="/">
      <img src="~/assets/images/logo-pink.png" />
    </nuxt-link>
    <div class="navbar__items--icons-mobile">
      <fa
        class="burger"
        :icon="['fas', 'bars']"
        @click="showMobileNav = !showMobileNav"
      />
      <fa :icon="['fas', 'shopping-cart']" @click="returnCartClick" />
    </div>
    <ul
      class="navbar__items"
      :class="showMobileNav && 'show-nav animate__animated animate__fadeInDown'"
    >
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
      <li class="navbar__items--icons-desktop" @click="returnCartClick">
        <fa :icon="['fas', 'shopping-cart']" />
        <h3 v-if="showCount">{{ itemCount }}</h3>
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
      default: () => [],
      require: true,
    },
    itemCount: {
      type: Number,
      default: 0,
      require: true,
    },
  },
  data: () => ({
    navItems: [],
    showMobileNav: false,
  }),
  computed: {
    currentPage() {
      return this.$route.name
    },
    showCount() {
      return this.itemCount > 0
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
  background-color: var(--color-white-1);
  z-index: 999;
  position: absolute;
  -webkit-box-shadow: 0px 0px 2px 0px var(--color-grey-2);
  -moz-box-shadow: 0px 0px 2px 0px var(--color-grey-2);
  box-shadow: 0px 0px 2px 2px var(--color-grey-2);
  @media (max-width: $tablet) {
    width: 95%;
    padding: 20px 5%;
    height: 30px;
    background-color: var(--color-white-1);
  }
  &__logo-pink,
  &__logo-white {
    position: absolute;
    img {
      width: 110px;
      padding: 20px 0;
      @media (max-width: $tablet) {
        width: 70px;
        padding: 0;
      }
      &:hover {
        opacity: 0.9;
        transform: scale(1.1);
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
    @media (max-width: $tablet) {
      display: none;
    }
  }
  .show-nav {
    display: block;
  }
  &__items {
    float: right;
    display: flex;
    list-style-type: none;
    padding: 10px 0;
    @media (max-width: $tablet) {
      display: none;
      width: 100%;
      background-color: var(--color-white-1);
      padding: 20px 5%;
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
          @media (max-width: $tablet) {
            opacity: 0.9;
          }
          a {
            color: var(--color-white-1);
          }
        }
      }
      .link {
        text-decoration: none;
        color: var(--color-pink-1);
        font-size: 16px;
        cursor: pointer;
        @media (max-width: $tablet) {
          color: var(--color-pink-1);
        }
      }
    }
    &--icons-desktop {
      &:hover {
        opacity: 0.9;
        svg {
          color: var(--color-pink-1);
        }
        h3 {
          background-color: var(--color-white-1);
          color: var(--color-pink-1);
        }
      }
      @media (max-width: $tablet) {
        display: none;
      }
      cursor: pointer;
      text-align: right;
      svg {
        margin: 0 5px;
        font-size: 24px;
        color: var(--color-pink-1);
      }
      h3 {
        position: absolute;
        top: 15px;
        right: 9%;
        background-color: var(--color-pink-1);
        color: var(--color-white-1);
        border-radius: 50%;
        width: 24px;
        text-align: center;
        border: 2px solid;
        font-size: 15px;
      }
    }
    &--icons-mobile {
      cursor: pointer;
      float: right;
      padding-right: 15px;
      &:hover {
        opacity: 0.9;
        svg {
          color: var(--color-pink-1);
        }
        h3 {
          background-color: var(--color-pink-1);
          color: var(--color-white-1);
        }
      }
      @media (min-width: $tablet) {
        display: none;
      }
      svg {
        margin: 0 5px;
        font-size: 24px;
        color: var(--color-pink-1);
      }
      h3 {
        position: absolute;
        top: 12px;
        right: 12%;
        color: var(--color-white-1);
        background-color: var(--color-pink-1);
        border-radius: 50%;
        border: 2px solid var(--color-white-1);
        width: 20px;
        text-align: center;
        font-size: 15px;
      }
    }
  }
}
</style>
