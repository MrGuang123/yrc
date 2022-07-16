import '@emotion/react';
import { ButtonProps, TPresetTheme } from './Button'
import { ThemeType } from '../Theme'

interface ButtonStyleProps {
  theme: ThemeType
  presetTheme: TPresetTheme
}

const presetThemeStyle = (props: ButtonStyleProps) => {
  const { theme: { colors }, presetTheme } = props
  if (!colors) {
    return {}
  }

  const colorParams = colors['btnPreset'][presetTheme]
  const baseProps = {
    padding: '0 16px',
    height: '30px',
    lineHeight: '30px',
    minWidth: '48px',
  }
  const themeProps = {
    color: colorParams.fontNormal,
    backgroundColor: colorParams.bgNormal,
    border: `1px solid ${colorParams.bdNormal}`,
    '&:hover': {
      color: colorParams.fontHover,
      backgroundColor: colorParams.bgHover,
      border: `1px solid ${colorParams.bdHover}`,
    },
    '&:active': {
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
  borderRadius: '15px'
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