<template>
  <Teaser :image="route.images?.featured" :title="route.title" :url="route._path">
    <template #excerpt>
      <ContentRenderer :value="route" :excerpt="true" />
    </template>
    <template #footer>
      <div class="mt-2 flex flex-row justify-between">
        <span>
          <IconMapPin /><span class="ml-2">{{ route.location.label }}</span>
        </span>
        <span>
          <IconArrowRight v-if="route.direction === DIRECTION.ONE_WAY" />
          <IconArrowCircle v-if="route.direction === DIRECTION.LOOP" />
          <span class="ml-2">{{ route.distance }}km</span></span>
        <span>
          <IconArrowTrendUp /><span class="ml-2">{{ route.elevation }}m</span>
        </span>
      </div>
    </template>
  </Teaser>
</template>

<script setup lang="ts">
import { DIRECTION } from '../../composables/queryRoutes'

defineProps({
  route: {
    type: Object,
    required: true,
  },
})

</script>
