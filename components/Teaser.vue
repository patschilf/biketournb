<template>
  <div class="group flex items-end bg-gray-300" :style="style">
    <NuxtLink :to="url" class="w-full text-white group-hover:text-black bg-gradient-to-b from-transparent to-black group-hover:from-yellow/90 group-hover:to-yellow/90 group-hover:bg p-4 pt-16 group-hover:pt-4 group-hover:h-full flex flex-col">
      <h3 class="text-xl font-bold hover:text-red">{{ route.title }}</h3>
      <div class="hidden group-hover:block flex-grow">
        <slot />
      </div>
      <div class="flex flex-row justify-between">
        <span>{{ route.location.label }}</span>
        <span>{{ route.distance }}km</span>
        <span>{{ route.duration }}</span>
        <span>{{ route.elevation }}m</span>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps(["route", "url"])
  
  const $img = useImage()
  const backgroundImageWidth = ref()
  const style = computed(() => {
    return (props.route.images?.featured && backgroundImageWidth.value) ? {
      backgroundImage: `url('${$img(props.route.images.featured, {
        width: backgroundImageWidth.value,
      })}')`
    } : {}
  })
  
  onMounted(() => {
    const screen = useScreen()
    const imageWidth = useImageMatch(screen)
    backgroundImageWidth.value = imageWidth
  })
</script>
