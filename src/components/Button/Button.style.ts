import '@emotion/react';
import { ButtonProps, TPresetTheme } from './Button'
import { ThemeType } from '../Theme'

interface ButtonStyleProps {
  theme: ThemeType
  presetTheme: TPresetTheme
}

const get = (color: string, hue: number) => `${color}.${hue}`;

const sizes = {
  lg: {
    height: "12",
    fontSize: "lg",
    px: 5,
    minWidth: "12",
  },
  md: {
    height: "10",
    fontSize: "md",
    px: 4,
    minWidth: "10",
  },
  sm: {
    height: "8",
    fontSize: "sm",
    px: 3,
    minWidth: "8",
  },
};
// const sizeProps = ({ size }: { size: ButtonStyleProps['size'] }) => sizes[size];

const ghostVariantProps = () => {

  return {
    color: '#ccc',
    bg: "transparent",
    _hover: {
      bg: '#ccc',
    },
    _active: {
      bg: '#ccc',
    },
  }
};

const outlineVariantProps = () => {
  return {
    border: "1px",
    borderColor: '#ccc',
    ...ghostVariantProps(),
  };
};

const linkVariantProps = () => ({
  p: 0,
  height: "auto",
  lineHeight: "normal",
  color: '#ccc',
  _hover: {
    textDecoration: "underline",
  },
  _active: {
    color: '#ccc',
  },
});

const unstyledStyle = {
  userSelect: "inherit",
  bg: "none",
  border: 0,
  color: "inherit",
  display: "inline",
  font: "inherit",
  lineHeight: "inherit",
  m: 0,
  p: 0,
  textAlign: "inherit",
};

// const typeStyle = (props: ButtonStyleProps) => {
//   switch (props.type) {
//     case 'outline':
//       return outlineVariantProps(props)
//     case 'link':
//       return linkVariantProps()
//     case 'unstyled':
//       return unstyledStyle
//     default:
//       return {}
//   }
// }

const presetThemeStyle = (props: ButtonStyleProps) => {
  const { theme: { colors }, presetTheme } = props
  const colorParams = colors['btnPreset'][presetTheme]
  const baseProps = {
    p: 0,
    height: '30px',
    lineHeight: '30px',
    minWidth: '80px',
  }
  const themeProps = {
    color: colorParams.fontNormal,
    backgroundColor: colorParams.bgNormal,
    border: `1px solid ${colorParams.bdNormal}`,
    _hover: {
      color: colorParams.fontHover,
      backgroundColor: colorParams.bgHover,
      border: `1px solid ${colorParams.bdHover}`,
    },
    _active: {
      color: colorParams.fontActive,
      backgroundColor: colorParams.bgActive,
      border: `1px solid ${colorParams.bdActive}`,
    },
  }

  return { ...baseProps, ...themeProps }
}

const baseProps = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 250ms",
  userSelect: "none",
  position: "relative",
  whiteSpace: "nowrap",
  verticalAlign: "middle",
};


const buttonStyle = (props: ButtonStyleProps) => {
  return {
    ...baseProps,
    // ...sizeProps(props),
    // ...typeStyle(props)
    ...presetThemeStyle(props)
  }
};

export default buttonStyle;