<template>
  <section class="join">
    <div class="join__hero">
      <div class="join__hero--left">
        <join-form />
      </div>
      <div class="join__hero--right">
        <h1 class="main-title">Cook with us.</h1>
        <h3 class="main-body">
          Sell from your kitchen and earn extra income, with hours that suit.
          Partner with us today. you.
        </h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Join',
}
</script>

<style lang="scss">
$desktop: 1024px;
$tablet: 768px;
$mobile: 600px;

.join {
  &__hero {
    padding: 200px 5%;
    width: 90%;
    background-image: url('~/assets/images/hero-join.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    z-index: -999;
    @media (max-width: $desktop) {
      padding: 50px 5%;
      width: 90%;
      display: -webkit-box;
      display: -moz-box;
      display: box;
      -webkit-box-orient: vertical;
      -moz-box-orient: vertical;
      box-orient: vertical;
      background-position: top;
    }
    &--right {
      animation: fadeIn 0.5s;
      width: 50%;
      padding: 0 5%;
      @media (max-width: $desktop) {
        -webkit-box-ordinal-group: 1;
        animation: fadeIn 0.5s;
        width: 90%;
        padding: 50px 5%;
        text-align: center;
        .main-title {
          font-size: 46px;
        }
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
    &--left {
      animation: fadeIn 0.5s;
      width: 50%;
      padding: 0 5%;
      @media (max-width: $desktop) {
        -webkit-box-ordinal-group: 2;
        animation: fadeIn 0.5s;
        padding: 0 5%;
        width: 90%;
      }
    }
  }
}
</style>
