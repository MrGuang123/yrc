
import { useState } from 'react';
import { themes } from '@storybook/theming'
import ThemeWrapper from '../src/components/ThemeWrapper'
import { CssReset, createTheme } from '../src/components/Theme'

const withThemeProvider = (Story, context) => {
  const [themeName, setThemeName] = useState('normal')
  const [useTheme, setUseTheme] = useState({})

  const changeTheme = () => {
    const useThemeName = themeName === 'normal' ? 'slicer' : 'normal'
    const currentTheme = createTheme(themeName)

    setThemeName(useThemeName)
    setUseTheme(currentTheme)
  }

  return (
    <ThemeWrapper theme={useTheme}>
      <CssReset />
      <Story {...context} />
      <button
        style={{
          position: 'fixed',
          left: '10px',
          bottom: '20px',
          zIndex: 10,
          color: '#fff',
          border: '1px solid #fff',
          padding: '5px 15px',
          borderRadius: '10px',
        }}
        className="test-button"
        onClick={changeTheme}
      >
        {themeName}
      </button>
    </ThemeWrapper>
  )
}

export const decorators = [withThemeProvider];

// ThemeProvider相当于提供了一个theme的context和theme的缓存

export const parameters = {
  docs: {
    theme: themes.dark
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}