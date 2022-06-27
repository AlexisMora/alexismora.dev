<template>
  <div
    class="flex flex-col justify-center w-full h-screen max-w-3xl mx-auto font-sans"
  >
    <div class="flex flex-col justify-center text-center">
      <div class="mx-auto">
        <div id="title">
          <h1 class="text-2xl font-bold">Alexis Mora</h1>
          <p class="text-lg">Frontend Engineer</p>
        </div>
        <div class="mt-12 text-left">
          <h3 class="font-light text-left">About</h3>
          <p class="mt-6">
            I'm a software developer focused on frontend & design.
          </p>
          <p class="mt-2">
            most of the projects I do are with Vue with Typescript and
            Django-restframework
          </p>
          <p class="mt-2">
            Currently i'm building applications as a Frontend Engineer at
            <a class="text-teal-400" href="https://www.apsl.net/en/">Apsl</a>
          </p>
        </div>
        <div class="mt-12 text-left">
          <h3 class="font-light text-left">Links</h3>
          <div class="mt-6">
            <BaseLink :url=githubUrl>
            <div class="flex justify-evenly">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
              <p>Github</p>
              </div>
            </BaseLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import BaseLink from "~/components/BaseLink.vue" 
  const githubUrl = 'https://github.com/AlexisMora'
</script>
