import { ParsedContent } from "@nuxt/content/dist/runtime/types"
import { Ref } from "vue"

export interface Location extends ParsedContent {
  id: number
  label: string
}

export const queryLocations = () => {
  return queryContent<Location>('/locations').find()
}

export const useAsyncLocations = async () => {
  const { data: locations, refresh } = await useAsyncData('locations', queryLocations)
  return {locations: locations as Ref<Location[]>, refresh}
}