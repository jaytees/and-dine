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
        :value="addressValue"
        :show-title="false"
        :autocomplete="true"
        :place-holder="'Start typing your address...'"
        @inputValue="updateAddress"
      />
      <dynamic-button
        class="location-box__search--button"
        width="70px"
        icon="location-arrow"
        color="pink"
        height="50px"
        @clickEvent="locatorButtonPressed"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LocationBox',
  data: () => ({
    addressValue: '',
  }),
  mounted() {
    if (this.$cookies.get('customer_location'))
      this.addressValue = this.$cookies.get('customer_location')
  },
  methods: {
    updateAddress(obj) {
      this.getStreetAddressFrom(obj.lat, obj.long)
    },
    locatorButtonPressed() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.getStreetAddressFrom(
            position.coords.latitude,
            position.coords.longitude
          )
        },
        (error) => {
          console.log(error.message)
        }
      )
    },
    async getStreetAddressFrom(lat, long) {
      try {
        const { data } = await this.$axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${process.env.GOOGLE_API_KEY}`
        )
        this.addressValue = data.results[0].formatted_address
        this.$cookies.set('customer_location', this.addressValue)
        this.$emit('addressAdded', true)
      } catch (error) {
        console.log(error.message)
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
  border-radius: 15px;
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
