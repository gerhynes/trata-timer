module.exports = {
  siteMetadata: {
    title: `Tráta Timer`,
    description: `I'm not sure if Gatsby is overkill for a Pomodoro timer, but let's find out.`,
    author: `Gerard Hynes`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `ga`],
        // language file path
        defaultLanguage: `ga`,
        // option to redirect to `/ga` when connecting `/`
        redirect: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#DC2626`,
        theme_color: `#DC2626`,
        display: `minimal-ui`,
        icon: `src/images/tomato.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
