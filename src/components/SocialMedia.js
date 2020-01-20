import React from "react"
import styled from "styled-components"

import Dribbble from "../assets/icons/dribbble.svg"
import Github from "../assets/icons/github.svg"
import Medium from "../assets/icons/medium.svg"
import Twitter from "../assets/icons/twitter.svg"
import { LINK_DRIBBBLE, LINK_GITHUB, LINK_MEDIUM, LINK_TWITTER } from "../const"

const SocialMedia = () => {
	return (
		<Wrapper>
			<IconLink link={LINK_DRIBBBLE}>
				<Dribbble />
			</IconLink>
			<IconLink link={LINK_GITHUB}>
				<Github />
			</IconLink>
			<IconLink link={LINK_MEDIUM}>
				<Medium />
			</IconLink>
			<IconLink link={LINK_TWITTER}>
				<Twitter />
			</IconLink>
		</Wrapper>
	)
}

const IconLink = ({ children, link }) => {
	return <Link href={link}>{children}</Link>
}

const Wrapper = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-auto-columns: min-content;
	gap: 12px;
	@media (min-width: 400px) {
		gap: 16px;
	}
	@media (min-width: 732px) {
		gap: 24px;
	}
	width: auto;
`

const Link = styled.a`
	width: 22px;
	height: 22px;
	@media (min-width: 400px) {
		padding: 2px;
		width: 24px;
		height: 24px;
	}
	@media (min-width: 732px) {
		width: 32px;
		height: 32px;
	}
`

export default SocialMedia
