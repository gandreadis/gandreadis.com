module.exports = {
  siteMetadata: {
    title: `Georgios Andreadis`,
    description: `MSc student Computer Science @ TU Delft | Junior Researcher @ AtLarge Research | Viola player in the Ricciotti Ensemble`,
    author: `@geoandreadis`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
      `gatsby-plugin-remove-trailing-slashes`,
  ],
}
