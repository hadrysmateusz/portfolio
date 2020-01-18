import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { H3, TextBlock } from "./Typography"
import PrimaryButton from "./PrimaryButton"
import Button from "./Button"

const ProjectPreview = ({ name, image, description, liveLink, sourceLink }) => {
	console.log(image)

	return (
		<Wrapper>
			<ImageContainer>
				<Img fluid={image} />
			</ImageContainer>
			<H3>{name}</H3>
			<TextBlock>{description}</TextBlock>
			<ButtonContainer>
				<a href={liveLink} target="_blank" rel="noreferrer noopener">
					<PrimaryButton>Go to Website</PrimaryButton>
				</a>
				<a href={sourceLink} target="_blank" rel="noreferrer noopener">
					<Button>Source Code</Button>
				</a>
			</ButtonContainer>
		</Wrapper>
	)
}

const Wrapper = styled.div``
const ImageContainer = styled.div`
	margin-bottom: 32px;
	position: relative;
	border-radius: var(--border-radius-md);
	overflow: hidden;
	::after {
		display: block;
		content: "";
		background: rgba(0, 0, 0, 0.3);
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}
`
const ButtonContainer = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-auto-columns: min-content;
	gap: 24px;
`

export default ProjectPreview
