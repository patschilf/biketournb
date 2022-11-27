<template>
  <div class="static h-screen mb-40">
    <div
      class="absolute flex h-full w-full items-center backdrop-brightness-50">
      <div class="mx-auto w-2/3">
        <h1 class="text-6xl font-bold uppercase text-white">
          Explore New Brunswick by Bike
        </h1>
        <span class="bg-yellow p-4 text-lg uppercase">
          One route at a time, we are connecting communities in every corner
          of the province.
        </span>
      </div>
    </div>
  </div>
  <PageSection :title="'Recently added'">
    <div class="grid grid-cols-3 gap-6">
      <Teaser v-for="route in routes" :key="route._path" class="aspect-4/3" :route="route" :url="route._path">
        <ContentRenderer :value="route" :excerpt="true">
          <template #empty></template>
        </ContentRenderer>
      </Teaser>
    </div>
  </PageSection>
  <PageSection :title="'Stay tuned'">
    <Placeholder class="w-full mb-40 aspect-3/1" :label="'Newsletter Signup Form'" />
  </PageSection>
  <section class="grid grid-cols-6 divide-x">
    <Placeholder class="aspect-4/3" :label="'Image 1'" />
    <Placeholder class="aspect-4/3" :label="'Image 2'" />
    <Placeholder class="aspect-4/3" :label="'Image 3'" />
    <Placeholder class="aspect-4/3" :label="'Image 4'" />
    <Placeholder class="aspect-4/3" :label="'Image 5'" />
    <Placeholder class="aspect-4/3" :label="'Image 6'" />
  </section>
</template>

<script setup lang="ts">
  import { useAsyncLocations } from '~~/composables/useLocationContent';
  import { useAsyncRoutes } from '~~/composables/useRouteContent';

  const { locations } = await useAsyncLocations()
  const { routes } = await useAsyncRoutes(locations.value, {}, 3)
</script>