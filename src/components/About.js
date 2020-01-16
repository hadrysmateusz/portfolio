import React from "react"
import FluidContainer from "./FluidContainer"
import styled from "styled-components"
import PrimaryButton from "./PrimaryButton"

import { H2, TextBlock } from "./Typography"
import { gradientText } from "../styleUtils"

const About = () => {
	return (
		<FluidContainer>
			<Wrapper>
				<H2>
					Web <AccentedText>Developer</AccentedText> &{" "}
					<AccentedText>Designer</AccentedText>
				</H2>
				<AboutTextBlock>
					I love creating web applications, from <b>design</b> through <b>frontend</b> to{" "}
					<b>server-side</b> code. <b>React</b> is my preferred framework, but I love
					learning new things.
				</AboutTextBlock>
				<PrimaryButton>Contact Me</PrimaryButton>
			</Wrapper>
		</FluidContainer>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 100px 0;
`

const AccentedText = styled.span`
	${gradientText(`var(--gradient-accent)`)}
`

const AboutTextBlock = styled(TextBlock)`
	max-width: var(--column-width);
	margin: 0;
	margin-bottom: 32px;

	@media (min-width: 732px) {
		margin: 0;
		margin-bottom: 32px;
		font-size: 24px;
		line-height: 32px;
	}
`

export default About
