import React from "react"

import App from "../components/App"
import Hero from "../components/Hero"
import SEO from "../components/seo"
import About from "../components/About"
import Projects from "../components/Projects"
import Skills from "../components/Skills"

const IndexPage = () => (
	<App>
		<SEO title="Home Page" />
		<Hero />
		<About />
		<Projects />
		<Skills />
	</App>
)

export default IndexPage
