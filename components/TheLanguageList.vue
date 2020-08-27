<template>
  <ul
    id="language-list"
    class="language-list"
    :class="{ hidden: !open }"
    :hidden="!open"
  >
    <li v-for="locale in $i18n.locales" :key="locale.code">
      <n-link
        exact
        :to="switchLocalePath(locale.code)"
        @click.native="$emit('close')"
      >
        {{ locale.name }}
      </n-link>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.language-list {
  @apply mt-3 py-3 px-6 bg-light rounded-lg;

  list-style: none;
  position: absolute;
  z-index: 1;
}
</style>
