import React from "react"
import styled, { css } from "styled-components/macro"
import { resetButtonStyles, gradientText } from "../styleUtils"

const buttonSizes = {
	normal: css`
		--border-width: 2px;
		--height: 32px;
		--padding: 0 24px;
		--font-size: 11px;
		--line-height: 16px;
		--border-radius: calc(var(--height) / 2);

		@media (min-width: 560px) {
			--border-width: 3px;
			--height: 60px;
			--border-radius: calc(var(--height) / 2);
			--padding: 0 44px;
			--font-size: 20px;
			--line-height: 32px;
		}
	`
}

const buttonVariants = {
	normal: css`
		background: black;
		color: white;
		--border-color: white;
		:hover,
		:active {
			--border-color: white;
			background: black;
			color: white;
		}
	`,
	primary: css`
		border: none;
		background: var(--gradient-accent);
		border-radius: var(--border-radius);
		padding: 0;

		.button-inner-container {
			height: calc(100% - 2 * var(--border-width));
			width: calc(100% - 2 * var(--border-width));
			border-radius: calc(var(--height) - calc(var(--border-width) * 2) / 2);
			background: black;
		}

		.button-content {
			${gradientText(`var(--gradient-accent)`)}
		}
	`,
	"text-only": css`
		background: none;
		box-shadow: none;
		color: #383838;
		:hover,
		:active {
			box-shadow: none;
			background: none;
			color: black;
			text-decoration: underline;
		}
	`
}

const OuterContainer = styled.button`
	${resetButtonStyles}
	/* animation */
	transition-property: background, color, box-shadow;
	transition-duration: 200ms;
	transition-timing-function: ease;
	/* display & position */
	height: var(--height);
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	/* typography */
	font-size: var(--font-size);
	line-height: var(--line-height);
	font-weight: var(--fw-semi-bold);
	white-space: nowrap;
	/* misc */
	border: var(--border-width) solid var(--border-color);
	border-radius: var(--border-radius);
	cursor: pointer;
	svg {
		margin-right: 8px;
		margin-left: -8px;
		/* media query is the easiest way to modify the icons on mobile */
		@media (max-width: 560px) {
			margin-right: 0;
			margin-left: -8px;
			transform: scale(0.6);
		}
	}
	.button-inner-container {
		padding: var(--padding);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.button-content {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	/* variant overrides */
	${(p) => buttonVariants[p.variant]}
	${(p) => buttonSizes[p.size]}
`

const Button = ({ children, variant, size }) => {
	return (
		<OuterContainer variant={variant} size={size}>
			<div className="button-inner-container">
				<div className="button-content">{children}</div>
			</div>
		</OuterContainer>
	)
}

Button.defaultProps = {
	variant: "normal",
	size: "normal"
}

export default Button
