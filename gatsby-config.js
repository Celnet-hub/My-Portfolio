/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "DCN Portfolio",
    description: "My Portfolio WebSite",
    author: "@Dubem Celestine Nwabuisi",
    twitterUsername: "@nwabuisicelest1",
    // image: "/twitter-img.png",
    siteUrl: "https://testing-strapi-gatsby-build.netlify.app",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        //   contentTypes : `jobs`, `projects`, `blogs`,
        //   singleType : `about`
        //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!! this helps query your API
        contentTypes: [`job-experiences`, `projects`],
        singleTypes: [`about`],
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Roboto`,
    //         variants: [`400`, `700`],
    //       },
    //       {
    //         family: `Open Sans`,
    //       },
    //     ],
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `Montserrat Alternates`,
    //       `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
    //     ],
    //     display: "swap",
    //   },
    // },
  ],
}
