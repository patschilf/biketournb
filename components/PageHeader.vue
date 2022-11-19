<template>
  <header>
    <h1 class="font-bold uppercase text-white text-center text-3xl bg-red py-12">{{ title }}</h1>
  </header>
</template>

<script setup lang="ts">
  const props = defineProps(['title'])
</script>