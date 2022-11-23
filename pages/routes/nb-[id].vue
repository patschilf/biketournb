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
    </div>
  </ContentDoc>
</template>