import styled from "styled-components/macro"
import { background, border, flexbox, grid, layout, space } from "styled-system"
export const Box = styled.div`
  ${space}
  ${layout}
  ${background}
  ${border}
`

export const FlexBox = styled.div`
  display: flex;
  ${space}
  ${layout}
  ${flexbox}
  ${background}
  ${border}
`

export const GridBox = styled.div`
  display: grid;
  ${space}
  ${layout}
  ${grid}
  ${background}
  ${border}
`
