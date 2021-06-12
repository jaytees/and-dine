<template>
  <div class="location-box box-shadow">
    <img class="location-box__logo" src="~/assets/images/popup-pink.png" />
    <p class="location-box__body">
      We're delivering London's best home cook's food straight to you door.
    </p>
    <div class="location-box__search">
      <input
        ref="searchTextField"
        :value="formattedAddress"
        class="location-box__search--input"
        placeholder="Enter your address..."
        @keydown="getAddressData"
      />
      <dynamic-button
        class="location-box__search--location-button"
        width="20px"
        :icon="locationLoading ? 'spinner' : 'location-arrow'"
        :spinning="locationLoading"
        color="transparent"
        height="20px"
        @clickEvent="locatorButtonPressed"
      />
      <dynamic-button
        class="location-box__search--button"
        width="70px"
        icon="search"
        color="pink"
        height="48px"
        @clickEvent="getAddressData"
      />
    </div>
    <p v-if="showError" class="location-box__error">
      Please enter a valid address
    </p>
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
    locationLoading: false,
    autocomplete: '',
    showError: false,
  }),
  mounted() {
    const input = this.$refs.searchTextField
    const options = {
      componentRestrictions: { country: 'gb' },
      types: ['geocode'],
      fields: ['address_component', 'formatted_address'],
    }
    // eslint-disable-next-line
    this.autocomplete = new this.$google.maps.places.Autocomplete(
      input,
      options
    )
  },
  methods: {
    locatorButtonPressed() {
      this.locationLoading = true
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.getStreetAddressFrom(
            position.coords.latitude,
            position.coords.longitude
          )
        },
        (error) => {
          this.locationLoading = false
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
        this.locationLoading = false
      } catch (error) {
        console.log(error.message)
      }
    },
    setLocation(value) {
      this.showError = false
      this.$cookies.set('customer_location', value)
      this.$emit('addressChanged', value)
    },
    getAddressData() {
      if (this.$refs.searchTextField.value !== this.formattedAddress)
        this.showError = true
      this.autocomplete.addListener('place_changed', () => {
        const place = this.autocomplete.getPlace()
        this.inputValue = place.formatted_address
        this.setLocation(place)
      })
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
  &__error {
    color: var(--color-pink-1);
  }
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
    &--input {
      width: 100%;
      height: 47px;
      cursor: text;
      position: relative;
      display: block;
      height: 47px;
      line-height: 3;
      border-radius: 5px;
      border: 1px solid var(--color-grey-2);
      background-color: var(--color-white-1);
      appearance: none;
      padding: 0 10px;
      color: var(--color-grey-1);
      font-family: 'GalanoGrotesque-Medium', sans-serif;
      display: block;
      overflow: hidden;
      padding-right: 20%;
    }
    &--button {
      margin-left: 15px;
    }
    &--location-button {
      margin: 0 25px 0 -50px;
      box-shadow: none;
      z-index: 999;
      @media (max-width: $tablet) {
        margin: 0 15px 0 -40px;
      }
      @media (max-width: $desktop) {
        margin: 0 20px 0 -50px;
      }
    }
  }
  &__error {
    color: var(--color-pink-1);
    font-weight: 300;
    margin-top: 10px;
    @media (max-width: $desktop) {
      text-align: center;
    }
  }
}
</style>
