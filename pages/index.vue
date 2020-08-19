<template>
  <fragment>
    <header class="wrapper">
      <TheMainNavigation />
      <TheHero />
    </header>

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

        <ol>
          <li>
            Find your mission
          </li>
          <li>
            Gather the building blocks
          </li>
          <li>
            Glue words together
          </li>
          <li>
            Consume the language
          </li>
        </ol>
      </section>

      <section class="flow">
        <h2>Get involved</h2>

        <div class="columns">
          <div class="flow">
            <p>
              This is a completely free and open-source project. Full source
              code is publicly available. If you have the design or technical
              knowledge, you can help shape our website and application.
            </p>

            <a
              href="https://github.com/edburtnieks/auszra/issues"
              target="_blank"
              rel="noreferrer noopener"
            >
              See all issues on GitHub
            </a>
          </div>

          <div class="flow">
            <p>
              You don't have to have technical skills to contribute. All
              translations will be done by us and the community so feel free to
              contribute using your language knowledge.
            </p>

            <a
              href="https://github.com/edburtnieks/auszra/issues?q=is%3Aopen+is%3Aissue+project%3Aedburtnieks%2Fauszra%2F4"
              target="_blank"
              rel="noreferrer noopener"
            >
              See translation issues on GitHub
            </a>
          </div>
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

export default Vue.extend({
  head() {
    return {
      title: 'Free and open-source online language learning platform',
    }
  },
})
</script>
