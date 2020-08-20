<template>
  <div class="[ get-involved-column ] [ flow rows--space-between ]">
    <p>
      <slot></slot>
    </p>

    <a :href="link" target="_blank" rel="noreferrer noopener">
      <slot name="link"></slot>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    link: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.get-involved-column > * {
  --flow-space: 1rem;
}
</style>
