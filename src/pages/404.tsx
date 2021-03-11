import React from "react"
import FluidContainer from "../components/FluidContainer"

import Page from "../components/Page"
import { H1, P } from "../components/Typography"

const NotFoundPage = () => (
  <Page title="Page Not Found">
    <FluidContainer>
      <H1 mt="120px">Page Not Found</H1>
      <P>This page doesn't exist</P>
    </FluidContainer>
  </Page>
)

export default NotFoundPage
