import React from "react"
import Layout from "../components/Layout"
import SEO from '../components/SEO'

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" description="contact page" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>Contact me, let's build...</h3>
          <form action="https://formspree.io/f/mdopdvrr" method="POST">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="name"
                name="name"
              />
              <input
                type="email"
                className="form-control"
                placeholder="email"
                name="email address"
                required
              />
              <textarea
                name="message"
                rows="10"
                className="form-control"
                placeholder="message"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
