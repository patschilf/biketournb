<template>
  <div class="h-36 bg-red z-10"></div>
  <Placeholder class="container mx-auto aspect-7/5 -mt-12" label="Map" />
  <PageSection :title="'Recently added'">
    <div class="grid grid-cols-3 gap-6">
      <Teaser v-for="route in routes" :key="route._path" class="aspect-4/3" :route="route" :url="route._path">
        <ContentRenderer :value="route" :excerpt="true">
          <template #empty></template>
        </ContentRenderer>
      </Teaser>
    </div>
  </PageSection>
</template>

<script setup lang="ts">
  const routes = (await queryRoutes()).slice(0, 3)
</script>