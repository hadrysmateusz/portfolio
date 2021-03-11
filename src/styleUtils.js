import { css } from "styled-components"

export const gradientText = (color) => css`
  background: ${color};
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
`

export const resetButtonStyles = css`
  padding: 0;
  background: none;
  border: none;
  box-shadow: none;
  display: block;
  border-radius: 0;
  outline: none;
  cursor: pointer;
`
