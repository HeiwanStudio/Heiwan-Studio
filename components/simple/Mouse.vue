<template>
  <div class="light-cursor" ref="lightCursor">
    <div class="light-cursor__shine-svg" :class="{'show' : !pageOpen}"  v-html="require('@/assets/imgs/svg/heiwanstudio_orb.svg?raw')"></div>
    <div class="light-cursor__default" :class="{'show' : pageOpen && cursor == 'default'}" v-html="require('@/assets/imgs/svg/cursor-default.svg?raw')"></div>
    <div class="light-cursor__not-allowed" :class="{'show' : pageOpen && cursor == 'na'}" v-html="require('@/assets/imgs/svg/cursor-not-allowed.svg?raw')"></div>
    <div class="light-cursor__write" :class="{'show' : pageOpen && cursor == 'write'}" v-html="require('@/assets/imgs/svg/cursor-write.svg?raw')"></div>
    <div class="light-cursor__action" :class="{'show' : pageOpen && cursor == 'action'}" v-html="require('@/assets/imgs/svg/cursor-action.svg?raw')"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lightCursor: null
    }
  },
  props: {
    pageOpen: null
  },
  methods: {
    cursorMove(e) {
      this.lightCursor.style.top = e.clientY + "px";
      this.lightCursor.style.left = e.clientX + "px";
    }
  },
  computed: {
    cursor() {
      return this.$store.state.cursors.cursor
    }
  },
  mounted() {
    this.lightCursor = this.$refs.lightCursor
    window.addEventListener("mousemove", this.cursorMove);
  }
}
</script>
