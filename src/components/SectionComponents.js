import styled from "styled-components/macro"
import { typography, space, color } from "styled-system"

import { H1, P } from "./Typography"

export const SectionTitle = styled.h1`
  font-weight: 600;
  font-size: 25px;
  line-height: 36px;
  color: var(--color-accent);
  text-transform: uppercase;

  ${typography}
  ${space}
  ${color}
`

export const SectionBodyParagraph = styled(P)`
  font-weight: 400;
  font-size: 24px;
  color: var(--gray-500);
  max-width: 920px;
  margin: 16px 0 24px;

  ${typography}
  ${space}
  ${color}
`

export const SectionSubtitle = styled(H1).attrs({ as: "div" })`
  margin-bottom: 30px;
`
