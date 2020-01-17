import React from "react"

import App from "../components/App"
import Hero from "../components/Hero"
import SEO from "../components/seo"
import About from "../components/About"
import Projects from "../components/Projects"

const IndexPage = () => (
	<App>
		<SEO title="Home Page" />
		<Hero />
		<About />
		<Projects />
	</App>
)

export default IndexPage
