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

	--color-accent: #ED355A;

	--gradient-black: linear-gradient(to bottom, #161616, black);

	--gray-100: #0E0D13;
	--gray-200: #19181F;
	--gray-300: #232427;
	--gray-400: #484952;
	--gray-500: #6E6F78;
	--gray-800: #c1c2c4;

	--border-radius-big: 60px;
	--border-radius-md: 14px;
	--border-radius-sm: 8px;

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
	background: var(--gray-100);
	color: white;
	line-height: 1.6;
}

[id] {
	scroll-margin-top: calc( var(--header-height) + 24px );
}
`

export default GlobalStyles
