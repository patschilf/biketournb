<template>
  <div class="h-36 bg-red z-10"></div>
  <LeafletMap class="container mx-auto aspect-3/2 -mt-12"
    :view="[46.5, -66.0]" 
    :zoom="8" 
    :max-zoom="18"
    :markers="[]"
    :routes="routes"
  />
</template>

<script setup lang="ts">
  const routes = await queryRoutes()
</script>