import React from "react"
import styled from "styled-components"

import { H1 } from "./Typography"
import FluidContainer from "./FluidContainer"

const Hero = () => {
	return (
		<Wrapper>
			<FluidContainer>
				<H1>Mateusz Hadryś</H1>
			</FluidContainer>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	background: var(--gradient-accent);
	padding: 48px 0;
	border-radius: var(--border-radius-big) 0 var(--border-radius-big) 0;
`

export default Hero
