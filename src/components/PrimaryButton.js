import React from "react"
import styled from "styled-components"

import { gradientText, resetButtonStyles } from "../styleUtils"

const PrimaryButton = ({ children }) => {
	return (
		<OuterContainer>
			<InnerContainer>
				<Content>{children}</Content>
			</InnerContainer>
		</OuterContainer>
	)
}

const OuterContainer = styled.button`
	--border-width: 3px;
	--height: 60px;

	${resetButtonStyles}

	height: var(--height);
	border-radius: calc(var(--height) / 2);
	background: var(--gradient-accent);
`

const InnerContainer = styled.div`
	/* background: black; */
	height: calc(100% - 2 * var(--border-width));
	width: calc(100% - 2 * var(--border-width));
	border-radius: calc(var(--height) - calc(var(--border-width) * 2) / 2);
	margin-left: var(--border-width);
	background: black;
	padding: 0 44px;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Content = styled.div`
	${gradientText(`var(--gradient-accent)`)}
	font-size: 20px;
	line-height: 32px;
	font-weight: var(--fw-semi-bold);
	white-space: nowrap;
`

export default PrimaryButton
