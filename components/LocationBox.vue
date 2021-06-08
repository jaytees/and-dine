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
        :value="formattedAddress"
        :show-title="false"
        :address-finder="true"
        :place-holder="'Start typing your address...'"
        @inputValue="updateAddress"
      />
      <dynamic-button
        class="location-box__search--button"
        width="70px"
        :icon="loading ? 'spinner' : 'location-arrow'"
        :spinning="loading"
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
  props: {
    formattedAddress: {
      type: String,
      default: '',
      required: false,
    },
  },
  data: () => ({
    loading: false,
  }),
  methods: {
    updateAddress(address) {
      this.setLocation(address)
    },
    locatorButtonPressed() {
      this.loading = true
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
        this.setLocation(data.results[0])
        this.loading = false
      } catch (error) {
        console.log(error.message)
      }
    },
    setLocation(value) {
      this.$cookies.set('customer_location', value)
      this.$emit('addressChanged', value)
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
  &__logo {
    width: 200px;
    margin: 0 auto;
    display: flex;
  }
  &__body {
    color: var(--color-black-1);
    margin: 30px 0;
    font-size: 18px;
    @media (max-width: $desktop) {
      text-align: center;
    }
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
