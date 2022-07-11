import { themes } from '@storybook/theming'
import ThemeWrapper from '../src/components/ThemeWrapper'
// import React from 'react';
// import ThemeWrapper from '../src/components/ThemeWrapper'
// import { CssReset } from '../src/components/Theme'

// const withThemeProvider = (Story, context) => (
//   <ThemeWrapper theme="default">
//     <CssReset />
//     <Story {...context} />
//   </ThemeWrapper>
// )

// export const decorators = [withThemeProvider];

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