<template>
  <ContentDoc v-slot="{ doc: route }">
    <PageHeader :title="route.title" />
    <div class="container mx-auto">
      <PageSection title="The Route">
        <ContentRenderer class="text-lg" :value="route">
          <template #empty />
        </ContentRenderer>
        <iframe
          :src="`https://ridewithgps.com/embeds?type=route&id=${route.rwgps}&metricUnits=true`"
          style="width: 1px; min-width: 100%; height: 750px; border: none;"
          scrolling="no"
        />
      </PageSection>
      <PageSection v-if="route.images" title="Sneak Peak">
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <nuxt-img
            v-for="(image, index) in route.images.gallery"
            :key="`img-${index}`"
            class="hover:cursor-pointer"
            :src="image"
            loading="lazy"
            sizes="xs:320px sm:640px md:384px lg:324px xl:427px 2xl:512px"
            @click.prevent="showGallery = true; galleryIndex = index"
          />
          <Modal v-if="showGallery" @modal:close="showGallery = false">
            <nuxt-img
              class="mb-4 aspect-4/3 h-full"
              sizes="xs:320px sm:640px md:768px lg:1024px xl:1280px"
              :src="route.images.gallery.at(galleryIndex % route.images.gallery.length)"
            />
            <div class="static">
              <button class="absolute -left-6 top-1/2 rounded-full bg-white p-4" @click.prevent="--galleryIndex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
              </button>
              <button class="absolute -right-6 top-1/2 rounded-full bg-white p-4" @click.prevent="++galleryIndex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
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
const showGallery = ref(false)
const galleryIndex = ref(0)
</script>

<style scoped>
  img {
    max-height: calc(90vh - 2rem);
  }
</style>
