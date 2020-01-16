import styled, { css } from "styled-components/macro"

const internalLinkStyles = css`
	a,
	a:visited {
		color: var(--gradient-accent);
		text-decoration: underline;
	}
`

export const TextBlock = styled.div`
	color: #e2e2e2;

	margin: 16px auto 24px;
	font-size: 14px;
	line-height: 20px;

	@media (min-width: 732px) {
		margin: 24px auto 32px;
		font-size: 18px;
		line-height: 24px;
	}

	${internalLinkStyles}
`

const heading = css`
	margin: 0;
	font-weight: var(--fw-bold);
	letter-spacing: -0.01em;
	color: white;

	${internalLinkStyles}
`

export const H1 = styled.h1`
	${heading}
	font-size: 48px;
	line-height: 72px;
	@media (min-width: 732px) {
		font-size: 48px;
		line-height: 72px;
	}
`
export const H2 = styled.h2`
	${heading}
	font-size: 24px;
	line-height: 36px;
	@media (min-width: 732px) {
		font-size: 48px;
		line-height: 72px;
	}
`
export const H3 = styled.h3`
	${heading}
	font-size: 18px;
	line-height: 24px;
	@media (min-width: 732px) {
		font-size: 40px;
		line-height: 56px;
	}
`
