import React from "react"
import FluidContainer from "./FluidContainer"
import styled from "styled-components"
import PrimaryButton from "./PrimaryButton"

import { H2, TextBlock, SubHeading } from "./Typography"
import { gradientText } from "../styleUtils"
import { EMAIL } from "../const"

const About = () => {
	return (
		<Wrapper>
			<FluidContainer>
				<InnerContainer>
					<SubHeading>I'm a</SubHeading>
					<HeadingContainer>
						<H2>
							Web <AccentedText>Developer</AccentedText> &{" "}
							<AccentedText>Designer</AccentedText>
						</H2>
					</HeadingContainer>
					<AboutTextBlock>
						I love creating web applications, from <b>design</b> through <b>frontend</b>{" "}
						to <b>server-side</b> code. <b>React</b> is my preferred framework, but I love
						learning new things.
					</AboutTextBlock>
					<a href={"mailto:" + EMAIL}>
						<PrimaryButton>Contact Me</PrimaryButton>
					</a>
				</InnerContainer>
			</FluidContainer>
		</Wrapper>
	)
}

const HeadingContainer = styled.div`
	margin: 8px 0;
`

const Wrapper = styled.div`
	margin-top: -120px;
	padding-top: 120px;
	background: linear-gradient(to bottom, #161616 60px, black 95%);
`

const InnerContainer = styled.div`
	padding: 120px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
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
