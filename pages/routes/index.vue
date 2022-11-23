<template>
  <ContentList path="/routes" v-slot="{ list: routes }">
    <PageHeader title="Routes" />
    <div class="container mx-auto my-40">
      <div class="grid grid-cols-3 gap-6">
        <Teaser class="aspect-4/3" v-for="route of routes" :key="route._path" :route="route" :url="route._path">
          <ContentRenderer :value="route" :excerpt="true">
            <template #empty></template>
          </ContentRenderer>
        </Teaser>
      </div>
    </div>
  </ContentList>
</template>