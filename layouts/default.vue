<template>
  <div>
    <nav-bar :navigation="navigationItems" />
    <nuxt />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Default',
  async fetch() {
    const data = await fetch(`${process.env.STOREFRONT_URL}/sellers.json`, {
      headers: {
        Authorization: process.env.STOREFRONT_BEARER,
      },
    }).then((res) => res.json())
    this.setSellers(data.sellers)
  },
  fetchOnServer: true,
  computed: {
    ...mapState(['navigationItems']),
  },
  methods: {
    ...mapMutations({
      setSellers: 'SET_SELLERS',
    }),
  },
}
</script>
