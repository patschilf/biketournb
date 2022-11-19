<template>
  <PageSection :title="'Routes'">
    <div class="grid grid-cols-3 gap-6">
      <Teaser v-for="route in routes" :key="route.id" class="aspect-4/3" :route="route" />
    </div>
  </PageSection>
</template>

<script setup lang="ts">
  const routes = await useRoutes().all()
</script>