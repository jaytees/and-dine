<template>
  <div class="checkbox-container">
    <ul class="checkbox-container__list">
      <li class="checkbox-container__list--item">
        <span>{{ title }}</span>
        <input
          v-model="checkboxValue"
          type="checkbox"
          :value="!checkboxValue"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CheckboxList',
  props: {
    value: {
      type: Boolean,
      default: false,
      required: false,
    },
    title: {
      type: String,
      default: '',
      required: true,
    },
    index: {
      type: Number,
      default: 0,
      required: false,
    },
  },
  data() {
    return {
      checkboxValue: false,
    }
  },
  watch: {
    value(to, from) {
      if (to !== from) this.checkboxValue = to
    },
    checkboxValue(to, from) {
      if (to !== from)
        this.$emit('checkBoxData', { value: to, index: this.index })
    },
  },
  mounted() {
    this.checkboxValue = this.value
  },
}
</script>

<style lang="scss">
.checkbox-container {
  display: grid;
  &__list {
    list-style-type: none;
    display: inline-block;
    padding: 0;
    &--item {
      float: left;
      padding: 10px;
      input[type='checkbox'] {
        background-size: 20px;
        background-repeat: no-repeat;
        width: 18px;
        height: 18px;
        margin: 0;
        cursor: pointer;
      }
      span {
        width: 90%;
      }
    }
  }
  &__title {
    padding: 10px;
    font-weight: 600;
  }
}
</style>
