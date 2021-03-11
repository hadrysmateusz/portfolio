import styled, { css } from "styled-components/macro"
import { typography, space, color } from "styled-system"

const childLinkStyles = css`
  a,
  a:visited {
    color: var(--gradient-accent);
    text-decoration: underline;
  }
`

export const P = styled.p`
  font-size: ${(p) => p.theme.fontSizes[1]}px;
  color: #e2e2e2;
  margin: 24px 0 32px;
  
  ${typography}
  ${space}
  ${color}

  ${childLinkStyles}
`

const headingCommon = css`
  margin: 0;
  font-weight: var(--fw-bold);
  letter-spacing: -0.01em;
  color: white;

  ${typography}
  ${space}
  ${color}

  ${childLinkStyles}
`

export const H1 = styled.h1`
  font-size: ${(p) => p.theme.fontSizes[4]}px;
  ${headingCommon};
`
export const H2 = styled.h2`
  font-size: ${(p) => p.theme.fontSizes[4]}px;
  ${headingCommon}
`
export const H3 = styled.h3`
  font-size: ${(p) => p.theme.fontSizes[3]}px;
  ${headingCommon}
`
