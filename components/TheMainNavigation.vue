<template>
  <nav class="[ main-navigation ] [ flow--horizontal ]">
    <n-link :to="localePath('index')" exact>
      Auszra
    </n-link>

    <n-link :to="localePath('language-resources')" exact>
      {{ $t('page.languageResources') }}
    </n-link>

    <a
      href="https://github.com/edburtnieks/auszra"
      target="_blank"
      rel="noreferrer noopener"
    >
      GitHub
    </a>

    <TheLanguageSwitcher />
  </nav>
</template>

<style lang="scss">
.main-navigation {
  @apply text-base py-10 mb-8;

  --flow-space: 3rem;

  align-items: center;
  display: flex;

  a {
    @apply text-dark font-normal;

    text-decoration: none;

    &.nuxt-link-exact-active {
      @apply font-bold;
    }
  }
}
</style>
