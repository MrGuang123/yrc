/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import { forwardRef, ReactNode, MouseEventHandler, createRef } from 'react';

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
  // type?: TButtonType;
  // size: TButtonSize;
  onClick?: MouseEventHandler<HTMLElement>;
}

const Button = forwardRef((props: ButtonProps, ref) => {
  const {
    children,
    // type = 'default',
    // size = 'md',
    presetTheme,
    ...rest
  } = props
  const buttonRef = (ref as any) || createRef<HTMLElement>()
  const theme = useTheme()

  const buttonStyleProps = ButtonStyle({ theme, presetTheme })
  // TODO: fix style problem 
  return (
    <StyledBox
      ref={buttonRef}
      {...buttonStyleProps}
    >
      {children}
    </StyledBox>
  )
})

export default Button;