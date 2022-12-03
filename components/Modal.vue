<template>
  <Teleport to="body">
    <div id="modal" class="top-0 left-0 w-full h-full backdrop-brightness-50 backdrop-blur-sm fixed flex items-center" @click.self="$emit('modal:close')">
      <div id="mbody" class="p-4 relative flex flex-col mx-auto opacity-100 bg-white">
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
  defineEmits(['modal:close'])
</script>

<style scoped>
  #mbody {
    max-height: 90vh;
    max-width: 90vw;
  }
</style>