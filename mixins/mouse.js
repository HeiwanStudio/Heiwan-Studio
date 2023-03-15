import Vue from 'vue'
  Vue.mixin({
      methods: {
        setCursor(newVal) {
          this.$store.commit('cursors/setCursor', {newVal: newVal})
        }
      }
  })
export default {


}
