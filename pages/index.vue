<template>
  <div class="mx-3 mb-20 sm:mb-6">
    <div
      class="flex flex-col justify-center w-full  max-w-3xl mx-auto font-sans"
    >
      <div class="flex flex-col justify-center text-center mt-32">
        <div class="mx-auto my-auto">
          <a href="#" class="block">
            <img
              alt="profil"
              src="assets/img/alexis_mora.jpg"
              class="mx-auto object-cover rounded-full h-32 w-32 mb-4"
            />
          </a>

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
          <div class="mt-12 text-left">
            <h3 class="font-light text-left">Some of my stuff</h3>
            <div class="mt-6">
              <BaseCard img="alexismora_cryptoextchange.png" title="Crypto Exchange" :tags="['vue','tailwind']" url="https://cryptoexchange-alexis.netlify.app/">
              Crypto exchange made with vue and the coin market cap API
              </BaseCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import BaseCard from '~/components/BaseCard.vue'
</script>
