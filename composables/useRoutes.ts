export const useRoutes = () => {

  const all = async () => {
    const { data: routes } = await useFetch('/api/routes')
    return routes
  }
  
  return {
    all,
  }
}