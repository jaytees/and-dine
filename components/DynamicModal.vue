<template>
  <div class="modal">
    <div class="modal__backdrop" @click="closeModal()" />
    <div
      class="
        box-shadow
        modal__dialog
        animate__animated animate__zoomIn animate__faster
      "
    >
      <div class="modal__header">
        <slot name="header" />
        <dynamic-button
          class="modal__close"
          :is-slot="true"
          @clickEvent="closeModal()"
        >
          <template v-slot:button-body>
            <fa :icon="['fas', 'times']" />
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
  transition: 0.5s;
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
  }
  &__backdrop {
    position: fixed;
    overflow: unset;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--color-grey-2);
    opacity: 0.8;
    z-index: 1;
  }
  &__dialog {
    position: relative;
    width: 600px;
    padding: 2%;
    background-color: #ffffff;
    border-radius: 15px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    z-index: 2;
    @media (max-width: $tablet) {
      width: 90%;
      padding: 5%;
      margin: 0;
      border-radius: 0px;
    }
  }
  &__close {
    color: var(--color-pink-1);
    font-size: 35px;
    padding: 0;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  }
  &__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 2%;
  }
  &__body {
    overflow: scroll;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  &--footer {
    padding: 2%;
  }
}
</style>
