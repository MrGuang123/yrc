import { default as ThemeNormal, ThemeType } from './theme-normal'
import { default as ThemeSlicer } from './theme-slicer'

const themeMap: {
  [key: string]: ThemeType
} = {
  normal: ThemeNormal,
  slicer: ThemeSlicer
}
const createTheme = (theme: string): ThemeType => {
  // console.log('theme', theme)
  return themeMap[theme]
}

export default createTheme