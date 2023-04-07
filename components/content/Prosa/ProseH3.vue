<template>
  <h3 :id="id" class="mb-3 mt-6 text-xl">
    <slot />
  </h3>
</template>

<script setup lang="ts">
defineProps<{ id: string }>()
</script>
