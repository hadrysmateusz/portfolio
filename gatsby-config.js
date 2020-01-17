module.exports = {
	siteMetadata: {
		title: `Mateusz Hadryś | Web Dev`,
		description: `My personal web development portfolio and blog.`,
		author: `Mateusz Hadryś`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `projects`,
				path: `${__dirname}/src/data`
			}
		},
		{
			resolve: `gatsby-transformer-yaml`
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Mateusz Hadryś - Portfolio`,
				short_name: `Mateusz Hadryś`,
				start_url: `/`,
				background_color: `#000000`,
				theme_color: `#F52970`,
				display: `minimal-ui`
				// TODO: add an icon
				// icon: `src/images/` // This path is relative to the root of the site.
			}
		}
	]
}
