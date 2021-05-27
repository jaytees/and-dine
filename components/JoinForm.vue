<template>
  <div id="mc_embed_signup" class="join-form">
    <img class="join-form__logo" src="~assets/images/popup-pink.png" />
    <h3 class="join-form__title">About you</h3>
    <h4 class="join-form__body">
      Please fill in the details below and our team will be in touch soon.
    </h4>
    <h4 class="join-form__required">All fields are required*</h4>
    <iframe
      scrolling="no"
      class="join-form__frame"
      src="https://anddine.us1.list-manage.com/subscribe/post?u=29173e9d989a5e2c822838e35&amp;id=5c8512abdc"
      title="Mailchimp Sign-up"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'JoinForm',
}
</script>

<style lang="scss">
$desktop: 1024px;
$tablet: 768px;
$mobile: 600px;

.join-form {
  background-color: var(--color-white-1);
  border-radius: 5px;
  padding: 30px;
  -webkit-box-shadow: 0px 5px 5px 0px var(--color-grey-2);
  -moz-box-shadow: 0px 5px 5px 0px var(--color-grey-2);
  box-shadow: 0px 5px 5px 0px var(--color-grey-2);
  &__logo {
    width: 200px;
    margin: 0 auto;
    display: flex;
  }
  &__body {
    color: var(--color-grey-1);
    margin: 0 0 30px 0;
  }
  &__required {
    color: var(--color-pink-1);
    margin: 0 0 -5px 0;
  }
  &__frame {
    width: 100%;
    border: none;
    height: 700px;
    overflow: hidden;
  }
}
</style>
