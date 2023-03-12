<template>
  <div id="map"></div>
</template>

<script setup lang="ts">
  import { ParsedContent } from '@nuxt/content/dist/runtime/types';

  type Point = [number, number] 

  const props = defineProps<{
    zoom: number
    maxZoom: number
    view: Point
    markers: Point[],
    routes: ParsedContent[],
  }>()

  useHead({
    link: [
      {
      rel: "stylesheet",
      href: "https://unpkg.com/leaflet@1.9.3/dist/leaflet.css",
      integrity: "sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=",
      crossorigin: "",
      },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/leaflet-gesture-handling/dist/leaflet-gesture-handling.min.css",
      }
    ]
  })
  
  onMounted(async () => {
    // @ts-ignore
    const L = await import("leaflet-gpx")
    const { GestureHandling } = await import("leaflet-gesture-handling");
    L.Map.addInitHook("addHandler", "gestureHandling", GestureHandling)

    const map = L.map('map', {
      maxBounds: [
        [48.041, -69.252],
        [44.813, -63.7814],
      ],
      maxZoom: 17,
      minZoom: 8,
      gestureHandling: true,
    }).setView(props.view, props.zoom)

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    }).addTo(map)

    // add markers
    props.markers.forEach(marker => L.marker(marker).addTo(map))

    // add tracks
    props.routes.forEach(route => new L.GPX(route.track, {
      async: true,
      marker_options: {
        startIconUrl: "",
        endIconUrl: "",
      },
    }).on('click', (e: any) => {
      const latlng = Object.values(e.latlng)
      L.popup(latlng, {
        content: `<div><a href="${route._path}">${route.title}</a>`,
      }).openOn(map);
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