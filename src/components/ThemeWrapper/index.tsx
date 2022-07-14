import { useContext, useMemo, Context } from 'react'
import { jsx, ThemeContext, ThemeProvider, ThemeProviderProps } from '@emotion/react'

import { ThemeType } from '../Theme'

export interface ThemeWrapperProps extends ThemeProviderProps {
  cssVarsRoot?: string
}
// export type Dict<T = any> = Record<string, T>

// https://styled-system.com/
const ThemeWrapper = (props: ThemeWrapperProps) => {
  const { cssVarsRoot, theme, children } = props
  // console.log('theme', theme)

  const usedTheme = useMemo(() => theme, [theme])

  return (
    <ThemeProvider theme={usedTheme}>
      {children}
    </ThemeProvider>
  )
}

// ThemeWrapper.defaultProps = {
//   theme: ThemeNormal
// }

// <T extends object = Dict>
export const useTheme = <T extends ThemeType>() => {
  const theme = useContext(ThemeContext as unknown as Context<T | undefined>)

  if (theme === undefined) {
    throw new Error('useTheme必须要在ThemeWrapper中使用')
  }

  return theme
}

export default ThemeWrapper;