<template>
  <div class="footer box-shadow">
    <div class="footer__top">
      <div class="footer__top--head">
        <nuxt-link to="/">
          <img src="~assets/images/logo.png" />
        </nuxt-link>
        <div class="footer__top--head logos">
          <a href="https://www.facebook.com/anddinecooking">
            <fa :icon="['fab', 'facebook']" />
          </a>
          <a href="https://www.instagram.com/anddinecooking">
            <fa :icon="['fab', 'instagram']" />
          </a>
          <a href="https://twitter.com/anddinecooking">
            <fa :icon="['fab', 'twitter']" />
          </a>
        </div>
      </div>
      <div class="footer__top--column">
        <div class="footer__top--column links">
          <h3>Join</h3>
          <nuxt-link to="/join">Become a chef</nuxt-link>
        </div>
      </div>
      <div class="footer__top--column">
        <div class="footer__top--column links">
          <h3>Who we are</h3>
          <nuxt-link to="/about">About us</nuxt-link>
        </div>
      </div>
      <div class="footer__top--column">
        <div class="footer__top--column links">
          <h3>Join</h3>
          <a href="mailto:hello@anddine.co.uk">Email us</a>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <fa :icon="['fas', 'copyright']" /><span>&Dine2021</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss">
$desktop: 1024px;
$tablet: 768px;
$mobile: 600px;

.footer {
  width: 90%;
  padding: 10px 5%;
  background-color: var(--color-pink-1);
  z-index: 999;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  bottom: 0;
  @media (max-width: $tablet) {
    padding: 20px 5%;
  }
  &__top {
    display: flex;
    align-items: center;
    @media (max-width: $tablet) {
      display: block;
      text-align: center;
    }
    &--column {
      width: 22%;
      display: inline;
      @media (max-width: $tablet) {
        display: block;
        width: 100%;
      }
      .links {
        a,
        h3 {
          color: var(--color-white-1);
        }
        a {
          font-weight: 300;
          text-decoration: none;
          cursor: pointer;
          &:hover {
            opacity: 0.9;
            transform: scale(1.1);
            text-decoration: underline;
          }
        }
        h3 {
          @media (max-width: $tablet) {
            display: none;
          }
        }
      }
    }
    &--head {
      display: flex;
      width: 34%;
      align-items: center;
      @media (max-width: $tablet) {
        width: 100%;
        display: block;
      }
      img {
        width: 110px;
        cursor: pointer;
        &:hover {
          opacity: 0.9;
          transform: scale(1.1);
        }
      }
      .logos {
        margin-left: 10px;
        @media (max-width: $tablet) {
          margin-left: 0;
        }
        svg {
          font-size: 25px;
          color: var(--color-white-1);
          text-align: center;
          margin: 20px 10px;
          cursor: pointer;
          &:hover {
            opacity: 0.9;
            transform: scale(1.1);
          }
        }
      }
    }
  }

  &__bottom {
    border-top: 2px solid var(--color-white-1);
    padding: 10px 0 0;
    margin: 10px 0 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: $tablet) {
      justify-content: center;
    }
    svg {
      font-size: 18px;
      color: var(--color-white-1);
      margin-right: 5px;
    }
    span {
      color: var(--color-white-1);
    }
  }
}
</style>
