<template>
  <section class="faqs">
    <div class="faqs__content">
      <ul class="faqs__list">
        <li v-for="(faq, i) in faqs" :key="i" @click="toggleFaq(i)">
          <div class="faqs__list--title">
            <h3>{{ faq.title }}</h3>
            <fa v-if="showFaq === i" :icon="['fa', 'angle-down']" />
            <fa v-else :icon="['fa', 'angle-right']" />
          </div>
          <p
            :class="
              showFaq === i
                ? 'show-faq animate__animated animate__fadeInDown '
                : 'animate__animated animate__fadeInUp'
            "
          >
            {{ faq.body_1 }}
          </p>
          <p
            :class="
              showFaq === i
                ? 'show-faq animate__animated animate__fadeInDown '
                : 'animate__animated animate__fadeInUp'
            "
          >
            {{ faq.body_2 }}
          </p>
          <p
            :class="
              showFaq === i
                ? 'show-faq animate__animated animate__fadeInDown '
                : 'animate__animated animate__fadeInUp'
            "
          >
            {{ faq.body_3 }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Faqs',
  data() {
    return {
      faqs: [
        {
          title: 'I have a food allergy. Should I order meals from &Dine?',
          body_1: `All food purchased on &Dine is prepared in kitchens where nuts, gluten and other known allergens maybe present. Please note whilst home cooks take caution to prevent cross-contamination, any product may contain traces as entire menus are produced in the same kitchen.`,
          body_2:
            'Therefore, if you have a severe food allergy, we would recommend not ordering from &Dine at this time as you will be doing so at your own risk.',
        },
        {
          title: 'Can I return the &Dine delivery bags?',
          body_1: `Our &Dine bags are designed to be reused! Once you have collected 3 or more delivery bags, feel free to sign up for a pick-up, which can be sent to hello@anddine.co.uk and receive discount on your next order. `,
          body_2: `We are currently hosting bag pick-up's on a monthly basis. By emailing to arrange a pickup you will be notified when the next pick-up in your area is scheduled. You'll receive a food credit as soon as we pick up your bags. Please do not hand off bags or throw bags away. `,
          body_3: `To receive your recycling credit and return the bags properly, please email us. Thanks so much!`,
        },
      ],
      showFaq: false,
    }
  },
  methods: {
    toggleFaq(index) {
      this.showFaq === index ? (this.showFaq = false) : (this.showFaq = index)
    },
  },
}
</script>

<style lang="scss">
.faqs {
  margin-top: -30px;
  border-radius: 0 0 15px 15px;
  &__content {
    h2 {
      color: var(--color-white-1);
      max-width: 100%;
      padding: 40px;
    }
  }
  &__list {
    margin: 0;
    padding: 0;
    &--title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      svg {
        color: var(--color-white-1);
        float: right;
      }
    }
    li {
      list-style: none;
      background-color: var(--color-pink-1);
      border: 1px solid var(--color-pink-1);
      border-radius: 15px;
      padding: 20px;
      margin: 20px;
      cursor: pointer;
      &:hover {
        opacity: 0.9;
      }
    }
    h3,
    p {
      text-align: left;
      color: var(--color-white-1);
    }
    p {
      display: none;
    }
    .show-faq {
      display: block;
    }
  }
}
</style>
