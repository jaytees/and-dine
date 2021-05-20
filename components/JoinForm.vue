<template>
  <div class="join-form">
    <img class="join-form__logo" src="~/assets/images/popup-pink.png" />
    <h3 v-if="response.message">{{ response.message }}</h3>
    <form v-else @submit.prevent="subscribe()">
      <h3 class="join-form__title">About you</h3>
      <h4 class="join-form__body">
        Please fill in the details below and our team will be in touch soon.
      </h4>
      <h4 class="join-form__required">All fields are required*</h4>
      <text-input
        title="First name"
        class="join-form__full--field"
        width="95%"
        place-holder="Enter your first name..."
        :is-required="true"
        @inputValue="updateFirstName"
      />
      <text-input
        title="Last name"
        class="join-form__full--field"
        width="95%"
        place-holder="Enter your last name..."
        :is-required="true"
        @inputValue="updateLastName"
      />
      <div class="join-form__full"></div>
      <text-input
        title="Email"
        class="join-form__full--field"
        width="95%"
        place-holder="Enter your email..."
        :show-error="!isValidEmail && areFieldsPopulated"
        :is-required="true"
        @inputValue="updateEmail"
      />
      <text-input
        title="Phone number"
        class="join-form__full--field"
        width="95%"
        place-holder="Enter your phone number..."
        :show-error="!isValidPhoneNumber && areFieldsPopulated"
        :is-required="true"
        @inputValue="updatePhoneNumber"
      />
      <text-input
        title="Postcode"
        class="join-form__full--field"
        width="95%"
        place-holder="Enter your postcode..."
        :show-error="!isValidPostcode && areFieldsPopulated"
        :is-required="true"
        @inputValue="updatePostcode"
      />
      <drop-down
        title="Cuisine"
        class="join-form__full--field"
        width="100%"
        :options="productTypes"
        :is-required="true"
        @selectedValue="updateCuisine"
      />
      <dynamic-button
        class="join-form__full--button"
        width="100%"
        text="Subscribe"
        color="pink"
        height="50px"
        :submit="true"
        :disabled="!disableButton"
      />
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'JoinForm',
  props: {
    productTypes: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data: () => ({
    formData: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      postcode: '',
      cuisine: '',
    },
    response: {
      status: '',
      message: false,
    },
  }),
  computed: {
    isValidPostcode() {
      const postcodeRegEx = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i
      return postcodeRegEx.test(this.formData.postcode)
    },
    isValidEmail() {
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return emailRegex.test(this.formData.email)
    },
    isValidPhoneNumber() {
      const phoneNumberRegex = /^(?:(?:00)?44|0)7(?:[45789]\d{2}|624)\d{6}$/
      return phoneNumberRegex.test(this.formData.phoneNumber)
    },
    areFieldsPopulated() {
      return (
        this.formData.firstName !== '' &&
        this.formData.lastName !== '' &&
        this.formData.email !== '' &&
        this.formData.phoneNumber !== '' &&
        this.formData.postcode !== '' &&
        this.formData.cuisine !== ''
      )
    },
    disableButton() {
      return (
        this.areFieldsPopulated &&
        this.isValidPostcode &&
        this.isValidEmail &&
        this.isValidPhoneNumber
      )
    },
  },
  methods: {
    ...mapActions(['sendEmail']),
    updateFirstName(firstName) {
      this.formData.firstName = firstName
    },
    updateLastName(lastName) {
      this.formData.lastName = lastName
    },
    updateEmail(email) {
      this.formData.email = email
    },
    updatePhoneNumber(phoneNumber) {
      this.formData.phoneNumber = phoneNumber
    },
    updatePostcode(postcode) {
      this.formData.postcode = postcode
    },
    updateCuisine(cuisine) {
      this.formData.cuisine = cuisine
    },
    async subscribe() {
      const formData = { ...this.formData }
      try {
        const { data, status } = await this.$axios.post(
          '/api/subscribe',
          formData
        )
        this.response.status = status
        this.response.message = `Thanks, ${data.email_address} is subscribed!`
      } catch (err) {
        console.log(err)
      }
    },
    // composeEmail() {
    //   const emailInfo = {
    //     firstName: this.firstName,
    //     lastName: this.lastName,
    //     email: this.email,
    //     phoneNumber: this.phoneNumber,
    //     postcode: this.postcode,
    //     cuisine: this.cuisine,
    //   }
    //   this.sendEmail(emailInfo)
    //     .then(() => this.showSuccess)
    //     .catch((err) => console.log(err))
    // },
  },
}
</script>

<style lang="scss">
$desktop: 1024px;
$tablet: 768px;
$mobile: 600px;

.join-form {
  background-color: var(--color-white-1);
  border-radius: 5px;
  padding: 30px;
  -webkit-box-shadow: 0px 5px 5px 0px var(--color-grey-2);
  -moz-box-shadow: 0px 5px 5px 0px var(--color-grey-2);
  box-shadow: 0px 5px 5px 0px var(--color-grey-2);
  &__logo {
    width: 200px;
    margin: 0 auto;
    display: flex;
  }
  &__body {
    color: var(--color-grey-1);
    margin: 0 0 30px 0;
  }
  &__required {
    color: var(--color-pink-1);
    margin: 0 0 10px 0;
  }
  &__half,
  &__full {
    &--field {
      margin-bottom: 20px;
    }
  }
  &__half {
    display: flex;
    &--field {
      width: 90%;
      &:first-child {
        margin-right: 5%;
      }
    }
  }
  &__full {
    &--field {
      width: 100%;
    }
  }
  &__error {
    color: var(--color-pink-1);
    font-weight: 300;
    margin-top: 10px;
  }
}
</style>
