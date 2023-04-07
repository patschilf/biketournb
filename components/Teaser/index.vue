<template>
  <div class="group flex items-end bg-gray-300" :style="style">
    <NuxtLink :to="url" class="flex w-full flex-col bg-gradient-to-b from-transparent to-black p-4 pt-16 text-white group-hover:h-full group-hover:from-yellow/90 group-hover:to-yellow/90 group-hover:pt-4 group-hover:text-black">
      <h3 class="text-xl font-bold hover:text-red">
        {{ title }}
      </h3>
      <div class="hidden grow group-hover:block">
        <slot name="excerpt" />
      </div>
      <slot name="footer" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    required: false,
    default: ``,
  },
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
})

const $img = useImage()
const backgroundImageWidth = ref()
const style = computed(() => {
  return (props.image && backgroundImageWidth.value)
    ? {
        backgroundImage: `url('${$img(props.image, {
        width: backgroundImageWidth.value,
      })}')`,
      }
    : {}
})

onMounted(() => {
  const screen = useScreen()
  const imageWidth = useImageMatch(screen)
  backgroundImageWidth.value = imageWidth
})
</script>
