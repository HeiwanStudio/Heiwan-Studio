<template>
  <div class="btn">
    <slot>

    </slot>
  </div>
</template>

<script>
export default {
  props: {
    hasEvent: {
      type: Boolean,
      default: false
    },
    eventName: {
      type: String,
      default: null
    }
  },
  methods: {
    onClick() {
      if (this.hasEvent) {
        this.$emit(this.eventName)
      }
    }
  }
}
</script>
