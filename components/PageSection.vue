<template>
  <section class="container mx-auto my-20 px-4">
    <h2
      class="pb-8 text-2xl font-bold uppercase underline decoration-yellow decoration-8 underline-offset-8">
      {{ title }}
    </h2>
    <slot />
  </section>
</template>

<script setup>
  const props = defineProps(['title'])
</script>