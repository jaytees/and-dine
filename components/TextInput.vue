<template>
  <div class="text-container">
    <span v-if="isTitleVisible" class="text-container__title"
      >{{ title }}
      <p v-if="isRequired">*</p></span
    >
    <input
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
  namme: 'TextInput',
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
  },
  data: () => ({
    inputValue: '',
  }),
  computed: {
    isTitleVisible() {
      return this.title !== '' && this.showTitle
    },
  },
  mounted() {
    this.inputValue = this.value
  },
  methods: {
    returnValue() {
      this.$emit('inputValue', this.inputValue)
    },
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
    background-color: var(--color-white-1);
    appearance: none;
    padding: 0 10px;
    color: var(--color-grey-1);
    font-family: 'Poppins', sans-serif;
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
