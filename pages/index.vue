<template>
  <fragment>
    <PaperShape />

    <ThePageHeader
      v-observe-visibility="{ callback: moveCTAPosition }"
      :scrolled="scrolled"
    >
      <HomeHero :scrolled="scrolled" />
    </ThePageHeader>

    <main class="flow wrapper">
      <section class="flow">
        <h2>Features</h2>

        <ul>
          <li>
            Learn in your native language
          </li>
          <li>
            Library of the most common words with pronunciation - core
            conversational vocabulary, nouns, adjectives, verbs, pronouns and
            more
          </li>
          <li>
            Basic grammar and connector words for creating full thoughts and
            sentences
          </li>
          <li>
            Language resources for consuming the language - music, movies,
            podcasts, books, articles, content creators and more
          </li>
        </ul>
      </section>

      <section class="flow">
        <h2>Process overview</h2>

        <HomeProcess />
      </section>

      <section class="flow">
        <h2>Get involved</h2>

        <div class="columns">
          <HomeGetInvolvedColumn
            link="https://github.com/edburtnieks/auszra/issues"
          >
            This is a completely free and open-source project. Full source code
            is publicly available. If you have the design or technical
            knowledge, you can help shape our website and application.

            <template v-slot:link>
              See all issues on GitHub
            </template>
          </HomeGetInvolvedColumn>

          <HomeGetInvolvedColumn
            link="https://github.com/edburtnieks/auszra/issues?q=is%3Aopen+is%3Aissue+project%3Aedburtnieks%2Fauszra%2F4"
          >
            You don't have to have technical skills to contribute. All
            translations will be done by us and the community so feel free to
            contribute using your language knowledge.

            <template v-slot:link>
              See translation issues on GitHub
            </template>
          </HomeGetInvolvedColumn>
        </div>
      </section>

      <section class="flow">
        <h2>Inspiration</h2>

        <div>
          <p>
            This project was inspired by
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.nathanieldrew.com"
            >
              Nathaniel Drew's
            </a>
            challenge
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.youtube.com/watch?v=lhcvejeAB0E"
            >
              I Learned Portuguese in 7 Days – Part 1 (My Method).
            </a>
          </p>

          <p>
            For more detailed "what", "how" and "why" check out his video.
          </p>
        </div>
      </section>
    </main>
  </fragment>
</template>

<script lang="ts">
import Vue from 'vue'

import PaperShape from '~/assets/images/paper-shape.svg?inline'

export default Vue.extend({
  components: {
    PaperShape,
  },
  data: () => ({
    scrolled: false,
  }),
  methods: {
    moveCTAPosition(isVisible: boolean) {
      if (!isVisible) {
        this.scrolled = true
      } else {
        this.scrolled = false
      }
    },
  },
  head() {
    return {
      title: 'Free and open-source online language learning platform',
    }
  },
})
</script>

<style lang="scss" scoped>
svg {
  height: 0;
  position: absolute;
  width: 0;
}
</style>
