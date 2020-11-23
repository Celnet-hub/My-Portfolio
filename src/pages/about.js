import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from '../components/SEO'
// ...GatsbyImageSharpFluid
const About = ({
  data: {
    allStrapiAbout: { nodes },
  },
}) => {
  //destructure the nodes array
  const { tittle, stack, info, image } = nodes[0]
  return (
    <Layout>
      <SEO title="About" description="about page" />
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            <Title tittle={tittle} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(tech_stack => {
                return <span key={tech_stack.id}>{tech_stack.name}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        stack {
          id
          name
        }
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        info
        tittle
      }
    }
  }
`

export default About
