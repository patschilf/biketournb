import { Screen } from './useScreen'

export default (screen: Screen) => {
  const appConfig = useAppConfig()
  return appConfig.image.sizes[screen.size]
}