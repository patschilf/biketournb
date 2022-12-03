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
          <nuxt-img v-for="image of route.images" class="hover:cursor-pointer"
            :src="image" 
            loading="lazy" 
            sizes="xs:320px sm:640px md:384px lg:324px xl:427px 2xl:512px" 
            @click.prevent="(zoomOnImage = image)" />
          <Modal v-if="zoomOnImage" @modal:close="zoomOnImage = ''">
            <nuxt-img 
              class="mb-4 aspect-4/3 h-full" 
              sizes="xs:320px sm:640px md:768px lg:1024px xl:1280px" 
              :src="zoomOnImage" />
          </Modal>
        </div>
      </PageSection>
    </div>
  </ContentDoc>
</template>

<script setup lang="ts">
  const zoomOnImage = ref("")
</script>

<style scoped>
  img {
    max-height: calc(90vh - 2rem);
  }
</style>