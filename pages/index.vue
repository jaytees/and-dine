<template>
  <section class="home">
    <div class="home__hero">
      <div class="home__hero--left"></div>
      <div class="home__hero--right"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  methods: {},
}
</script>

<style lang="scss">
.home {
  &__hero {
    margin-top: -125px;
    width: 100%;
    &--left,
    &--right {
      width: 50%;
    }
    &--left {
      background-image: url('~assets/images/yellow-background.png');
      height: 500px;
    }
    &--right {
    }
  }
}
</style>
