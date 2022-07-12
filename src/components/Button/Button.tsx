/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import { forwardRef, ReactNode, MouseEventHandler, createRef } from 'react';

import { useTheme } from '../ThemeWrapper';
import { ThemeType } from '../Theme';
import ButtonStyle from './Button.style'


export type ButtonType = 'default' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text'
export type ButtonSize = 'sm' | 'md' | 'lg' | 'undefined'
export interface ButtonProps {
  children?: ReactNode;
  color?: keyof ThemeType['colors'];
  type?: ButtonType;
  size?: ButtonSize;
  onClick?: MouseEventHandler<HTMLElement>;
}

const Button = forwardRef((props: ButtonProps, ref) => {
  const {
    children,
    color,
    type = 'default',
    size = 'md'
  } = props
  const buttonRef = (ref as any) || createRef<HTMLElement>()
  const theme = useTheme()

  const buttonStyleProps = ButtonStyle({ color, type, size, theme })
  // TODO: fix style problem 
  return (
    <button
      ref={buttonRef}
      {...buttonStyleProps}
    >
      {children}
    </button>
  )
})

export default Button;