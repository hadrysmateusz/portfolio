import React from "react"

import App from "../components/App"
import Hero from "../components/Hero"
import SEO from "../components/seo"

const IndexPage = () => (
	<App>
		<SEO title="Home Page" />
		<Hero />
	</App>
)

export default IndexPage
