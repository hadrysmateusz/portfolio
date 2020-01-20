import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Skill from "./Skill"
import { H2 } from "./Typography"
import FluidContainer from "./FluidContainer"
import skillIcons from "../skillIcons"

const Skills = () => {
	const data = useStaticQuery(graphql`
		query {
			allSkillsYaml {
				nodes {
					id
					name
					description
				}
			}
		}
	`)

	const skills = data.allSkillsYaml.nodes.map((skill) => ({
		...skill,
		icon: skillIcons[skill.id]
	}))

	return (
		<GradientBackground>
			<FluidContainer>
				<H2 id="skills">My Skills</H2>
				<Grid>
					{skills.map((skill) => (
						<Skill
							key={skill.id}
							name={skill.name}
							description={skill.description}
							icon={<skill.icon />}
						/>
					))}
				</Grid>
			</FluidContainer>
		</GradientBackground>
	)
}

const GradientBackground = styled.div`
	padding: 80px 0;
	margin-bottom: 80px;
	background: var(--gradient-black);
`

const Grid = styled.div`
	display: grid;
	margin-top: 32px;
	gap: 16px;
	@media (min-width: 732px) {
		gap: 40px;
		grid-template-columns: repeat(2, 1fr);
	}
`

export default Skills
