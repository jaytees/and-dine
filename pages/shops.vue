<template>
  <section class="container">
    <div>{{ sellers }}</div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Shops',
  computed: {
    ...mapState(['sellers']),
  },
  mounted() {
    this.getSellers()
  },
  methods: {
    ...mapActions(['getSellers']),
  },
}
</script>
