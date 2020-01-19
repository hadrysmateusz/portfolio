import React from "react"
import "normalize.css"
import "typeface-poppins"
import styled from "styled-components"

import GlobalStyles from "../globalStyles"
import PageHeader from "./PageHeader"

const App = ({ children }) => (
	<>
		<PageHeader />
		<GlobalStyles />
		<PageContainer>{children}</PageContainer>
	</>
)

const PageContainer = styled.div`
	margin-top: var(--header-height);
`

export default App
