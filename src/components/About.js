import React from "react"
import FluidContainer from "./FluidContainer"
import styled from "styled-components"

import { H2, TextBlock } from "./Typography"

const About = () => {
	return (
		<FluidContainer>
			<Wrapper>
				<H2>
					Web <AccentedText>Developer</AccentedText> &{" "}
					<AccentedText>Designer</AccentedText>
				</H2>
				<TextBlock big>
					I love creating web applications, from <b>design</b> through <b>frontend</b> to{" "}
					<b>server-side</b> code. <b>React</b> is my preferred framework, but I love
					learning new things.
				</TextBlock>
			</Wrapper>
		</FluidContainer>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 100px 0;
`

const AccentedText = styled.span`
	background: var(--gradient-accent);
	background-clip: border-box;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-webkit-box-decoration-break: clone;
	box-decoration-break: clone;
`

export default About
