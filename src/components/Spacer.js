import styled from "styled-components"

const getSize = ({ size }) => {
  return size
}

export const VerticalSpacer = styled.span`
  display: block;
  height: ${getSize}px;
  min-height: ${getSize}px;
`

export const HorizontalSpacer = styled.span`
  display: block;
  width: ${getSize}px;
  min-width: ${getSize}px;
`
