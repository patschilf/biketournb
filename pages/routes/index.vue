<template>
  <PageHeader title="Routes" />
  <div class="container mx-auto my-40">
    <form class="text-lg py-8">
      <div v-if="locations && locations.length > 1" class="relative w-1/2 mx-auto">
        <select name="location" class="block w-full appearance-none border py-3 px-4 pr-8 rounded leading-tight" v-model="location" @change.prevent="selectLocationHandler">
          <option value="">Anywhere</option>
          <option v-for="location of locations" :value="location.id">{{ location.label }}</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 flex right-0 items-center px-2">
          <svg class="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </form>
    <div class="grid grid-cols-3 gap-6">
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
  const { data: locations } = await useAsyncData('locations', () => queryContent('/locations').find())
  const { data: routes, refresh } = await useAsyncData('routes', () => {
    const query = queryContent('/routes')
    if (location.value) {
      query.where({location: location.value})
    }
    return query.find()
  }, {
    transform: (routes) => routes.map(route => ({
      ...route,
      location: locations.value?.find(location => location.id === route.location)
    }))
  })

  const selectLocationHandler = () => {
    refresh()
  }
</script>