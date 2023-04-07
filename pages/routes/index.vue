<template>
  <PageHeader title="Routes" />
  <div class="container mx-auto my-40">
    <form class="py-8 text-lg">
      <div class="flex flex-col gap-4 lg:flex-row">
        <FormFilterSelect
          v-model="location"
          class="flex-auto"
          name="location"
          label="Location"
          :options="locations.map(({id, label}) => ({value: id, label}))"
          empty="Anywhere"
        />
        <div class="flex flex-initial flex-col gap-4 sm:flex-row">
          <FormFilterRange
            v-model="distance"
            class="w-full sm:w-1/2"
            name="distance"
            :label="`Max. Distance: ${distance < maxDistance ? `${distance}km` : 'any'}`"
            :min="minDistance"
            :max="maxDistance"
            :step="10"
          />
          <FormFilterRange
            v-model="elevation"
            class="w-full sm:w-1/2"
            name="elevation"
            :label="`Max. Elevation: ${elevation < maxElevation ? `${elevation}m` : 'any'}`"
            :min="minElevation"
            :max="maxElevation"
            :step="100"
          />
        </div>
      </div>
    </form>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      <TeaserRoute v-for="route of routes.filter(routeFilter)" :key="route._path" class="aspect-4/3" :route="route" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types'

const routes = await queryRoutes()
const locations = unique(routes.map(route => route.location))
const location = ref(``)

function routeFilter(route: ParsedContent) {
  return (location.value === `` || route.location.id === location.value) &&
      (distance.value === maxDistance || route.distance <= distance.value) &&
      (elevation.value === maxElevation || route.elevation <= elevation.value)
}

const minDistance = 20
const maxDistance = 120
const distance = ref(120)

const minElevation = 100
const maxElevation = 1000
const elevation = ref(1000)
</script>
