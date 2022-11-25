<template>
  <div class="group flex items-end bg-gray-300">
    <NuxtLink :to="url" class="w-full text-white group-hover:text-black bg-gradient-to-b from-transparent to-black group-hover:to-yellow p-4 pt-16 group-hover:pt-4 group-hover:h-full flex flex-col">
      <h3 class="text-xl font-bold hover:text-red">{{ route.title }}</h3>
      <div class="hidden group-hover:block flex-grow">
        <slot />
      </div>
      <div class="flex flex-row justify-between">
        <ContentQuery :path="`/locations/${route.location}`" onle="label" find="one" v-slot="{ data: location }">
          <span>{{ location.label }}</span>
        </ContentQuery>
        <span>{{ route.distance }}</span>
        <span>{{ route.duration }}</span>
        <span>{{ route.elevation }}</span>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps(["route", "url"])
</script>
