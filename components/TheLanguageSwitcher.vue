<template>
  <div class="[ language-switcher ] [ p-0 ]">
    <button
      :aria-expanded="open.toString()"
      aria-controls="language-list"
      @click="toggleLanguageList"
    >
      <Globe />
      <span class="mx-3">{{ $t('siteLanguage') }}:</span>
      <span class="font-bold">
        {{ $i18n.locales.find((locale) => locale.code === $i18n.locale).name }}
      </span>
    </button>

    <TheLanguageList :open="open" @close="closeLanguageList" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Globe from '~/assets/images/icons/globe.svg?inline'

export default Vue.extend({
  components: {
    Globe,
  },
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
    align-items: center;
    background-color: transparent;
    border: 0;
    display: flex;
  }
}
</style>
