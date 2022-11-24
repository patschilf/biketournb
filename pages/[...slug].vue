<template>
  <ContentDoc v-slot="{ doc: page }">
    <PageHeader :title="page.title" />
    <div class="container mx-auto text-lg">
      <ContentRenderer :value="page"/>
    </div>
  </ContentDoc>
</template>