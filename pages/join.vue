<template>
  <section class="join">
    <social-head
      title="Cook with us"
      description="Sell from your kitchen and earn extra income, with hours that suit. Partner with us today."
      image="~/assets/images/logo-pink.png"
    />
    <div class="join__hero animate__animated animate__fadeIn">
      <div class="join__hero--left animate__animated animate__fadeInUp">
        <join-form />
      </div>
      <div class="join__hero--right animate__animated animate__fadeInUp">
        <h1 class="main-title text-shadow">Cook with us.</h1>
        <h3 class="main-body text-shadow">
          Sell from your kitchen and earn extra income, with hours that suit.
          Partner with us today.
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
  @media (max-width: $tablet) {
    margin-bottom: 250px;
  }
  &__hero {
    margin-top: 70px;
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
      flex-wrap: wrap;
    }
    &--right {
      width: 50%;
      padding: 0 5%;
      @media (max-width: $desktop) {
        -webkit-box-ordinal-group: 1;
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
      }
      .main-body {
        font-size: 24px;
        margin-top: 15px;
        font-family: 'GalanoGrotesque-Medium', sans-serif;
      }
    }
    &--left {
      width: 50%;
      padding: 0 5%;
      @media (max-width: $desktop) {
        -webkit-box-ordinal-group: 2;
        padding: 0;
        width: 100%;
      }
    }
  }
}
</style>
