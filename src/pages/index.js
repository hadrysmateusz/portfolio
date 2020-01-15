import React from "react"

import App from "../components/App"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import GoalPicker from "../components/GoalPicker"
import NewsletterSection from "../components/NewsletterSection"
import HabitPicker from "../components/HabitPicker"

const IndexPage = () => (
	<App>
		<SEO title="Home Page" />
		<Hero />
	</App>
)

export default IndexPage
