import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import FluidContainer from "./FluidContainer"
import SocialMedia from "./SocialMedia"

const PageHeader = () => {
  return (
    <Wrapper>
      <FluidContainer>
        <InnerContainer>
          <Section>
            <NavLink to="/#about">About</NavLink>
            <NavLink to="/#projects">Projects</NavLink>
            {/* TODO: replace with internal link to personal blog */}
            <NavLink to="/#blog">Blog</NavLink>
            <NavLink to="/#contact">Contact</NavLink>
          </Section>
          <Section>
            <SocialMedia />
          </Section>
        </InnerContainer>
      </FluidContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--gray-100);
`

const InnerContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
`

const Section = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 12px;
  @media (min-width: 400px) {
    gap: 16px;
  }
  @media (min-width: 732px) {
    gap: 32px;
  }
`

const NavLink = styled(Link)`
  text-transform: uppercase;
  font-weight: var(--fw-bold);
  letter-spacing: -0.01em;
  font-size: 11px;
  @media (min-width: 400px) {
    font-size: 12px;
  }
  @media (min-width: 732px) {
    font-size: 24px;
  }
`

export default PageHeader
