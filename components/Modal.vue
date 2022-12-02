<template>
  <Teleport to="body">
    <div class="top-0 left-0 w-full h-full overflow-hidden backdrop-brightness-50 backdrop-blur-sm fixed flex items-center z-50" @click.self="$emit('modal:close')">
      <div class="p-4 h-4/5 relative flex flex-col mx-auto opacity-100 bg-white">
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
  defineEmits(['modal:close'])
</script>