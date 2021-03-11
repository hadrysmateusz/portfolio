import React from "react"

import Page from "../components/Page"
import BlogPostsShowcase from "../components/BlogPostsShowcase"
import FluidContainer from "../components/FluidContainer"

const BlogHomePage = () => (
  <Page title="Mateusz Hadryś - Blog">
    <FluidContainer>
      <BlogPostsShowcase />
    </FluidContainer>
  </Page>
)

export default BlogHomePage
