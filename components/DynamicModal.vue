<template>
  <div class="modal">
    <div class="modal__backdrop" @click="closeModal()" />
    <div class="modal__dialog">
      <div class="modal__header">
        <slot name="header" />
        <dynamic-button
          class="modal__close"
          :is-slot="true"
          @clickEvent="closeModal()"
        >
          <template v-slot:button-body>
            <fa :icon="['fas', 'times-circle']" />
          </template>
        </dynamic-button>
      </div>

      <div class="modal__body">
        <slot name="body" />
      </div>

      <div class="modal__footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
  },
}
</script>

<style lang="scss" scoped>
$desktop: 1024px;
$tablet: 768px;
$mobile: 600px;

.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  overflow-x: hidden;
  overflow-y: auto;
  @media (max-width: $tablet) {
    width: 100%;
    overflow-y: hidden;
  }
  &__backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
  &__dialog {
    position: relative;
    width: 600px;
    background-color: #ffffff;
    border-radius: 5px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    z-index: 2;
    @media (max-width: $tablet) {
      width: 100%;
      margin: 0;
      height: 100%;
    }
  }
  &__close {
    color: var(--color-pink-1);
    font-size: 35px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  &__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px 20px 10px;
  }
  &__body {
    padding: 10px 20px 10px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  &__footer {
    padding: 10px 20px 20px;
  }
}
</style>
