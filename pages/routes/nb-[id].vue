<template>
  <header>
    <h1 class="font-bold uppercase text-white text-center text-3xl bg-red py-12">{{ routeData.title }}</h1>
  </header>
  <PageSection :title="'The Route'" class="mb-40 mt-40">
    <Placeholder :label="'Map'" class="w-full aspect-4/3" />
  </PageSection>
</template>

<script setup>
  const route = useRoute()
  const routeData = await useRoutes().get(route.params.id)
</script>