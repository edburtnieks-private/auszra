<template>
  <div>
    <header
      class="container mx-auto px-6 pb-10 lg:pb-20 pt-5 lg:pt-10 flex flex-col items-center"
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

      <p class="text-xl pt-5 lg:pt-20 font-light tracking-wider">
        Coming Soon!
      </p>

      <h1 class="text-3xl lg:text-5xl pt-5 tracking-wide leading-tight">
        Free and open source online language platform
      </h1>

      <p class="pt-2 tracking-wide">
        Start communicating and putting thoughts together in a new language as
        quickly as possible
      </p>

      <div class="pt-12 lg:pt-20 max-w-lg">
        <h2 class="text-xl lg:text-3xl font-bold tracking-wide leading-tight">
          Get updates and notification when we launch
        </h2>

        <p class="text-gray-700">We promise to never spam you.</p>

        <form
          class="pt-5"
          action="https://getform.io/f/06c5eed5-01b9-4c55-ad66-646993ff0947"
          method="POST"
          @submit.prevent="handleSubmit"
        >
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
                'bg-primary hover:bg-primary-light focus:bg-primary-light':
                  !isDone && !isError,
                'bg-red-600 cursor-not-allowed': isError,
                'bg-green-600 cursor-not-allowed': isDone,
              }"
              type="submit"
              :disabled="isDone || isLoading"
            >
              <span v-if="isError">Error</span>
              <span v-else-if="isDone">Thank you!</span>
              <span v-else-if="isLoading">Hang on...</span>
              <span v-else>Notify me</span>
            </button>
          </div>

          <small
            v-if="errors.email"
            class="block -mt-4 text-red-600 leading-4"
            v-text="errors.email"
          />

          <small v-if="error" class="block mt-2 text-red-600" v-text="error" />
        </form>
      </div>
    </header>

    <main class="container mx-auto px-6">
      <section class="py-5 lg:py-10">
        <h2 class="text-2xl lg:text-3xl pb-5 font-bold tracking-wide">
          How is it Different?
        </h2>

        <p class="text-xl tracking-wider max-w-4xl pb-5">
          We strongly believe and agree that language learning should be a fun,
          mind-expanding, and enriching experience, accessible completely free
          to everyone.
        </p>

        <p class="text-xl tracking-wider max-w-4xl pb-5">
          There are a lot of tools, resources, and apps when it comes to online
          language learning. Our approach is different. We will provide you with
          all the necessary resources and tools for you to start learning the
          basics and communicate with people as quickly as possible.
        </p>

        <p class="text-xl tracking-wider max-w-4xl">
          We want you to spend as little time as possible on our platform and
          instead have the material accessible at any time. We will accompany
          our language material with an application that will boost efficiency
          and will help you save even more time. However, our goal is NOT to
          make you spend time going through challenges and collect points and
          day streaks.
        </p>
      </section>

      <section class="py-5 lg:py-10">
        <h2 class="text-2xl lg:text-3xl pb-5 font-bold tracking-wide">
          Who is this for?
        </h2>

        <p class="text-xl tracking-wider max-w-4xl">
          As our aim is for you to start communicating with people in new way as
          quickly as possible and not to master the language, this will NOT be a
          fully-fledged language course with grammar lessons and all the edge
          cases. Instead, we will provide a solid starting point which will help
          you take the next steps if you desire to get serious with the target
          language in the future.
        </p>
      </section>

      <section class="py-5 lg:py-10">
        <h2 class="text-2xl lg:text-3xl pb-5 font-bold tracking-wide">
          Get Involved
        </h2>

        <p class="text-xl tracking-wider max-w-4xl pb-5">
          This is a completely free and open-source project. That means if you
          have the design and technical knowledge, you can help shape our
          website and application.
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
            >Nathaniel Drew's</a
          >
          challenge
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.youtube.com/watch?v=lhcvejeAB0E"
            class="underline text-blue-600"
            >I Learned Portuguese in 7 Days – Part 1 (My Method)</a
          >.
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
    async handleSubmit(event) {
      const { errors, isValid } = this.validateForm(this.formData)

      if (!isValid) {
        this.errors = errors
      } else {
        this.isLoading = true

        try {
          const response = await fetch(
            'https://getform.io/f/06c5eed5-01b9-4c55-ad66-646993ff0947',
            {
              method: 'POST',
              headers: { Accept: 'application/json' },
              dataType: 'json',
              body: new FormData(event.target),
            }
          )
          const data = await response.json()

          if (data.success) {
            this.isLoading = false
            this.isDone = true
          } else {
            throw new Error('Something went wrong')
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
