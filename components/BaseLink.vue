<template>
  <div class="w-1/4">
    <a
      :href="props.url"
      type="button"
      class="cursor-pointer	py-2 px-4 bg-teal-400 hover:bg-teal-500 focus:ring-teal-300 focus:ring-offset-teal-100 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
    >
      <slot />
    </a>
  </div>
</template>

<script lang="ts" setup>
  interface Props {
    url: string
  }
  const props = defineProps<Props>()
</script>
