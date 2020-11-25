//setting up my Search Engine Optimization file.
import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        image
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
  }
`

const SEO = ({ title, description }) => {
  //destructing the site object
  const { site } = useStaticQuery(query)
  const {
    author,
    siteDesc,
    image,
    siteUrl,
    siteTitle,
    twitterUsername,
  } = site.siteMetadata
  return (
    <Helmet title={`${title} | ${siteTitle}`} htmlAttributes={{ lang: "en" }}>
      <meta name="description" content={siteDesc || description} />
      <meta name="image" content={image} />
      <meta name="author" content={author} />
      {/* twitter card setup */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator's_account" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      {/* <meta name="twitter:image" content={`${siteUrl}${image}`} /> */}
    </Helmet>
  )
}

export default SEO
