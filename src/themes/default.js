const breakpoints = ["640px", "832em", "1024em"]

export default {
  fontSizes: [17, 21, 25, 32, 48],
  fontWeights: {
    normal: 400,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
  },
  breakpoints,
  mediaQueries: {
    small: `@media screen and (min-width: ${breakpoints[0]})`,
    medium: `@media screen and (min-width: ${breakpoints[1]})`,
    large: `@media screen and (min-width: ${breakpoints[2]})`,
  },
  colors: {
    accent: "#ED355A",
    gray100: "#0E0D13",
    gray200: "#19181F",
    gray300: "#232427",
    gray400: "#484952",
    gray500: "#6E6F78",
    gray800: "#D8D7DA",
  },
  radii: ["80px", "14px", "8px"],
}
