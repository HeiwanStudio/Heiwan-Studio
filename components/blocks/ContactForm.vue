<template>
  <div class="contact-form heiwan-card heiwan-card--no-padding text-1">
    <div class="heiwan-card__wrapper">
      <ValidationObserver class="contact-form__form" v-slot="{ invalid, errors, passes }" ref="form">
          <div class="contact-form__field">
            <ValidationProvider name="email" rules="email" v-slot="{ errors }">
              <input v-model="email.input" type="text" class="input--primary text--large"
                     name="email"
                     placeholder="Your Email"
                     @mouseenter="setCursor('write')" @mouseleave="setCursor('default')"
                     @blur="email.focused = false" @focus="email.focused = true">
              <!-- <div v-if="errors[0] && !email.focused" class="error">{{errors[0]}}</div> -->
              <button type="submit" @click="passes(onSubmit(errors[0]))"
                      :class="{'ready' : ready(errors[0])}" @mouseenter="{!ready(errors[0]) ? setCursor('na') : setCursor('action')}"
                      @mouseleave="setCursor('default')" class="contact-form__submit">
                <div class="svg-wrapper-bg" v-html="require('@/assets/imgs/svg/send.svg?raw')"></div>
                <div class="svg-wrapper-fg" v-html="require('@/assets/imgs/svg/send.svg?raw')"></div>
              </button>
            </ValidationProvider>
          </div>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tl: null,
      email: {
        input: '',
        focused: true
      }
    }
  },
  mounted() {
    this.openBox()
  },
  methods: {
    onSubmit(err) {
      if (!err && this.email.input.length > 0) {
        let formObject = {
          name: '',
          from: this.email.input,
          _subject: 'Collab',
          message: `Colalb with ${this.email.input}`
        }
        this.$axios.$post('https://formspree.io/f/xrgdwovz', formObject, {})
        .then((response) => {
          if (response.ok) {
            this.tl.reverse()
          }
        })
      }
    },
    ready(err) {
      return !err && this.email.input.length > 0
    },
    openBox() {
      const gsap = this.$gsap
      this.tl = gsap.timeline()
      this.tl.to(".contact-form", {
        duration: 2,
        width: "100%",
        opacity: 1,
        delay: 0.5
      })
      // tl.to(".contact-form", {
      //   duration: 2,
      //   height: "100%",
      // })
    },
    isRequired(value) {
      if (value && value.trim()) {
        return true
      }
      return 'This is required'
    }
  },
}
</script>
