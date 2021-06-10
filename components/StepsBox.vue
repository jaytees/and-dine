<template>
  <section class="steps-box">
    <div class="steps-box__column">
      <fa :icon="['fas', 'search-location']" />
      <h4>Enter your postcode</h4>
      <p>
        Explore home chefs cooking in your neighbourhood and discover exciting
        new cuisines
      </p>
    </div>
    <div class="steps-box__column">
      <fa :icon="['fas', 'house-user']" />
      <h4>Select your chef and dishes</h4>
      <p>
        All our chefs are trained in food safety and hygiene - food will be
        freshly made in advance to order
      </p>
    </div>
    <div class="steps-box__column">
      <fa :icon="['fas', 'pizza-slice']" />
      <h4>Delivered to your door</h4>
      <p>
        Dishes arrive cooled. Simply finish at home and enjoy the taste of
        authentic come cooked meals
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StepsBox',
}
</script>

<style lang="scss">
$desktop: 1024px;
$tablet: 768px;
$mobile: 600px;

.steps-box {
  position: relative;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  height: 270px;
  display: flex;
  @media (max-width: $tablet) {
    display: inline-table;
    padding: 0;
  }
  &__column {
    border-radius: 15px;
    float: left;
    position: relative;
    width: 26%;
    display: flex;
    background-color: var(--color-purple-2);
    transition: transform 0.2s;
    padding: 20px 0;
    margin: 0 2%;
    flex-direction: column;
    align-content: stretch;
    justify-content: center;
    align-items: center;
    @media (max-width: $tablet) {
      width: 90%;
      margin: 0;
      padding: 20px 0;
      display: inline-block;
      margin: 20px 0;
    }
    svg {
      font-size: 50px;
      color: var(--color-pink-1);
      margin-bottom: 10px;
    }
    p,
    h4 {
      padding: 5px 15px;
    }
  }
}
</style>
