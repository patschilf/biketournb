<template>
  <h3 :id="id" class="text-xl mb-3 mt-6">
    <slot />
  </h3>
</template>

<script setup lang="ts">
  defineProps<{ id: string }>()
</script>