<template>
  <div class="language-switcher">
    <button
      :aria-expanded="open.toString()"
      aria-controls="language-list"
      @click="toggleLanguageList"
    >
      <span>{{ $t('siteLanguage') }}: </span>
      <span class="font-bold">
        {{ $i18n.locales.find((locale) => locale.code === $i18n.locale).name }}
      </span>
    </button>

    <TheLanguageList :open="open" @close="closeLanguageList" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      open: false,
    }
  },
  methods: {
    toggleLanguageList() {
      this.open = !this.open
    },
    closeLanguageList() {
      this.open = false
    },
  },
})
</script>

<style lang="scss" scoped>
.language-switcher {
  position: relative;

  button {
    @apply p-0;

    background-color: transparent;
    border: 0;
  }
}
</style>
