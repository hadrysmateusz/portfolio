import React from "react"
import "normalize.css"
import "typeface-montserrat"

import GlobalStyles from "./globalStyles"

const App = ({ children }) => (
	<>
		<GlobalStyles />
		<main>{children}</main>
	</>
)

export default App
