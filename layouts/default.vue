<template>
  <div>
    <nav-bar :navigation="navigationItems" />
    <nuxt />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Default',
  computed: {
    ...mapState(['navigationItems']),
  },
}
</script>

<style lang="scss" scoped></style>
