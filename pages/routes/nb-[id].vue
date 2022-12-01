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
          <nuxt-img v-for="image of route.images" :src="image" loading="lazy" sizes="xs:320px sm:640px md:384px lg:324px xl:427px 2xl:512px" />
        </div>
      </PageSection>
    </div>
  </ContentDoc>
</template>