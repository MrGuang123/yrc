import { create } from '@storybook/theming'

// https://storybook.js.org/docs/react/configure/theming#global-theming
export default create({
  base: 'dark',

  brandTitle: 'YRC 组件库',
  brandUrl: '',
  brandImage: './wukong.png',
  brandTarget: '_self',

  colorPrimary: 'hotpink',
  colorSecondary: 'deepskyblue',

  // 界面
  appBg: '#1b1b24',
  appContentBg: '#1b1b24',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // 排版
  textColor: 'white',
  textInverseColor: 'rgba(0, 0, 0, .9)',

  // 工具栏样式
  barTextColor: 'white',
  barSelectedColor: 'black',
  barBg: '#1b1b24',

  // 表单颜色
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,
})