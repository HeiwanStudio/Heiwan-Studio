<template>

  <div class="page page--home" :class="{'cursor-done' : pageOpen}">
    <div class="loadimages">
      <img :src="gradientImage" alt="">
      <img :src="gradientLoop" alt="">
      <img :src="gradientPage" alt="">
    </div>
    <Mouse :pageOpen="pageOpen"></Mouse>
    <div class="logo">
      <Logo v-if="gradientImage && gradientLoop" :gradientImage="gradientImage" :gradientLoop="gradientLoop" @openLogo="openLogo"></Logo>
    </div>
    <div v-if="pageOpen" class="page-open-container">
      <div v-if="pageOpen && gradientPage" class="page-open" :style="`background-image: url(${gradientPage})`">
        <IntroText :gradientImage="gradientImage" @letsDoThis="letsDoThis()"></IntroText>
        <ContactForm v-if="collab"></ContactForm>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
          gradientImage: null,
          gradientLoop: null,
          gradientPage: null,
          creativeBoxImages: null,
          pageOpen: false,
          collab: false
        };
    },
    methods: {
      letsDoThis() {
        setTimeout(() => {
          this.collab = true
        }, 900);
      },
      openLogo() {
        let me = this
        me.pageOpen = true

      },
      importAll(r) {
        let images = [];
        r.keys().forEach(imgName => {
          let imgPath = imgName.replace('./', '')
          let img = require(`@/assets/imgs/creative-box/${imgPath}`)
          images.push(imgPath)
        });

        return images;
      }
    },
    mounted() {
      this.gradientImage = require("@/assets/imgs/svg/gradient_05.png")
      this.gradientLoop = require("@/assets/imgs/svg/gradient_loop_01.png")
      this.gradientPage = require("@/assets/imgs/svg/gradient_page.png")
      this.creativeBoxImages = this.importAll(require.context('@/assets/imgs/creative-box', true, /\.png$/));
    }
}
</script>
