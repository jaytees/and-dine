<template>
  <div class="checkbox-container">
    <span class="checkbox-container__title">{{ title }}</span>
    <ul class="checkbox-container__list">
      <li class="checkbox-container__list--item">
        <span>All</span>
        <input v-if="all" type="checkbox" checked @click="updateAll" />
        <input v-else type="checkbox" @click="updateAll" />
      </li>
      <li
        v-for="(checkbox, index) in checkboxes"
        :key="`checkbox_${index}`"
        class="checkbox-container__list--item"
      >
        <span>{{ checkbox }}</span>
        <input v-model="checkboxValues" type="checkbox" :value="checkbox" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CheckboxList',
  props: {
    values: {
      type: Array,
      default: () => [],
      required: false,
    },
    title: {
      type: String,
      default: '',
      required: true,
    },
    checkboxes: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data() {
    return {
      checkboxValues: [],
      all: false,
    }
  },
  watch: {
    values(to, from) {
      if (to !== from) this.checkboxValues = to
      this.showAll()
    },
    checkboxValues(to, from) {
      if (to !== from) this.$emit('checkBoxData', to)
      this.showAll()
    },
  },
  mounted() {
    this.showAll()
  },
  methods: {
    showAll() {
      this.checkboxValues === this.checkboxes
        ? (this.all = true)
        : (this.all = false)
    },
    updateAll() {
      if (this.checkboxValues === this.checkboxes) {
        this.checkboxValues = []
        this.all = false
      } else {
        this.checkboxValues = this.checkboxes
        this.all = true
      }
    },
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
