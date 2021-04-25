<template>
  <div class="image-upload">
    <span class="image-upload__title">Upload the image</span>
    <div class="image-upload__input"></div>
    <input
      class="image-upload__input--selector"
      type="file"
      @change="selectFile"
      @drop.prevent="selectFile"
      @dragover.prevent
    />
  </div>
</template>

<script>
export default {
  name: 'ImageUploader',
  props: {
    index: {
      type: Number,
      default: 0,
      required: false,
    },
  },
  methods: {
    async selectFile(e) {
      const file = e.target.files[0]

      if (!file) return
      const readData = (f) =>
        new Promise((resolve) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result)
          reader.readAsDataURL(f)
        })

      const data = await readData(file)

      const options = {
        timestamp: Date.now(),
        public_id: file.name,
      }

      // eslint-disable-next-line
      const instance = this.$cloudinary
        .upload(data, {
          ...options,
          folder: 'banner-images',
          uploadPreset: 'zmjfe7aj',
        })
        .then((res) => {
          this.$emit('selectedImage', {
            value: res.url,
            index: this.index,
          })
        })
    },
  },
}
</script>

<style lang="scss">
.image-upload {
  margin: 0 10px;
  width: 320px;
  &__input {
    border: 2px dashed #fff;
    height: 40px;
    margin: 10px 0;
    &--selector {
      position: absolute;
      height: 45px;
      z-index: 10;
      margin-top: -55px;
      padding: 12px;
    }
  }
}
</style>
