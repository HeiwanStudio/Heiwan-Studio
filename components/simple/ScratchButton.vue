<template>
  <div class="btn btn--lg btn--primary" @mousedown="test">

  </div>
</template>

<script>
export default {
  methods: {
    test(event) {
      this.$emit('scratch', event)
    }
  },
}
</script>
