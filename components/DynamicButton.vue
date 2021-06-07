<template>
  <button
    v-if="isSlot"
    :id="dynamicId"
    class="dynamic-slot"
    :href="href"
    :class="color"
    :type="submit ? 'submit' : 'button'"
    @click="!disabled && returnClick()"
  >
    <slot name="button-body" />
  </button>
  <button
    v-else
    :id="dynamicId"
    :style="`width: ${width}; height:${height}`"
    class="dynamic-button"
    :href="href"
    :type="submit ? 'submit' : 'button'"
    :class="disabled ? 'disabled' : color"
    @click="!disabled && returnClick()"
  >
    {{ text }}
    <fa v-if="iconUsed" :icon="['fas', icon]" :class="spinning && 'fa-spin'" />
  </button>
</template>

<script>
export default {
  name: 'DynamicButton',
  props: {
    dynamicId: {
      type: String,
      default: '',
      required: false,
    },
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
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    submit: {
      type: Boolean,
      default: false,
      required: false,
    },
    spinning: {
      type: Boolean,
      default: false,
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
  line-height: 20px;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    opacity: 0.9;
    transform: scale(1.02);
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
.disabled {
  background-color: var(--color-grey-2);
}
</style>
