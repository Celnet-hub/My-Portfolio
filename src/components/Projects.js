import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
const Projects = ({ projects, title, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((my_project, index) => {
          return <Project key={my_project.id} index={index} {...my_project} />
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          All Projects
        </Link>
      )}
    </section>
  )
}

export default Projects
