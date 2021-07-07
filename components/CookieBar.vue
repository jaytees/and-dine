<template>
  <section class="cookie-bar box-shadow">
    <div class="cookie-bar__desktop">
      <p class="cookie-bar__desktop--body">
        Here at <a>&Dine</a> we use cookies to give you the best experience
        possible. For more information, read our
        <a class="cookie-bar__desktop--body" @click="openPolicy"
          >Cookie Policy</a
        >
      </p>
      <dynamic-button
        class="cookie-bar__desktop--button"
        text="OK"
        width="250px"
        color="pink"
        @clickEvent="acceptCookies"
      />
    </div>
    <dynamic-modal
      v-if="showCookieModal"
      class="cookie-bar__mobile"
      @closeModal="closeCookieModal"
    >
      <template v-slot:body>
        <p class="cookie-bar__mobile--body">
          Here at <a>&Dine</a> we use cookies to give you the best experience
          possible. For more information, read our
          <a class="cookie-bar__mobile--body" @click="openPolicy"
            >Cookie Policy</a
          >
        </p>
        <dynamic-button
          class="cookie-bar__mobile--button"
          text="OK"
          width="100%"
          color="pink"
          @clickEvent="acceptCookies"
        />
      </template>
    </dynamic-modal>
    <dynamic-modal v-if="showModal" @closeModal="closeModal">
      <template v-slot:body>
        <h3>What are cookies?</h3>
        <p>
          Cookies and similar technologies are very small text documents or
          pieces of code that often contain a unique identification code. When
          you visit a website or use a mobile application, a computer asks your
          computer or mobile device for permission to save this file on your
          computer or mobile device and gain access to information. Information
          collected through cookies and similar technologies may include the
          date and time of the visit and how you use a particular website or
          mobile application.
        </p>
        <h3>Why do we use cookies?</h3>
        <p>
          Cookies make sure that during your visit of our online shop you remain
          logged in, all items remain stored in your shopping cart, you can shop
          safely and the website keeps running smoothly. The cookies also ensure
          that we can see how our website is used and how we can improve it.
          Furthermore, depending on your preferences our own cookies may be used
          to present you with targeted advertisements that match your personal
          interests.
        </p>
        <h3>What type of cookies do we use?</h3>
        <h4>Necessary cookies</h4>
        <p>
          These cookies are necessary for the website to function properly. Some
          of the following actions can be performed by using these cookies.
        </p>
        <ul>
          <li>Store articles in a shopping cart for online purchases</li>
          <li>Save your cookie preferences for this website</li>
          <li>Saving language preferences</li>
          <li>
            Log in to our portal. We need to check whether you are logged in.
          </li>
        </ul>
        <h4>Performance cookies</h4>
        <p>
          These cookies are used to gather statistical information about the use
          of our website, also called analytics cookies. We use this data for
          performance and website optimisation.
        </p>
        <h4>Functional cookies</h4>
        <p>
          These cookies enable more functionality for our website visitors.
          These cookies can be set by our external service providers or our own
          website. The following functionalities may or may not be activated
          when you accept this category.
        </p>
        <ul>
          <li>Store address</li>
          <li>Watch online videos</li>
          <li>Social media sharing buttons</li>
          <li>Login to our website with social media</li>
        </ul>
        <h4>Advertising / tracking cookies</h4>
        <p>
          These cookies are set by external advertising partners and are used
          for profiling and tracking data across multiple websites. If you
          accept these cookies, we may show our advertisements on other websites
          based on your user profile and preferences. These cookies also save
          data about how many visitors have seen or clicked on our
          advertisements in order to optimise advertising campaigns.
        </p>
        <h4>How can I switch off or remove cookies?</h4>
        <p>
          You can choose to opt out of all but the necessary cookies. In the
          settings of the browser, you can change the settings to ensure that
          cookies will be blocked. Most browsers provide you with an explanation
          on how to do this in the so-called ‘help-function’. However, if you
          block the cookies, it is possible that you will not be able to enjoy
          all the technical features our website has to offer and it may
          negatively affect your user experience.
        </p>
        <dynamic-button
          class="cookie-bar__button"
          text="OK"
          width="100%"
          color="pink"
          @clickEvent="acceptCookies"
        />
      </template>
    </dynamic-modal>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'CookieBar',
  data: () => ({
    showModal: false,
    showCookieModal: true,
  }),
  methods: {
    ...mapMutations({
      setCookiesAccepted: 'SET_COOKIES_ACCEPTED',
    }),
    acceptCookies() {
      this.$cookies.set('cookies_accepted', true)
      this.setCookiesAccepted(true)
      this.closeCookieModal()
      this.closeModal()
    },
    openPolicy() {
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
    closeCookieModal() {
      this.showCookieModal = false
    },
  },
}
</script>

<style lang="scss">
$desktop: 1024px;
$tablet: 768px;
$mobile: 600px;

.cookie-bar {
  width: 100%;
  position: fixed;
  display: flex;
  bottom: 0;
  padding: 20px;
  background-color: var(--color-white-1);
  z-index: 9999;
  justify-content: space-evenly;
  align-items: center;
  &__desktop {
    display: flex;
    width: 90%;
    justify-content: space-between;
    &--body {
      a {
        cursor: pointer;
        &:hover {
          opacity: 0.9;
          text-decoration: underline;
        }
      }
    }
    @media (max-width: $desktop) {
      display: none;
    }
  }
  &__mobile {
    display: none;
    text-align: center;
    &--body {
      a {
        cursor: pointer;
        &:hover {
          opacity: 0.9;
          text-decoration: underline;
        }
      }
    }
    @media (max-width: $desktop) {
      display: flex;
    }
  }
}
</style>
