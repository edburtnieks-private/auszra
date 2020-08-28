<template>
  <fragment>
    <a v-if="href" :href="href" class="link">
      <span v-if="$slots.start" class="[ link-start ] [ mr-3 ]">
        <slot name="start" />
      </span>

      <span v-if="text">{{ text }}</span>
      <slot v-else name="text" />

      <span v-if="$slots.end" class="[ link-end ] [ ml-3 ]">
        <slot name="end" />
      </span>
    </a>

    <n-link v-else :to="localePath({ name: to })" class="link" exact>
      <span v-if="$slots.start" class="[ link-start ] [ mr-3 ]">
        <slot name="start" />
      </span>

      <span v-if="text">{{ text }}</span>
      <slot v-else name="text" />

      <span v-if="$slots.end" class="[ link-end ] [ ml-3 ]">
        <slot name="end" />
      </span>
    </n-link>
  </fragment>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    to: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
.link,
.link-start,
.link-end {
  align-items: center;
  display: flex;
}
</style>
