<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: ''
  },
  blank: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <ProseA class="text-red hover:underline" :href="href" :blank="blank">
    <slot />
  </ProseA>
</template>