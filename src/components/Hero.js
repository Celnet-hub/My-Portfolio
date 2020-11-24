import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid
//image size = 579.323 x 605.382
const query = graphql`
  {
    file(relativePath: { eq: "myImgPort.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  //console.log(data)
  return <header className='hero'>
    <div className='section-center hero-center'>
      <article className='hero-info'>
        <div>
          <div className='underline'></div>
          <h1>Hi, i'm Dubem Celestine N</h1>
          <h4>Backend Developer</h4>
          <Link to='/contact' className='btn'>
            contact me
          </Link>
          <SocialLinks />
          <div className='underline'></div>
        </div>
      </article>
      <Image fluid={fluid} className='hero-img' />
      
    </div>
  </header>
}

export default Hero
