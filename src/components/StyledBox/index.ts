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
  styleFn,
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

// const hover = "&:hover";
// const active = "&:active";
// const focus = "&:focus";
// const disabled =
//   "&[aria-disabled=true], &:disabled, &:disabled:focus, &:disabled:hover, &:focus[aria-disabled=true], &:hover[aria-disabled=true]";
// const checked = "&[aria-checked=true]";
// const selected = "&[aria-selected=true]";
// const invalid = "&[aria-invalid=true]";
// const pressed = "&[aria-pressed=true]";
// const readOnly = "&[aria-readonly=true], &[readonly]";
// const firstChild = "&:first-of-type";
// const lastChild = "&:last-of-type";
// const expanded = "&[aria-expanded=true]";
// const grabbed = "&[aria-grabbed=true]";
// const notFirstChild = "&:not(:first-of-type)";
// const notLastChild = "&:not(:last-of-type)";

const StyledBox = styled(Box)((props) => css(props))

export default StyledBox