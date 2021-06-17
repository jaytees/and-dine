<template>
  <section class="subscribe">
    <social-head
      title="Get the latest updates."
      description="Hear about the latest deals, offers and upcoming restaurants on the platform."
      image="~/assets/images/logo-pink.png"
    />
    <div class="subscribe__hero animate__animated animate__fadeIn">
      <div class="subscribe__hero--left animate__animated animate__fadeInUp">
        <join-form :customer="true" />
      </div>
      <div class="subscribe__hero--right animate__animated animate__fadeInUp">
        <h1 class="main-title text-shadow">Get the latest updates.</h1>
        <h3 class="main-body text-shadow">
          Hear about the latest deals, offers and upcoming restaurants on the
          platform.
        </h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Subscribe',
}
</script>

<style lang="scss">
$desktop: 1024px;
$tablet: 768px;
$mobile: 600px;

.subscribe {
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
