import { addons, makeDecorator } from '@storybook/addons'
import normalTheme from './themes/normalTheme'
import slicerTheme from './themes/slicerTheme'

addons.setConfig({
  theme: normalTheme,
  toolbar: {
    'storybook/background': { hidden: true },
  },
  sidebar: {
    showRoots: false
  }
})
// addons.setConfig({
//   theme: slicerTheme
// })