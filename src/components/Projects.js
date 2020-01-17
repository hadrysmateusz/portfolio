import React from "react"
import styled from "styled-components"

import ProjectPreview from "./ProjectPreview"
import { H2 } from "./Typography"
import FluidContainer from "./FluidContainer"
import { useStaticQuery, graphql } from "gatsby"

const Projects = () => {
	const data = useStaticQuery(graphql`
		query {
			allProjectsYaml {
				nodes {
					id
					name
					description
					liveLink
					sourceLink
					previewImage {
						childImageSharp {
							fluid(fit: COVER) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
	`)

	const projects = data.allProjectsYaml.nodes

	return (
		<FluidContainer>
			<H2>Recent Projects</H2>
			<Grid>
				{projects.map((project) => (
					<ProjectPreview
						key={project.id}
						name={project.name}
						description={project.description}
						image={project.previewImage.childImageSharp.fluid}
						liveLink={project.liveLink}
						sourceLink={project.sourceLink}
					/>
				))}
			</Grid>
		</FluidContainer>
	)
}

const Grid = styled.div`
	display: grid;
	gap: 40px;
	margin-top: 32px;
	@media (min-width: 732px) {
		grid-template-columns: repeat(2, 1fr);
	}
`

export default Projects
