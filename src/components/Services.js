import React from "react"
import Title from "./Title"
import services from "../constants/services"
const Services = () => {
  return (<section>
    <Title title='What I do'></Title>
    <div className='section-center services-center'>
      {services.map(myServices => {
        const { id, icon, title, text } = myServices
        return (
          <article key={id} className='service'>
            {icon}
            <h4>{title}</h4>
            <div className='underline'></div>
            <p>{text}</p>
          </article>
        )
      })}
    </div>
  </section>)
}

export default Services
