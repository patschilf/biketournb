import { Ref } from "vue";
import { ParsedContent, QueryBuilderWhere } from "@nuxt/content/dist/runtime/types";
import { Location } from './useLocationContent'

export interface Route extends ParsedContent {
  location: Location
  rwgps: number
  distance: number
  duration: string
  elevation: number
}

export const queryRoutes = (where?: QueryBuilderWhere) => {
  const query = queryContent('/routes')
  if (where) {
    query.where(where)
  }
  return query.find()
}

export const useAsyncRoutes = async (locations: Location[], where: Ref<QueryBuilderWhere>) => {
  const { data: routes, refresh } = await useAsyncData('routes',
    () => queryRoutes(where.value), {
    transform: (routes) => {
      if (locations.length) {
        routes = routes.map(route => {
          route.location = locations.find(location => location.id === route.location)
          return route
        })
      }
      return routes as Route[]
    }
  })

  return { routes: routes as Ref<Route[]>, refresh }
}