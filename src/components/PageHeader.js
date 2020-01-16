import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import FluidContainer from "./FluidContainer"

const PageHeader = () => {
	return (
		<Wrapper>
			<FluidContainer>
				<InnerContainer>
					<Section>Social Media</Section>
					<Section>
						<NavLink>Projects</NavLink>
						<NavLink>Blog</NavLink>
						<NavLink>Contact</NavLink>
					</Section>
				</InnerContainer>
			</FluidContainer>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background: black;
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
	gap: 32px;
`

const NavLink = styled(Link)`
	text-transform: uppercase;
	font-weight: var(--fw-kubold);
	font-size: 24px;
	letter-spacing: -0.01em;
`

export default PageHeader
