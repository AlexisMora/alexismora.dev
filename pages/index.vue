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
          <div>
            <LinksContainer />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
