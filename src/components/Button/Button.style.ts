import '@emotion/react';
import { ButtonProps } from './Button'
import { ThemeType } from '../Theme'

interface ButtonStyleProps extends ButtonProps {
  theme: ThemeType
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
const sizeProps = ({ size }: { size: ButtonStyleProps['size'] }) => sizes[size];

const ghostVariantProps = ({ color, theme }: ButtonStyleProps) => {
  const _color = theme.colors[color]?.[200];

  return {
    color: get(_color, 500),
    bg: "transparent",
    _hover: {
      bg: get(_color, 50),
    },
    _active: {
      bg: get(_color, 100),
    },
  }
};

const outlineVariantProps = (props: ButtonStyleProps) => {
  const { color } = props;
  const borderColor = get(color, 500);

  return {
    border: "1px",
    borderColor: borderColor,
    ...ghostVariantProps(props),
  };
};

const linkVariantProps = ({ color }: ButtonStyleProps) => ({
  p: 0,
  height: "auto",
  lineHeight: "normal",
  color: get(color, 600),
  _hover: {
    textDecoration: "underline",
  },
  _active: {
    color: get(color, 700),
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

const typeStyle = (props: ButtonStyleProps) => {
  switch (props.type) {
    case 'outline':
      return outlineVariantProps(props)
    case 'link':
      return linkVariantProps(props)
    case 'unstyled':
      return unstyledStyle
    default:
      return {}
  }
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
    ...sizeProps(props),
    ...typeStyle(props)
  }
};

export default buttonStyle;