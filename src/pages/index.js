import React from "react"

import App from "../components/App"
import Hero from "../components/Hero"
import SEO from "../components/seo"
import About from "../components/About"

const IndexPage = () => (
	<App>
		<SEO title="Home Page" />
		<Hero />
		<About />
	</App>
)

export default IndexPage
