<template>
  <div class="navbar">
    <!-- <img class="navbar__logo" src="~/assets/images/logo.png" /> -->
    <ul class="navbar__items">
      <li
        v-for="(item, index) in navItems"
        :key="`tab_${index}`"
        class="navbar__items--tab"
      >
        <a
          v-if="item.external"
          class="link"
          :href="item.external"
          :class="item.name === currentPage && 'selected-link'"
        >
          {{ item.value }}
        </a>
        <nuxt-link
          v-else
          class="link"
          :to="item.link"
          :class="item.name === currentPage && 'selected-link'"
        >
          {{ item.value }}
        </nuxt-link>
      </li>
      <li class="navbar__items--icon">
        <a href="https://anddine.myshopify.com/cart">
          <fa :icon="['fas', 'shopping-cart']" />
        </a>

        <fa :icon="['fas', 'user']" />
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
}
</script>

<style lang="scss">
$desktop: 1024px;
$tablet: 768px;
$mobile: 600px;

.navbar {
  display: list-item;
  padding: 20px 32px;
  background-color: transparent;
  z-index: 999;
  &__logo {
    width: 150px;
  }
  &__items {
    float: right;
    display: flex;
    list-style-type: none;
    &--tab {
      cursor: pointer;
      margin: 0 15px;

      .link {
        text-decoration: none;
        color: var(--colour-pink-1);
        font-size: 16px;
        font-weight: 600;

        &:hover {
          color: var(--colour-white-1);
        }
        cursor: pointer;
      }
      .selected-link {
        border-bottom: 3px solid var(--colour-white-1);
        color: var(--colour-white-1);
      }
    }
    &--icon {
      width: 100px;
      cursor: pointer;
      text-align: right;
      svg {
        margin: 0 5px;
        color: var(--colour-pink-1);
      }
      svg:hover {
        color: var(--colour-white-1);
      }
    }
  }
}
</style>
