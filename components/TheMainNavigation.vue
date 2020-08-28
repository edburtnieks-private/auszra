<template>
  <nav class="[ main-navigation ] [ flow--horizontal ]">
    <AszrLink to="index" text="Auszra">
      <template v-slot:start>
        <Logo />
      </template>
    </AszrLink>

    <AszrLink to="language-resources" :text="$t('page.languageResources')">
      <template v-slot:start>
        <BookOpen />
      </template>
    </AszrLink>

    <TheLanguageSwitcher />

    <AszrLink href="https://github.com/edburtnieks/auszra" text="GitHub">
      <template v-slot:end>
        <ExternalLink />
      </template>
    </AszrLink>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

import Logo from '~/assets/images/logo.svg?inline'
import BookOpen from '~/assets/images/icons/book-open.svg?inline'
import ExternalLink from '~/assets/images/icons/external-link.svg?inline'

export default Vue.extend({
  components: {
    Logo,
    BookOpen,
    ExternalLink,
  },
})
</script>

<style lang="scss">
.main-navigation {
  @apply text-base py-10 mb-8;

  --flow-space: 3rem;

  align-items: center;
  display: flex;

  a {
    @apply text-dark font-normal;

    &.nuxt-link-exact-active {
      @apply font-bold;
    }
  }
}
</style>
