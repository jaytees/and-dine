<template>
  <div class="text-container">
    <span class="text-container__title">{{ title }}</span>
    <input
      v-model="inputValue"
      :style="`width: ${width}`"
      class="text-container__input"
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
  },
  data() {
    return {
      inputValue: '',
    }
  },
  mounted() {
    this.inputValue = this.value
  },
  methods: {
    returnValue() {
      this.$emit('inputValue', {
        title: this.title,
        value: this.inputValue,
        index: this.index,
      })
    },
  },
}
</script>

<style lang="scss">
.text-container {
  &__input {
    position: relative;
    display: block;
    height: 43px;
    border: 1px solid #fff;
    line-height: 3;
    border-radius: 4px;
    background-color: #ffffff;
    margin: 10px;
    appearance: none;
    padding: 0 10px;
    color: #2a3946;
    font-family: 'Poppins', sans-serif !important;
  }
  &__title {
    min-height: 50px;
    padding: 10px;
    font-weight: 600;
  }
}
</style>
