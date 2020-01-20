import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

import FluidContainer from "./FluidContainer"
import SocialMedia from "./SocialMedia"
import { LINK_MEDIUM } from "../const"

const PageHeader = () => {
	const [showSocial, setShowSocial] = useState(false)

	useScrollPosition(
		({ currPos }) => {
			const shouldShow = currPos.y > 220
			if (shouldShow !== showSocial) setShowSocial(shouldShow)
		},
		[showSocial],
		null,
		window
	)

	const data = useStaticQuery(graphql`
		query {
			allFile(filter: { name: { eq: "rounded-corner" } }) {
				nodes {
					childImageSharp {
						fluid(fit: COVER) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	`)

	const roundedCorner = data.allFile.nodes[0].childImageSharp.fluid

	return (
		<Wrapper>
			<FluidContainer>
				<InnerContainer>
					<Section>{showSocial && <SocialMedia />}</Section>
					<Section>
						<NavLink to="#projects">Projects</NavLink>
						{/* TODO: replace with internal link to personal blog */}
						<NavLink href={LINK_MEDIUM} as="a">
							Blog
						</NavLink>
						<NavLink to="#blog">Contact</NavLink>
					</Section>
				</InnerContainer>
			</FluidContainer>
			<ImageContainer>
				<Img fluid={roundedCorner} />
			</ImageContainer>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	position: fixed;
	z-index: 1000;
	top: 0;
	left: 0;
	width: 100%;
	background: black;
`

const ImageContainer = styled.div`
	position: absolute;
	top: 100%;
	width: var(--border-radius-big);
	height: var(--border-radius-big);
`

const InnerContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: var(--header-height);
`

const Section = styled.div`
	display: grid;
	grid-auto-flow: column;
	gap: 12px;
	@media (min-width: 400px) {
		gap: 16px;
	}
	@media (min-width: 732px) {
		gap: 32px;
	}
`

const NavLink = styled(Link)`
	text-transform: uppercase;
	font-weight: var(--fw-bold);
	letter-spacing: -0.01em;
	font-size: 11px;
	@media (min-width: 400px) {
		font-size: 12px;
	}
	@media (min-width: 732px) {
		font-size: 24px;
	}
`

export default PageHeader
