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
            :label="distanceLabel"
            v-model="distance"
            :min="minDistance"
            :max="maxDistance"
            step="10" />
          <FormFilterRange class="w-full sm:w-1/2 min-w-60"
            name="elevation"
            :label="elevationLabel"
            v-model="elevation"
            :min="minElevation"
            :max="maxElevation"
            step="100" />
        </div>
      </div>
    </form>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <Teaser class="aspect-4/3" v-for="route of routes" :key="route._path" :route="route" :url="route._path">
        <ContentRenderer :value="route" :excerpt="true">
          <template #empty></template>
        </ContentRenderer>
      </Teaser>
    </div>
  </div>
</template>

<script setup lang="ts">
  const location = ref("")
  const locations = await queryContent('locations').find()

  const minDistance = 20
  const maxDistance = 120
  const distance = ref(120)
  const distanceLabel = computed(() => distance.value < maxDistance
    ? `Max. Distance: ${distance.value}km`
    : 'Distance: any')

  const minElevation = 100
  const maxElevation = 1000
  const elevation = ref(1000)
  const elevationLabel = computed(() => elevation.value < maxElevation
    ? `Max. Elevation: ${elevation.value}m`
    : 'Elevation: any')

  const routeContent = await queryRoutes()
  const routes = computed(() => routeContent.filter(route => 
    (location.value === "" || route.location.id == location.value) 
      && (distance.value === maxDistance || route.distance <= distance.value )
      && (elevation.value === maxElevation || route.elevation <= elevation.value)))
    
</script>