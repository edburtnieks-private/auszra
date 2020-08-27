<template>
  <div class="[ hero ] [ flow ]">
    <h1>
      Start communicating and putting thoughts together in a new language as
      quickly as possible.
    </h1>

    <p class="max-w-content-medium">
      Completely free and open-source online language learning platform created
      to make the biggest impact possible while being smart with your time and
      energy
    </p>

    <div class="cta-container">
      <div class="primary-cta-container">
        <HomePrimaryCTA />
      </div>

      <div class="secondary-cta-container">
        <HomeSecondaryCTA />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import HomePrimaryCTA from '~/components/page/home/HomePrimaryCTA.vue'
import HomeSecondaryCTA from '~/components/page/home/HomeSecondaryCTA.vue'

export default Vue.extend({
  components: {
    HomePrimaryCTA,
    HomeSecondaryCTA,
  },
})
</script>

<style lang="scss" scoped>
.hero {
  --flow-space: 2.5rem;

  position: relative;
}

.cta-container {
  bottom: 0;
  position: absolute;
  right: 0;
  transform: translateY(100%);
}

.primary-cta-container {
  transform: translateX(-5%);
}

.secondary-cta-container {
  transform: translate(50%, 2rem);
}
</style>
