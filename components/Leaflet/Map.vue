<template>
  <div id="map"></div>
</template>

<script setup lang="ts">
  type Point = [number, number] 

  const props = defineProps<{
    zoom: number
    maxZoom: number
    view: Point
    markers: Point[],
    tracks: string[],
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
    const L = await import("leaflet-gpx")
    const map = L.map('map').setView(props.view, props.zoom)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: props.maxZoom,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map)
    
    // add markers
    props.markers.forEach(marker => L.marker(marker).addTo(map))

    // add tracks
    props.tracks.forEach(track => new L.GPX(track, {
      async: true,
      marker_options: {
        startIconUrl: "",
        endIconUrl: "",
      },
    }).addTo(map))
  })
</script>

<style>
  .leaflet-interactive:nth-child(5n+1) {
    @apply stroke-emerald-700
  }
  .leaflet-interactive:nth-child(5n+2) {
    @apply stroke-orange-500
  }
  .leaflet-interactive:nth-child(5n+3) {
    @apply stroke-stone-400
  }
  .leaflet-interactive:nth-child(5n+4) {
    @apply stroke-sky-500
  }
  .leaflet-interactive:nth-child(5n+5) {
    @apply stroke-rose-500
  }
  

.leaflet-interactive:hover {
  stroke-width: 5;
}
</style>