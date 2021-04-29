<template>
  <div class="text-container">
    <span v-if="showTitle" class="text-container__title">{{ title }}</span>
    <input
      v-model="inputValue"
      :style="`min-width: ${width}`"
      class="text-container__input"
      :class="isUppercase && 'uppercase'"
      :placeholder="placeHolder"
      type="text"
      @change="returnValue"
    />
  </div>
</template>

<script>
export default {
  namme: 'TextInput',
  props: {
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
  },
  data() {
    return {
      inputValue: '',
    }
  },
  computed: {
    showTitle() {
      return this.title !== ''
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
    cursor: pointer;
    position: relative;
    display: block;
    height: 43px;
    border: 1px solid var(--color-black-1);
    line-height: 3;
    border-radius: 4px;
    background-color: #ffffff;
    appearance: none;
    padding: 0 10px;
    color: var(--color-black-1);
    font-weight: 600;
  }
  &__title {
    min-height: 50px;
    padding: 10px;
    font-weight: 600;
  }
}
.uppercase {
  text-transform: uppercase;
}
</style>
