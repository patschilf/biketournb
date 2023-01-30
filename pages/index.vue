<template>
  <div class="h-36 bg-red z-10"></div>
  <LeafletMap class="container mx-auto w-full h-screen -mt-12"
    :view="[46.5, -66.0]" 
    :zoom="8" 
    :max-zoom="18"
    :markers="[
      [46.5, -66.0]
    ]"
    :tracks="tracks"
  />
  <PageSection :title="'Recently added'">
    <div class="grid grid-cols-3 gap-6">
      <Teaser v-for="route in recent" :key="route._path" class="aspect-4/3" :route="route" :url="route._path">
        <ContentRenderer :value="route" :excerpt="true">
          <template #empty></template>
        </ContentRenderer>
      </Teaser>
    </div>
  </PageSection>
</template>

<script setup lang="ts">
  const routes = await queryRoutes()
  const recent = computed(() => routes.slice(0, 3))
  const tracks = computed(() => routes.map(route => route.track).filter(track => track !== null))
</script>