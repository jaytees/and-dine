<template>
  <div class="dropdown-container">
    <span v-if="title" class="dropdown-container__title">{{ title }}</span>
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
  },
  data() {
    return {
      selectedValue: '',
    }
  },
  watch: {
    selectedValue(to, from) {
      if (to !== from)
        this.$emit('selectedValue', { value: to, index: this.index })
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
    border: 1px solid #fff;
    height: 45px;
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
