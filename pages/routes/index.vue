<template>
  <PageHeader title="Routes" />
  <div class="container mx-auto my-40">
    <form class="text-lg py-8">
      <div class="flex flex-row gap-4">
        <FormFilterSelect class="flex-auto"
          name="location"
          label="Location"
          v-model="location"
          :options="locations"
          empty="Anywhere"
          @change="refresh()"/>
        <FormFilterRange class="flex-initial w-1/4 min-w-60"
          name="distance"
          :label="distance < maxDistance ? `Distance: ${distance}km` : 'Distance: any'"
          v-model="distance"
          :min="minDistance"
          :max="maxDistance"
          step="10"
          @change="refresh()" />
        <FormFilterRange class="flex-initial w-1/4 min-w-60"
          name="elevation"
          :label="elevation < maxElevation ? `Elevation: ${elevation}m` : 'Elevation: any'"
          v-model="elevation"
          :min="minElevation"
          :max="maxElevation"
          step="100"
          @change="refresh()" />        
      </div>
    </form>
    <div class="grid grid-cols-3 gap-6">
      <Teaser class="aspect-4/3" v-if="routes?.length" v-for="route of routes" :key="route._path" :route="route" :url="route._path">
        <ContentRenderer :value="route" :excerpt="true">
          <template #empty></template>
        </ContentRenderer>
      </Teaser>
      <span v-else class="text-lg">No routes found.</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { QueryBuilderWhere } from '@nuxt/content/dist/runtime/types';
  
  const location = ref("")
  const minDistance = ref(20)
  const maxDistance = ref(120)
  const distance = ref(120)
  const minElevation = ref(100)
  const maxElevation = ref(1000)
  const elevation = ref(1000)

  interface Location {
    value: number
    label: string
  }

  const { data: locations } = await useAsyncData('locations', () => queryContent('/locations').find(), {
    transform: (locations) => locations.map<Location>(location => ({
      value: Number(location.id),
      label: location.label,
    }))
  })

  const { data: routes, refresh } = await useAsyncData('routes', async () => {
    const query = queryContent('/routes')
    const where: QueryBuilderWhere = {}
    if (distance.value < maxDistance.value) {
      where.distance = { $lte: distance.value }
    }

    if (elevation.value < maxElevation.value) {
      where.elevation = { $lte: elevation.value }
    }

    if (location.value) {
      where.location = Number(location.value)
    }
    query.where(where)

    return query.find()
  }, {
    transform: (routes) => routes.map(route => ({
      ...route,
      location: locations.value?.find(location => location.value === route.location)
    }))
  })
</script>