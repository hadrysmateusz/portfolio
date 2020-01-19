import styled, { css } from "styled-components/macro"

const buttonSizes = {
	normal: css`
		border-radius: 30px;
		font-size: 20px;
		line-height: 32px;
		height: 60px;
		padding: 0 44px;
		@media (min-width: 732px) {
			font-size: 20px;
			line-height: 32px;
			height: 60px;
			padding: 0 44px;
		}
	`
}

const buttonVariants = {
	normal: css`
		background: black;
		color: white;
		:hover,
		:active {
			background: black;
			color: white;
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

const Button = styled.button`
	cursor: pointer;
	position: relative;
	display: block;
	border: 3px solid white;
	transition-property: background, color;
	transition-duration: 200ms;
	transition-timing-function: ease;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: var(--fw-semi-bold);
	white-space: nowrap;
	svg {
		margin-right: 8px;
		margin-left: -8px;
	}
	${(p) => buttonVariants[p.variant]}
	${(p) => buttonSizes[p.size]}
`

Button.defaultProps = {
	variant: "normal",
	size: "normal"
}

export default Button
