import React from "react"
import FluidContainer from "./FluidContainer"
import styled from "styled-components"
import Button from "./Button"

import { H1, H2, P } from "./Typography"
import { VerticalSpacer } from "./Spacer"

const Hero = () => {
  return (
    <Wrapper>
      <FluidContainer>
        <InnerContainer>
          <Heading>Mateusz Hadryś</Heading>
          <Subheading>
            Web <AccentedText>Developer</AccentedText> & <AccentedText>Designer</AccentedText>
          </Subheading>
          <Body>I design and code web applications that solve real-world problems.</Body>
          <ButtonContainer>
            <Button variant="primary">Contact Me</Button>
            <Button variant="secondary">About Me</Button>
          </ButtonContainer>
        </InnerContainer>
        <VerticalSpacer size={140} />
      </FluidContainer>
    </Wrapper>
  )
}

const Heading = styled(H1)`
  @media (min-width: 732px) {
    font-size: 118px;
    line-height: 132px;
  }
`

const Subheading = styled(H2)`
  color: var(--gray-400);
  margin-bottom: 20px;
  @media (min-width: 732px) {
    font-size: 64px;
    line-height: 96px;
  }
`

const AccentedText = styled.span`
  color: var(--color-accent);
`

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 203px);
  gap: 32px;
`

const Wrapper = styled.div`
  margin-top: -120px;
  padding-top: 120px;
`

const InnerContainer = styled.div`
  padding: 120px 0;
  @media (min-width: 732px) {
    padding: 180px 0;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Body = styled(P)`
  max-width: 600px;
  margin: 0;
  margin-bottom: 40px;

  @media (min-width: 732px) {
    font-size: 24px;
    line-height: 36px;
  }
`

export default Hero
