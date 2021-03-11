import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { H3, P } from "./Typography"
import { FlexBox } from "./Box"

const ProjectPreview = ({ title, image, subtitle, slug }) => {
  return (
    <Wrapper /* href={""} target="_blank" rel="noreferrer noopener" */>
      <ImageContainer>
        <Img fluid={image} />
      </ImageContainer>
      <FlexBox ml="32px" flexDirection="column" justifyContent="center">
        <H3 fontSize={3}>{title}</H3>
        <P fontSize={1} color="gray800" mt="14px" mb="12px">
          {subtitle}
        </P>
      </FlexBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-width: 0;
  display: grid;
  grid-template-columns: auto 1fr;
`

const ImageContainer = styled.div`
  overflow: hidden;
  width: 280px;
  height: 146px;
`

export default ProjectPreview
