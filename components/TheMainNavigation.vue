<template>
  <nav class="[ main-navigation ] [ flow--horizontal ]">
    <n-link to="/">Auszra</n-link>
    <n-link to="/language-resources">Language resources</n-link>
    <button>Site language: English</button>
    <a href="https://github.com/edburtnieks/auszra">GitHub</a>
  </nav>
</template>

<style lang="scss" scoped>
.main-navigation {
  @apply text-base py-10;

  --flow-space: 3rem;

  a {
    @apply text-dark font-normal;

    text-decoration: none;

    &.nuxt-link-exact-active {
      @apply font-bold;
    }
  }
}
</style>
