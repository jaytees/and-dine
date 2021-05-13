<template>
  <div class="images">
    <div class="images__list" @click="returnClickEvent">
      <div
        class="images__list--background-image"
        :style="
          backgroundImage
            ? `background-image: url(${backgroundImage})`
            : '~/assets/images/comingsoon.png'
        "
      ></div>
      <div v-if="profileImage">
        <div
          class="images__list--profile-image"
          :style="
            profileImage
              ? `background-image: url(${profileImage})`
              : '~/assets/images/comingsoon.png'
          "
        ></div>
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
    cursor: pointer;
    float: left;
    position: relative;
    padding: 0 2%;
    width: 40%;
    margin: 0;
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
      opacity: 0.9;
    }
    @media (max-width: $tablet) {
      display: inline-block;
    }

    &--image-title {
      margin: 15px 0 5px;
    }
    &--image-subtitle {
      margin: 0 0 10px;
    }
    &--background-image {
      height: 400px;
      width: 100%;
      background-position: center;
      background-size: cover;
      background-color: var(--color-purple-1);
      border-radius: 5px;
      -webkit-box-shadow: 0px 5px 5px 0px var(--color-grey-2);
      -moz-box-shadow: 0px 5px 5px 0px var(--color-grey-2);
      box-shadow: 0px 5px 5px 0px var(--color-grey-2);
      @media (max-width: $desktop) {
        height: 300px;
      }
      @media (max-width: $tablet) {
        height: 350px;
      }
    }
    &--profile-image {
      position: relative;
      background-position: center;
      background-size: cover;
      bottom: 60px;
      left: 85%;
      background-color: var(--color-purple-1);
      width: 100px;
      height: 100px;
      margin-bottom: -110px;
      border-radius: 50%;
      border: 4px solid var(--color-white-1);
      @media (max-width: $desktop) {
        left: 70%;
      }
      @media (max-width: $tablet) {
        left: 75%;
      }
    }
  }
}
</style>
