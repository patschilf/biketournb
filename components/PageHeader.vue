<template>
  <header class="bg-red mb-9">
    <h1 class="font-bold uppercase text-white text-center text-3xl py-12">{{ title }}</h1>
  </header>
</template>

<script setup lang="ts">
  const props = defineProps(['title'])
</script>

<style scoped>
  header {
    background-color: #da1500;
    background-image: url("/svg/background-cogs.svg")
  }
</style>