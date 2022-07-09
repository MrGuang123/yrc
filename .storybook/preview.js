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

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}