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

    <div class="[ cta-container ] [ flow--horizontal ]">
      <Flipped v-if="scrolled" flip-id="primary-cta">
        <div class="primary-cta-container">
          <HomePrimaryCTA />
        </div>
      </Flipped>

      <Flipped v-if="scrolled" flip-id="secondary-cta">
        <div class="secondary-cta-container">
          <HomeSecondaryCTA />
        </div>
      </Flipped>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { Flipped } from 'vue-flip-toolkit'

import Logo from '~/assets/images/logo.svg?inline'
import BookOpen from '~/assets/images/icons/book-open.svg?inline'
import ExternalLink from '~/assets/images/icons/external-link.svg?inline'

import HomePrimaryCTA from '~/components/page/home/HomePrimaryCTA.vue'
import HomeSecondaryCTA from '~/components/page/home/HomeSecondaryCTA.vue'

export default Vue.extend({
  components: {
    Flipped,
    Logo,
    BookOpen,
    ExternalLink,
    HomePrimaryCTA,
    HomeSecondaryCTA,
  },
  props: {
    scrolled: {
      type: Boolean,
      required: true,
    },
  },
})
</script>

<style lang="scss">
.main-navigation {
  @apply text-base py-10 mb-8;

  --flow-space: 3rem;

  align-items: center;
  display: flex;

  .nuxt-link-exact-active {
    @apply font-bold;
  }

  .cta-container {
    --flow-space: 1em;

    align-items: center;
    display: flex;
    margin-left: auto;
    position: fixed;
    right: 2rem;
  }

  .primary-cta {
    @apply text-xl p-3;
  }

  .primary-cta-number {
    @apply text-4xl;
  }
}
</style>
