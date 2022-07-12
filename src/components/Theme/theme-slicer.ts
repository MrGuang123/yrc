const space = [
  '0',
  '10px'
]

const colors = {
  transparent: 'transparent',
  black: '#000',
  white: 'yellow',
  primary: {
    50: "#ebf8ff",
    100: "#ceedff",
    200: "#90cdf4",
    300: "#63b3ed",
    400: "#4299e1",
    500: "#3182ce",
    600: "#2a69ac",
    700: "#1e4e8c",
    800: "#153e75",
    900: "#1a365d",
  }
}

const sizes = {
  sm: '60px',
  md: '80px',
  lg: '100px',
}

const fontStyle = {
  lingHeights: {
    normal: 'normal',
    base: '1.5',
    heigher: '2'
  },
  fontWeights: {
    thin: 200,
    normal: 400,
    bold: 600
  },
  fontSize: {
    sm: '12px',
    md: '16px',
    lg: '20px',
  }
}

const theme = {
  space,
  colors,
  sizes,
  ...fontStyle
}
console.log('ThemeSlicer', 'hello world')

export type ThemeType = typeof theme
export default theme