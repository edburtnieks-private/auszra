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

    <div class="[ cta-container ] [ flow ]">
      <Flipped v-if="!scrolled" flip-id="primary-cta">
        <div class="primary-cta-container">
          <HomePrimaryCTA />
        </div>
      </Flipped>

      <Flipped v-if="!scrolled" flip-id="secondary-cta">
        <div class="secondary-cta-container">
          <HomeSecondaryCTA />
        </div>
      </Flipped>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Flipped } from 'vue-flip-toolkit'

import HomePrimaryCTA from '~/components/page/home/HomePrimaryCTA.vue'
import HomeSecondaryCTA from '~/components/page/home/HomeSecondaryCTA.vue'

export default Vue.extend({
  components: {
    Flipped,
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

<style lang="scss" scoped>
.hero {
  --flow-space: 2.5rem;

  margin-top: calc(104px + 2rem);
}

.cta-container {
  --flow-space: 1.5em;

  align-items: flex-end;
  bottom: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  transform: translateY(100%);
}

.secondary-cta-container {
  transform: translateX(35%);
}
</style>
