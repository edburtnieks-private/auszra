<template>
  <div>
    <header
      class="container mx-auto px-6 pb-10 lg:pb-20 pt-5 lg:pt-10 flex flex-col"
    >
      <div class="flex justify-between items-center w-full">
        <n-link :to="{ name: 'coming-soon' }">
          <img src="~/assets/images/logo.svg" alt="auszra logo" />

          <span
            class="text-gray-700 uppercase text-sm font-bold tracking-wider block -mt-3"
          >
            Auszra
          </span>
        </n-link>

        <a
          class="text-gray-700"
          href="https://github.com/edburtnieks/auszra"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            ></path>
          </svg>
        </a>
      </div>

      <p class="text-xl pt-5 lg:pt-20 font-light tracking-wider self-center">
        Coming Soon!
      </p>

      <div>
        <h1
          class="max-w-5xl text-3xl lg:text-4xl pt-5 tracking-wide leading-tight"
        >
          Start communicating and putting thoughts together in a new language as
          quickly as possible
        </h1>
      </div>

      <p class="pt-5 tracking-wide max-w-lg">
        Completely free and open-source online language learning platform made
        to make the biggest impact possible while being smart with your time and
        energy.
      </p>

      <div class="pt-12 lg:pt-20 max-w-lg self-center">
        <h2 class="text-xl lg:text-3xl font-bold tracking-wide leading-tight">
          Get updates and notification when we launch
        </h2>

        <p class="text-gray-700">We promise to never spam you.</p>

        <form class="pt-5" @submit.prevent="handleSubmit">
          <input type="hidden" value="1" name="embed" class="hidden" />

          <label
            class="block text-gray-700 font-bold tracking-wide pb-2"
            for="email"
          >
            Email
          </label>

          <div class="sm:flex pb-5">
            <input
              id="email"
              v-model="formData.email"
              type="email"
              name="email"
              class="bg-white shadow appearance-none border rounded w-full py-2 px-3 sm:mr-4 mb-4 sm:mb-0 text-gray-700 leading-tight"
              :class="{
                'border-red-600': errors.email || isError,
                'border-green-600': valid.email && !isError,
                'cursor-not-allowed': isDone,
              }"
              :disabled="isDone"
              @input="onChange"
              @blur="onChange"
              @invalid.prevent
            />

            <button
              class="text-white font-bold py-2 px-10 w-full sm:w-auto h-10 sm:h-auto rounded leading-none whitespace-no-wrap"
              :class="{
                'bg-primary hover:bg-primary-light focus:bg-primary-light': !isDone,
                'bg-green-600 cursor-not-allowed': isDone,
              }"
              type="submit"
              :disabled="isDone || isLoading"
            >
              <span v-if="isDone">Thank you!</span>
              <span v-else-if="isLoading">Hang on...</span>
              <span v-else>Notify me</span>
            </button>
          </div>

          <small
            v-if="errors.email"
            class="block -mt-4 text-red-600 leading-4"
            v-text="errors.email"
          />

          <small
            v-if="error"
            class="block -mt-4 text-red-600 leading-4"
            v-text="error"
          />

          <small>
            <a
              href="https://buttondown.email"
              target="_blank"
              class="underline text-blue-600"
            >
              Powered by Buttondown.
            </a>
          </small>
        </form>
      </div>
    </header>

    <main class="container mx-auto px-6">
      <section class="py-5 lg:py-10">
        <h2 class="text-2xl lg:text-3xl pb-5 font-bold tracking-wide">
          Features
        </h2>

        <ul class="text-xl tracking-wider max-w-4xl list-disc pl-10">
          <li class="mb-5 pl-5">
            Learn in your native language
          </li>

          <li class="mb-5 pl-5">
            Library of the most common words with pronunciation - core
            conversational vocabulary, nouns, adjectives, verbs, pronouns and
            more
          </li>

          <li class="mb-5 pl-5">
            Basic grammar and connector words for creating full thoughts and
            sentences
          </li>

          <li class="pl-5">
            Language resources for consuming the language - music, movies,
            podcasts, books, articles, content creators and more
          </li>
        </ul>
      </section>

      <section class="py-5 lg:py-10">
        <h2 class="text-2xl lg:text-3xl pb-5 font-bold tracking-wide">
          How does it work
        </h2>

        <ol class="text-xl tracking-wider max-w-4xl list-decimal pl-10">
          <li class="mb-12 pl-5">
            Find your mission

            <ul class="mt-5 pl-5">
              <li class="mb-5 pl-5 list-disc">
                Find a clear motivation and write down as many reasons as
                possible for starting to learn a language
              </li>

              <li class="pl-5 list-disc">
                If any, write down a list of words that you already know
              </li>
            </ul>
          </li>

          <li class="mb-12 pl-5">
            Gather the building blocks

            <ul class="mt-5 pl-5">
              <li class="mb-5 pl-5 list-disc">
                Write down the top 1000 - 2000 words in the given language
              </li>

              <li class="mb-5 pl-5 list-disc">
                Organize the list of words
              </li>

              <li class="pl-5 list-disc">
                Listen to word pronunciation and speak words out loud
              </li>
            </ul>
          </li>

          <li class="mb-12 pl-5">
            Glue words together

            <ul class="mt-5 pl-5">
              <li class="pl-5 list-disc">
                Learn connector words - the most important conjugations, verbs
                and tenses
              </li>
            </ul>
          </li>

          <li class="pl-5">
            Consume the language

            <ul class="mt-5 pl-5">
              <li class="pl-5 list-disc">
                Train your ears and identify as many words as possible by
                listening to music, podcasts, watching movies, reading books,
                articles, following content creators on social media
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section class="py-5 lg:py-10">
        <h2 class="text-2xl lg:text-3xl pb-5 font-bold tracking-wide">
          Get Involved
        </h2>

        <p class="text-xl tracking-wider max-w-4xl pb-5">
          This is a completely free and open-source project. That means if you
          have the design and technical knowledge, you can help shape our
          website and application.
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/edburtnieks/auszra/issues"
            class="underline text-blue-600"
          >
            See GitHub issues.
          </a>
        </p>

        <p class="text-xl tracking-wider max-w-4xl">
          You don't have to have technical skills to contribute. All of the
          translations will be done by us and the community so feel free to
          contribute using your language knowledge.
        </p>
      </section>

      <section class="py-5 lg:py-10">
        <h2 class="text-2xl lg:text-3xl pb-5 font-bold tracking-wide">
          Inspiration
        </h2>

        <p class="text-xl tracking-wider max-w-4xl">
          This project was inspired by
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.nathanieldrew.com"
            class="underline text-blue-600"
          >
            Nathaniel Drew's
          </a>
          challenge
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.youtube.com/watch?v=lhcvejeAB0E"
            class="underline text-blue-600"
          >
            I Learned Portuguese in 7 Days – Part 1 (My Method).
          </a>
        </p>
      </section>
    </main>

    <footer class="container mx-auto px-6 py-8 text-right">
      &copy; Copyright 2020, Auszra
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: '',
      },
      isLoading: false,
      isDone: false,
      isError: false,
      errors: {},
      error: '',
      valid: {},
    }
  },
  methods: {
    async handleSubmit() {
      const { errors, isValid } = this.validateForm(this.formData)

      if (!isValid) {
        this.errors = errors
      } else {
        this.isLoading = true

        try {
          const response = await fetch(
            'https://api.buttondown.email/v1/subscribers',
            {
              method: 'POST',
              headers: {
                Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email: this.formData.email }),
            }
          )

          if (response.status === 400) {
            throw new Error('Something went wrong')
          }

          if (response.status === 201) {
            this.isLoading = false
            this.isDone = true
          }
        } catch (error) {
          this.isError = true
          this.isLoading = false
          this.isDone = false
          this.formData.email = ''
          this.error = error.message

          console.error('Error while submitting the form: ', error)
        }
      }
    },
    onChange(event) {
      if (!this.isDone) {
        const { name: field, value, validity } = event.target

        const { message, isValid } = this.validateInput(
          field,
          value,
          validity.valid
        )

        if (!isValid) {
          this.$set(this.errors, field, message)
        }

        if (isValid) {
          this.$delete(this.errors, field)
        }
      }

      if (this.isError) {
        this.isError = false
        this.error = ''
      }
    },
    validateForm(data) {
      const errors = {}
      let isValid = true

      for (const [key, value] of Object.entries(data)) {
        const { message, isValid: isInputValid } = this.validateInput(
          key,
          value
        )

        if (!isInputValid) errors[key] = message
      }

      if (Object.keys(errors).length > 0) isValid = false

      return {
        errors,
        isValid,
      }
    },
    validateInput(field, value, valid = true) {
      let message = ''
      let isValid = true

      if (value === '') {
        message = `Please enter your ${field}`
        isValid = false

        if (this.valid[field]) this.valid[field] = false
      }

      if (field === 'email' && !valid && value !== '') {
        message = 'Please enter a valid email'
        isValid = false

        if (this.valid[field]) this.valid[field] = false
      }

      if (isValid) this.valid[field] = true

      return {
        message,
        isValid,
      }
    },
  },
  head() {
    return {
      title: 'Auszra - Coming Soon',
    }
  },
}
</script>
