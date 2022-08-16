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

export type BoxProps = LayoutProps &
  ColorProps &
  BorderProps &
  DisplayProps &
  FlexboxProps &
  TypographyProps &
  SpaceProps &
  PositionProps

const Box = styled.div<BoxProps>`
  ${layout}
  ${color}
  ${border}
  ${display}
  ${flexbox}
  ${typography}
  ${space}
  ${position}
`;

export default Box;
