import React from "react"
import styled from "styled-components"

import ProjectPreview from "./ProjectPreview"
import { H2 } from "./Typography"
import FluidContainer from "./FluidContainer"

const Projects = () => {
	return (
		<FluidContainer>
			<H2>Recent Projects</H2>
			<Grid>
				<ProjectPreview name="Vivaldi Thumbnail Generator" />
				<ProjectPreview name="StreetZone" />
			</Grid>
		</FluidContainer>
	)
}

const Grid = styled.div`
	display: grid;
	gap: 40px;
	@media (min-width: 732px) {
		grid-template-columns: repeat(2, 1fr);
	}
`

export default Projects
