import React from "react"
import Layout from "../components/Layout"
import { AiFillAmazonCircle } from "react-icons/ai"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (<Layout>
    <main className='error-page'>
      <div className='error-container'>
        {/* <AiFillAmazonCircle></AiFillAmazonCircle> */}
        <h1>Sorry content is not available</h1>
        <Link to='/' className='btn'>go home</Link>
      </div>
    </main>
  </Layout>)
}

export default Error
