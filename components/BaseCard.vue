<template>
  <div
    @click="e=>goToUrl()"
    class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto"
  >
    <a href="#" class="w-full block h-full">
      <img
        alt="blog photo"
        :src="imgUrl"
        class="max-h-40 w-full object-cover"
      />
      <div class="bg-white dark:bg-gray-800 w-full p-4">
        <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
          {{ title }}
        </p>
        <p class="text-gray-400 dark:text-gray-500 font-normal text-md">
          <slot />
        </p>
        <div class="flex flex-wrap justify-starts items-center mt-4">
          <BaseTag v-for="tag in tags" :key="tag">
            {{ tag }}
          </BaseTag>
        </div>
      </div>
    </a>
  </div>
</template>

<script lang="ts" setup>
  interface Props {
    img: string
    title: string
    tags: Array<string>
    url: string
  }
  const props = defineProps<Props>()
  const imgUrl = `/assets/img/${props.img}`
    function goToUrl() {
     window.location.href = props.url
  }
</script>