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
  <section class="container mx-auto px-4">
    <h2
      class="pb-8 text-2xl font-bold uppercase underline decoration-yellow decoration-8 underline-offset-8">
      Recently added
    </h2>
    <div class="mb-40 grid grid-cols-3 gap-6">
      <Teaser v-for="route in routes" :key="route.id" class="aspect-4/3" :route="route" />
    </div>
  </section>
  <section class="container mx-auto px-4">
    <h2
      class="pb-8 text-2xl font-bold uppercase underline decoration-yellow decoration-8 underline-offset-8">
      Stay tuned
    </h2>
    <Placeholder class="w-full mb-40 aspect-3/1" :label="'Newsletter Signup Form'" />
  </section>
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
  const routes = await useRoutes().all()
</script>
