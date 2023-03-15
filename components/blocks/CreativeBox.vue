<template>
  <div class="creative-box heiwan-card text-1">
    <div class="creative-box__images" @mouseenter="mouseDown = true" @mouseleave=" mouseDown = false" @mousedown="startScratch" :class="{'bright' : scratching && mouseDown}">
      <div class="image-wrapper" v-for="(image,index) in images" :key="index" :class="{'show' : index == activeImage}">
        <img :src="requireImg(image)" alt="">
      </div>
    </div>
    <!-- <ScratchButton id="scartchButton" @scratch="startScratch()"></ScratchButton> -->
  </div>
</template>


<script>

export default {
  props: {
    images: null
  },
  data() {
    return {
      activeImage: 0,
      scratching: false,
      mouseDown: false,
      scratchTimer: false,
      lastMouseX: 0,
      lastMouseY: 0,
    }
  },
  mounted() {
    this.itterate()
    addEventListener('mouseup', (event) => {
      // this.mouseDown = false
    });
    addEventListener("mousemove" ,(event) => {
      this.lastMouseX = event.clientX
      this.lastMouseY = event.clientY
      this.scratching = true
      clearTimeout(this.scratchTimer);
      this.scratchTimer = setTimeout(() => {
        this.scratching = false
      }, 30);

    })

  },
  methods: {
    startScratch() {
      // this.mouseDown = true
    },
    requireImg(img) {
      return require(`~/assets/imgs/creative-box/${img}`)
    },
    itterate() {
      setInterval(() => {
        if (this.mouseDown && this.scratching) {
          const rand =  Math.floor(Math.random() * this.images.length)
          if(this.activeImage !== rand) {
            this.activeImage = rand
          } else {
            this.activeImage = rand
            this.activeImage++
            if(this.activeImage == this.images.length -1) {
              this.activeImage = 0
            }
          }
        }
      }, 140)
    }
  },
}
</script>
