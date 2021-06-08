<template>
  <div class="text-container">
    <span v-if="isTitleVisible" class="text-container__title"
      >{{ title }}
      <p v-if="isRequired">*</p></span
    >
    <input
      v-if="addressFinder"
      ref="searchTextField"
      :value="value"
      :style="`width: ${width}`"
      class="text-container__input"
      :class="isUppercase && 'uppercase'"
      :placeholder="placeHolder"
      @change="getAddressData"
    />

    <input
      v-else
      :id="dynamicId"
      v-model="inputValue"
      :style="`width: ${width}`"
      class="text-container__input"
      :class="isUppercase && 'uppercase'"
      :placeholder="placeHolder"
      type="text"
      @change="returnValue"
    />
    <span v-if="showError" class="text-container__error"
      >Please enter a valid {{ title }}</span
    >
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    dynamicId: {
      type: String,
      default: '',
      required: false,
    },
    value: {
      type: String,
      default: '',
      required: false,
    },
    width: {
      type: String,
      default: '300px',
      required: false,
    },
    index: {
      type: Number,
      default: 0,
      required: false,
    },
    title: {
      type: String,
      default: '',
      required: false,
    },
    placeHolder: {
      type: String,
      default: 'Please enter some text',
      required: false,
    },
    isUppercase: {
      type: Boolean,
      default: false,
      required: false,
    },
    showError: {
      type: Boolean,
      default: false,
      required: false,
    },
    isRequired: {
      type: Boolean,
      default: false,
      required: false,
    },
    showTitle: {
      type: Boolean,
      default: true,
      required: false,
    },
    addressFinder: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  data: () => ({
    inputValue: '',
    autocomplete: '',
  }),
  computed: {
    isTitleVisible() {
      return this.title !== '' && this.showTitle
    },
  },
  mounted() {
    this.inputValue = this.value
    const input = this.$refs.searchTextField
    const options = {
      componentRestrictions: { country: 'gb' },
      types: ['geocode'],
    }
    // eslint-disable-next-line
    this.autocomplete = new google.maps.places.Autocomplete(input, options)
  },
  methods: {
    returnValue() {
      this.$emit('inputValue', this.inputValue)
    },
    getAddressData() {
      this.autocomplete.addListener('place_changed', () => {
        const place = this.autocomplete.getPlace()
        this.inputValue = place.formatted_address
        this.$emit('inputValue', place)
      })
    },
  },
  head() {
    return {
      script: [
        {
          src: `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&libraries=places`,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.text-container {
  &__input {
    cursor: text;
    position: relative;
    display: block;
    height: 47px;
    line-height: 3;
    border-radius: 5px;
    border: 1px solid var(--color-grey-1);
    background-color: var(--color-white-1);
    appearance: none;
    padding: 0 10px;
    color: var(--color-grey-1);
    font-family: 'GalanoGrotesque-Medium', sans-serif;
  }
  &__title,
  &__error {
    display: flex;
  }
  &__title {
    margin-bottom: 10px;
    color: var(--color-grey-1);
    p {
      color: var(--color-pink-1);
    }
  }
  &__error {
    margin-top: 10px;
    color: var(--color-pink-1);
  }
}
.uppercase {
  text-transform: uppercase;
}
</style>
