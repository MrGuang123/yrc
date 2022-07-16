import { create } from '@storybook/theming'
import { ThemeSlicer } from '../../src/components/Theme'
import brandImage from './heti.png'

const { colors } = ThemeSlicer

// https://storybook.js.org/docs/react/configure/theming#global-theming
export default create({
  base: 'dark',

  brandTitle: 'YRC 组件库',
  brandUrl: '',
  brandImage,
  brandTarget: '_self',

  colorPrimary: colors.primary,
  colorSecondary: colors.auxiliary,

  // 界面
  appBg: colors.bg2,
  appContentBg: colors.bg5,
  appBorderColor: colors.bdColor1,
  appBorderRadius: 4,

  // 排版
  textColor: colors.fontColor4,
  textInverseColor: 'rgba(0, 0, 0, .9)',

  // 工具栏样式
  barTextColor: colors.fontColor4,
  barSelectedColor: colors.primary,
  barBg: colors.bg5,

  // 表单颜色
  inputBg: colors.bg5,
  inputBorder: colors.bdColor1,
  inputTextColor: colors.fontColor4,
  inputBorderRadius: 4,
})