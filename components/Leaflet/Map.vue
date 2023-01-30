<template>
  <div id="map"></div>
</template>

<script setup lang="ts">
  type Point = [number, number] 

  const props = defineProps<{
    zoom: number
    maxZoom: number
    view: Point
    markers: Point[]
  }>()

  useHead({
    link: [{
      rel: "stylesheet",
      href: "https://unpkg.com/leaflet@1.9.3/dist/leaflet.css",
      integrity: "sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=",
      crossorigin: "",
    }]
  })
  
  onMounted(async () => {
    // @ts-ignore
    const L = await import("leaflet")
    const map = L.map('map').setView(props.view, props.zoom)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: props.maxZoom,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map)
    props.markers.forEach(marker => L.marker(marker).addTo(map))
  })
</script>