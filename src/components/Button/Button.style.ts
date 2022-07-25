import '@emotion/react';
import { ButtonProps, TPresetTheme } from './Button'
import { ThemeType } from '../Theme'

interface ButtonStyleProps {
  theme: ThemeType
  presetTheme: TPresetTheme
  disabled: boolean;
  size: ButtonProps['size']
  customStyle: ButtonProps['customStyle']
}

const heightSize = {
  sm: 22,
  md: 26,
  lg: 30
}

const presetThemeStyle = (props: ButtonStyleProps) => {
  const { theme: { colors }, presetTheme, disabled, size = 'md' } = props
  if (!colors) {
    return {}
  }

  const colorParams = colors['btnPreset'][presetTheme]
  const baseProps = {
    padding: '0 16px',
    height: heightSize[size],
    lineHeight: heightSize[size],
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

  const disabledParams = {
    color: colorParams.fontDisabled,
    backgroundColor: colorParams.bgDisabled,
    border: `1px solid ${colorParams.bdDisabled}`,
    cursor: 'not-allowed',
    opacity: 0.5
  }
  const disabledThemeProps = {
    ...disabledParams,
    '&:hover': {
      ...disabledParams
    },
    '&:active': {
      ...disabledParams
    },
  }

  const useThemeProps = disabled ? disabledThemeProps : themeProps

  return { ...baseProps, ...useThemeProps }
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
  borderRadius: '15px',
  fontSize: '14px'
};


const buttonStyle = (props: ButtonStyleProps) => {
  return {
    ...baseProps,
    // ...sizeProps(props),
    // ...typeStyle(props)
    ...presetThemeStyle(props),
    ...props.customStyle
  }
};

export default buttonStyle;