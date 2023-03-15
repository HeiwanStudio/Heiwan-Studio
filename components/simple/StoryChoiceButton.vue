<template>
  <div>
    <button class="btn btn--lg btn--primary" @click="sendAnswer">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    choice: null
  },
  methods: {
    sendAnswer() {
      this.$emit('answer', this.choice)
    }
  }
}
</script>
