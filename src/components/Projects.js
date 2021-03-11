import React from "react"
import styled from "styled-components"

import ProjectPreview from "./ProjectPreview"
import { useStaticQuery, graphql } from "gatsby"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allProjectsYaml {
        nodes {
          id
          order
          type
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

  projects.sort((a, b) => a.order - b.order)

  return (
    <Grid>
      {projects.map((project) => (
        <ProjectPreview
          key={project.id}
          type={project.type}
          name={project.name}
          description={project.description}
          image={project.previewImage.childImageSharp.fluid}
          liveLink={project.liveLink}
          sourceLink={project.sourceLink}
        />
      ))}
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-gap: 60px;
`

export default Projects
