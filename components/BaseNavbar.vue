<template>
  <div class="fixed top-0 left-0 w-full">
    <nav class="bg-white dark:bg-gray-800 shadow top-0">
      <div class="max-w-7xl mx-auto px-8 container">
        <div class="flex items-center justify-end h-16">
          <div class="flex items-baseline space-x-4">
            <NuxtLink
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              to="/"
            >
              Home
            </NuxtLink>
            <NuxtLink
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              to="/blog"
            >
              Blog
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
