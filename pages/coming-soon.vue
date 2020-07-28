<template>
  <div>
    <header
      class="container mx-auto px-4 py-10 pb-20 flex flex-col items-center"
    >
      <div class="flex justify-between w-full">
        <n-link :to="{ name: 'coming-soon' }">Auszra</n-link>
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

      <p class="text-xl text-center pt-20 font-light tracking-wider">
        Coming Soon!
      </p>

      <h1 class="text-5xl text-center pt-5 tracking-wide">
        Completely free and open source online language platform inspired by
        <a
          href="https://www.nathanieldrew.com"
          target="_blank"
          rel="noreferrer noopener"
          class="underline"
        >
          Nathaniel Drew
        </a>
      </h1>

      <div class="pt-20">
        <h2 class="text-3xl font-bold tracking-wide">
          Get updates and know when we launch!
        </h2>

        <form
          class="pt-5"
          name="newsletter"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          @submit.prevent
        >
          <p class="hidden">
            <label>Don’t fill this field: <input name="bot-field" /></label>
          </p>

          <label
            class="block text-gray-700 font-bold tracking-wide pb-2"
            for="email"
          >
            Email
          </label>

          <div class="flex">
            <input
              id="email"
              type="email"
              name="email"
              class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />

            <button
              class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded leading-none"
              type="submit"
            >
              Join
            </button>
          </div>
        </form>
      </div>
    </header>

    <main class="container mx-auto px-4">
      <section class="py-20">
        <h2 class="text-3xl pb-8 font-bold tracking-wide">
          How is it different?
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

      <section class="py-10">
        <h2 class="text-3xl pb-5 font-bold tracking-wide">
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

      <section class="py-10">
        <h2 class="text-3xl pb-5 font-bold tracking-wide">
          Get Involved
        </h2>

        <p class="text-xl tracking-wider max-w-4xl pb-5">
          This is a completely free and open-source project. That means if you
          have the design and technical knowledge, you can help shape our
          website and application.
        </p>

        <p class="text-xl tracking-wider max-w-4xl">
          But you don't have to have technical skills to contribute. All of the
          translations will be done by us and the community so feel free to
          contribute using your language knowledge.
        </p>
      </section>

      <section class="py-10">
        <h2 class="text-3xl pb-5 font-bold tracking-wide">
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

    <footer class="container mx-auto py-8 text-right">
      &copy; Copyright 2020, Auszra
    </footer>
  </div>
</template>

<script lang="ts">
export default {
  head() {
    return {
      title: 'Auszra - Coming Soon',
    }
  },
}
</script>
