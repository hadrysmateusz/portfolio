import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { H3, TextBlock } from "./Typography"
import PrimaryButton from "./PrimaryButton"

const ProjectPreview = ({ name }) => {
	const data = useStaticQuery(graphql`
		query {
			previewImage: file(relativePath: { eq: "preview-vtg.png" }) {
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	console.log(data)

	return (
		<Wrapper>
			<ImageContainer>
				<Img fluid={data.previewImage.childImageSharp.fluid} />
			</ImageContainer>
			<H3>{name}</H3>
			<TextBlock>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita cum dignissimos
				dolorum temporibus modi! Eum, neque vero labore aut in possimus facere a saepe
				cupiditate minus quibusdam optio, consequuntur delectus.
			</TextBlock>
			<ButtonContainer>
				<PrimaryButton>Go to Website</PrimaryButton>
				{/* <Button>Source Code</Button> */}
			</ButtonContainer>
		</Wrapper>
	)
}

const Wrapper = styled.div``
const ImageContainer = styled.div`
	height: 400px;
	background: gray;
`
const ButtonContainer = styled.div`
	display: grid;
	grid-auto-flow: column;
	gap: 24px;
`

export default ProjectPreview
