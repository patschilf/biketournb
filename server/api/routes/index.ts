import routes, { Route } from '../../../data/routes'

export default defineEventHandler( function(event): Route[] {
  return routes
})
