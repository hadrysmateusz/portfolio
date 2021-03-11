import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { H3, P } from "./Typography"
import Button from "./Button"
// import GithubIcon from "../assets/icons/github.svg"

const ProjectPreview = ({ type, name, image, description, liveLink, sourceLink }) => {
  return (
    <Wrapper>
      <MainContainer>
        <ProjectType>{type}</ProjectType>
        <ProjectName>{name}</ProjectName>
        <ProjectDescription>{description}</ProjectDescription>
        <ButtonContainer>
          <a href={liveLink} target="_blank" rel="noreferrer noopener">
            <Button variant="primary">Find out more</Button>
          </a>
          {/* <a href={sourceLink} target="_blank" rel="noreferrer noopener">
            <Button>
              <GithubIcon width={28} height={28} /> Source Code
            </Button>
          </a> */}
        </ButtonContainer>
      </MainContainer>
      <ImageContainer>
        <Img fluid={image} />
      </ImageContainer>
    </Wrapper>
  )
}

const ProjectType = styled.div`
  color: var(--gray-400);
  font-size: 21px;
  line-height: 32px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: -8px;
`

const ProjectName = styled(H3)`
  margin-top: 20px;
`

const ProjectDescription = styled(P)`
  margin-bottom: 36px;
`

const Wrapper = styled.div`
  min-width: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: var(--gray-200);
  border-radius: var(--border-radius-md);
`

const MainContainer = styled.div`
  padding: 40px;
`

const ImageContainer = styled.div`
  position: relative;
  border-top-right-radius: var(--border-radius-md);
  border-bottom-right-radius: var(--border-radius-md);
  overflow: hidden;
  ::after {
    display: block;
    content: "";
    background: rgba(0, 0, 0, 0.45);
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
