<template>
  <ContentDoc v-slot="{ doc: route }">
    <PageHeader :title="route.title" />
    <div class="container mx-auto">
      <PageSection title="The Route">
        <ContentRenderer class="text-lg" :value="route">
          <template #empty></template>
        </ContentRenderer>
        <iframe 
          :src="`https://ridewithgps.com/embeds?type=route&id=${route.rwgps}&metricUnits=true`"
          style="width: 1px; min-width: 100%; height: 750px; border: none;" scrolling="no"></iframe>
      </PageSection>
      <PageSection v-if="route.images" title="Sneak Peak">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <nuxt-img v-for="(image, index) in route.images.gallery" class="hover:cursor-pointer"
            :src="image" 
            loading="lazy" 
            sizes="xs:320px sm:640px md:384px lg:324px xl:427px 2xl:512px" 
            @click.prevent="gallery.open = true; gallery.index = index" />
          <Modal v-if="gallery.open" @modal:close="gallery.open = false">
            <nuxt-img 
              class="mb-4 aspect-4/3 h-full" 
              sizes="xs:320px sm:640px md:768px lg:1024px xl:1280px" 
              :src="route.images.gallery.at(gallery.index)" />
            <div class="static">
              <button class="absolute -left-6 top-1/2 p-4 bg-white rounded-full" @click.prevent="gallery.index = --gallery.index % route.images.length">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
              </button>
              <button class="absolute -right-6 top-1/2 p-4 bg-white rounded-full" @click.prevent="gallery.index = ++gallery.index % route.images.length">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </button>
            </div>
          </Modal>
        </div>
      </PageSection>
    </div>
  </ContentDoc>
</template>

<script setup lang="ts">
  const gallery = reactive({
    open: false,
    index: 0,
  })
</script>

<style scoped>
  img {
    max-height: calc(90vh - 2rem);
  }
</style>