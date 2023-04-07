<template>
  <h2 :id="id" class="mb-6 mt-9 text-2xl font-bold">
    <slot />
  </h2>
</template>

<script setup lang="ts">
defineProps<{ id: string }>()
</script>
