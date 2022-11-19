import routes, { Route } from '../../../data/routes'

export default defineEventHandler( function(event): Route | null {
  const { id } = event.context.params
  return routes.find(route => route.id === id)
})
