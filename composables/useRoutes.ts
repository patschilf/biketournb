export const useRoutes = () => {

  const all = async () => {
    const { data: routes } = await useFetch('/api/routes')
    return routes
  }

  const get = async (id: string) => {
    const { data: route } = await useFetch(`/api/routes/${id}`)
    return route
  }
  
  return {
    all,
    get,
  }
}