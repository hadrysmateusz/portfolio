import React from "react"
import styled from "styled-components"

import { H1, SubHeading } from "./Typography"
import FluidContainer from "./FluidContainer"
import SocialMedia from "./SocialMedia"

const Hero = () => {
	return (
		<Wrapper>
			<FluidContainer>
				<SubHeading>Hi, my name is</SubHeading>
				<H1>Mateusz Hadryś</H1>
				<SocialMediaContainer>
					<SocialMedia />
				</SocialMediaContainer>
			</FluidContainer>
		</Wrapper>
	)
}

const SocialMediaContainer = styled.div`
	margin-top: 20px;
`

const Wrapper = styled.div`
	position: relative;
	z-index: 800;
	background: var(--gradient-accent);
	padding: 48px 0 40px;
	border-radius: var(--border-radius-big) 0 var(--border-radius-big) 0;
`

export default Hero
