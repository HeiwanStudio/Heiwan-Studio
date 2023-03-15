<template>
  <div>

      <Nuxt/>
      <Footer></Footer>

  </div>
</template>

<script>
import mouse from '@/mixins/mouse';
export default {
  name: 'Default',
  mixins: [mouse],
  data () {
    return {
    }
  },
  mounted() {

  },
  methods: {
  }
}
</script>
