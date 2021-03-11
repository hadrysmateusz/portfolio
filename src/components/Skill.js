import React from "react"
import styled from "styled-components"

import { H3, P } from "./Typography"

const Skill = ({ name, description, icon }) => {
  return (
    <Wrapper>
      <IconContainer>{icon}</IconContainer>
      <ContentContainer>
        <H3>{name}</H3>
        <P>{description}</P>
      </ContentContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 16px;
  @media (min-width: 520px) {
    grid-template-columns: 100px 1fr;
    gap: var(--page-padding);
  }
  @media (min-width: 1200px) {
    grid-template-columns: 140px 1fr;
    gap: var(--page-padding);
  }
`
const IconContainer = styled.div``
const ContentContainer = styled.div`
  ${P} {
    margin: 4px 0;
    @media (min-width: 520px) {
      margin: 8px 0;
    }
  }
`

export default Skill
