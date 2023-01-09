export type ScreenSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
export type Screen = {
  size: ScreenSize
  width: number
}

export default (): Screen => {
  const appConfig = useAppConfig()

  const screens = Object.entries(appConfig.theme.screens)
  const [size, width] = screens
    .find(([_, width], index, all) => width >= window.screen.width || index === all.length - 1) as [ScreenSize, number]
  return {
    size,
    width,
  }
}