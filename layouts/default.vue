<template>
  <div class="flex flex-col h-full">
    <header class="flex-none">
      <div class="bg-yellow p-4">
        <div class="container mx-auto flex flex-col md:flex-row justify-between text-lg">
          <div class="flex flex-row justify-between">
            <NuxtLink to="/" @click="collapsed = true">
              <nuxt-img src="/misc/biketournb_logo.png" alt="BikeTourNB Logo" sizes="xs:180px sm:240px" />
            </NuxtLink>
            <div class="md:hidden cursor-pointer" @click="collapsed = !collapsed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-12 h-12"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
          </div>
          <nav class="md:flex flex flex-col md:flex-row md:items-center md:space-x-6" :class="collapsed ? 'hidden' : ''">
            <NuxtLink class="py-2 ml-2 md:py-0 md:ml-0" to="/routes" @click="collapsed = true">
              Routes
            </NuxtLink>
            <NuxtLink class="py-2 ml-2 md:py-0 md:ml-0" to="/about" @click="collapsed = true">
              About
            </NuxtLink>
          </nav>
        </div>
      </div>
    </header>
    <main class="flex-grow">
      <slot />
    </main>
    <footer class="flex-none bg-gray-200 p-4">
      <div class="container mx-auto flex flex-col md:flex-row items-center">
        <nuxt-img class="w-32 sm:w-40 md:mr-6 md:h-8" src="/misc/biketournb_logo_bw.png" alt="BikeTourNB Logo" sizes="xs:120px sm:160px" />
        <nav class="flex flex-col md:flex-row items-center md:space-x-6 mt-4 md:mt-0 text-gray-600 md:text-black">
          <NuxtLink to="/copyright">
            Copyright
          </NuxtLink>
          <NuxtLink to="/disclaimer">
            Disclaimer
          </NuxtLink>
          <NuxtLink to="/contact">
            Contact
          </NuxtLink>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const collapsed = ref(true)
</script>
