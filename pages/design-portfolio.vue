<template>
  <div class="page page--home cursor-done" >
    <Mouse :pageOpen="true"></Mouse>
    <div class="designs-container">
      <div class="design-box text-1" >
        <div class="img-wrapper">
          <img v-if="patternImg" :src="patternImg" alt="">
        </div>
        <h2 class="design-box__title">Basic Design Patterns, Black And White, Circles</h2>
      </div>
      <div class="design-box text-1" >
        <div class="img-wrapper">
          <img v-if="labrynthImg" :src="labrynthImg" alt="">
        </div>
        <h2 class="design-box__title">Spiral Labyrinth of Exploration & Discovery</h2>
      </div>
      <div class="design-box text-1" >
        <div class="img-wrapper">
          <img v-if="carouselImg" :src="carouselImg" alt="">
        </div>
        <h2 class="design-box__title">Time Travel Machine based on Ouroboros</h2>
      </div>
      <div class="design-box text-1" >
        <div class="img-wrapper">
          <img v-if="logoImg" :src="logoImg" alt="">
        </div>
        <h2 class="design-box__title">Ox Logo using simple shapes</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DesignPortfolio",
  data() {
    return {
      patternImg: null,
      labrynthImg: null,
      carouselImg: null,
      logoImg: null
    }
  },
  mounted() {
    this.patternImg = require("@/assets/imgs/designs/patterns.jpeg")
    this.labrynthImg = require("@/assets/imgs/designs/labrynth.jpeg")
    this.carouselImg = require("@/assets/imgs/designs/carousel.jpeg")
    this.logoImg = require("@/assets/imgs/designs/logo.png")
  }
}
</script>
