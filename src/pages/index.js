import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from '../components/SEO'
export default ({ data }) => {
  //destructing allStrapiProjects objects
  const {
    allStrapiProjects: { nodes: projects },
  } = data;

  return (
    <Layout>
      <SEO title='Home' description='Welcome to my website homepage'/>
      <Hero></Hero>
      <Services></Services>
      <Jobs />
      {/* TODO: add showLink to display link to Projectpage */}
      <Projects projects={projects} title="Projects" showLink /> 
    </Layout>
  )
}
//...GatsbyImageSharpFluid
export const query = graphql`
  {
    allStrapiProjects(filter: { featured_project: { eq: true } }) {
      nodes {
        github_url
        id
        description
        tittle
        url_toProject
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tech_tool {
          id
          name
        }
      }
    }
  }
`
