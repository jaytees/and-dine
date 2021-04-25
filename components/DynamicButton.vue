<template>
  <button
    v-if="isSlot"
    class="dynamic-slot"
    :href="href"
    :class="color"
    @click="returnClick"
  >
    <slot name="button-body" />
  </button>
  <button
    v-else
    :style="`width: ${width}; height:${height}`"
    class="dynamic-button"
    :href="href"
    :class="color"
    @click="returnClick"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'DynamicButton',
  props: {
    isSlot: {
      type: Boolean,
      default: false,
      required: false,
    },
    width: {
      type: String,
      default: '250px',
      required: false,
    },
    height: {
      type: String,
      default: '50px',
      required: false,
    },
    href: {
      type: String,
      default: '/',
      required: false,
    },
    text: {
      type: String,
      default: 'Click me!',
      required: false,
    },
    color: {
      type: String,
      default: 'green',
      required: false,
    },
  },
  methods: {
    returnClick() {
      this.$emit('clickEvent')
    },
  },
}
</script>

<style lang="scss">
.dynamic-button {
  padding: 14px 10px;
  margin: 10px;
  color: #ffffff;
  font-weight: 600;
  font-size: 18px;
  border-radius: 4px;
  border: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
}
.green {
  background-color: #8cbd22;
}
.blue {
  background-color: #1574f5;
}
.red {
  background-color: #ed6065;
}
.orange {
  background-color: #ff8005;
}
.white {
  color: #ff8005;
  background-color: #fff;
}
.dynamic-slot {
  background: transparent;
  border: none;
}
</style>
