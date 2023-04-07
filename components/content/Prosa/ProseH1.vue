<template>
  <h1 :id="id" class="text-3xl">
    <slot />
  </h1>
</template>

<script setup lang="ts">
defineProps<{ id: string }>()
</script>
