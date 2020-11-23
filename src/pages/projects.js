//this code is for the all projects in project page.

import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from '../components/SEO'
// ...GatsbyImageSharpFluid

const ProjectsPage = ({ data:{allStrapiProjects:{nodes:project}} }) => {
  return (
    <Layout>
      <SEO title="Projects" description="All projects page" />
      <section className="projects-page">
        <Projects projects={project} title="all projects"></Projects>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects{
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


export default ProjectsPage
