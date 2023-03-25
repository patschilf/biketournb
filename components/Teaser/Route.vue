<template>
  <Teaser :image="route.images?.featured" :title="route.title" :url="route._path">
    <template #excerpt>
      <ContentRenderer :value="route" :excerpt="true" />
    </template>
    <template #footer>
      <div class="flex flex-row justify-between">
        <span>{{ route.location.label }}</span>
        <span>{{ route.distance }}km</span>
        <span>{{ route.duration }}</span>
        <span>{{ route.elevation }}m</span>
      </div>
    </template>
  </Teaser>
</template>

<script setup lang="ts">
  defineProps(["route"])

</script>