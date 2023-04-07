export default async () => {
  const [routes, locations] = await Promise.all([
    queryContent(`routes`).find(),
    queryContent(`locations`).find(),
  ])

  return routes.map((route) => {
    route.location = locations.find(location => location.id === route.location)
    return route
  })
}
