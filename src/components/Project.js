//This file randers individual project element in the the projects.js component.

import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({description, tittle,github_url,tech_tool,url_toProject,image,index}) => {
  //console.log(tech_tool);
  return (
    <article className="project">
      <Image fluid={image.childImageSharp.fluid} className="project-img" />
      <div className="project-info">
        <span className="project-number">0{index + 1}...</span>
        <h3>{tittle}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {tech_tool.map(item => {
            return <span key={item.id}>{item.name}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github_url} target="_blank">
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url_toProject} target="_blank">
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {}

export default Project
