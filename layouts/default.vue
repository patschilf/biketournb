<template>
  <div class="flex flex-col h-full">
    <header class="flex-none">
      <div class="bg-yellow p-4">
        <div class="container mx-auto flex flex-row justify-between text-lg">
          <div>
            <NuxtLink to="/"><img src="/img/btnb_logo.png" alt="BikeTourNB Logo" /></NuxtLink>
          </div>
          <nav class="flex items-center space-x-6">
            <NuxtLink to="/routes">Routes</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/contact">Contact</NuxtLink>
          </nav>
        </div>
      </div>
    </header>
    <main class="flex-grow">
      <slot />
    </main>
    <footer class="flex-none bg-gray-200 p-4">
      <div class="container mx-auto flex flex-row">
        <img class="mr-6 h-8" src="/img/btnb_logo_bw.png" alt="BikeTourNB Logo" />
        <nav class="flex items-center space-x-6">
          <NuxtLink to="/copyright">Copyright</NuxtLink>
          <NuxtLink to="/disclaimer">Disclaimer</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </nav>
      </div>
    </footer>
  </div>
</template>