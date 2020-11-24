import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
// import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobExperiences(sort: { fields: id, order: DESC }) {
      nodes {
        strapiId
        company
        duration
        position
        work_done {
          id
          actual_work_done
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJobExperiences: { nodes: jobs },
  } = data
  //console.log(jobs);
  const [value, setValue] = React.useState(0) //read about this line. note value = 0 bcosof useState(0)
  const { company, position, duration, work_done } = jobs[value]
  //console.log(company, position)

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {/*iterate through the jobs component */}
          {jobs.map((job_expirence, index) => {
            // console.log(job_expirence.strapiId, job_expirence.company)
            return (
              <button
                key={job_expirence.strapiId}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {job_expirence.company}
              </button>
            )
          })}
        </div>
        {/* job information */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{duration}</p>
          {work_done.map(job_descrip => {
            return (
              <div key={job_descrip.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{job_descrip.actual_work_done}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default Jobs
