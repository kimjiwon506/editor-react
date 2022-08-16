import styled from "@emotion/styled";
import {
  layout,
  LayoutProps,
  ColorProps,
  color,
  BorderProps,
  DisplayProps,
  FlexboxProps,
  border,
  display,
  flexbox,
  TypographyProps,
  typography,
  SpaceProps,
  space,
  PositionProps,
  position
} from "styled-system";
import { BoxProps } from "./box";

const Button = styled.button<BoxProps>`
  background-color: white;
  border: 1px solid #ccc;
  height: 32px;
  width: 64px;
  :hover{
    background-color: #ccc;
    color: white;
  }
  ${layout}
  ${color}
  ${border}
  ${display}
  ${flexbox}
  ${typography}
  ${space}
  ${position}
`;

export default Button;
