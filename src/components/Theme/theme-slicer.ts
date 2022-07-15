import sizeStyles from "./common/sizeStyles"
import FontStyles from "./common/fontStyles"
import { space, shadows, breakpoints, zIndices, radii, opacity, borders } from './common/otherStyles'

const baseColor: {
  [key: string]: {
    [key: number]: string
  } | string
} = {
  transparent: "transparent",
  current: "currentColor",

  black: "#000",

  blackAlpha: {
    50: 'rgba(0, 0, 0, 0.06)',
  },

  white: "#fff",

  // 主色
  primary: '#00aaff',
  // 辅色
  auxiliary: '#00b4ff',
  /* 错误颜色 */
  error: '#ff5959',
  /* 警告提示颜色 */
  warning: '#fec900',
  /* 成功颜色 */
  success: '#26cf70',

  grey: {
    50: '#051f32',
    100: '#07476f',
    200: '#05304b',
    300: '#03507b',
    400: '#031623',
    500: '#0d3450',
    600: '#0f4770',
    700: '#53607d',
    800: '#0d3856',
    900: '#343740',
    1000: '#8a9ec3',
    1100: '#e5e5e5',
    1200: '#323c5d',
    1300: '#5b637d',
    1400: '#272f4a'
  },

  yellow: {
    50: '#ffb400'
  },

  blue: {
    50: '#0050cb',
    100: '#3282fe',
    200: '#008fcb',
    300: '#32c2ff',
    400: '#00aaff',
    500: '#35b7f8',
    600: '#0164fe',
    700: '#90ffde'
  },

  blueAlpha: {
    50: 'rgba(1, 100, 254, 0.2)',
    100: 'rgba(1, 100, 254, 0.3)',
    200: 'rgba(0, 80, 203, 0.3)',
    300: 'rgba(50, 130, 254, 0.3)',
    400: 'rgba(0, 170, 255, 1)',
    500: 'rgba(0, 170, 255, 0.2)',
    600: 'rgba(0, 180, 255, 0.3)',
    700: 'rgba(50, 194, 255, 0.3)',
    800: 'rgba(0, 143, 203, 0.3)',
    900: 'rgba(0, 180, 255, 0.2)'
  },

}

const getColor = (name: string, chroma: number) => baseColor[name][chroma]

const colors = {
  /* 最底色, tooltip提示背景色 */
  bg1: baseColor.black,
  /* 各种块的背景色 */
  bg2: '#1d2338',
  /* input背景 */
  bg3: baseColor.transparent,
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
  /* 2.input border 警告 */
  bdColor4: baseColor.error,
  /* 渐变边框起始 */
  bdLinearStart: baseColor.transparent,
  /* 渐变边框结束 */
  bdLinearEnd: baseColor.transparent,
  /* 按钮颜色 */
  btnPreset: {
    primary: {
      fontNormal: baseColor.white,
      fontHover: baseColor.white,
      fontActive: baseColor.white,
      fontDisabled: baseColor.white,
      bgNormal: baseColor.primary,
      bgHover: '#3282fe',
      bgActive: '#0050cb',
      bgDisabled: baseColor.primary,
      bdNormal: 'none',
      bdHover: 'none',
      bdActive: 'none',
      bdDisabled: 'none',
    },
    auxiliary: {
      fontNormal: baseColor.white,
      fontHover: baseColor.white,
      fontActive: baseColor.white,
      fontDisabled: baseColor.white,
      bgNormal: baseColor.auxiliary,
      bgHover: '#32c2ff',
      bgActive: '#008fcb',
      bgDisabled: baseColor.auxiliary,
      bdNormal: 'none',
      bdHover: 'none',
      bdActive: 'none',
      bdDisabled: 'none',
    },
    report: {
      fontNormal: '#323c5d',
      fontHover: baseColor.primary,
      fontActive: '#0050cb',
      fontDisabled: '#323c5d',
      bgNormal: baseColor.transparent,
      bgHover: baseColor.transparent,
      bgActive: baseColor.transparent,
      bgDisabled: baseColor.transparent,
      bdNormal: '#323c5d',
      bdHover: baseColor.primary,
      bdActive: '#0050cb',
      bdDisabled: '#323c5d',
    },
    gray: {
      fontNormal: baseColor.white,
      fontHover: baseColor.white,
      fontActive: baseColor.white,
      fontDisabled: baseColor.white,
      bgNormal: '#323c5d',
      bgHover: '#5b637d',
      bgActive: '#272f4a',
      bgDisabled: '#323c5d',
      bdNormal: 'none',
      bdHover: 'none',
      bdActive: 'none',
      bdDisabled: 'none',
    },
    primaryBorder: {
      fontNormal: baseColor.white,
      fontHover: baseColor.white,
      fontActive: baseColor.white,
      fontDisabled: baseColor.white,
      bgNormal: 'rgba(1, 100, 254, 0.3)',
      bgHover: 'rgba(50, 130, 254, 0.3)',
      bgActive: 'rgba(0, 80, 203, 0.3)',
      bgDisabled: 'rgba(1, 100, 254, 0.2)',
      bdNormal: baseColor.primary,
      bdHover: '#3282fe',
      bdActive: '#0050cb',
      bdDisabled: baseColor.primary,
    },
    grayBorder: {
      fontNormal: baseColor.white,
      fontHover: baseColor.white,
      fontActive: baseColor.white,
      fontDisabled: baseColor.white,
      bgNormal: baseColor.transparent,
      bgHover: baseColor.transparent,
      bgActive: baseColor.transparent,
      bgDisabled: baseColor.transparent,
      bdNormal: '#323c5d',
      bdHover: baseColor.primary,
      bdActive: '#272f4a',
      bdDisabled: '#323c5d',
    },
  },
  /* theme1 */
  btnTheme1NormalFont: baseColor.white,
  btnTheme1NormalBg: baseColor.primary,
  btnTheme1HoverFont: baseColor.white,
  btnTheme1HoverBg: '#3282fe',
  btnTheme1ActiveFont: baseColor.white,
  btnTheme1ActiveBg: '#0050cb',
  btnTheme1DisableFont: baseColor.white,
  btnTheme1DisableBg: baseColor.primary,
  /* theme2 */
  btnTheme2NormalFont: baseColor.white,
  btnTheme2NormalBg: baseColor.auxiliary,
  btnTheme2HoverFont: baseColor.white,
  btnTheme2HoverBg: '#32c2ff',
  btnTheme2ActiveFont: baseColor.white,
  btnTheme2ActiveBg: '#008fcb',
  btnTheme2DisableFont: baseColor.white,
  btnTheme2DisableBg: baseColor.auxiliary,
  /* theme3 */
  btnTheme3NormalFont: '#323c5d',
  btnTheme3NormalBg: baseColor.transparent,
  btnTheme3NormalBd: '#323c5d',
  btnTheme3HoverFont: baseColor.primary,
  btnTheme3HoverBg: baseColor.transparent,
  btnTheme3HoverBd: baseColor.primary,
  btnTheme3ActiveFont: '#0050cb',
  btnTheme3ActiveBg: baseColor.transparent,
  btnTheme3ActiveBd: '#0050cb',
  btnTheme3DisableFont: '#323c5d',
  btnTheme3DisableBg: baseColor.transparent,
  btnTheme3DisableBd: '#323c5d',
  /* theme4 */
  btnTheme4NormalFont: baseColor.white,
  btnTheme4NormalBg: '#323c5d',
  btnTheme4HoverFont: baseColor.white,
  btnTheme4HoverBg: '#5b637d',
  btnTheme4ActiveFont: baseColor.white,
  btnTheme4ActiveBg: '#272f4a',
  btnTheme4DisableFont: baseColor.white,
  btnTheme4DisableBg: '#323c5d',
  /* theme5 */
  btnTheme5NormalFont: baseColor.white,
  btnTheme5NormalBg: baseColor.transparent,
  btnTheme5NormalBd: '#323c5d',
  btnTheme5HoverFont: baseColor.white,
  btnTheme5HoverBg: baseColor.transparent,
  btnTheme5HoverBd: '#5b637d',
  btnTheme5ActiveFont: baseColor.white,
  btnTheme5ActiveBg: baseColor.transparent,
  btnTheme5ActiveBd: '#272f4a',
  btnTheme5DisableFont: baseColor.white,
  btnTheme5DisableBg: baseColor.transparent,
  btnTheme5DisableBd: '#323c5d',
  /* theme6 */
  btnTheme6NormalFont: baseColor.white,
  btnTheme6NormalBg: 'rgba(1, 100, 254, 0.3)',
  btnTheme6NormalBd: baseColor.primary,
  btnTheme6HoverFont: baseColor.white,
  btnTheme6HoverBg: 'rgba(50, 130, 254, 0.3)',
  btnTheme6HoverBd: '#3282fe',
  btnTheme6ActiveFont: baseColor.white,
  btnTheme6ActiveBg: 'rgba(0, 80, 203, 0.3)',
  btnTheme6ActiveBd: '#0050cb',
  btnTheme6DisableFont: baseColor.white,
  btnTheme6DisableBg: 'rgba(1, 100, 254, 0.2)',
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