<template>
  <section class="about">
    <div class="about__hero"></div>
    <h1 class="about__title">Real People, Real Food.</h1>
    <div class="about__column">
      <div class="about__column--text">
        <p>
          <span>&Dine</span> is a marketplace platform connecting talented home
          chefs with customers to process and deliver orders of authentic home
          made meals. All of our home chefs are trained and certified to provide
          a safe and trusted method of ordering.
        </p>
      </div>
      <div class="about__column--image">
        <img src="~assets/images/woman-about.png" />
      </div>
    </div>
    <div class="about__column">
      <div class="about__column--image">
        <img src="~assets/images/couple-about.png" />
      </div>
      <div class="about__column--text">
        <p>
          Anyone who is passionate about cooking can apply to sell through
          &Dine. Whether you are an eager home cook with no professional kitchen
          experience or a trained chef looking for a new challenge, our team can
          help you access the tools and resources needed to prepare food safely
          and share your passion for cooking food with your community.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  head() {
    return {
      title: 'About Us',
      meta: [
        {
          hid: '&Dine About Us',
          name: 'Real People, Real Food.',
          content:
            '&Dine is a marketplace platform connecting talented home chefs with customers to process and deliver orders of authentic home made meals.',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
$desktop: 1024px;
$tablet: 768px;
$mobile: 600px;

.about {
  margin-bottom: 200px;
  @media (max-width: $tablet) {
    margin-bottom: 300px;
  }
  &__hero {
    margin-top: 70px;
    animation: fadeIn 0.5s;
    width: 100%;
    background-image: url('~/assets/images/hero-about.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    z-index: -999;
    height: 500px;
    @media (max-width: $tablet) {
      height: 300px;
    }
  }
  &__title {
    color: var(--color-pink-1);
    margin: 40px auto 0;
    text-align: center;
  }
  &__column {
    display: flex;
    padding: 20px 5%;
    width: 90%;
    align-items: center;
    @media (max-width: $tablet) {
      display: -webkit-box;
      display: -moz-box;
      display: box;
      -webkit-box-orient: vertical;
      -moz-box-orient: vertical;
      box-orient: vertical;
      width: 100%;
      padding: 0;
    }
    &--image,
    &--text {
      width: 50%;
      padding: 50px;
      @media (max-width: $tablet) {
        padding: 20px 5%;
        width: 90%;
      }
      span {
        font-weight: 900;
      }
      img {
        width: 80%;
        border-radius: 15px;
      }
      img,
      p {
        @media (max-width: $tablet) {
          width: 100%;
        }
      }
    }
    &--text {
      @media (max-width: $tablet) {
        -webkit-box-ordinal-group: 2;
      }
    }
  }
}
</style>
