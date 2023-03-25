<template>
  <PageHeader title="Routes" />
  <div class="container mx-auto my-40">
    <form class="text-lg py-8">
      <div class="flex flex-col lg:flex-row gap-4">
        <FormFilterSelect class="flex-auto"
          name="location"
          label="Location"
          v-model="location"
          :options="locations.map(({id, label}) => ({value: id, label}))"
          empty="Anywhere" />
        <div class="flex flex-col sm:flex-row flex-initial gap-4">
          <FormFilterRange class="w-full sm:w-1/2 min-w-60"
            name="distance"
            :label="`Max. Distance: ${distance < maxDistance ? `${distance}km` : 'any'}`"
            v-model="distance"
            :min="minDistance"
            :max="maxDistance"
            step="10" />
          <FormFilterRange class="w-full sm:w-1/2 min-w-60"
            name="elevation"
            :label="`Max. Elevation: ${elevation < maxElevation ? `${elevation}m` : 'any'}`"
            v-model="elevation"
            :min="minElevation"
            :max="maxElevation"
            step="100" />
        </div>
      </div>
    </form>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <TeaserRoute class="aspect-4/3" v-for="route of routes.filter(routeFilter)" :key="route._path" :route="route" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ParsedContent } from '@nuxt/content/dist/runtime/types';

  const routes = await queryRoutes()
  const locations = unique(routes.map(route => route.location))
  const location = ref("")

  function routeFilter(route: ParsedContent) {
    return (location.value === "" || route.location.id == location.value) 
      && (distance.value === maxDistance || route.distance <= distance.value )
      && (elevation.value === maxElevation || route.elevation <= elevation.value)
  }

  const minDistance = 20
  const maxDistance = 120
  const distance = ref(120)

  const minElevation = 100
  const maxElevation = 1000
  const elevation = ref(1000)
</script>