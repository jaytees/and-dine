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
    <fa v-if="iconUsed" :icon="['fas', icon]" />
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
      default: '',
      required: false,
    },
    icon: {
      type: String,
      default: '',
      required: false,
    },
    color: {
      type: String,
      default: 'green',
      required: false,
    },
  },
  computed: {
    iconUsed() {
      return this.icon !== ''
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
  color: #ffffff;
  font-weight: 600;
  font-size: 18px;
  border-radius: 5px;
  border: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
}
.green {
  background-color: var(--color-green-1);
}
.blue {
  background-color: var(--color-blue-1);
}
.red {
  background-color: var(--color-red-1);
}
.orange {
  background-color: var(--color-orange-1);
}
.white {
  color: var(--color-black-1);
  background-color: #fff;
}
.purple {
  background-color: var(--color-purple-1);
}
.pink {
  background-color: var(--color-pink-1);
}
.dynamic-slot {
  background: transparent;
  border: none;
}
</style>
