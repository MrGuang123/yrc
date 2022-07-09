import { jsx } from '@emotion/react'
import { forwardRef } from 'react';

import { useTheme } from '../ThemeWrapper';
import { ThemeType } from '../Theme';
import ButtonStyle from './Button.style'

export interface ButtonProps {
  children?: string;
  color: keyof ThemeType['colors'];
  type: 'outline' | 'unstyled' | 'link';
  size: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const Button = forwardRef((props: ButtonProps, ref) => {
  const { children, color, type = 'outline', size = 'md' } = props
  const theme = useTheme()
  const buttonStyleProps = ButtonStyle({ color, type, size, theme })

  return (
    <button
      {...buttonStyleProps}
    >
      {children}
    </button>
  )
})

export default Button;