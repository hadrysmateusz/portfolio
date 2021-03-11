import React from "react"
import styled from "styled-components"

import BlogPostCard from "./BlogPostCard"
import { useStaticQuery, graphql } from "gatsby"
import Button from "./Button"

const BlogPostsShowcase = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx {
        nodes {
          id
          frontmatter {
            date
            slug
            subtitle
            title
            featureImage {
              childImageSharp {
                fluid(fit: COVER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const posts = data.allMdx.nodes

  return (
    <>
      <Grid>
        {posts.map((post) => (
          <BlogPostCard
            key={post.id}
            title={post.frontmatter.title}
            subtitle={post.frontmatter.subtitle}
            slug={post.frontmatter.slug}
            image={post.frontmatter.featureImage.childImageSharp.fluid}
          />
        ))}
      </Grid>
      <Button>Read More</Button>
    </>
  )
}

const Grid = styled.div`
  display: grid;
  grid-gap: 48px;
  margin-bottom: 60px;
`

export default BlogPostsShowcase
