<template>
  <header>
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
  </header>
  <main>
    <slot />
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