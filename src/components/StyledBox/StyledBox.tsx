import styled from "@emotion/styled";
import { css } from '@emotion/react'
import shouldForwardProp from "@styled-system/should-forward-prop";
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
import extraConfig, { tx } from "./config";

const wordBreakOptions = {
  normal: {
    wordBreak: "normal",
    overflowWrap: "normal",
  },
  words: {
    wordBreak: "break-word",
  },
  all: {
    wordBreak: "break-all",
  },
  truncate: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
};
interface IWordBreak {
  wordBreak: keyof typeof wordBreakOptions;
  [key: string]: any;
}

const wordBreak: styleFn = (props: IWordBreak) => {
  if (Object.keys(wordBreakOptions).includes(props.wordBreak)) {
    return wordBreakOptions[props.wordBreak];
  } else {
    return props.wordBreak;
  }
};

// 默认情况下emotion将除主题外的所有prop传递给组件，并且只传递有效的HTML字符串prop
// 可以通过shouldForwardProp自定义，还可以使用@emotion/is-prop-valid过滤无效的HTMLprop
const Box = styled("div", {
  shouldForwardProp,
})(
  wordBreak,
  layout,
  color,
  space,
  background,
  border,
  grid,
  position,
  shadow,
  typography,
  flexbox,
  extraConfig,
);

const hover = "&:hover";
const active = "&:active";
const focus = "&:focus";
const disabled =
  "&[aria-disabled=true], &:disabled, &:disabled:focus, &:disabled:hover, &:focus[aria-disabled=true], &:hover[aria-disabled=true]";
const checked = "&[aria-checked=true]";
const selected = "&[aria-selected=true]";
const invalid = "&[aria-invalid=true]";
const pressed = "&[aria-pressed=true]";
const readOnly = "&[aria-readonly=true], &[readonly]";
const firstChild = "&:first-of-type";
const lastChild = "&:last-of-type";
const expanded = "&[aria-expanded=true]";
const grabbed = "&[aria-grabbed=true]";
const notFirstChild = "&:not(:first-of-type)";
const notLastChild = "&:not(:last-of-type)";

const StyledBox = styled(Box)(({
  _after,
  _focus,
  _selected,
  _focusWithin,
  _hover,
  _invalid,
  _active,
  _disabled,
  _grabbed,
  _pressed,
  _expanded,
  _before,
  _readOnly,
  _firstChild,
  _notFirstChild,
  _notLastChild,
  _lastChild,
  _placeholder,
  _checked,
}) => {
  return css({
    [hover]: tx(_hover),
    [focus]: tx(_focus),
    [active]: tx(_active),
    [disabled]: tx(_disabled),
    [selected]: tx(_selected),
    [invalid]: tx(_invalid),
    [expanded]: tx(_expanded),
    [grabbed]: tx(_grabbed),
    [readOnly]: tx(_readOnly),
    [firstChild]: tx(_firstChild),
    [notFirstChild]: tx(_notFirstChild),
    [notLastChild]: tx(_notLastChild),
    [lastChild]: tx(_lastChild),
    [checked]: tx(_checked),
    [pressed]: tx(_pressed),
    "&:before": tx(_before),
    "&:after": tx(_after),
    "&:focus-within": tx(_focusWithin),
    "&::placeholder": _placeholder,
  })
}
)

export default StyledBox