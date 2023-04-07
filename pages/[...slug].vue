<template>
  <ContentDoc v-slot="{ doc: page }">
    <PageHeader :title="page.title" />
    <div class="container mx-auto text-lg">
      <ContentRenderer :value="page" :components="components" />
    </div>
  </ContentDoc>
</template>

<script setup lang="ts">
const components = {
  a: `CustomProseA`,
}
</script>
