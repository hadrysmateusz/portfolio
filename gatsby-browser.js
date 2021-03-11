import React from "react"
import styled, { ThemeProvider } from "styled-components/macro"

import GlobalStyles from "./src/globalStyles"
import PageHeader from "./src/components/PageHeader"
import ThemeDefault from "./src/themes/default"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={ThemeDefault}>
    <GlobalStyles />
    <PageHeader />
    <PageContainer>{element}</PageContainer>
  </ThemeProvider>
)

const PageContainer = styled.div`
  margin-top: var(--header-height);
`
