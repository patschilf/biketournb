<template>
  <PageHeader title="Routes" />
  <div class="container mx-auto my-40">
    <form class="text-lg py-8">
      <div class="flex flex-row gap-4">
        <div class="flex-auto">
          <label class="block px-4 mb-4 font-bold text-gray-600" for="filter-location">Location</label>
          <div class="block relative">
            <select id="filter-location" name="location" :disabled="!locations" class="block w-full appearance-none border py-3 px-4 pr-8 rounded leading-tight" v-model="location" @change.prevent="refresh()">
              <option value="">Anywhere</option>
              <option v-for="location of locations" :value="location.id">{{ location.label }}</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 flex right-0 items-center px-2">
              <svg class="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <div class="flex-initial w-1/4 min-w-60">
          <label v-if="distance < maxDistance" class="block px-4 mb-4 font-bold text-gray-600" for="filter-distance">Max. Distance: {{ distance }}km</label>
          <label v-else class="block px-4 mb-4 font-bold text-gray-600" for="filter-distance">Distance: any</label>
          <div class="block relative">
            <div class="flex items-center bg-gray-200 px-4 py-3">
              <input id="filter-distance" name="distance" class="w-full" type="range" :min="minDistance" :max="maxDistance" step="10" @change.prevent="refresh()" v-model="distance" />
            </div>
          </div>
        </div>
        <div class="flex-initial w-1/4 min-w-60">
          <label v-if="elevation < maxElevation" class="block px-4 mb-4 font-bold text-gray-600" for="filter-elevation">Max. Elevation: {{ elevation }}m</label>
          <label v-else class="block px-4 mb-4 font-bold text-gray-600" for="filter-elevation">Elevation: any</label>
          <div class="block relative">
            <div class="flex items-center bg-gray-200 px-4 py-3">
              <input id="filter-elevation" name="elevation" class="w-full" type="range" :min="minElevation" :max="maxElevation" step="100" @change="refresh()" v-model="elevation" />
            </div>
          </div>
        </div>        
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

  const { data: locations } = await useAsyncData('locations', () => queryContent('/locations').find())
  const { data: routes, refresh } = await useAsyncData('routes', () => {
    const query = queryContent('/routes')
    const where: QueryBuilderWhere = {}
    if (distance.value < maxDistance.value) {
      where.distance = { $lte: distance.value }
    }

    if (elevation.value < maxElevation.value) {
      where.elevation = { $lte: elevation.value }
    }

    if (location.value) {
      where.location = location.value
    }
    query.where(where)

    return query.find()
  }, {
    transform: (routes) => routes.map(route => ({
      ...route,
      location: locations.value?.find(location => location.id === route.location)
    }))
  })
</script>