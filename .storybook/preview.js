
import { useState, useEffect } from 'react';
import { themes } from '@storybook/theming'
import { ThemeWrapper } from '../src/components/ThemeWrapper'
import { CssReset, createTheme } from '../src/components/Theme'
import { ThemeNormal } from '../src/components/Theme'

const withThemeProvider = (Story, context) => {
  const [themeName, setThemeName] = useState('normal')
  const [useTheme, setUseTheme] = useState({})

  useEffect(() => {
    const currentTheme = createTheme(themeName)
    setUseTheme(currentTheme)
  }, [themeName])

  const changeTheme = () => {
    const useThemeName = themeName === 'normal' ? 'slicer' : 'normal'

    setThemeName(useThemeName)
  }
  console.log('context', context);

  const showStyleButton = context.kind.includes('Components')

  return (
    <ThemeWrapper theme={useTheme}>
      <CssReset />
      <Story {...context} />
      {showStyleButton && <button
        style={{
          position: 'fixed',
          left: '10px',
          bottom: '20px',
          zIndex: 10,
          color: useTheme?.colors?.primary,
          border: `1px solid ${useTheme?.colors?.primary}`,
          padding: '5px 15px',
          borderRadius: '10px',
        }}
        className="test-button"
        onClick={changeTheme}
      >
        {themeName}
      </button>}
    </ThemeWrapper>
  )
}

export const decorators = [withThemeProvider];

// ThemeProvider相当于提供了一个theme的context和theme的缓存

export const parameters = {
  docs: {
    theme: {
      ...themes.dark,
      // 界面
      appBg: ThemeNormal.colors.bg2,
      appContentBg: ThemeNormal.colors.bg5,
      appBorderColor: ThemeNormal.colors.bdColor1,
      appBorderRadius: 4,

      // 排版
      textColor: ThemeNormal.colors.fontColor4,
      textInverseColor: 'rgba(0, 0, 0, .9)',

      // 工具栏样式
      barTextColor: ThemeNormal.colors.fontColor4,
      barSelectedColor: ThemeNormal.colors.primary,
      barBg: ThemeNormal.colors.bg5,

      // 表单颜色
      inputBg: ThemeNormal.colors.bg5,
      inputBorder: ThemeNormal.colors.bdColor1,
      inputTextColor: ThemeNormal.colors.fontColor4,
      inputBorderRadius: 4,
    },
  },
  // themes: {
  //   default: 'slicer',
  //   disabled: false,
  //   list: [
  //     {
  //       name: 'normal',
  //       class: 'theme-normal',
  //       color: 'red'
  //     },
  //     {
  //       name: 'slicer',
  //       class: 'theme-slicer',
  //       color: 'green'
  //     },
  //   ]
  // },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Getting Started', 'Components']
    }
  }
  // backgrounds: {
  //   default: 'slicer',
  //   values: [
  //     { name: 'normal', value: themes.normal.colors.primary },
  //     { name: 'slicer', value: themes.slicer.colors.primary }
  //   ],
  // },
}