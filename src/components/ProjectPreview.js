import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { H3, TextBlock } from "./Typography"
import Button from "./Button"
import GithubIcon from "../assets/icons/github.svg"

const ProjectPreview = ({ name, image, description, liveLink, sourceLink }) => {
	return (
		<Wrapper>
			<ImageContainer>
				<Img fluid={image} />
			</ImageContainer>
			<H3>{name}</H3>
			<TextBlock>{description}</TextBlock>
			<ButtonContainer>
				<a href={liveLink} target="_blank" rel="noreferrer noopener">
					<Button variant="primary">Go to Website</Button>
				</a>
				<a href={sourceLink} target="_blank" rel="noreferrer noopener">
					<Button>
						<GithubIcon width={28} height={28} /> Source Code
					</Button>
				</a>
			</ButtonContainer>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	min-width: 0;
`
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
	display: flex;
	flex-wrap: wrap;
	margin: -8px;
	> * {
		margin: 8px;
	}
	@media (min-width: 732px) {
		margin: -16px;
		> * {
			margin: 16px;
		}
	}
`

export default ProjectPreview
