import React from "react"

import Hero from "../components/Hero"
import Projects from "../components/Projects"
import {
  SectionBodyParagraph,
  SectionSubtitle,
  SectionTitle,
} from "../components/SectionComponents"
import FluidContainer from "../components/FluidContainer"
import { VerticalSpacer } from "../components/Spacer"
import Page from "../components/Page"
import BlogPostsShowcase from "../components/BlogPostsShowcase"

const HomePage = () => (
  <Page title="Mateusz Hadryś">
    <Hero />

    <FluidContainer>
      <SectionTitle id="about">About</SectionTitle>
      <SectionSubtitle>Who am I?</SectionSubtitle>
      <SectionBodyParagraph>
        I’m a 21-year-old web developer from Poland. I’m very passionate about programming and
        design.
      </SectionBodyParagraph>
      <SectionBodyParagraph>
        I was introduced to web development in high school. It was the perfect way to combine both
        of my interests.
      </SectionBodyParagraph>
      <SectionBodyParagraph>
        I’m constantly learning more, and experimenting with new technologies.
      </SectionBodyParagraph>
      <VerticalSpacer size={300} />
    </FluidContainer>

    <FluidContainer>
      <SectionTitle id="projects">Projects</SectionTitle>
      <SectionSubtitle>Some of my Work</SectionSubtitle>
      <SectionBodyParagraph>
        I love tinkering with web technologies and creating useful things with them. I’ve created
        many projects over the years, using a variety of technologies like: React, Firebase and AWS.
      </SectionBodyParagraph>
      <VerticalSpacer size={50} />
      <Projects />
      <VerticalSpacer size={240} />
    </FluidContainer>

    <FluidContainer>
      <SectionTitle id="blog">Blog</SectionTitle>
      <SectionSubtitle>My Articles about Web Development</SectionSubtitle>
      <SectionBodyParagraph>
        I like to share what I learn with others. I’ve written multiple articles about various web
        development topics. Including: CSS, React, and JavaScript.
      </SectionBodyParagraph>
      <VerticalSpacer size={32} />
      <BlogPostsShowcase />
      <VerticalSpacer size={240} />
    </FluidContainer>

    <FluidContainer>
      <SectionTitle id="contact">Contact</SectionTitle>
      <SectionSubtitle>Let's Work Together</SectionSubtitle>
      <SectionBodyParagraph>
        Lorem ipsum dolor sit amet conscectetur adipiscing elit.
      </SectionBodyParagraph>
    </FluidContainer>

    <VerticalSpacer size={240} />
  </Page>
)

export default HomePage
