import sizeStyles from "./common/sizeStyles"
import FontStyles from "./common/fontStyles"
import { space, shadows, breakpoints, zIndices, radii, opacity, borders } from './common/otherStyles'

const baseColor = {
  transparent: "transparent",
  current: "currentColor",

  black: "#000",
  white: "#fff",

  // 主色
  primary: '#0164fe',
  // 辅色
  auxiliary: '#00b4ff',
  /* 错误颜色 */
  error: '#ff5959',
  /* 警告提示颜色 */
  warning: '#fec900',
  /* 成功颜色 */
  success: '#26cf70',

  hoverBg1: '#3282fe',
  activeBg1: '#0050cb',
  hoverBg2: '#32c2ff',
  activeBg2: '#008fcb',
  hoverBg3: '#5b637d',
  activeBg3: '#272f4a',
  normalBg1: 'rgba(1, 100, 254, 0.3)',
  hoverBg4: 'rgba(50, 130, 254, 0.3)',
  activeBg4: 'rgba(0, 80, 203, 0.3)',
  disableBg1: 'rgba(1, 100, 254, 0.2)',

  bg1: '#323c5d'
}

const colors = {
  /* 最底色, tooltip提示背景色 */
  bg1: '#000000',
  /* 各种块的背景色 */
  bg2: '#1d2338',
  /* input背景 */
  bg3: 'transparent',
  /*  分页底色 */
  bg4: '#323c5d',
  /* 块中块背景， message背景 */
  bg5: '#262e48',
  /* 滚动条背景 */
  bg6: '#465582',
  /* logo背景色 */
  bgLogo: '#35b7f8',
  /* 页头页尾 */
  bg7: '#171d2e',
  /* 高亮起始背景 */
  bg8: '#323c5d',
  /* 高亮结束背景 */
  bgLinearStart: '#323c5d',
  /* 高亮结束背景 */
  bgLinearEnd: '#323c5d',
  bg9: '#323c5d',
  /* 分页高亮 */
  pageHighlight: baseColor.primary,
  /* 头部下面线 */
  bgHeaderBottom: baseColor.black,
  fontColor1: '#3e8aff',
  /* 暂无用途 */
  fontColor2: '#2ac7f6',
  /* 暂无用途 */
  fontColor3: '#90ffde',
  /* 二级菜单，placeholder，tip信息，表格体文字，分页其它文字，tab菜单正常，面包屑 */
  fontColor4: '#8a9ec3',
  /* 表单label，分页数字，input文字，一级菜单，块标题 */
  fontColor5: '#e5e5e5',
  /* 按钮文字，dialog标题和叉号，表格头文字，二级菜单高亮，对号，无数据提示 */
  fontColor6: '#fff',
  /* 禁用颜色 */
  fontColor7: '#53607d',
  /* 边框颜色 */
  /* 1.input border 禁用状态/正常状态，分割线，按钮镂空 */
  bdColor1: '#3a456a',
  /* 块外边框 checkbox边框 */
  bdColor2: '#343740',
  /* 表格边框，内部块边框 */
  /* bdColor3: #0d3856, */
  /* 2.input border 警告 */
  bdColor4: baseColor.error,
  /* 渐变边框起始 */
  bdLinearStart: baseColor.transparent,
  /* 渐变边框结束 */
  bdLinearEnd: baseColor.transparent,
  /* 按钮颜色 */
  /* theme1 */
  btnTheme1NormalFont: baseColor.white,
  btnTheme1NormalBg: baseColor.primary,
  btnTheme1HoverFont: baseColor.white,
  btnTheme1HoverBg: baseColor.hoverBg1,
  btnTheme1ActiveFont: baseColor.white,
  btnTheme1ActiveBg: baseColor.activeBg1,
  btnTheme1DisableFont: baseColor.white,
  btnTheme1DisableBg: baseColor.primary,
  /* theme2 */
  btnTheme2NormalFont: baseColor.white,
  btnTheme2NormalBg: baseColor.auxiliary,
  btnTheme2HoverFont: baseColor.white,
  btnTheme2HoverBg: baseColor.hoverBg2,
  btnTheme2ActiveFont: baseColor.white,
  btnTheme2ActiveBg: baseColor.activeBg2,
  btnTheme2DisableFont: baseColor.white,
  btnTheme2DisableBg: baseColor.auxiliary,
  /* theme3 */
  btnTheme3NormalFont: baseColor.bg1,
  btnTheme3NormalBg: baseColor.transparent,
  btnTheme3NormalBd: baseColor.bg1,
  btnTheme3HoverFont: baseColor.primary,
  btnTheme3HoverBg: baseColor.transparent,
  btnTheme3HoverBd: baseColor.primary,
  btnTheme3ActiveFont: baseColor.activeBg1,
  btnTheme3ActiveBg: baseColor.transparent,
  btnTheme3ActiveBd: baseColor.activeBg1,
  btnTheme3DisableFont: baseColor.bg1,
  btnTheme3DisableBg: baseColor.transparent,
  btnTheme3DisableBd: baseColor.bg1,
  /* theme4 */
  btnTheme4NormalFont: baseColor.white,
  btnTheme4NormalBg: baseColor.bg1,
  btnTheme4HoverFont: baseColor.white,
  btnTheme4HoverBg: baseColor.hoverBg3,
  btnTheme4ActiveFont: baseColor.white,
  btnTheme4ActiveBg: baseColor.activeBg3,
  btnTheme4DisableFont: baseColor.white,
  btnTheme4DisableBg: baseColor.bg1,
  /* theme5 */
  btnTheme5NormalFont: baseColor.white,
  btnTheme5NormalBg: baseColor.transparent,
  btnTheme5NormalBd: baseColor.bg1,
  btnTheme5HoverFont: baseColor.white,
  btnTheme5HoverBg: baseColor.transparent,
  btnTheme5HoverBd: baseColor.hoverBg3,
  btnTheme5ActiveFont: baseColor.white,
  btnTheme5ActiveBg: baseColor.transparent,
  btnTheme5ActiveBd: baseColor.activeBg3,
  btnTheme5DisableFont: baseColor.white,
  btnTheme5DisableBg: baseColor.transparent,
  btnTheme5DisableBd: baseColor.bg1,
  /* theme6 */
  btnTheme6NormalFont: baseColor.white,
  btnTheme6NormalBg: baseColor.normalBg1,
  btnTheme6NormalBd: baseColor.primary,
  btnTheme6HoverFont: baseColor.white,
  btnTheme6HoverBg: baseColor.hoverBg4,
  btnTheme6HoverBd: baseColor.hoverBg1,
  btnTheme6ActiveFont: baseColor.white,
  btnTheme6ActiveBg: baseColor.activeBg4,
  btnTheme6ActiveBd: baseColor.activeBg1,
  btnTheme6DisableFont: baseColor.white,
  btnTheme6DisableBg: baseColor.disableBg1,
  btnTheme6DisableBd: baseColor.primary,
};




const theme = {
  breakpoints,
  zIndices,
  radii,
  opacity,
  borders,
  colors,
  ...FontStyles,
  sizeStyles,
  shadows,
  space,
};

export type ThemeType = typeof theme
export default theme