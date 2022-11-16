<template>
  <header class="mb-40">
    <div class="bg-yellow p-4">
      <div class="container mx-auto flex flex-row justify-between text-lg">
        <div>
          <img src="/img/btnb_logo.png" alt="BikeTourNB Logo" />
        </div>
        <nav class="flex items-center space-x-6">
          <a href="#">Routes</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </div>
    <div class="static h-screen">
      <div
        class="absolute flex h-full w-full items-center backdrop-brightness-50">
        <div class="mx-auto w-2/3">
          <h1 class="text-6xl font-bold uppercase text-white">
            Explore New Brunswick by Bike
          </h1>
          <span class="bg-yellow p-4 text-lg uppercase">
            One route at a time, we are connecting communities in every corner
            of the province.
          </span>
        </div>
      </div>
    </div>
  </header>
  <main>
    <section class="container mx-auto px-4">
      <h2
        class="pb-8 text-2xl font-bold uppercase underline decoration-yellow decoration-8 underline-offset-8">
        Recently added
      </h2>
      <div class="mb-40 grid grid-cols-3 gap-6">
        <Teaser class="aspect-4/3" :title="'Route 1'" :location="'Fredericton'" :distance="'45km'" :duration="'2h 30min'" :elevation="'110m'"/>
        <Teaser class="aspect-4/3" :title="'Route 2'" :location="'Saint John'" :distance="'52km'" :duration="'3h'" :elevation="'256m'"/>
        <Teaser class="aspect-4/3" :title="'Route 3'" :location="'Moncton'" :distance="'23km'" :duration="'1h 30min'" :elevation="'76m'"/>
      </div>
    </section>
    <section class="container mx-auto px-4">
      <h2
        class="pb-8 text-2xl font-bold uppercase underline decoration-yellow decoration-8 underline-offset-8">
        Stay tuned
      </h2>
      <Placeholder class="w-full mb-40 aspect-3/1" :label="'Newsletter Signup Form'" />
    </section>
    <section class="grid grid-cols-6 divide-x">
      <Placeholder class="aspect-4/3" :label="'Image 1'" />
      <Placeholder class="aspect-4/3" :label="'Image 2'" />
      <Placeholder class="aspect-4/3" :label="'Image 3'" />
      <Placeholder class="aspect-4/3" :label="'Image 4'" />
      <Placeholder class="aspect-4/3" :label="'Image 5'" />
      <Placeholder class="aspect-4/3" :label="'Image 6'" />
    </section>
  </main>
  <footer class="bg-gray-200 p-4">
    <div class="container mx-auto flex flex-row">
      <img class="mr-6 h-8" src="/img/btnb_logo_bw.png" alt="BikeTourNB Logo" />
      <nav class="flex items-center space-x-6">
        <a href="#">Copyright</a>
        <a href="#">Disclaimer</a>
        <a href="#">Contact</a>
      </nav>
    </div>
  </footer>
</template>
