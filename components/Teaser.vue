<template>
  <div class="flex items-end bg-gray-300">
    <div class="w-full text-white bg-gradient-to-b from-transparent to-black p-4 pt-16">
      <NuxtLink :to="url" class="hover:text-yellow">
        <h3 class="text-xl font-bold">{{ route.title }}</h3>
      </NuxtLink>
      <div class="flex flex-row justify-between">
        <span>{{ route.location }}</span>
        <span>{{ route.distance }}</span>
        <span>{{ route.duration }}</span>
        <span>{{ route.elevation }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps(["route"])
</script>
