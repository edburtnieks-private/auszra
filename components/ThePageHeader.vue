<template>
  <header class="[ page-header ] [ wrapper ] [ mb-64 ]">
    <Flipper :flip-key="key">
      <TheMainNavigation :scrolled="scrolled" />
      <slot></slot>
    </Flipper>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { Flipper } from 'vue-flip-toolkit'

export default Vue.extend({
  components: {
    Flipper,
  },
  props: {
    scrolled: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    key() {
      return this.scrolled.toString()
    },
  },
})
</script>

<style lang="scss" scoped>
.page-header {
  position: relative;
}
</style>
