<template>
    <div class="intro-text heiwan-card text-1">
      <div class="heiwan-card__wrapper">
          <p ref="introTextP" class="intro-text__p"></p>
          <CustomButton class="btn--primary hide no-height intro-text__button"
                        @click.native="letsDoThis"
                        @mouseenter="setCursor('action')" @mouseleave="setCursor('default')">
            <p class="text--medium text--upper">Let's do this!</p>
          </CustomButton>
      </div>
    </div>

</template>

<script setup>
import { introText } from "@/assets/text/intro.json";
</script>

<script>
export default {
  async asyncData({ $axios, params }) {
    const text = await import("~/assets/text/intro.json")
    return {
      text: text,
    };
  },
  data() {
    return {
      pContainer: null,
      writeObj: {
        i: 0,
        height: 0,
        innerce: 10,
        base: 200,
        space: false,
        counter: 0,
        lastLineEnd: 0,
        lines: []
      },
      tl: null
    }
  },
  props: {
    gradientImage: null
  },
  mounted() {
    this.startTextWrite()
  },
  methods: {
    letsDoThis() {
      this.$emit('letsDoThis')
      this.tl.to('.intro-text', {
        opacity: 0,
        duration: 1.2
      })
      this.tl.to('.intro-text', {
        display: 'none',
        duration: 0.1
      })
    },
    writeHuman() {
      this.writeObj.space = false
      if (introText[this.writeObj.i] == ' ') {
        this.writeObj.space = true
        this.writeObj.counter = 70
        this.innerce *= 1.04
      } else {
        if (this.writeObj.counter > 50) {
          this.writeObj.counter += -1 * (Math.floor(Math.random() * (15 - 5)) + 5)
        }
        this.writeObj.innerce * 0.96
        this.writeObj.counter *= this.writeObj.innerce
      }


      this.pContainer.innerHTML = this.pContainer.innerHTML + introText[this.writeObj.i];
      this.writeObj.i++;
      if (this.writeObj.i < introText.length) {
        setTimeout(() => this.write(), this.writeObj.counter);
      }
    },
    writeInLines() {
      const letters = document.querySelectorAll('.intro-text__p span')
      let y = letters[0].getBoundingClientRect().y
      let i = 0
      this.writeObj.lastLineEnd = 0
      letters.forEach(letter => {
        const letterY = letter.getBoundingClientRect().y
        if (letterY > y) {
          y = letterY
          this.writeObj.lines.push(introText.slice(this.writeObj.lastLineEnd,i -1))
          this.writeObj.lastLineEnd = i -1
        }
        i++
      });
      this.writeObj.lines.push(introText.slice(this.writeObj.lastLineEnd,i))
      this.pContainer.innerHTML = ""
      this.writeObj.lines.forEach(line => {
        this.pContainer.innerHTML = `${this.pContainer.innerHTML} <span>${line}</span>`
      });

    },
    writeInSpans() {
      this.pContainer.innerHTML = this.pContainer.innerHTML +"<span>"+introText[this.writeObj.i]+"</span>";
      this.writeObj.i++;
      if (this.writeObj.i < introText.length) {
        this.writeInSpans()
      }
    },
    startTextWrite() {
      this.pContainer = this.$refs.introTextP
      this.writeObj.i = 0
      this.writeObj.innerce = 1
      this.writeObj.space = false
      this.writeInSpans()
      let me = this
      me.writeInLines()
      const gsap = this.$gsap
      this.tl = gsap.timeline()
      setTimeout(() => {

        me.tl.to(".intro-text", {
          duration: 0.5,
          opacity: 1,
          delay: 1.2
        })

        // tl.to(".intro-text", {
        //   duration: 2,
        //   height: "100%",
        //   padding: "20px"
        // })

        me.tl.to(".intro-text__p span", {
          duration: 1,
          backgroundPositionX: "0%",
          ease: 'Power1.easeOut',
          stagger: {
            amount: 0.2,
            grid: 'auto',
            axis: 'y',
            ease: 'linear',
            from: 'start'
          }

        })
        me.tl.to(".intro-text__button", {
          duration: 1,
          delay: 0.21,
          opacity: '1',
          ease: 'Power1.easeOut'
        })
        me.tl.to(".intro-text__button", {
          duration: 1,
          delay: 0.55,
          height: '3rem',
          ease: 'Power1.easeOut'
        })
      }, 500);
    }
  },
}
</script>
