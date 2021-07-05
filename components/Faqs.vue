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
            {{ faq.body }}
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
          title: 'How do I earn money with Just Eat?',
          body: `Delco - As an independent contractor making deliveries via the Just Eat platform, you are paid for delivering food from our partner restaurants to our customers. You choose which orders you accept and are paid for all the orders you successfully deliver.`,
        },
        {
          title:
            'Can I choose to be an independent contractor or salaried worker regardless of where I want to work?',
          body: `We are rolling out our new salaried contract model across key cities, Birmingham, Brighton, Cambridge, Liverpool and London have already launched and we've got more coming soon. If our salaried contract model doesn't operate where you'd like to work (for example, Worthing), you can check to see if you can deliver for us as an independent contractor (this model operates in almost 200 locations). If you can't see your town or city listed, it means we don't require couriers in your location at the moment.`,
        },
        {
          title: 'Do I need my own wheels?',
          body: `Delco - As an independent contractor, you’re responsible for providing and maintaining your own equipment including a bicycle, an insured car or motorcycle and a mobile phone with a data plan. You’ll also need a full driving licence to operate as a car courier and at least a provisional driving licence + CBT to operate as a motorcycle courier.`,
        },
        {
          title: 'I have questions, who can I contact?',
          body: `Delco -  Send an email to couriers@just-eat.com. We'll get back to you within 5 days.`,
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
