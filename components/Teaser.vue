<template>
  <div class="flex items-end bg-gray-300">
    <div class="w-full text-white bg-gradient-to-b from-transparent to-black p-4 pt-16">
      <a href="#" class="hover:text-yellow">
        <h3 class="text-xl font-bold">{{ title }}</h3>
      </a>
      <div class="flex flex-row justify-between">
        <span>{{ location }}</span>
        <span>{{ distance }}</span>
        <span>{{ duration }}</span>
        <span>{{ elevation }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps([
    "title", 
    "location", 
    "distance", 
    "duration", 
    "elevation",
  ])
</script>
