<template>
  <div class="location-box">
    <img class="location-box__logo" src="~/assets/images/popup-pink.png" />
    <p class="location-box__body">
      We're delivering London's best home cook's food straight to you door.
    </p>
    <div class="location-box__search">
      <text-input
        class="location-box__search--field"
        width="95%"
        title="Postcode"
        :show-title="false"
        :place-holder="postcodeValue || 'Enter your postcode...'"
        :show-error="!isValidPostcode && isPostcodePopulated"
        @inputValue="updatePostcode"
      />
      <dynamic-button
        class="location-box__search--button"
        width="50px"
        icon="search"
        color="pink"
        height="50px"
        @clickEvent="addPostcodeCookie"
      />
    </div>
  </div>
</template>

<script>
import { postcodeValidator } from 'postcode-validator'
export default {
  name: 'LocationBox',
  data: () => ({
    showPostcodeError: false,
    postcodeValue: '',
  }),
  computed: {
    isValidPostcode() {
      return (
        postcodeValidator(this.postcodeValue, 'GB') && this.postcodeValue !== ''
      )
    },
    isPostcodePopulated() {
      return this.postcodeValue !== ''
    },
  },
  mounted() {
    if (this.$cookies.get('customer_location'))
      this.postcodeValue = this.$cookies.get('customer_location')
  },
  methods: {
    updatePostcode(postcode) {
      this.postcodeValue = postcode
    },
    addPostcodeCookie() {
      if (this.isValidPostcode && this.isPostcodePopulated) {
        this.$cookies.set('customer_location', this.postcodeValue)
        this.$emit('postcodeAdded', true)
        // const autocomplete = new this.$google.maps.places.Autocomplete(
        //   this.inputValue,
        //   {
        //     types: ['geocode'],
        //   }
        // )
        // console.log(autocomplete)
      }
    },
  },
}
</script>

<style lang="scss">
$desktop: 1024px;
$tablet: 768px;
$mobile: 600px;

.location-box {
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
    color: var(--color-black-1);
    margin: 30px 0;
    font-size: 18px;
  }
  &__search {
    display: flex;
    margin-bottom: 20px;
    &--field {
      width: 100%;
    }
    &--button {
      margin-left: 15px;
    }
  }
  &__error {
    color: var(--color-pink-1);
    font-weight: 300;
    margin-top: 10px;
  }
}
</style>
