<template>
  <div class="[ language-switcher ] [ p-0 ]">
    <button
      class="flow--horizontal"
      :aria-expanded="open.toString()"
      aria-controls="language-list"
      @click="toggleLanguageList"
    >
      <Globe />

      <span>{{ $t('siteLanguage') }}:</span>
      <span class="font-bold">
        {{ $i18n.locales.find((locale) => locale.code === $i18n.locale).name }}
      </span>

      <div class="chevron" :class="{ open }">
        <ChevronDown />
      </div>
    </button>

    <TheLanguageList :open="open" @close="closeLanguageList" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Globe from '~/assets/images/icons/globe.svg?inline'
import ChevronDown from '~/assets/images/icons/chevron-down.svg?inline'

export default Vue.extend({
  components: {
    Globe,
    ChevronDown,
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
    --flow-space: 0.75rem;

    align-items: center;
    background-color: transparent;
    border: 0;
    display: flex;
  }
}

.chevron {
  display: flex;
  transition: transform 150ms linear;

  &.open {
    transform: rotate(-180deg);
  }
}
</style>
