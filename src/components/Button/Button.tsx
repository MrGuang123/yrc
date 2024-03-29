import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { forwardRef, ReactNode, MouseEventHandler, createRef } from 'react';
import {
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
  styleFn
} from "styled-system";

import { useTheme } from '../ThemeWrapper';
import { ThemeType } from '../Theme';
import StyledBox from '../StyledBox';
import ButtonStyle from './Button.style'


export type TButtonType = 'default' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text'
export type TButtonSize = 'sm' | 'md' | 'lg'
export type TPresetTheme = 'primary' | 'auxiliary' | 'gray' | 'primaryBorder' | 'grayBorder' | 'report'
export interface ButtonProps {
  presetTheme: TPresetTheme;
  children?: ReactNode;
  disabled?: boolean
  // type?: 'button';
  // as?: 'button';
  // type?: TButtonType;
  size?: TButtonSize;
  customStyle: { [key: string]: string }
  // onClick?: MouseEventHandler<HTMLElement>;
}

const Button = forwardRef((props: ButtonProps, ref) => {
  const {
    children,
    // type = 'default',
    size = 'md',
    presetTheme,
    disabled = false,
    customStyle = {},
    ...rest
  } = props
  const buttonRef = (ref as any) || createRef<HTMLElement>()
  const theme = useTheme()

  const buttonStyleProps = ButtonStyle({ theme, presetTheme, disabled, size, customStyle })

  return (
    <StyledBox
      ref={buttonRef}
      as="button"
      {...buttonStyleProps}
      {...rest}
    >
      {children}
    </StyledBox>
  )
})

Button.defaultProps = {
  disabled: false,
  size: 'md',
}

export default Button;