import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
 :root {
	--font-stack: 'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
      "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

	--page-width: 1320px;
	--page-padding: 20px;
	--header-height: 60px;
	--column-width: 640px;

	--color-messenger: #009bfa;
	--color-facebook: #3c5a99;
	--color-twitter: #1da1f2;

	--color-accent-pink: #f20476;
	--color-accent-orange: #fd975e;

	--gradient-accent: linear-gradient(90deg, var(--color-accent-pink) 0%, var(--color-accent-orange) 100%);

	--border-radius-big: 60px;

	--fw-light: 300;
	--fw-normal: 400;
	--fw-medium: 500;
	--fw-semi-bold: 600;
	--fw-bold: 700;
	--fw-extra-bold: 800;
}

a,a:visited,a:link,a:hover {
	color: inherit;
	text-decoration: none;
}

*,
*::before,
*::after {
	box-sizing: border-box;
}

body {
	padding: 0;
	margin: 0;
	font-weight: 400;
	font-family: var(--font-stack);
	background: black;
	color: white;
}
`

export default GlobalStyles
