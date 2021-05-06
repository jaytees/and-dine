<template>
  <div class="images">
    <div class="images__list" @click="returnClickEvent">
      <img
        v-if="backgroundImage !== ''"
        class="images__list--background-image"
        :src="backgroundImage"
      />
      <img
        v-else
        class="images__list--background-image"
        src="~assets/images/comingsoon.png"
      />
      <div v-if="profileImage">
        <img
          v-if="profileImage"
          class="images__list--profile-image"
          :src="profileImage"
        />
        <img
          v-else
          class="images__list--profile-image"
          src="~assets/images/comingsoon.png"
        />
      </div>
      <h3 class="images__list--image-title">{{ imageTitle }}</h3>
      <h4 class="images__list--image-subtitle">{{ imageSubtitle }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageList',
  props: {
    imageTitle: {
      type: String,
      default: '',
      required: false,
    },
    imageSubtitle: {
      type: String,
      default: '',
      required: false,
    },
    backgroundImage: {
      type: String,
      default: '',
      required: false,
    },
    profileImage: {
      type: String,
      default: '',
      required: false,
    },
  },
  methods: {
    returnClickEvent() {
      this.$emit('clickEvent', true)
    },
  },
}
</script>

<style lang="scss">
$desktop: 1024px;
$tablet: 768px;
$mobile: 600px;

.images {
  position: relative;
  margin: 0 auto;
  width: 100%;
  @media (max-width: $tablet) {
    display: inline;
    padding: 0;
  }
  &__list {
    width: 26%;
    cursor: pointer;
    float: left;
    position: relative;
    padding: 0 2%;
    @media (max-width: $desktop) {
      padding: 0 2%;
      width: 40%;
      margin: 0;
    }
    @media (max-width: $tablet) {
      padding: 0;
      width: 90%;
      margin: 0;
    }
    &:hover {
      opacity: 0.8;
    }
    @media (max-width: $tablet) {
      display: inline-block;
    }

    &--image-title {
      margin: 5px 0;
    }
    &--image-subtitle {
      margin: 0 0 10px;
    }
    &--background-image {
      height: 250px;
      width: 100%;
      background-position: center;
      background-color: var(--color-purple-1);
      border-radius: 5px;
      -webkit-box-shadow: 0px 5px 5px 0px var(--color-grey-2);
      -moz-box-shadow: 0px 5px 5px 0px var(--color-grey-2);
      box-shadow: 0px 5px 5px 0px var(--color-grey-2);
    }
    &--profile-image {
      position: relative;
      bottom: 80px;
      left: 75%;
      background-color: var(--color-purple-1);
      width: 100px;
      height: 100px;
      margin-bottom: -110px;
      border-radius: 50%;
      border: 4px solid var(--color-white-1);
      @media (max-width: $tablet) {
        left: 70%;
      }
    }
  }
}
</style>
