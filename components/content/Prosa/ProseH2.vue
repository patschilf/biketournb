<template>
  <h2 :id="id" class="text-2xl font-bold mb-6 mt-9">
    <slot />
  </h2>
</template>

<script setup lang="ts">
defineProps<{ id: string }>()
</script>
