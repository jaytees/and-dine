<template>
  <div class="dropdown-container">
    <span v-if="title" class="dropdown-container__title"
      >{{ title }}
      <p v-if="isRequired">*</p></span
    >
    <select
      v-model="selectedValue"
      :style="`width: ${width}`"
      class="dropdown-container__select"
    >
      <option value="">Please select and option</option>
      <option
        v-for="(option, optionIndex) in options"
        :key="`option_${optionIndex}`"
        :value="option"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'DropDown',
  props: {
    selected: {
      type: String,
      default: '',
      required: false,
    },
    width: {
      type: String,
      default: '320px',
      required: false,
    },
    index: {
      type: Number,
      default: 0,
      required: false,
    },
    title: {
      type: String || Boolean,
      default: false,
      required: false,
    },
    options: {
      type: Array,
      default: () => [],
      required: true,
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
  },
  data: () => ({
    selectedValue: '',
  }),
  watch: {
    selectedValue(to, from) {
      if (to !== from) this.$emit('selectedValue', to)
    },
    selected(to, from) {
      this.selectedValue = to
    },
  },
  mounted() {
    this.selectedValue = this.selected
  },
}
</script>

<style lang="scss">
.dropdown-container {
  &__select {
    cursor: pointer;
    position: relative;
    display: block;
    height: 50px;
    line-height: 3;
    border-radius: 5px;
    background-color: var(--color-white-1);
    appearance: none;
    padding: 0 10px;
    color: var(--color-grey-1);
    border: 2px solid;
    font-family: 'Poppins', sans-serif;
  }
  &__title {
    padding: 10px 0;
    display: flex;
    color: var(--color-grey-1);
    p {
      color: var(--color-pink-1);
    }
  }
}
</style>
