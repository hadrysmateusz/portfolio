import React from "react"
import styled, { css } from "styled-components/macro"
import { resetButtonStyles } from "../styleUtils"

const buttonSizes = {
  normal: css`
    --border-width: 2px;
    --height: 32px;
    --padding: 0 24px;
    --font-size: 11px;
    --line-height: 16px;
    --border-radius: var(--border-radius-sm);

    @media (min-width: 560px) {
      --border-width: 3px;
      --height: 56px;
      --border-radius: var(--border-radius-sm);
      --padding: 0 30px;
      --font-size: 20px;
      --line-height: 32px;
    }
  `,
}

const buttonVariants = {
  normal: css`
    background: var(--gray-300);
    color: white;
  `,
  primary: css`
    border: none;
    background: var(--color-accent);
    color: white;
  `,
  secondary: css`
    background: transparent;
    color: var(--gray-800);
    --border-color: var(--gray-800);
    :hover,
    :active {
      --border-color: var(--gray-800);
      background: transparent;
      color: var(--gray-800);
    }
  `,
  textOnly: css`
    background: none;
    box-shadow: none;
    color: #383838;
    :hover,
    :active {
      box-shadow: none;
      background: none;
      color: black;
      text-decoration: underline;
    }
  `,
}

const OuterContainer = styled.button`
  ${resetButtonStyles}
  /* animation */
	transition-property: background, color, box-shadow;
  transition-duration: 200ms;
  transition-timing-function: ease;
  /* display & position */
  height: var(--height);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* typography */
  font-size: var(--font-size);
  line-height: var(--line-height);
  font-weight: var(--fw-semi-bold);
  letter-spacing: 0.03ch;
  white-space: nowrap;
  /* misc */
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  cursor: pointer;
  svg {
    margin-right: 8px;
    margin-left: -8px;
    /* media query is the easiest way to modify the icons on mobile */
    @media (max-width: 560px) {
      margin-right: 0;
      margin-left: -8px;
      transform: scale(0.6);
    }
  }
  padding: var(--padding);

  /* variant overrides */
  ${(p) => buttonVariants[p.variant]}
  ${(p) => buttonSizes[p.size]}
`

const Button = ({ children, variant, size }) => {
  return (
    <OuterContainer variant={variant} size={size}>
      {children}
    </OuterContainer>
  )
}

Button.defaultProps = {
  variant: "normal",
  size: "normal",
}

export default Button
